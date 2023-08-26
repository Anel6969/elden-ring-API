// src/components/RandomCreature.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreatureDetails from './CreatureDetails';

const RandomCreature = () => {
  const [randomCreature, setRandomCreature] = useState(null);

  useEffect(() => {
    const fetchRandomCreature = async () => {
      try {
        const limit = 1; // On récupère une seule créature alé0atoire
        const response = await axios.get(`https://eldenring.fanapis.com/api/creatures?limit=${limit}`);
        const creatures = response.data;
        setRandomCreature(creatures[0]);
      } catch (error) {
        console.error('Erreur lors de la récupération de la créature aléatoire :', error);
      }
    };

    fetchRandomCreature();
  }, []); // Le tableau de dépendances vide signifie que cette requête sera effectuée une seule fois au montage du composant.

  return (
    <div>
      <h2>Créature Aléatoire</h2>
      <CreatureDetails creature={randomCreature} />
    </div>
  );
};

export default RandomCreature;
