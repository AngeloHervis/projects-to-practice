const inputTarefa = document.getElementById("nova-tarefa");

inputTarefa.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    adicionarTarefa();
  }
});

function adicionarTarefa() {
  const inputTarefa = document.getElementById("nova-tarefa");
  const textoTarefa = inputTarefa.value;

  if (textoTarefa !== "") {
    const tarefa = document.createElement("li");
    tarefa.textContent = textoTarefa;
    tarefa.appendChild(criarBotaoExcluir());
    tarefa.appendChild(criarCheckboxImportante());
    document.getElementById("lista-de-tarefas").appendChild(tarefa);
    inputTarefa.value = "";
  }
}

function criarBotaoExcluir() {
  const botao = document.createElement("button");
  botao.innerHTML = "<i class='fas fa-trash-alt'></i>";
  botao.addEventListener("click", function() {
    this.parentNode.remove();
  });
  return botao;
}

function criarCheckboxImportante() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", function() {
    const tarefa = this.parentNode;
    if (this.checked) {
      tarefa.style.setProperty("color", "#FF4136");
      tarefa.style.setProperty("font-weight", "bold");
    } else {
      tarefa.style.setProperty("color", "initial");
      tarefa.style.setProperty("font-weight", "normal");
    }
  });
  return checkbox;
}
