async function empregos() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-tipos-de-ocupacao.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeX = Object.keys (dados)
    const empregos = Object.values (dados)

    const data = [
        {
            x: empregos,
            y: nomeX,
            type: 'pie'
        }
    ]

    const layout = {
        height: 400,
        width: 500
    };

        const grafico = document.createElement('div')
        grafico.className = 'grafico'
        document.getElementById('graficos-container').appendChild(grafico)

        Plotly.newPlot(grafico, data, layout);
        
    console.log(dados)
}

empregos()