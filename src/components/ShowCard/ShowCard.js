import React from "react";
import {Card, Icon, Image, Label} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const ShowCard = (props) => {
  const { id, name, summary,
  image, rating: { average : avgRating} } = props.show;

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
        <Icon name="film"/>
        <Link to={`/shows/${id}`}>Перейти на страницу сериала</Link>
      </Card.Content>
    </Card>
  );
};

export default ShowCard;