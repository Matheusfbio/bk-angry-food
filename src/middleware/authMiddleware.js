const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token;

  // Verificar se o token foi enviado no cabeçalho
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extrair o token do cabeçalho
      token = req.headers.authorization.split(" ")[1];

      // Verificar o token usando o segredo da aplicação
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Adicionar as informações do usuário decodificado ao req
      req.user = decoded.id;
      req.token = token; // Adicionar o token para acessar na rota

      next();
    } catch (error) {
      res
        .status(401)
        .json({ message: "Não autorizado, token inválido ou expirado" });
    }
  }

  // Se o token não for fornecido
  if (!token) {
    return res
      .status(401)
      .json({ message: "Não autorizado, token não fornecido" });
  }
};

module.exports = { protect };
