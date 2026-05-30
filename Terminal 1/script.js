const senhaCorreta = "Nós Somos Todos Um";

const pessoas = [
  ["Jimmy Hopper", "Delegado", "Doutora"],
  ["Suellen Gosling", "Secretário", ""],
  ["Viktor Crowling", "Policial", "Donuts"],
  ["Andrew Thomas", "Policial", "Estrela"],
  ["Morty Cramberg", "Policial", "Dinheiro"],
  ["Stussy Von Berg", "Bibliotecária", "Livros"],
  ["Ronald Kelvon", "Padre", "Perdão"],
  ["Olga Freeman", "Irmã", "Deus"],
  ["Ferdnand Housen", "Diretor", "Silêncio"],
  ["Greg Conley", "Professor", "Educação"],
  ["Carmen Pendey", "Professor", "Ensino"],
  ["Mia Kain", "Professora", "Segredos"],
  ["Jonathan Miller", "Aluno", "Foto"],
  ["Nancy Allen", "Aluna", "Fuzil"],
  ["Jack Effrey", "Aluno", "Música"],
  ["Merida Scon", "Professora", "Diretor"],
  ["Scott Meyer", "Aluno", "Merida"],
  ["Ashley Kennedy", "Aluna", "Carros"],
  ["Leon Moshtom", "Aluno", "Japão"],
  ["Michael Afton", "Aluno", "Urso"],
  ["William Collem", "Aluno", "Coruja"]
];

const password = document.getElementById("password");
const message = document.getElementById("message");
const login = document.getElementById("login");
const screen = document.getElementById("screen");
const list = document.getElementById("list");

password.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    verificarSenha();
  }
});

function verificarSenha() {
  const tentativa = password.value.trim().toLowerCase();

  if (tentativa === senhaCorreta) {
    message.textContent = "ACESSO AUTORIZADO...";

    setTimeout(() => {
      login.classList.add("hidden");
      screen.classList.remove("hidden");
      mostrarPessoas();
    }, 1000);
  } else {
    message.innerHTML = '<span class="error">SENHA INCORRETA. ACESSO NEGADO.</span>';
    password.value = "";
  }
}

function mostrarPessoas() {
  list.innerHTML = "";

  pessoas.forEach((pessoa, index) => {
    const numero = String(index + 1).padStart(2, "0");
    const nome = pessoa[0];
    const cargo = pessoa[1];
    const info = pessoa[2];

    const linha = document.createElement("div");
    linha.classList.add("entry");

    linha.textContent = info
      ? `${numero}. ${nome} — ${cargo} — ${info}`
      : `${numero}. ${nome} — ${cargo}`;

    list.appendChild(linha);
  });
}