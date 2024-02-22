
import React from "react";
import Chart from "react-apexcharts";
import { colorScheme } from '../utils/charts';

const PieChart = (props) => {
  const [categories, setCategories] = React.useState(props.categories || []);
  const [series, setSeries] = React.useState(props.series || []);
  var options = {
    labels: categories,
    chart: {
      height: 400, // Set the height to 350px
      type: 'line', // Example chart type
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.labels[opts.seriesIndex] + ":\n" + Number(val).toFixed(0)+ "%";
      },
      style: {
        textAlign: 'center', // Align text to the center
      }
    }
  };


  return <Chart options={options} series={series} type="pie" colors={colorScheme['Category10']} />;
};
export default PieChart;
