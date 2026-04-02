import axios from 'axios'


const API_URL = 'http://localhost:3000'

const mainApi = axios.create({
  baseURL: API_URL,
})


export const api = {
  async get(path) {
    //fn body
    const { data } = await mainApi.get(path)
    return data
  },
  async post(path, body) {
    const { data } = await mainApi.post(path, body)
    return data
  }
}


// const fetchAll = async () => {
//   try {
//     const resp = await axios.get('http://localhost:3000/personnel')
//     console.log(resp.data)
//   } catch (error) {
//     console.log(error)
//   }
// }