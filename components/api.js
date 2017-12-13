import axios from 'axios';
const URL = "https://maps.googleapis.com/maps/api/geocode/json?address="
const KEY = "AIzaSyDpGwiLpWG-aYh8xMMxxk7FXPLEYgiarwU"

export default {
  getData(location) {
    return (
      axios.get(URL+location+"&key="+KEY)
    )
  }
};
