module.exports = app =>
  {
    const livros = require("../controllers/livro.controller.js");

    var routes = require("express").Router();

    routes.post("/", livros.create);

    routes.get("/", livros.findAll);

    routes.get("/:id", livros.findOne);

    routes.put("/:id", livros.update);

    routes.delete("/:id", livros.delete);

    routes.delete("/", livros.deleteAll);

    app.use('/api/livros', routes);
    
  };
