//////////////////////////////////////////////

// Get element
const main = document.querySelector("main");
const header = document.querySelector("header");
const body = document.querySelector("body");

const items = document.querySelector(".extension__items");
const activeBtn = document.querySelector(".extension__title--btn-active");
const inactiveBtn = document.querySelector(".extension__title--btn-inActive");
const allBtn = document.querySelector(".extension__title--btn-all");
const lightBtn = document.querySelector(".header__light");
const errBtn = document.querySelector(".err__button");
const lightDisplay = document.querySelector(".light_display");
const logo = document.querySelector(".logo");

let itemList = document.querySelectorAll(".extension__item");
let activeMode = "all";
let isSunMode = false;
let data = [
  // Item 1
  {
    id: 1,
    title: "DevLens",
    img: "devlens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: false,
  },

  // Item 2
  {
    id: 2,
    title: "StyleSpy",
    img: "stylespy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: false,
  },

  // Item 3
  {
    id: 3,
    title: "SpeedBoost",
    img: "speedboost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },

  // Item 4
  {
    id: 4,
    title: "JSONWizard",
    img: "jsonwizard",
    description:
      "OFormats, validates, and prettifies JSON responses in-browser.",
    isActive: false,
  },

  // Item 5
  {
    id: 5,
    title: "TabMaster Pro",
    img: "tabmaster-pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: false,
  },

  // Item 6
  {
    id: 6,
    title: "ViewportBuddy",
    img: "viewportbuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },

  // Item 7
  {
    id: 7,
    title: "Markup Notes",
    img: "markup-notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: false,
  },

  // Item 8
  {
    id: 8,
    title: "GridGuides",
    img: "gridguides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },

  // Item 9
  {
    id: 9,
    title: "Palette Picker",
    img: "palette-picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: false,
  },

  // Item 10
  {
    id: 10,
    title: "LinkChecker",
    img: "linkchecker",
    description: "Scans and highlights broken links on any page.",
    isActive: false,
  },

  // Item 11
  {
    id: 11,
    title: "DOM Snapshot",
    img: "dom-snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },

  // Item 12
  {
    id: 12,
    title: "ConsolePlus",
    img: "consoleplus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: false,
  },
];

// Insert Items
const make = function (data) {
  return `<div class="extension__item extension__item--${data.id}">
            <span class="rows">
              <img src="./img/img-${data.img}.svg" alt="photo" />
              <span class="cols">
                <h1 class="extension__item--title">${data.title}</h1>
                <p class="extension__item--desc">
                  ${data.description}
                </p>
              </span>
            </span>

            <span class="item--btn">
              <button class="extension__item--remove">Remove</button>
              <div class="extension__item--active-container ${
                data.isActive ? "active" : ""
              }" data-id = ${data.id}>
                <div class="extension__item--active"></div>
              </div>
            </span>
          </div>`;
};

// Filter function
function filterData(condition) {
  let newData = [];
  switch (condition) {
    case "active":
      // When active button is on
      newData = data.filter((el) => el.isActive);
      break;
    case "inactive":
      // When inactive button is on
      newData = data.filter((el) => !el.isActive);
      break;
    default:
      // When all button is active
      newData = data.map((el) => {
        return { ...el };
      });
  }

  // return newData by filter
  return newData;
}

// Update UI function
function updateExtensionItemList(newList) {
  // update UI
  const html = newList.map((el) => make(el));
  const UIHtml = html.join("");
  items.innerHTML = UIHtml;
  itemList = document.querySelectorAll(".extension__item");

  for (const el of itemList) {
    // Remove Button
    const removeBtn = el.querySelector(".extension__item--remove");
    removeBtn.addEventListener("click", () => {
      const itemId = +el.className.split("extension__item--")[1];
      data = data.filter((el) => el.id !== itemId);
      updateExtensionItemList(filterData(activeMode));
    });

    // Active Button
    const activeBtn = el.querySelector(".extension__item--active-container");
    activeBtn.addEventListener("click", () => {
      const itemId = +el.className.split("extension__item--")[1];
      data = data.map((el) => {
        if (el.id === itemId) {
          el.isActive = !el.isActive;
        }
        return el;
      });
      activeBtn.classList.toggle("active");
    });
  }

  // const media = document.querySelectorAll(".extension__item--active-container");
  // media[0].addEventListener("click", function () {
  //   media[0].classList.toggle("active");
  // });
}

function removeExtensionItemList(id) {
  data = data.filter((el) => el.id != id);
  const filteredData = filterData(activeMode);
  updateExtensionItemList(filteredData);
}
updateExtensionItemList(data);

// addEventListener
// When click active
activeBtn.addEventListener("click", () => {
  // Display button style
  activeBtn.classList.add("active");
  inactiveBtn.classList.remove("active");
  allBtn.classList.remove("active");

  activeMode = "active";
  const newData = filterData(activeMode);
  updateExtensionItemList(newData);
});

// When click all
allBtn.addEventListener("click", () => {
  // Display button style
  allBtn.classList.add("active");
  inactiveBtn.classList.remove("active");
  activeBtn.classList.remove("active");

  activeMode = "all";
  const newData = filterData(activeMode);
  updateExtensionItemList(newData);
});

// When click inactive
inactiveBtn.addEventListener("click", () => {
  // Display button style
  inactiveBtn.classList.add("active");
  activeBtn.classList.remove("active");
  allBtn.classList.remove("active");

  activeMode = "inactive";
  const newData = filterData(activeMode);
  updateExtensionItemList(newData);
});

lightBtn.addEventListener("click", () => {
  isSunMode = !isSunMode;
  body.classList.toggle("dark");

  if (isSunMode) {
    lightDisplay.src = "./img/img-moon.svg";
    logo.src = "./img/img-logo-black.svg";
  } else {
    lightDisplay.src = "./img/img-sun.svg";
    logo.src = "./img/img-logo.svg";
  }
});
