const lodash = require('lodash');

const alunos = [
    {
        nome : "samael",
        nota: 8.9
    }, 
    {
        nome: 'pedro',
        nota: 7.6,
    },
    {
        nome: 'bia',
        nota: 9.8
    }
]

const media = lodash.sumBy(alunos, 'nota') / alunos.length;
console.log(media);