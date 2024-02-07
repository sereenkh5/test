
const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function AddTask(){
    if(inputbox.value==='')
    {
        alert("You Must Write SomeThing!>>>")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);

    }
    inputbox.value='';
}
listcontainer.addEventListener("click",function(e){
    if (e.target.tagName==="LI")

    {
        e.target.classList.toggle("checked");
}
},false);

