///////////////////////
variaveis()
function variaveis(){
vida = 0;
vida2 = 0,
vida3 = 0,
vida4 = 0,
vida5 = 0,
vida6 = 0,
vida7 = 0,
vida8 = 0,
vida9 = 0,
vida10 =0;
}
/////////////////////////////////////////////////////
function inicia() {
  document.getElementById("vida").innerHTML = vida
  document.getElementById("vida2").innerHTML = vida2
  document.getElementById("vida3").innerHTML = vida3
  document.getElementById("vida4").innerHTML = vida4
  document.getElementById("vida5").innerHTML = vida5
  document.getElementById("vida6").innerHTML = vida6
  document.getElementById("vida7").innerHTML = vida7
  document.getElementById("vida8").innerHTML = vida8
  document.getElementById("vida9").innerHTML = vida9
  document.getElementById("vida10").innerHTML = vida10
}
/////////////////////////////////////////////////////
function soma() {
  vida++
  document.getElementById("vida").innerHTML = vida
  save()
}
function soma2() {
  vida2++
  document.getElementById("vida2").innerHTML = vida2
  save()
}
function soma3() {
  vida3++
  document.getElementById("vida3").innerHTML = vida3
  save()
}
function soma4() {
  vida4++
  document.getElementById("vida4").innerHTML = vida4
  save()
}
function soma5() {
  vida5++
  document.getElementById("vida5").innerHTML = vida5
  save()
}
function soma6() {
  vida6++
  document.getElementById("vida6").innerHTML = vida6
  save()
}
function soma7() {
  vida7++
  document.getElementById("vida7").innerHTML = vida7
  save()
}
function soma8() {
  vida8++
  document.getElementById("vida8").innerHTML = vida8
  save()
}
function soma9() {
  vida9++
  document.getElementById("vida9").innerHTML = vida9
  save()
}
function soma10() {
  vida10++
  document.getElementById("vida10").innerHTML = vida10
  save()
}
////////////////////////////////////////////////////
function menos() {
  vida--
  document.getElementById("vida").innerHTML = vida
  save()
}
function menos2() {
  vida2--
  document.getElementById("vida2").innerHTML = vida2
  save()
}
function menos3() {
  vida3--
  document.getElementById("vida3").innerHTML = vida3
  save()
}
function menos4() {
  vida4--
  document.getElementById("vida4").innerHTML = vida4
  save()
}
function menos5() {
  vida5--
  document.getElementById("vida5").innerHTML = vida5
  save()
}
function menos6() {
  vida6--
  document.getElementById("vida6").innerHTML = vida6
  save()
}
function menos7() {
  vida7--
  document.getElementById("vida7").innerHTML = vida7
  save()
}
function menos8() {
  vida8--
  document.getElementById("vida8").innerHTML = vida8
  save()
}
function menos9() {
  vida9--
  document.getElementById("vida9").innerHTML = vida9
  save()
}
function menos10() {
  vida10--
  document.getElementById("vida10").innerHTML = vida10
  save()
}
/////////////////////////////////////////////////////
loadtime()
function loadtime() {
  window.addEventListener("load", (event) => {
    load();
  });
}

function comando() {
   let cnd = window.prompt('Digite o codigo.')
    if (cmd === setvida){
      setvida()
    }
  }

function load() {
  vida = localStorage.getItem('vida');
  vida2 = localStorage.getItem('vida2');
  vida3 = localStorage.getItem('vida3');
  vida4 = localStorage.getItem('vida4');
  vida5 = localStorage.getItem('vida5');
  vida6 = localStorage.getItem('vida6');
  vida7 = localStorage.getItem('vida7');
  vida8 = localStorage.getItem('vida8');
  vida9 = localStorage.getItem('vida9');
  vida10 = localStorage.getItem('vida10');
  inicia()
}
function save() {
  localStorage.setItem('vida', vida);
  localStorage.setItem('vida2', vida2);
  localStorage.setItem('vida3', vida3);
  localStorage.setItem('vida4', vida4);
  localStorage.setItem('vida5', vida5);
  localStorage.setItem('vida6', vida6);
  localStorage.setItem('vida7', vida7);
  localStorage.setItem('vida8', vida8);
  localStorage.setItem('vida9', vida9);
  localStorage.setItem('vida10', vida10);
}
/////////////////////////////////////////////////////
function setvida() {
  const valor = Number(prompt("Qual será o valor da vida?"))
  vida = valor
  vida2 = valor
  vida3 = valor
  vida4 = valor
  vida5 = valor
  vida6 = valor
  vida7 = valor
  vida8 = valor
  vida9 = valor
  vida10 = valor
  inicia()
  save()
}
function clearstorage(){
  var resultado = window.confirm('Limpar todos valores na LocalStorage?')
  if (resultado === true){
  localStorage.clear();
  variaveis()
  save()
  inicia()
    }
else{alert('Você desistiu de limpar a LocalStorage.')}
  }
/////////////////////////////////////////////////////