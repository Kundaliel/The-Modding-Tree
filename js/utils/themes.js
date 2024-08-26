// ************ Themes ************
var themes = ["Default", "Aqua", "Purple", "Light", "Abyss", "Forest", "Sunset", "CommandLine"];

var colors = {
	Default: {
		1: "#ffffff",
		2: "#bfbfbf",
		3: "#7f7f7f",
		color: "#dfdfdf",
		points: "#ffffff",
		locked: "#bf8f8f",
		background: "#0f0f0f",
		background_tooltip: "rgba(0, 0, 0, 0.75)",
	},
	Aqua: {
		1: "#bfdfff",
		2: "#8fa7bf",
		3: "#5f6f7f",
		color: "#bfdfff",
		points: "#dfefff",
		locked: "#c4a7b3",
		background: "#001f3f",
		background_tooltip: "rgba(0, 15, 31, 0.75)",
	},
	Purple: {
		1: "#d1c4e9",
		2: "#b39ddb",
		3: "#9575cd",
		color: "#e8eaf6",
		points: "#d1c4e9",
		locked: "#7e57c2",
		background: "#4527a0",
		background_tooltip: "rgba(69, 39, 160, 0.85)",
	},
	Light: {
		1: "#e0e0e0", // Softer light gray for branch color 1
		2: "#cfcfcf", // Slightly darker gray for branch color 2
		3: "#b0b0b0", // Medium gray for branch color 3
		color: "#333333", // Dark gray for text
		points: "#757575", // Medium gray for points
		locked: "#9e9e9e", // Light gray for locked elements
		background: "#f9f9f9", // Very light gray for background to reduce eye strain
		background_tooltip: "ffffff", // Light gray tooltip background
	},
	Abyss: {
		1: "#1b263b",
		2: "#415a77",
		3: "#778da9",
		color: "#e0e1dd",
		points: "#c8d8e4",
		locked: "#3b3b3b",
		background: "#0d1b2a",
		background_tooltip: "rgba(13, 27, 42, 0.85)",
	},
	Forest: {
		1: "#a8d5ba",
		2: "#6b8f71",
		3: "#405d43",
		color: "#e3e8cd",
		points: "#bfdc98",
		locked: "#6a8e72",
		background: "#263c29",
		background_tooltip: "rgba(38, 60, 41, 0.85)",
	},
	Sunset: {
		1: "#fdd692",
		2: "#f5a962",
		3: "#ff7849",
		color: "#ffb784",
		points: "#ffd5b5",
		locked: "#f27830",
		background: "#3b1f2b",
		background_tooltip: "rgba(59, 31, 43, 0.85)",
	},
	CommandLine: {
		1: "#00ff00", // Bright green for branch color 1
		2: "#00cc00", // Slightly darker green for branch color 2
		3: "#009900", // Darker green for branch color 3
		color: "#00ff00", // Bright green for text
		points: "#00cc00", // Green for points
		locked: "#009900", // Dark green for locked elements
		background: "#000000", // Pure black for background
		background_tooltip: "rgba(0, 0, 0, 0.85)", // Dark tooltip background
	}
};



function changeTheme() {
	let colors_theme = colors[options.theme || "default"];
	document.body.style.setProperty('--background', colors_theme.background);
	document.body.style.setProperty('--background_tooltip', colors_theme.background_tooltip);
	document.body.style.setProperty('--color', colors_theme.color);
	document.body.style.setProperty('--points', colors_theme.points);
	document.body.style.setProperty('--locked', colors_theme.locked);
}

function getThemeName() {
	return options.theme || "Default";
}

function switchTheme() {
	let index = themes.indexOf(options.theme);
	if (options.theme === null || index >= themes.length - 1 || index < 0) {
		options.theme = themes[0];
	} else {
		index++;
		options.theme = themes[index];
	}
	changeTheme();
	resizeCanvas();
}
