function openModal(title,text){
    document.getElementById("modal").style.display="flex";
    document.getElementById("modalTitle").innerText=title;
    document.getElementById("modalText").innerText=text;
}

function closeModal(){
    document.getElementById("modal").style.display="none";
}

window.onclick=function(e){
    let modal=document.getElementById("modal");
    if(e.target==modal){
        modal.style.display="none";
    }
}
