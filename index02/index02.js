import { pedirOpcion, pedirNumeros } from './src/modules/inquirer.js'
import 'colors'
import { dividir, multiplicar, restar, sumar } from './src/modules/funcionesMatematicas.js'

const main = async() => {

    const opcion = await pedirOpcion()
    const {num1, num2} = await pedirNumeros()
    
    switch (opcion) {
        case 'sum':
            const sum = sumar(num1, num2)
            console.log(`El resultado es: ${sum}`.green)
            
            break;

        case 'res':
            const res = restar(num1, num2)
            console.log(`El resultado es: ${res}`.green)
            
            break;

        case 'mul':
            const mul = multiplicar(num1, num2)
            console.log(`El resultado es: ${mul}`.green)    

            break;

        case 'div':
            const div = dividir(num1, num2)
            console.log(`El resultado es: ${div}`.green)
            
            break;
    
        default:
            console.log('Algo salio mal :(')
            break;
    }

}

main()

