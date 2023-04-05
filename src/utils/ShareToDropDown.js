import React from 'react';
import { Button } from 'react-bootstrap';

function ShareToDropdown({ nft }) {
  const openWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=Check out my diploma! ${nft.diplomaId}`);
  };

  const openLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${nft.diplomaId}`);
  };

  const openEmail = () => {
    window.open(`mailto:?subject=Check out my diploma!&body=${nft.diplomaId}`);
  };

  const openTelegram = () => {
    window.open(`https://t.me/share/url?url=${nft.diplomaId}`);
  };

  // ...


  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'transparent',
        padding: '10px',
        borderRadius: '5px',
        marginTop: '5px',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      className="share-to-dropdown"
    >
      <button
        style={{
          borderRadius: '20px',
          backgroundColor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          padding: '5px',
        }}
        onClick={openWhatsApp}
      >
        <img
          src="https://img.icons8.com/color/30/000000/whatsapp.png"
          alt="WhatsApp"
          style={{ marginRight: '5px' }}
        />
        WhatsApp
      </button>
      <button
        style={{
          borderRadius: '20px',
          backgroundColor: '#0A66C2',
          display: 'flex',
          alignItems: 'center',
          padding: '5px',
        }}
        onClick={openLinkedIn}
      >
        <img
          src="https://img.icons8.com/color/30/000000/linkedin.png"
          alt="LinkedIn"
          style={{ marginRight: '5px' }}
        />
        LinkedIn
      </button>
      <button
        style={{
          borderRadius: '20px',
          backgroundColor: '#DD4B39',
          display: 'flex',
          alignItems: 'center',
          padding: '5px',
        }}
        onClick={openEmail}
      >
        <img
          src="https://img.icons8.com/color/30/000000/email.png"
          alt="Email"
          style={{ marginRight: '5px' }}
        />
        Email
      </button>
      <button
        style={{
          borderRadius: '20px',
          backgroundColor: '#0088cc',
          display: 'flex',
          alignItems: 'center',
          padding: '5px',
        }}
        onClick={openTelegram}
      >
        <img
          src="https://img.icons8.com/color/30/000000/telegram-app.png"
          alt="Telegram"
          style={{ marginRight: '5px' }}
        />
        Telegram
      </button>
    </div>
  );
}

export default ShareToDropdown;
