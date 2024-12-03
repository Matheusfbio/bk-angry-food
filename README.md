Aqui está um exemplo de **README.md** bem estruturado para o seu projeto:

---

# Restaurant Management API

## Descrição

Esta é uma API backend para gerenciamento de pedidos em um restaurante, construída utilizando **Node.js**, **Express**, **MongoDB**, e containerizada com **Docker**. A aplicação permite criar, listar, buscar, atualizar e deletar pedidos, além de integrar com itens do menu.

---

## Funcionalidades

- **Pedidos**
  - Criar novos pedidos.
  - Listar todos os pedidos.
  - Buscar pedidos por ID.
  - Atualizar o status de um pedido.
  - Deletar pedidos por ID.
  
- **Itens do Menu**
  - Gerenciar itens do menu (por exemplo, nome, preço, descrição, e categoria).

---

## Tecnologias Utilizadas

- **Backend**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  
- **Containerização**
  - Docker
  - Docker Compose

---

## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados no seu ambiente:

- **Node.js** (versão 18.x ou superior)
- **Docker** e **Docker Compose**

---

## Instalação e Configuração

### Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/restaurant-order-management.git
cd restaurant-order-management
```

### Configuração das Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com a seguinte configuração:

```env
MONGO_URI=mongodb://mongodb:27017/restaurant
PORT=3000
```

### Iniciar com Docker Compose

Construa e inicie os containers:

```bash
docker-compose up --build
```

O backend estará acessível em: [http://localhost:3000](http://localhost:3000).

---

## Rotas da API

### **Pedidos**

- **POST** `/api/orders`  
  Criar um novo pedido.  
  **Body (JSON):**
  ```json
  {
    "items": [
      { "menuItemId": "menuItemId123", "quantity": 2 }
    ]
  }
  ```

- **GET** `/api/orders`  
  Listar todos os pedidos.

- **GET** `/api/orders/:id`  
  Buscar um pedido por ID.

- **PATCH** `/api/orders/:id`  
  Atualizar o status de um pedido.  
  **Body (JSON):**
  ```json
  {
    "status": "Entregue"
  }
  ```

- **DELETE** `/api/orders/:id`  
  Deletar um pedido por ID.

### **Itens do Menu**

- (Aqui você pode adicionar endpoints relevantes para itens do menu.)
---

## Testes

1. Certifique-se de que os containers estejam rodando.
2. Utilize ferramentas como **Postman**, **Insomnia**, ou **cURL** para testar os endpoints.
3. Para testes manuais, utilize os seguintes comandos cURL:

   **Exemplo: Criar Pedido**
   ```bash
   curl -X POST http://localhost:3000/api/orders \
   -H "Content-Type: application/json" \
   -d '{
     "items": [{ "menuItemId": "menuItemId123", "quantity": 2 }]
   }'
   ```

---

## Contribuição

Se desejar contribuir para o projeto:

1. Faça um fork do repositório.
2. Crie uma branch para a sua feature (`git checkout -b minha-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça um push para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

---

Com isso, seu projeto está bem documentado e pronto para ser usado ou compartilhado com outros desenvolvedores!
