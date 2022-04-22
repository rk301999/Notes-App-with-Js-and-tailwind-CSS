showNotes();
let addBtn = document.getElementById("addBtn");
console.log(addBtn);
addBtn.addEventListener("click",function(e){
    let addTxt = document.getElementById("addTxt");
    if(addTxt.value == ""){
        alert("enter something first ");
    }
    else{
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notes);
    showNotes();
}
})

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj=[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element,index) {
        html+= `<div class="cards px-2 py-2 border-2  rounded-lg  ">
        <p class=" py-1 font-semibold"> ADD NOTE ${index + 1}</p>
        <p class="py-1 "> ${element}</p>
        <button id="${index}" onclick="deleteNote(this.id)" class="ml-8 bg-green-600 text-sm text-black px-2 py-1 rounded-lg hover:bg-green-800 ">Delete Note </button>
    </div>`
    });

    let notesElm = document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `nothing to show rn  `;
 
    }
}
    function deleteNote(index) {
        let notes = localStorage.getItem("notes");
        if(notes == 0){
            notesObj =[];
        }
        else{
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index,1);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        showNotes();
    }

let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){

    let inputval = search.value.toLowerCase();
    
    console.log(inputval);
    let cards = document.getElementsByClassName("cards");
    console.log(cards);
    Array.from(cards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[1].innerText.toLowerCase();
        console.log(cardTxt);
        if(cardTxt.includes(inputval)){
            element.style.display = "block";
        }else{
            element.style.display = "none"
        }
    })
})