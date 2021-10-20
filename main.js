// toto budeš potřebovat později




/*
úkoly pro 4. lekci:
1) Vydefinuj si všechny potřebné proměnné. Budeme chtít 100% pracovat se souřadnicemi panáčka a mince, s jejich šířkou a výškou. Potřebujeme i odkaz na jejich HTML elementy.
2) Vytvoř funkci, která umístí panáčka na střed obrazovky. Budeme potřebovat znát šířku a výšku okna (využij vlastnosti - window.innerWidth a window.innerHeight)
3) Podobnou funkci vytvoř i pro minci, tu každopádně chceme umístit náhodně po mapě
4) Reaguj na kliknutí šipek a rozpohybuj panáčka - nahoru, dolu, doleva, doprava. Budeš pracovat se souřadnicemi X,Y. 
5) Vytvoř "animaci", při stisku šipky nahoru se panáček otočí nahoru (změní se obrázek), podobně u dalších šipek

Nezapomeň vše ošetřit - panáček ti nemůže zajíždět za obrazovku apod.
*/


let panacek = document.querySelector("#panacek")
let mince = document.querySelector("#mince")
let body = document.querySelector('body')
let skore = document.querySelector("#score")

let minceSirka = 36 
let minceVyska = 36 

let panacekSirka = 64 
let panacekVyska = 70 

let cislo = 0
let panacekX = 0
let panacekY = 0
body.addEventListener("keydown", Klik)
mince.addEventListener("click", mince)
let posun = 5 


function Klik(event){
	console.log(event.key)

	if(event.key === "ArrowLeft"){
		panacek.src = '/obrazky/panacek-vlevo.png'
		panacekX = panacekX + posun
		panacek.style.right = panacekX + "px"
		
	} else if(event.key === "ArrowRight"){
		panacek.src = '/obrazky/panacek-vpravo.png'
		panacekX = panacekX - posun
		panacek.style.right = panacekX + "px"

	} else if(event.key === "ArrowDown"){
		panacek.src = '/obrazky/panacek.png'
		panacekY = panacekY + posun
		panacek.style.top = panacekY + "px"

	} else if(event.key === "ArrowUp"){
		panacek.src = '/obrazky/panacek-nahoru.png'
		panacekY = panacekY - posun
		panacek.style.top = panacekY + "px"
	}
	
}


let minceX = Math.floor(Math.random() * window.innerWidth) ;
let minceY = Math.floor(Math.random() * window.innerHeight);

mince.style.right = minceX + "px"
mince.style.top = minceY + "px"


console.log(minceX)
console.log(minceY)
console.log(panacekX)
console.log(panacekY)
console.log(minceSirka)
console.log(minceVyska)
console.log(panacekVyska)
console.log(panacekSirka)




if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji

	//mince.style.right = Math.floor(Math.random() * window.innerWidth) + "px";
	 //mince.style.top = Math.floor(Math.random() * window.innerHeight) + "px";

}






	