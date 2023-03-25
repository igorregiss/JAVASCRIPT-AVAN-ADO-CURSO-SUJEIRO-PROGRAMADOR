var data = new Date(); // Definindo data de hoje
data.getHours(); // Capturando hora da data
data.getMinutes(); // Capturando minutos da data
data.getSeconds(); // Capturando segundos da data
data.getMilliseconds(); // Capturando millisegundos da data

var datanova = new Date("March 27, 2023"); // Criando propria data
datanova.getDate(); // Capturando dia
datanova.getMonth(); // Capturando mês
datanova.getDay(); // Capturando dia da semana
datanova.getFullYear(); // Capturando ano completo

datanova.getDate()+"/"+(datanova.getMonth()+1)+"/"+datanova.getFullYear(); // Ordenando data conforme padrão DD/MM/AAAA e corrigindo o mês de não contar Janeiro por exemplo como 0 pois no JavaScript começa a contagem do 0 adicionando +1 para que fique em números corretos
datanova.setDate(datanova.getDate()+5); // Adicionando 5 dias na data
datanova.setHours(datanova.getHours() + 10); // Adicionando horas
datanova.getDay(); // Capturando dia da semana
var dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']; // Definindo dia da semana por nome
dias[datanova.getDay()]; // Definindo dia  através do getDay