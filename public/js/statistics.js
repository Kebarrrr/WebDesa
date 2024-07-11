document.addEventListener("DOMContentLoaded", function () {
  // Data jumlah warga laki-laki dan perempuan
  const maleCount = 500;
  const femaleCount = 550;

  // Update tabel dengan data jumlah warga
  document.getElementById("maleCount").textContent = maleCount;
  document.getElementById("femaleCount").textContent = femaleCount;

  // Membuat pie chart menggunakan Chart.js
  const ctx = document.getElementById("genderPieChart").getContext("2d");
  const genderPieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Laki-laki", "Perempuan"],
      datasets: [
        {
          label: "Jumlah Warga",
          data: [maleCount, femaleCount],
          backgroundColor: ["#007bff", "#ff6361"],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || "";
              if (label) {
                label += ": ";
              }
              if (context.raw !== null) {
                label += context.raw.toLocaleString();
              }
              return label;
            },
          },
        },
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 15,
            fontStyle: "bold",
          },
        },
      },
    },
  });
});