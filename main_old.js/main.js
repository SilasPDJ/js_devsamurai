// "dev": "babel ./main.js -o bundle.js -w"
// -w significa watch, assistir, monitorar

class ListaConvidados{
    // classe -> conjunto de propriedades e métodos
    // método construtor
    constructor(){
        this.convidados = []
    }
    

    adicionar(nome, idade, cpf){
        var convidado = {nome: nome, idade:idade, cpf:cpf}
        this.convidados.push(convidado)
    }
    listar(msg){
        String(msg) != 'undefined' ? console.log(msg): undefined;
        console.log(this.convidados)
    }
}


var listaConv = new ListaConvidados()
// chamando/instanciando a classe em JS

document.getElementById('adicionar').onclick = function(){
    let nome = document.getElementById('nome').value
    listaConv.adicionar(nome, "20", "44500573844")

}
document.getElementById('listar').onclick = function(){
    listaConv.listar('Teste Msg')
}


