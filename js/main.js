const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function login() {
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');

    console.log(user.value + " " + pass.value);


    if (user.value == "admin" && pass.value == "admin") {
       location.href="login.html";
       alert("ingresando");

    } else {
        alert("Datos inconrrectos");
    };

};


