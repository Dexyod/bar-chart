$(document).ready(function () {
  // Specify data, options, and element in which to create the chart

  let data = [[4], [2, 4, 6], [8, 2, 0], [3, 1, 3]]; // for a normal bar chart use multiple arrays with 1 value in each array

  let options = {
    chartWidth: "60%", // use valid css sizing
    chartHeight: "60%", // use valid css sizing
    chartTitle: "Hello Chart", // enter chart title
    chartTitleColor: "red", // enter any valid css color
    chartTitleFontSize: "5rem", // enter a valid css font size
    yAxisTitle: "testing Y title", // enter title for y-axis
    xAxisTitle: "tests x title", // enter title for x-axis
    barValuePosition: "center", // "flex-start" (top), "center", or "flex-end" (bottom)
    barSpacing: "5%", // "1%" (small), "3%" (medium), "5%" (large)
    legend: ["hello", "Pepperoni", "Hawaiian"], // for stacked bar charts
    legendColors: ["yellow", "pink"], // bar colors
    barLabels: ["Raphael", "Leonardo", "Michaelangelo", "Donatello"], // x-axis labels
    labelColors: ["red", "blue", "orange", "purple"], // x-axis label colors
    barColors: [],
  };

  let element = "#testDiv";
  //create bar chart
  drawBarChart(data, options, element);

  function drawBarChart(data, options, element) {
    drawContainer(element);
    drawTitle(options);
    drawGrid(data, options);
    drawBars(data);
    drawLegend(options);
    drawYAxis(data);
    drawXAxis(data);
    drawXTitle(options);
    drawYTitle(options);
  }

  function drawContainer(element) {
    $(element).prepend("<div class='container'>Container<div>");
    $(element).css("height", "100%");
  }
});
