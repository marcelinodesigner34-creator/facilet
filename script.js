const botoesSubmenu = document.querySelectorAll(".alternar-submenu");

botoesSubmenu.forEach(function(botao){
    botao.addEventListener("click", function(){
  this.nextElementSibling.classList.toggle("ativo");
  this.classList.toggle("aceso");
    });
    
});
const ulDisciplinas = document.getElementById("disciplina-7a");
const disciplinas=["Português", "Matemática", "Ciências", "História", "Geografia", "Inglês", "Artes", "ED.Física", "EN.Religioso" ];
disciplinas.forEach(function(disciplina){
const liDisciplinas = `<li class="disciplinas">
    <button class="btn-disciplinas"><i data-lucide="book-open"></i>${disciplina}<i class="seta" data-lucide="chevron-right"></i></button>
</li>`
ulDisciplinas.innerHTML += liDisciplinas
});
lucide.createIcons();

