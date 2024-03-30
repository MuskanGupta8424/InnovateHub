document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const tableRows = document.querySelectorAll("#producttable tbody tr");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    tableRows.forEach((row) => {
      const brand = row
        .querySelector(".text-body-secondary")
        .textContent.toLowerCase();
      const description = row
        .querySelector("td:nth-child(2)")
        .textContent.toLowerCase();

      if (brand.includes(searchTerm) || description.includes(searchTerm)) {
        row.style.display = ""; // Show the row
      } else {
        row.style.display = "none"; // Hide the row
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const createTeamButton = document.querySelector("#secondsec .createteam");

  createTeamButton.addEventListener("click", function () {
    const folderName = prompt("Enter the name of the new folder:");
    if (folderName) {
      const accordion = document.querySelector(".accordion");
      const newFolderHTML = `
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button d-flex gap-1" type="button" data-bs-toggle="collapse"
                                data-bs-target="#${folderName.replaceAll(
                                  " ",
                                  "-"
                                )}" aria-expanded="true"
                                aria-controls="${folderName.replaceAll(
                                  " ",
                                  "-"
                                )}">
                                <i class="ri-folder-line "></i>
                                <span class="fw-medium">${folderName}</span>
                            </button>
                        </h2>
                        <div id="${folderName.replaceAll(
                          " ",
                          "-"
                        )}" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <!-- Contents of the folder -->
                                <h5></h5>
                            </div>
                        </div>
                    </div>
                `;
      accordion.insertAdjacentHTML("beforeend", newFolderHTML);
    }
  });

  const createnewsub = document.querySelector("#addSubItem");
  createnewsub.addEventListener("click", function () {
    const folderName = prompt("Enter the name of the new sub folder:");
    if (folderName) {
      const accordion = document.querySelector("#collapseOne .accordion-body");
      const newFolderHTML = `
               
        <div id="${folderName.replaceAll(" ", "-")}" class="accordion-body">   
                                <h5 class="createteam px-4 py-0">${folderName}</h5>
                        </div>
                        
                   
                `;
      accordion.insertAdjacentHTML("beforeend", newFolderHTML);
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const createSelectedItemsBtn = document.getElementById(
    "createSelectedItemsBtn"
  );
  const deleteSelectedItemsBtn = document.getElementById(
    "deleteSelectedItemsBtn"
  );
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let selectedItemsCount = 0;

  // Function to update selected items count
  function updateSelectedItemsCount() {
    selectedItemsCount = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    ).length;
    createSelectedItemsBtn.textContent = `(${selectedItemsCount}) selected `;
    // deleteSelectedItemsBtn.textContent = ``;
  }

  // Event listener for checkbox change
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      updateSelectedItemsCount();
    });
  });

  // Event listener for create selected items button
  createSelectedItemsBtn.addEventListener("click", function () {
    // Example function to create selected items based on selected checkboxes
    const selectedItems = [];
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        const row = checkbox.closest("tr");
        selectedItems.push(row);
      }
    });
    // Example: Output selected items to console
    console.log(selectedItems);
  });

  // Event listener for delete selected items button
  deleteSelectedItemsBtn.addEventListener("click", function () {
    // Example function to delete selected items based on selected checkboxes
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        const row = checkbox.closest("tr");
        row.remove();
      }
    });
    // Reset selected items count
    updateSelectedItemsCount();
  });
});
