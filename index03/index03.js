import 'colors'

import Alumno from "./Alumno.js"
import { pedirAlumno } from "./pedirAlumno.js"


const main = async() => {

    const { name, dni } = await pedirAlumno()

    const alumno = new Alumno(name, dni)
    const formateado = JSON.stringify(alumno, undefined, 2)

    console.log('Resultado:'.green)
    console.log(`${formateado}`.cyan)
}

main()

const instanciarDosVeces = () => {
    const alumno1 = new Alumno('Jaco', 46021432)
    const alumno2 = new Alumno('Valen', 46021434)

    console.log(alumno1)
    console.log(alumno2)

}