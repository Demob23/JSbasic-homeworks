const sleep = ms => new Promise(r => setTimeout(r, ms));
async function countDown() {
  var timer = parseInt(document.getElementById('timer').innerHTML);
  while (timer > 0) {
    timer -= 1;
    await sleep(1000);
    document.getElementById('timer').innerHTML = timer;
    
  };
  alert('Вы победили в конкурсе!')
};

countDown()