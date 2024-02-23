import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { colorScheme } from '../utils/charts';
import TableComponent from './Table';

const BarChartWithPopup = (props) => {
    const [popupData, setPopupData] = useState(null);
    const [categories, setCategories] = React.useState(props.categories || []);
    const [series, setSeries] = React.useState(props.series || []);

    React.useEffect(() => {
        setCategories(props.categories)
        setSeries(props.series)
    }, [props.country])

    const handleBarClick = (chartContext, config) => {
        // Extract data related to the clicked bar
        const seriesIndex = config.seriesIndex;
        const dataPointIndex = config.dataPointIndex;
        // const clickedData = config.series[seriesIndex].data[dataPointIndex];
        console.log(config.config)
        console.log(config.config.xaxis.categories)
        // Set the data for the popup
        setPopupData(config.config.series);
    };

    const clearPopup = () => {
        setPopupData(null);
    };

    const options = {
        xaxis: {
            categories: categories
        },
        axisBorder: {
            show: false, // Hide x-axis border
        },
        axisTicks: {
            show: false, // Hide x-axis ticks
        },
        grid: {
            show: false, // Hide x-axis grid lines
        },
        colors: colorScheme['Category10'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
                dataLabels: {
                    position: 'center', // Adjust the position of the labels
                    formatter: function (val) {
                        return "$ " + val; // Customize the label format as needed
                    }
                }
            },
        },
        // chart: {
        //     events: {
        //         mounted: handleBarClick
        //     }
        // }
    };
    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="bar"
                    height={350}

                />
            </div>
            <TableComponent series={series} categories={categories} />
        </div>
    );
};

export default BarChartWithPopup;
