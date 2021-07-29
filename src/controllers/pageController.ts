import { Request, Response } from 'express';
import { menuController } from '../helpers/menuHelper'

export const home = (req:Request, res:Response) => {
    res.render('pages/pages', {
        menu: menuController('all'), 
        banner:{
            title: "Todos os animais",
            background: 'allanimals'
        }
    });
};

export const dogs = (req:Request, res:Response) => {
    res.render('pages/pages', {
        menu: menuController('dog'),
        banner:{
            title: 'Cachorros',
            background: 'banner_dog'
        }
    });
};

export const cats = (req:Request, res:Response) => {
    res.render('pages/pages', {
        menu: menuController('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat'
        }
    });
};

export const fishes = (req:Request, res:Response) => {
    res.render('pages/pages', {
        menu: menuController('fish'),
        banner:{
            title: 'Peixes',
            background: 'banner_fish'
        }
    });
};