import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NFTCard({ nft, }) {

  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/${nft.diplomaId}`);
  };

  return (
    // <Card style={{ width: '17rem', margin: '10px', borderRadius: '20px', padding:'5px' }}>
    //   <Card.Img variant="top" src={nft.image} style={{ borderRadius: '20px', padding:'3px', height:'200px'}} />
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Text> {nft.fullName}</Card.Text>
        <Button variant="primary" onClick={handleDetailsClick}>Показать детали</Button>
        <div className="text-center" style={{ marginTop: '10px' }}>
          <div style={{ display: 'inline-block', position: 'relative' }}>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default NFTCard;
