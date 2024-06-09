const router = require('express').Router()
const Funcionario = require('../models/Funcionario')

//POST (INSERT) inserindo novo Funcionario
router.post('/', (req, res) => {
  const { nome, cargo, salario, contratado } = req.body
  if (!nome && !cargo && !salario && !contratado) {
    res.status(422).json({
      error: 'Informar o nome, cargo, salario e contratado é obrigatório!'
    })
  }

  const funcionario = {
    nome,
    cargo,
    salario,
    contratado
  }
  try {
    Funcionario.create(funcionario)
    res.status(201).json({ message: 'Funcionário cadastrado com sucesso!' })
  } catch (error) {
    res.status(500).json({ error: error })
  }
})

//GET Consultando todos funcionários
router.get('/', async (req, res) => {
  try {
    const funcionario = await Funcionario.find()
    res.status(200).json(funcionario)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET Consultando funcionário por ID
router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const funcionario = await Funcionario.findById(id)
    if (!funcionario) {
      return res.status(404).json({ message: 'Funcionário não encontrado' })
    }
    res.status(200).json(funcionario)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// UPDATE Editando funcionário existente
router.put('/:id', async (req, res) => {
  const id = req.params.id
  const { nome, cargo, salario, contratado } = req.body
  const funcionario = {
    nome,
    cargo,
    salario,
    contratado
  }

  try {
    const updatedFuncionario = await Funcionario.updateOne(
      { _id: id },
      funcionario
    )
    if (updatedFuncionario.matchedCount === 0) {
      return res.status(404).json({ message: 'Funcionário não encontrado' })
    }
    res.status(200).json({ message: 'Funcionário atualizado com sucesso' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// DELETE Deletando funcionário existente
router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const deletedFuncionario = await Funcionario.deleteOne({ _id: id })
    if (deletedFuncionario.deletedCount === 0) {
      return res.status(404).json({ message: 'Funcionário não encontrado' })
    }
    res.status(200).json({ message: 'Funcionário deletado com sucesso' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
