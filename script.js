const checkbox = document.getElementById("input");              
const conatiner = document.getElementById("chekcbox-container");         

function add(){
    if(checkbox.value === ""){
        alert("Please write the name of your list")
    }
    else{
       let  li = document.createElement("li")
        li.innerHTML = checkbox.value;
        conatiner.appendChild(li) 
        let span = document.createElement("span")
        span.innerHTML=("\u00d7")
        li.appendChild(span)
    }
    checkbox.value=""
    savedata()
}
conatiner.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
}, false)

function savedata(){
localStorage.setItem("data" , conatiner.innerHTML)

}
function showtask(){
    conatiner.innerHTML = localStorage.getItem('data')
}
showtask()