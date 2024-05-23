import {login, logout} from './login';
import { insertConstruction, updateConstruction, deleteConstruction, selectConstruction } from './manage_constructions';
import { insertPipes, updatePipes, deletePipes, selectPipes } from './manage_pipes';
import { insertWells, updateWells, deleteWells, selectWells } from './manage_wells';

export function registerEvents(){
    document.getElementById('button-login').addEventListener('click',login);
    document.getElementById('form-construction-insert').addEventListener('click',insertConstruction);
    document.getElementById('form-construction-update').addEventListener('click',updateConstruction);
    document.getElementById('form-construction-delete').addEventListener('click',deleteConstruction);
    document.getElementById('form-construction-select').addEventListener('click',selectConstruction);
    document.getElementById('form-pipes-insert').addEventListener('click',insertPipes);
    document.getElementById('form-pipes-update').addEventListener('click',updatePipes);
    document.getElementById('form-pipes-delete').addEventListener('click',deletePipes);
    document.getElementById('form-pipes-select').addEventListener('click',selectPipes);
    document.getElementById('form-well-insert').addEventListener('click',insertWells);
    document.getElementById('form-well-update').addEventListener('click',updateWells);
    document.getElementById('form-well-delete').addEventListener('click',deleteWells);
    document.getElementById('form-well-select').addEventListener('click',selectWells);
    document.getElementById('button-logout').addEventListener('click',logout);
    

}