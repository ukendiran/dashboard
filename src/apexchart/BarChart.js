
import React from "react";
import Chart from "react-apexcharts";
import { colorScheme } from '../utils/charts';

const BarChart = (props) => {
  const [categories, setCategories] = React.useState(props.categories || []);
  const [series, setSeries] = React.useState(props.series || []);
  React.useEffect(() => {
    setCategories(props.categories)
    setSeries(props.series)
  }, [props.country])

  const options = {
    xaxis: {
      categories: categories
    },
    colors: colorScheme['Category10'] // Set custom color pattern

  };
  return <Chart options={options} series={series} type="bar" />;
};
export default BarChart;
