import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function AcquisitionsChart() {

    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const DATA_COUNT = 5;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Doughnut Chart'
                }
            }
        },
    };

    useEffect(() => {
        const data = {
            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            datasets: [
                {
                    label: 'Dataset 1',
                    data: Utils.numbers(NUMBER_CFG),
                    backgroundColor: Object.values(Utils.CHART_COLORS),
                }
            ]
        };
    });


    return (
        <>
        </>
    )
}

export default AcquisitionsChart