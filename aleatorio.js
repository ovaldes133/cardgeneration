pinta=["&#9830", "&#9829", "&#9824", "&#9827"]
numero=["A",2,3,4,5,6,7,8,9,"J","Q","K"]

function randomNumero() {
	var aleatorioNumber = numero[Math.floor(Math.random() * numero.length)];
	document.getElementById('numero').innerHTML = aleatorioNumber;


}

function superior(){
    var aleatorioPinta=pinta[Math.floor(Math.random() * pinta.length)];
    document.getElementById('pintaup').innerHTML = aleatorioPinta;
    document.getElementById('pintadown').innerHTML = aleatorioPinta;

    if (aleatorioPinta==="&#9830" || aleatorioPinta==="&#9829"){
		document.getElementById('pintaup').classList.add("red");
        document.getElementById('pintadown').classList.add("red");
        document.getElementById('numero').classList.add("red");
	}else if (aleatorioPinta==="&#9827" || aleatorioPinta==="&#9824"){
        document.getElementById('pintaup').classList.add("black");
        document.getElementById('pintadown').classList.add("black");
        document.getElementById('numero').classList.add("black");
			
	
	}
    
   
}
