import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const fetchData = async (country) => {
  let changebleUrl=url
  if (country) {
    changebleUrl=`${url}/countries/${country}`
  }
  try {
    const { data } = await axios.get(changebleUrl);
    const { confirmed, recovered, deaths, lastUpdate } = data;

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log(error.message)
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
   const modifiedData=data.map((item)=>({
     confirmed:item.confirmed.total,
     deaths:item.deaths.total,
     date:item.reportDate,
   }))
   return modifiedData
  } catch (error) {
    console.log(error.message)
  }
};

export const fetchAllCountries = async () => {
  try {
    const {data:{countries}} = await axios.get(`${url}/countries`);
     
    const fullNameCountries=countries.map((item)=>(item.name))
    return fullNameCountries
  } catch (error) {
    console.log(error.message)
  }
};

