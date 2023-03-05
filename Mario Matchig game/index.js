let chk1 = document.querySelector("#chk1");
let chk2 = document.querySelector("#chk2")
let chk3 = document.querySelector("#chk3")
let reset=document.querySelector(".reset")
chk1.onlick=function(){
    if(chk1.checked=== true){
        chk1.disabled='true';
    }
}
chk2.onlick=function(){
    if(chk2.checked=== true){
        chk2.disabled='true';
    }
}
chk1.onlick=function(){
    if(chk3.checked=== true){
        chk3.disabled='true';
    }
}

reset.onlick=function(){
    chk1.disabled='false';
    chk1.checked='false';

    chk2.disabled='false';
    chk2.checked='false';

    chk3.disabled='false';
    chk3.checked='false';
}


// let reset=document.querySelector(".reset");
// //  reset.addEventListner("click",function(){
// //      alert("hiii")
// //  })
// reset.onclick=function(){
//     alert("ghifiei");
// }