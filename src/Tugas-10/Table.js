import React from 'react';

const Table = ({data}) => (
  <div>
    <h1>Tabel Harga Buah</h1>
    <table className="custom">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Harga</th>
          <th>Berat</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v) => (
          <tr key={v.nama}>
            <td>{v.nama}</td>
            <td>{v.harga}</td>
            <td>{`${v.berat / 1000} kg`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
