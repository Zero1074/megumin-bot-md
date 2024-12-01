import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import fs from 'fs'; 
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""
global.authFile = `MeguminSession`;

// Cambiar a true si el Bot responde a sus comandos con otros comandos.
// Cambiar a false para usar el Bot desde el mismo numero del Bot.
// Error de m.isBaileys marcado como false fix temporal
global.isBaileysFail = false

global.defaultLenguaje = 'es';

global.owner = [
  ['5219992095479', '👑 Megumin - Creador 👑', true],
  ['5215517489568', '💫 Megumin - Rey Endymion 💫', false],
  ['5219993404349', '💫 Megumin - Sarethh 💫', true],
];

global.suittag = ['5219993404349'];
global.prems = ['51995386439'];

// API
global.BASE_API_DELIRIUS = "https://deliriussapi-oficial.vercel.app";

global.packname = 'Sticker';
global.author = 'Megumin - Bot';
global.wm = 'Megumin - Bot';
global.titulowm = 'Megumin - Bot';
global.titulowm2 = `Megumin - Bot`
global.igfg = 'Megumin - Bot';
global.wait = '*_[ ⏳ ] Cargando..._*';

// Si no usas imágenes, las dejamos vacías o sin contenido
global.imagen1 = '';
global.imagen2 = '';
global.imagen3 = '';
global.imagen4 = '';
global.imagen5 = '';

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, { weekday: 'long' });
global.fecha = d.toLocaleDateString('es', { day: 'numeric', month: 'numeric', year: 'numeric' });
global.mes = d.toLocaleDateString('es', { month: 'long' });
global.año = d.toLocaleDateString('es', { year: 'numeric' });
global.tiempo = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
//* ****************************
global.wm2 = `${dia} ${fecha}\nMegumin - Bot`;
global.gt = 'Megumin - Bot';
global.mysticbot = 'Megumin - Bot';
global.channel = 'https://whatsapp.com/channel/0029Vaein6eInlqIsCXpDs3y';
global.md = 'https://github.com/Zero1074/Megumin-bot-md';
global.mysticbot = 'https://github.com/Zero1074/Megumin-bot-md';
global.waitt = '*_[ ⏳ ] Cargando..._*';
global.waittt = '*_[ ⏳ ] Cargando..._*';
global.waitttt = '*_[ ⏳ ] Cargando..._*';
global.nomorown = '5219993404349';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = { key: { participant: '0@s.whatsapp.net' }, message: { 'videoMessage': { 'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./src/assets/images/menu/languages/es/menu.png') } } };
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});