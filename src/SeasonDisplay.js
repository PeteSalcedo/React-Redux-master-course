import "./SeasonDisplay.css"
import React from "react";

const seasonConfig = {
   summer: {
     text:"Lets hit the beach!",
     inconName:'sun'
   },
   winter:{
     text:"Burr its cold",
     inconName:'snowflake'
   }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div>
      <i className={`icon-left massive ${iconName} icon`} /> 
        <h1> {text} </h1>{" "}
      <i className={`icon-right massive ${iconName} icon`} />{" "}
    </div>
  );
};

export default SeasonDisplay;

// Difference with ternary and with a new way of
// const SeasonDisplay = (props) => {
//   const season = getSeason(props.lat,new Date().getMonth());
//   const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
//   const icon = season === 'winter' ? 'snowflake' : 'sun';
