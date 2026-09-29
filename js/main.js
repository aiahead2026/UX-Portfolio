(function(){
  var b=document.getElementById("theme-toggle");
  if(b)b.addEventListener("click",function(){
    var r=document.documentElement,cur=r.dataset.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"),n=cur==="dark"?"light":"dark";
    r.dataset.theme=n;try{localStorage.setItem("theme",n)}catch(e){}
  });
  var y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();

  // image lightbox
  var dlg=document.createElement("dialog");dlg.className="lightbox";dlg.setAttribute("aria-label","Full-size image");
  dlg.innerHTML='<button class="lb-close" type="button" aria-label="Close">&times;</button><img alt=""><p class="lb-caption"></p>';
  document.body.appendChild(dlg);
  var big=dlg.querySelector("img"),cap=dlg.querySelector(".lb-caption");
  function close(){dlg.close();document.body.classList.remove("lb-lock")}
  document.addEventListener("click",function(ev){
    var im=ev.target.closest(".case figure .media:not(.video) img");
    if(!im)return;
    big.src=im.currentSrc||im.src;big.alt=im.alt;
    var fc=im.closest("figure").querySelector("figcaption");cap.textContent=fc?fc.textContent:"";
    if(dlg.showModal)dlg.showModal();else dlg.setAttribute("open","");
    document.body.classList.add("lb-lock");
  });
  dlg.querySelector(".lb-close").addEventListener("click",close);
  dlg.addEventListener("click",function(ev){if(ev.target===dlg)close()});
  dlg.addEventListener("close",function(){document.body.classList.remove("lb-lock")});
})();
