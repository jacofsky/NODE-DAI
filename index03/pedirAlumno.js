import inquirer from 'inquirer'


export const pedirAlumno = async() => {

    const nameOptions = [{
        type: 'string',
        name: 'name',
        message: 'Introduzca su nombre'
    }]

    const {name} = await inquirer.prompt(nameOptions)

    const dniOptions = [{
        type: 'number',
        name: 'dni',
        message: 'Introduzca su dni'
    }]

    const {dni} = await inquirer.prompt(dniOptions)

    return { name, dni }

}