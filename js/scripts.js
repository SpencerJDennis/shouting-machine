window.onload = function() {
  document.querySelector("form").addEventListener("submit", shoutFunction)
}

function shoutFunction(event) {
    event.preventDefault();
    const person1Input = document.getElementById("person1Input").value;
    document.querySelector("span#person1a").innerText = person1Input;
    document.querySelector("div#story").removeAttribute("class");
    document.querySelector("button#more").addEventListener("click", louder)
  }
  
function louder(event) {
  console.log("louder running")
  document.getElementById("span#person1a").style.fontSize = '10px';
  let biggerWord = document.querySelector("span#person1a").innerText
  biggerWord.concat("!!")
  document.querySelector("span#person1a").innerText = biggerWord;
  console.log('it ran')
}

//span#person1a.louder()
//document.getElementById("span#person1a").style.fontSize = '10px';

// make the text bigger every click, and maybe concat some !!!

   // function increaseFontSize(increaseFactor){
   //   let p = document.querySelector("p");
   //   txt = document.getElementById("p");
   //   style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
     // currentSize = parseFloat(style);
     // txt.style.fontSize = (currentSize + increaseFactor) + 'px';
 //}