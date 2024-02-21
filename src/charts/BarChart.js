import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import service from '../services/apiService'; // Adjust the path as needed

const BarChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await service.fetchData();
            setData(response);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const legend = ["First_Name", "WD_COSTCENTER_ID", "WD_POSITIONID", "WD_PAYGROUP_ID", "WD_COSTCENTER_ID"];
    const country = ['CH', 'FR', 'SA'];
    const backgroundColor = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ];

    const borderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ];

    useEffect(() => {
        // fetchData();
        const data = {
            labels: country,
            datasets: [
                {
                    label: legend[0],
                    data: [1, 0, 0],
                    backgroundColor: backgroundColor[0],
                    borderColor: borderColor[0],
                    borderWidth: 1
                },
                {
                    label: legend[1],
                    data: [0, 1, 0],
                    backgroundColor: backgroundColor[1],
                    borderColor: borderColor[1],
                    borderWidth: 1
                },
                {
                    label: legend[2],
                    data: [0, 0, 1],
                    backgroundColor: backgroundColor[2],
                    borderColor: borderColor[2],
                    borderWidth: 1
                },
                {
                    label: legend[3],
                    data: [0, 0, 0],
                    backgroundColor: backgroundColor[3],
                    borderColor: borderColor[3],
                    borderWidth: 1
                },
                {
                    label: legend[4],
                    data: [0, 0, 0],
                    backgroundColor: backgroundColor[4],
                    borderColor: borderColor[4],
                    borderWidth: 1
                },
            ]
        };

        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        if (chartRef && chartRef.current) {
            // Destroy the previous chart instance if it exists
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: data,
                options: options
            });
        }

        // Clean up function
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return <canvas ref={chartRef} />;
};

export default BarChart;
