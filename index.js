console.log("this is my index js file");
// 07e605bb6fb54db0bfbf05ff9d287fdb

// Grab the news Container
let newsAccordion = document.getElementById("newsAccordion");

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=07e605bb6fb54db0bfbf05ff9d287fdb",
  true
);

// what to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);

    let newsHtml = '';
    articles.forEach(function(element, index)  {
        // console.log(element, index);

        let news = `<div class="card">
  <div class="card-header" id="heading${index}">
    <h2 class="mb-0">
      <button
        class="btn btn-link collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#collapse${index}"
        aria-expanded="true"
        aria-controls="collapse${index}"
      >
      <strong>Breaking News  ${index+1} : </strong> ${element["title"]}

      </button>
    </h2>
  </div>

  <div
    id="collapse${index}"
    class="collapse"
    aria-labelledby="heading${index}"
    data-parent="#newsAccordion"
  >
    <div class="card-body">
      ${element["content"]}. <a href="${element['url']}" target="_blank"> Read more here </a>

    </div>
  </div>
</div>`;

newsHtml+= news;
});
newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occurred");
  }
};
// send Request
xhr.send();
