//apparition de force-faiblesse au clic
var button = document.getElementById("ff_button");
var plusMinus = document.getElementById("plus_minus");
var forceFaiblesse = document.getElementById("force_faiblesse")

plusMinus.textContent = "+";
forceFaiblesse.style.display = "none";

function plusMinusChoice() {
  if (plusMinus.textContent === "+") {
    plusMinus.textContent = "-";
  } else {
    plusMinus.textContent = "+";
  };
}

button.addEventListener("click", function(){
  plusMinusChoice();
  $("#force_faiblesse").slideToggle("slow");  
	forceFaiblesse.style.display = "flex";
});