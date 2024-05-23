import axios from 'axios';
import { URL_API } from './settings';

export function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    axios.post(URL_API + '/app_cq/app_login/', {
            username: username,
            password: password
        }, {
            withCredentials: true
        })
        .then(function(response) {
            console.log(response);
            document.getElementById("form-login-message").innerHTML = response.data.message;
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-login-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}

export function logout() {
    axios.get(URL_API + '/app_cq/app_logout/', {})
        .then(function(response) {
            console.log(response);
            document.getElementById("form-login-message").innerHTML = response.data.message;
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById("form-login-message").innerHTML = "Error: " + error.message;
        })
        .finally(function() {
            console.log('Finally');
        });
}
