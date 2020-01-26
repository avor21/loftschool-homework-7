import React, { Component } from "react";
import {Card, Icon, Image, Label} from 'semantic-ui-react'

class ShowCard extends Component {
  render() {
    const { url, name, summary,
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
          <a href={url}>
            <Icon name="film"/>
            Перейти на страницу сериала
          </a>
        </Card.Content>
      </Card>
    );
  }
}

export default ShowCard;