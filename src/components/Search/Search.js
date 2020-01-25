import React, { Component } from "react";
import { connect } from 'react-redux';
import { searchRequest } from '../../actions'

import './Search.css';

class Search extends Component {
  state = {
    query: ''
  };

  render() {
    const { query } = this.state;

    return (
      <div className="search">
        <div className="search-panel-wrapper">
          <input className="search-field"
                 onChange={this.handleChange}
                 value={query}
                 placeholder="Поиск фильма"/>
          <button className="search-btn"
                  onClick={this.handleClick}>
            Найти
          </button>
        </div>
      </div>
    );
  }

  handleChange = (event) => this.setState({ query: event.target.value });

  handleClick = () => {
    console.log(this.props);
    this.props.searchRequest();
  };

}

export default connect(null, { searchRequest })(Search);