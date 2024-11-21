const url = 'https://raw.githubusercontent.com/ericakaroline302007/cienciadeDados-kelly-e-erica/refs/heads/main/base-de-dados/esportes-mais-praticados.json'
    async function vizualizarInformacoesGlobals() {
        const res = await fetch(url)
    const dados = await res.json()
    const pessoasNoMundo = (dados. total_pessoas_mundo / 7.888e9)
    const pessoasPraticam = (dados_total_pessoas_que_praticam_esportes_regularmente / 3.0e9)
    const horas = parseint(dados.tempo_medio_semana_praticando_esportes)
    const minutos = Math.round( (dados.tempo_medio - horas)* 100)
    const porcentagemConectada = ((pessoasPraticam / pessoasNoMundo ) * 160).toFixed(2)

    const paragrato = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo. innerHTML = `Você sabia que o mundo tem «span>$(dados.total pessoas mundo) bilhões</span> de pessoas

    const container = document.getElerentById(`graficos-container`)
    container.appendChild(paragrafo)

vizualizarInformacoesGlobais()

    
    