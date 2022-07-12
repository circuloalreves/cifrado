function cifrar(text, clave) {
    return text.split('').map((t,i)=>(t+clave)).join('')
}

let r= cifrar('Un dia soleado', 'asd66')
console.log(r)

function descrifrar(text, clave) {
    return text.split('').join('')
}

let s=descrifrar(r,'asd66')
console.log(r)
