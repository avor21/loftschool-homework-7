import React, {Component} from "react";
import {connect} from 'react-redux';
import { fetchShowRequest } from '../../actions';
import { getEntitiesSelector, getIsFetchingEntitiesSelector } from '../../reducers';
import './ShowPage.css';
import {Segment, Item, Card} from "semantic-ui-react";
import PersonCard from "../Person";

class ShowPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchShowRequest(id);
  }

  render() {
    const { show, isFetching } = this.props;

      return (
        <div>
          {
            !isFetching && show
              ? this.renderContent()
              : <p>Загрузка...</p>
          }
        </div>
      )

  }

  renderContent() {
    return (
      <div>
        { this.renderShowInfo() }
        { this.renderShowCast() }

      </div>

    );

  };

  renderShowInfo = () => {
    const {name, summary, image} = this.props.show;
    return (
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image src={image && image.medium}/>
            <Item.Content>
              <Item.Header>{name}</Item.Header>
              <Item.Description dangerouslySetInnerHTML={{__html: summary}}/>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  };
  renderShowCast = () => {
    const { _embedded: { cast } } = this.props.show;
    return (
      <Segment>
        <h2>Show Cast</h2>
        <Card.Group>
          { cast.map(({person}) => <PersonCard key={person.id} person={person}/>) }
        </Card.Group>
      </Segment>
    );
  };
}

export default connect(state => ({
  show: getEntitiesSelector(state),
  isFetching: getIsFetchingEntitiesSelector(state)
}), { fetchShowRequest })(ShowPage);