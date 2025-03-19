let div = document.getElementById('USD');
let aa_cont = document.getElementById('aa_cont');
let aa_cont_sublot = document.getElementById('aa_cont_sublot');
let copart_cont = document.getElementById('copart_cont');
let copart_sublot_cont = document.getElementById('copart_sublot_cont');
let manheim_cont = document.getElementById('manheim_cont');
let select_aukcion = document.getElementById('aukcion');
let row_block_exp = document.getElementById('row_block_exp');
row_block_exp.style.display='none';
let port = '';
let auk_sbor_value = document.getElementById('auk_sbor_value').value;
let auk_sbor_value1 = document.getElementById('auk_sbor_value');
let auk_sbor = document.getElementById('auk_sbor');
auk_sbor.style.display='none';
let type_cars = document.getElementById('type_cars').value; // Узнаем тип техники
let Aukcion1 = document.getElementById('aukcion'); // Узнаем выбор аукциона
let type_cars1 = document.getElementById('type_cars'); // Узнаем тип техники
let price_car1 = document.getElementById('price_car'); // Узнаем цену техники
let type_of_engine1 = document.getElementById('type_engine'); // Узнаем тип двигателя
let age_of_the_car1 = document.getElementById('age_of_the_car'); // Узнаем возраст авто
let engine_capacity1 = document.getElementById('engine_capacity'); // Узнаем объем двигателя
let weight_of_auto1 = document.getElementById('weight_of_auto'); // Узнаем вес авто
let weight_of_auto_block = document.getElementById('weight_of_auto_block');
let buy_auto = document.getElementById('buy_auto'); // Определяем блок вывода кол-во купленных авто за год
let buy_car_auto1 = document.getElementById('buy_auto_select'); // Узнаем кол-во авто приобретенного за год
let Sublot_Copart1 = document.getElementById('place_sublot_copart');
let horse = document.getElementById('horse').value;
horse = parseInt(horse);
let horse2 = document.getElementById('horse');
let horse1 = document.getElementById('horse_moto');
horse1.style.display="none"; // Отображение кол-во лошадиных сил у МОТО
let Copart1 = document.getElementById('place_copart');
let AA1 = document.getElementById('AA');
let AA1_sublot = document.getElementById('AA_sublot');
let total = document.getElementById('total');
let pending = document.getElementById('pending');
let sneg = document.getElementById('sneg');
let sneg1 = document.getElementById('sneg').value;
sneg.style.display = "none";
let moto = document.getElementById('moto');
let moto1 = document.getElementById('moto').value;
let title_tam_posh = document.getElementById('title_tam_posh');
moto.style.display = "none";
aa_cont.style.display = "none";
aa_cont_sublot.style.display = "none";
copart_sublot_cont.style.display = "none";
manheim_cont.style.display = "none";
copart_cont.style.display = "flex";
let akciz_block = document.getElementById('akciz_block');
akciz_block.style.display='none';
let soprovogdenie = 0;
let sopr = document.getElementById('row_block_sopr');
sopr.style.display = "none";
let engine = document.getElementById('engine');
let deliver_port = document.getElementById('deliver_port');
deliver_port.style.display = "none";
let manheim_deliver = document.getElementById('manheim_deliver').value;
manheim_deliver = parseInt(manheim_deliver);
let manheim_deliver1 = document.getElementById('manheim_deliver');

let delivery_by_ports, export_documents, delivery_health_auto1, akciz, delivery_health_auto2, delivery_to_moscow, tam_posh, expenses_of_litva, podschet_online, safety_pay, tamognya, eur_in_dollar, deliver_belarus, our_services, doll_in_eur, sbktc, util_sbor, current_valute = 0;


function printDiv(divName) {
    window.print();
}

let button_print = document.querySelector('.button_print');
document.querySelector('.button_print')



type_of_engine1.addEventListener('change', function() {
    if (type_of_engine1.value==2){
        engine.style.display="none";
    }
    else{
        engine.style.display="flex";
    }
});
weight_of_auto_block.style.display="none";
type_cars1.addEventListener('change', function() {
    if (type_cars1.value==6){
        weight_of_auto_block.style.display="flex";
    }
    else{
        weight_of_auto_block.style.display="none";
    }
});

select_aukcion.addEventListener('change', function() {
    let Aukcion = document.getElementById('aukcion').value; // Узнаем выбор аукциона
    switch(Aukcion){
        case '1': copart_cont.style.display = "flex"; aa_cont.style.display = "none"; copart_sublot_cont.style.display = "none"; aa_cont_sublot.style.display = "none"; manheim_cont.style.display = "none"; deliver_port.style.display = "none"; auk_sbor.style.display='none'; row_block_exp.style.display='none'; break;
        case '2': copart_sublot_cont.style.display = "flex"; aa_cont.style.display = "none"; copart_cont.style.display = "none"; aa_cont_sublot.style.display = "none"; manheim_cont.style.display = "none"; deliver_port.style.display = "none"; auk_sbor.style.display='none'; row_block_exp.style.display='none'; break;
        case '3': aa_cont.style.display = "flex"; copart_cont.style.display = "none"; copart_sublot_cont.style.display = "none"; aa_cont_sublot.style.display = "none"; manheim_cont.style.display = "none"; deliver_port.style.display = "none"; auk_sbor.style.display='none'; row_block_exp.style.display='none'; break;
        case '4': aa_cont_sublot.style.display = "flex"; copart_cont.style.display = "none"; copart_sublot_cont.style.display = "none"; aa_cont.style.display = "none"; manheim_cont.style.display = "none"; deliver_port.style.display = "none"; auk_sbor.style.display='none'; row_block_exp.style.display='none'; break;
        case '5': aa_cont_sublot.style.display = "none"; copart_cont.style.display = "none"; copart_sublot_cont.style.display = "none"; aa_cont.style.display = "none"; manheim_cont.style.display = "flex"; deliver_port.style.display = "flex"; auk_sbor.style.display='flex'; row_block_exp.style.display='flex'; break;
    } 
});
function delivery_manheim(){
    manheim_deliver = document.getElementById('manheim_deliver').value;
    if(manheim_deliver == null || manheim_deliver == undefined || manheim_deliver == '' ) {
        manheim_deliver = 0;
    } else{
    manheim_deliver = parseInt(manheim_deliver);
    delivery_by_ports = manheim_deliver;
     
    }
    return delivery_by_ports;  
}

function delivery_AA_sublot(){
    let AA_sublot = document.getElementById('AA_sublot').value;
    let place = '';
    switch(AA_sublot){
        case "1":place="AR Benton, AR BENTON,AR,72015";delivery_by_ports=580; port = "Tехас"; break;
        case "2":place="AR NORTH LITTLE ROCK, AR,72117";delivery_by_ports=630; port = "Tехас"; break;
        case "3":place="AZ 2299 W BROADWAY RD PHOENIX,AZ,85041";delivery_by_ports=520; port = "Калифорния"; break;
        case "4":place="CA 11399 SANTA FE AVE E HESPERIA,CA,92345";delivery_by_ports=390; port = "Калифорния"; break;
        case "5":place="CA 13901 SAN BERNARDINO AVE FONTANA,CA,92335";delivery_by_ports=355; port = "Калифорния"; break;
        case "6":place="CA 14320 SOLEDAD CANYON RD SANTA CLARITA,CA,91387";delivery_by_ports=380; port = "Калифорния"; break;
        case "7":place="CA 1903 BLINN AVE WILMINGTON,CA,90744";delivery_by_ports=370; port = "Калифорния"; break;
        case "8":place="CA 2961 EAST LA JOLLA STREET ANAHEIM,CA,92806";delivery_by_ports=370; port = "Калифорния"; break;
        case "9":place="CA 3600 PYRITE ST JURUPA VALLEY,CA,92509";delivery_by_ports=360; port = "Калифорния"; break;
        case "10":place="CA 7245 LAUREL CANYON BLVD LOS ANGELES,CA,91605";delivery_by_ports=370; port = "Калифорния"; break;
        case "11":place="CA 775 HARLEY KNOX BLVD PERRIS,CA,92571";delivery_by_ports=440; port = "Калифорния"; break;
        case "12":place="CA At the North Hollywood (CA) branch 7245 LAUREL CANYON BLVD LOS ANGELES,CA,91605";delivery_by_ports=370; port = "Калифорния"; break;
        case "13":place="CA CHULA VISTA,CA,91911";delivery_by_ports=470; port = "Калифорния"; break;
        case "14":place="CA Fresno Offsite - 337 FRESNO,CA,93725";delivery_by_ports=540; port = "Калифорния"; break;
        case "15":place="CA Harbor City, CA 90710 HARBOR CITY,CA,90710";delivery_by_ports=330; port = "Калифорния"; break;
        case "16":place="CA LAWNDALE,CA,90260";delivery_by_ports=380; port = "Калифорния"; break;
        case "17":place="CA Los Angeles IAA 18300 S VERMONT AVE GARDENA,CA,90248";delivery_by_ports=370; port = "Калифорния"; break;
        case "18":place="CA NoHo 3 BURBANK,CA,91505";delivery_by_ports=335; port = "Калифорния"; break;
        case "19":place="CA RIVERSIDE 3600 PYRITE ST RIVERSIDE,CA,92509";delivery_by_ports=360; port = "Калифорния"; break;
        case "20":place="CA San Bernadino Off Site 137 SAN BERNARDINO,CA,92407";delivery_by_ports=385; port = "Калифорния"; break;
        case "21":place="CA South Gate, CA SOUTH GATE,CA,90280";delivery_by_ports=480; port = "Калифорния"; break;
        case "22":place="CO 1280 HIGHWAY 50 DELTA,CO,81416";delivery_by_ports=880; port = "Tехас"; break;
        case "23":place="CO COLFAX MOTORS - offiste DENVER,CO,80220";delivery_by_ports=800; port = "Tехас"; break;
        case "24":place="CT HARTFORD SOUTH 525 CHRISTIAN LANE NEW BRITAIN CT 06051";delivery_by_ports=410; port = "Нью Джерси"; break;
        case "25":place="DE 417 OLD AIRPORT ROAD NEW CASTLE,DE,19720";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "26":place="DE DELMAR,DE,19940";delivery_by_ports=475; port = "Нью Джерси"; break;
        case "27":place="FL 10950 NORMANDY BLVD JACKSONVILLE,FL,32221";delivery_by_ports=430; port = "Джорджия"; break;
        case "28":place="FL 1208 17TH STREET EAST PALMETTO,FL,34221";delivery_by_ports=370; port = "Флорида"; break;
        case "29":place="FL 1857 US-331 N DEFUNIAK SPRINGS,FL,32433";delivery_by_ports=570; port = "Флорида"; break;
        case "30":place="FL 3005 CR 835 CLEWISTON,FL,33440";delivery_by_ports=530; port = "Флорида"; break;
        case "31":place="FL 6275 SW 196TH AVE FORT LAUDERDALE,FL,33332";delivery_by_ports=330; port = "Флорида"; break;
        case "32":place="FL 6522 OLD US-41 A TAMPA,FL,33619";delivery_by_ports=505; port = "Флорида"; break;
        case "33":place="FL 9801 BOGGY CREEK RD ORLANDO,FL,32824";delivery_by_ports=485; port = "Флорида"; break;
        case "34":place="FL ADESA-Off Site 11700 NEW KINGS ROAD JACKSONVILLE,FL,32219";delivery_by_ports=430; port = "Джорджия"; break;
        case "35":place="FL BOCA RATON,FL,33487";delivery_by_ports=330; port = "Флорида"; break;
        case "36":place="FL COCONUT CREEK,FL,33063";delivery_by_ports=380; port = "Флорида"; break;
        case "37":place="FL FORT MYERS OFFSITE 749 850 PONDELLA RD NORTH FORT MYERS,FL,33903";delivery_by_ports=450; port = "Флорида"; break;
        case "38":place="FL HOLLYWOOD,FL,33023";delivery_by_ports=360; port = "Флорида"; break;
        case "39":place="FL Miami-North 2 Offsite 6275 SW 196TH AVE PEMBROKE PINES,FL,33332";delivery_by_ports=330; port = "Флорида"; break;
        case "40":place="GA Cochran, GA COCHRAN,GA,31014";delivery_by_ports=430; port = "Джорджия"; break;
        case "41":place="GA Contact IAA branch MACON,GA,31204";delivery_by_ports=440; port = "Джорджия"; break;
        case "42":place="GA NHRH OFF SITE 706 COMMERCE,GA,30529";delivery_by_ports=495; port = "Джорджия"; break;
        case "43":place="GA Offsite - Lilburn GA 30047 LILBURN,GA,30047";delivery_by_ports=500; port = "Джорджия"; break;
        case "44":place="IA AA Des Moines 1000 ARMSTRONG DRIVE DE SOTO,IA,50069";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "45":place="IA IAA Des Moines Offsite 3277 UTE AVE WAUKEE,IA,50263";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "46":place="IA Iowa Speedway CAT 534 NEWTON,IA,50208";delivery_by_ports=740; port = "Нью Джерси"; break;
        case "47":place="L 4460 HIGHWAY 162 GRANITE CITY,IL,62040";delivery_by_ports=790; port = "Нью Джерси"; break;
        case "48":place="IL 511 - MONTGOMERY 325 IL-31 S MONTGOMERY,IL,60538";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "49":place="IL Caseyville CASEYVILLE,IL,62232";delivery_by_ports=690; port = "Нью Джерси"; break;
        case "50":place="IL CHICAGO, IL, 60632";delivery_by_ports=650; port = "Нью Джерси"; break;
        case "51":place="IL IAA St. Louis Off-Site CENTREVILLE,IL,62207";delivery_by_ports=695; port = "Нью Джерси"; break;
        case "52":place="IL MIDLOTHIAN,IL,60445";delivery_by_ports=650; port = "Нью Джерси"; break;
        case "53":place="IL ONLINE EXCLUSIVE ENTERPRISE 2040 E. ALGONQUIN RD SCHAUMBURG,IL,60173";delivery_by_ports=660; port = "Нью Джерси"; break;
        case "54":place="IN 1947 SOUTH COUNTY ROAD (SCR) 1240 E CROTHERSVILLE,IN,47229";delivery_by_ports=730; port = "Нью Джерси"; break;
        case "55":place="IN 4300 OXFORD ST FORT WAYNE,IN,46806";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "56":place="IN IAA Indy Minnesota Street INDIANAPOLIS,IN,46241";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "57":place="KY 1825 SOUTH PRESTON HIGHWAY SHEPHERDSVILLE,KY,40165";delivery_by_ports=680; port = "Джорджия"; break;
        case "58":place="KY 710 WOODFORD AVENUE BOWLING GREEN,KY,42101";delivery_by_ports=680; port = "Джорджия"; break;
        case "59":place="LA 1043 ORO TRAIL RD CROWLEY,LA,70526";delivery_by_ports=515; port = "Tехас"; break;
        case "60":place="LA 29000 S FROST RD LIVINGSTON,LA,70754";delivery_by_ports=560; port = "Tехас"; break;
        case "61":place="LA 301 MALAPART RD LAFAYETTE,LA,70507";delivery_by_ports=535; port = "Tехас"; break;
        case "62":place="LA 415 HWY 93 NORTH SCOTT,LA,70583";delivery_by_ports=530; port = "Tехас"; break;
        case "63":place="LA IAA CAT Baton Rouge - Carville 5978 HIGHWAY 75 CARVILLE,LA,70721";delivery_by_ports=560; port = "Tехас"; break;
        case "64":place="LA Jennings Off-Site #760 JENNINGS,LA,70546";delivery_by_ports=500; port = "Tехас"; break;
        case "65":place="MA Insurance Auto Auctions - Templeton2 411 BALDWINVILLE RD TEMPLETON,MA,01468";delivery_by_ports=475; port = "Нью Джерси"; break;
        case "66":place="MA LANCASTER,MA,01523";delivery_by_ports=480; port = "Нью Джерси"; break;
        case "67":place="MD 7131 VIRGINIA MANOR CT LAUREL,MD,20707";delivery_by_ports=460; port = "Нью Джерси"; break;
        case "68":place="MD Dundalk Offsite 770 BALTIMORE,MD,21213";delivery_by_ports=450; port = "Нью Джерси"; break;
        case "69":place="MD White Plains Aux Lot 4840 CRAIN HIGHWAY WHITE PLAINS,MD,20695";delivery_by_ports=495; port = "Нью Джерси"; break;
        case "70":place="ME COPART 40 HOLMES ROAD SCARBOROUGH ME 04074";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "71":place="MI ADESA Great Lakes 573 SOUTH TUSCOLA ROAD BAY CITY,MI,48708";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "72":place="MI Detroit B & G Lot-8100 lynch rd 9100 LYNCH RD. DETROIT,MI,48234";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "73":place="MI Grand Rapids Reed & Hoppes 2661 EAST GRAND RIVER AVE. PORTLAND, MI, 48875";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "74":place="MI Marine City, MI MARINE CITY,MI,48039";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "75":place="MI OFFSITE - Melvindale MI 48122 MELVINDALE,MI,48122";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "76":place="MN 13289 25TH AVE NW RICE,MN,56367";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "77":place="MN 1336 JACKSON ST SAINT PAUL,MN,55117";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "78":place="MN 2975 PARTRIDGE RD ROSEVILLE,MN,55113";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "79":place="MN 3300 150TH STREET EAST FARIBAULT,MN,55021";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "80":place="MN IAA RED WING RED WING,MN,55066";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "81":place="MO KANSAS CITY,MO,64129";delivery_by_ports=680; port = "Джорджия"; break;
        case "82":place="MO Squires Towing AFFTON,MO,63123";delivery_by_ports=730; port = "Нью Джерси"; break;
        case "83":place="MS 100 BEASLEY RD JACKSON,MS,39206";delivery_by_ports=765; port = "Нью Джерси"; break;
        case "84":place="MS IAA Byram 7670 SIWELL ROAD BYRAM,MS,39272";delivery_by_ports=600; port = "Tехас"; break;
        case "85":place="MT 4U COLLISION CENTER 23 8TH AVE NE CONRAD,MT,59425";delivery_by_ports=1280; port = "Калифорния"; break;
        case "86":place="NC 6500 ROZZELLES FERRY RD CHARLOTTE,NC,28214";delivery_by_ports=500; port = "Джорджия"; break;
        case "87":place="NC DUNN - 747 4129 NC-242 DUNN,NC,28334";delivery_by_ports=530; port = "Джорджия"; break;
        case "88":place="NC OFFSITE Monroe, NC 28110 MONROE,NC,28112";delivery_by_ports=590; port = "Джорджия"; break;
        case "89":place="NC RICHLANDS,NC,28574";delivery_by_ports=530; port = "Джорджия"; break;
        case "90":place="NC TKU AUTO SALES LLC 1204 N CHURCH ST BURLINGTON,NC,27217";delivery_by_ports=530; port = "Джорджия"; break;
        case "91":place="NE 13909 238TH STREET GREENWOOD,NE,68366";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "92":place="NE iaa omaha north lot OMAHA,NE,68110";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "93":place="NH 75 LOWELL RD SALEM,NH,03079";delivery_by_ports=490; port = "Нью Джерси"; break;
        case "94":place="NH Kingston, NH 03848 KINGSTON,NH,03848";delivery_by_ports=510; port = "Нью Джерси"; break;
        case "95":place="NH Salem 199 LAWRENCE RD SALEM,NH,03079";delivery_by_ports=490; port = "Нью Джерси"; break;
        case "96":place="NJ 230 PENSION RD MANALAPAN,NJ,07726";delivery_by_ports=330; port = "Нью Джерси"; break;
        case "97":place="NJ 700 FEDERAL BLVD CARTERET,NJ,07008";delivery_by_ports=280; port = "Нью Джерси"; break;
        case "98":place="NJ 985 STATE ROUTE 57 PORT MURRAY,NJ,07865";delivery_by_ports=310; port = "Нью Джерси"; break;
        case "99":place="NJ At the Central New Jersey (NJ) branch 426 TEXAS ROAD MORGANVILLE,NJ,07751";delivery_by_ports=270; port = "Нью Джерси"; break;
        case "100":place="NJ Englishtown CAT Yard #611 230 PENSION RD ENGLISHTOWN,NJ,07726";delivery_by_ports=330; port = "Нью Джерси"; break;
        case "101":place="NJ New Brunswick, NJ 08901 NEW BRUNSWICK,NJ,08901";delivery_by_ports=280; port = "Нью Джерси"; break;
        case "102":place="NJ PARKWAY AUTO 578 MEMORIAL PKWY PHILLIPSBURG,NJ,08865";delivery_by_ports=310; port = "Нью Джерси"; break;
        case "103":place="NJ Robbinsville, NJ ROBBINSVILLE,NJ,08691";delivery_by_ports=330; port = "Нью Джерси"; break;
        case "104":place="NM Albuquerque IAA Branch 4400 BROADWAY BLVD SE ALBUQUERQUE,NM,87105";delivery_by_ports=700; port = "Калифорния"; break;
        case "105":place="NY 115 PORT WATSON ST CORTLAND,NY 13045";delivery_by_ports=490; port = "Нью Джерси"; break;
        case "106":place="NY 1210 KINGS ROAD SCHENECTADY,NY,12303";delivery_by_ports=405; port = "Нью Джерси"; break;
        case "107":place="NY 21 RICE CT MEDFORD,NY,11763";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "108":place="NY 366 VULCAN STREET BUFFALO,NY,14207";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "109":place="NY 71 PECONIC AVE MEDFORD,NY,11763";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "110":place="NY Binghamton, NY 13903 BINGHAMTON,NY,13903";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "111":place="NY BUFFALO,NY,14227";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "112":place="NY Drive Auto Sales 656 PINE AIRE DRIVE BAYSHORE,NY,11706";delivery_by_ports=320; port = "Нью Джерси"; break;
        case "113":place="NY HL2 EAST ROCHESTER,NY,14445";delivery_by_ports=490; port = "Нью Джерси"; break;
        case "114":place="NY LI - Calverton Airport 613 901 BURMAN BLVD CALVERTON,NY,11933";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "115":place="NY Monticello-672 MONTICELLO,NY,12701";delivery_by_ports=430; port = "Нью Джерси"; break;
        case "116":place="NY small town auto MONTOUR FALLS,NY,14865";delivery_by_ports=490; port = "Нью Джерси"; break;
        case "117":place="NY STATEN ISLAND,NY,10314";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "118":place="NY WEST NYACK,NY,10994";delivery_by_ports=300; port = "Нью Джерси"; break;
        case "119":place="OH AA Stimmel Road 420 STIMMEL ROAD COLUMBUS,OH,43223";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "120":place="OH Amelia IAA Cinci-South 1736 LINDALE MT. HOLLY RD AMELIA,OH,45102";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "121":place="OH At the Dayton (OH) branch 400 CHEROKEE DR DAYTON,OH,45417";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "122":place="OH Offsite - Carrollton OH 44615 CARROLLTON,OH,44615";delivery_by_ports=555; port = "Нью Джерси"; break;
        case "123":place="OH Offsite - Cuyahoga Falls OH 44223 CUYAHOGA FALLS,OH,44223";delivery_by_ports=555; port = "Нью Джерси"; break;
        case "124":place="OH Offsite - Willoughby OH 44094 WILLOUGHBY,OH,44094";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "125":place="OH Offsite -Elyria, OH 44035 ELYRIA,OH,44035";delivery_by_ports=565; port = "Нью Джерси"; break;
        case "126":place="OH Tallmadge,OH 44278 TALLMADGE,OH,44278";delivery_by_ports=560; port = "Нью Джерси"; break;
        case "127":place="OH Vermillion - North Ford Lot 8149 W. ERIE VERMILION,OH,44089";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "128":place="OR EUGENE,OR,97402";delivery_by_ports=830; port = "Калифорния"; break;
        case "129":place="OR IAA St John Offiste 8524 N CRAWFORD AVE PORTLAND,OR,97203";delivery_by_ports=830; port = "Калифорния"; break;
        case "130":place="OR PORTLAND WEST 10498 N VANCOUVER WAY PORTLAND,OR,97217";delivery_by_ports=830; port = "Калифорния"; break;
        case "131":place="PA IAA Bridgeport - Philadelphia East 7777 STATE RD PHILADELPHIA,PA,19136";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "132":place="PA R&J AUTOMOTIVE COMPANY LLC - Offsite ESSINGTON,PA,19029";delivery_by_ports=390; port = "Нью Джерси"; break;
        case "133":place="SC 422 SCUFFLETOWN RD SIMPSONVILLE,SC,29681";delivery_by_ports=495; port = "Джорджия"; break;
        case "134":place="SC Offsite - York NC 29745 YORK,SC,29745";delivery_by_ports=495; port = "Джорджия"; break;
        case "135":place="SD ALAN'S AUTO RECYCLING 1800 SEGER DRIVE RAPID CITY SD 57701";delivery_by_ports=1130; port = "Нью Джерси"; break;
        case "136":place="TN Madison, TN MADISON,TN,37115";delivery_by_ports=680; port = "Джорджия"; break;
        case "137":place="TN Nashville, TN NASHVILLE,TN,37211";delivery_by_ports=680; port = "Джорджия"; break;
        case "138":place="TX 11022 MESA DRIVE HOUSTON,TX,77078";delivery_by_ports=380; port = "Tехас"; break;
        case "139":place="TX 1107 BROADWAY PASADENA,TX,77506";delivery_by_ports=310; port = "Tехас"; break;
        case "140":place="TX 12100 WEST LITTLE YORK RD HOUSTON,TX,77041";delivery_by_ports=380; port = "Tехас"; break;
        case "141":place="TX 1528 STATE HIGHWAY 71 COLUMBUS,TX,78934";delivery_by_ports=435; port = "Tехас"; break;
        case "142":place="TX 16602 E HARDY RD HOUSTON,TX,77032";delivery_by_ports=380; port = "Tехас"; break;
        case "143":place="TX 18600 WILBER ROAD HAMSHIRE,TX,77622";delivery_by_ports=355; port = "Tехас"; break;
        case "144":place="TX 23010 FIREFLY RD FLORENCE,TX,76527";delivery_by_ports=430; port = "Tехас"; break;
        case "145":place="TX 3748 MCPHERSON DR JUSTIN,TX,76247";delivery_by_ports=355; port = "Tехас"; break;
        case "146":place="TX 5000 I-10 SEALY,TX,77474";delivery_by_ports=380; port = "Tехас"; break;
        case "147":place="TX 711 RANKIN ROAD HOUSTON,TX,77073";delivery_by_ports=380; port = "Tехас"; break;
        case "148":place="TX 8119 MILLER ROAD NO. 3 HOUSTON,TX,77049";delivery_by_ports=315; port = "Tехас"; break;
        case "149":place="TX AUSTIN - IAA 2191 HIGHWAY 21 WEST DALE,TX,78616";delivery_by_ports=555; port = "Tехас"; break;
        case "150":place="TX Beaumont Hwy_CAT Yard 17011 BEAUMONT HWY HOUSTON,TX,77049";delivery_by_ports=330; port = "Tехас"; break;
        case "151":place="TX CAT Houston Oates Rd. 1 4605 OATES ROAD HOUSTON,TX,77013";delivery_by_ports=380; port = "Tехас"; break;
        case "152":place="TX CAT YARD 3 7575 FM 2004 HITCHCOCK,TX,77563";delivery_by_ports=350; port = "Tехас"; break;
        case "153":place="TX CAT YARD 5 12100 WEST LITTLE YORK RD HOUSTON,TX,77041";delivery_by_ports=380; port = "Tехас"; break;
        case "154":place="TX CAT YARD D 18100 US-59 BUSINESS NEW CANEY,TX,77357";delivery_by_ports=350; port = "Tехас"; break;
        case "155":place="TX GRAND PRAIRIE,TX,75050";delivery_by_ports=550; port = "Tехас"; break;
        case "156":place="TX Offsite Offsite - Dallas TX 75229 DALLAS,TX,75229";delivery_by_ports=555; port = "Tехас"; break;
        case "157":place="TX SAN ANTONIO-SOUTH 11275 SOUTH ZARZAMORA SAN ANTONIO,TX,78224";delivery_by_ports=540; port = "Tехас"; break;
        case "158":place="TX SAN BENITO,TX,78586";delivery_by_ports=580; port = "Tехас"; break;
        case "159":place="VA BRISTOL,VA,24202";delivery_by_ports=930; port = "Нью Джерси"; break;
        case "160":place="VA Doswell - 711 DOSWELL, VA, 23047";delivery_by_ports=515; port = "Нью Джерси"; break;
        case "161":place="VA IAA CULPEPER 15201 REVIEW RD CULPEPER,VA,22701";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "162":place="VA IAA Pulaski 7054 SALLING BRANCH ROAD FAIRLAWN,VA,24141";delivery_by_ports=570; port = "Нью Джерси"; break;
        case "163":place="VA MANASSAS,VA,20111";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "164":place="VA Montvale Yard #724 1576 QUARTERWOOD RD MONTVALE,VA,24122";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "165":place="VA OFFSITE - Chesapeake VA 23321 CHESAPEAKE,VA,23321";delivery_by_ports=535; port = "Нью Джерси"; break;
        case "166":place="VA Premium Auto Brokers VIRGINIA BEACH,VA,23464";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "167":place="VT 304 COLCHESTER ROAD ESSEX JUNCTION,VT,05452";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "168":place="WA IAA Puyallup 15801 110TH AVE E PUYALLUP,WA,98374";delivery_by_ports=1180; port = "Калифорния"; break;
        case "169":place="WA IAA TUKWILA OFFSITE 8801 E MARGINAL WAY S TUKWILA,WA,98108";delivery_by_ports=1130; port = "Калифорния"; break;
        case "170":place="WA Vancouver IAA offsite 15615 NE FOURTH PLAIN BLVD VANCOUVER, WA, 98682";delivery_by_ports=1130; port = "Калифорния"; break;
        case "171":place="WI 7213 US HIGHWAY 41 CALEDONIA,WI,53108";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "172":place="WI W10890 SCHOOL RD FREMONT,WI,54940";delivery_by_ports=730; port = "Нью Джерси"; break;
    }
    document.getElementById('port_deliver').innerHTML = port;
    return delivery_by_ports, port;  
}

function delivery_AA(){
    let AA = document.getElementById('AA').value;
    let place = '';
    switch(AA){
        case "1":place="AL ADESA Birmingham (AL)";delivery_by_ports=455; port = 'Флорида'; break;
        case "2":place="AL Huntsville";delivery_by_ports=470; port = 'Джорджия'; break;
        case "3":place="AL BIRMINGHAM";delivery_by_ports=495; port = 'Джорджия'; break;
        case "4":place="AL Dothan";delivery_by_ports=430; port = 'Джорджия'; break;
        case "5":place="AL Anchorag"; delivery_by_ports=2130; port = 'Джорджия'; break;
        case "6":place="AR FAYETTEVILLE";delivery_by_ports=515; port = 'Техас'; break;
        case "7":place="AR LITTLE ROCK";delivery_by_ports=545; port = 'Техас'; break;
        case "8":place="AZ PHOENIX";delivery_by_ports=520; port = 'Техас'; break;
        case "9":place="AZ TUCSON";delivery_by_ports=580; port = 'Калифорния'; break;
        case "10":place="CA Anaheim";delivery_by_ports=330; port = 'Калифорния'; break;
        case "11":place="CA East Bay";delivery_by_ports=505; port = 'Калифорния'; break;
        case "12":place="CA BURBANK";delivery_by_ports=400; port = 'Калифорния'; break;
        case "13":place="CA ACE Carson (CA)";delivery_by_ports=370; port = 'Калифорния'; break;
        case "14":place="CA Colton";delivery_by_ports=340; port = 'Калифорния'; break;
        case "15":place="CA Fontana";delivery_by_ports=350; port = 'Калифорния'; break;
        case "16":place="CA Fremont";delivery_by_ports=505; port = 'Калифорния'; break;
        case "17":place="CA FRESNO";delivery_by_ports=480; port = 'Калифорния'; break;
        case "18":place="CA Los Angeles";delivery_by_ports=370; port = 'Калифорния'; break;
        case "19":place="CA High Desert";delivery_by_ports=430; port = 'Калифорния'; break;
        case "20":place="CA North Hollywood";delivery_by_ports=370; port = 'Калифорния'; break;
        case "21":place="CA ACE - Perris";delivery_by_ports=440; port = 'Калифорния'; break;
        case "22":place="CA Sacramento";delivery_by_ports=505; port = 'Калифорния'; break;
        case "23":place="CA SAN DIEGO";delivery_by_ports=470; port = 'Калифорния'; break;
        case "24":place="CA Los Angeles South";delivery_by_ports=370; port = 'Калифорния'; break;
        case "25":place="CO Colorado Springs";delivery_by_ports=1030; port = 'Нью Джерси'; break;
        case "26":place="CO DENVER EAST";delivery_by_ports=680; port = 'Техас'; break;
        case "27":place="CO Western Colorado";delivery_by_ports=1110; port = 'Техас'; break;
        case "28":place="СO DENVER";delivery_by_ports=680; port = 'Техас'; break;
        case "29":place="ST HARTFORD";delivery_by_ports=380; port = 'Нью Джерси'; break;
        case "30":place="ST Hartford South";delivery_by_ports=380; port = 'Нью Джерси'; break;
        case "31":place="DE New Castle";delivery_by_ports=380; port = 'Нью Джерси'; break;
        case "32":place="FL Clearwater";delivery_by_ports=350; port = 'Флорида'; break;
        case "33":place="FL Fort Myers";delivery_by_ports=560; port = 'Джорджия'; break;
        case "34":place="FL FT. PIERCE";delivery_by_ports=280; port = 'Флорида'; break;
        case "35":place="FL Tampa North";delivery_by_ports=380; port = 'Флорида'; break;
        case "36":place="FL JACKSONVILLE";delivery_by_ports=330; port = 'Джорджия'; break;
        case "37":place="FL Jupiter";delivery_by_ports=380; port = 'Флорида'; break;
        case "38":place="FL Pensacola";delivery_by_ports=430; port = 'Флорида'; break;
        case "39":place="FL Fort Myers";delivery_by_ports=950; port = 'Флорида'; break;
        case "40":place="FL Miami";delivery_by_ports=280; port = 'Флорида'; break;
        case "41":place="FL ORLANDO";delivery_by_ports=330; port = 'Флорида'; break;
        case "42":place="FL Tempa";delivery_by_ports=330; port = 'Флорида'; break;
        case "43":place="FL MIAMI NORTH";delivery_by_ports=330; port = 'Флорида'; break;
        case "44":place="FL Orlando-North";delivery_by_ports=330; port = 'Флорида'; break;
        case "45":place="FL MIAMI NORTH (FL)";delivery_by_ports=330; port = 'Флорида'; break;
        case "46":place="GA ATLANTA NORTH";delivery_by_ports=430; port = 'Джорджия'; break;
        case "47":place="GA ATLANTA SOUTH";delivery_by_ports=430; port = 'Джорджия'; break;
        case "48":place="GA ATLANTA EAST";delivery_by_ports=430; port = 'Джорджия'; break;
        case "49":place="GA MACON";delivery_by_ports=380; port = 'Джорджия'; break;
        case "50":place="GA SAVANNAH";delivery_by_ports=230; port = 'Джорджия'; break;
        case "51":place="GA TIFTON";delivery_by_ports=380; port = 'Джорджия'; break;
        case "52":place="GA Atlanta East";delivery_by_ports=430; port = 'Джорджия'; break;
        case "53":place="HI Honolulu";delivery_by_ports=2610; port = 'Калифорния'; break;
        case "54":place="HI Honolulu/91 - 445A Komoha";delivery_by_ports=2610; port = 'Калифорния'; break;
        case "55":place="IA Davenplace";delivery_by_ports=705; port = 'Нью Джерси'; break;
        case "56":place="IA Des Moines";delivery_by_ports=730; port = 'Нью Джерси'; break;
        case "57":place="ID BOISE";delivery_by_ports=880; port = 'Калифорния'; break;
        case "58":place="IL CHICAGO WEST";delivery_by_ports=580; port = 'Нью Джерси'; break;
        case "59":place="IL St. Louis";delivery_by_ports=630; port = 'Нью Джерси'; break;
        case "60":place="IL CHICAGO NORTH";delivery_by_ports=630; port = 'Нью Джерси'; break;
        case "61":place="IL LINCOLN";delivery_by_ports=705; port = 'Нью Джерси'; break;
        case "62":place="IL CHICAGO SOUTH";delivery_by_ports=630; port = 'Нью Джерси'; break;
        case "63":place="IL Specialty Division";delivery_by_ports=600; port = 'Нью Джерси'; break;
        case "64":place="IN Indianapolis (IN)";delivery_by_ports=730; port = 'Нью Джерси'; break;
        case "65":place="IN Indianapolis";delivery_by_ports=630; port = 'Нью Джерси'; break;
        case "66":place="IN Fort Wayne";delivery_by_ports=680;port = 'Нью Джерси'; break;
        case "67":place="IN South Bend";delivery_by_ports=680; port = 'Нью Джерси'; break;
        case "68":place="KS KANSAS CITY";delivery_by_ports=630; port = 'Техас'; break;
        case "69":place="KS WICHITA";delivery_by_ports=580; port = 'Техас'; break;
        case "70":place="KY Ashland KY";delivery_by_ports=680; port = 'Джорджия'; break;
        case "71":place="KY Bowling Green, KY";delivery_by_ports=680; port = 'Джорджия'; break;
        case "72":place="KY LOUISVILLE NORTI";delivery_by_ports=680; port = 'Джорджия'; break;
        case "73":place="KY Paducah, KY";delivery_by_ports=680; port = 'Джорджия'; break;
        case "74":place="KY Louisville";delivery_by_ports=680; port = 'Джорджия'; break;
        case "75":place="LA Baton Rouge (LA)";delivery_by_ports=400; port = 'Техас'; break;
        case "76":place="LA NEW ORLEANS";delivery_by_ports=280; port = 'Техас'; break;
        case "77":place="LA Shreveplace";delivery_by_ports=380; port = 'Техас'; break;
        case "78":place="LA Lafovetto";delivery_by_ports=380; port = 'Техас'; break;
        case "79":place="LA BATON ROUGE";delivery_by_ports=400; port = 'Техас'; break;
        case "80":place="LA NEW ORLEANS EAST";delivery_by_ports=450; port = 'Техас'; break;
        case "81":place="LA NORTH SCOTT";delivery_by_ports=670; port = 'Джорджия'; break;
        case "82":place="MA Taunton";delivery_by_ports=430; port = 'Нью Джерси'; break;
        case "83":place="MA Boston Shirley";delivery_by_ports=430; port = 'Нью Джерси'; break;
        case "84":place="MA Templaton (MA)";delivery_by_ports=480; port = 'Нью Джерси'; break;
        case "85":place="MD BALTIMORE";delivery_by_ports=405; port = 'Нью Джерси'; break;
        case "86":place="MD Metro DC";delivery_by_ports=405; port = 'Нью Джерси'; break;
        case "87":place="MD Dundalk";delivery_by_ports=405; port = 'Нью Джерси'; break;
        case "88":place="MD Elkton";delivery_by_ports=480; port = 'Нью Джерси'; break;
        case "89":place="MD Laurel";delivery_by_ports=430; port = 'Нью Джерси'; break;
        case "90":place="MD Rosedale";delivery_by_ports=430; port = 'Нью Джерси'; break;
        case "91":place="MD WHITE PLAINS";delivery_by_ports=430; port = 'Нью Джерси'; break;
        case "92":place="ME placeland - Gorham";delivery_by_ports=580; port = 'Нью Джерси'; break;
        case "93":place="MI Great Lakes";delivery_by_ports=830; port = 'Нью Джерси'; break;
        case "94":place="MI DETROIT";delivery_by_ports=680; port = 'Нью Джерси'; break;
        case "95":place="MI Grand Rapids";delivery_by_ports=680; port = 'Нью Джерси'; break;
        case "96":place="Ml Flint";delivery_by_ports=680; port = 'Нью Джерси'; break;
        case "97":place="MN Minneapolis South";delivery_by_ports=730; port = 'Нью Джерси'; break;
        case "98":place="MN Minneapolis";delivery_by_ports=680; port = 'Нью Джерси'; break;
        case "99":place="MO Kansas City East";delivery_by_ports=730; port = 'Нью Джерси'; break;
        case "100":place="MO Springfield";delivery_by_ports=605; port = 'Джорджия'; break;
        case "101":place="MS BYRAM";delivery_by_ports=630; port = 'Техас'; break;
        case "102":place="MS Grenada";delivery_by_ports=550; port = 'Техас'; break;
        case "103":place="MS Jackson";delivery_by_ports=630; port = 'Техас'; break;
        case "104":place="MS Gulf Coast";delivery_by_ports=430; port = 'Техас'; break;
        case "105":place="MT BILLINGS";delivery_by_ports=980; port = 'Калифорния'; break;
        case "106":place="MT Missoula";delivery_by_ports=1030; port = 'Калифорния'; break;
        case "107":place="NC Wilmington";delivery_by_ports=460; port = 'Джорджия'; break;
        case "108":place="NC Charlotte";delivery_by_ports=430; port = 'Джорджия'; break;
        case "109":place="NC Raleigh";delivery_by_ports=625; port = 'Джорджия'; break;
        case "110":place="NC Concord";delivery_by_ports=555; port = 'Джорджия'; break;
        case "111":place="NC Asheville";delivery_by_ports=495; port = 'Джорджия'; break;
        case "112":place="NC Greensboro";delivery_by_ports=495; port = 'Джорджия'; break;
        case "113":place="NC High Point";delivery_by_ports=630; port = 'Джорджия'; break;
        case "114":place="ND FARGO";delivery_by_ports=1280; port = 'Нью Джерси'; break;
        case "115":place="NE Omaha";delivery_by_ports=780; port = 'Нью Джерси'; break;
        case "116":place="NH Manchester";delivery_by_ports=480; port = 'Нью Джерси'; break;
        case "117":place="NJ Avenel New Jersey";delivery_by_ports=280; port = 'Нью Джерси'; break;
        case "118":place="NJ Northern New Jersey";delivery_by_ports=270; port = 'Нью Джерси'; break;
        case "119":place="NJ Englishtown";delivery_by_ports=275; port = 'Нью Джерси'; break;
        case "120":place="NJ Central New Jersev";delivery_by_ports=280; port = 'Нью Джерси'; break;
        case "121":place="NJ place Murray";delivery_by_ports=310; port = 'Нью Джерси'; break;
        case "122":place="NJ Savreville";delivery_by_ports=280; port = 'Нью Джерси'; break;
        case "123":place="NJ Southern New Jersey";delivery_by_ports=330; port = 'Нью Джерси'; break;
        case "124":place="NM ALBUQUERQUE";delivery_by_ports=830; port = 'Техас'; break;
        case "125":place="NV LAS VEGAS";delivery_by_ports=500; port = 'Калифорния'; break;
        case "126":place="NV RENO";delivery_by_ports=680; port = 'Калифорния'; break;
        case "127":place="NY Rochester";delivery_by_ports=505; port = 'Нью Джерси'; break;
        case "128":place="NY Buffalo";delivery_by_ports=580; port = 'Нью Джерси'; break;
        case "129":place="NY Syracuse";delivery_by_ports=450; port = 'Нью Джерси'; break;
        case "130":place="NY Long Island";delivery_by_ports=380; port = 'Нью Джерси'; break;
        case "131":place="NY ROCHESTER";delivery_by_ports=505; port = 'Нью Джерси'; break;
        case "132":place="NY Newburgh";delivery_by_ports=380; port = 'Нью Джерси'; break;
        case "133":place="NY Albany";delivery_by_ports=405; port = 'Нью Джерси'; break;
        case "134":place="OH Cincinnati-South";delivery_by_ports=605; port = 'Нью Джерси'; break;
        case "135":place="OH COLUMBUS";delivery_by_ports=580; port = 'Нью Джерси'; break;
        case "136":place="OH Dayton";delivery_by_ports=580; port = 'Нью Джерси'; break;
        case "137":place="OH Columbus";delivery_by_ports=555; port = 'Нью Джерси'; break;
        case "138":place="OH CLEVELAND";delivery_by_ports=555; port = 'Нью Джерси'; break;
        case "139":place="OH Akron-Canton";delivery_by_ports=530; port = 'Нью Джерси'; break;
        case "140":place="OH Cincinnati";delivery_by_ports=555; port = 'Нью Джерси'; break;
        case "141":place="OK OKLAHOMA CITY";delivery_by_ports=480; port = 'Техас'; break;
        case "142":place="OK TULSA";delivery_by_ports=480; port = 'Техас'; break;
        case "143":place="OR EUGENE";delivery_by_ports=805; port = 'Калифорния'; break;
        case "144":place="OR Portland";delivery_by_ports=830; port = 'Калифорния'; break;
        case "145":place="OR Portland West";delivery_by_ports=855; port = 'Калифорния'; break;
        case "146":place="OR Portland South";delivery_by_ports=860; port = 'Калифорния'; break;
        case "147":place="PA Pittoburgh";delivery_by_ports=530; port = 'Нью Джерси'; break;
        case "148":place="PA Bridgeplace";delivery_by_ports=355; port = 'Нью Джерси'; break;
        case "149":place="PA Philadelphia";delivery_by_ports=350; port = 'Нью Джерси'; break;
        case "150":place="PA ALTOONA";delivery_by_ports=530; port = 'Нью Джерси'; break;
        case "151":place="PA Erie";delivery_by_ports=605; port = 'Нью Джерси'; break;
        case "152":place="PA PITTSBURGH NORTH";delivery_by_ports=530; port = 'Нью Джерси'; break;
        case "153":place="PA Philadelphia East (PA)";delivery_by_ports=350; port = 'Нью Джерси'; break;
        case "154":place="PA Scranton";delivery_by_ports=380; port = 'Нью Джерси'; break;
        case "155":place="PA York Springs";delivery_by_ports=430; port = 'Нью Джерси'; break;
        case "156":place="RI East Providence";delivery_by_ports=455; port = 'Нью Джерси'; break;
        case "157":place="SC COLUMBIA";delivery_by_ports=280; port = 'Джорджия'; break;
        case "158":place="SC Lexington";delivery_by_ports=510; port = 'Джорджия'; break;
        case "159":place="SC Charleston";delivery_by_ports=230; port = 'Джорджия'; break;
        case "160":place="SC Greenvile";delivery_by_ports=430; port = 'Джорджия'; break;
        case "161":place="SD Sioux Falls";delivery_by_ports=970; port = 'Нью Джерси'; break;
        case "162":place="TN Chattanooga";delivery_by_ports=480; port = 'Джорджия'; break;
        case "163":place="TN KNOXVILLE";delivery_by_ports=480; port = 'Джорджия'; break;
        case "164":place="TN Memphis";delivery_by_ports=580; port = 'Джорджия'; break;
        case "165":place="TN NASHVILLE";delivery_by_ports=525; port = 'Джорджия'; break;
        case "166":place="TX Abilene";delivery_by_ports=430; port = 'Техас'; break;
        case "167":place="TX AMARILLO";delivery_by_ports=580; port = 'Техас'; break;
        case "168":place="TX CORPUS CHRISTI";delivery_by_ports=340; port = 'Техас'; break;
        case "169":place="TX Austin";delivery_by_ports=320; port = 'Техас'; break;
        case "170":place="TX MCALLEN";delivery_by_ports=350; port = 'Техас'; break;
        case "171":place="TX EL PASO";delivery_by_ports=580; port = 'Техас'; break;
        case "172":place="TX Dallas/Ft. Worth";delivery_by_ports=300; port = 'Техас'; break;
        case "173":place="TX ABILENE";delivery_by_ports=430; port = 'Техас'; break;
        case "174":place="TX HOUSTON";delivery_by_ports=280; port = 'Техас'; break;
        case "175":place="TX Houston North";delivery_by_ports=280; port = 'Техас'; break;
        case "176":place="TX Fort Worth North";delivery_by_ports=355; port = 'Техас'; break;
        case "177":place="TX LONGVIEW";delivery_by_ports=330; port = 'Техас'; break;
        case "178":place="TX Lubbock";delivery_by_ports=480; port = 'Техас'; break;
        case "179":place="TX Permian Basin";delivery_by_ports=400; port = 'Техас'; break;
        case "180":place="TX Houston South (TH)";delivery_by_ports=280; port = 'Техас'; break;
        case "181":place="TX San Antonio";delivery_by_ports=280; port = 'Техас'; break;
        case "182":place="TX San Antonio-South";delivery_by_ports=380; port = 'Техас'; break;
        case "183":place="TX Dallas";delivery_by_ports=330; port = 'Техас'; break;
        case "184":place="UT Salt Lake City";delivery_by_ports=680; port = 'Калифорния'; break;
        case "185":place="VA RICHMOND";delivery_by_ports=480; port = 'Нью Джерси'; break;
        case "186":place="VA Culpeper";delivery_by_ports=530; port = 'Нью Джерси'; break;
        case "187":place="VA Fredericksburg-South";delivery_by_ports=430; port = 'Нью Джерси'; break;
        case "188":place="VA Northern Virginia";delivery_by_ports=430; port = 'Нью Джерси'; break;
        case "189":place="VA Roanoke";delivery_by_ports=530; port = 'Нью Джерси'; break;
        case "190":place="VA Pulaski";delivery_by_ports=580; port = 'Нью Джерси'; break;
        case "191":place="VA Suffolk";delivery_by_ports=555; port = 'Нью Джерси'; break;
        case "192":place="VA Tidewater";delivery_by_ports=470; port = 'Нью Джерси'; break;
        case "193":place="VT Burlington";delivery_by_ports=630; port = 'Нью Джерси'; break;
        case "194":place="WA Seattle (WA)";delivery_by_ports=1180; port = 'Калифорния'; break;
        case "195":place="WA Spokane";delivery_by_ports=1430; port = 'Калифорния'; break;
        case "196":place="WA Seattle South";delivery_by_ports=1280; port = 'Калифорния'; break;
        case "197":place="WA Seattle";delivery_by_ports=1180; port = 'Калифорния'; break;
        case "198":place="WI Appleton";delivery_by_ports=830; port = 'Нью Джерси'; break;
        case "199":place="WI Portage";delivery_by_ports=830; port = 'Нью Джерси'; break;
        case "200":place="WI Milwaukee";delivery_by_ports=830; port = 'Нью Джерси'; break;
        case "201":place="WV Buckhannon";delivery_by_ports=650; port = 'Нью Джерси'; break;
        case "202":place="WV Casper";delivery_by_ports=1550; port = 'Нью Джерси'; break;
        case "203":place="WV Shady Spring";delivery_by_ports=655; port = 'Нью Джерси'; break;
        case "204":place="WY Casper";delivery_by_ports=1550; port = 'Нью Джерси'; break;
    }
    document.getElementById('port_deliver').innerHTML = port;
    return delivery_by_ports, port;  
}

function delivery_Copart(){
    let Copart = document.getElementById('place_copart').value;
    switch(Copart){
        case "1":place="AL MOBILE";delivery_by_ports=480; port = "Джорджия"; break;
        case "2":place="AL BIRMINGHAM";delivery_by_ports=480; port = "Джорджия"; break;
        case "3":place="AL MONTGOMERY";delivery_by_ports=480; port = "Джорджия"; break;
        case "4":place="AL DOTHAN";delivery_by_ports=430; port = "Джорджия"; break;
        case "5":place="AL TANNER";delivery_by_ports=480; port = "Джорджия"; break;
        case "6":place="AL MOBILE SOUTH";delivery_by_ports=460; port = "Джорджия"; break;
        case "7":place="AL BIRMINGHAM AL SUBLOT";delivery_by_ports=480; port = "Джорджия"; break;
        case "8":place="AR LITTLE ROCK";delivery_by_ports=515; port = "Техас"; break;
        case "9":place="AR FAYETTEVILLE";delivery_by_ports=545; port = "Техас"; break;
        case "10":place="AZ PHOENIX";delivery_by_ports=520; port = "Калифорния"; break;
        case "11":place="AZ PHOENIX NORTH";delivery_by_ports=520; port = "Калифорния"; break;
        case "12":place="AZ TUCSON";delivery_by_ports=580; port = "Калифорния"; break;
        case "13":place="CA ADELANTO";delivery_by_ports=340; port = "Калифорния"; break;
        case "14":place="CA REDDING";delivery_by_ports=665; port = "Калифорния"; break;
        case "15":place="CA ANTELOPE";delivery_by_ports=555; port = "Калифорния"; break;
        case "16":place="CA BAKERSFIELD";delivery_by_ports=405; port = "Калифорния"; break;
        case "17":place="CA SAN BERNARDINO";delivery_by_ports=350; port = "Калифорния"; break;
        case "18":place="CA FRESNO";delivery_by_ports=480; port = "Калифорния"; break;
        case "19":place="CA SACRAMENTO CA SUBLOT";delivery_by_ports=615; port = "Калифорния"; break;
        case "20":place="CA HAYWARD";delivery_by_ports=530; port = "Калифорния"; break;
        case "21":place="CA LANCASTER CA SUBLOT";delivery_by_ports=480; port = "Калифорния"; break;
        case "22":place="CA LOS ANGELES";delivery_by_ports=380; port = "Калифорния"; break;
        case "23":place="CA MARTINEZ";delivery_by_ports=505; port = "Калифорния"; break;
        case "24":place="CA MENTONE";delivery_by_ports=380; port = "Калифорния"; break;
        case "25":place="CA RANCHO CUCAMONGA";delivery_by_ports=390; port = "Калифорния"; break;
        case "26":place="CA SACRAMENTO";delivery_by_ports=530; port = "Калифорния"; break;
        case "27":place="CA SAN DIEGO";delivery_by_ports=470; port = "Калифорния"; break;
        case "28":place="CA SAN JOSE";delivery_by_ports=505; port = "Калифорния"; break;
        case "29":place="CA SANTA PAULA CA SUBLOT";delivery_by_ports=440; port = "Калифорния"; break;
        case "30":place="CA SUN VALLEY";delivery_by_ports=330; port = "Калифорния"; break;
        case "31":place="CA VALLEJO";delivery_by_ports=505; port = "Калифорния"; break;
        case "32":place="CA VAN NUYS";delivery_by_ports=380; port = "Калифорния"; break;
        case "33":place="CA LONG BEACH";delivery_by_ports=330; port = "Калифорния"; break;
        case "34":place="CO DENVER";delivery_by_ports=680; port = "Калифорния"; break;
        case "35":place="CO COLORADO SPRINGS";delivery_by_ports=730; port = "Калифорния"; break;
        case "36":place="CO DENVER CENTRAL";delivery_by_ports=680; port = "Калифорния"; break;
        case "37":place="CO FORT LUPTON";delivery_by_ports=830; port = "Калифорния"; break;
        case "38":place="CO DENVER SOUTH";delivery_by_ports=705; port = "Калифорния"; break;
        case "39":place="CT HARTFORD SPRINGFIELD";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "40":place="CT BERLIN CT SUBLOT";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "41":place="CT HARTFORD";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "42":place="DE SEAFORD";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "43":place="FL ORLANDO NORTH";delivery_by_ports=280; port = "Флорида"; break;
        case "44":place="FL PUNTA GORDA SOUTH";delivery_by_ports=530; port = "Флорида"; break;
        case "45":place="FL FT.PIERCE";delivery_by_ports=280; port = "Флорида"; break;
        case "46":place="FL MIAMI SOUTH";delivery_by_ports=380; port = "Флорида"; break;
        case "47":place="FL JACKSONVILLE EAST";delivery_by_ports=180; port = "Джорджия"; break;
        case "48":place="FL JACKSONVILLE SOUTH";delivery_by_ports=450; port = "Флорида"; break;
        case "49":place="FL JACKSONVILLE NORTH";delivery_by_ports=330; port = "Джорджия"; break;
        case "50":place="FL JACKSONVILLE WEST";delivery_by_ports=180; port = "Джорджия"; break;
        case "51":place="FL MIAMI CENTRAL";delivery_by_ports=380; port = "Флорида"; break;
        case "52":place="FL MIAMI NORTH";delivery_by_ports=380; port = "Флорида"; break;
        case "53":place="FL TALLAHASSEE";delivery_by_ports=580; port = "Флорида"; break;
        case "54":place="FL OCALA";delivery_by_ports=330; port = "Флорида"; break;
        case "55":place="FL ORLANDO SOUTH";delivery_by_ports=980; port = "Нью Джерси"; break;
        case "56":place="FL PUNTA GORDA";delivery_by_ports=1030; port = "Нью Джерси"; break;
        case "57":place="FL TAMPA SOUTH";delivery_by_ports=1080; port = "Нью Джерси"; break;
        case "58":place="FL WEST PALM BEACH";delivery_by_ports=380; port = "Флорида"; break;
        case "59":place="GA AUGUSTA";delivery_by_ports=430; port = "Джорджия"; break;
        case "60":place="GA ATLANTA WEST";delivery_by_ports=430; port = "Джорджия"; break;
        case "61":place="GA MACON";delivery_by_ports=510; port = "Джорджия"; break;
        case "62":place="GA CARTERSVILLE";delivery_by_ports=410; port = "Джорджия"; break;
        case "63":place="GA EAST POINT";delivery_by_ports=380; port = "Джорджия"; break;
        case "64":place="GA CRASHEDTOYS ATLANTA";delivery_by_ports=380; port = "Джорджия"; break;
        case "65":place="GA ATLANTA SOUTH";delivery_by_ports=570; port = "Джорджия"; break;
        case "66":place="GA FAIRBURN";delivery_by_ports=520; port = "Джорджия"; break;
        case "67":place="GA ATLANTA NORTH";delivery_by_ports=380; port = "Джорджия"; break;
        case "68":place="GA ATLANTA EAST";delivery_by_ports=430; port = "Джорджия"; break;
        case "69":place="GA SAVANNAH";delivery_by_ports=370; port = "Джорджия"; break;
        case "70":place="GA TIFTON";delivery_by_ports=450; port = "Джорджия"; break;
        case "71":place="GA METTER GA SUBLOT";delivery_by_ports=380; port = "Джорджия"; break;
        case "72":place="IA DES MOINES";delivery_by_ports=730; port = "Нью Джерси"; break;
        case "73":place="IA DAVENPORT";delivery_by_ports=730; port = "Нью Джерси"; break;
        case "74":place="IA CRASHEDTOYS ELDRIDGE";delivery_by_ports=730; port = "Нью Джерси"; break;
        case "75":place="ID BOISE";delivery_by_ports=880; port = "Нью Джерси"; break;
        case "76":place="IL SOUTHERN ILLINOIS";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "77":place="IL ALORTON";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "78":place="IL CHICAGO SOUTH";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "79":place="IL CHICAGO NORTH";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "80":place="IL PEORIA";delivery_by_ports=660; port = "Нью Джерси"; break;
        case "81":place="IL LOUIS IL SUBLOT";delivery_by_ports=730; port = "Нью Джерси"; break;
        case "82":place="IL WHEELING";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "83":place="IN CICERO";delivery_by_ports=730; port = "Нью Джерси"; break;
        case "84":place="IN DYER";delivery_by_ports=650; port = "Нью Джерси"; break;
        case "85":place="IN FORT WAYNE";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "86":place="IN HAMMOND";delivery_by_ports=605; port = "Нью Джерси"; break;
        case "87":place="IN HARTFORD CITY";delivery_by_ports=655; port = "Нью Джерси"; break;
        case "88":place="IN INDIANAPOLIS";delivery_by_ports=655; port = "Нью Джерси"; break;
        case "89":place="KS KANSAS CITY";delivery_by_ports=630; port = "Техас"; break;
        case "90":place="KS WICHITA";delivery_by_ports=580; port = "Техас"; break;
        case "91":place="KY EARLINGTON";delivery_by_ports=680; port = "Джорджия"; break;
        case "92":place="KY LEXINGTON WEST";delivery_by_ports=680; port = "Джорджия"; break;
        case "93":place="KY LEXINGTON EAST";delivery_by_ports=680; port = "Джорджия"; break;
        case "94":place="KY LOUISVILLE";delivery_by_ports=680; port = "Джорджия"; break;
        case "95":place="KY WALTON";delivery_by_ports=680; port = "Джорджия"; break;
        case "96":place="LA TICKFAW LA SUBLOT";delivery_by_ports=580; port = "Техас"; break;
        case "97":place="LA BATON ROUGE";delivery_by_ports=480; port = "Техас"; break;
        case "98":place="LA NEW ORLEANS";delivery_by_ports=420; port = "Техас"; break;
        case "99":place="LA SHREVEPORT";delivery_by_ports=370; port = "Техас"; break;
        case "100":place="MA FREETOWN";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "101":place="MA SOUTH BOSTON";delivery_by_ports=430; port = "Нью Джерси"; break;
        case "102":place="MA NORTH BOSTON";delivery_by_ports=430; port = "Нью Джерси"; break;
        case "103":place="MA WEST WARREN";delivery_by_ports=430; port = "Нью Джерси"; break;
        case "104":place="MD BALTIMORE EAST";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "105":place="MD BALTIMORE";delivery_by_ports=405; port = "Нью Джерси"; break;
        case "106":place="MD BALTIMORE MD SUBLOT";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "107":place="MD(DC) WASHINGTON DC";delivery_by_ports=405; port = "Нью Джерси"; break;
        case "108":place="MD WHITE MARSH SUBLOT";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "109":place="ME GRAY ME SUBLOT";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "110":place="ME LYMAN";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "111":place="ME ORONO ME SUBLOT";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "112":place="ME WINDHAM";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "113":place="MI FLINT";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "114":place="MI KINCHELOE";delivery_by_ports=1055; port = "Нью Джерси"; break;
        case "115":place="MI LANSING";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "116":place="MI IONIA";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "117":place="MI DETROIT";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "118":place="MN ST.CLOUD";delivery_by_ports=705; port = "Нью Джерси"; break;
        case "119":place="MN CRASHEDTOYS MINNEAPOLIS";delivery_by_ports=720; port = "Нью Джерси"; break;
        case "120":place="MN MINNEAPOLIS";delivery_by_ports=720; port = "Нью Джерси"; break;
        case "121":place="MN HAM LAKE MN SUBLOT";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "122":place="MN CRASHEDTOYS EAST BETHEL";delivery_by_ports=705; port = "Нью Джерси"; break;
        case "123":place="MN MINNEAPOLIS NORTH";delivery_by_ports=730; port = "Нью Джерси"; break;
        case "124":place="MO ST.LOUIS";delivery_by_ports=680; port = "Джорджия"; break;
        case "125":place="MO COLUMBIA";delivery_by_ports=630; port = "Джорджия"; break;
        case "126":place="MO SPRINGFIELD MO SUBLOT";delivery_by_ports=680; port = "Джорджия"; break;
        case "127":place="MO SPRINGFIELD";delivery_by_ports=730; port = "Джорджия"; break;
        case "128":place="MO SIKESTON";delivery_by_ports=680; port = "Джорджия"; break;
        case "129":place="MS JACKSON";delivery_by_ports=460; port = "Техас"; break;
        case "130":place="MS GRENADA";delivery_by_ports=550; port = "Техас"; break;
        case "131":place="MT BILLINGS";delivery_by_ports=980; port = "Калифорния"; break;
        case "132":place="MT HELENA";delivery_by_ports=1180; port = "Калифорния"; break;
        case "133":place="NC CHINA GROVE";delivery_by_ports=475; port = "Джорджия"; break;
        case "134":place="NC CONCORD";delivery_by_ports=380; port = "Джорджия"; break;
        case "135":place="NC LUMBERTON NC SUBLOT";delivery_by_ports=530; port = "Джорджия"; break;
        case "136":place="NC RALEIGH";delivery_by_ports=510; port = "Джорджия"; break;
        case "137":place="NC GASTONIA";delivery_by_ports=580; port = "Джорджия"; break;
        case "138":place="NC RALEIGH NORTH";delivery_by_ports=530; port = "Джорджия"; break;
        case "139":place="NC MEBANE";delivery_by_ports=440; port = "Джорджия"; break;
        case "140":place="NC MOCKSVILLE";delivery_by_ports=410; port = "Джорджия"; break;
        case "141":place="ND BISMARCK";delivery_by_ports=1280; port = "Нью Джерси"; break;
        case "142":place="NE LINCOLN";delivery_by_ports=805; port = "Нью Джерси"; break;
        case "143":place="NH CANDIA";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "144":place="NJ GLASSBORO EAST";delivery_by_ports=355; port = "Нью Джерси"; break;
        case "145":place="NJ SOMERVILLE";delivery_by_ports=290; port = "Нью Джерси"; break;
        case "146":place="NJ TRENTON";delivery_by_ports=290; port = "Нью Джерси"; break;
        case "147":place="NM ALBUQUERQUE";delivery_by_ports=830; port = "Техас"; break;
        case "148":place="NV LAS VEGAS";delivery_by_ports=500; port = "Калифорния"; break;
        case "149":place="NV LAS VEGAS WEST";delivery_by_ports=540; port = "Калифорния"; break;
        case "150":place="NV RENO";delivery_by_ports=680; port = "Калифорния"; break;
        case "151":place="NY ALBANY";delivery_by_ports=405; port = "Нью Джерси"; break;
        case "152":place="NY BUFFALO";delivery_by_ports=590; port = "Нью Джерси"; break;
        case "153":place="NY BROCTON NY SUBLOT";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "154":place="NY LONG ISLAND";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "155":place="NY SYRACUSE";delivery_by_ports=430; port = "Нью Джерси"; break;
        case "156":place="NY ROCHESTER";delivery_by_ports=505; port = "Нью Джерси"; break;
        case "157":place="NY NEWBURGH";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "158":place="NY ROCHESTER";delivery_by_ports=505; port = "Нью Джерси"; break;
        case "159":place="OH AKRON";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "160":place="OH CLEVELAND WEST";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "161":place="OH COLUMBUS";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "162":place="OH DAYTON";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "163":place="OH CLEVELAND EAST";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "164":place="OK OKLAHOMA CITY";delivery_by_ports=480; port = "Техас"; break;
        case "165":place="OK TULSA";delivery_by_ports=480; port = "Техас"; break;
        case "166":place="OR EUGENE";delivery_by_ports=805; port = "Калифорния"; break;
        case "167":place="OR PORTLAND NORTH";delivery_by_ports=855; port = "Калифорния"; break;
        case "168":place="OR PORTLAND SOUTH";delivery_by_ports=855; port = "Калифорния"; break;
        case "169":place="PA PITTSBURGH EAST";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "170":place="PA PHILADELPHIA EAST SUBLOT";delivery_by_ports=350; port = "Нью Джерси"; break;
        case "171":place="PA CHAMBERSBURG";delivery_by_ports=505; port = "Нью Джерси"; break;
        case "172":place="PA SCRANTON";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "173":place="PA ALTOONA";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "174":place="PA PITTSBURGH NORTH";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "175":place="PA HARRISBURG";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "176":place="PA PHILADELPHIA";delivery_by_ports=350; port = "Нью Джерси"; break;
        case "177":place="PA PITTSBURGH SOUTH";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "178":place="PA YORK HAVEN";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "179":place="RI EXETER";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "180":place="SC COLUMBIA";delivery_by_ports=570; port = "Джорджия"; break;
        case "181":place="SC GREER";delivery_by_ports=280; port = "Джорджия"; break;
        case "182":place="SC NORTH CHARLESTON";delivery_by_ports=320; port = "Джорджия"; break;
        case "183":place="SC GASTON SC SUBLOT";delivery_by_ports=570; port = "Джорджия"; break;
        case "184":place="SC SPARTANBURG SUBLOT";delivery_by_ports=580; port = "Джорджия"; break;
        case "185":place="SD RAPID CITY";delivery_by_ports=1330; port = "Нью Джерси"; break;
        case "186":place="TN NASHVILLE";delivery_by_ports=680; port = "Джорджия"; break;
        case "187":place="TN KNOXVILLE";delivery_by_ports=680; port = "Джорджия"; break;
        case "188":place="TN MEMPHIS";delivery_by_ports=720; port = "Джорджия"; break;
        case "189":place="TX ABILENE";delivery_by_ports=430; port = "Техас"; break;
        case "190":place="TX AMARILLO";delivery_by_ports=580; port = "Техас"; break;
        case "191":place="TX ANDREWS";delivery_by_ports=555; port = "Техас"; break;
        case "192":place="TX EL PASO";delivery_by_ports=555; port = "Техас"; break;
        case "193":place="TX HASLET TX SUBLOT";delivery_by_ports=630; port = "Техас"; break;
        case "194":place="TX CORPUS CHRISTI";delivery_by_ports=340; port = "Техас"; break;
        case "195":place="TX CRASHEDTOYS DALLAS";delivery_by_ports=270; port = "Техас"; break;
        case "196":place="TX DALLAS";delivery_by_ports=330; port = "Техас"; break;
        case "197":place="TX FT.WORTH";delivery_by_ports=330; port = "Техас"; break;
        case "198":place="TX HOUSTON";delivery_by_ports=230; port = "Техас"; break;
        case "199":place="TX LONGVIEW";delivery_by_ports=330; port = "Техас"; break;
        case "200":place="TX LUFKIN";delivery_by_ports=280; port = "Техас"; break;
        case "201":place="TX MCALLEN";delivery_by_ports=330; port = "Техас"; break;
        case "202":place="TX AUSTIN";delivery_by_ports=330; port = "Техас"; break;
        case "203":place="TX ORMY TX SUBLOT";delivery_by_ports=585; port = "Техас"; break;
        case "204":place="TX SAN ANTONIO";delivery_by_ports=380; port = "Техас"; break;
        case "205":place="TX WACO";delivery_by_ports=330; port = "Техас"; break;
        case "206":place="TX ANTHONY TX SUBLOT";delivery_by_ports=555; port = "Техас"; break;
        case "207":place="TX WILMER TX SUBLOT";delivery_by_ports=330; port = "Техас"; break;
        case "208":place="TX DALLAS SOUTH";delivery_by_ports=330; port = "Техас"; break;
        case "209":place="UT OGDEN SUBLOT";delivery_by_ports=630; port = "Калифорния"; break;
        case "210":place="UT SALT LAKE CITY";delivery_by_ports=680; port = "Калифорния"; break;
        case "211":place="VA RICHMOND EAST";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "212":place="VA DANVILLE";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "213":place="VA FREDERICKSBURG";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "214":place="VA HAMPTON";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "215":place="VA RICHMOND";delivery_by_ports=480; port = "Нью Джерси"; break;
        case "216":place="VT ORLEANS VT SUBLOT";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "217":place="VT RUTLAND";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "218":place="WA SPOKANE";delivery_by_ports=1430; port = "Калифорния"; break;
        case "219":place="WA NORTH SEATTLE";delivery_by_ports=1180; port = "Калифорния"; break;
        case "220":place="WA GRAHAM";delivery_by_ports=1180; port = "Калифорния"; break;
        case "221":place="WA PASCO";delivery_by_ports=1180; port = "Калифорния"; break;
        case "222":place="WI APPLETON";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "223":place="WI MILWAUKEE";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "224":place="WI MILWAUKEE NORTH";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "225":place="WI MILWAUKEE SOUTH";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "226":place="WI MADISON";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "227":place="WI MADISON SOUTH";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "228":place="WI WAUKESHA WI SUBLOT";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "229":place="WV CHARLESTON";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "230":place="WY CASPER";delivery_by_ports=1380; port = "Нью Джерси"; break;
    }
    
    document.getElementById('port_deliver').innerHTML = port;
    return delivery_by_ports, port; 
}

function delivery_Sublot_Copart(){
    let Sublot_Copart = document.getElementById('place_sublot_copart').value;
    switch(Sublot_Copart){
        case "1":place="AL 3101 DAVEY ALLISON BLVD BIRMINGHAM AL 35023";delivery_by_ports=550; port = "Джорджия"; break;
        case "2":place="AL THEODORE SUBLOT 9401 OLD PASCAGOULA RD THEODORE AL 36582";delivery_by_ports=585; port = "Джорджия"; break;
        case "3":place="AZ GRAND TURISMO MOTERZ 4032 N 7TH STREET PHOENIX AZ 85014";delivery_by_ports=585; port = "Калифорния"; break;
        case "4":place="CA 2348 INDUSTRIAL PKWY W HAYWARD CA 94545";delivery_by_ports=530; port = "Калифорния"; break;
        case "5":place="CA 1000 E LOMITA BLVD.WILMINGTON CA 90744";delivery_by_ports=315; port = "Калифорния"; break;
        case "6":place="CA 11201 PENDLETON ST SUN WALLEY CA 91352";delivery_by_ports=335; port = "Калифорния"; break;
        case "7":place="CA 1267 HWY 99 GRIDLEY CA 95948";delivery_by_ports=610; port = "Калифорния"; break;
        case "8":place="CA 12743 LLAGA AVE SAN MARTIN CA 95046";delivery_by_ports=530; port = "Калифорния"; break;
        case "9":place="CA 43927 90TH STREET LANCASTER CA 93535";delivery_by_ports=480; port = "Калифорния"; break;
        case "10":place="CA 792 CODONI AVE MODESTO CA 95357";delivery_by_ports=580; port = "Калифорния"; break;
        case "11":place="CA 8650 ANTELOPE NORTH ROAD ANTELOPE CA 95843";delivery_by_ports=600; port = "Калифорния"; break;
        case "12":place="CA 8780 FRUITRIDGE ROAD SACRAMENTO CA 95826";delivery_by_ports=595; port = "Калифорния"; break;
        case "13":place="CA 918 MISSION ROCK ROAD B-1 SANTA PAULA CA 93060";delivery_by_ports=390; port = "Калифорния"; break;
        case "14":place="CA COPART SAN JOSE SUBLOT 2542 MONTEREY RD.GATE D SAN JOSE CA 95111";delivery_by_ports=580; port = "Калифорния"; break;
        case "15":place="CA COPART VALLEJO SUBLOT 2744 GREEN ISLAND ROAD AMERICAN CANYON CA 94503";delivery_by_ports=600; port = "Калифорния"; break;
        case "16":place="CA LA MEDIA SUBLOT 1369 RADAR RD SAN DIEGO CA 92154";delivery_by_ports=455; port = "Калифорния"; break;
        case "17":place="CA OTAY SUBLOT 7277 OTAY MESA RD.SAN DIEGO CA 92154";delivery_by_ports=455; port = "Калифорния"; break;
        case "18":place="CA PERRIS SUBLOT 4332 N WEBSTER AVE PERRIS CA 92571";delivery_by_ports=390; port = "Калифорния"; break;
        case "19":place="CO 1031 S.ROYER STREET COLORADO SPRINGS CO 80903";delivery_by_ports=880; port = "Техас"; break;
        case "20":place="CO 1528 10 RD MACK CO 81525";delivery_by_ports=820; port = "Техас"; break;
        case "21":place="CO 247 WOOTEN ROAD COLORADO SPRINGS CO 80916";delivery_by_ports=730; port = "Техас"; break;
        case "22":place="CO 560 AIR LN COLORADO SPRINGS CO 80929";delivery_by_ports=710; port = "Техас"; break;
        case "23":place="CO JB MECHANICAL 4205 W.13TH ST PUEBLO CO 81005";delivery_by_ports=810; port = "Калифорния"; break;
        case "24":place="CO NUNN SUBLOT 925 LONE TREE CIRCLE NUNN CO 80648";delivery_by_ports=780; port = "Техас"; break;
        case "25":place="CT 525 CHRISTIAN LANE BERLIN CT 06037";delivery_by_ports=390; port = "Нью Джерси"; break;
        case "26":place="CT HARTFORD SOUTH 525 CHRISTIAN LANE NEW BRITAIN CT 06051";delivery_by_ports=410; port = "Нью Джерси"; break;
        case "27":place="CT NORTH SUBLOT 625 CHRISTIAN LANE NEW BRITAIN CT 06051";delivery_by_ports=410; port = "Нью Джерси"; break;
        case "28":place="FL 1 SPEEDWAY BLVD HOMESTEAD FL 33035";delivery_by_ports=280; port = "Флориды"; break;
        case "29":place="FL 12511 U.S. 301 THONOTOSASSA FL 33592";delivery_by_ports=530; port = "Флориды"; break;
        case "30":place="FL 12850 NW 27TH AVE.OPA LOCKA FL 33054";delivery_by_ports=380; port = "Флориды"; break;
        case "31":place="FL 300 SETZER RD JACKSONVILLE FL 32218";delivery_by_ports=430; port = "Джорджия"; break;
        case "32":place="FL 307 E LANDSTREET RD 32824";delivery_by_ports=355; port = "Флориды"; break;
        case "33":place="FL 3800 NW 16TH BOULEVARD OKEECHOBEE FL 34972";delivery_by_ports=530; port = "Флориды"; break;
        case "34":place="FL 4545 COUNTY RD 835 CLEWISTON FL 33440";delivery_by_ports=530; port = "Флориды"; break;
        case "35":place="FL COPART - DOVER SUBLOT 15237 DR. MLK JR BLVD DOVER FL 33527";delivery_by_ports=495; port = "Флориды"; break;
        case "36":place="FL MULBERRY SUBLOT 4201 BONNIE MINE RD MULBERRY FL 33860";delivery_by_ports=490; port = "Флориды"; break;
        case "37":place="FL YARD 137 PUNTA GORDA 5017 DUNCAN ROAD PUNTA GORDA FL 33982";delivery_by_ports=530; port = "Флориды"; break;
        case "38":place="GA 401 EAST VERTIA STREET METTER GA 30439";delivery_by_ports=370; port = "Джорджия"; break;
        case "39":place="GA 500 LYLE FIELD ROAD JEFFERSON GA 30549";delivery_by_ports=480; port = "Джорджия"; break;
        case "40":place="GA 6737 ROOSEVELT HWY FAIRBURN GA 30213";delivery_by_ports=600; port = "Джорджия"; break;
        case "41":place="GA AUTO FORUM GROUP 5403 HWY 138 STE A OXFORD GA 30054";delivery_by_ports=490; port = "Джорджия"; break;
        case "42":place="GA DELTA CIRCLE 7290 DELTA CIRCLE AUSTELL GA 30168";delivery_by_ports=500; port = "Джорджия"; break;
        case "43":place="IA 169 DAVENPORT SUBLOT 200 E 1ST ST DAVENPORT IA 52806";delivery_by_ports=730; port = "Нью Джерси"; break;
        case "44":place="IA DAVENPORT SUBLOT 3601 SOUTH 1ST STREET ELDRIDGE IA 52748";delivery_by_ports=730; port = "Нью Джерси"; break;
        case "45":place="IA METRO 4300 DELAWARE AVENUE DES MOINES IA 50313";delivery_by_ports=750; port = "Нью Джерси"; break;
        case "46":place="IL 31W 120 W BARTLETT RD BARTLETT IL 60103";delivery_by_ports=660; port = "Нью Джерси"; break;
        case "47":place="IL 99 RACEHORSE DRIVE EAST ST LOUIS IL 62205";delivery_by_ports=690; port = "Нью Джерси"; break;
        case "48":place="IL 99 RACEHORSE DRIVE ALORTON ILLINOIS 62207";delivery_by_ports=700; port = "Нью Джерси"; break;
        case "49":place="IL VEH LOC @ WOODMAR SUBLOT HEIGHTS SUBLOT 1301 S STATE ST CHICAGO HEIGHTS IL 604011";delivery_by_ports=645; port = "Нью Джерси"; break;
        case "50":place="IN 1535 E.226TH ST CICERO IN 46034";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "51":place="KS KANSAS CITY SUBLOT A 6130 KANSAS AVE KANSAS CITY KS 66111";delivery_by_ports=705; port = "Техас"; break;
        case "52":place="KY EARLINGTON SUBLOT 700 N SANDCUT ROAD EARLINGTON KY 42410";delivery_by_ports=680; port = "Джорджия"; break;
        case "53":place="KY GREENVILLE SUBLOT 5770 US HWY 62 W GREENVILLE KY 42345";delivery_by_ports=680; port = "Джорджия"; break;
        case "54":place="KY LAWRENCEBURG SUBLOT 1051 INDUSTRIAL RD LAWRENCEBURG KY 40342";delivery_by_ports=680; port = "Джорджия"; break;
        case "55":place="KY OUTER LOOP SUBLOT 1049 OUTER LOOP LOUISVILLE KY 40219";delivery_by_ports=880; port = "Нью Джерси"; break;
        case "56":place="LA 48205 HIGHWAY 51 TICKFAW LA 70466";delivery_by_ports=570; port = "Техас"; break;
        case "57":place="MA BEST BUY AUTO 131 WASHINGTON ST ATTLEBORO MA 02703";delivery_by_ports=475; port = "Нью Джерси"; break;
        case "58":place="MA COPART-053B 566 MAIN STREET HUDSON MA 01749";delivery_by_ports=485; port = "Нью Джерси"; break;
        case "59":place="MA COPART - ROWLEY 164 BOXFORD ROAD ROWLEY MA 01969";delivery_by_ports=500; port = "Нью Джерси"; break;
        case "60":place="MA-NORTH BOSTON 55R HIGH STREET BILLERICA MA 01862";delivery_by_ports=430; port = "Нью Джерси"; break;
        case "61":place="MD 11715 PULASKI HWY WHITE MARSH MD 21162";delivery_by_ports=440; port = "Нью Джерси"; break;
        case "62":place="MD 601 W PATAPSCO AVE BALTIMORE MD 21225";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "63":place="MD FRUITLAND SUBLOT 626 S FRUITLAND BLVD FRUITLAND MD 21826";delivery_by_ports=485; port = "Нью Джерси"; break;
        case "64":place="ME 40 HOLMES ROAD SCARBOROUGH ME 04074";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "65":place="ME 486 MAIN ROAD ORONO ME 04473";delivery_by_ports=730; port = "Нью Джерси"; break;
        case "66":place="ME 53 WEST GRAY RD GRAY ME 04039";delivery_by_ports=580; port = "Нью Джерси"; break;
        case "67":place="MI WAYLAND MI 49348";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "68":place="MN 10588 CENTRAL AVE NE BLAINE MINNESOTA 55434";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "69":place="MN 15932 JARVIS ST NE ELK RIVER MN 55330";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "70":place="MN 20798 US HIGHWAY 10 BIG LAKE MN 55309";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "71":place="MN 2975 PARTRIDGE RD ROSEVILLE MN 55113";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "72":place="MN 329 BUNKER LAKE BLVD HAM LAKE MN 55304";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "73":place="MN COPART FRIDLEY SUBLOT 3737 EAST RIVER ROAD FRIDLEY MN 55421";delivery_by_ports=780; port = "Нью Джерси"; break;
        case "74":place="MO 1619 S GOLDEN AVE SPRINGFIELD MO 65807";delivery_by_ports=730; port = "Джорджия"; break;
        case "75":place="MO 1795 DUNN ROAD SAINT LOUIS MO 63138";delivery_by_ports=730; port = "Джорджия"; break;
        case "76":place="MO COPART BRIDGETON SUBLOT 3873 TAUSSIG AVENUE BRIDGETON MO 63044";delivery_by_ports=730; port = "Джорджия"; break;
        case "77":place="NC 2668 HIGHWAY 601 SOUTH MOCKSVILLE NC 27028";delivery_by_ports=580; port = "Джорджия"; break;
        case "78":place="NC 4019 NC HWY 72 W LUMBERTON NC 28360";delivery_by_ports=480; port = "Джорджия"; break;
        case "79":place="NC 7940 US HWY 601 S CONCORD NC 28025";delivery_by_ports=580; port = "Джорджия"; break;
        case "80":place="NC MEBANE SUBLOT 1941 US 70 MEBANE NC 27302";delivery_by_ports=540; port = "Джорджия"; break;
        case "81":place="NC WINSTON-SALEM SUBLOT 6775 REYNOLDA RD PFAFFTOWN NC 27040";delivery_by_ports=530; port = "Джорджия"; break;
        case "82":place="NC YARD 54 310 COPART RD DUNN NC 28334";delivery_by_ports=530; port = "Джорджия"; break;
        case "83":place="ND 1871 REVERE DRIVE BISMARCK ND 58501";delivery_by_ports=1580; port = "Нью Джерси"; break;
        case "84":place="NJ 154 TENNENT RD 7 DAYS FREE STO MORGANVILLE NJ 07751";delivery_by_ports=290; port = "Нью Джерси"; break;
        case "85":place="NJ 253 HWY 34 MATAWAN NJ 07747";delivery_by_ports=265; port = "Нью Джерси"; break;
        case "86":place="NJ 45 VICTORY PLAZA SOUTH AMBOY NJ 08879";delivery_by_ports=290; port = "Нью Джерси"; break;
        case "87":place="NJ COPART JOBSTOWN SUBLOT 304 NJ ROUTE 68 JOBSTOWN NJ 08041";delivery_by_ports=310; port = "Нью Джерси"; break;
        case "88":place="NJ WILLIAMSTOWN SUBLOT 3398 SOUTH BLACK HORSE PIKE WILLIAMSTOWN NJ 08094";delivery_by_ports=355; port = "Нью Джерси"; break;
        case "89":place="NJ Yard 69 GLASSBORO 781 JACOB HARRIS AVENUE GLASSBORO NJ 08028";delivery_by_ports=355; port = "Нью Джерси"; break;
        case "90":place="NV CHUCK LENZIE COURT ARROLIME NV 89165";delivery_by_ports=580; port = "Калифорния"; break;
        case "91":place="NV COPART CLAYTON SUBLOT 3441 N.CLAYTON ST.NORTH LAS VEGAS NV 89032";delivery_by_ports=540; port = "Калифорния"; break;
        case "92":place="NY 128 CENTRAL AVENUE BROCTON NY 14716";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "93":place="NY 2731 TOWN LINE ROAD ALDEN NY 14004";delivery_by_ports=590; port = "Нью Джерси"; break;
        case "94":place="NY 580 LATIN TOWN ROAD MARLBORO NY 12542";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "95":place="NY ALPHA AUTO 115 PORT WASTSON ST CORTLAND NY 13045";delivery_by_ports=485; port = "Нью Джерси"; break;
        case "96":place="NY AMSTERDAM SUBLOT 5915 NY-30 AMSTERDAM NY 12010";delivery_by_ports=470; port = "Нью Джерси"; break;
        case "97":place="NY COPART NEWBURGH SUBLOT 18 ROUTE 17K NEWBURGH NY 12550";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "98":place="NY LATTINTOWN SUBLOT 574 LATTINTOWN ROAD MARLBORO NY 12542";delivery_by_ports=410; port = "Нью Джерси"; break;
        case "99":place="NY S.I. SUBLOT 211 JOHNSON ST STATEN ISLAND 10309";delivery_by_ports=380; port = "Нью Джерси"; break;
        case "100":place="NY YOUNGS SUBLOT 1871 RT 9W MILTON NY 12547";delivery_by_ports=360; port = "Нью Джерси"; break;
        case "101":place="OK 5329 S MADERA BLVD OKLAHOMA CITY OK 73129";delivery_by_ports=745; port = "Техас"; break;
        case "102":place="OK LINDA WOOLDRIDGE 2829 SE 15TH OKLAHOMA CITY OK 73129";delivery_by_ports=745; port = "Техас"; break;
        case "103":place="PA 77 BRISTOL RD CHALFONT PA 18914";delivery_by_ports=350; port = "Нью Джерси"; break;
        case "104":place="PA 795 SIPE ROAD YORK HAVEN PA 17370";delivery_by_ports=455; port = "Нью Джерси"; break;
        case "105":place="PA 83 EAST LANCASTER AVENUE MALVERN PA 19355";delivery_by_ports=430; port = "Нью Джерси"; break;
        case "106":place="PA GRANTVILLE PA 17028";delivery_by_ports=480; port = "Нью Джерси"; break;
        case "107":place="PA WEST MIFFLIN PA 15122";delivery_by_ports=530; port = "Нью Джерси"; break;
        case "108":place="PA YARD 026 2704 GERYVILLE PIKE PENNSBURG PA 18073";delivery_by_ports=350; port = "Нью Джерси"; break;
        case "109":place="SC 120 PINE PLAIN RD GASTON SC 29053";delivery_by_ports=580; port = "Джорджия"; break;
        case "110":place="SC 1921 NAZARETH CHURCH RD SPARTANBURG SC 29301";delivery_by_ports=580; port = "Джорджия"; break;
        case "111":place="SC 700 SOUTH BOUND ROAD GASTON SC 29053";delivery_by_ports=580; port = "Джорджия"; break;
        case "112":place="SC COPART GREER SUBLOT 2465 HIGHWAY 101 SOUTH GREER SC 29651";delivery_by_ports=510; port = "Джорджия"; break;
        case "113":place="SC SHA LIU 120 PINE PLAIN GASTON SC 29053";delivery_by_ports=580; port = "Джорджия"; break;
        case "114":place="SD ALAN'S AUTO RECYCLING 1800 SEGER DRIVE RAPID CITY SD 57701";delivery_by_ports=1330; port = "Нью Джерси"; break;
        case "115":place="TX 14603 SPEEDWAY PARK VON ORMY TX 78073";delivery_by_ports=535; port = "Техас"; break;
        case "116":place="TX 1701 E BELT LINE RD WILMER TX 75172";delivery_by_ports=395; port = "Техас"; break;
        case "117":place="TX 17529 HWY 6 COLLEGE STATION TX 77845";delivery_by_ports=445; port = "Техас"; break;
        case "118":place="TX 2525 FM 565 BAYTOWN TX 77523";delivery_by_ports=380; port = "Техас"; break;
        case "119":place="TX 351 VALLEY CHILI ROAD ANTHONY TX 79821";delivery_by_ports=580; port = "Техас"; break;
        case "120":place="TX 7201 N GENERAL BRUCE DR TEMPLE TEXAS 76501";delivery_by_ports=505; port = "Техас"; break;
        case "121":place="TX 950 BLUE MOUND RD WEST HASLET TX 76052";delivery_by_ports=560; port = "Техас"; break;
        case "122":place="TX CHANNELVIEW 400 S SHELDON ROAD CHANNELVIEW TX 77530";delivery_by_ports=330; port = "Техас"; break;
        case "123":place="TX DALTON OFFSITE 1000 DALTON LN AUSTIN TX 78742";delivery_by_ports=510; port = "Техас"; break;
        case "124":place="TX HARBORSIDE SUBLOT 5800 HARBORSIDE DR GALVESTON TX 77554";delivery_by_ports=350; port = "Техас"; break;
        case "125":place="TX TAYLOR TX 76574";delivery_by_ports=430; port = "Техас"; break;
        case "126":place="UT 170 W.CENTER STREET NORTH SALT LAKE UT 84054";delivery_by_ports=680; port = "Калифорния"; break;
        case "127":place="UT 3586 NORTH 2000 WEST FARR WEST UT 84404";delivery_by_ports=685; port = "Калифорния"; break;
        case "128":place="UT MAGNA SUBLOT 7370 W 2100 S MAGNA UT 84044";delivery_by_ports=680; port = "Калифорния"; break;
        case "129":place="UT YD 388 TOOELE SUBLOT 301 INDUSTRIAL LOOP ROAD TOOELE UT 84074";delivery_by_ports=730; port = "Калифорния"; break;
        case "130":place="VA COPART YARD 194 4717 MASSAPONAX CHURCH ROAD FREDERICKSBURG VA 22408";delivery_by_ports=505; port = "Нью Джерси"; break;
        case "131":place="VT 2743 VT-22A FAIR HAVEN VT 05743";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "132":place="VT 32 STAGE COACH ROAD ORLEANS VT 05860";delivery_by_ports=630; port = "Нью Джерси"; break;
        case "133":place="WA 18515 PACIFIC AVE S SPANAWAY WA 98387";delivery_by_ports=1580; port = "Калифорния"; break;
        case "134":place="WI 1242 W LINCOLN AVE WAUKESHA WI 53186";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "135":place="WI 4825 SOUTH WHITNALL AVENUE CUDAHY WI 53110";delivery_by_ports=830; port = "Нью Джерси"; break;
        case "136":place="WI 7213 HWY 41 CALEDONIA WI 53108";delivery_by_ports=670; port = "Нью Джерси"; break;
        case "137":place="WI YARD 339 SUBLOT 9201 N 107TH ST MILWAUKEE WI 53224";delivery_by_ports=680; port = "Нью Джерси"; break;
        case "138":place="WI YORKVILLE SUBLOT 2118 N SYLVANIA AVE STURTEVANT WI 53177";delivery_by_ports=670; port = "Нью Джерси"; break;
    }
    document.getElementById('port_deliver').innerHTML = port;
    return delivery_by_ports, port;
}
    
function calculate_delivery_to_moscow(price_car, port, type_cars, type_of_engine){
    delivery_to_moscow=0;
    if (port=="Джорджия"){
        switch(type_cars){
        case "1": delivery_to_moscow=3300;break;
        case "5": delivery_to_moscow=3300+100;break;
        case "2": delivery_to_moscow=3300+200;break;
        case "3": delivery_to_moscow=1250;break;
        case "4": delivery_to_moscow=1100;break;
        case "7": delivery_to_moscow=3300+1300;break;
        case "6": delivery_to_moscow=3300+1300;break;
        case "8": delivery_to_moscow=1450;break;
        case "9": delivery_to_moscow=3350;break;  
        };     
    }
    if (port=="Калифорния"){
        switch(type_cars){
        case "1": delivery_to_moscow=3900;break;
        case "5": delivery_to_moscow=3900+150;break;
        case "2": delivery_to_moscow=3900+200;break; 
        case "7": delivery_to_moscow=3900+2100;break; 
        case "3": delivery_to_moscow=1500;break;  
        case "4": delivery_to_moscow=1300;break;
        case "8": delivery_to_moscow=1700;break; 
        case "6": delivery_to_moscow=3900+2100;break;
        case "9": delivery_to_moscow=3600;break; 
        };
    }
    if (port=="Нью Джерси"){
        switch(type_cars){
        case "1": delivery_to_moscow=3200;break;
        case "5": delivery_to_moscow=3200+100;break;
        case "2": delivery_to_moscow=3200+200;break; 
        case "3": delivery_to_moscow=1250;break;
        case "4": delivery_to_moscow=1100;break;
        case "8": delivery_to_moscow=1450;break; 
        case "7": delivery_to_moscow=3200+1300;break;
        case "6": delivery_to_moscow=3200+1300;break;
        case "9": delivery_to_moscow=3350;break; 
        };  
    }
    if (port=="Техас"){
        switch(type_cars){
        case "1": delivery_to_moscow=3500;break;
        case "5": delivery_to_moscow=3500+100;break;
        case "2": delivery_to_moscow=3500+200;break; 
        case "3": delivery_to_moscow=1300;break;
        case "4": delivery_to_moscow=1200;break;
        case "8": delivery_to_moscow=1500;break;   
        case "7": delivery_to_moscow=3500+1500;break;
        case "6": delivery_to_moscow=3500+1500;break; 
        case "9": delivery_to_moscow=3350;break; 
        };
    }
    if (port=="Флорида"){
        switch(type_cars){
        case "1": delivery_to_moscow=3400;break;
        case "5": delivery_to_moscow=3400+100;break;
        case "2": delivery_to_moscow=3400+200;break;
        case "3": delivery_to_moscow=1250;break;
        case "4": delivery_to_moscow=1100;break;  
        case "8": delivery_to_moscow=1450;break; 
        case "7": delivery_to_moscow=3400+1400;break;
        case "6": delivery_to_moscow=3400+1400;break;
        case "9": delivery_to_moscow=3350;break; 
        }; 
    }
    
    if (type_of_engine == 2) delivery_to_moscow=delivery_to_moscow+150;

    if (price_car>70000) delivery_to_moscow = delivery_to_moscow*2;
    
    
    document.getElementById('delivery_to_moscow').innerHTML = delivery_to_moscow + ' $';
    return delivery_to_moscow;
}

function manheim_sbor(auk_sbor_value){
    aukcion_sbor =0;
    if(auk_sbor_value == null || auk_sbor_value == undefined || auk_sbor_value == '' ) {
        auk_sbor_value = 0;
    } else{
    auk_sbor_value = parseInt(auk_sbor_value);
    aukcion_sbor = auk_sbor_value;
    }
    export_documents = 850;
    document.getElementById('exp').innerHTML = export_documents + ' $';
    document.getElementById('aukcion_sbor').innerHTML = aukcion_sbor + ' $';
    return aukcion_sbor;
}

function Copart_sbor(price_car, type_cars){
    aukcion_sbor =0;
    if(price_car >= 1 && price_car < 100) podschet_online=0;
    if(price_car >= 100 && price_car < 500) podschet_online=49;
    if(price_car >= 500 && price_car < 1000) podschet_online=59;
    if(price_car >= 1000 && price_car < 1500) podschet_online=79;
    if(price_car >= 1500 && price_car < 2000) podschet_online=89;
    if(price_car >= 2000 && price_car < 4000) podschet_online=99;
    if(price_car >= 4000 && price_car < 6000) podschet_online=109;
    if(price_car >= 6000 && price_car < 8000) podschet_online=139;
    if(price_car >= 8000) podschet_online=149;

    if (type_cars == 1 || type_cars == 5 || type_cars == 2 || type_cars == 6 || type_cars == 7){
        if(price_car >= 1 && price_car < 50) safety_pay=1;
        if(price_car >= 50 && price_car < 100) safety_pay=1;
        if(price_car >= 100 && price_car < 200) safety_pay=25;
        if(price_car >= 200 && price_car < 300) safety_pay=60;
        if(price_car >= 300 && price_car < 350) safety_pay=80;
        if(price_car >= 350 && price_car < 400) safety_pay=90;
        if(price_car >= 400 && price_car < 450) safety_pay=120;
        if(price_car >= 450 && price_car < 500) safety_pay=130;
        if(price_car >= 500 && price_car < 550) safety_pay=140;
        if(price_car >= 550 && price_car < 600) safety_pay=150;
        if(price_car >= 600 && price_car < 700) safety_pay=165;
        if(price_car >= 700 && price_car < 800) safety_pay=185;
        if(price_car >= 800 && price_car < 900) safety_pay=200;
        if(price_car >= 900 && price_car < 1000) safety_pay=215;
        if(price_car >= 1000 && price_car < 1200) safety_pay=230;  
        if(price_car >= 1200 && price_car < 1300) safety_pay=255;
        if(price_car >= 1300 && price_car < 1400) safety_pay=275;
        if(price_car >= 1400 && price_car < 1500) safety_pay=280;
        if(price_car >= 1500 && price_car < 1600) safety_pay=290;
        if(price_car >= 1600 && price_car < 1700) safety_pay=305;
        if(price_car >= 1700 && price_car < 1800) safety_pay=315;
        if(price_car >= 1800 && price_car < 2000) safety_pay=325;
        if(price_car >= 2000 && price_car < 2400) safety_pay=355;
        if(price_car >= 2400 && price_car < 2500) safety_pay=380;
        if(price_car >= 2500 && price_car < 3000) safety_pay=400;
        if(price_car >= 3000 && price_car < 3500) safety_pay=450;  
        if(price_car >= 3500 && price_car < 4000) safety_pay=500; 
        if(price_car >= 4000 && price_car < 4500) safety_pay=600;
        if(price_car >= 4500 && price_car < 5000) safety_pay=625;
        if(price_car >= 5000 && price_car < 6000) safety_pay=650;
        if(price_car >= 6000 && price_car < 6500) safety_pay=675;
        if(price_car >= 6500 && price_car < 7000) safety_pay=675;
        if(price_car >= 7000 && price_car < 7500) safety_pay=700;
        if(price_car >= 7500 && price_car < 8000) safety_pay=700;
        if(price_car >= 8000 && price_car < 8500) safety_pay=725;
        if(price_car >= 8500 && price_car < 9000) safety_pay=725;
        if(price_car >= 9000 && price_car < 10000) safety_pay=725;
        if(price_car >= 10000 && price_car < 10500) safety_pay=750;
        if(price_car >= 10500 && price_car < 11000) safety_pay=750;
        if(price_car >= 11000 && price_car < 11500) safety_pay=750;   
        if(price_car >= 11500 && price_car < 12000) safety_pay=760;
        if(price_car >= 12000 && price_car < 12500) safety_pay=775;
        if(price_car >= 12500 && price_car < 15000) safety_pay=790;
        if(price_car >= 15000) safety_pay=6*price_car/100;

        aukcion_sbor = safety_pay + podschet_online + 109;
    }
    else{
        if(price_car >= 1 && price_car < 50) safety_pay=30;
        if(price_car >= 50 && price_car < 100) safety_pay=45;
        if(price_car >= 100 && price_car < 200) safety_pay=70;
        if(price_car >= 200 && price_car < 300) safety_pay=100;
        if(price_car >= 300 && price_car < 400) safety_pay=120;
        if(price_car >= 400 && price_car < 500) safety_pay=140;
        if(price_car >= 500 && price_car < 600) safety_pay=160;
        if(price_car >= 600 && price_car < 700) safety_pay=180;
        if(price_car >= 700 && price_car < 800) safety_pay=210;
        if(price_car >= 800 && price_car < 900) safety_pay=230;
        if(price_car >= 900 && price_car < 1000) safety_pay=250;
        if(price_car >= 1000 && price_car < 1200) safety_pay=275;
        if(price_car >= 1200 && price_car < 1400) safety_pay=310;
        if(price_car >= 1400 && price_car < 1600) safety_pay=330;
        if(price_car >= 1600 && price_car < 1800) safety_pay=360;  
        if(price_car >= 1800 && price_car < 2000) safety_pay=400;
        if(price_car >= 2000 && price_car < 2500) safety_pay=440;
        if(price_car >= 2500 && price_car < 3000) safety_pay=480;
        if(price_car >= 3000 && price_car < 4500) safety_pay=575;
        if(price_car >= 4500 && price_car < 5000) safety_pay=600;
        if(price_car >= 5000 && price_car < 7500) safety_pay=675;
        if(price_car >= 7500 && price_car < 8000) safety_pay=775;
        if(price_car >= 8000 && price_car < 9000) safety_pay=875;
        if(price_car >= 9000 && price_car < 10000) safety_pay=975;
        if(price_car >= 10000) safety_pay=10*price_car/100;

        aukcion_sbor = safety_pay + podschet_online + 79;
    }
    document.getElementById('aukcion_sbor').innerHTML = aukcion_sbor + ' $';
    return aukcion_sbor;
}

function AA_sbor(price_car){
    aukcion_sbor =0;
    if (type_cars == 1 || type_cars == 5 || type_cars == 2 || type_cars == 6 || type_cars == 7){
        
        if(price_car >= 1 && price_car < 100) podschet_online=0;
        if(price_car >= 100 && price_car < 500) podschet_online=49;
        if(price_car >= 500 && price_car < 1000) podschet_online=59;
        if(price_car >= 1000 && price_car < 1500) podschet_online=79;
        if(price_car >= 1500 && price_car < 2000) podschet_online=89;
        if(price_car >= 2000 && price_car < 4000) podschet_online=99;
        if(price_car >= 4000 && price_car < 6000) podschet_online=109;
        if(price_car >= 6000 && price_car < 8000) podschet_online=139;
        if(price_car >= 8000) podschet_online=149;
        
        if(price_car >= 1 && price_car < 100) safety_pay=1;
        if(price_car >= 100 && price_car < 200) safety_pay=25;
        if(price_car >= 200 && price_car < 300) safety_pay=60;
        if(price_car >= 300 && price_car < 350) safety_pay=80;
        if(price_car >= 350 && price_car < 400) safety_pay=90;
        if(price_car >= 400 && price_car < 450) safety_pay=120;
        if(price_car >= 450 && price_car < 500) safety_pay=130;
        if(price_car >= 500 && price_car < 550) safety_pay=140;
        if(price_car >= 550 && price_car < 600) safety_pay=150;
        if(price_car >= 600 && price_car < 700) safety_pay=165;
        if(price_car >= 700 && price_car < 800) safety_pay=185;
        if(price_car >= 800 && price_car < 900) safety_pay=200;
        if(price_car >= 900 && price_car < 1000) safety_pay=215;
        if(price_car >= 1000 && price_car < 1200) safety_pay=230;
        if(price_car >= 1200 && price_car < 1300) safety_pay=255;
        if(price_car >= 1300 && price_car < 1400) safety_pay=275;
        if(price_car >= 1400 && price_car < 1500) safety_pay=280;
        if(price_car >= 1500 && price_car < 1600) safety_pay=290;
        if(price_car >= 1600 && price_car < 1700) safety_pay=305;
        if(price_car >= 1700 && price_car < 1800) safety_pay=315;
        if(price_car >= 1800 && price_car < 2000) safety_pay=325;
        if(price_car >= 2000 && price_car < 2400) safety_pay=355;
        if(price_car >= 2400 && price_car < 2500) safety_pay=380;
        if(price_car >= 2500 && price_car < 3000) safety_pay=400;
        if(price_car >= 3000 && price_car < 3500) safety_pay=450;
        if(price_car >= 3500 && price_car < 4000) safety_pay=500;
        if(price_car >= 4000 && price_car < 4500) safety_pay=600;
        if(price_car >= 4500 && price_car < 5000) safety_pay=625;
        if(price_car >= 5000 && price_car < 6000) safety_pay=650;
        if(price_car >= 6000 && price_car < 7000) safety_pay=675;
        if(price_car >= 7000 && price_car < 8000) safety_pay=700;
        if(price_car >= 8000 && price_car < 10000) safety_pay=725;
        if(price_car >= 10000 && price_car < 11500) safety_pay=750;
        if(price_car >= 11500 && price_car < 12000) safety_pay=760;
        if(price_car >= 12000 && price_car < 12500) safety_pay=775;
        if(price_car >= 12500 && price_car < 15000) safety_pay=790;
        if(price_car >= 15000) safety_pay=6*price_car/100;

        aukcion_sbor = safety_pay + podschet_online + 139 + 16;
    }
    else{
        if(price_car >= 1 && price_car < 100) podschet_online=0;
        if(price_car >= 100 && price_car < 500) podschet_online=39;
        if(price_car >= 500 && price_car < 1000) podschet_online=49;
        if(price_car >= 1000 && price_car < 1500) podschet_online=69;
        if(price_car >= 1500 && price_car < 2000) podschet_online=79;
        if(price_car >= 2000 && price_car < 4000) podschet_online=89;
        if(price_car >= 4000 && price_car < 6000) podschet_online=99;
        if(price_car >= 6000 && price_car < 8000) podschet_online=119;
        if(price_car >= 8000) podschet_online=129;

        if(price_car >= 1 && price_car < 50) safety_pay=30;
        if(price_car >= 50 && price_car < 100) safety_pay=45;
        if(price_car >= 100 && price_car < 200) safety_pay=70;
        if(price_car >= 200 && price_car < 300) safety_pay=100;
        if(price_car >= 300 && price_car < 400) safety_pay=120;
        if(price_car >= 400 && price_car < 500) safety_pay=150;
        if(price_car >= 500 && price_car < 600) safety_pay=170;
        if(price_car >= 600 && price_car < 700) safety_pay=195;
        if(price_car >= 700 && price_car < 800) safety_pay=225;
        if(price_car >= 800 && price_car < 900) safety_pay=245;
        if(price_car >= 900 && price_car < 1000) safety_pay=265;
        if(price_car >= 1000 && price_car < 1200) safety_pay=290;
        if(price_car >= 1200 && price_car < 1400) safety_pay=325;
        if(price_car >= 1400 && price_car < 1600) safety_pay=350;
        if(price_car >= 1600 && price_car < 1800) safety_pay=375;
        if(price_car >= 1800 && price_car < 2000) safety_pay=425;
        if(price_car >= 2000 && price_car < 2200) safety_pay=450;
        if(price_car >= 2200 && price_car < 2500) safety_pay=475;
        if(price_car >= 2500 && price_car < 3000) safety_pay=500;
        if(price_car >= 3000 && price_car < 3500) safety_pay=575;
        if(price_car >= 3500 && price_car < 4000) safety_pay=600;
        if(price_car >= 4000 && price_car < 5000) safety_pay=650;
        if(price_car >= 5000 && price_car < 6000) safety_pay=700;
        if(price_car >= 6000 && price_car < 7000) safety_pay=750;
        if(price_car >= 7000 && price_car < 8000) safety_pay=825;
        if(price_car >= 8000 && price_car < 9000) safety_pay=900;
        if(price_car >= 9000 && price_car < 10000) safety_pay=975;
        if(price_car >= 15000) safety_pay=10.5*price_car/100;

        aukcion_sbor = safety_pay + podschet_online +139 + 16;
    }
    document.getElementById('aukcion_sbor').innerHTML = aukcion_sbor + ' $';
    return aukcion_sbor;
}

let sum = 0;

function tamognya_moskva(age_of_the_car, price_car, eur_in_dollar, engine_capacity, aukcion_sbor, type_cars, type_of_engine){
    tamognya = 0;
    sum = price_car + aukcion_sbor;
    akciz=0;
    
    if (type_cars!=6 && type_cars!=4 && type_cars!=3 && type_cars!=8 && type_of_engine!=2){
        if(age_of_the_car == 1){
            if(sum*eur_in_dollar<=8500){
                if (engine_capacity*2.5 < sum*eur_in_dollar*0.54){
                    tamognya = sum*eur_in_dollar*0.54;
                }
                if (engine_capacity*2.5 >= sum*eur_in_dollar*0.54){
                    tamognya = engine_capacity*2.5;
                }   
            }
            if(sum*eur_in_dollar>8500 && sum*eur_in_dollar<=16700){
                if (engine_capacity*3.5 < sum*eur_in_dollar*0.48){
                    tamognya = sum*eur_in_dollar*0.48;
                }
                if (engine_capacity*3.5 >= sum*eur_in_dollar*0.48){
                    tamognya = engine_capacity*3.5;
                }
            }
            if(sum*eur_in_dollar>16700 && sum*eur_in_dollar<=42300){
                if (engine_capacity*5.5 < sum*eur_in_dollar*0.48){
                    tamognya = sum*eur_in_dollar*0.48;
                }
                if (engine_capacity*5.5 >= sum*eur_in_dollar*0.48){
                    tamognya = engine_capacity*5.5;
                }
            }
            if(sum*eur_in_dollar>42300 && sum*eur_in_dollar<=84500){
                if (engine_capacity*7.5 < sum*eur_in_dollar*0.48){
                    tamognya = sum*eur_in_dollar*0.48;
                }
                if (engine_capacity*7.5 >= sum*eur_in_dollar*0.48){
                    tamognya = engine_capacity*7.5;
                }
            }
            if(sum*eur_in_dollar>84500 && sum*eur_in_dollar<=169000){
                if (engine_capacity*15 < sum*eur_in_dollar*0.48){
                    tamognya = sum*eur_in_dollar*0.48;
                }
                if (engine_capacity*15 >= sum*eur_in_dollar*0.48){
                    tamognya = engine_capacity*15;
                }
            }
            if(sum*doll_in_eur>169000){
                if (engine_capacity*20 < sum*eur_in_dollar*0.48){
                    tamognya = sum*eur_in_dollar*0.48;
                }
                if (engine_capacity*20 >= sum*eur_in_dollar*0.48){
                    tamognya = engine_capacity*20;
                }
            }
        }
        if(age_of_the_car == 2){
            if (engine_capacity <= 1000) tamognya=engine_capacity*1.7;
            if (engine_capacity > 1000 && engine_capacity <= 1500) tamognya=engine_capacity*1.7;
            if (engine_capacity > 1500 && engine_capacity <= 1800) tamognya=engine_capacity*2.5;
            if (engine_capacity > 1800 && engine_capacity <= 2300) tamognya=engine_capacity*2.7;
            if (engine_capacity > 2300 && engine_capacity <= 3000) tamognya=engine_capacity*3;
            if (engine_capacity > 3000) tamognya=engine_capacity*3.6;
        }
        
        if(age_of_the_car == 3){
            if (engine_capacity <= 1000) tamognya=engine_capacity*1.7;
            if (engine_capacity > 1000 && engine_capacity <= 1500) tamognya=engine_capacity*3.2;
            if (engine_capacity > 1500 && engine_capacity <= 1800) tamognya=engine_capacity*3.5;
            if (engine_capacity > 1800 && engine_capacity <= 2300) tamognya=engine_capacity*4.8;
            if (engine_capacity > 2300 && engine_capacity <= 3000) tamognya=engine_capacity*5;
            if (engine_capacity > 3000) tamognya=engine_capacity*5.7;
        }
    }
    else
    {
        if (type_cars==3){
            if (age_of_the_car==1){
                tamognya = (price_car + aukcion_sbor)*5/100;
                tamognya = tamognya + ((tamognya + price_car + aukcion_sbor)*20/100);
            }
            else{
                tamognya = (price_car + aukcion_sbor)*20/100;
                tamognya = tamognya + ((tamognya + price_car + aukcion_sbor)*20/100);
            }
        }
        
        // Таможня на РФ
    
        if (type_cars==4){
            if (horse > 150){
                akciz = horse*531/current_valute;
                akciz_block.style.display='flex'; // Отображение поля акциза
            }
            if (moto1==1 && type_of_engine != 2 ){
                tamognya = (price_car + aukcion_sbor)*15/100;
                tamognya = tamognya + ((tamognya + price_car + aukcion_sbor+akciz)*20/100);
                tamognya = tamognya + akziz;
                
            }
            if (moto1==2 && type_of_engine != 2){
                tamognya = (price_car + aukcion_sbor)*10/100;
                tamognya = tamognya + ((tamognya + price_car + aukcion_sbor+akciz)*20/100);
                tamognya = tamognya + akziz;
            }
            if (type_of_engine == 2){
                tamognya = (price_car + aukcion_sbor)*14/100;
                tamognya = tamognya + ((tamognya + price_car + aukcion_sbor+akciz)*20/100);
                tamognya = tamognya + akziz;
            }
            document.getElementById('result_akciz').innerHTML = ~~akciz + ' $';
        }
    
        if (type_cars==8 ){
            tamognya = (price_car + aukcion_sbor)*14/100;
            tamognya = tamognya + ((tamognya + price_car + aukcion_sbor)*20/100);
        }
    }
    return tamognya, sum;
    sum=0;
}
function tamognya_rb(price_car, aukcion_sbor, age_of_the_car, engine_capacity, tamognya, sum, type_cars, type_of_engine){
    //let tam_posh = 0;
    sale=1;
    soprovogdenie=0;
    title_tam_posh.innerHTML='Таможня и пошлина';
    if (type_cars!=6 && type_cars!=4 && type_cars!=3 && type_cars!=8 && type_of_engine!=2){
        if (age_of_the_car == 1 && type_of_engine!=2){ // Возраст от 0 до 3 лет
            if (sum>=5000) {sale=0.5; title_tam_posh.innerHTML='Таможня и пошлина (-50%)';}
            if (engine_capacity<2901){
                if (sum>4999 && sum<10000) soprovogdenie = 1300;
                if (sum>9999 && sum<15000) soprovogdenie = 1400;
                if (sum>14999 && sum<20000) soprovogdenie = 1500;
                if (sum>19999 && sum<25000) soprovogdenie = 1600;
                if (sum>24999 && sum<27000) soprovogdenie = 1700;
                if (sum>26999 && sum<30000) soprovogdenie = 2000;
                if (sum>29999 && sum<35000) soprovogdenie = 2300;
                if (sum>34999 && sum<41000) soprovogdenie = 2500;
                if (sum>40999 && sum<50000) soprovogdenie = 2700;
                if (sum>49999 && sum<60000) soprovogdenie = 3000;
                if (sum>59999 && sum<70000) soprovogdenie = 3500;
                if (sum>69999 && sum<100000) soprovogdenie = 3800;
                if (sum>99999 && sum<110000) soprovogdenie = 4800;
                if (sum>109999 && sum<120000) soprovogdenie = 5000;
                if (sum>119999 && sum<140000) soprovogdenie = 5500;
                if (sum>139999 && sum<190000) soprovogdenie = 6000;
                if (sum>189999 && sum<250000) soprovogdenie = 7500;
                if (sum>249999 && sum<300000) soprovogdenie = 8000;
                if (sum>299999 && sum<350000) soprovogdenie = 9000;
                if (sum>349999 && sum<400000) soprovogdenie = 12000;
                }
            if (engine_capacity>2999){
                if (sum>4999 && sum<10000) soprovogdenie = 1300;
                if (sum>9999 && sum<15000) soprovogdenie = 1400;
                if (sum>14999 && sum<20000) soprovogdenie = 1500;
                if (sum>19999 && sum<25000) soprovogdenie = 2000;
                if (sum>24999 && sum<27000) soprovogdenie = 2200;
                if (sum>26999 && sum<30000) soprovogdenie = 2300;
                if (sum>29999 && sum<35000) soprovogdenie = 2500;
                if (sum>34999 && sum<41000) soprovogdenie = 2800;
                if (sum>40999 && sum<50000) soprovogdenie = 3000;
                if (sum>49999 && sum<60000) soprovogdenie = 3200;
                if (sum>59999 && sum<70000) soprovogdenie = 3800;
                if (sum>69999 && sum<100000) soprovogdenie = 4000;
                if (sum>99999 && sum<110000) soprovogdenie = 5300;
                if (sum>109999 && sum<120000) soprovogdenie = 5500;
                if (sum>119999 && sum<140000) soprovogdenie = 6000;
                if (sum>139999 && sum<190000) soprovogdenie = 6500;
                if (sum>189999 && sum<250000) soprovogdenie = 8000;
                if (sum>249999 && sum<300000) soprovogdenie = 9000;
                if (sum>299999 && sum<350000) soprovogdenie = 10000;
                if (sum>349999 && sum<400000) soprovogdenie = 15000;
                }
            }
        if (age_of_the_car > 1 && type_of_engine!=2){
            if (engine_capacity>=2500 && engine_capacity<2900){
                if (sum<70000) {sale=0.5; title_tam_posh.innerHTML='Таможня и пошлина (-50%)';}
                if (sum>1 && sum<10000) soprovogdenie=1400;
                if (sum>=10000 && sum<20000) soprovogdenie=1600;
                if (sum>=20000 && sum<30000) soprovogdenie=1800;
                if (sum>=30000 && sum<40000) soprovogdenie=1900;
                if (sum>=40000 && sum<50000) soprovogdenie=2000;
                if (sum>=50000 && sum<70000) soprovogdenie=2400;
            }
            if (engine_capacity>=2900 && engine_capacity<3500){
                if (sum<80000) {sale=0.5; title_tam_posh.innerHTML='Таможня и пошлина (-50%)';}
                if (sum>1 && sum<10000) soprovogdenie=1400;
                if (sum>=10000 && sum<20000) soprovogdenie=1600;
                if (sum>=20000 && sum<30000) soprovogdenie=1800;
                if (sum>=30000 && sum<40000) soprovogdenie=1900;
                if (sum>=40000 && sum<50000) soprovogdenie=2000;
                if (sum>=50000 && sum<70000) soprovogdenie=2400;
                if (sum>=70000 && sum<80000) soprovogdenie=2500;
            }
            if (engine_capacity>=3500 && engine_capacity<4000){
                if (sum<80000) {sale=0.5; title_tam_posh.innerHTML='Таможня и пошлина (-50%)';}
                if (sum>1 && sum<10000) soprovogdenie=1400;
                if (sum>=10000 && sum<20000) soprovogdenie=1600;
                if (sum>=20000 && sum<30000) soprovogdenie=2000;
                if (sum>=30000 && sum<40000) soprovogdenie=2300;
                if (sum>=40000 && sum<50000) soprovogdenie=2500;
                if (sum>=50000 && sum<70000) soprovogdenie=2800;
                if (sum>=70000 && sum<80000) soprovogdenie=3000;
            }
            if (engine_capacity>=4000 && engine_capacity<4200){
                if (sum<80000) {sale=0.5; title_tam_posh.innerHTML='Таможня и пошлина (-50%)';}
                if (sum>1 && sum<10000) soprovogdenie=1500;
                if (sum>=10000 && sum<20000) soprovogdenie=1700;
                if (sum>=20000 && sum<30000) soprovogdenie=2100;
                if (sum>=30000 && sum<40000) soprovogdenie=2400;
                if (sum>=40000 && sum<50000) soprovogdenie=2600;
                if (sum>=50000 && sum<70000) soprovogdenie=2900;
                if (sum>=70000 && sum<80000) soprovogdenie=3100;
            }
        
            if (engine_capacity>=4200 && engine_capacity<5000){
                if (sum<150000) {sale=0.5; title_tam_posh.innerHTML='Таможня и пошлина (-50%)';}
                if (sum>1 && sum<10000) soprovogdenie=1500;
                if (sum>=10000 && sum<20000) soprovogdenie=1700;
                if (sum>=20000 && sum<30000) soprovogdenie=2100;
                if (sum>=30000 && sum<40000) soprovogdenie=2400;
                if (sum>=40000 && sum<50000) soprovogdenie=2600;
                if (sum>=50000 && sum<90000) soprovogdenie=2900;
                if (sum>=90000 && sum<150000) soprovogdenie=3100;
            }
        
            if (engine_capacity>=4200 && engine_capacity<5000){
                if (sum<150000) {sale=0.5; title_tam_posh.innerHTML='Таможня и пошлина (-50%)';}
                if (sum>1 && sum<10000) soprovogdenie=1500;
                if (sum>=10000 && sum<20000) soprovogdenie=1700;
                if (sum>=20000 && sum<30000) soprovogdenie=2100;
                if (sum>=30000 && sum<40000) soprovogdenie=2400;
                if (sum>=40000 && sum<50000) soprovogdenie=2600;
                if (sum>=50000 && sum<90000) soprovogdenie=2900;
                if (sum>=90000 && sum<150000) soprovogdenie=3100;
            }
        
            if (engine_capacity>=5000 && engine_capacity<6000){
                if (sum<200000) {sale=0.5; title_tam_posh.innerHTML='Таможня и пошлина (-50%)';}
                if (sum>1 && sum<10000) soprovogdenie=1500;
                if (sum>=10000 && sum<20000) soprovogdenie=1800;
                if (sum>=20000 && sum<30000) soprovogdenie=2400;
                if (sum>=30000 && sum<40000) soprovogdenie=2600;
                if (sum>=40000 && sum<50000) soprovogdenie=2800;
                if (sum>=50000 && sum<90000) soprovogdenie=3100;
                if (sum>=90000 && sum<150000) soprovogdenie=3500;
                if (sum>=150000 && sum<200000) soprovogdenie=4000;
                if (sum>=200000) sale=1;
            }
        
            if (engine_capacity>=6000){
                if (sum<200000) {sale=0.5; title_tam_posh.innerHTML='Таможня и пошлина (-50%)';}
                if (sum>1 && sum<30000) soprovogdenie=2000;
                if (sum>=30000 && sum<50000) soprovogdenie=3000;
                if (sum>=50000 && sum<90000) soprovogdenie=3500;
                if (sum>=90000 && sum<150000) soprovogdenie=4000;
                if (sum>=150000 && sum<200000) soprovogdenie=5000;
                if (sum>=200000) sale=1;
            }
        }
            if (age_of_the_car == 2 && type_of_engine!=2){
                if (engine_capacity>=2000 && engine_capacity<2500){
                    if (sum<50000) {sale=0.5; title_tam_posh.innerHTML='Таможня и пошлина (-50%)';}
                    if (sum>1 && sum<15000) soprovogdenie=1300; 
                    if (sum>=15000 && sum<20000) soprovogdenie=1500;
                    if (sum>=20000 && sum<30000) soprovogdenie=1600;
                    if (sum>=30000 && sum<40000) soprovogdenie=1700;
                    if (sum>=40000 && sum<50000) soprovogdenie=1800;
                }
            }
            if (age_of_the_car == 3 && type_of_engine!=2){
                if (engine_capacity>=1600 && engine_capacity<2500){
                    if (sum<50000) {sale=0.5; title_tam_posh.innerHTML='Таможня и пошлина (-50%)';}
                    if (sum>1 && sum<15000) soprovogdenie=1300; 
                    if (sum>=15000 && sum<20000) soprovogdenie=1500;
                    if (sum>=20000 && sum<30000) soprovogdenie=1600;
                    if (sum>=30000 && sum<40000) soprovogdenie=1700;
                    if (sum>=40000 && sum<50000) soprovogdenie=1800;
                } 
            }
        tam_posh = tamognya*doll_in_eur*sale;
        
        if (type_of_engine==2){
                if (sum<10000) soprovogdenie = 1000;
                if (sum>=10000 && sum<15000) soprovogdenie = 1200;
                if (sum>=15000 && sum<20000) soprovogdenie = 1300;
                if (sum>=20000 && sum<25000) soprovogdenie = 1400;
                if (sum>=25000 && sum<27000) soprovogdenie = 1600;
                if (sum>=27000 && sum<30000) soprovogdenie = 1800;
                if (sum>=30000 && sum<35000) soprovogdenie = 2300;
                if (sum>=35000 && sum<41000) soprovogdenie = 2500;
                if (sum>=41000 && sum<50000) soprovogdenie = 2700;
                if (sum>=50000 && sum<60000) soprovogdenie = 3000;
                if (sum>=60000 && sum<70000) soprovogdenie = 3500;
                if (sum>=70000 && sum<100000) soprovogdenie = 3800;
                if (sum>=100000 && sum<110000) soprovogdenie = 4800;
                if (sum>=110000 && sum<120000) soprovogdenie = 5000;
                if (sum>=120000 && sum<140000) soprovogdenie = 5500;
                if (sum>=140000 && sum<190000) soprovogdenie = 6000;
                if (sum>=190000 && sum<250000) soprovogdenie = 7500;
                if (sum>=250000 && sum<300000) soprovogdenie = 8000;
                if (sum>=300000 && sum<350000) soprovogdenie = 9000;
                if (sum>=350000 && sum<400000) soprovogdenie = 12000;
                tam_posh = sum*0.15;
                if (age_of_the_car == 3) tam_posh = (tam_posh+sum)*0.2+tam_posh;
        }
    } else{
       tam_posh = tamognya;
    }
    document.getElementById('sopr').innerHTML= ~~soprovogdenie + ' $' ;
    document.getElementById('sale_tam').innerHTML = ~~tam_posh + ' $';  
    return tam_posh, soprovogdenie;
}

function all_util_sbor(type_cars, weight_of_auto, age_of_the_car, price_car, engine_capacity, buy_car_auto , sneg1 , current_valute, type_of_engine){
    util_sbor = 0;
    if (type_cars==6){
        if (weight_of_auto == 1){
            if (age_of_the_car == 1){
                if (price_car < 25000) util_sbor=481500 / current_valute;
                if (price_car >= 25000 && price_car<60000) util_sbor=200000/current_valute;
                if (price_car > 60000) util_sbor=200000 / current_valute;
            }else{
                if (price_car <= 30000 ) util_sbor=700500 / current_valute;
                if (price_car > 30000 && price_car<50000) util_sbor=320000 / current_valute;
                if (price_car >= 50000) util_sbor=320000 / current_valute; 
            }
        }
        if (weight_of_auto == 2){
            if (age_of_the_car == 1){
                if (price_car < 32000) util_sbor=504000 / current_valute;
                if (price_car >= 32000 && price_car<60000) util_sbor=260000 / current_valute;
                if (price_car > 60000) util_sbor=260000 / current_valute;
            }else{
                if (price_car <= 40000 ) util_sbor=750000 / current_valute;
                if (price_car > 40000 && price_car<58000) util_sbor=410000 / current_valute;
                if (price_car >= 58000) util_sbor=410000 / current_valute; 
            }
        }
    }
    if (type_cars==8 || type_cars==3){
        if (age_of_the_car == 1){
            if (sneg1==1) util_sbor=69000 / current_valute;
            if (sneg1==2) util_sbor=120750 / current_valute;
        }
        else{
            if (sneg1==1) util_sbor=120750 / current_valute;
            if (sneg1==2) util_sbor=224250 / current_valute;
        }
    }
    if (type_cars==4){
        util_sbor = 0;
    }

    if (type_cars==1 || type_cars==2 || type_cars==5 || type_cars==7){
        if (age_of_the_car==1) util_sbor = 20000 / current_valute;
        if (age_of_the_car==2) util_sbor = 30000 / current_valute;
        if (age_of_the_car==3) util_sbor = 30000 / current_valute;
    }
    
   
    document.getElementById('result_util').innerHTML = ~~util_sbor + ' $';
    return util_sbor;
}

function all_sbktc(type_cars,current_valute){ // СБКТС
    sbktc = 0;
    if (type_cars==8 || type_cars==3) {
        sbktc = 35000 / current_valute;
        document.getElementById('title_sbkts').innerHTML = "ЭПСМ";
    }
    if (type_cars==4){
        sbktc = 44000 / current_valute;
        document.getElementById('title_sbkts').innerHTML = "СБКТС+ЭПТС";
    }  
    if (type_cars==1 || type_cars==2 || type_cars==5 || type_cars==6 || type_cars==7){
        sbktc = 55000 / current_valute;
        document.getElementById('title_sbkts').innerHTML = "СБКТС+ЭПТС"
    }
    document.getElementById('sbkts').innerHTML = ~~sbktc + ' $';
    return sbktc;
}

function all_services(price_car){// Наши услуги
    our_services=0;
    if (price_car <= 60000){
        our_services=100000/current_valute;
    }
    else{
        our_services=150000/current_valute;
    }
    document.getElementById('our_services').innerHTML = ~~our_services + ' $';
    return our_services;
} 

function calculate_all(){
    delivery_by_ports = 0;
    export_documents = 0;
    auk_sbor_value = document.getElementById('auk_sbor_value').value;
    Aukcion = document.getElementById('aukcion').value; // Узнаем выбор аукциона
    type_cars = document.getElementById('type_cars').value; // Узнаем тип техники
    price_car = document.getElementById('price_car').value; // Узнаем цену техники
    buy_car_auto = document.getElementById('buy_auto_select').value; // Узнаем кол-во авто приобретенного за год
    buy_auto = document.getElementById('buy_auto'); 
    price_car = parseInt(price_car);
    type_of_engine = document.getElementById('type_engine').value; // Узнаем тип двигателя
    age_of_the_car = document.getElementById('age_of_the_car').value; // Узнаем возраст авто
    engine_capacity = document.getElementById('engine_capacity').value; // Узнаем объем двигателя
    weight_of_auto = document.getElementById('weight_of_auto').value; // Узнаем вес авто
    horse = document.getElementById('horse').value; // Узнаем кол-во лошадиных сил у МОТО
    horse = parseInt(horse);
    sneg1 = document.getElementById('sneg').value;
    moto1 = document.getElementById('moto').value;
    
    if (Aukcion == 1) delivery_Copart();
    if (Aukcion == 2) delivery_Sublot_Copart();
    if (Aukcion == 3) delivery_AA();
    if (Aukcion == 4) delivery_AA_sublot();
    if (Aukcion == 5) delivery_manheim();
    
    
    if (Aukcion<3) Copart_sbor(price_car,type_cars);
    if (Aukcion==3 || Aukcion==4) AA_sbor(price_car,type_cars); 
    if (Aukcion==5) manheim_sbor(auk_sbor_value);
    

    if (type_cars==1 || type_cars==2 || type_cars==5 || type_cars==7 || type_cars==6){
        sneg.style.display = "none"; // Отображение объема двигателя снегоходы
        moto.style.display="none"; // Отображение объема двигателя мото
        engine_capacity1.style.display="flex"; // Отображение объема двигателя авто
        buy_auto.style.display="flex"; // Отображения поля кол-ва приобретенных авто
        horse1.style.display="none"; //  Отображение кол-во лошадиных сил у МОТО
        akciz_block.style.display='none'; // Отображение поля акциза
    }

    if (type_cars==8 || type_cars==3){
        sneg.style.display = "flex"; // Отображение объема двигателя снегоходы
        moto.style.display="none"; // Отображение объема двигателя мото
        engine_capacity1.style.display="none"; // Отображение объема двигателя авто
        buy_auto.style.display="none"; // Отображения поля кол-ва приобретенных авто
        horse1.style.display="none"; //  Отображение кол-во лошадиных сил у МОТО
        akciz_block.style.display='none'; // Отображение поля акциза

    }
    if (type_cars==4){
        moto.style.display="flex" ; // Отображение чекбоксов
        sneg.style.display = "none"; // Отображение чекбоксов
        engine_capacity1.style.display="none"; // Отображение объема двигателя авто
        buy_auto.style.display="none"; // Отображения поля кол-ва приобретенных авто
        horse1.style.display="flex"; //  Отображение кол-во лошадиных сил у МОТО
    }

    let deklar = 25000 / current_valute; // Услуги декларанта таможни СВХ
    document.getElementById('deklar').innerHTML = ~~deklar + ' $';
    
    if (price_car>70000){
        if (port=='Нью Джерси' || port=='Джорджия') delivery_by_ports= delivery_by_ports + 1300;
        if (port=='Флорида') delivery_by_ports= delivery_by_ports + 1400;
        if (port=='Техас') delivery_by_ports= delivery_by_ports + 1500;
        if (port=='Калифорния') delivery_by_ports= delivery_by_ports + 2100;
    }
    
    if (price_car <= 65000){ 
        delivery_by_ports = type_cars==6 || type_cars==7 ? ((delivery_by_ports+200)*2) : (delivery_by_ports+200);
    } 
    else{
        delivery_by_ports=((delivery_by_ports+200)*2);
    }

    all_sbktc(type_cars,current_valute); // СБКТС
    all_util_sbor(type_cars, weight_of_auto, age_of_the_car, price_car, engine_capacity, buy_car_auto , sneg1 , current_valute, type_of_engine); // Утильсбор
    all_services(price_car); // Наши услуги
    calculate_delivery_to_moscow(price_car, port, type_cars, type_of_engine); // Доставка до Москвы
    
    delivery_health_auto1 = document.getElementById('total').checked ? 300 : 0; // Добавление к стоимости доставки от состояния авто
    delivery_health_auto2 = document.getElementById('pending').checked ? 550 : 0; // Добавление к стоимости доставки от состояния авто
    
    expenses_of_litva = type_cars == 3 || type_cars == 4 || type_cars == 8 ? 700 : 800; // Просчет затрат в Литве
    document.getElementById('expenses_of_litva').innerHTML = expenses_of_litva + ' $';

    let delivery = delivery_by_ports + delivery_health_auto1 + delivery_health_auto2;
    document.getElementById('delivery_by_port').innerHTML = delivery + ' $';
    let komissia = ((delivery+delivery_to_moscow+price_car+expenses_of_litva+aukcion_sbor)*0.015)+200;
    document.getElementById('komissiya').innerHTML = ~~komissia + ' $';
    
    tamognya_moskva(age_of_the_car, price_car, eur_in_dollar, engine_capacity, aukcion_sbor, type_cars, type_of_engine);
    tamognya_rb(price_car, aukcion_sbor, age_of_the_car, engine_capacity, tamognya, sum, type_cars, type_of_engine);
    
    if (soprovogdenie>0){
        sopr.style.display = "flex";
    } else{
        sopr.style.display = "none";
    }
    // Комиссия за перевод денег в США + % СВИФТ
    let itogo = our_services + deklar + delivery + delivery_to_moscow + sbktc + util_sbor + tam_posh + soprovogdenie + aukcion_sbor + expenses_of_litva + price_car + komissia + akciz + export_documents;
    let itogo_rub = itogo*current_valute;
    itogo_rub = ~~itogo_rub;
    itogo=~~itogo;
    itogo=itogo.toLocaleString();
    itogo_rub = itogo_rub.toLocaleString();
    document.getElementById('result_itogo').innerHTML = 'Итого ' + itogo + ' $' + ' или ' + itogo_rub + ' руб.';
    document.getElementById('price_car_result').innerHTML = ~~price_car + ' $';
}

function update_calc(){
    price_car = document.getElementById('price_car').value; // Узнаем цену техники
    if (price_car>0) calculate_all();
}

auk_sbor_value1.addEventListener('change', function() { update_calc(); });
select_aukcion.addEventListener('change', function() { update_calc(); });
type_cars1.addEventListener('change', function() { update_calc(); });
price_car1.addEventListener('change', function() { update_calc(); });
type_of_engine1.addEventListener('change', function() { update_calc(); });
age_of_the_car1.addEventListener('change', function() { update_calc(); });
engine_capacity1.addEventListener('change', function() { update_calc(); });
weight_of_auto1.addEventListener('change', function() { update_calc(); });
AA1.addEventListener('change', function() { update_calc(); });
AA1_sublot.addEventListener('change', function() { update_calc(); });
Copart1.addEventListener('change', function() { update_calc(); });
Sublot_Copart1.addEventListener('change', function() { update_calc(); });
pending.addEventListener('change', function() { update_calc(); });
total.addEventListener('change', function() { update_calc(); });
sneg.addEventListener('change', function() { update_calc(); });
moto.addEventListener('change', function() { update_calc(); });
horse2.addEventListener('change', function() { update_calc(); });
buy_car_auto1.addEventListener('change', function() { update_calc(); });
manheim_deliver1.addEventListener('change', function() { update_calc(); });

document.getElementById("kopirovat").addEventListener('click', function() {

    let one = 'Цена авто: ' + document.getElementById('price_car').value + ' $';
    let two = 'Тип авто: ' + document.getElementById('type_cars').value;
    console.log(one, two);
    document.execCommand(one, two);
    /*navigator.clipboard.writeText(textaS)
    .then(() => {
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });*/
});
