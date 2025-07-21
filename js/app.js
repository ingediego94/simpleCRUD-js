// Import essential functions:
import {getData, postData, updateData, deleteData} from './methods.js'


document.addEventListener('DOMContentLoaded', async ()=>{
    
    // 1. Show data on the table.
    await showData();


    // 2. Manage register form.
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
            await showData(); // Refresh the table with new data
            console.info("Data sent correctly.");
            formularie.reset();
        } catch(error){
            console.info("Error to send data", error);
        }

    });

    
});



// Show data on table:
async function showData() {
  
    const tableResults = document.querySelector('#tableResults tbody');
    
    try{
        const data  = await getData();

        if(!Array.isArray(data)) throw new Error("Data is not an array");

        tableResults.innerHTML = '';

        data.forEach(worker => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${worker.id}</td>
                <td>${worker.name}</td>
                <td>${worker.age}</td>
                <td>
                    <button id="edit-btn" class="btn edit-btn" data-id="${worker.id}">Edit</button> <button id="delete-btn" class="btn delete-btn" data-id="${worker.id}">Delete</button>
                </td>
            `;

            tableResults.appendChild(tr);
        });

    } catch(error){

        tableResults.innerHTML = `
            <tr>
                <td colspan="3">"Error to loading data"</td>
            </tr>
        `;
        console.log(error);
        
    }


}


