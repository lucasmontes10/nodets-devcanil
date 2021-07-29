import { Router } from "express";
import * as mainController from "../controllers/pageController";

const router = Router();

router.get('/', mainController.home);
router.get('/dogs', mainController.dogs);
router.get('/cats', mainController.cats);
router.get('/fishes', mainController.fishes);
router.get('/search', (req, res)=>{
    res.send('Seja bem vindo a Pagina de Pesquisa');
});

export default router;