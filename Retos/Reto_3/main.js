const usuarios = [
{"id":1,"first_name":"Sayre","last_name":"Addenbrooke","email":"saddenbrooke0@about.me","gender":"Male","ip_address":"52.180.122.143"},
{"id":2,"first_name":"Reggis","last_name":"Scolding","email":"rscolding1@posterous.com","gender":"Male","ip_address":"129.212.41.179"},
{"id":3,"first_name":"Nesta","last_name":"Michurin","email":"nmichurin2@edublogs.org","gender":"Female","ip_address":"4.57.161.206"},
{"id":4,"first_name":"Cherice","last_name":"Beardsley","email":"cbeardsley3@seattletimes.com","gender":"Female","ip_address":"228.247.89.227"},
{"id":5,"first_name":"Darnall","last_name":"Jakuszewski","email":"djakuszewski4@wix.com","gender":"Male","ip_address":"156.149.218.245"},
{"id":6,"first_name":"Kurt","last_name":"Pool","email":"kpool5@ask.com","gender":"Male","ip_address":"175.253.153.227"},
{"id":7,"first_name":"Buddy","last_name":"MacGaughy","email":"bmacgaughy6@google.cn","gender":"Male","ip_address":"69.130.176.7"},
{"id":8,"first_name":"Stanly","last_name":"Hars","email":"shars7@bing.com","gender":"Male","ip_address":"8.93.159.90"},
{"id":9,"first_name":"Alikee","last_name":"Allatt","email":"aallatt8@i2i.jp","gender":"Female","ip_address":"166.130.25.118"},
{"id":10,"first_name":"Pincas","last_name":"Lukock","email":"plukock9@shinystat.com","gender":"Male","ip_address":"252.50.177.157"},
{"id":11,"first_name":"Edan","last_name":"Mattingly","email":"emattinglya@wikispaces.com","gender":"Male","ip_address":"8.6.59.85"},
{"id":12,"first_name":"Pansie","last_name":"Tardiff","email":"ptardiffb@imgur.com","gender":"Female","ip_address":"127.7.124.233"},
{"id":13,"first_name":"Sharia","last_name":"Broome","email":"sbroomec@samsung.com","gender":"Female","ip_address":"179.14.180.14"},
{"id":14,"first_name":"Maren","last_name":"Duesberry","email":"mduesberryd@quantcast.com","gender":"Female","ip_address":"10.103.14.41"},
{"id":15,"first_name":"Parke","last_name":"Freeburn","email":"pfreeburne@nyu.edu","gender":"Male","ip_address":"203.127.140.206"},
{"id":16,"first_name":"Desmund","last_name":"Falla","email":"dfallaf@ustream.tv","gender":"Polygender","ip_address":"224.29.224.57"},
{"id":17,"first_name":"Georgeanne","last_name":"Kleiser","email":"gkleiserg@adobe.com","gender":"Female","ip_address":"12.159.38.122"},
{"id":18,"first_name":"Rooney","last_name":"Collaton","email":"rcollatonh@dailymail.co.uk","gender":"Male","ip_address":"250.33.98.128"},
{"id":19,"first_name":"Ephraim","last_name":"Simmell","email":"esimmelli@vkontakte.ru","gender":"Male","ip_address":"96.215.174.84"},
{"id":20,"first_name":"Michel","last_name":"Dobrowlski","email":"mdobrowlskij@mediafire.com","gender":"Male","ip_address":"174.214.104.82"},
{"id":21,"first_name":"Kerr","last_name":"Stanhope","email":"kstanhopek@ocn.ne.jp","gender":"Male","ip_address":"252.162.64.92"},
{"id":22,"first_name":"Lindy","last_name":"Carnalan","email":"lcarnalanl@hc360.com","gender":"Male","ip_address":"213.8.104.33"},
{"id":23,"first_name":"Alvie","last_name":"Tappor","email":"atapporm@xing.com","gender":"Male","ip_address":"56.25.132.109"},
{"id":24,"first_name":"Johan","last_name":"Di Gregorio","email":"jdigregorion@nifty.com","gender":"Male","ip_address":"206.151.144.107"},
{"id":25,"first_name":"Bertine","last_name":"Nance","email":"bnanceo@senate.gov","gender":"Female","ip_address":"59.92.203.206"},
{"id":26,"first_name":"Juliane","last_name":"Sixsmith","email":"jsixsmithp@bizjournals.com","gender":"Female","ip_address":"53.141.122.2"},
{"id":27,"first_name":"Cam","last_name":"Ivashintsov","email":"civashintsovq@gravatar.com","gender":"Female","ip_address":"73.220.199.100"},
{"id":28,"first_name":"Lucian","last_name":"Di Antonio","email":"ldiantonior@ebay.com","gender":"Male","ip_address":"193.145.160.160"},
{"id":29,"first_name":"Langston","last_name":"Jopke","email":"ljopkes@intel.com","gender":"Male","ip_address":"246.99.249.107"},
{"id":30,"first_name":"Simmonds","last_name":"Gateshill","email":"sgateshillt@domainmarket.com","gender":"Male","ip_address":"222.199.149.55"},
{"id":31,"first_name":"Bertine","last_name":"MacTavish","email":"bmactavishu@economist.com","gender":"Female","ip_address":"242.7.169.12"},
{"id":32,"first_name":"Ernesto","last_name":"McAlester","email":"emcalesterv@intel.com","gender":"Male","ip_address":"72.97.232.192"},
{"id":33,"first_name":"Jermain","last_name":"Grichukhin","email":"jgrichukhinw@mozilla.org","gender":"Male","ip_address":"55.249.254.168"},
{"id":34,"first_name":"Tonie","last_name":"Amerighi","email":"tamerighix@apache.org","gender":"Female","ip_address":"168.106.141.9"},
{"id":35,"first_name":"George","last_name":"Lowery","email":"gloweryy@java.com","gender":"Female","ip_address":"217.0.197.166"},
{"id":36,"first_name":"Elna","last_name":"Boncoeur","email":"eboncoeurz@mail.ru","gender":"Female","ip_address":"74.64.99.13"},
{"id":37,"first_name":"Halsy","last_name":"Duce","email":"hduce10@mozilla.org","gender":"Male","ip_address":"102.48.177.219"},
{"id":38,"first_name":"Lind","last_name":"Mochan","email":"lmochan11@4shared.com","gender":"Female","ip_address":"67.78.103.134"},
{"id":39,"first_name":"Suzie","last_name":"Sehorsch","email":"ssehorsch12@stumbleupon.com","gender":"Female","ip_address":"86.249.149.209"},
{"id":40,"first_name":"Rick","last_name":"Hillburn","email":"rhillburn13@mlb.com","gender":"Male","ip_address":"47.58.195.168"},
{"id":41,"first_name":"Heall","last_name":"Stive","email":"hstive14@slashdot.org","gender":"Male","ip_address":"222.74.90.135"},
{"id":42,"first_name":"Kirstyn","last_name":"Marlowe","email":"kmarlowe15@diigo.com","gender":"Female","ip_address":"163.97.84.174"},
{"id":43,"first_name":"Wanda","last_name":"Klemencic","email":"wklemencic16@bigcartel.com","gender":"Female","ip_address":"184.107.129.55"},
{"id":44,"first_name":"Cindy","last_name":"Chataignier","email":"cchataignier17@weather.com","gender":"Female","ip_address":"69.36.68.180"},
{"id":45,"first_name":"Jo","last_name":"Scheffler","email":"jscheffler18@noaa.gov","gender":"Male","ip_address":"7.202.167.13"},
{"id":46,"first_name":"Talya","last_name":"Springer","email":"tspringer19@psu.edu","gender":"Female","ip_address":"234.189.76.112"},
{"id":47,"first_name":"Grethel","last_name":"Cappineer","email":"gcappineer1a@goodreads.com","gender":"Female","ip_address":"123.54.32.100"},
{"id":48,"first_name":"Lynnette","last_name":"Swyndley","email":"lswyndley1b@indiegogo.com","gender":"Female","ip_address":"45.221.236.208"},
{"id":49,"first_name":"Ursola","last_name":"Follitt","email":"ufollitt1c@nba.com","gender":"Female","ip_address":"107.224.74.138"},
{"id":50,"first_name":"Horatio","last_name":"Kerr","email":"hkerr1d@disqus.com","gender":"Male","ip_address":"43.174.233.14"}
];

// 1) buscar con prompt:

const id = parseInt(prompt("Ingrese el ID del usuario que desea buscar:"));

const usuarioEncontrado = usuarios.find((user) => {
    return user.id == id;
});

if (usuarioEncontrado) {
    console.log("Datos del Usuario buscado:");
    const msg = `Nombre: ${usuarioEncontrado.first_name} - Apellido: ${usuarioEncontrado.last_name} - Email: ${usuarioEncontrado.email} - Genero: ${usuarioEncontrado.gender} - Direccion IP: ${usuarioEncontrado.ip_address}`;
    //console.log(msg);
    console.table(usuarioEncontrado);
} else {
    alert("Usuario no encontrado");
}


// 2) Contar usuarios por genero

const contarGenero = usuarios.reduce((acc, user) => {
    const genero = user.gender;

    if (acc[genero]) {
        acc[genero]++;
    } else {
        acc[genero] = 1;
    }

    return acc;
}, {});

console.log(contarGenero);