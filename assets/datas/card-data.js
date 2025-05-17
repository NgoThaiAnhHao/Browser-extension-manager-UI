const data = [
  // Item 1
  {
    title: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },

  // Item 2
  {
    title: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },

  // Item 3
  {
    title: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: true,
  },

  // Item 4
  {
    title: "JSONWizard",
    description:
      "OFormats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },

  // Item 5
  {
    title: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },

  // Item 6
  {
    title: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: true,
  },

  // Item 7
  {
    title: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },

  // Item 8
  {
    title: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: true,
  },

  // Item 9
  {
    title: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },

  // Item 10
  {
    title: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },

  // Item 11
  {
    title: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: true,
  },

  // Item 12
  {
    title: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

let html = `<div class="extension__item extension__item--12">
            <span class="rows">
              <img src="./img/img-consoleplus.svg" alt="photo" />
              <span class="cols">
                <h1 class="extension__item--title">ConsolePlus</h1>
                <p class="extension__item--desc">
                  Enhanced developer console with advanced filtering and
                  logging.
                </p>
              </span>
            </span>

            <span class="item--btn">
              <button class="extension__item--remove">Remove</button>
              <div class="extension__item--active-container">
                <div class="extension__item--active"></div>
              </div>
            </span>
          </div>`;

const items = document.querySelector(".extension__items");

// items.innerHTML.a = ""

items.insertAdjacentHTML("beforebegin", html);
//         //   filter(e => e.isActive)

// const main = document.querySelector("#main");
// main.innerHTML;
