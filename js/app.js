// Import essential functions:
import {getData, postData, updateData, deleteData} from './methods.js';


document.addEventListener('DOMContentLoaded', ()=>{
    
    const formularie = document.querySelector('#formx');

    if(!formularie){
        console.info("Form doesn't founded.");
        return;
    }

    formularie.addEventListener('submit', async (ev)=>{
        ev.preventDefault();

        const id = document.querySelector('#idx').value;
        const name = document.querySelector('#namex').value;
        const age = parseInt(document.querySelector('#agex').value);

        // Validation to prevent an empty register
        if(!id || !name || !age){
            alert("Is not permited empty fields.");
            return;
        }

        const newObj = {
            id : id,
            name : name,
            age : age
        };

        try{
            const response = await postData(newObj);
            console.info("Data sent correctly.");
            formularie.reset();
        } catch(error){
            console.info("Error to send data", error);
        }

    });
});


