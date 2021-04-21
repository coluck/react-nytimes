import React from "react";

import { getFirst, getAttr, getAllItem } from "../utils.js";

import "./Main.css";
import categoryData from "../categoryData";
import CategoryList from "./CategoryList";
import CategoryListMobile from "./CategoryListMobile";
import NewsItem from "./NewsItem";
import RightPanel from "./RightPanel";
import GoTop from "./GoTop";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: categoryData,
      activeCategory: 1,
      newsList: [],
      errorMessage: "",
      xmlUrl: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.fetchXML(this.state.xmlUrl);
  }

  fetchXML(url) {
    fetch(url)
      .then((res) => res.text())
      .then((txt) => this.parseXML(txt))
      .catch((err) => this.setState({ errorMessage: err }));
  }
  parseXML(txt) {
    let xmlDoc = new DOMParser().parseFromString(txt, "text/xml");
    let items = xmlDoc.getElementsByTagName("item");
    let news = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      news.push({
        title: getFirst(item, "title"),
        link: getFirst(item, "link"),
        dcCreator: getFirst(item, "dc:creator", "No Creator"),
        description: getFirst(item, "description", "No Description"),
        pubDate: getFirst(item, "pubDate"),
        credit: getFirst(item, "media:credit", "No Credit"),
        image: getAttr(item, "media:content", "url", null),
        categories: getAllItem(item, "category", "[]"),
      });
    }
    this.setState({ newsList: news });
  }
  handleClick(category) {
    this.setState({ errorMessage: "" });
    let url = `https://rss.nytimes.com/services/xml/rss/nyt/${category.url}.xml`;
    this.setState({ xmlUrl: url, activeCategory: category.id });
    this.fetchXML(url);
    document.documentElement.scrollTop = 0;
  }

  render() {
    const newsList = this.state.newsList.map((news) => {
      return <NewsItem news={news} key={news.link} />;
    });
    const categories = this.state.categories;
    return (
      <div className="container">
        <CategoryListMobile
          categories={categories}
          active={this.state.activeCategory}
          onClick={this.handleClick}
        />
        <div className="columns mt-2">
          <div className="column is-3 is-hidden-mobile is-fullheight">
            <CategoryList
              categories={categories}
              active={this.state.activeCategory}
              onClick={this.handleClick}
            />
          </div>
          <div className="column is-6">
            <h1 className="subtitle has-text-centered">News</h1>
            {this.state.errorMessage && (
              <div className="notification is-danger">
                {this.state.errorMessage}
              </div>
            )}
            {newsList}
          </div>
          <div className="column is-3">
            <RightPanel />
          </div>
        </div>
        <GoTop />
      </div>
    );
  }
}

export default App;
