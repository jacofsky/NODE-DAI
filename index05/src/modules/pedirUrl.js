import inquirer from 'inquirer'


export const pedirUrl = async() => {

    const urlOptions = [{
        type: 'string',
        name: 'url',
        message: 'Introduzca una URL'
    }]

    const {url} = await inquirer.prompt(urlOptions)

    return url

}