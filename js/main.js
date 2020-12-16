const FizzBuzz =()=> {
  const div1 = document.getElementById('div1')
  for(let i =1 ; i< 101; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      let p1 = document.createElement("p")
      p1.appendChild(document.createTextNode("FizzBuzz"))
      div1.appendChild(p1)
    } else if(i % 5 == 0) {
      p1 = document.createElement("p")
      p1.appendChild(document.createTextNode("Buzz"))
      div1.appendChild(p1)
    } else if (i % 3 == 0){
      p1 = document.createElement("p")
      p1.appendChild(document.createTextNode("Fizz"))
      div1.appendChild(p1)
    } else {
      p1 = document.createElement("p")
      p1.appendChild(document.createTextNode(i))
      div1.appendChild(p1)
    }
  }
}

FizzBuzz()



