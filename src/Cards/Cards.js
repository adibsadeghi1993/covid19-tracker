import React from "react";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames"

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
const Cards = ({ data }) => {


  if (!data) {
    return <h1>loading.......</h1>;
  }
  const { confirmed, recovered, deaths, lastUpdate } = data;
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center" >
        <Grid item component={Card} xs={12} sm={3} md={3} className={cx(styles.card,styles.infected)} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={7}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Active Cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} sm={3} md={3} className={cx(styles.card,styles.recovered)} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={7}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Active Cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} sm={3} md={3} className={cx(styles.card,styles.deaths)} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={7}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Active Cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
