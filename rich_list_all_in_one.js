// This script takes all urls that have class rich-item
// it then puts the rich-item into a ItemList

// Grab current url
var url = document.URL;

// Grab all rich-items, this is really just an array of the urls 
// that we want to populate the itemList with
var  richItems = document.getElementsByClassName("rich-item");

// List that will contain item objects
var itemList = [];

// Base example of what an item should be 
var listItem = {
	"@type": "ListItem",
	"position": 1,
    "url": ""
};

// For every url, we need to create a listItem, then 
// push it onto the itemList 
for(var i = 0; i < richItems.length; i++)
{
	// Redefine the listItem every time
	listItem = {
		"@type": "ListItem",
		"position": i + 1,
		"url": richItems[i].href
	};

    itemList.push(listItem);
};

// Pack the rich snippet variable with our article's data
var richItemList = {
  "@context": "http://schema.org",
  "@type":"ItemList",
  "itemListElement": itemList
};

// Convert object to string
var richItemListRaw = JSON.stringify(richItemList);

// Generate a script object to append to the closing body tag
var richScript = document.createElement("script");

// Give the script a class so I can select it easily
richScript.classList.add("rich-script");

// Give the script the appropriate type for a rich snippet
richScript.type = "application/ld+json"

// Pack the rich_snippet into the rich_script
richScript.innerHTML = richItemListRaw;

// Append the rich_script to the closing body tag
document.body.appendChild(richScript);
