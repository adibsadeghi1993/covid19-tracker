
import React,{useEffect,useState} from 'react';
import Cards from './Cards/Cards';
import Chart from './Chart/Chart';
import CountryPicker from './CountryPicker/CountryPicker';
import styles from "./App.module.css"
import {fetchData} from "./api"
import coronaImage from "./images/Feb27_2020_CDC_Coronavirus.jpg"

function App() {
  const [data, setData] = useState(null)
  const [country, setCountry] = useState("")

  useEffect(() => {
    const requset=async()=>{
     const fetchedData =await fetchData()
     setData(fetchedData)
    }
    requset()

  }, [])

  useEffect(() => {
    const requset=async()=>{
     const fetchedData =await fetchData(country)
     setData(fetchedData)
     console.log(data)
    }
    requset()

  }, [country])
  return (
    <div className={styles.container}>
     <div className={styles.imageContainer}>
     <img className={styles.image} src={coronaImage} alt="corona"  />
     </div>

  <Cards data={data} />
  <CountryPicker setCountry={setCountry}/>
  <Chart data={data} country={country} />

    </div>
  );
}

export default App;
