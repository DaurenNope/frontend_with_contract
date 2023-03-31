import React from 'react';

function Header() {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Narhoz University</div>
      <div style={{ fontSize: '24px', fontWeight: 'bold' }}>NFT-Diploma-Portal</div>
    </header>
  );
}

export default Header;
