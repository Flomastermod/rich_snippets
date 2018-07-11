// Generate the variables needed for an article Rich Snippet
var article_h1 = document.getElementsByTagName("h1")[0];
var article_url = document.URL;
var images = document.getElementsByClassName("rich-image");
var image_list = [];

// Pack all images into images array
for(var i = 0; i < images.length; i++)
{
    image_list[i] = images[i].src;
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

// Pack the rich_snippet into the rich_script
rich_script.innerHTML = rich_snippet_raw;

// Append the rich_script to the closing body tag
document.body.appendChild(rich_script);
