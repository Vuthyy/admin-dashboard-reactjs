import React, { useState } from "react";
import Chart from "react-apexcharts";

const ReportCharts = () => {
  const [data, setData] = useState({
    series: [
      {
        name: "Sales",
        data: [30, 40, 35, 50, 49, 60, 70],
      },
      {
        name: "Revenue",
        data: [25, 35, 30, 45, 50, 65, 75],
      },
      {
        name: "Customers",
        data: [15, 25, 30, 40, 45, 60, 70],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ["#4154f1", "#2eca6a", "#ff771d"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:00:00.000Z",
          "2018-09-19T02:00:00.000Z",
          "2018-09-19T03:00:00.000Z",
          "2018-09-19T04:00:00.000Z",
          "2018-09-19T05:00:00.000Z",
          "2018-09-19T06:00:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yyyy HH:mm",
        },
      },
    },
  });

  return (
    <Chart
      options={data.options}
      series={data.series}
      type={data.options.chart.type}
      height={data.options.chart.height}
    />
  );
};

export default ReportCharts;
