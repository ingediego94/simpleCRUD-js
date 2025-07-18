const url = "http://localhost:3000/workers";

// GET: To see the results.
export async function getData() {
    try{
        const response = await fetch(url);
        
        if(!response.ok) throw new Error(`Error HTTP ${response.status}.`);

        const result = await response.json();
        // console.log(result);

    } catch(error){

        throw new Error('The response of server is not a valid array.');

    }
}



// POST: To create a new register.
export async function postData(newRegister) {
    
    try{
       
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRegister)
        });

        if(!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const result = await response.json();
        //console.log(result)
        alert('Register successfuly created.');

    } catch (error){

        throw new Error('Error in servers response.');

    }

}



// PUT: to update registers
export async function updateData(registerToUpdate){
    
    try{
        const response = await fetch(`${url}/${registerToUpdate.id}`, {     
            method: 'PUT',      
            headers: {      
                'Content-Type': 'application/json'      
            },      
            body: JSON.stringify(registerToUpdate)       
        });     

        if(!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const result = await response.json();

        alert('Register updated successfully.')
        //console.log('Actualizacion exitosa', result);


    } catch(error){

        throw new Error('Error to update.');

    }

}



// updateData(dataObj);

export async function deleteData(registerToDelete){
    try{

        const response = await fetch(`${url}/${registerToDelete.id}`, {

            method: 'DELETE'

        });

        if(!response.ok) throw new Error(`Error HTTP: ${response.status}`);

        const result = await response.json();

        alert("Registed deleted successfully");

        // console.log("Register deleted: ", result);

    } catch(error){

        throw new Error("Error to delete.");

    }

}

/*
To export we can use this other way at the end of the js document.

export{getData, postData, updateData, deleteData};

*/

