import React, {
  useState,
  useEffect,
  useRef
} from 'react';
import axios from 'axios';

const Tugas13 = () => {
  const [dataFruits, setdataFruits] = useState(null);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [input, setInput] = useState({
    name: '',
    price: '',
    weight: 0,
    id: null,
  });
  const inputName = useRef(null);
  const inputPrice = useRef(null);
  const inputWeight = useRef(null);

  const fetchData = async () => {
    try {
      const { data } = await axios.get('https://cors-anywhere.herokuapp.com/http://backendexample.sanbercloud.com/api/fruits');
      setdataFruits(data);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    if (dataFruits === null) {
      fetchData();
    }
  }, [dataFruits]);

  const handleChangeInput = () => {
    setInput({
      name: inputName.current.value,
      price: inputPrice.current.value,
      weight: inputWeight.current.value,
      id: input.id,
    });
  };

  const handleEditBtn = (id) => {
    const row = dataFruits.find((v) => v.id === id);
    setInput({
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisableSubmit(true);
    const {
      id,
      name,
      price,
      weight,
    } = input;
    try {
      if (id === null) {
        // add data
        const { data: newRow } = await axios.post('https://cors-anywhere.herokuapp.com/http://backendexample.sanbercloud.com/api/fruits', {
          name,
          price,
          weight,
        });

        setdataFruits([
          ...dataFruits,
          newRow
        ]);
      } else {
        // update
        const { data: updatedRow } = await axios.put(`https://cors-anywhere.herokuapp.com/http://backendexample.sanbercloud.com/api/fruits/${id}`, {
          name,
          price,
          weight,
        });
        const newData = dataFruits.map((v) => {
          if (v.id === id) {
            return updatedRow;
          }
          return v;
        });
        
        setdataFruits(newData);
      }

      setInput({
        name: '',
        price: '',
        weight: 0,
        id: null,
      });
      setDisableSubmit(false);
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
      <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
        <strong style={{ marginRight: 10 }}>Nama</strong>
        <input required type="text" ref={inputName} value={input.name} onChange={handleChangeInput} />
        <br />
        <strong style={{ marginRight: 10 }}>Harga</strong>
        <input required type="number" ref={inputPrice} value={input.price} onChange={handleChangeInput} />
        <br />
        <strong style={{ marginRight: 10 }}>Berat (gram)</strong>
        <input required type="number" ref={inputWeight} value={input.weight} onChange={handleChangeInput} />
        <br />
        <button type="submit" disabled={disableSubmit}>Save</button>
      </form>
    </div>
  );
};

export default Tugas13;
