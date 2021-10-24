const nomes = ["João", "Juliana", "Caio", "Ana"]

const medias = [10, 8, 7.5, 9]

let listaDeNotasEAlunos = [nomes, medias]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ` Sua média é: ` + listaDeNotasEAlunos[1][indice]
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Ana"))
console.log(exibeNomeNota("João"))
console.log(exibeNomeNota("Zezinho"))