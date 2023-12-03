// recuperation id
let input=document.getElementById("input");
let listes = document.getElementById("list");
// pour faire ajout
function ajouter(){
    if(input.value===""){
        alert("ajouter une tache");
    }
    else{
        // creation element div
        let item=document.createElement("div");
        item.classList.add("groupe")
       

        let lis =document.createElement("li")
        item.appendChild(lis)
        lis.innerHTML =input.value;

        let spans= document.createElement("div")
      

        // creation button1
        let bouton1 =document.createElement("button");
        bouton1.classList.add("rouge")
        bouton1.innerText="ToDo"

       // creation button2
      let bouton2=document.createElement("button")
        bouton2.classList.add("orange")
        bouton2.innerText="Doing"
        
       // creation button3
         let bouton3=document.createElement("button")
         bouton3.classList.add("vert")
         bouton3.innerText="Done"
        
        
         spans.appendChild(bouton1)
         spans.appendChild(bouton2)
         spans.appendChild(bouton3)

         item.appendChild(spans);
         listes.appendChild(item)
    // listes.appendChild(divs);
    // divs.appendChild(spans);
        
    
    input.value ="";
    // changement color
     bouton2.addEventListener('click', () => {
        item.style.backgroundColor = 'yellow';
    });

    bouton3.addEventListener('click', () => {
        item.style.backgroundColor = 'green';
    });

    bouton1.addEventListener('click', () => {
        item.style.backgroundColor = 'red';
    });
}
    
   
}

