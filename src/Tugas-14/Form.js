import React, {
 useRef, useState, useEffect, useContext 
} from 'react';
import axios from 'axios';
import { FruitContext } from './FruitContext';

const Form = () => {
  // local state
  const [disableSubmit, setDisableSubmit] = useState(false);
  // context
  const [dataFruits, setdataFruits, input, setInput] = useContext(FruitContext);

  const inputName = useRef(null);
  const inputPrice = useRef(null);
  const inputWeight = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data
        } = await axios.get('https://cors-anywhere.herokuapp.com/http://backendexample.sanbercloud.com/api/fruits');
        setdataFruits(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (dataFruits === null) {
      fetchData();
    }
  }, [dataFruits, setdataFruits]);

  const handleChangeInput = () => {
    setInput({
      name: inputName.current.value,
      price: inputPrice.current.value,
      weight: inputWeight.current.value,
      id: input.id,
    });
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
        const {
          data: newRow
        } = await axios.post('https://cors-anywhere.herokuapp.com/http://backendexample.sanbercloud.com/api/fruits', {
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
        const {
          data: updatedRow
        } = await axios.put(`https://cors-anywhere.herokuapp.com/http://backendexample.sanbercloud.com/api/fruits/${id}`, {
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
  );
};

export default Form;
