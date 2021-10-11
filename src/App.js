import React, { Component } from "react";
import { AddListItemForm } from "./components/AddListItemForm";
import { List } from "./components/List";

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
    };
  this.addItemToList = this.addItemToList.bind(this);
  };

  addItemToList(newItem) {
    this.setState(prevState => {
      const items = [...prevState.items];
      items.push(newItem);
      return {items}
    }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <>
        <List items={this.state.items} />
        <AddListItemForm onSubmit={this.addItemToList}/>
      </>
    );
  };
};
