import {login, logout} from './login';
import { insertConstruction, updateConstruction, deleteConstruction, selectConstruction, startDrawingConstructions, stopDrawingConstructions, reloadWMSConstructionsLayer, clearVectorConstructionsLayer } from './manage_constructions';
import { insertPipes, updatePipes, deletePipes, selectPipes, startDrawingPipes, stopDrawingPipes, reloadWMSPipesLayer, clearVectorPipesLayer } from './manage_pipes';
import { insertWells, updateWells, deleteWells, selectWells, startDrawingWells, stopDrawingWells, reloadWMSWellsLayer, clearVectorWellsLayer} from './manage_wells';

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

    document.getElementById('start-drawing-constructions').addEventListener('click',startDrawingConstructions);
    document.getElementById('stop-drawing-constructions').addEventListener('click',stopDrawingConstructions);
    document.getElementById('reload-wms-constructions-layer').addEventListener('click',reloadWMSConstructionsLayer);
    document.getElementById('clear-vector-constructions-layer').addEventListener('click',clearVectorConstructionsLayer);

    document.getElementById('start-drawing-pipes').addEventListener('click',startDrawingPipes);
    document.getElementById('stop-drawing-pipes').addEventListener('click',stopDrawingPipes);
    document.getElementById('reload-wms-pipes-layer').addEventListener('click',reloadWMSPipesLayer);
    document.getElementById('clear-vector-pipes-layer').addEventListener('click',clearVectorPipesLayer);

    document.getElementById('start-drawing-wells').addEventListener('click',startDrawingWells);
    document.getElementById('stop-drawing-wells').addEventListener('click',stopDrawingWells);
    document.getElementById('reload-wms-wells-layer').addEventListener('click',reloadWMSWellsLayer);
    document.getElementById('clear-vector-wells-layer').addEventListener('click',clearVectorWellsLayer);
    

}