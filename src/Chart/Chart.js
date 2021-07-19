import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);
  //

  useEffect(() => {
    const fetchApi = async () => {
      const dailyData = await fetchDailyData();
      setDailyData(dailyData);
    };
    fetchApi();
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "blue",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "red",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

    const information = {
        labels: ["confirmed", "recovered", "deaths"],
        datasets: [
          {
            label: `${country}`,
            data: [data?.confirmed.value, data?.recovered.value, data?.deaths.value],
    
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
    
      const options={
          legend:{display:false},
          title:{display:true,text:`current state in ${country}`}
      }
    
      var barChart = data ? <Bar data={information} options={options} /> : null;
      
 



  return <div className={styles.container}>{country ?barChart  :lineChart}</div>;
};

export default Chart;
