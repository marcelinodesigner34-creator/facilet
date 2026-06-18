const botoesSubmenu = document.querySelectorAll(".alternar-submenu");

botoesSubmenu.forEach(function (botao) {
    botao.addEventListener("click", function () {
        this.nextElementSibling.classList.toggle("ativo");
        this.classList.toggle("aceso");
    });

});

const ulDisciplinas7a = document.getElementById("disciplina-7a");
const disciplinas = ["Português", "Matemática", "Ciências", "História", "Geografia", "Inglês", "Artes", "ED.Física", "EN.Religioso"];
disciplinas.forEach(function (disciplina) {
    const liDisciplinas = `<li class="disciplinas">
    <button class="btn-disciplinas"><i data-lucide="book-open"></i>${disciplina}<i class="seta" data-lucide="chevron-right"></i></button>
</li>`
    ulDisciplinas7a.innerHTML += liDisciplinas
});

const ulDisciplinas7b = document.getElementById("disciplina-7b");
disciplinas.forEach(function (disciplina) {
    const liDisciplinas = `<li class="disciplinas"><button class="btn-disciplinas"><i data-lucide="book-open"></i>${disciplina}<i class="seta" data-lucide="chevron-right"></i></button></li>`
    ulDisciplinas7b.innerHTML += liDisciplinas
});


const ulDisciplinas8a = document.getElementById("disciplina-8a");
disciplinas.forEach(function (disciplina) {
    const liDisciplinas = `<li class="disciplinas"><button class="btn-disciplinas"><i data-lucide="book-open"></i>${disciplina}<i class="seta" data-lucide="chevron-right"></i></button></li>`
    ulDisciplinas8a.innerHTML += liDisciplinas
});

const ulDisciplinas8b = document.getElementById("disciplina-8b");
disciplinas.forEach(function (disciplina) {
    const liDisciplinas = `<li class="disciplinas"><button class="btn-disciplinas"><i data-lucide="book-open"></i>${disciplina}<i class="seta" data-lucide="chevron-right"></i></button></li>`
    ulDisciplinas8b.innerHTML += liDisciplinas
});

const ulDisciplinas9a = document.getElementById("disciplina-9a");
disciplinas.forEach(function (disciplina) {
    const liDisciplinas = `<li class="disciplinas"><button class="btn-disciplinas"><i data-lucide="book-open"></i>${disciplina}<i class="seta" data-lucide="chevron-right"></i></button></li>`
    ulDisciplinas9a.innerHTML += liDisciplinas
});

const ulDisciplinas9b = document.getElementById("disciplina-9b");
disciplinas.forEach(function (disciplina) {
    const liDisciplinas = `<li class="disciplinas"><button class="btn-disciplinas"><i data-lucide="book-open"></i>${disciplina}<i class="seta" data-lucide="chevron-right"></i></button></li>`
    ulDisciplinas9b.innerHTML += liDisciplinas
});

lucide.createIcons();

