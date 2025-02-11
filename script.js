function animalGetDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
        document.querySelectorAll(".animal-result img")[0].src = data.message;
    })
    .catch(error => console.error("Error fetching dog image:", error));
}

function animalGetCat() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        document.querySelectorAll(".animal-result img")[1].src = data[0].url;
    })
    .catch(error => console.error("Error fetching cat image:", error));
}

function wikiGetArticle() {
    fetch("https://en.wikipedia.org/api/rest_v1/page/random/summary")
    .then(response => response.json())
    .then(data => {
        document.querySelector(".wiki-article-title").innerText = data.title;
        document.querySelector(".wiki-article-summary").innerText = data.extract;
        document.querySelector(".wiki-article-link").href = data.content_urls.desktop.page;
    })
    .catch(error => console.error("Error fetching Wikipedia article:", error));
}

function emojiGetEmoji() {
    fetch("https://emojihub.yurace.pro/api/random")
    .then(response => response.json())
    .then(data => {
        document.querySelector(".emoji-result").innerHTML = data.htmlCode[0];
    })
    .catch(error => console.error("Error fetching emoji:", error));
}
