let pacientes = [];
let opção = 0;

while (opção !== '3') {
  opção = prompt(
    "Digite a opção desejada: \n 1 - Novo paciente \n 2 - Consultar paciente \n 3 - Sair \n\n" +
      "Lista de espera: " +
      (pacientes.length > 0 ? pacientes.join(", ") : "Nenhum paciente na fila") +
      "\n"
  );

  switch (opção) {
    case '1':
      let novoPaciente = prompt("Digite o nome do paciente: ");
      pacientes.push(novoPaciente);
      alert(`Paciente "${novoPaciente}" adicionado à fila.`);
      break;
    case '2':
      if (pacientes.length > 0) {
        let pacienteConsultado = pacientes.shift();
        alert(`Paciente "${pacienteConsultado}" consultado e removido da fila.`);
      } else {
        alert("Não há pacientes na fila para consulta.");
      }
      break;
    case '3':
      alert("Encerrando o programa.");
      break;
    default:
      alert("Opção inválida. Por favor, escolha novamente.");
      break;
  }
}
