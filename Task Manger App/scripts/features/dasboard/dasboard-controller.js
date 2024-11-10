window.addEventListener('load',init);
function init(){

    isAlreadyLogin()
    ;
}
function isAlreadyLogin(){
        if(localStorage.user){
            document.querySelector('#great').innerText = 'Welcome'+JSON.parse(localStorage.user).name;

        }
        else{
            // redirect to the user page
        location.href = 'user.html';
        }
    }
