import axios from 'axios';
import { URL_API } from './settings';

export function insertPipes() {
    let descripcion = document.getElementById('form-pipes-Descripcion').value;
    let material = document.getElementById('form-pipes-Material').value;
    let use = document.getElementById('form-pipes-Uso').value;
    let geomWkt = document.getElementById('form-pipes-geomWkt').value;

    axios.post(URL_API + '/app_cq/pipe_insert/', {
            descripcion: descripcion,
            material: material,
            use: use,
            geomWkt: geomWkt
        }, {
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);

            // Verificar si la respuesta es exitosa y contiene datos
            if (response.data.ok && response.data.data.length > 0) {
                const pipe = response.data.data[0];
                const geojson = pipe.st_astext;
                
                
                document.getElementById("form-pipes-message").innerHTML = response.data.message;
                document.getElementById("form-pipes-gid").innerHTML = response.data.data[0].gid;
                document.getElementById("form-pipes-length").innerHTML = response.data.data[0].length;
                
            } else {
                document.getElementById("form-pipes-message").innerHTML = response.data.message;
            }
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-pipes-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

export function updatePipes() {
    let gid = document.getElementById('form-pipes-gid').value;
    let descripcion = document.getElementById('form-pipes-Descripcion').value;
    let material = document.getElementById('form-pipes-Material').value;
    let use = document.getElementById('form-pipes-Uso').value;
    let geomWkt = document.getElementById('form-pipes-geomWkt').value;

    axios.post(URL_API + '/app_cq/pipe_update/', {
            gid: gid,
            descripcion: descripcion,
            material: material,
            use: use,
            geomWkt: geomWkt
        }, {
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);

            // Verificar si la respuesta es exitosa y contiene datos
            if (response.data.ok && response.data.data.length > 0) {
                const pipe = response.data.data[0];
                const geojson = pipe.st_astext;
                
                
                document.getElementById("form-pipes-message").innerHTML = response.data.message;
                document.getElementById("form-pipes-length").innerHTML = response.data.data[0].length;
                
            } else {
                document.getElementById("form-pipes-message").innerHTML = response.data.message;
            }
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-pipes-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

export function deletePipes() {
    let gid = document.getElementById('form-pipes-gid').value;

    axios.post(URL_API + '/app_cq/pipe_delete/', {
            gid: gid
        }, {
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);
            document.getElementById("form-pipes-message").innerHTML = response.data.message;
            document.getElementById("form-pipes-gid").innerHTML = "";
            document.getElementById("form-pipes-Descripcion").innerHTML = "";
            document.getElementById("form-pipes-Material").innerHTML = "";
            document.getElementById("form-pipes-Uso").innerHTML = "";
            document.getElementById("form-pipes-geomWkt").innerHTML = "";
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-pipes-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

export function selectPipes() {
    let gid = document.getElementById('form-pipes-gid').value;

    axios.get(URL_API + '/app_cq/pipe_select_by_gid/', {
            params: {
                gid: gid
            },
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);

            // Verificar si la respuesta es exitosa y contiene datos
            if (response.data.ok && response.data.data.length > 0) {
                const pipe = response.data.data[0];
                const geojson = pipe.st_astext;
                
                document.getElementById("form-pipes-message").innerHTML = response.data.message;
                document.getElementById("form-pipes-gid").innerHTML = response.data.data[0].gid;
                document.getElementById("form-pipes-Descripcion").innerHTML = response.data.data[0].descripcion;
                document.getElementById("form-pipes-length").innerHTML = response.data.data[0].length;
                document.getElementById("form-pipes-Material").innerHTML = response.data.data[0].material;
                document.getElementById("form-pipes-Uso").innerHTML = response.data.data[0].use;
                document.getElementById("form-pipes-geomWkt").innerHTML = response.data.data[0].st_astext;
            } else {
                document.getElementById("form-pipes-message").innerHTML = response.data.message;
                document.getElementById("form-pipes-gid").innerHTML = "";
                document.getElementById("form-pipes-Descripcion").innerHTML = "";
                document.getElementById("form-pipes-Material").innerHTML = "";
                document.getElementById("form-pipes-Uso").innerHTML = "";
                document.getElementById("form-pipes-geomWkt").innerHTML = "";
            }
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-pipes-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

