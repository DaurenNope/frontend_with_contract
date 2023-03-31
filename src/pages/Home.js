import React, { useState } from 'react';
import { Container, Col } from 'react-bootstrap';
import NFTCard from '../components/NFTCard';
import NFTList from '../components/NFTList';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import nft from '../components/nft';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredNFTs, setFilteredNFTs] = useState(nft);

  const handleSearch = (searchTerm) => {
    const filteredNFTs = nft.filter((nft) => {
      return (
        (nft.name && nft.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (nft.major && nft.major.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (nft.graduationDate && nft.graduationDate.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (nft.fullName && nft.fullName.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (nft.diplomaId && nft.diplomaId.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
    setSearchTerm(searchTerm);
    setFilteredNFTs(filteredNFTs);
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', padding: "10px" }}>
        <Container fluid>
          <Col xs="auto" className="mb-4 justify-content-center">
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
          </Col>
          <NFTList nfts={filteredNFTs} renderItem={(nft) => <NFTCard nft={nft} />} itemsPerRow={4} />
        </Container>
      </div>
    </>
  );
}

export default Home;
