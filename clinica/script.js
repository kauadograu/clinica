const veterinarios = ['Dra. Luana', 'Dr. Felipe'];
const atendimentos = [];

function selecionarVeterinario() {
  const random = Math.floor(Math.random() * veterinarios.length);
  return veterinarios[random];
}

function exibirMensagem(dono, pet, tipo, vet) {
  return `${dono} registrou o pet ${pet} (${tipo}) para atendimento com ${vet}.`;
}

function atualizarLog() {
  const area = document.getElementById('historicoAtendimento');
  area.innerHTML = '';

  atendimentos.forEach(at => {
    const div = document.createElement('div');
    div.className = 'registro';
    div.textContent = `${at.dono} - ${at.pet} (${at.tipo}) | Vet: ${at.veterinario}`;
    area.appendChild(div);
  });
}

document.getElementById('btnRegistrar').addEventListener('click', () => {
  const nomeDono = document.getElementById('nomeDono').value.trim();
  const nomePet = document.getElementById('nomePet').value.trim();
  const tipoPet = document.getElementById('tipoPet').value.trim();

  if (!nomeDono || !nomePet || !tipoPet) {
    alert('Preencha todos os campos!');
    return;
  }

  const vet = selecionarVeterinario();
  const mensagem = exibirMensagem(nomeDono, nomePet, tipoPet, vet);

  atendimentos.push({
    dono: nomeDono,
    pet: nomePet,
    tipo: tipoPet,
    veterinario: vet,
  });

  document.getElementById('saida').textContent = mensagem;

  atualizarLog();

  // Resetar campos
  document.getElementById('nomeDono').value = '';
  document.getElementById('nomePet').value = '';
  document.getElementById('tipoPet').value = '';
});

document.getElementById('btnLimpar').addEventListener('click', () => {
  atendimentos.length = 0;
  atualizarLog();
  document.getElementById('saida').textContent = '';
});
