import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
    res.send('Seja bem vindo a Pagina inicial');
});
router.get('/dogs', (req, res)=>{
    res.send('Seja bem vindo a Pagina dos cachorros');
});
router.get('/cats', (req, res)=>{
    res.send('Seja bem vindo a Pagina dos gatos');
});
router.get('/fishes', (req, res)=>{
    res.send('Seja bem vindo a Pagina dos peixes');
});
router.get('/search', (req, res)=>{
    res.send('Seja bem vindo a Pagina de Pesquisa');
});

export default router;