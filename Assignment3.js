let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");
let noresult = document.getElementById("noresult");

function creatingResult(i) {
    let {
        author,
        imageLink,
        title
    } = i;

    let div = document.createElement("div");
    div.id = "subPart";
    div.classList.add("row");
    searchResults.appendChild(div);

    let subdiv = document.createElement("div");
    subdiv.classList.add("col-5");

    let img = document.createElement("img");
    img.src = imageLink;

    let p = document.createElement("p");
    p.textContent = author;
    p.classList.add("text-center");
    subdiv.appendChild(p);

    subdiv.appendChild(img);
    div.appendChild(subdiv);

    spinner.classList.add("d-none");
}

function creatingDynamicPart(search_results) {
    if (search_results.length) {
        for (let i of search_results) {
            creatingResult(i);
        }
    } else {
        noresult.classList.remove("d-none");
    }
}


function searchBooksFn(event) {
    let searchItems = searchInput.value;
    if (event.key === "Enter") {
        searchResults.textContent = "";
        spinner.classList.remove("d-none");
        let url = "https://apis.ccbp.in/book-store?title=" + searchItems;
        let option = {
            method: "GET"
        };
        fetch(url, option)
            .then(function(response) {
                return (response.json());
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                creatingDynamicPart(search_results);
            })
    }
}

searchInput.addEventListener("keydown", searchBooksFn);
