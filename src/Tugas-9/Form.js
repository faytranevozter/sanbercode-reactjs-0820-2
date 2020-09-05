import React from "react";

function Form(props) {
  return (
    <div>
      <h2 style={{ textAlign: 'center', }}>Form Pembelian Buah</h2>
      <table style={{ border: 0, width: '100%', }}>
        <tbody>
          <tr>
            <td style={{ fontWeight: 'bold', }}>Nama Pelanggan</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td style={{ fontWeight: 'bold', }}>Daftar Items</td>
            <td>
              <input type="checkbox" />
              Semangka 
              <br />
              <input type="checkbox" />
              Jeruk 
              <br />
              <input type="checkbox" />
              Nanas 
              <br />
              <input type="checkbox" />
              Salak 
              <br />
              <input type="checkbox" />
              Anggur 
              <br />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="button">Kirim</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Form
