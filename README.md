# **About**

Bar-Chart is a JavaScript library that helps the user create bar charts using jQuery. This is a stretch project for the Lighthouse Labs prep work for their full-time Web Development course.

# **API Functions**

To draw a bar chart simply download the repo and add the main.js script to your HTML and use the drawBarChart function.

```javascript
drawBarChart(data, options, element);
```

The function takes three parameters:

- data
- options
- element

The `data` parameter takes in an array of numbers to represent the value of the bars generated.
A nested array of numbers can be used to draw a Multiple Value (Stacked) bar chart.

The `options` parameter takes in an object with the keys of the object accessing the options parameter and the values changing the state of the customizable option.

the `element` parameter takes in a variable set to the class or id of the HTML div where the bar chart will be drawn.

### Customizable Options

- `title`: a string specifying the title of the chart displayed at the head.
- `titleFont`: a string using any valid CSS font-family to specify the font of the title.
- `titleColor`: a string specifying the color of the title. Must be any valid CSS color (named, hex, rgb).
- `titleFontSize`: a string specifying the font size of the title. Can be any CSS valid font sizing.
- `xAxisTitle`: a string specifying the title of the x-axis.
- `xAxisTitleFont`: a string using any valid CSS font-family to specify the font of the x-axis title.
- `xAxisTitleFontSize`: a string specifying the font size of the x-axis title. Can be any CSS valid font sizing.
- `xAxisTitleColor`: a string specifying the color of the x-axis title. Must be any valid CSS color (named, hex, rgb).
- `yAxisTitle`: a string specifying the title of the y-axis.
- `yAxisTitleFont`: a string using any valid CSS font-family to specify the font of the y-axis title.
- `yAxisTitleFontSize`: a string specifying the font size of the y-axis title. Can be any CSS valid font sizing.
- `yAxisTitleColor`: a string specifying the color of the y-axis title. Must be any valid CSS color (named, hex, rgb).
- `valuePosition`: a string specifying the position of the bar values. (top - flex-start, center - center, bottom - flex-end).
- `barColor`: an [array] of strings specifying the color of the bars. Must be any valid CSS color (named, hex, rgb). If stacked bar is used colors will populate stacks from bottom to top iterating through the [array].
- `labelColor`: a string specifying the color of the value labels. Must be any valid CSS color (named, hex, rgb).
- `barSpacing`: a string specifying the space between the bars. Must use px after number value.
- `xAxisLabels`: an [array] of strings specifying the names of the x-axis labels for the bars.
- `xAxisLabelFont`: a string using any valid CSS font-family to specify the font of the x-axis labels.
- `xAxisLabelFontSize`: a string specifying the font size of the x-axis labels. Can be any CSS valid font sizing.
- `xAxisLabelColor`: a string specifying the color of the x-axis label text. Must be any valid CSS color (named, hex, rgb).
- `legend`: an [array] of strings specifying the legend names of the stacked bar values.
- `tickCount`: a number specifying the amount of y-axis ticks.

_All options have default settings within the `drawBarChart` function within main.js. Not all options have to be specified. Just choose the options you would like to change from the default._

# **Examples**

## Single Bar Chart

![Screenshot of single bar chart](https://github.com/Dexyod/bar-chart/blob/master/assets/image/barChart1.png)

## Stacked Bar Charts

![Screenshot of stacked bar chart](https://github.com/Dexyod/bar-chart/blob/master/assets/image/barChart2.png)

![Another example of stacked bar chart](https://github.com/Dexyod/bar-chart/blob/master/assets/image/barChart3.png)

# **Github Page**

[GitHub Page](https://dexyod.github.io/bar-chart/)

# **Known Issues**

- Legend not aligning correctly when the strings are different lengths.
  -When using "%" instead of "px" for bar spacing the sizing of the grid area deforms.
- X-axis labels not aligning underneath bars correctly if string is too long.
- If tick count is too high grid deforms.

# **Road Map**

- Animations for bar charts when loading page
- Pop out values when hovering over bar
- Add more dynamic settings for options
- Add basic CSS for background of webpage

# **External Resources**

[CSS Tricks](https://css-tricks.com/)

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/jQuery)

[Codecademy](https://www.codecademy.com/learn/learn-jquery)

[jQuery YouTube Tutorial](https://www.youtube.com/watch?v=hMxGhHNOkCU)

[StackOverflow](https://stackoverflow.com/search?q=bar+charts)

[GitHub Guides](https://guides.github.com/features/mastering-markdown/)
