let addBtn = document.getElementById("addBtn");
console.log(addBtn);
addBtn.addEventListener("click",function(e){
    let addTxt = document.getElementById("addTxt");
    console.log(addTxt);
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
        html+= `<div class="cards border-2 ">
        <p class="text-sm py-2"> Add note ${index + 1}</p>
        <p class="py-2"> ${element}</p>
        <button class=" bg-black text-sm text-white px-2 py-1 rounded-lg hover:bg-gray-700 ">Delete Note </button>
    </div>`
    });

    let notesElm = document.getElementById('notes');
    if(notes.length != 0){
        notesElm.innerHTML = html;
    }
}