import { useState, useEffect } from 'react';
import nftContract from './contracts/NFTContract';
import Home from './pages/Home';


function App() {
  const [nftData, setNftData] = useState([]);

  useEffect(() => {
    const fetchNftData = async () => {
      try {
        const totalSupply = await nftContract.totalSupply(); // get the total supply of the NFTs
        const nftDataArr = [];

        for (let i = 1; i <= totalSupply; i++) {
          const tokenId = await nftContract.tokenByIndex(i - 1); // get the token ID of the NFT
          const tokenUri = await nftContract.tokenURI(tokenId); // get the token URI of the NFT
          const response = await fetch(tokenUri);
          const metadata = await response.json();
          nftDataArr.push(metadata);
        }

        setNftData(nftDataArr);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNftData();
  }, []);

  return (
    <div className="App">
      <h1>NFTs</h1>
      <div>
      <Home />
    </div>
      {nftData.map((metadata, index) => (
        <div key={index}>
          <img src={metadata.image} alt={metadata.name} />
          <p>Name: {metadata.name}</p>
          <p>Description: {metadata.description}</p>
          <p>Token ID: {metadata.tokenId}</p>
          <p>Owner: {metadata.owner}</p>
        </div>
        
      ))}
    </div>
  );
}

export default App;
