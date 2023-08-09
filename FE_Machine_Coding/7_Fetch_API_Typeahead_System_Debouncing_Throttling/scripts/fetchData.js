import { getData } from "../utils/fetchUtil.js";

class DynamicTable {

    constructor() {
        this.dataTable = null;  
    }

    initialiseTable() {
        this.dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    }


    createTableRow(data) {
        const row = this.dataTable.insertRow();
        row.insertCell(0).textContent = data.id;
        row.insertCell(1).textContent = data.name;
        row.insertCell(2).textContent = data.email;
        row.insertCell(3).textContent = data.body;
    }

    populateDataIntoTable(url) {
        // show loader here
        getData(url).then((data) => {
            if (data.length) {
                data.forEach(comment => {
                    this.createTableRow(comment);
                });
            } else {
                // show the message data is not available in DOM
            }
        }).catch(error => {
            console.error('An error occured', error);
        }).finally(() => {
            // hide the loader
        });
    }
}

const dynamicTable = new DynamicTable();
dynamicTable.initialiseTable();
dynamicTable.populateDataIntoTable('https://jsonplaceholder.typicode.com/posts/1/comments');