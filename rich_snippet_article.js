// Generate the variables needed for an article Rich Snippet
var article_h1 = document.getElementsByTagName("h1")[0];
var article_url = document.URL;
var images = document.getElementsByClassName("rich-image");
var image_list = [
    "https://d3ves0vn0b2jei.cloudfront.net/wp-content/uploads/2017/12/Bento-business-debit-card.jpg",
];

// Pack all images into images array
for(var i = 0; i < images.length; i++)
{
    image_list.push(images[i].src);
};

// Pack the rich snippet variable with our article's data
var rich_snippet = {
  "@context": article_url,
  "@type": "Article",
  "headline": article_h1.textContent,
  "image": image_list,
};

// Convert object to string
rich_snippet_raw = JSON.stringify(rich_snippet)

// Generate a script object to append to the closing body tag
rich_script = document.createElement("script");

// Give the script a class so I can select it easily
rich_script.classList.add("rich-script");

// Give the script the appropriate type for a rich snippet
rich_script.type = "application/ld+json"

// Pack the rich_snippet into the rich_script
rich_script.innerHTML = rich_snippet_raw;

// Append the rich_script to the closing body tag
document.body.appendChild(rich_script);
