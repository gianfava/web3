const express = require('express')
const server = express()
server.use(express.json())

const cursos = ['Node JS', 'JavaScript', 'PHP', 'React', 'VueJS', 'Flutter']

//Middleware Global
server.use((req, res, next) => {
  console.log(`URL CHAMADA: ' ${req.url}`)
  return next()
})

//Middleware Local (Especifico INSERIR)
function checkCurso(req, res, next) {
  if (!req.body.novo_curso) {
    return res
      .status(400)
      .json({
        error: "Nome do Curso é OBRIGATÓRIO nesse formato {'novo_nome: 'Lua'}"
      })
  }
  return next()
}

//Middleware Local (Específico para checar existência de cursos)
function checkIDCurso(req, res, next) {
  const curso = cursos[req.params.index]
  if (!curso) {
    return res
      .status(400)
      .json({ error: 'O curso não existe no ID solicitado' })
  }
  return next()
}

// 01 – Crie um Middleware que toda vez que um PUT seja requisitado verifique se existe um Request Body, caso não
// exista, informe ao cliente um código de erro e uma orientação.
// 02 – Crie um Middleware que toda vez que um POST seja requisitado verifique se existe um Request Body, caso não
// exista, informe ao cliente um código de erro e uma orientação.

// Middleware para verificar Request Body (Especifico PUT e POST)
function verificarRequestBody(req, res, next) {
  if (!req.body.curso) {
    return res.status(400).json({
      error:
        "Formato incorreto do corpo da requisição. Esperado: {'novo_curso': 'Nome do Curso'}"
    })
  }

  return next()
}

// 03 – No DELETE atual, a mensagem de erro fica dentro do próprio POST. Crie um Middleware que possa lidar com essa
// mensagem de erro.

// Middleware  (Especifico DELETE)
function checkCursoExiste(req, res, next) {
  const { index } = req.params
  const curso = cursos[index]

  if (!curso) {
    console.log(
      `ATENÇÃO: Não é possível excluir o ID = ${index} pois não existe`
    )
    return res
      .status(404)
      .json({
        error: `ATENÇÃO: Não é possível DELETAR pois o ID ${index} NÃO corresponde a nenhum curso.`
      })
  } else {
    cursos.splice(index, 1)
    res.json({ message: 'Curso deletado com sucesso!' })
    return next()
  }
}

// 04 – Crie um Middleware que toda vez que um curso seja inserido no banco de dados, mostre no console.log a lista de
// cursos atualizada.
// 05 – Crie um Middleware que toda vez que um curso for deletado do banco de dados, mostre no console.log a lista de
// cursos atualizada.

//Middleware para Exibir Lista Atualizada após POST e DELETE
function showUpdatedItems(req, res, next) {
  console.log('Lista de Cursos Atualizada:')
  console.log(cursos)
  return next()
}

// Criando meu SELECT
server.get('/curso', (req, res) => {
  return res.json(cursos)
})

//Criando meu  SELECT passando ID
server.get('/curso/:index', checkIDCurso, (req, res) => {
  const { index } = req.params
  return res.json(cursos[index])
})

// INSERIR dados via API (POST)
server.post('/curso', checkCurso, showUpdatedItems, (req, res) => {
  const { novo_curso } = req.body
  cursos.push(novo_curso)

  return res.json(cursos)
})

//UPDATE de um curso (PUT)
server.put('/curso/:index', checkIDCurso, verificarRequestBody, (req, res) => {
  const { index } = req.params
  const { curso } = req.body

  cursos[index] = curso

  return res.json(cursos)
})

// DELETE de um curso
server.delete('/curso/:index', checkCursoExiste, showUpdatedItems)

server.listen(3000)
