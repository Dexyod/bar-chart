const data = [21, 24, 23, 27, 12, 16, 10, 15];
const element = "#chart1";
const options = {
  title: "Titles Won",
  titleFontSize: "30px",
  xAxisTitle: "Teams",
  yAxisTitle: "Number of Titles Won",
  xAxisLabels: [
    "Cubs",
    "Bears",
    "Lions",
    "Tigers",
    "Giraffes",
    "Monkeys",
    "Ostrichs",
    "Badgers",
  ],
};
$(document).ready(drawBarChart(data, options, element));

const data2 = [
  [7, 5, 8, 9, 7, 6],
  [3, 5, 7, 6, 9, 7],
  [7, 9, 4, 5, 7, 3],
  [4, 2, 5, 6, 2, 6],
];
const element2 = "#chart2";
const options2 = {
  title: "Lorem Ipsum",
  xAxisTitle: "Dolor",
  yAxisTitle: "Consectetur Adipiscing Elit",
  xAxisLabels: ["Nam", "Curabitur", "Proin", "Quisque", "Sed", "Phasellus"],
  titleColor: "#bada55",
  titleFont: "georgia",
  titleFontSize: "30px",
  barColor: ["#dd8cda", "#3b956f", "#6ac5d0", "#98f837"],
  legend: ["Vestibul", "Suspend", "Fusceium", "Nuseluim"],
  tickCount: 4,
};
$(document).ready(drawBarChart(data2, options2, element2));

const data3 = [
  [157, 100, 200, 150],
  [89, 127, 200, 167],
  [78, 262, 146, 189],
  [178, 122, 178, 150],
  [250, 89, 167, 156],
];
const element3 = "#chart3";
const options3 = {
  title: "Some Of My Favourite Numbers",
  titleFont: "helvetica",
  titleColor: "red",
  titleFontSize: "40px",
  xAxisTitle: "These Numbers",
  xAxisTitleFont: "helvetica",
  xAxisTitleFontSize: "20px",
  xAxisTitleColor: "blue",
  yAxisTitle: "Also These Numbers",
  yAxisTitleFont: "helvetica",
  yAxisTitleFontSize: "20px",
  yAxisTitleColor: "green",
  valuePosition: "flex-end",
  barColor: ["#480355", "#9448BC", "#7699D4", "#63B4D1", "#90FCF9"],
  labelColor: "white",
  barSpacing: "60px",
  xAxisLabels: ["Numbers", "Stacked", "On Numbers", "Is Great!"],
  xAxisLabelFont: "helvetica",
  xAxisLabelFontSize: "12px",
  xAxisLabelColor: "black",
  legend: [],
  tickCount: 5,
};

$(document).ready(drawBarChart(data3, options3, element3));
