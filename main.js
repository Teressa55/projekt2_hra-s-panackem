// toto budeš potřebovat později




/*
úkoly pro 4. lekci:
1) Vydefinuj si všechny potřebné proměnné. Budeme chtít 100% pracovat se souřadnicemi panáčka a mince, s jejich šířkou a výškou. Potřebujeme i odkaz na jejich HTML elementy.
2) Vytvoř funkci, která umístí panáčka na střed obrazovky. Budeme potřebovat znát šířku a výšku okna (využij vlastnosti - window.innerWidth a window.innerHeight)
3) Podobnou funkci vytvoř i pro minci, tu každopádně chceme umístit náhodně po mapě
4) Reaguj na kliknutí šipek a rozpohybuj panáčka - nahoru, dolu, doleva, doprava. Budeš pracovat se souřadnicemi X,Y. 
5) Vytvoř "animaci", při stisku šipky nahoru se panáček otočí nahoru (změní se obrázek), podobně u dalších šipek

Nezapomeň vše ošetřit - panáček ti nemůže zajíždět za obrazovku apod.

// aby panacek nevyjizdel z obrazovky 
*/




let body = document.querySelector('body')
let skore = document.querySelector("#score")
let zivot = document.querySelector("#srdce")
let cislo = 0
let posun = 5
let bodiky = 0
let vyhra = 6
let zivot_body = 5

//hudba
let fanfara = document.querySelector("#zvukfanfara")
let zvukmince = document.querySelector("#zvukmince")
let pozadi_hudba = document.querySelector("#hudba")


//panacek
let panacek = document.querySelector("#panacek")
let panacekSirka = 64 
let panacekVyska = 70 
let panacekX = 0
let panacekY = 0

//mince
let mince = document.querySelector("#mince")
let minceSirka = 36 
let minceVyska = 36 
let minceX = Math.floor(Math.random() * window.innerWidth) ;
let minceY = Math.floor(Math.random() * window.innerHeight);
mince.style.left = minceX + "px"
mince.style.top = minceY + "px"

//zlodusi
let zloduch = document.querySelector('#nepritel')
let zloduchSirka = 51
let zloduchVyska = 51
let zloduchX = Math.floor(Math.random() * window.innerWidth) + 1;
let zloduchY = Math.floor(Math.random() * window.innerHeight) + 1;
zloduch.style.left = zloduchX + "px"
zloduch.style.top = zloduchY + "px"

//moucha
let moucha = document.querySelector('#moucha')
let mouchaSirka = 50
let mouchaVyska = 28
let mouchaX = Math.floor(Math.random() * window.innerWidth) + 1;
let mouchaY = Math.floor(Math.random() * window.innerHeight) + 1;
moucha.style.left = mouchaX + "px"
moucha.style.top = mouchaY + "px"

//hvezda
let hvezda = document.querySelector('#hvezda')
let hvezdaSirka = 32
let hvezdaVyska = 34
let hvezdaX = Math.floor(Math.random() * window.innerWidth) + 1;
let hvezdaY = Math.floor(Math.random() * window.innerHeight) + 1;
hvezda.style.left = hvezdaX + "px"
hvezda.style.top = hvezdaY + "px"

//funkce
body.addEventListener("keydown", Klik)

function Klik(event){
	pozadi_hudba.play()
	if(event.key === "ArrowLeft"){
		panacek.src = '/obrazky/panacek-vlevo.png'
		if((panacekX + panacekSirka) <= 0 ){
            posun = 0
			console.log("true")
        }
        else{
			console.log("false")
		panacekX = panacekX - posun
		panacek.style.left = panacekX + "px"
			if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
				// panacek a mince se prekryvaji
				minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
				minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska)) ;
				mince.style.left = minceX + "px"
				mince.style.top = minceY + "px"
				bodiky = bodiky + 1
				skore.textContent = bodiky
				zvukmince.play()
				if (bodiky === 6){
					alert("Vyhral si")
					bodiky = 0
					fanfara.play()
				} 
			} 
			else if (!( panacekX + panacekSirka < zloduchX || zloduchX + zloduchSirka < panacekX || panacekY + panacekVyska < zloduchY || zloduchY + zloduchVyska < panacekY)) {
				// panacek a zloduch se prekryvaji
				zloduchX = Math.floor(Math.random() * (window.innerWidth - zloduchSirka));
				zloduchY = Math.floor(Math.random() * (window.innerHeight - zloduchVyska));
				zloduch.style.top = zloduchY + "px"
				zloduch.style.left = zloduchX + "px"
				zivot_body = zivot_body - 1
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if(zivot_body === 0 || zivot_body <= 0){
					zivot.src = "obrazky/srdce-0.png"
					alert ("prohral jsi. smula")
					console.log(zivot_body)
				} 
			}	
			else if (!( panacekX + panacekSirka < hvezdaX || hvezdaX + hvezdaSirka < panacekX || panacekY + panacekVyska < hvezdaY || hvezdaY + hvezdaVyska < panacekY)) {
				// panacek a hvezda se prekryvaji
				hvezdaX = Math.floor(Math.random() * (window.innerWidth - hvezdaSirka))
				hvezdaY = Math.floor(Math.random() * (window.innerHeight - hvezdaVyska))
				hvezda.style.top = hvezdaY + "px"
				hvezda.style.left = hvezdaX + "px"
				zivot_body = zivot_body + 1
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if (zivot_body === 6){
					zivot_body = zivot_body - 1
				}
			}
			else if (!( panacekX + panacekSirka < mouchaX || mouchaX + mouchaSirka < panacekX || panacekY + panacekVyska < mouchaY || mouchaY + mouchaVyska < panacekY)) {
				// panacek a moucha se prekryvaji
				mouchaX = Math.floor(Math.random() * (window.innerWidth - mouchaSirka))
				mouchaY = Math.floor(Math.random() * (window.innerHeight - mouchaVyska))
				moucha.style.top = mouchaY + "px"
				moucha.style.left = mouchaX + "px"
				zivot_body = zivot_body - 2
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if(zivot_body === 0 || zivot_body <= 0){
					zivot.src = "obrazky/srdce-0.png"
					console.log(zivot_body)
					alert("prohral jsi. smula.")
				} 
			}
		}
	} 
	else if(event.key === "ArrowRight"){
		panacek.src = '/obrazky/panacek-vpravo.png'
		if((panacekX + panacekSirka) >= window.innerWidth){
            posun = 0
			console.log("true")
        }
        else{
		console.log("false")
		panacekX = panacekX + posun
		panacek.style.left = panacekX + "px"
			if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
				// panacek a mince se prekryvaji
				minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka)) ;
				minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska )) ;
				mince.style.left = minceX + "px"
				mince.style.top = minceY + "px"
				bodiky = bodiky + 1
				skore.textContent = bodiky
				zvukmince.play()
				if (bodiky === 6){
					alert("Vyhral si")
					bodiky = 0
					fanfara.play()
				} 
			}
			else if (!( panacekX + panacekSirka < zloduchX || zloduchX + zloduchSirka < panacekX || panacekY + panacekVyska < zloduchY || zloduchY + zloduchVyska < panacekY)) {
				// panacek a zloduch se prekryvaji
				zloduchX = Math.floor(Math.random() * (window.innerWidth - zloduchSirka));
				zloduchY = Math.floor(Math.random() * (window.innerHeight - zloduchSirka));
				zloduch.style.top = zloduchY + "px"
				zloduch.style.left = zloduchX + "px"
				zivot_body = zivot_body - 1
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if(zivot_body === 0 || zivot_body <= 0){
					zivot.src = "obrazky/srdce-0.png"
					alert ("prohral jsi. smula")
					console.log(zivot_body)
				} 
			}	
			else if (!( panacekX + panacekSirka < hvezdaX || hvezdaX + hvezdaSirka < panacekX || panacekY + panacekVyska < hvezdaY || hvezdaY + hvezdaVyska < panacekY)) {
				// panacek a hvezda se prekryvaji
				hvezdaX = Math.floor(Math.random() * (window.innerWidth - hvezdaSirka))
				hvezdaY = Math.floor(Math.random() * (window.innerHeight - hvezdaVyska))
				hvezda.style.top = hvezdaY + "px"
				hvezda.style.left = hvezdaX + "px"
				zivot_body = zivot_body + 1
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if (zivot_body === 6){
					zivot_body = zivot_body - 1
				}
			}
			else if (!( panacekX + panacekSirka < mouchaX || mouchaX + mouchaSirka < panacekX || panacekY + panacekVyska < mouchaY || mouchaY + mouchaVyska < panacekY)) {
				// panacek a moucha se prekryvaji
				mouchaX = Math.floor(Math.random() * (window.innerWidth - mouchaSirka))
				mouchaY = Math.floor(Math.random() * (window.innerHeight - mouchaVyska))
				moucha.style.top = mouchaY + "px"
				moucha.style.left = mouchaX + "px"
				zivot_body = zivot_body - 2
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if(zivot_body === 0 || zivot_body <= 0){
					zivot.src = "obrazky/srdce-0.png"
					console.log(zivot_body)
					alert("prohral jsi. smula.")
				} 
			}
		}
	}
	else if(event.key === "ArrowDown"){
		panacek.src = '/obrazky/panacek.png'
		if((panacekY + panacekVyska) >= window.innerHeight){
			posun = 0
			console.log("true")	
		}
		else{
			console.log("false")
			panacekY = panacekY + posun
			panacek.style.top = panacekY + "px"
			if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
				// panacek a mince se prekryvaji
				minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka)) ;
				minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska)) ;
				mince.style.left = minceX + "px"
				mince.style.top = minceY + "px"
				bodiky = bodiky + 1
				skore.textContent = bodiky
				zvukmince.play()
				if (bodiky === 6){
					alert("Vyhral si")
					bodiky = 0
					fanfara.play()
				} 
			}
			else if (!( panacekX + panacekSirka < zloduchX || zloduchX + zloduchSirka < panacekX || panacekY + panacekVyska < zloduchY || zloduchY + zloduchVyska < panacekY)) {
				// panacek a zloduch se prekryvaji
				zloduchX = Math.floor(Math.random() * (window.innerWidth- zloduchSirka));
				zloduchY = Math.floor(Math.random() * (window.innerHeight - zloduchSirka));
				zloduch.style.top = zloduchY + "px"
				zloduch.style.left = zloduchX + "px"
				zivot_body = zivot_body - 1
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if(zivot_body === 0 || zivot_body <= 0){
					zivot.src = "obrazky/srdce-0.png"
					alert ("prohral jsi. smula")
					console.log(zivot_body)
				} 
			}	
			else if (!( panacekX + panacekSirka < hvezdaX || hvezdaX + hvezdaSirka < panacekX || panacekY + panacekVyska < hvezdaY || hvezdaY + hvezdaVyska < panacekY)) {
				// panacek a hvezda se prekryvaji
				hvezdaX = Math.floor(Math.random() * (window.innerWidth - hvezdaSirka))
				hvezdaY = Math.floor(Math.random() * (window.innerHeight - hvezdaVyska))
				hvezda.style.top = hvezdaY + "px"
				hvezda.style.left = hvezdaX + "px"
				zivot_body = zivot_body + 1
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if (zivot_body === 6){
					zivot_body = zivot_body - 1
				}
			}
			else if (!( panacekX + panacekSirka < mouchaX || mouchaX + mouchaSirka < panacekX || panacekY + panacekVyska < mouchaY || mouchaY + mouchaVyska < panacekY)) {
				// panacek a moucha se prekryvaji
				mouchaX = Math.floor(Math.random() * (window.innerWidth - mouchaSirka))
				mouchaY = Math.floor(Math.random() * (window.innerHeight - mouchaVyska))
				moucha.style.top = mouchaY + "px"
				moucha.style.left = mouchaX + "px"
				zivot_body = zivot_body - 2
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if(zivot_body === 0 || zivot_body <= 0){
					zivot.src = "obrazky/srdce-0.png"
					console.log(zivot_body)
					alert("prohral jsi. smula.")
				} 
			}
		}
	}
	else if(event.key === "ArrowUp"){
		panacek.src = '/obrazky/panacek-nahoru.png'
		if((panacekY + panacekSirka) <= 0){
			posun = 0
			console.log("true")	
		}
		else{
			console.log("false")
			panacekY = panacekY - posun
			panacek.style.top = panacekY + "px"
			if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
				// panacek a mince se prekryvaji
				minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka)) ;
				minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska)) ;
				mince.style.left = minceX + "px"
				mince.style.top = minceY + "px"
				bodiky = bodiky + 1
				skore.textContent = bodiky
				zvukmince.play()
				if (bodiky === 6){
					alert("Vyhral si")
					bodiky = 0
					fanfara.play()
				} 
			} 
			else if (!( panacekX + panacekSirka < zloduchX || zloduchX + zloduchSirka < panacekX || panacekY + panacekVyska < zloduchY || zloduchY + zloduchVyska < panacekY)) {
				// panacek a zloduch se prekryvaji
				zloduchX = Math.floor(Math.random() * (window.innerWidth - zloduchSirka))
				zloduchY = Math.floor(Math.random() * (window.innerHeight - zloduchVyska))
				zloduch.style.top = zloduchY + "px"
				zloduch.style.left = zloduchX + "px"
				zivot_body = zivot_body - 1
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if(zivot_body === 0){
					zivot.src = "obrazky/srdce-0.png"
					alert ("prohral jsi. smula")
					console.log(zivot_body)
				} 
			} 
			else if (!( panacekX + panacekSirka < hvezdaX || hvezdaX + hvezdaSirka < panacekX || panacekY + panacekVyska < hvezdaY || hvezdaY + hvezdaVyska < panacekY)) {
				// panacek a hvezda se prekryvaji
				hvezdaX = Math.floor(Math.random() * (window.innerWidth - hvezdaSirka))
				hvezdaY = Math.floor(Math.random() * (window.innerHeight - hvezdaVyska))
				hvezda.style.top = hvezdaY + "px"
				hvezda.style.left = hvezdaX + "px"
				zivot_body = zivot_body + 1
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if (zivot_body === 6){
					zivot_body = zivot_body - 1
				}
			}
			else if (!( panacekX + panacekSirka < mouchaX || mouchaX + mouchaSirka < panacekX || panacekY + panacekVyska < mouchaY || mouchaY + mouchaVyska < panacekY)) {
				// panacek a moucha se prekryvaji
				mouchaX = Math.floor(Math.random() * (window.innerWidth - mouchaSirka))
				mouchaY = Math.floor(Math.random() * (window.innerHeight - mouchaVyska))
				moucha.style.top = mouchaY + "px"
				moucha.style.left = mouchaX + "px"
				zivot_body = zivot_body - 2
				zivot.src = "obrazky/srdce-"+zivot_body+".png"
				if(zivot_body === 0 || zivot_body <= 0){
					zivot.src = "obrazky/srdce-0.png"
					console.log(zivot_body)
					alert("prohral jsi. smula.")
				} 
			}
		}
	}
}
	





	
	
	
	
		