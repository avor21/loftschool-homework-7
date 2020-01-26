import React, { Component } from "react";
import { connect } from 'react-redux';
import { searchRequest } from '../../actions'
import {
  getSearchResultSelector,
  getIsFetchingSelector,
  getIsFetchedSelector } from '../../reducers'
import ShowCard from "../ShowCard";
import { Card } from "semantic-ui-react";

import './Search.css';


class Search extends Component {
  state = {
    query: '',
    lastQuery: ''
  };

  render() {
    const { query, lastQuery } = this.state;
    const { shows, isFetching, isFetched } = this.props;

    return (
      <div className="search">
        <form className="search-panel-wrapper" onSubmit={this.handleSubmit} >
          <input className="search-field"
                 onChange={this.handleChange}
                 value={query}
                 placeholder="Поиск фильма"/>
          <button className="search-btn">Найти</button>
        </form>
        <div className="content-wrapper" >
          <h4>{ isFetching && 'Идёт поиск сериала. Пожалуйста, подождите...' }</h4>
          <h4>{ isFetched && `Результаты поиска по запросу: "${lastQuery}"`}</h4>
          <Card.Group>
            { shows.map(show => <ShowCard key={show.id} show={show}/>) }
          </Card.Group>
        </div>
      </div>
    );
  }

  handleChange = (event) => this.setState({ query: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchRequest } = this.props;
    const { query } = this.state;

    this.setState({ lastQuery: query});
    searchRequest(query);
  };

}

export default connect(state => ({
  shows: getSearchResultSelector(state),
  isFetching: getIsFetchingSelector(state),
  isFetched: getIsFetchedSelector(state)
}), { searchRequest })(Search);