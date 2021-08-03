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

//Disponibilizando através do método post
export const searchPost = (req: Request, res:Response) => {
    let query: string = req.body.q;
    
    if (!query){
        res.redirect('/');
        return;
    }

    let list = petModels.getSearch(query);

    res.render('pages/pages', {
        menu: menuController(''),
        list,
        query
    })
};