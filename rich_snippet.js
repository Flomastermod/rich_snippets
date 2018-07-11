var article_h1 = document.getElementsByTagName("h1")[0];
var article_url = document.URL;
var images = document.getElementsByClassName("rich-image");
var image_list = [];

for(var i = 0; i < images.length; i++)
{
    image_list[i] = images[i].src;
}

var rich_snippet = {
  "@context": article_url,
  "@type": "Article",
  "headline": article_h1.textContent,
  "image": image_list, 
}

