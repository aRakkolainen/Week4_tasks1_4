import "./styles.css";
async function getShows() {
  let url = "https://api.tvmaze.com/search/shows?q=";
  let show = document.getElementById("input-show").value;
  const main = document.getElementById("content");
  url = url + show;
  let dataPromise = await fetch(url);
  let showJSON = await dataPromise.json();
  showJSON.forEach((data) => {
    //console.log(data.show.image.medium);
    let showBox = document.createElement("div");
    showBox.setAttribute("class", "show-data");
    let pic = document.createElement("img");
    try {
      pic.src = data.show.image.medium;
    } catch (e) {}
    let showInfo = document.createElement("div");
    showInfo.setAttribute("class", "show-info");
    let showTitle = document.createElement("h1");
    let showSummary = document.createElement("p");
    showTitle.innerText = data.show.name;
    showSummary.innerHTML = data.show.summary;
    showInfo.appendChild(showTitle);
    showInfo.appendChild(showSummary);
    showBox.appendChild(pic);
    showBox.appendChild(showInfo);
    main.appendChild(showBox);
  });
}
const submitBtn = document.getElementById("submit-data");
submitBtn.addEventListener("click", getShows);
