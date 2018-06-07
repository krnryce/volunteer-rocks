import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container,
  Row, Col } from 'reactstrap';

import Map from './Map.jsx';


const Ops = function(props) {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col xs="8">
            <CardTitle>{props.opportunity.title}</CardTitle>
            <CardSubtitle>{props.opportunity.cause}</CardSubtitle>
            <CardText>{props.opportunity.description}</CardText>
            <CardText>{props.opportunity.street}</CardText>
            <CardText>{props.opportunity.city}, {props.opportunity.state} {props.opportunity.zipCode}</CardText>
          </Col>
          <Col xs="4">
          <Map op={props.opportunity} />
            {/* <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */}
          </Col>
        </Row>
        <Button>Volunteer</Button>
      </CardBody>
    </Card>
  );
};

export default Ops;