// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarkForm = document.getElementById("bookmarkForm");

let siteNameInput = document.getElementById("siteNameInput");
let siteNameErrMsg = document.getElementById("siteNameErrMsg");

let siteUrlInput = document.getElementById("siteUrlInput");
let siteUrlErrMsg = document.getElementById("siteUrlErrMsg");

let submitBtn = document.getElementById("submitBtn");

let bookmarksList = document.getElementById("bookmarksList");
let divId = document.getElementById("divId");

siteNameInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsg.textContent = "Required*";
    } else {
        siteNameErrMsg.textContent = "";
    }
});

siteUrlInput.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsg.textContent = "Required*";
    } else {
        siteUrlErrMsg.textContent = "";
    }
});

submitBtn.addEventListener("click", function(event) {
    bookmarkForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Like this.
    });
    divId.classList.remove("d-none");

    let siteName = siteNameInput.value;
    let url = siteUrlInput.value;

    let liEl = document.createElement("li");
    let divEl = document.createElement("div");

    let name = document.createElement("p");
    name.textContent = siteName;
    liEl.appendChild(name);

    let anchor = document.createElement('a');
    anchor.textContent = url;
    anchor.href = url;
    anchor.target = "_blank";
    liEl.appendChild(anchor);

    bookmarksList.appendChild(liEl);
    liEl.appendChild(divEl);

})
