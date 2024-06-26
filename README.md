

## API Funcionários

A API de Funcionários é uma interface RESTful que permite a gestão de funcionários através de operações **CRUD (Create, Read, Update, Delete)**. A API está hospedada no RENDER ([www.render.com](http://www.render.com)) e interage com um banco de dados MongoDB Atlas. Os seguintes endpoints são disponibilizados.
![enter image description here](https://content.pstmn.io/aacf38e6-63e0-4469-a8d6-aef4bf5ba5ec/QVBJLnBuZw==)

Nesta versão a API está disponível no endereço:

[https://web3-vicc.onrender.com](https://web3-vicc.onrender.com)

Por se tratar de uma instância gratuita, um delay de 50 segundos poderá ocorrer por falta de requests.

-   **POST /funcionario** - Insere um novo funcionário.
-   **GET /funcionario** - Consulta todos os funcionários cadastrados.
-   **GET /funcionario/{id}**
        - Consulta um funcionário específico pelo seu ID.
-   **PUT /funcionario/{id}**
        - Atualiza os dados de um funcionário existente pelo seu ID.
-   **DELETE /funcionario/{id}**
        - Deleta um funcionário existente pelo seu ID.

### Descrição dos Requests

#### 1. POST /funcionario

-   **Descrição:** Insere um novo funcionário no banco de dados.
-   **Endpoint:** `http://localhost:3000/funcionario`
-   **Método HTTP:** POST
-   **Headers:** `Content-Type: application/json`
-   **Body (JSON):**
    
    
    `{
      "nome": "Nome do Funcionário",
      "cargo": "Cargo do Funcionário",
      "salario": 5000,
      "contratado": true
    }` 
    
-   **Exemplo de Body:**

    
    `{
      "nome": "João Silva",
      "cargo": "Desenvolvedor",
      "salario": 6000,
      "contratado": true
    }` 
    
-   **Resposta de Sucesso (201):**
 
    
    `{
      "message": "Funcionário cadastrado com sucesso!"
    }` 
    
-   **Resposta de Erro (422):**
    
      `{
      "error": "Informar o nome, cargo, salario e contratado é obrigatório!"
    }`
#### 2. GET /funcionario

-   **Descrição:** Consulta todos os funcionários cadastrados no banco de dados.
-   **Endpoint:** `http://localhost:3000/funcionario`
-   **Método HTTP:** GET
-   **Headers:** Nenhum
-   **Body:** Nenhum
-   **Resposta de Sucesso (200):**
        
    `[
      {
        "_id": "60c72b2f4f1a2c001c8e4b1d",
        "nome": "João Silva",
        "cargo": "Desenvolvedor",
        "salario": 6000,
        "contratado": true
      },
      {
        "_id": "60c72b3b4f1a2c001c8e4b1e",
        "nome": "Maria Souza",
        "cargo": "Gerente de Projetos",
        "salario": 8000,
        "contratado": true
      }
    ]` 
    

#### 3. GET /funcionario/

-   **Descrição:** Consulta um funcionário específico pelo seu ID.
-   **Endpoint:** `http://localhost:3000/funcionario/:id`
-   **Método HTTP:** GET
-   **Headers:** Nenhum
-   **Body:** Nenhum
-   **Resposta de Sucesso (200):**
    
    
    `{
      "_id": "60c72b2f4f1a2c001c8e4b1d",
      "nome": "João Silva",
      "cargo": "Desenvolvedor",
      "salario": 6000,
      "contratado": true
    }` 
    
-   **Resposta de Erro (404):**

    
    `{
      "message": "Funcionário não encontrado"
    }` 
    

#### 4. PUT /funcionario/

-   **Descrição:** Atualiza os dados de um funcionário existente pelo seu ID.
-   **Endpoint:** `http://localhost:3000/funcionario/:id`
-   **Método HTTP:** PUT
-   **Headers:** `Content-Type: application/json`
-   **Body (JSON):**
    
    
    `{
      "nome": "Novo Nome do Funcionário",
      "cargo": "Novo Cargo do Funcionário",
      "salario": 7000,
      "contratado": false
    }` 
    
-   **Exemplo de Body:**
    
    `{
      "nome": "Luiza Helena Trajano"
    }` 
    
-   **Resposta de Sucesso (200):**
    
    
    `{
      "message": "Funcionário atualizado com sucesso"
    }` 
    
-   **Resposta de Erro (404):**
    
    
    `{
      "message": "Funcionário não encontrado"
    }` 
    

#### 5. DELETE /funcionario/

-   **Descrição:** Deleta um funcionário existente pelo seu ID.
-   **Endpoint:** `http://localhost:3000/funcionario/:id`
-   **Método HTTP:** DELETE
-   **Headers:** Nenhum
-   **Body:** Nenhum
-   **Resposta de Sucesso (200):**
    
    
    `{
      "message": "Funcionário deletado com sucesso"
    }` 
    
-   **Resposta de Erro (404):**

    
    `{
      "message": "Funcionário não encontrado"
    }` 
    

Esta API permite uma gestão completa de funcionários, possibilitando inserção, consulta, atualização e remoção de dados no banco de dados MongoDB Atlas.
