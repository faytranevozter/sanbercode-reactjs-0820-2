import React, { Component } from 'react';

class Tugas12 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { nama: 'Semangka', harga: 10000, berat: 1000 },
        { nama: 'Anggur', harga: 40000, berat: 500 },
        { nama: 'Strawberry', harga: 30000, berat: 400 },
        { nama: 'Jeruk', harga: 30000, berat: 1000 },
        { nama: 'Mangga', harga: 30000, berat: 500 }
      ],
      idx: -1,
      inputNamaBarang: '',
      inputHargaBarang: '',
      inputBeratBarang: '',
    };
    this.inputNama = React.createRef();
    this.inputHarga = React.createRef();
    this.inputBerat = React.createRef();
  }

  handleChangeInput = () => {
    this.setState({
      inputNamaBarang: this.inputNama.current.value,
      inputHargaBarang: this.inputHarga.current.value,
      inputBeratBarang: this.inputBerat.current.value,
    });
  }

  handleEditBtn = (e) => {
    const i = e.target.getAttribute('index');
    const { data } = this.state;
    const row = data[i];
    this.setState({
      inputNamaBarang: row.nama,
      inputHargaBarang: row.harga,
      inputBeratBarang: row.berat,
      idx: i
    });
  }

  handleDeleteBtn = (e) => {
    const i = e.target.getAttribute('index');
    const { data } = this.state;
    data.splice(i, 1);
    this.setState({
      data,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      idx: i,
      data,
      inputNamaBarang,
      inputHargaBarang,
      inputBeratBarang,
    } = this.state;
    if (i === -1) {
      // add data
      this.setState({
        data: [...data, {
          nama: inputNamaBarang,
          harga: inputHargaBarang,
          berat: inputBeratBarang,
        }],
        inputNamaBarang: '',
        inputHargaBarang: '',
        inputBeratBarang: '',
      });
    } else {
      // update
      data[i] = {
        nama: inputNamaBarang,
        harga: inputHargaBarang,
        berat: inputBeratBarang,
      };

      this.setState({
        data,
        inputNamaBarang: '',
        inputHargaBarang: '',
        inputBeratBarang: '',
        idx: -1,
      });
    }
  }

  render() {
    const {
      data,
      inputNamaBarang,
      inputHargaBarang,
      inputBeratBarang,
    } = this.state;
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
            {data.map((v, i) => (
              <tr key={v.nama}>
                <td>{v.nama}</td>
                <td>{v.harga}</td>
                <td>{`${v.berat / 1000} kg`}</td>
                <td>
                  <button index={i} type="button" onClick={this.handleEditBtn}>Edit</button>
                  <button index={i} type="button" onClick={this.handleDeleteBtn}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form style={{ textAlign: 'center' }} onSubmit={this.handleSubmit}>
          <strong style={{ marginRight: 10 }}>Nama</strong>
          <input required type="text" ref={this.inputNama} value={inputNamaBarang} onChange={this.handleChangeInput} />
          <br />
          <strong style={{ marginRight: 10 }}>Harga</strong>
          <input required type="number" ref={this.inputHarga} value={inputHargaBarang} onChange={this.handleChangeInput} />
          <br />
          <strong style={{ marginRight: 10 }}>Berat (gram)</strong>
          <input required type="number" ref={this.inputBerat} value={inputBeratBarang} onChange={this.handleChangeInput} />
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default Tugas12;
