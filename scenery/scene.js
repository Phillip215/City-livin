let results = document.querySelector("#results")

const SceneryStuff = async ()=> {
  const info = await fetch("https://picsum.photos/300/300")
  const formattedJson = await info
  console.log(formattedJson.url)
  let pics = document.createElement("p")
  let con = document.getElementById("content")

  pics.innerHTML = `
  <img src="${formattedJson.url}">
  `
  con.append(pics)
}

let huh = document.querySelector("#huh")
let tent = document.querySelector("#content")

huh.addEventListener("click", () => {
  SceneryStuff()
  tent.classList.add("one")
})
