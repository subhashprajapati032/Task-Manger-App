import User from "../models/user-model.js";
import { login } from "../services/user-service.js";

// It is a Glue b/w View and Model
window.addEventListener('load', userButton);
function userTakeInput(){
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const user = new User(email, password, name);
    login(user);

}

function userButton(){
    document.querySelector("#btn").addEventListener('click', userTakeInput);
}