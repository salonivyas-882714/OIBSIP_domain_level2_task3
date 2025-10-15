  function addTask() {
      let title = document.getElementById("title").value.trim();
      let desc = document.getElementById("desc").value.trim();

      if (title === "" || desc === "") {
        alert("Please fill all fields!");
        return;
      }

      let table = document.getElementById("todoTable");

      // Add new row using innerHTML
      table.innerHTML += `
        <tr>
          <td>${title}</td>
          <td>${desc}</td>
          <td><button class="delete-btn" onclick="deleteRow(this)">X</button></td>
        </tr>
      `;

      // Clear input fields
      document.getElementById("title").value = "";
      document.getElementById("desc").value = "";
    }

    function deleteRow(btn) {
      // delete the current row
      btn.parentElement.parentElement.remove();
    }
   