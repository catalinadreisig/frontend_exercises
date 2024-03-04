// Data
const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// Function to generate breadcrumb navigation
function generateBreadcrumb() {
  const breadcrumbContainer = document.getElementById("breadcrumbContainer");
  breadcrumbContainer.innerHTML = ""; // Clear previous breadcrumb

  const breadcrumbList = document.createElement("ul");

  bc.forEach((item, index) => {
    const listItem = document.createElement("li");

    if (index === bc.length - 1) {
      // For the last item, create a text node instead of a link
      listItem.textContent = item.name;
    } else {
      // For other items, create a link
      const link = document.createElement("a");
      link.textContent = item.name;
      link.href = item.link;
      listItem.appendChild(link);
    }

    // Add slash separator after each breadcrumb item, except for the last one
    if (index < bc.length - 1) {
      const separator = document.createElement("span");
      separator.textContent = " / ";
      listItem.appendChild(separator);
    }

    // Add list item to breadcrumb list
    breadcrumbList.appendChild(listItem);
  });

  // Append breadcrumb list to container
  breadcrumbContainer.appendChild(breadcrumbList);
}

// Event listener for button click
document.getElementById("generateBreadcrumb").addEventListener("click", generateBreadcrumb);
