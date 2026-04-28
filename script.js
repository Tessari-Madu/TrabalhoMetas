window.onload = function () {

    const metas = [
        {
            id: 1,
            nome: "Passar em uma faculdade",
            descricao: "Meta para final do ano",
            data: "2026-12-31"
        },
        {
            id: 2,
            nome: "Deixar o cabelo crescer",
            descricao: "Meta para final de 2026",
            data: "2026-12-31"
        },
        {
            id: 3,
            nome: "Estudar até o ENEM",
            descricao: "Meta em andamento",
            data: "2026-11-01" 
        },
        {
            id: 4,
            nome: "Concluir o Ensino Médio",
            descricao: "Meta para final do ano",
            data: "2026-12-20"
        },
        {
            id: 5,
            nome: "Terminar de ler Jogos Vorazes",
            descricao: "Meta até o começo de 2027",
            data: "2027-02-01"
        },
        {
            id: 6,
            nome: "Ganhar Torneio de Robótica",
            descricao: "Meta para 2027",
            data: "2027-03-01"
        }
    ];

    function rodarMeta(meta) {

        const inicio = new Date("2025-01-01").getTime();
        const fim = new Date(meta.data).getTime();

        const intervalo = setInterval(() => {

            const agora = new Date().getTime();
            const distancia = fim - agora;

            const timer = document.getElementById(`timer${meta.id}`);
            const percent = document.getElementById(`percent${meta.id}`);
            const barra = document.getElementById(`progress${meta.id}`);
            const nome = document.getElementById(`nome${meta.id}`);
            const desc = document.getElementById(`desc${meta.id}`);

            if (!timer || !percent || !barra) return;

            // coloca título e descrição
            if (nome) nome.innerHTML = meta.nome;
            if (desc) desc.innerHTML = meta.descricao;

            if (distancia < 0) {
                timer.innerHTML = "Meta concluída!";
                percent.innerHTML = "100%";
                barra.style.width = "100%";
                clearInterval(intervalo);
                return;
            }

            const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

            timer.innerHTML = `${dias}d ${horas}h ${minutos}m`;

            let progresso = ((agora - inicio) / (fim - inicio)) * 100;
            progresso = Math.max(0, Math.min(100, progresso));

            percent.innerHTML = progresso.toFixed(1) + "%";
            barra.style.width = progresso + "%";

        }, 1000);
    }

    metas.forEach(meta => rodarMeta(meta));

};