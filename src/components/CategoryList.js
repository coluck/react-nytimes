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
      <div className="menu sticky">
        <h1 className="subtitle has-text-centered">Categories</h1>
        <ul className="menu-list">{categories}</ul>
      </div>
    );
  }
}

export default CategoryList;
