function acao(){
    document.write("Executando... <br>");
}
/*
setInterval(acao, 1000); // Chamando função exibindo de 1 em 1 segundo
*/

/*
setInterval(() => {
    document.write ("Executando!!! <br>");
}, 1000) // Executando função anonima diretamente
*/

/*
var timer = setInterval(() => {
    document.write ("Executando!!! <br>");
}, 1000) // Executando função anonima diretamente
*/

setTimeout(acao, 3000); // Função sendo realizada apenas 1x