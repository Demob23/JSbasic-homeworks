const hit = document.getElementById("dead");
const miss = document.getElementById("lost");
let counterHits = 0;
let counterMisses = 0;
getHole = index => document.getElementById(`hole${index}`);
for (holeIndex = 1; holeIndex < 10; holeIndex++) {
  let hole = getHole(holeIndex);
  hole.addEventListener( "click", function() {
    if ( hole.classList.contains( "hole_has-mole" )) {
      counterHits++;
      hit.textContent = counterHits;
    } else {
      counterMisses++;
      miss.textContent = counterMisses;
    } 
    if (counterHits >= 10) {
      hit.textContent = 0;
      miss.textContent = 0;
      alert('Вы победили');
    } else if (counterMisses >= 5) {
      hit.textContent = 0;
      miss.textContent = 0;
      alert('Вы проиграли :C');
    };
});
}