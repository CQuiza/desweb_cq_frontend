import axios from 'axios';
import { URL_API } from './settings';

export function insertWells() {
    let descripcion = document.getElementById('form-well-Descripcion').value;
    let depth = document.getElementById('form-well-Depth').value;
    let radius = document.getElementById('form-well-Radio').value;
    let type = document.getElementById('form-well-Tipo').value;
    let geomWkt = document.getElementById('form-well-geomWkt').value;

    axios.post(URL_API + '/app_cq/well_insert/', {
            descripcion: descripcion,
            depth: depth,
            radius: radius,
            type: type,
            geomWkt: geomWkt
        }, {
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);

            // Verificar si la respuesta es exitosa y contiene datos
            if (response.data.ok && response.data.data.length > 0) {
                const well = response.data.data[0];
                const geojson = well.st_astext;
                
                document.getElementById("form-well-message").innerHTML = response.data.message;
                document.getElementById("form-well-gid").innerHTML = response.data.data[0].gid;
            } else {
                document.getElementById("form-well-message").innerHTML = response.data.message;
                
            }
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-well-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

export function updateWells() {
    let gid = document.getElementById('form-well-gid').value;
    let descripcion = document.getElementById('form-well-Descripcion').value;
    let depth = document.getElementById('form-well-Depth').value;
    let radius = document.getElementById('form-well-Radio').value;
    let type = document.getElementById('form-well-Tipo').value;
    let geomWkt = document.getElementById('form-well-geomWkt').value;

    axios.post(URL_API + '/app_cq/well_update/', {
            gid: gid,
            descripcion: descripcion,
            depth: depth,
            radius: radius,
            type: type,
            geomWkt: geomWkt
        }, {
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);
            document.getElementById("form-well-message").innerHTML = response.data.message;
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-well-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

export function deleteWells() {
    let gid = document.getElementById('form-well-gid').value;

    axios.post(URL_API + '/app_cq/well_delete/', {
            gid: gid
        }, {
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);
            document.getElementById("form-well-message").innerHTML = response.data.message;
            document.getElementById("form-well-gid").innerHTML = "";
            document.getElementById("form-well-Descripcion").innerHTML = "";
            document.getElementById("form-well-Depth").innerHTML = "";
            document.getElementById("form-well-Radio").innerHTML = "";
            document.getElementById("form-well-Tipo").innerHTML = "";
            document.getElementById("form-well-geomWkt").innerHTML = "";
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-well-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

export function selectWells() {
    let gid = document.getElementById('form-well-gid').value;

    axios.get(URL_API + '/app_cq/well_select_by_gid/', {
            params: {
                gid: gid
            },
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);

            // Verificar si la respuesta es exitosa y contiene datos
            if (response.data.ok && response.data.data.length > 0) {
                const well = response.data.data[0];
                const geojson = well.st_astext;
                
                document.getElementById("form-well-message").innerHTML = response.data.message;
                document.getElementById("form-well-gid").innerHTML = response.data.data[0].gid;
                document.getElementById("form-well-Descripcion").innerHTML = response.data.data[0].descripcion;
                document.getElementById("form-well-Depth").innerHTML = response.data.data[0].depth;
                document.getElementById("form-well-Radio").innerHTML = response.data.data[0].radius;
                document.getElementById("form-well-Tipo").innerHTML = response.data.data[0].type;
                document.getElementById("form-well-geomWkt").innerHTML = response.data.data[0].st_astext;
            } else {
                document.getElementById("form-well-message").innerHTML = response.data.message;
                document.getElementById("form-well-gid").innerHTML = "";
                document.getElementById("form-well-Descripcion").innerHTML = "";
                document.getElementById("form-well-Depth").innerHTML = "";
                document.getElementById("form-well-Radio").innerHTML = "";
                document.getElementById("form-well-Tipo").innerHTML = "";
                document.getElementById("form-well-geomWkt").innerHTML = "";
            }
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-well-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

