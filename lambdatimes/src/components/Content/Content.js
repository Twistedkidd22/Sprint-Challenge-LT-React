import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props){
    super(props);
    this.state = {
      // Set this to an initial value
      selected: 'all',
      tabs: [],
      cards: []
    }
  }

  componentDidMount(){
    // Once the component has mounted, get the data and reflect that data on the state
    let tabs = this.state.tabs.slice();
    tabs = tabData;
    let cards = this.state.cards.slice();
    cards = cardData;
    this.setState({tabs, cards});
  }

  changeSelected = (tab) => {
    return () => {
      // Finish this function, reflecting the new selected tab in the state
      let selected = tab
      this.setState({selected})
    }
  }

  /* Complete this function, if the selected tab is 'all' it should return all
     of the items from cardData. If it is something else, it shoudl only return
     those cards whose 'tab' mached that which is selected. */
  filterCards = () => {
    let filtered = [];
    if (this.state.selected === 'all') {
      return this.state.cards;
    } else {
      this.state.cards.forEach(card => {
        if (card.tab === this.state.selected) {
          filtered.push(card)
        }
      })
      return filtered;
    }

  }

  render(){
    return (
      <div className="content-container">
        {/*
          Add 2 props to the Tabs component,
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected} />
        <Cards cards={this.filterCards()}/>
      </div>
    )
  }
}
