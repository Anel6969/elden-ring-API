// src/components/CreatureDetails.js

import React from 'react';

const CreatureDetails = ({ creature }) => {
  if (!creature) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{creature.name}</h1>
      <p>Description: {creature.description}</p>
      <p>Type: {creature.type}</p>
      {/* Affichez d'autres détails de la créature ici */}
    </div>
  );
};

export default CreatureDetails;
