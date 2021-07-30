import { Request, Response } from 'express';
import { menuController } from '../helpers/menuHelper'
import { petModels } from '../models/pets';

export const home = (req:Request, res:Response) => {
    let list = petModels.getAll();
    res.render('pages/pages', {
        menu: menuController('all'), 
        banner:{
            title: "Todos os animais",
            background: 'allanimals'
        }, 
        list
    });
};

export const dogs = (req:Request, res:Response) => {
    let list = petModels.getFromType('dog');
    res.render('pages/pages', {
        menu: menuController('dog'),
        banner:{
            title: 'Cachorros',
            background: 'banner_dog'
        },
        list
    });
};

export const cats = (req:Request, res:Response) => {
    let list = petModels.getFromType('cat');
    res.render('pages/pages', {
        menu: menuController('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat'
        }, 
        list
    });
};

export const fishes = (req:Request, res:Response) => {
    let list = petModels.getFromType('fish');
    res.render('pages/pages', {
        menu: menuController('fish'),
        banner:{
            title: 'Peixes',
            background: 'banner_fish'
        },
        list
    });
};