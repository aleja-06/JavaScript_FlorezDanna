console.log("Hola Mundo")

let a=1
let b=5

console.log(typeof a)

palabra1= "campus"
let palabra2= "land"

concatenacion= palabra1+palabra2;
console.log (concatenacion)
console.log (typeof concatenacion)


operacion= (((5**8)/2)*2)
operacion2= operacion%2

console.log (operacion2)
 //************ Funcion sin retorno y sin parametros******* */
  function funcionNormal(){
    console.log("Mi Funcion");
  }

  //**************Funcion sin retorno y con parametros ******/
   function suma(a,b){
    console.log(a+b);
   }

   //**************Funcion con retorno y con parametros*********/

   function sumaR(a,b){
    return (a+b)
   }
    sumaR(7+7)
   //******************Funcion con retorno y sin parametros**********/
   function salonFavorito(){
    return "p1";
   } 

   //**Ejercicio****/

   function Grados(C){
    formulaGrados= 32+ (9*C/5);
    return formulaGrados
   }

   console.log (Grados(5));