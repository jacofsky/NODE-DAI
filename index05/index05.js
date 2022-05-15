import 'colors'

const url = new URL('http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo')

const objParametros = Object.fromEntries(url.searchParams.entries())

const urlObject = {
    host: url.host,
    pathname: url.pathname,
    parametros: objParametros
}

console.log(`${JSON.stringify(urlObject, undefined, 4)}`.green)

