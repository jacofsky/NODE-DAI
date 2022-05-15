import inquirer from 'inquirer'

export const pedirOpcion = async() => {

    const options = [{
        type: 'list',
        name: 'selectFunction',
        message: 'Seleccione su operacion',
        choices: [
            {
                value: 'sum',
                name: 'Sumar'
            },
            {
                value: 'res',
                name: 'Restar'
            },
            {
                value: 'mul',
                name: 'Multiplicar'
            },
            {
                value: 'div',
                name: 'Dividir'
            }

        ]
    }]

    const {selectFunction} = await inquirer.prompt(options)
    return selectFunction

}

export const pedirNumeros = async() => {

    const options1 = [{
        type: 'number',
        name: 'num1',
        message: 'Introduzca el primer numero'
    }]

    const {num1} = await inquirer.prompt(options1)

    const options2 = [{
        type: 'number',
        name: 'num2',
        message: 'Introduzca el segundo numero'
    }]

    const {num2} = await inquirer.prompt(options2)

    return { num1, num2 }


}