import { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li className="d-flex justify-content-between mb-2 mt-2 listItem">
        <span>{this.props.description}</span>
        <div>
          <button className="btn btn-success mr-2">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </li>
    );
  }
}

export default ListItem;
