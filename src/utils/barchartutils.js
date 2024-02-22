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

const legend = ["First Name", "Cost Reference ID", "Cost Reference ID,Position Reference ID", "Pay Group Reference ID"];

export const barchartDataset1=
[
    {
        label: legend[0],
        data: [1, 1, 1],
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

]

export const barchartDataset2=[
    {
        label: legend[0],
        data: [1, 0, 1, 0, 0],
        backgroundColor: backgroundColor[0],
        borderColor: borderColor[0],
        borderWidth: 1
    },
    {
        label: legend[1],
        data: [1, 0, 1, 0, 0],
        backgroundColor: backgroundColor[1],
        borderColor: borderColor[1],
        borderWidth: 1
    },
    {
        label: legend[2],
        data: [1, 1, 1, 0, 1],
        backgroundColor: backgroundColor[2],
        borderColor: borderColor[2],
        borderWidth: 1
    },

]
