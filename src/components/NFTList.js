import React from 'react';

function NFTList({ nfts, renderItem, itemsPerRow }) {
  const groupedNFTs = nfts.reduce((rows, key, index) => {
    return (index % itemsPerRow === 0 ? rows.push([key])
      : rows[rows.length-1].push(key)) && rows;
  }, []);

  return (
    <div>
      {groupedNFTs.map((row, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'center', padding:'10px' }}>
          {row.map(renderItem)}
        </div>
      ))}
    </div>
  );
}

export default NFTList;
