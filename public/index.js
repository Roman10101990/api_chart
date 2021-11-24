export let xLabels = [];
export let yTemps = [];

export async function nasaData() {
  let resp = await fetch("./ZonAnn.Ts+dSST.csv");
  let data = await resp.text();
  let rows = data.split("\n").slice(1);

  rows.forEach(elem => {
    let row = elem.split(",");
    let year = row[0];
    let temp = row[1];
    xLabels.push(year);
    yTemps.push(parseFloat(temp) + 14);
  });
}
