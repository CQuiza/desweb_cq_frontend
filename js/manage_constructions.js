import axios from 'axios';
import { URL_API } from './settings';

export function insertConstruction() {
    let city = document.getElementById('form-construction-city').value;
    let days_limit = document.getElementById('form-construction-days_limit').value;
    let org_responsible = document.getElementById('form-construction-org_responsible').value;
    let geomWkt = document.getElementById('form-construction-geomWkt').value;

    axios.post(URL_API + '/app_cq/construction_insert/', {
            city: city,
            days_limit: days_limit,
            org_responsible: org_responsible,
            geomWkt: geomWkt
        }, {
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);

            // Verificar si la respuesta es exitosa y contiene datos
            if (response.data.ok && response.data.data.length > 0) {
                const construction = response.data.data[0];
                const geojson = construction.st_astext;
                
                document.getElementById("form-construction-message").innerHTML = response.data.message;
                document.getElementById("form-construction-gid").innerHTML = response.data.data[0].gid;
                document.getElementById("form-construction-area").innerHTML = response.data.data[0].area;
            } else {
                document.getElementById("form-construction-message").innerHTML = response.data.message;
            }
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-construction-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

export function updateConstruction() {
    let gid = document.getElementById('form-construction-gid').value;
    let city = document.getElementById('form-construction-city').value;
    let days_limit = document.getElementById('form-construction-days_limit').value;
    let org_responsible = document.getElementById('form-construction-org_responsible').value;
    let geomWkt = document.getElementById('form-construction-geomWkt').value;

    axios.post(URL_API + '/app_cq/construction_update/', {
            gid: gid,
            city: city,
            days_limit: days_limit,
            org_responsible: org_responsible,
            geomWkt: geomWkt
        }, {
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);
            if (response.data.ok && response.data.data.length > 0) {
                const construction = response.data.data[0];

                document.getElementById("form-construction-message").innerHTML = response.data.message;
                document.getElementById("form-construction-area").innerHTML = response.data.data[0].area;
            } else {
                document.getElementById("form-construction-message").innerHTML = response.data.message;
            }
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-construction-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

export function deleteConstruction() {
    let gid = document.getElementById('form-construction-gid').value;

    axios.post(URL_API + '/app_cq/construction_delete/', {
            gid: gid
        }, {
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);
            document.getElementById("form-construction-message").innerHTML = response.data.message;
            document.getElementById("form-construction-gid").innerHTML = "";
            document.getElementById("form-construction-city").innerHTML = "";
            document.getElementById("form-construction-days_limit").innerHTML = "";
            document.getElementById("form-construction-org_responsible").innerHTML = "";
            document.getElementById("form-construction-geomWkt").innerHTML = "";
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-construction-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

export function selectConstruction() {
    let gid = document.getElementById('form-construction-gid').value;

    axios.get(`${URL_API}/app_cq/construction_select_by_gid/?gid=${gid}`, {
            withCredentials: false
        })
        .then(function(response) {
            console.log(response);

            // Verificar si la respuesta es exitosa y contiene datos
            if (response.data.ok && response.data.data.length > 0) {
                const construction = response.data.data[0];
                const geojson = construction.st_astext;
                
                document.getElementById("form-construction-message").innerHTML = response.data.message;
                document.getElementById("form-construction-gid").innerHTML = response.data.data[0].gid;
                document.getElementById("form-construction-city").innerHTML = response.data.data[0].city;
                document.getElementById("form-construction-days_limit").innerHTML = response.data.data[0].days_limit;
                document.getElementById("form-construction-area").innerHTML = response.data.data[0].area;
                document.getElementById("form-construction-org_responsible").innerHTML = response.data.data[0].org_responsible;
                document.getElementById("form-construction-geomWkt").innerHTML = response.data.data[0].st_astext;
            } else {
                document.getElementById("form-construction-message").innerHTML = response.data.message;
                document.getElementById("form-construction-gid").innerHTML = "";
                document.getElementById("form-construction-city").innerHTML = "";
                document.getElementById("form-construction-days_limit").innerHTML = "";
                document.getElementById("form-construction-org_responsible").innerHTML = "";
                document.getElementById("form-construction-geomWkt").innerHTML = "";
            }
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-construction-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

