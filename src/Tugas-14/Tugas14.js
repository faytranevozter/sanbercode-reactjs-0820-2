import React from 'react';
import { FruitProvider } from './FruitContext';
import Table from './Table';
import Form from './Form';

const Tugas14 = () => (
  <FruitProvider>
    <Table />
    <br />
    <br />
    <Form />
  </FruitProvider>
);

export default Tugas14;
