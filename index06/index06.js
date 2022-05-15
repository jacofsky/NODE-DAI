import inquirer from 'inquirer'
import 'colors'

import { getAllInfoByISO } from "iso-country-currency"

const main = async() => {

    const currencyOptions = {
        type: 'string',
        name: 'cur',
        message: 'Codigo ISO del pais:'
    }

    const {cur} = await inquirer.prompt(currencyOptions)

    try {
        
        const currency = getAllInfoByISO(cur)
        console.log('=================')
        console.log(`${currency.currency} | ${currency.countryName}`.green)
        console.log('=================')

    } catch (error) {
        console.log('====================')
        console.log('Codigo inexistente'.green)
        console.log('====================')

    }
}

main()