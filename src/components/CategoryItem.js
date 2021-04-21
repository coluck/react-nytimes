/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export class CategoryItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.category);
  };
  render() {
    let className = "list-group-item list-group-item-action";
    if (this.props.active) className += " is-active";
    return (
      <li>
        <a type="button" className={className} onClick={this.handleClick}>
          {this.props.category.name}
        </a>
      </li>
    );
  }
}

export default CategoryItem;
