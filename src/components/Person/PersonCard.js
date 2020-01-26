import React from "react";
import {Card, Icon, Image, Label} from "semantic-ui-react";

const PersonCard = ({person}) => {
  const { name, birthday, image, gender } = person;
  return (
    <Card>
      <Card.Content>
        <Image src={image && image.medium}
               size="tiny"
               floated="left"
               rounded >
          {image === null ? <Label content="Image not found" icon="warning"/> : null}
        </Image>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <Icon name="birthday" />
          <span>{birthday}</span>
        </Card.Meta>
        <Card.Meta>
          <Icon name="user" />
          <span>{gender}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default PersonCard;