import fs from 'fs'

const copiarPegar = (path1, path2) => {
    if(fs.existsSync(path1)){
        const resp = fs.readFileSync(path1, {encoding: 'utf-8'})
        fs.writeFileSync(path2, resp)
        console.log(resp)
    } else {
        console.log('El archivo no se encontro')
    }    
} 

export default copiarPegar