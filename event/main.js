let con = document.getElementById("content");

const EventStuff = async ()=> {
  let annoyed = document.getElementById("annoyed").value;
  const info = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&locale=*&city=${annoyed}`)
  const formattedJson = await info.json()
  console.log(formattedJson._embedded.events[0].url)

  for(let i = 0; i < formattedJson._embedded.events[i].images.length;i++){
  let eve = document.createElement("li");

  eve.innerHTML = `
  <p><img src=${formattedJson._embedded.events[i].images[1].url}><br>
  ${formattedJson._embedded.events[i].name}<br>
  <a href=${formattedJson._embedded.events[i].url}>Tickets<a>
  `

  con.append(eve);
  }
}
// EventStuff()

let annoyed = document.getElementById("annoyed");
let ashell = document.getElementById("ashell")

ashell.addEventListener("click", e => {
  EventStuff()
})
