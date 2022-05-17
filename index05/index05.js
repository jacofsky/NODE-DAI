import 'colors'
import parseUrl from './src/modules/parseUrl.js'
import { pedirUrl } from './src/modules/pedirUrl.js'


const main = async() => {
    try {
        const url = await pedirUrl()
        const urlObject = parseUrl(url)
        console.log(`${JSON.stringify(urlObject, undefined, 4)}`.green)
        
    } catch (error) {
        console.log(`URL invalida`.green)
    }
}    

main()


