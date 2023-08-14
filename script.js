let buttonplus = document.querySelector("#plus");
let buttonminus = document.querySelector("#minus");
let count = document.querySelector("#count-number");    
let wrap = document.querySelector('.image')
let number = 0;
let item = document.querySelector('button')

item.onclick = function() {
    if(count > 0) {
        count.innerHTML = 0
    } else {
        count.innerHTML = 0
    }
  }
  wrap.onclick = function() {
    if(count > 0) {
        count.innerHTML = Math.floor(Math.random() * 100)
    } else {
        count.innerHTML = Math.floor(Math.random() * 100)
    }
  }

buttonplus.onclick = function() {
    if (number <= 99) {
        number++;
        count.innerHTML = number;
        updateCounter();
    }
};

buttonminus.onclick = function() {
   if (number <= 1) {
       number--;
       count.innerHTML = number;
       updateCounter();
     
    }
}


