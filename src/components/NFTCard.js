import React from 'react';
import { Card } from 'react-bootstrap';

function NFTCard({ nft }) {
  return (
    <Card style={{ width: '20rem', margin: '10px' }}>
      <Card.Img variant="top" src={nft.image} />
      <Card.Body>
      <Card.Text>Full Name: {nft.fullName}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{nft.major}</Card.Subtitle>
        <Card.Text>Graduation Date: {nft.graduationDate}</Card.Text>
        <Card.Text>Diploma ID: {nft.diplomaId}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NFTCard;
