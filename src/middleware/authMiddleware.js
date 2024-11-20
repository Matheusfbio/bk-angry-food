const jwt = require("jsonwebtoken");

// Middleware para verificar o token JWT
const protect = (req, res, next) => {
  let token;

  // Verificar se o token está no cabeçalho da requisição
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Verificar e decodificar o token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Adicionar o ID do usuário ao objeto da requisição
      req.user = decoded.id;
      next();
    } catch (error) {
      res.status(401).json({ message: "Token inválido ou expirado" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Não autorizado, token não fornecido" });
  }
};

module.exports = { protect };
