function tratarErroELancar(erro) {
    //throw new Error('Informações do erro');
    throw {
        nome: erro.name,
        msg: erro.mensage,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');

    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log('Fim');
    }
}
const obj = {nome: 'Fernando'}
imprimirNomeGritado(obj);