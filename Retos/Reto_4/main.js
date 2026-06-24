const Personas = [
    {"id":1,"first_name":"Cello","last_name":"Edgar","bank":"FIRST STATE BANK","city":"Nariño","country":"Colombia","salary":2579,"expenses":510},
    {"id":2,"first_name":"Ethelyn","last_name":"Rowantree","bank":"Finamur","city":"Nongoma","country":"South Africa","salary":2573,"expenses":1976},
    {"id":3,"first_name":"Violetta","last_name":"Birtchnell","bank":"BANK OF NEW YORK MELLON","city":"Sapol","country":"Philippines","salary":3459,"expenses":1844},
    {"id":4,"first_name":"Hale","last_name":"Borthram","bank":"FIFTH THIRD BANK","city":"Bambanglipuro","country":"Indonesia","salary":2788,"expenses":1584},
    {"id":5,"first_name":"Netty","last_name":"Rawdales","bank":"FIRST COMMUNITY BANK","city":"Tombu","country":"Sierra Leone","salary":3276,"expenses":560},
    {"id":6,"first_name":"Jean","last_name":"Weddell","bank":"Raiffeisenlandesbank Kärnten - Rechenzentrum und Revisionsverband, registrierte Genossenschaft mit beschränkter Haftung","city":"Aanislag","country":"Philippines","salary":3277,"expenses":1232},
    {"id":7,"first_name":"Cary","last_name":"Rann","bank":"BNP Paribas Fortis","city":"Ciherang","country":"Indonesia","salary":3380,"expenses":1641},
    {"id":8,"first_name":"Ragnar","last_name":"Burree","bank":"CITIBANK","city":"Dali","country":"China","salary":2843,"expenses":591},
    {"id":9,"first_name":"Jeannette","last_name":"Stivani","bank":"UNITED COMMUNITY BANK","city":"Komatsu","country":"Japan","salary":3161,"expenses":635},
    {"id":10,"first_name":"Claudian","last_name":"Charteris","bank":"FIRST COMMUNITY BANK","city":"Malishka","country":"Armenia","salary":3221,"expenses":1257},
    {"id":11,"first_name":"Berri","last_name":"Eldred","bank":"Raiffeisenbank Goldener Steig - Dreisessel eG","city":"Xiushi","country":"China","salary":2667,"expenses":1662},
    {"id":12,"first_name":"Kassi","last_name":"Minihan","bank":"Raiffeisenbank Linz-Land West eGen","city":"Utrecht (stad)","country":"Netherlands","salary":2534,"expenses":650},
    {"id":13,"first_name":"Banky","last_name":"Gallandre","bank":"FRANDSEN BANK & TRUST","city":"Badar","country":"Russia","salary":2693,"expenses":829},
    {"id":14,"first_name":"Crystal","last_name":"Coope","bank":"PACIFIC WESTERN BANK","city":"Tidaholm","country":"Sweden","salary":2729,"expenses":1739},
    {"id":15,"first_name":"Godiva","last_name":"Simants","bank":"FARMERS STATE BANK","city":"Višnjićevo","country":"Serbia","salary":3468,"expenses":1657},
    {"id":16,"first_name":"Liliane","last_name":"Kall","bank":"FIRST STATE BANK","city":"Zhangpu","country":"China","salary":2653,"expenses":656},
    {"id":17,"first_name":"Sylvan","last_name":"Bentham3","bank":"FIRST NATIONAL BANK OF PENNSYLVANIA","city":"Palauig","country":"Philippines","salary":3187,"expenses":946},
    {"id":18,"first_name":"Abraham","last_name":"Trinder","bank":"Dettinger Bank eG Volks- und Raiffeisenbank","city":"Kissidougou","country":"Guinea","salary":3161,"expenses":1425},
    {"id":19,"first_name":"Tracey","last_name":"Kenrack","bank":"Banco Bilbao Vizcaya Argentaria (BBVA)","city":"San Jose","country":"United States","salary":2916,"expenses":1011},
    {"id":20,"first_name":"Fowler","last_name":"Willimott","bank":"BANK OF THE WEST","city":"Dvin","country":"Armenia","salary":2813,"expenses":521},
    {"id":21,"first_name":"Moina","last_name":"Barsby","bank":"Sparkasse Stade-Altes Land","city":"Fenglin","country":"China","salary":2577,"expenses":820},
    {"id":22,"first_name":"Barrett","last_name":"Barnaclough","bank":"BMO HARRIS BANK","city":"Bromma","country":"Sweden","salary":2749,"expenses":712},
    {"id":23,"first_name":"Tarrah","last_name":"Jaze","bank":"BYLINE BANK","city":"Springfield","country":"United States","salary":3489,"expenses":1055},
    {"id":24,"first_name":"Blondy","last_name":"Edgerley","bank":"STONEGATE BANK","city":"Ogaminan","country":"Nigeria","salary":3494,"expenses":1994},
    {"id":25,"first_name":"Jaclyn","last_name":"Feifer","bank":"FIRST COMMUNITY BANK","city":"Pelem","country":"Indonesia","salary":2945,"expenses":1754},
    {"id":26,"first_name":"Ellene","last_name":"Saph","bank":"GERMAN AMERICAN BANCORP","city":"Esik","country":"Kazakhstan","salary":2517,"expenses":1102},
    {"id":27,"first_name":"Shani","last_name":"Peto","bank":"HERITAGE BANK","city":"Udon Thani","country":"Thailand","salary":3479,"expenses":811},
    {"id":28,"first_name":"Jillie","last_name":"Sweynson","bank":"FIRST STATE BANK","city":"Hengqu","country":"China","salary":3481,"expenses":1597},
    {"id":29,"first_name":"Micky","last_name":"Troni","bank":"GRENKE BANK AG","city":"La Esperanza","country":"Mexico","salary":2563,"expenses":1170},
    {"id":30,"first_name":"Linzy","last_name":"Farriar","bank":"Raiffeisenbank Region Amstetten eGen","city":"Socos","country":"Peru","salary":2665,"expenses":1562},
    {"id":31,"first_name":"Pip","last_name":"Sessions","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Karmah an Nuzul","country":"Sudan","salary":3051,"expenses":970},
    {"id":32,"first_name":"Briney","last_name":"covino","bank":"Sparkasse Altenburger Land","city":"Junín","country":"Argentina","salary":2543,"expenses":776},
    {"id":33,"first_name":"Berkly","last_name":"Varfolomeev","bank":"FIRST NATIONAL BANK","city":"Huayllati","country":"Peru","salary":2811,"expenses":583},
    {"id":34,"first_name":"Aurthur","last_name":"Clementson","bank":"Sparkasse Neu-Ulm-Illertissen","city":"Andros Town","country":"Bahamas","salary":3122,"expenses":1125},
    {"id":35,"first_name":"Aubine","last_name":"Stallworth","bank":"Raiffeisenbank \"Nahe\" eG","city":"Maoyang","country":"China","salary":3014,"expenses":634},
    {"id":36,"first_name":"Laughton","last_name":"Hawney","bank":"JPMORGAN CHASE","city":"Tulle","country":"France","salary":2977,"expenses":1442},
    {"id":37,"first_name":"Masha","last_name":"Behnecke","bank":"BANCA DEL PICENO CREDITO COOPERATIVO - SOCIETA' COOPERATIVA","city":"Si Ma Cai","country":"Vietnam","salary":3344,"expenses":1797},
    {"id":38,"first_name":"Conrado","last_name":"O'Docherty","bank":"CAPITAL ONE","city":"Jackson","country":"United States","salary":3126,"expenses":1587},
    {"id":39,"first_name":"Penny","last_name":"Nast","bank":"SIMMONS FIRST NATIONAL BANK","city":"Gotemba","country":"Japan","salary":2969,"expenses":1554},
    {"id":40,"first_name":"Keefe","last_name":"Oury","bank":"State Bank of India","city":"Saint-Flour","country":"France","salary":3464,"expenses":1731},
    {"id":41,"first_name":"Meredith","last_name":"McNuff","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Salingogan","country":"Philippines","salary":3306,"expenses":976},
    {"id":42,"first_name":"Colver","last_name":"Castagneri","bank":"Goldman Sachs Bank Europe SE","city":"Baiyan","country":"China","salary":3407,"expenses":863},
    {"id":43,"first_name":"Vasilis","last_name":"Bushaway","bank":"COMERICA BANK","city":"Shkurinskaya","country":"Russia","salary":3329,"expenses":1794},
    {"id":44,"first_name":"Chiquia","last_name":"Dannohl","bank":"COMMUNITY BANK","city":"Rauma","country":"Finland","salary":2818,"expenses":872},
    {"id":45,"first_name":"Gaby","last_name":"Braam","bank":"HSBC Bank Plc, Paris Branch","city":"Ćićevac","country":"Serbia","salary":2843,"expenses":1405},
    {"id":46,"first_name":"Cherri","last_name":"Caroll","bank":"CENTENNIAL BANK","city":"Anabar","country":"Nauru","salary":2642,"expenses":1740},
    {"id":47,"first_name":"Joanna","last_name":"Birtchnell","bank":"COMMUNITY FIRST BANK","city":"Salt Lake City","country":"United States","salary":2702,"expenses":1604},
    {"id":48,"first_name":"Britt","last_name":"Spurway","bank":"Sparkasse Pfullendorf-Meßkirch","city":"Vendas de Galizes","country":"Portugal","salary":3104,"expenses":947},
    {"id":49,"first_name":"Currie","last_name":"Beat","bank":"Joniškio kredito unija","city":"Liuheng","country":"China","salary":2682,"expenses":1802},
    {"id":50,"first_name":"Joly","last_name":"Brouncker","bank":"BANCO BPM SOCIETA' PER AZIONI","city":"Farsta","country":"Sweden","salary":3414,"expenses":1738}
];

//fUNCION 1

function datosPersona(id) {
    const persona = Personas.find((p) => p.id === id);
    if (persona) {
        // const nombreCompleto = persona.first_name + " " + persona.last_name;
        // const banco = persona.bank;
        // const ahorro = persona.salary - persona.expenses;
        // console.log(`Nombre: ${nombreCompleto}`);
        // console.log(`Banco: ${banco}`);
        // console.log(`Ahorro mensual: ${ahorro}`);
        return {
            nombre: persona.first_name + " " + persona.last_name,
            banco: persona.bank,
            ahorro: persona.salary - persona.expenses
        }

    } else {
        // console.log("Usuario no encontrado");
        return "Usuario no encontrado";
    }
}

const id = parseInt(prompt("Ingrese el ID del usuario que desea buscar:"));
const resultado = datosPersona(id);
console.log(resultado);


//fUNCION 2

function ahorroMensual() {
    Personas.forEach((persona) => {
        const ahorro = persona.salary - persona.expenses;
        const nombreCompleto = persona.first_name + " " + persona.last_name;
        switch (true) {
            case ahorro < 500:
                console.log(`${nombreCompleto}: Ahorro bajo`);
                break;
            case ahorro >= 500 && ahorro <= 1500:
                console.log(`${nombreCompleto}: Ahorro medio`);
                break;
            default:
                console.log(`${nombreCompleto}: Ahorro alto`);
        }
    });
}

ahorroMensual();


//fUNCION 3 y 4

function agruparYCalcular(propiedadAgrupacion) {
    const agrupado = Personas.reduce((acc, persona) => {
        const ahorro = persona.salary - persona.expenses;
        const valorPropiedad = persona[propiedadAgrupacion]; 
        if (acc[valorPropiedad]) {
            acc[valorPropiedad].cantidadUsuarios++;
            acc[valorPropiedad].ahorroTotal += ahorro;
        } else {
            acc[valorPropiedad] = {
                [propiedadAgrupacion]: valorPropiedad,
                cantidadUsuarios: 1,
                ahorroTotal: ahorro
            };
        }
        return acc;
    }, {});
    return Object.values(agrupado);
}


// 3
function ahorroPorBanco() {
    const resultado = agruparYCalcular("bank");
    console.log("Cantidad de ahorro por banco");
    console.log(resultado);
}

// 4
function ahorroPorPais() {
    const resultado = agruparYCalcular("country");
    console.log("País con mejor ahorro");
    console.log(resultado);
}

ahorroPorBanco();
ahorroPorPais();