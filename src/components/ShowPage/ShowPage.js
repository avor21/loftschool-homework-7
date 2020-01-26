import React, {Component} from "react";
import {connect} from 'react-redux';
import { fetchShowRequest } from '../../actions';
import { getEntitiesSelector, getIsFetchingEntitiesSelector } from '../../reducers';
import './ShowPage.css';
import {Segment, Item} from "semantic-ui-react";

class ShowPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchShowRequest(id);
  }

  render() {
    const { show, isFetching } = this.props;
    const { id, name, summary,
      image } = this.props.show;

    return (
      <Segment loading={isFetching}>
        <Item.Group>
          <Item>
            <Item.Image src={image && image.medium}/>
            <Item.Content>
              <Item.Header>{name}</Item.Header>
              <Item.Description dangerouslySetInnerHTML={{__html: summary}} />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}

export default connect(state => ({
  show: getEntitiesSelector(state),
  isFetching: getIsFetchingEntitiesSelector(state)
}), { fetchShowRequest })(ShowPage);