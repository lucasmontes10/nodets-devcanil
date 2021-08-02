import { Request, Response } from 'express';
import { petModels } from '../models/pets';
import { menuController } from '../helpers/menuHelper'


export const search = (req:Request, res:Response) =>{
    let query: string = req.query.q as string;

    if (!query){
        res.redirect('/');
        return;
    }

    let list = petModels.getSearch(query);

    res.render('pages/pages', {
        menu: menuController(''),
        list, 
        query
    });
} 