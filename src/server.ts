import express from 'express';

const app = express();
/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração específica
 */

// http:localhost:3333/users
app.get("/", (req, res) => {
    //return res.send("Hello World - NLW04!")
    return res.json({message: "Hello World - NLW04!"})
});

// 1° param => Rota(Recurso API)
// 2° param => request, response
app.post("/", (req, res) =>{
    //dados ja recebidos para salvar
    return res.json({message: "Dados salvos com sucesso!"})
});


app.listen(3333, () => console.log("Server is running!"));