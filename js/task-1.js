const items = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${items.length}`);

items.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elementCount = category.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Element: ${elementCount}`);
});
