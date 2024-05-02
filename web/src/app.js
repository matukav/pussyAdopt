const passwordInput3 = document.getElementById("passBe");
const togglePassword3 = document.getElementById("togglePassword3");
const yuumiAdd = document.querySelector("#yuumiButton");
const catBody = document.querySelector("#catBody")

yuumiAdd.addEventListener("click", () =>{
    addYuumi()
})

function addYuumi() {    
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="imgs/yuumi.jpg" class="card-img-top" alt="yuumi">
          <div class="card-body">
            <h4 class="card-title">Yuumi</h4>
            <p class="card-text">XDDDDDDDDDDD</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Kor: 999 év</li>
            <li class="list-group-item">Nem: Nőstény</li>
            <li class="list-group-item">Szín: Magic</li>
          </ul>
        </div>
        <button class="btn btn2">Örökbe szeretném fogadni!</button>
        </div>
        `
        catBody.appendChild(div)
}

function ValidateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        return true;
    }else{
        alert("Érvénytelen email cím!");
        document.form1.text1.focus();
        return false;
}}