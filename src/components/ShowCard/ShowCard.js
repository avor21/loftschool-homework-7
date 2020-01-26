import React, {Component} from "react";
import {Button, Card, Icon, Image, Label} from 'semantic-ui-react'
import {connect} from "react-redux";
import {fetchShowRequest} from '../../actions'

class ShowCard extends Component{
  render() {
    const { id, name, summary,
    image, rating: { average : avgRating} } = this.props.show;

    return (
      <Card>
        <Card.Content>
          <Image src={image && image.medium}
                 size="small"
                 floated="right"
                 rounded >
            {image === null ? <Label content="Image not found" icon="warning"/> : null}
          </Image>
          <Card.Header>{name}</Card.Header>
          {
            avgRating !== null
            ? <Card.Meta>
                <Icon color="yellow" name="star" />
                <span>{avgRating}</span>
              </Card.Meta>
            : null
          }
          <Card.Description dangerouslySetInnerHTML={{__html: summary}} />
        </Card.Content>
        <Card.Content extra>
          <Button basic fluid onClick={() => this.onClickHandler(id)}>
            <Icon name="film"/>
            Перейти к сериалу
          </Button>
        </Card.Content>
      </Card>
    );
  }

  onClickHandler = (id) => this.props.fetchShowRequest(id);

}

export default connect(null, { fetchShowRequest })(ShowCard);