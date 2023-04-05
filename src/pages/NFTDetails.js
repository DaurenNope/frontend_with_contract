import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NFTCard from '../components/NFTCard';
import nft from '../components/nft'
import ShareToDropdown from '../utils/ShareToDropDown';
import { BsBoxArrowInDown, BsShare } from 'react-icons/bs';
import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaTelegram, FaLinkedin } from 'react-icons/fa';

const openQR = () => {
  window.open('https://example.com/qr-code');
};



const NFTDetails = () => {
  const { id } = useParams(); // Get the id from the URL parameter
  // TODO: fetch NFT data using id
  const selectedNFT = nft.find((nft) => nft.diplomaId === id);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };


  return (
    <div>
      <Container className="my-4 d-flex justify-content-center">
        <Row>
          <Col xs={12} md={6}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={selectedNFT.image} alt="Diploma" style={{ maxWidth: "100%", height: "auto", maxHeight: "500px" }} />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <h1>{selectedNFT.fullName}</h1>
              <h3 style={{text:"bold"}}>{selectedNFT.degree}</h3>
              <h3>{selectedNFT.major}</h3>
              <h3>GPA: {selectedNFT.GPA}</h3>
              <h3> {selectedNFT.LatinHonors}</h3>
              <h3>ВУЗ Вручения(И Год вручения): {selectedNFT.commencementDate}</h3>
              <h3>ВУЗ Поступления (И Год поступления): {selectedNFT.admissionDate}</h3>
              <h3>Дата Окончания: {selectedNFT.graduationDate}</h3>





              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <Button variant="primary" size="sm" style={{ borderRadius: '20px', marginLeft: '5px' }} onClick={openQR}>
                  <BsBoxArrowInDown style={{ marginRight: '5px' }} />
                  Open QR
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  style={{ borderRadius: '20px', marginLeft: '5px', backgroundColor: '#1DA1F4' }}
                  onClick={toggleDropdown}
                  className="share-to-btn"
                >
                  <BsShare style={{ marginRight: '5px' }} />
                  Share QR
                </Button>
              </div>
              {showDropdown && (
                <ShareToDropdown
                  nft={nft}
                  onWhatsAppClick={() => window.open(NFTCard.whatsapp(selectedNFT.diplomaId))}
                  onLinkedInClick={() => window.open(NFTCard.linkedin(selectedNFT.diplomaId))}
                  onEmailClick={() => window.open(NFTCard.email(selectedNFT.diplomaId))}
                  onTelegramClick={() => window.open(NFTCard.telegram(selectedNFT.diplomaId))}
                />
              )}
              <div style={{ display: 'flex', justifyContent: 'center', marginLeft: '10px', padding: '20px' }}>
                <FaWhatsapp size={20} style={{ marginRight: '10px' }} />
                <FaEnvelope size={20} style={{ marginRight: '10px' }} />
                <FaTelegram size={20} style={{ marginRight: '10px' }} />
                <FaLinkedin size={20}/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );  
};

export default NFTDetails;
