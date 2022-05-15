import fs from 'fs'

const path = './hola.txt'
const newContent = 'Hola mundo 2'

if(fs.existsSync(path)){
    fs.writeFileSync(path, newContent)
    const resp = fs.readFileSync(path, {encoding: 'utf-8'})
    console.log(resp)
} else {
    console.log('El archivo no se encontro')
}    

