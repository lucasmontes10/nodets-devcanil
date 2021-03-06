import express from "express";
import path from "path";
import dotenv from "dotenv";
import mustache from "mustache-express";
import { Request, Response } from "express";
import mainRouter from "../src/routers/index";

dotenv.config();

const server = express();

//Definindo o Mustache como Template engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//Tornando a pasta public como estática para ser acessada na url
server.use(express.static(path.join(__dirname, '../public')));

//Tornando viavel o metodo Post
server.use(express.urlencoded({extended:true}));

//Estabelecendo as rotas
server.use(mainRouter);
server.use((req:Request, res:Response) =>{
   res.status(404).render('pages/404'); 
});

//Criando o servidor na porta estabelecida no arquivo .env
server.listen(process.env.PORT);