import { xLabels, yTemps, nasaData } from "./index.js";
const ctx = document.getElementById("chart").getContext("2d");
charting();
async function charting() {
  await nasaData();
  const chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: xLabels,
      datasets: [
        {
          label:
            "Combined Land-Surface Air and Sea-Surface Water Temperature Anomalies",
          data: yTemps,
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1
        }
      ]
    },
    options: {
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: {
          ticks: {
            callback: function(value, index, values) {
              return value + " C";
            }
          }
        }
      }
    }
  });
}
