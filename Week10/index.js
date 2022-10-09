const catTable = document.querySelector("#cats-table");
const addNewCat = document.querySelector("#add-cat-btn");

const addCat = () => {
  let newName = document.getElementById("name");
  let coloring = document.getElementById("Coloring");
  let breed = document.getElementById("Breed");
  let temperment = document.getElementById("Temperment");


  catTable.innerHTML += `
    <tr>
        <td>${newName.value}</td>
        <td>${coloring.value}</td>
        <td>${breed.value}</td>
        <td>${temperment.value}</td>
    </tr>
    `;

    newName.value = ''
    coloring.value = ''
    breed.value = ''
    temperment.value = ''

};

addNewCat.addEventListener("click", addCat);


