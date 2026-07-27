// ===============================
// HUB DIGITAL v0.1
// ===============================

// Adicione seus links aqui.
// Basta copiar um objeto e alterar as informações.

const produtos = [

{
categoria:"Shopee",
titulo:"Minha Loja Shopee",
descricao:"Confira minhas recomendações na Shopee.",
link:"https://SEU-LINK-SHOPEE"
},

{
categoria:"Kiwify",
titulo:"Curso em Destaque",
descricao:"Meu curso recomendado na Kiwify.",
link:"https://SEU-LINK-KIWIFY"
},

{
categoria:"Cursos",
titulo:"Curso de Marketing",
descricao:"Aprenda marketing digital.",
link:"https://SEU-LINK"
},

{
categoria:"Automotivo",
titulo:"Ferramenta Automotiva",
descricao:"Produto recomendado.",
link:"https://SEU-LINK"
},

{
categoria:"Tecnologia",
titulo:"Notebook",
descricao:"Promoção da semana.",
link:"https://SEU-LINK"
},

{
categoria:"Projetos",
titulo:"Senhor da Guerra",
descricao:"Meu jogo em desenvolvimento.",
link:"https://SEU-LINK-GITHUB-PAGES"
},

{
categoria:"Redes Sociais",
titulo:"Instagram",
descricao:"Siga meu perfil.",
link:"https://instagram.com/SEUUSUARIO"
}

];

//===============================
// Categorias
//===============================

const categorias=[
"Shopee",
"Kiwify",
"Cursos",
"Automotivo",
"Tecnologia",
"Projetos",
"Redes Sociais"
];

const icones={
"Shopee":"🛒",
"Kiwify":"📚",
"Cursos":"🎓",
"Automotivo":"🚗",
"Tecnologia":"💻",
"Projetos":"🎮",
"Redes Sociais":"📱"
};

const listaCategorias=document.getElementById("listaCategorias");
const listaProdutos=document.getElementById("listaProdutos");
const secCategorias=document.getElementById("categorias");
const secProdutos=document.getElementById("produtos");
const titulo=document.getElementById("tituloCategoria");
const pesquisa=document.getElementById("pesquisa");

//===============================
// Criar Categorias
//===============================

function carregarCategorias(){

listaCategorias.innerHTML="";

categorias.forEach(cat=>{

const total=produtos.filter(p=>p.categoria===cat).length;

const card=document.createElement("div");

card.className="categoria";

card.innerHTML=`
<div class="infoCategoria">
<h3>${icones[cat]} ${cat}</h3>
<p>${total} itens</p>
</div>

<div class="total">
${total}
</div>
`;

card.onclick=()=>abrirCategoria(cat);

listaCategorias.appendChild(card);

});

}

//===============================
// Abrir Categoria
//===============================

function abrirCategoria(nome){

secCategorias.style.display="none";

secProdutos.style.display="block";

titulo.innerHTML=icones[nome]+" "+nome;

mostrarProdutos(nome);

}

//===============================
// Mostrar Produtos
//===============================

function mostrarProdutos(categoria){

listaProdutos.innerHTML="";

const lista=produtos.filter(p=>p.categoria===categoria);

lista.forEach(prod=>{

const card=document.createElement("div");

card.className="produto";

card.innerHTML=`

<h3>${prod.titulo}</h3>

<p>${prod.descricao}</p>

<a href="${prod.link}" target="_blank">

Abrir

</a>

`;

listaProdutos.appendChild(card);

});

}

//===============================
// Voltar
//===============================

document.getElementById("voltar").onclick=()=>{

secCategorias.style.display="block";

secProdutos.style.display="none";

};

//===============================
// Pesquisa
//===============================

pesquisa.addEventListener("keyup",()=>{

const texto=pesquisa.value.toLowerCase();

const cards=document.querySelectorAll(".categoria");

cards.forEach(card=>{

const nome=card.innerText.toLowerCase();

if(nome.includes(texto))
card.style.display="flex";
else
card.style.display="none";

});

});

//===============================

carregarCategorias();