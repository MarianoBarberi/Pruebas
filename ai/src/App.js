// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data] = useState([
    { name: 'John Doe', email: 'john@example.com', age: 30 },
    { name: 'Jane Smith', email: 'jane@example.com', age: 25 },
    { name: 'Michael Johnson', email: 'michael@example.com', age: 40 }
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <div className="smaller-search-container">
                <input
                    type="text"
                    list="names"
                    placeholder="Search by Name"
                    value={searchTerm}
                    onChange={handleSearch}
                    className='search-input'
                />
            <datalist id="names">
            {data.map((item, index) => (
                <option key={index} value={item.name} />
            ))}
            </datalist>
            <button className='addBtn'>Añadir</button>
        </div>
      </div>
      <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th colSpan="2" className='center'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td  className='center'>{item.age}</td>
              <td className='center'><button className='edtBtn'>Editar</button></td>
                <td className='center'><button className='dltBtn'>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
