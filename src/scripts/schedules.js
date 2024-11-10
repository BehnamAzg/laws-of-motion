// download schedules listd
let schedulesFileName1 = document.querySelector("#tabel-head-1").textContent;

let downloadSchedules = document.getElementById("download-schedules");
downloadSchedules.addEventListener("click", () => {
  console.log("it's working");
  let scheduleTable = document.getElementById("schedule-table");

  var opt = {
    margin: 1,
    filename: schedulesFileName1,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "in",
      format: "government-letter",
      orientation: "landscape",
    },
  };

  html2pdf().set(opt).from(scheduleTable).save();
});
