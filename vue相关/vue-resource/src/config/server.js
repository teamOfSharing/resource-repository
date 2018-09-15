import axios from 'axios'
import Message from 'element-ui'
import store from '../store'

const server = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 15000
})
