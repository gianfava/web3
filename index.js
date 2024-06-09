const express = require('express')
const mongoose = require('mongoose')
const server = express()

const funcionarioRoutes = require('./routes/funcionarioRoutes')

// middleware
server.use(
  express.urlencoded({
    extended: true
  })
)

server.use(express.json())

// criando o endpoint e rotas da API
server.use('/funcionario', funcionarioRoutes)

//conexão com MongoDB Atlas
const DB_USER = 'gian'
const DB_PASSWORD = encodeURIComponent('7lkxUCKaBhepvySd')

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.sica3df.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err))

//porta server
server.listen(3000)
