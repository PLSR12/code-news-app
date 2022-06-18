import axios from 'axios'

const apiNews = axios.create({
    baseURL: 'postgresql://postgres:mEI6mUU8255SZAJvEncF@containers-us-west-36.railway.app:6508/railway/'
})


export default apiNews