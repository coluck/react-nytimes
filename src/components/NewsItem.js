import React from "react";

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  date(dateStr) {
    return new Date(dateStr.toString()).toLocaleDateString();
  }

  render() {
    return (
      <article className="media">
        <figure className="media-left">
          <p className="image is-128x128">
            <img src={this.props.news.image || "./logo192.png"} alt="news" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <strong> {this.props.news.title}x </strong>
            <br />
            <div>
              <div className="is-size-7 has-text-right">
                {new Date(this.props.news.pubDate).toLocaleDateString()}
              </div>
              {this.props.news.description}
              <br />
              <small className="is-size-7">
                @ {this.props.news.dcCreator}{" "}
              </small>
            </div>
          </div>
        </div>
        <div className="media-right">
          <a
            href="/"
            target="_blank"
            rel="noopener"
            className="button is-small is-rounded is-primary is-outlined"
          >
            {">"}
          </a>
        </div>
      </article>
    );
  }
}

export default NewsItem;
