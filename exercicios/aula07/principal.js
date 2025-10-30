
window.onload = async function() {

    var server_answer = await fetch("../php/fetch.php",{
        method: "GET"
    });

    var data = await server_answer.json();

    for(var i = 0; i = data.length; i++) {
        console.log(data[i].id_user);
        console.log(data[i].email);
        console.log("not going to print the password");
    }
}