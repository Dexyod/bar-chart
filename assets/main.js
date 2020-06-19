function drawBarChart(data, options, element) {
  //Create object of default options for chart
  let defaultOptions = {
    title: "Main Title",
    titleFont: "arial",
    titleColor: "black",
    titleFontSize: "14px",
    xAxisTitle: "x-Axis",
    xAxisTitleFont: "arial",
    xAxisTitleFontSize: "20px",
    xAxisTitleColor: "black",
    yAxisTitle: "y-Axis",
    yAxisTitleFont: "arial",
    yAxisTitleFontSize: "20px",
    yAxisTitleColor: "black",
    valuePosition: "center",
    barColor: [],
    labelColor: "black",
    barSpacing: "30px",
    xAxisLabels: [],
    xAxisLabelFont: "sans-serif",
    xAxisLabelFontSize: "12px",
    xAxisLabelColor: "black",
    legend: [],
    tickCount: 5,
  };

  let dColors = [
    "red",
    "yellow",
    "pink",
    "green",
    "orange",
    "purple",
    "indigo",
    "olive",
    "lightblue",
    "lime",
    "fuchsia",
    "cyan",
    "palegreen",
    "mediumspringgreen",
    "blue",
    "gold",
    "lightyellow",
    "indianred",
    "burlywood",
    "sandybrown",
    "coral",
  ];

  // update defaults with options passed into function
  for (let key in options) {
    defaultOptions[key] = options[key];
  }

  //global variables

  let lenData;
  let dataMax;
  let arrayLength;
  let maxY;
  let legend = false;

  //check if multiple data arrays
  function stackedBar() {
    if (data[0].length) {
      arrayLength = data.length;
      lenData = data[0].length;
      legend = true;

      if (defaultOptions.legend.length === 0) {
        for (let i = 0; i < arrayLength; i++) {
          defaultOptions.legend[i] = "data-" + (i + 1);
        }
      }
      //assign color to each stacked bar if colors not given
      if (defaultOptions.barColor.length === 0) {
        for (let i = 0; i < arrayLength; i++) {
          defaultOptions.barColor.push(
            new Array(dColors[Math.floor(Math.random() * (dColors.length - 1))])
          );
        }
      } else {
        for (let i = 0; i < defaultOptions.barColor.length; i++) {
          defaultOptions.barColor[i] = new Array(defaultOptions.barColor[i]);
        }
      }

      //loops through stacked data array and reads through and applies colors
      for (let i = 0; i < arrayLength; i++) {
        for (let j = 1; j < lenData; j++) {
          defaultOptions.barColor[i][j] = defaultOptions.barColor[i][0];
        }
      }

      //loop through nested array and build new array then find max number from this array to calculate y ticks and the height of the bars
      let maxArray = [];

      for (let i = 0; i < lenData; i++) {
        let num = 0;
        for (let j = 0; j < arrayLength; j++) {
          num += data[j][i];
        }
        maxArray.push(num);
      }

      dataMax = Math.max(...maxArray);
    } else {
      arrayLength = 1;
      lenData = data.length;
      dataMax = Math.max(...data);
      data = new Array(data);

      if (defaultOptions.barColor.length === 0) {
        for (let i = 0; i < lenData; i++) {
          defaultOptions.barColor[i] =
            dColors[Math.floor(Math.random() * (dColors.length - 1))];
        }
      }
      defaultOptions.barColor = new Array(defaultOptions.barColor);
    }
  }

  //calculate limits of y-Axis using if else statements
  function calculateCeiling() {
    switch (true) {
      case dataMax > 80:
        maxY = 100 * Math.ceil(dataMax / 100);
        break;
      case dataMax > 10:
        maxY = 10 * Math.ceil(dataMax / 10);
        break;
      case dataMax > 0:
        maxY = Math.ceil(dataMax);
    }
  }
  //creates graph area
  function createGraphArea() {
    $(element).append(function defineArea() {
      let titleDiv = `<div class="title">${defaultOptions.title}</div>`;
      let xAxisTitleDiv = `<div class="xAxisTitle">${defaultOptions.xAxisTitle}</div>`;
      let yAxisTitleDiv = `<div class="yAxisTitle">${defaultOptions.yAxisTitle}</div>`;
      let graphDiv = `<div class="graphArea"></div>`;
      let xAxisDiv = `<div class="xAxis"></div>`;
      let yAxisDiv = `<div class="yAxis"></div>`;
      let legendDiv = `<div class="legend"></div>`;

      return (
        titleDiv +
        xAxisTitleDiv +
        yAxisTitleDiv +
        graphDiv +
        xAxisDiv +
        yAxisDiv +
        legendDiv
      );
    });
    //create css for element
    $(element).css({
      width: "50%",
      height: "600px",
      margin: "auto",
      display: "grid",
      "grid-template-columns": "50px 50px auto 100px",
      "grid-template-rows": "50px auto 50px 50px",
    });

    //create css for title
    $(element + " .title").css({
      "grid-area": "1/3/2/4",
      "font-family": defaultOptions.titleFont,
      color: defaultOptions.titleColor,
      "font-size": defaultOptions.titleFontSize,
      "font-weight": "bold",
      "text-align": "center",
      "align-items": "center",
      "justify-content": "center",
    });

    //create legend css
    function createLegend() {
      if (legend) {
        $(element + " .legend").css({
          "grid-area": "2/4/3/5",
          display: "flex",
          "flex-direction": "column",
          "flex-wrap": "wrap",
          "align-items": "center",
          "justify-content": "center",
        });

        $(element + " .legend").append(function () {
          let legendTitle = "<p><strong>Legend</strong></p>";
          let result = "";

          for (let i = 0; i < arrayLength; i++) {
            result += `<p><span class ="legend-${i}"></span>${defaultOptions.legend[i]}</p>`;
          }
          // alert(legendTitle + result);
          return legendTitle + result;
        });

        $(element + " .legend-0").css({
          "vertical-align": "middle",
        });

        for (let i = 0; i < arrayLength; i++) {
          let legendSpan = element + " .legend-" + i;
          $(legendSpan).css({
            float: "left",
            height: "10px",
            width: "10px",
            "background-color": defaultOptions.barColor[i][0],
            "margin-right": "5px",
            position: "relative",
            bottom: "-2px",
          });
        }
      }
    }

    //create css for x and y axis titles
    $(element + " .xAxisTitle").css({
      "grid-area": "4/3/5/4",
      "text-align": "center",
      "font-weight": "bold",
      "font-family": defaultOptions.xAxisTitleFont,
      "font-size": defaultOptions.xAxisTitleFontSize,
      color: defaultOptions.xAxisTitleColor,
    });

    $(element + " .yAxisTitle").css({
      "grid-area": "2/1/3/2",
      "writing-mode": "vertical-lr",
      transform: "rotate(180deg)",
      "text-align": "center",
      "font-weight": "bold",
      "font-family": defaultOptions.yAxisTitleFont,
      "font-size": defaultOptions.yAxisTitleFontSize,
      color: defaultOptions.yAxisTitleColor,
    });

    //create xAxis into grid
    function createXAxis() {
      $(element + " .xAxis").css({
        "grid-area": "3/3/4/4",
        display: "grid",
        "grid-template-columns": "repeat(" + lenData + ",1fr)",
        "grid-template-rows": "1fr",
        "grid-column-gap": defaultOptions.barSpacing,
        "padding-left": "10px",
        "padding-right": "10px",
      });

      $(element + " .xAxis").append(function () {
        let result = "";
        for (let i = 0; i < lenData; i++) {
          result += `<div class="xAxisLabel-${i}">${defaultOptions.xAxisLabels[i]}</div>`;
        }

        return result;
      });

      //css for xAxis label divs
      for (let i = 0; i < lenData; i++) {
        let xAxisLabel = element + " .xAxisLabel-" + i;

        $(xAxisLabel).css({
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          "font-family": defaultOptions.xAxisLabelFont,
          "font-size": defaultOptions.xAxisLabelFontSize,
        });
      }
    }

    //create yAxis into grid and css
    function createYAxis() {
      $(element + " .yAxis").css({
        "grid-area": "2/2/3/3",
        display: "grid",
        "grid-template-columns": "1fr",
        "grid-template-rows": "1fr 2fr 2fr 2fr 2fr 2fr 1fr",
      });

      $(element + " .yAxis").append(function () {
        let result = "";
        for (let i = 1; i <= defaultOptions.tickCount; i++) {
          result += `<div class="yAxis-${i}">${(
            (maxY / defaultOptions.tickCount) *
            i
          ).toFixed(1)}</div>`;
        }
        return result;
      });

      for (let i = 1; i <= defaultOptions.tickCount; i++) {
        let yAxisLabel = element + " .yAxis-" + i;
        $(yAxisLabel).css({
          "grid-area": function () {
            let output = -i - 1 + "/1/" + (-i - 2) + "/2";
            return output;
          },
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        });
      }
    }

    //css for graph area and create grid
    $(element + " .graphArea").css({
      "grid-area": "2/3/3/4",
      "background-color": "#DDD3DD",
      display: "grid",
      "grid-template-columns": `repeat(${lenData}, 1fr)`,

      "grid-template-rows": "repeat(6,1fr)",
      "grid-column-gap": defaultOptions.barSpacing,
      "padding-left": "10px",
      "padding-right": "10px",
      position: "relative",
    });
    createLegend();
    createXAxis();
    createYAxis();
  }

  //finally actually draw the bar chart!~
  function drawChart() {
    $(element + " .graphArea").append(function () {
      let result = "";
      //create bars
      for (let i = 0; i < arrayLength; i++) {
        for (let j = 0; j < lenData; j++) {
          result +=
            "<div class='bar-" +
            i +
            j +
            "'><p class ='label'>" +
            data[i][j] +
            "</p></div>";
        }
      }
      // alert(result);
      //add lines
      for (let i = 1; i <= defaultOptions.tickCount; i++) {
        result += `<div class="axisLine-${i}"></div>`;
      }

      return result;
    });

    for (let i = 1; i <= defaultOptions.tickCount; i++) {
      let axisLine = element + " .axisLine-" + i;
      $(axisLine).css({
        "grid-area": function () {
          let output = i + "/1/" + (i + 1) + "/" + (lenData + 1);
          return output;
        },
        "border-bottom": "dotted",
        "border-width": "0.5px",
      });
    }

    //css for bars and set height color label pos and label color.
    for (let i = 0; i < lenData; i++) {
      let padNum = 0;

      for (let j = 0; j < arrayLength; j++) {
        let fillPercentage =
          data[j][i] / (maxY + maxY / defaultOptions.tickCount);
        // alert(fillPercentage);
        let barFill = fillPercentage * $(element + " .graphArea").height();
        // alert(pixelFill);
        let elemBar = element + " .bar-" + j + i;

        $(elemBar).css({
          "grid-area": function () {
            let output = "1/" + (i + 1) + "/7/" + (i + 2);
            return output;
          },
          "background-color": function () {
            return defaultOptions.barColor[j][i];
          },
          "padding-bottom": padNum + "px",
          height: function () {
            return barFill + "px";
          },
          "place-self": "end stretch",
          "z-index": function () {
            return 100 - j;
          },
          display: "flex",
          "align-items": defaultOptions.valuePosition,
          "justify-content": "center",
        });

        // alert(defaultOptions.barColor[j][i]);

        elemBar += " .label";
        $(elemBar).css({
          visibility: function () {
            if (barFill < 14) {
              return "hidden";
            }
          },
          "margin-top": "unset",
          "margin-bottom": "unset",
          "font-weight": "bold",
          color: defaultOptions.labelColor,
        });
        padNum += barFill;
      }
    }
  }

  stackedBar();
  calculateCeiling();
  createGraphArea();
  drawChart();
}
