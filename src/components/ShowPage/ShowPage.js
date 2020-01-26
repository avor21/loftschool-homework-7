import React, {Component} from "react";
import {connect} from 'react-redux';
import { fetchShowRequest } from '../../actions';
import { getEntitiesSelector, getIsFetchingEntitiesSelector } from '../../reducers';
import './ShowPage.css';

class ShowPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchShowRequest(id);
  }

  render() {
    const { show, isFetching } = this.props;

    if (isFetching) {
      return <h4>Загрузка данных о сериале</h4>;
    }

    return (
      <div>
        <p>{show.id}</p>
      </div>
    );
  }
}

export default connect(state => ({
  show: getEntitiesSelector(state),
  isFetching: getIsFetchingEntitiesSelector(state)
}), { fetchShowRequest })(ShowPage);