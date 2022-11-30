import {data} from './Mapp.js';


const main = document.querySelector('main');
let finalString = "";
for (let i = 0; i < 1; i++) {
    finalString += `<Marker longitude=${data[i]["coordinates"]} latitude=${data[i]["another"]}/>`;
    main.innerHTML = finalString;
}
