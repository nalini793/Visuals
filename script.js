const textColor = document.getElementById("text");
const bgColor = document.getElementById("bg");
const primarybtnColor = document.getElementById("primary-btn");
const secondarybtnColor = document.getElementById("secondary-btn");
const accentColor = document.getElementById("accent");
const exportBtn = document.getElementById("export");
const randomBtn = document.getElementById("random");
const linkNav = document.getElementById("hide");
const canvasBox = document.getElementById("canvas-box");

function setColor(property, value) {
  document.documentElement.style.setProperty(property, value);
}
setColor("--primary", "#000000");
setColor("--secondary", "#ffffff");
setColor("--primbutton", "#4685FF");
setColor("--secbutton", "#F2F2F2");
setColor("--accent", "#FFB084");

bgColor.addEventListener("input", () => {
  const bgColorValue = bgColor.value;
  setColor("--secondary", bgColorValue);
});
textColor.addEventListener("input", () => {
  const textColorValue = textColor.value;
  setColor("--primary", textColorValue);
});
primarybtnColor.addEventListener("input", () => {
  const primBtnColorValue = primarybtnColor.value;
  setColor("--primbutton", primBtnColorValue);
});
secondarybtnColor.addEventListener("input", () => {
  const secBtnColorValue = secondarybtnColor.value;
  setColor("--secbutton", secBtnColorValue);
});

accentColor.addEventListener("input", () => {
  const accentColorValue = accentColor.value;
  setColor("--accent", accentColorValue);
});

document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    event.preventDefault();
    // linkNav.click();
    setRandomColour();
  }
});

randomBtn.addEventListener("click", setRandomColour);
// colour sets picked from color hunt
const colorSets = [
  {
    colors: ["#e9c46a", "#264653", "#e76f51", "#2a9d8f", "#e9c46a"],
  },

  {
    colors: ["#223d49", "#ffe08a", "#ac5039", "#fff0c7", "#2a9d8f"],
  },

  {
    colors: ["#f6f7f9", "#212428", "#00ff00", "#313130", "#00bb00"],
  },

  {
    colors: ["#0e101a", "#ffffff", "#0d8065", "#f0f2fc", "#aff2ea"],
    source: "<b>Inspiration:</b><br>Grammarly",
  },

  {
    colors: ["#1d3557", "#f1faee", "#e63946", "#a8dadc", "#457b9d"],
  },

  {
    colors: ["#f1faee", "#1d3557", "#a8dadc", "#06446a", "#ffc7cc"],
  },

  {
    colors: ["#fffbe5", "#000814", "#ffc300", "#001d3d", "#003566"],
  },

  {
    colors: ["#344e41", "#dad7cd", "#3a5a40", "#b5c49c", "#588157"],
  },

  {
    colors: ["#2b2d42", "#edf2f4", "#d90429", "#8d99ae", "#201f33"],
  },

  {
    colors: ["#212529", "#f8f9fa", "#343a40", "#e9ecef", "#adb5bd"],
  },

  {
    colors: ["#231942", "#ffebf5", "#5e548e", "#efd9f2", "#8d73b0"],
  },

  {
    colors: ["#ffffff", "#191919", "#405bff", "#212121", "#ebff38"],
    source: "<b>Inspiration:</b><br>LaunchDarkly",
  },

  {
    colors: ["#eeeeee", "#000000", "#44d62c", "#222222", "#ff9c07"],
  },

  {
    colors: ["#eeeeee", "#000000", "#44d62c", "#222222", "#44d62c"],
    source: "<b>Inspiration:</b><br>Razer",
  },

  {
    colors: ["#ff8bff", "#193718", "#ff8bff", "#5eaa67", "#e9ffe8"],
    source: "<b>Inspiration:</b><br>OpenAI ChatGPT",
  },

  {
    colors: ["#000000", "#ffffff", "#000000", "#f2f2f2", "#000000"],
  },

  {
    colors: ["#000000", "#ffffff", "#0049db", "#f2f2f2", "#ff6bc1"],
  },

  {
    colors: ["#0f1419", "#ffffff", "#1d9bf0", "#f7f7f7", "#8ecdf7"],
    source: "<b>Inspiration:</b><br>Twitter",
  },

  {
    colors: ["#0f1419", "#ffffff", "#ffd400", "#f2f2f2", "#ffe97f"],
  },

  {
    colors: ["#fbf5d4", "#0099ab", "#5a39d0", "#006374", "#2156c0"],
    source: "<b>Inspiration:</b><br>Retro 80s Nike Jacket",
  },

  {
    colors: ["#000000", "#e7e7d7", "#006338", "#deded0", "#006338"],
    source: "<b>Inspiration:</b><br>Retro 80s Nike Jacket",
  },

  {
    colors: ["#0f1419", "#ffffff", "#f91880", "#f2f2f2", "#fc8bbf"],
  },

  {
    colors: ["#0f1419", "#ffffff", "#8756FF", "#f2f2f2", "#bbaaff"],
  },

  {
    colors: ["#0f1419", "#ffffff", "#ff7a00", "#f2f2f2", "#ffbc7f"],
  },

  {
    colors: ["#0f1419", "#ffffff", "#00ba7c", "#f2f2f2", "#7fdcbd"],
  },

  {
    colors: ["#006374", "#fbf5d4", "#5a39d0", "#cbddca", "#5a39d0"],
  },

  {
    colors: ["#0e101a", "#ffffff", "#ff686b", "#fff6f5", "#84dcc6"],
  },

  {
    colors: ["#584b53", "#fef5ef", "#9d5c63", "#ffffff", "#e4bb97"],
  },

  {
    colors: ["#424b54", "#ffffff", "#9b6a6c", "#e6eaeb", "#e2b4bd"],
  },

  {
    colors: ["#ffffff", "#1f2041", "#ffc857", "#4b3f72", "#ffc857"],
  },

  {
    colors: ["#050505", "#ffffff", "#121212", "#f6f5f4", "#ffb600"],
    source: "<b>Inspiration:</b><br>Notion",
  },

  {
    colors: ["#ffffff", "#000000", "#9d34da", "#1a1a1a", "#bd73e8"],
    source: "<b>Inspiration:</b><br>Notion AI",
  },

  {
    colors: ["#2b1c50", "#ffffff", "#565add", "#d1d1f7", "#9f92ec"],
    source: "<b>Inspiration:</b><br>Loom",
  },

  {
    colors: ["#00031f", "#ffffff", "#0b5cff", "#ffffff", "#00ede7"],
    source: "<b>Inspiration:</b><br>Zoom",
  },

  {
    colors: ["#000000", "#ffffff", "#611f69", "#f4ede4", "#ecb22e"],
    source: "<b>Inspiration:</b><br>Slack",
  },

  {
    colors: ["#171a22", "#ffffff", "#ff622d", "#f7f7f7", "#421983"],
    source: "<b>Inspiration:</b><br>SEMRush",
  },

  {
    colors: ["#000000", "#9de2d4", "#e27d5f", "#95d6d2", "#d3bbc2"],
  },

  {
    colors: ["#fffbff", "#252cbb", "#ca3f66", "#2e35c2", "#ffccda"],
  },

  {
    colors: ["#ffffff", "#4887b0", "#fbeec1", "#3f7897", "#fbeec1"],
  },

  {
    colors: ["#05396b", "#5cdb94", "#edf5e0", "#8de4af", "#05396b"],
  },

  {
    colors: ["#fcfcfc", "#151515", "#f54c28", "#1b1918", "#689775"],
  },

  {
    colors: ["#5d5c61", "#b4c6da", "#557a95", "#d0dce7", "#7a747b"],
  },

  {
    colors: ["#2e1115", "#ffffff", "#4f1b1d", "#eaeff2", "#83687b"],
  },

  {
    colors: ["#fcfcfc", "#000000", "#4201ff", "#171717", "#230090"],
  },

  {
    colors: ["#e5fffd", "#0b0c12", "#66fcf1", "#202833", "#c5c6c8"],
  },

  {
    colors: ["#2c221e", "#e3e2de", "#e10243", "#e5d1d6", "#9b1750"],
  },

  {
    colors: ["#6c6b66", "#f1f0eb", "#f13c1f", "#fff8e5", "#4056a1"],
  },

  {
    colors: ["#d6d6d6", "#272727", "#10f49c", "#424242", "#ffe401"],
  },

  {
    colors: ["#fdfffe", "#2f4455", "#da7b93", "#376f70", "#2e151b"],
  },

  {
    colors: ["#646561", "#eae8dc", "#e85a50", "#e6e2cc", "#977d59"],
  },

  {
    colors: ["#ededed", "#222546", "#29658a", "#474866", "#d1d2d6"],
  },
];

function setRandomColour() {
  const randomColourSet =
    colorSets[Math.floor(Math.random() * colorSets.length)];
  const [...colours] = randomColourSet.colors;
  textColor.value = colours[0];
  bgColor.value = colours[1];
  primarybtnColor.value = colours[2];
  secondarybtnColor.value = colours[3];
  accentColor.value = colours[4];

  setColor("--primary", colours[0]);
  setColor("--secondary", colours[1]);
  setColor("--primbutton", colours[2]);
  setColor("--secbutton", colours[3]);
  setColor("--accent", colours[4]);
}

//highlightTootlbar()
function highlightToolbar() {
  const toolbar = document.getElementById("toolbar");
  toolbar.classList.add("highlighted");
  setTimeout(function () {
    toolbar.classList.remove("highlighted");
  }, 1000);
}

// living shapes animation

const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;

  while (prev === next) next = rand(min, max);

  return next;
};

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 },
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
    combination = combinations[index];

  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;

  prev = index;
}, 3000);

//logo visuals animation
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("#hacked").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};

// toggle for a different option

const left = document.getElementById("left-side");

const handleMove = (e) => {
  left.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
};

document.onmousemove = (e) => handleMove(e);

document.ontouchmove = (e) => handleMove(e.touches[0]);

// export button text file download

exportBtn.addEventListener("click", () => {
  const allColorValues = [
    document.documentElement.style.getPropertyValue("--primary"),
    document.documentElement.style.getPropertyValue("--secondary"),
    document.documentElement.style.getPropertyValue("--primbutton"),
    document.documentElement.style.getPropertyValue("--secbutton"),
    document.documentElement.style.getPropertyValue("--accent"),
  ];

  const allColorNames = [
    "Text ",
    "Background ",
    "Primary Button ",
    "Secondary Button ",
    "Accent ",
  ];
  const rgbValues = [
    `${allColorValues[0]} (RGB: ${hexToRgb(allColorValues[0])})`,
    `${allColorValues[1]} (RGB: ${hexToRgb(allColorValues[1])})`,
    `${allColorValues[2]} (RGB: ${hexToRgb(allColorValues[2])})`,
    `${allColorValues[3]} (RGB: ${hexToRgb(allColorValues[3])})`,
    `${allColorValues[4]} (RGB: ${hexToRgb(allColorValues[4])})`,
  ];

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = (allColorValues.length + 5) * 50;
  canvas.width = 600;
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.fillRect(0, 0, 600, 500);

  ctx.font = "20px Lato";

  for (let i = 0; i < allColorValues.length; i++) {
    ctx.fillStyle = allColorValues[i];
    ctx.fillRect(200, 100 + 60 * i, 50, 50);

    ctx.fillText(allColorNames[i], 20, 130 + 60 * i);
    ctx.fillText(rgbValues[i], 280, 130 + 60 * i);
  }
  ctx.fillStyle = "white";

  ctx.font = "18px Lato";
  ctx.fillText("Hope you enjoyed using Visuals 👋", 165, 450);
  const imageDl = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.download = "Visuals Color Palette.png";
  link.href = imageDl;
  link.click();
});

function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}
