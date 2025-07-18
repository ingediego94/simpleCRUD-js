// Import essential functions:
import {getData, postData, updateData, deleteData} from './methods.js';


document.addEventListener('DOMContentLoaded', ()=>{
    
    const formularie = document.querySelector('#formx');

    formularie.addEventListener('submit', (ev)=>{
        ev.preventDefault();

        const id = document.querySelector('#idx').value;
        const name = document.querySelector('#namex').value;
        const age = document.querySelector('#agex').value;

        const newObj = {
            id : id,
            name : name,
            age : age
        };

        formularie.reset();

    })


})

function clearForm(){
    document.querySelector('#formx').reset();
    alert("Data cleared, you can start again.")
}

