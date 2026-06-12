const botoesSubmenu = document.querySelectorAll(".alternar-submenu");

botoesSubmenu.forEach(function(botao){
    botao.addEventListener("click", function(){
  this.nextElementSibling.classList.toggle("ativo");
  this.classList.toggle("aceso");
    });
    
});
