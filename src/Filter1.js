import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bar1 from './Bar1';



function App() {
  const [country, setcountry] = useState([]);
  const [sector, setsector] = useState([]);
  const [data11, setdata11] = useState([]);
  const [alldata, setalldata] = useState([]);
  const [uniqueYear, setuniqueYear] = useState([])
  const [uniqueSector, setuniqueSector] = useState([])
  const [selectDate, setselectDate] = useState([])

  const [data10, setdata10] = useState([])


  //const [country1,setCountry1]=useState()
  const labels = sector;

  const selectCountry = (e) => {

    const country1 = e.target.value;

    let data10 = alldata.filter(data => data.country === country1)
    setdata10(data10);
    let uniqueSector = [...new Set(data10.map(item => item.sector))];
    setuniqueSector(uniqueSector)
  }


  const selectSector = (e) => {
    let data5 = e.target.value;
    let data11 = data10.filter(data => data.sector === data5);
    // console.log(data11)
    setdata11(data11)
    let uniqueYear = [...new Set(data11.map(item => item.end_year))];
    setuniqueYear(uniqueYear);

  }
  const select_Date = (e) => {
    let data8 = e.target.value
   
    let selectDate = data11.filter(data => data.end_year === data8)
   
    setselectDate(selectDate)
  }
  useEffect(() => {
    // Make a GET request to your Node.js backend
    axios.get('http://localhost:4444/api/data')
      .then(response => {

        setcountry(response.data[0]);
        setsector(response.data[1]);
        setalldata(response.data[2]);
        // setcountry(response.country);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Choose Your Data</h1>

      <label
        style={{
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'blue',
          marginRight: '10px',
        }}>    Select a Country:</label>
      <select
        style={{
          fontSize: '14px',
          padding: '5px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          transition: 'border-color 0.3s',
          ':hover': {
            borderColor: 'blue', // Change border color on hover
          },
        }}
        onChange={(e) => selectCountry(e)}>
        {country.map((x) => {
          return <option value={x}>{x}</option>

        })}

      </select>
      <br></br>

      <label style={{
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'blue',
        marginRight: '10px',
      }}>Select a Sector:</label>
      <select style={{
        fontSize: '14px',
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        transition: 'border-color 0.3s',
        ':hover': {
          borderColor: '#007bff', // Change border color on hover
        },
      }}

        onChange={(e) => selectSector(e)}>

        {

          uniqueSector.map((x) => {

            return <option value={x}>{x}</option>

          })}

      </select>


      <br></br>

      <label style={{
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'blue',
        marginRight: '10px',
      }}>Select a Year:</label>
      <select style={{
        fontSize: '14px',
        padding: '5px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        transition: 'border-color 0.3s',
        ':hover': {
          borderColor: '#007bff', // Change border color on hover
        },
      }}
        onChange={(e) => select_Date(e)}>
        {uniqueYear.map((x) => {

          return <option value={x}>{x}</option>

        })}

      </select>

      <br></br>
      <div>

      </div>
      <Bar1 data={alldata} selectDate={selectDate} />

    </div>
  );
}

export default App;
