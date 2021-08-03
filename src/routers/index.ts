import { Router } from "express";
import * as mainController from "../controllers/pageController";
import * as searchController from "../controllers/searchController";

const router = Router();

router.get('/', mainController.home);
router.get('/dogs', mainController.dogs);
router.get('/cats', mainController.cats);
router.get('/fishes', mainController.fishes);
router.get('/search', searchController.search);
router.post('/search', searchController.searchPost)

export default router;