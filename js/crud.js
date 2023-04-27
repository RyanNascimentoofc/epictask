/* 
# para ID 
. para Class
*/
document.querySelector("#btnSalvar").addEventListener("click", cadastrar)

function cadastrar(){
    const titulo = document.querySelector("#titulo").value
    const pontos = document.querySelector("#pontos").value
    const categoria = document.querySelector("#categoria").value
    const descricao = document.querySelector("#descricao").value

    const Tarefa = {
        titulo,
        pontos,
        categoria,
        descricao
    }

    document.querySelector("#taferas").innerHTML += criarCard(Tarefa);
}

function criarCard(Tarefa){
    const card = `
    <div class="card col-lg-3 col-md-6 col-sm-12">
        <div class="card"
            <div class="card-header">
                ${Tarefa.titulo}
            </div>
            <div class="card-body">
                <p class="card-text">${Tarefa.descricao}</p>
                <p class="card-text">${Tarefa.categoria}</p>
                <span class="badge text-bg-warning">${Tarefa.pontos}pt</span>
            </div>
            <div class="card-footer">
                <a href="#" class="btn btn-success" title="Marca como concluida">
                    <i class="bi bi-patch-check-fill"></i>
                </a>
                <a href="#" onClick="apagar(this)" class="btn btn-danger" title="Apaga a Tarefa">
                    <i class="bi bi-trash-fill"></i>
                </a>
            </div>
        </div>
    </div>
    `
    
    return card;

}

function apagar(botao){
    console.log(botao);
    botao.parentNode.parentNode.remove();
}