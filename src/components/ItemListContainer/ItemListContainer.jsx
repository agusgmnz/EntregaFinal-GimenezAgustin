import React from 'react';

const ItemListContainer = ({ greeting }) => {
  const containerStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
  };

  return (
    <div style={containerStyle}>
      <h2>Bienvenido a AG Calzados</h2>
      <p>{greeting}</p>
    </div>
  );
};

export default ItemListContainer;
