let yuh = document.querySelector("#yuh");

const InfoStuff = async ()=> {
  let search = document.getElementById("search").value;
  search = search.toLowerCase()
  const info = await fetch(`https://api.teleport.org/api/urban_areas/slug:${search}/scores/`)
  const formattedJson = await info.json()
  console.log(formattedJson)
  con = document.querySelector(".content")
  let results = document.createElement("li")

  results.innerHTML = `<h2>${search} Quality Of Life Scores:</h2>
  <p> Housing: ${Math.round(formattedJson.categories[0].score_out_of_10)} out of ten<br>
  <p>Cost of Living: ${Math.round(formattedJson.categories[1].score_out_of_10)} out of ten<br>
  <p>Commute: ${Math.round(formattedJson.categories[5].score_out_of_10)} out of ten<br>
  <p>Safety: ${Math.round(formattedJson.categories[7].score_out_of_10)} out of ten<br>
  <p>Healthcare: ${Math.round(formattedJson.categories[8].score_out_of_10)} out of ten<br>
  <p>Education: ${Math.round(formattedJson.categories[9].score_out_of_10)} out of ten<br>
  <p>Taxation: ${Math.round(formattedJson.categories[12].score_out_of_10)} out of ten<br>
  <p>Internet Access: ${Math.round(formattedJson.categories[13].score_out_of_10)} out of ten
  `
  con.append(results);
}

let search = document.querySelector("#search");
let form = document.querySelector("form")


let hmm = document.querySelector("#hmm");

yuh.addEventListener("click", e => {
  InfoStuff()
  hmm.classList.add("content")
  yuh.disabled = true
});
