import React from 'react';

const Table = (props) => {
  const data = props.data || [{
      nama: 'Semangka',
      harga: 10000,
      berat: 1000
    },
    {
      nama: 'Anggur',
      harga: 40000,
      berat: 500
    },
    {
      nama: 'Strawberry',
      harga: 30000,
      berat: 400
    },
    {
      nama: 'Jeruk',
      harga: 30000,
      berat: 1000
    },
    {
      nama: 'Mangga',
      harga: 30000,
      berat: 500
    }
  ];

  return (
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
  )
};

export default Table;
