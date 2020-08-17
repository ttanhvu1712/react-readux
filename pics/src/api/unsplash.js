import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID yowHGUdk2M-HMaiGRhRJolOAggT2Ot4s2Ra9ns77pao '
  }
})