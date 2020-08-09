import React from 'react';
import './Seasons.css'

const seasonInfor = {
  summer: {
    text: 'Lets hit the beach',
    icon: 'sun',
  },
  winter: {
    text: 'Burr, it is chilly',
    icon: 'snowflake',
  },
}

const getSeason = (lat, month) => {
  if (month>2 && month<9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const Seasons = props => {
  console.log(props);
  const { lat } = props;
  const month = new Date().getMonth();
  const season = getSeason(lat, month);
  const {text, icon} = seasonInfor[season];

  return (
    <div className={`seasons ${season}`}>
      <i className={`massive ${icon} icon topicon`}></i>
      <div> {text} </div>
      <i className={`massive ${icon} icon bottomicon`}></i>
    </div>
  )
}

export default Seasons;