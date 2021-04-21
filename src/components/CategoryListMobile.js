/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import CategoryItem from "./CategoryItem";

export class CategoryList extends Component {
  handleClick = (category) => {
    this.props.onClick(category);
  };
  render() {
    const categories = this.props.categories.map((category) => {
      return (
        <CategoryItem
          key={category.id}
          category={category}
          active={category.id === this.props.active}
          onClick={this.handleClick}
        />
      );
    });
    return (
      <div className="level is-mobile is-hidden-tablet sticky">
        <div className="level-left">
          <div className="level-item">
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  className="button is-primary"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu4"
                >
                  {this.props.categories[this.props.active - 1].name}
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                <div className="dropdown-content">
                  <div className="dropdown-item">
                    <ul className="menu-list">{categories}</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item subtitle mr-4">
            <a
              href="https://github.com/coluck/react-nytimes"
              className="has-text-white"
            >
              react-nytimes
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryList;
