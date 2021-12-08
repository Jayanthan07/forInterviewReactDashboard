import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import css from "../../Styles/MainContent.module.css";

const MicroCharts = (props) => {
    am4core.ready(function () {

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var container = am4core.create(`chartdivMicro${props.index}`, am4core.Container);
        container.layout = "grid";
        container.fixedWidthGrid = false;
        container.width = am4core.percent(100);
        container.height = am4core.percent(100);

        // Color set
        var colors = new am4core.ColorSet();

        // Functions that create various sparklines


        function createColumn(title, data, color) {

            var chart = container.createChild(am4charts.XYChart);
            chart.width = am4core.percent(45);
            chart.height = 70;

            chart.data = data;

            chart.titles.template.fontSize = 10;
            chart.titles.template.textAlign = "left";
            chart.titles.template.isMeasured = false;
            chart.titles.create().text = title;

            chart.padding(20, 5, 2, 5);

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.labels.template.disabled = true;
            dateAxis.cursorTooltipEnabled = false;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.min = 0;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.baseGrid.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.cursorTooltipEnabled = false;

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.lineY.disabled = true;

            var series = chart.series.push(new am4charts.ColumnSeries());
            series.tooltipText = "{date}: [bold]{value}";
            series.dataFields.dateX = "date";
            series.dataFields.valueY = "value";
            series.strokeWidth = 0;
            series.fillOpacity = 0.5;
            series.columns.template.propertyFields.fillOpacity = "opacity";
            series.columns.template.fill = color;

            return chart;
        }




        createColumn("", [
            { "date": new Date(2018, 0, 1, 8, 0, 0), "value": 22 },
            { "date": new Date(2018, 0, 1, 9, 0, 0), "value": 25 },
            { "date": new Date(2018, 0, 1, 10, 0, 0), "value": 40 },
            { "date": new Date(2018, 0, 1, 11, 0, 0), "value": 35 },
            { "date": new Date(2018, 0, 1, 12, 0, 0), "value": 29 },
            { "date": new Date(2018, 0, 1, 13, 0, 0), "value": 1 },
            { "date": new Date(2018, 0, 1, 14, 0, 0), "value": 15 },
            { "date": new Date(2018, 0, 1, 15, 0, 0), "value": 29 },
            { "date": new Date(2018, 0, 1, 16, 0, 0), "value": 33, "opacity": 1 }
        ], colors.getIndex(props.index));





    });

    return (
        <div id={"chartdivMicro" + props.index} className={CSS.MicroChart}></div>
    );
}

export default MicroCharts;