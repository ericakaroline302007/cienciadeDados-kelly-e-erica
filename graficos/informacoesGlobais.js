const url = 'https://raw.githubusercontent.com/ericakaroline302007/cienciadeDados-kelly-e-erica/refs/heads/main/base-de-dados/esportes-dados-globais.json'


    async function visualizarInformacoesGlobais () {
        const res = await fetch (url)
        const dados = res.json ()
        const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
        const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
        const horas = parseInt(dados.tempo_medio)
        const minutos = Math.round((dados.tempo_medio - horas) * 100)
        const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)
        const paragrafo = document.createElement ('p')
        paragrafo.classList.add ('graficos-container__texto')
    
        paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMundo}bilhões </span> de pessoas e que aproximadamente <span>${pessoasConectadas}bilhões</span> estão conectadas em alguma rede social e passam em média
        <span>${horas}</span> horas e <span>${minutos}</span> minutos conectadas.
        <br> isso significa que aproximadamente ${porcentagemConectada}% de pessoas estão pessoas conectadasem alguma rede SpeechRecognitionAlternative.`

        const container = document.getElementById('graficos-container')
            container.appendChild(paragrafo)
    }
  
  visualizarInformacoesGlobais()

