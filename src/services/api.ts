import axios from 'axios'

const apiNews = axios.create({
    baseURL: 'https://api-codenews-production.up.railway.app/'
})


export default apiNews