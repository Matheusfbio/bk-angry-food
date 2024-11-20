const jwt = require("jsonwebtoken");

// Função para gerar um JWT
const generateToken = (userId) => {
  // Certifique-se de que JWT_SECRET está definido no .env
  if (!process.env.JWT_SECRET) {
    throw new Error("A chave JWT_SECRET não está configurada no arquivo .env");
  }

  // Gera o token
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

module.exports = { generateToken };
