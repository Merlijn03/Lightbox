const alleInformatie = document.querySelectorAll('.informatie');
const alleNormals = document.querySelectorAll('.normal');

let alleInhoud = [];

for(let i=0; i<alleInformatie.length; i++) {
  alleInhoud.push(alleInformatie[i]);
  alleInformatie[i].remove();
}

function verwijderModaal() {
  document.getElementById('modaal').remove();
}

function maakModaal(num) {
  console.log(alleInhoud[num]);
  let modaal = document.createElement('div');
  modaal.className = 'modaal';
  modaal.id = 'modaal';
  modaal.addEventListener('click', verwijderModaal);
  let sluitknop = document.createElement('i');
  sluitknop.className = 'fas fa-times-circle sluit-knop'
  sluitknop.addEventListener('click', verwijderModaal);
  let modaalContainer = document.createElement('div');
  modaalContainer.className = 'modaal-container'
  modaalContainer.innerHTML = alleInhoud[num].innerHTML;
  modaalContainer.addEventListener('click', function(e) {
    e.stopPropagation();
  })
  modaalContainer.prepend(sluitknop);
  modaal.append(modaalContainer);
  document.body.append(modaal);
}

for(let i=0; i<alleNormals.length; i++) {
  alleNormals[i].addEventListener('click', function() {
    maakModaal(i);
  })
}
