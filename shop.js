let table = document.getElementById("basketID");

function addLody(){
   let row = table.insertRow(0);
   let cell1 = row.insertCell(0);
   let cell2 = row.insertCell(1);

   cell1.innerHTML = "Lody x 1";
   cell2.innerHTML = "- 5zł";
}

function addKot(){
   let row = table.insertRow(0);
   let cell1 = row.insertCell(0);
   let cell2 = row.insertCell(1);

   cell1.innerHTML = "Kot x 1";
   cell2.innerHTML = "- 10zł";
}

function addJameson(){
   let row = table.insertRow(0);
   let cell1 = row.insertCell(0);
   let cell2 = row.insertCell(1);

   cell1.innerHTML = "Jameson x 1";
   cell2.innerHTML = "- 15zł";
}