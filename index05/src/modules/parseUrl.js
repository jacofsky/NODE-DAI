
const parseUrl = (urlPars) => {
    const url = new URL(urlPars)
    
    const objParametros = Object.fromEntries(url.searchParams.entries())
    
    const urlObject = {
        host: url.host,
        pathname: url.pathname,
        parametros: objParametros
    }

    return urlObject
    
}

export default parseUrl