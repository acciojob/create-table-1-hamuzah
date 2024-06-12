function insert_Row() {
    //Write your code here

	var tableBody = document.getElementById('sampleTable').getElementsByTagName('tbody')[0];
    
    // Create a new row at the top
    var newRow = tableBody.insertRow(0); // Insert at the top (index 0)

    // Insert new cells into the new row
    var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);

    // Set the content of the new cells
    newCell1.innerHTML = 'New Row, Cell 1';
    newCell2.innerHTML = 'New Row, Cell 2';

 
});
  

	
  
  
}
