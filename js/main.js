(function(){
  var b=document.getElementById("theme-toggle");
  if(b)b.addEventListener("click",function(){
    var r=document.documentElement,cur=r.dataset.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),n=cur==="dark"?"light":"dark";
    r.dataset.theme=n;try{localStorage.setItem("theme",n)}catch(e){}
  });
  var y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
})();
