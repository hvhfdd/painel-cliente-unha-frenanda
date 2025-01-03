window.onload = function() {
    exibirAgendamentos();

    document.getElementById('bloquearHorarioForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const dataBloqueio = document.getElementById('dataBloqueio').value;
        let horariosBloqueados = JSON.parse(localStorage.getItem('horariosBloqueados')) || [];

        // Adiciona o horário à lista de bloqueios
        if (!horariosBloqueados.includes(dataBloqueio)) {
            horariosBloqueados.push(dataBloqueio);
            localStorage.setItem('horariosBloqueados', JSON.stringify(horariosBloqueados));
            document.getElementById('msgAdmin').innerText = 'Horário bloqueado com sucesso!';
        } else {
            document.getElementById('msgAdmin').innerText = 'Este horário já está bloqueado.';
        }
    });
};

function exibirAgendamentos() {
    let agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    let listaAgendamentos = document.getElementById('listaAgendamentos');
    
    listaAgendamentos.innerHTML = '';
    agendamentos.forEach(function(agendamento) {
        let li = document.createElement('li');
        li.innerText = `${agendamento.nome} - ${agendamento.servico} - ${agendamento.data} - ${agendamento.telefone}`;
        listaAgendamentos.appendChild(li);
    });
}
