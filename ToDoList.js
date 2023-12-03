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
        let divs=document.createElement("div");
        divs.classList.add("groupe")
        listes.appendChild(divs);
        let lis =document.createElement("li")
        divs.appendChild(lis)
        lis.innerHTML =input.value;
        let spans= document.createElement("span")
        divs.appendChild(spans);
        let bouton1 =document.createElement("button");
        bouton1.classList.add("rouge")
        bouton1.innerText="ToDo"
        divs.appendChild(bouton1)
        let bouton2=document.createElement("button")
        bouton2.classList.add("orange")
        bouton2.innerText="Doing"
        divs.appendChild(bouton2)
         let bouton3=document.createElement("button")
         bouton3.classList.add("vert")
         bouton3.innerText="Done"
         divs.appendChild(bouton3)
        
        
        
    }
    input.value ="";
    // changement color
    
         bouton2.addEventListener('click', () => {
        if (bouton2.innerHTML.toLowerCase() == "Doing") {
            divs.style.backgroundColor = 'yellow'
        }
    });
    bouton3.addEventListener('click', () => {
        if (bouton3.innerHTML.toLowerCase() == "Done") {
            divs.style.backgroundColor = 'yellow'
        }
    });
    bouton1.addEventListener('click', () => {
        if (bouton1.innerHTML.toLowerCase() == "ToDo") {
            divs.style.backgroundColor = 'yellow'
        }
    });

}

