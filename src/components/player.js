import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Playercomp ({name, age, team, nationality, jerseyNumber, image}) {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{age}</ListGroup.Item>
          <ListGroup.Item>{team}</ListGroup.Item>
          <ListGroup.Item>{nationality}</ListGroup.Item>
          <ListGroup.Item>{jerseyNumber}</ListGroup.Item>
        </ListGroup>
      </Card>     
    )
}

export default Playercomp