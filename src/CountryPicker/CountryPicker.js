import React,{useState,useEffect} from 'react'
import { NativeSelect,FormControl } from '@material-ui/core'
import styles from "./CountryPicker.module.css"

import { fetchAllCountries } from '../api'

const CountryPicker = ({setCountry}) => {
    const [fetchedCountries, setFetchedCountries] = useState([])



 useEffect(() => {
   const fetchCountries=async()=>{
       const allcountries=await fetchAllCountries()
       setFetchedCountries(allcountries)

   }

   fetchCountries()
  
 }, [])

 const countryHandler=(e)=>{

console.log(e.target.value)
setCountry(e.target.value)
 }


    return (
        <FormControl className={styles.formControl} onChange={countryHandler}>
            <NativeSelect>
                <option value="">Global</option>
                {fetchedCountries.map((item)=>{
                    return <option  key={item} value={item}>{item}</option>
                })}
               
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
