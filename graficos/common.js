const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: ggetCSS('--secundary-color'),
    size: 16,
    family: getCSS('--font')
}

export {getCSS, tickConfig}