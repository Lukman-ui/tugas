const itemButtons = document.querySelectorAll('.item-button');
document.addEventListener("DOMContentLoaded", () => {
    // Pilih semua tombol item di Right Panel
    const itemButtons = document.querySelectorAll(".item-button");
  
    // Pilih tabel dan elemen tbody di Left Panel
    const tableBody = document.querySelector("table tbody");
  
    // Tambahkan event listener untuk setiap tombol item
    itemButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Ambil data dari atribut tombol
        const itemName = button.getAttribute("data-name");
        const itemCode = button.getAttribute("data-code");
  
        // Cek apakah item sudah ada di tabel
        let existingRow = Array.from(tableBody.children).find(
          (row) => row.dataset.code === itemCode
        );
  
        if (existingRow) {
          // Jika item sudah ada, tambahkan jumlah (Qty)
          const qtyCell = existingRow.querySelector(".qty");
          let currentQty = parseInt(qtyCell.textContent, 10);
          qtyCell.textContent = currentQty + 1;
        } else {
          // Jika item belum ada, tambahkan baris baru
          const newRow = document.createElement("tr");
          newRow.dataset.code = itemCode; // Tambahkan data-code ke baris
          newRow.innerHTML = `
            <td class="p-2">${itemName}</td>
            <td class="p-2 qty text-center">1</td>
            <td class="p-2 text-center">
              <button class="delete-button text-red-500">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          `;
          tableBody.appendChild(newRow);
  
          // Tambahkan event listener untuk tombol hapus
          const deleteButton = newRow.querySelector(".delete-button");
          deleteButton.addEventListener("click", () => {
            newRow.remove();
          });
        }
      });
    });
  });
  