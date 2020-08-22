import axios from 'axios';

const KEY = 'AIzaSyA3y5Sx1Aio1LqiFkQM2QVDYFlBVHitjbo';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part:'snippet',
    maxResults:5,
    key: KEY
  }
})