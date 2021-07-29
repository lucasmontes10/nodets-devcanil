type MenuTypes = '' | 'all' | 'dog' | 'cat' | 'fish';

export const menuController = (menuAtual: MenuTypes) =>{
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }
    if (menuAtual != ''){
        returnObject[menuAtual] = true;
    }
    return returnObject;
}