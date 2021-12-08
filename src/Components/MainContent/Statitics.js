import { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

const Statitics = () => {
    useEffect(() => {
        am4core.useTheme(am4themes_animated);

        var chart2 = am4core.create("chartdiv2", am4charts.XYChart);
        //chart2.padding(10, 40, 10, 10);
        chart2.tooltip.getFillFromObject = false;
        chart2.tooltip.background.fill = am4core.color("#67b7dc");
        // Add data
        chart2.data = [
            {
                month: "2021-01-01",
                price: 3,
                value: 6
            },
            {
                month: "2021-02-02",
                price: 70,
                value: 30
            },
            {
                month: "2021-05-03",
                price: 3,
                value: 40
            },
            {
                month: "2021-07-04",
                price: 70,
                value: 20
            },
            {
                month: "2021-08-05",
                price: 3,
                value: 70
            },
            {
                month: "2021-09-06",
                price: 170,
                value: 50
            },
        ];

        // Create axes
        var dateAxis = chart2.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 20;
        dateAxis.fontSize = 10;

        var valueAxis1 = chart2.yAxes.push(new am4charts.ValueAxis());
        valueAxis1.logarithmic = true;
        valueAxis1.renderer.minGridDistance = 20;
        valueAxis1.fontSize = 10;

        // Create series
        var series2 = chart2.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "price";
        series2.dataFields.dateX = "month";
        series2.stroke = am4core.color("#a1eaff");
        series2.tensionX = 0.8;
        series2.strokeWidth = 2;

        var bullet = series2.bullets.push(new am4charts.CircleBullet());
        bullet.circle.fill = am4core.color("#fff");
        bullet.circle.radius = 3;
        bullet.circle.strokeWidth = 2;
        // Create series
        var series2 = chart2.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "value";
        series2.dataFields.dateX = "month";
        series2.stroke = am4core.color("#a1eaff");
        series2.tensionX = 0.8;
        series2.strokeWidth = 2;

        var bullet = series2.bullets.push(new am4charts.CircleBullet());
        bullet.circle.fill = am4core.color("#fff");
        bullet.circle.radius = 3;
        bullet.circle.strokeWidth = 2;
    }, [])

    return (<div id="chartdiv2" style={{ height: "80%" }}></div>)


}

export default Statitics;