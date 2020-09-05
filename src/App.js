import React from 'react';
import './App.css';
import Form from './Tugas-9/Form'
import Table from './Tugas-10/Table'

function App() {
  return (
    <div className="box">
      <Form />
      < Table data = {[
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
      ]} />
    </div>
  );
}

export default App;
