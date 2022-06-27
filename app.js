const listContainer = document.querySelector(".list-container");

const createChild = (name, attributesObj, textContent) => {
  const element = document.createElement(name);
  const attributesArray = Object.entries(attributesObj);
  attributesArray.map((pair) => {
    element.setAttribute(pair[0], pair[1]);
  });
  element.textContent = textContent;

  return element;
};

const appendNode = (parent, child) => parent.appendChild(child);

const colorArray = ["red", "blue", "purple"];

const createPage = () => {
  colorArray.map((color) => {
    const child = createChild(
      "li",
      { class: "list-item", style: `background-color: ${color}` },
      color
    );
    appendNode(listContainer, child);
  });
};

createPage();

window.addEventListener("load", () => {
  window.location.href =
    "http://127.0.0.1:5500/index.html?#tags=red,blue,purple";
});

window.addEventListener("hashchange", () => {
  const url = window.location.href;
  const newColors = url.split("=")[1].split(",");
  listContainer.innerHTML = "";
  newColors.map((color) => {
    const child = createChild(
      "li",
      { class: "list-item", style: `background-color: ${color}` },
      color
    );
    appendNode(listContainer, child);
  });
});