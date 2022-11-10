var btn = document.querySelector("#btn");

console.log(btn);

btn.addEventListener("click", function(){

    console.log("clciou");

    console.log(this);

    this.style.color = "red";
});

var title = document.querySelector("#title");

title.addEventListener("click", function(){

    var subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none";
})

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("dblclick",function(){

    console.log("click duplo");
})