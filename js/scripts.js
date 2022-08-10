window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const person1Input = document.getElementById("person1Input").value;
    document.querySelector("span#person1a").innerText = person1Input;
    document.querySelector("div#story").removeAttribute("class");
    
    increaseFontSize(10);


    }
  };
  



// make the text bigger every click, and maybe concat some !!!

    function increaseFontSize(increaseFactor){
      let p = document.querySelector("p");
      txt = document.getElementById("p");
      style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
      currentSize = parseFloat(style);
      txt.style.fontSize = (currentSize + increaseFactor) + 'px';
 }