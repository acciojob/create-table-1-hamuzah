function insert_Row() {
    //Write your code here

document.getElementById('insert-row-button').addEventListener('click', function() {
    // Get the table body
    var tableBody = document.getElementById('sampleTable').getElementsByTagName('tbody')[0];
    
    // Create a new row
    var newRow = tableBody.insertRow(0); // Insert at the top (index 0)

    // Insert cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
  //var cell3 = newRow.insertCell(2);

    // Set the content of the new cells
    cell1.innerHTML = 'New Row, Cell 1';
    cell2.innerHTML = 'New Row, Cell 2';
   //ell3.innerHTML = 'New Row, Cell 3';
});
  

	
  
  
}
