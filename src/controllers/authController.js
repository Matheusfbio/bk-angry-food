const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Gerar o JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d", // Token expira em 1 dia
  });
};

// Registrar um novo usuário
exports.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Verificar se o usuário já existe
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Criar um novo usuário
    const user = await User.create({ username, password });
    if (user) {
      res.status(201).json({
        _id: user.id,
        username: user.username,
        token: generateToken(user.id), // Gerar o token após o cadastro
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login de um usuário
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Encontrar o usuário no banco de dados
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      // Gerar e retornar o token se as credenciais forem válidas
      res.status(200).json({
        _id: user.id,
        username: user.username,
        token: generateToken(user.id), // Gerar o token após o login
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
