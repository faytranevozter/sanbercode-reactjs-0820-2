import React, { useContext } from 'react';
import axios from 'axios';
import { FruitContext } from './FruitContext';

const Table = () => {
  const [dataFruits, setdataFruits, input, setInput] = useContext(FruitContext);
  const handleEditBtn = (id) => {
    const row = dataFruits.find((v) => v.id === id);
    setInput({
      ...input,
      name: row.name,
      price: row.price,
      weight: row.weight,
      id,
    });
  };

  const handleDeleteBtn = async (id) => {
    try {
      await axios.delete(`https://cors-anywhere.herokuapp.com/http://backendexample.sanbercloud.com/api/fruits/${id}`);
      const newData = dataFruits.filter((v) => v.id !== id);
      setdataFruits(newData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Tabel Harga Buah</h1>
      <table className="custom">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataFruits !== null && dataFruits.map((v) => (
            <tr key={v.id}>
              <td>{v.name}</td>
              <td>{v.price}</td>
              <td>{`${v.weight / 1000} kg`}</td>
              <td>
                <button type="button" onClick={() => handleEditBtn(v.id)}>Edit</button>
                <button type="button" onClick={() => handleDeleteBtn(v.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
