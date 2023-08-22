/*
Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: nomecognomecolorepreferito23 
Esempio: fabiopacificiblue23
*/

//chiedere il nome utente
let user_name = prompt('Scrivi il tuo nome');

// chiedere il cognome
let user_lastname = prompt(' Scrivi il tuo cognome');

// chiedere il colore preferito
let user_color = prompt(' Scrivi il tuo colore preferito');


document.getElementById('genPass').innerHTML = user_name + user_lastname + user_color;
