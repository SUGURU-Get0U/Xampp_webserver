/* window.onload para ele rodar o codigo quando
 * ele estiver pronto */

function signup() {
  let email = document.getElementById("e-mail");
  let password = document.getElementById("password");
}

function is_higher() {
  var valor1 = parseInt(document.getElementById("#"));
  var valor2 = parseInt(document.getElementById("#"));
}

// Here we will create the functions for the operations in the calculator

// first the SUM operation, it will take the values and add them together!
/* If we just pick up the numbers using:
  "document.getElementById("sum_n1")"
Javascript will interper this as a string, so we have to transform this into a INT
by adding:
  parseInt()

  actually this is BS, the parsefloat and parseINT passes the values as a string than
  catches the first integer, it will result in Nan (not a number)
*/
function SUM() {
  let n1 = document.getElementById("sum_n1");
  let n2 = document.getElementById("sum_n2");

  let result = n1 + n2;
  console.log(result)
}