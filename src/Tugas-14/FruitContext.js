import React, { useState, createContext } from 'react';

export const FruitContext = createContext();

export const FruitProvider = ({ children }) => {
  const [dataFruits, setdataFruits] = useState(null);
  const [input, setInput] = useState({
    name: '',
    price: '',
    weight: 0,
    id: null,
  });

  return (
    <FruitContext.Provider value={[dataFruits, setdataFruits, input, setInput]}>
      {children}
    </FruitContext.Provider>
  );
};
