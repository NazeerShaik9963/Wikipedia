let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");

function displayresult1(result) {
    spinner.classList.add("d-none");
    let {
        title,
        link,
        description
    } = result;
    let div = document.createElement("div");
    div.classList.add("result-item");
    searchResults.appendChild(div);
    // achor Element for title 
    let achortitle = document.createElement("a");
    achortitle.classList.add("result-title");
    achortitle.href = link;
    achortitle.target = "_blank";
    achortitle.textContent = title;
    div.appendChild(achortitle);

    // break Element for nxt line 
    let breakline = document.createElement("br");
    achortitle.appendChild(breakline);

    // achor Element for title link 
    let achorlink = document.createElement("a");
    achorlink.classList.add("result-url");
    achorlink.href = link;
    achorlink.target = "_blank";
    achorlink.textContent = link;
    div.appendChild(achorlink);

    // break Element for nxt line 
    let breakline2 = document.createElement("br");
    achorlink.appendChild(breakline2);

    // paragraph for discription
    let paradicription = document.createElement("p");
    paradicription.classList.add("link-description");
    paradicription.textContent = description;
    div.appendChild(paradicription);

}

function displayresult(event) {
    if (event.key === "Enter") {
        searchResults.textContent = "";
        spinner.classList.remove("d-none");
        let input = searchInput.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + input;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                for (let result of search_results) {
                    displayresult1(result);
                }

            });
    }
}


searchInput.addEventListener("keydown", displayresult);