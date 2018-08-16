// This script generates breadcrumb js on any page.

// Container for breadcrumbs
var breadCrumbContainer = [];

// Grab current url
var url = document.URL;

// Split the url
var splitUrl = url.split("/");

// Set sitename
var sitename = splitUrl[0] + "/" + splitUrl[1] + "/" + splitUrl[2] + "/"; 

// Counter for how long url is
var position = 1;

// Loop through all slug items to pack list with slugs
for(var i = 0; i < splitUrl.length; i++)
{
	// We don't care about "https:" and "" and "sitename"
    if (i == 0 || i == 1  || i == 2 || splitUrl[i] == "" )
    {
		// carry on
		continue;
    }
    else
	{
		// now that we have a slug, we'll try and split it
		// in case it is a url like this one-two-three
		var slug = splitUrl[i];

		var nameRaw = slug.split("-");

		// Create a list to store instances of the split slug
		var names = []; 

		// Loop through the split slug
		for(var h = 0; h < nameRaw.length; h++)
		{
			// Take the instance of the split slug
			var nameLower = nameRaw[h];
			var nameLetters = nameLower.split("");
			
			// Capitalize the instance of the split slug
			var nameUpper = nameLetters[0].toUpperCase() + nameLetters.slice(1);
			
			// Split uppercase name string 
			var nameSplit = nameUpper.split(",");

			// Join the split name
			var nameJoined = nameSplit.join("");

			// Add the instance of the split slug that has been prettified to the names array
			names.push(nameJoined);
		}

		// Create a breadcrumb instance
		var breadCrumb =
		{
			"@type": "ListItem",
			"position": position,
			"item":
			{
			  "@id": sitename + splitUrl[i] + "/",
			  "name": names.join(" ") 
			}
		}

		// Increment the position
		position += 1;

		// Increment the sitename so the slug is added
		sitename = sitename + splitUrl[i] + "/";

		// Push the breadcrumb to the breadCrumbContainer
		breadCrumbContainer.push(breadCrumb);
	}

}

// Create BreadCrumbList this will hold individual breadcrumbs
var BreadCrumbList = 
{
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadCrumbContainer
}

