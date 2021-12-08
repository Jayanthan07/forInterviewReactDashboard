import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { useEffect } from "react";
import css from "../../Styles/MainContent.module.css"


am4core.useTheme(am4themes_animated);
am4core.addLicense("ch-custom-attribution");

/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */



const GeoMap=()=>{
    useEffect(()=>{
        // Create map instance
        var chart = am4core.create("chartdiv", am4maps.MapChart);

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series
        var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#e7e7e7");

        // Create hover state and set alternative fill color
        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#c8c8d0");

        // Remove Antarctica
        polygonSeries.exclude = ["AQ"];

        // Add some data
        polygonSeries.data = [{
            "id": "US",
            "name": "United States",
            "value": 100
        }, {
            "id": "FR",
            "name": "France",
            "value": 50
        }];

        // Bind "fill" property to "fill" key in data
        polygonTemplate.propertyFields.fill = "fill";

        // Add line series
        // var lineSeries = chart.series.push(new am4maps.MapLineSeries());
        // lineSeries.data = [{
        //     "multiGeoLine": [
        //         [
        //             { "latitude": 48.856614, "longitude": 2.352222 },
        //             { "latitude": 40.712775, "longitude": -74.005973 },
        //             { "latitude": 49.282729, "longitude": -123.120738 }
        //         ]
        //     ]
        // }];

        // Create image series
        var imageSeries = chart.series.push(new am4maps.MapImageSeries());

        // Create a circle image in image series template so it gets replicated to all new images
        var imageSeriesTemplate = imageSeries.mapImages.template;
        var circle = imageSeriesTemplate.createChild(am4core.Circle);
        circle.radius = 8;
        circle.fill = am4core.color("#B27799");
        circle.stroke = am4core.color("#FFFFFF");
        circle.strokeWidth = 2;
        circle.nonScaling = true;
        circle.tooltipText = "{title}";

        // Set property fields
        imageSeriesTemplate.propertyFields.latitude = "latitude";
        imageSeriesTemplate.propertyFields.longitude = "longitude";

        // Add data for the three cities
        imageSeries.data = [{
            "latitude": 48.856614,
            "longitude": 2.352222,
            "title": "Paris"
        }, {
            "latitude": 40.712775,
            "longitude": -74.005973,
            "title": "New York"
        }, {
            "latitude": 49.282729,
            "longitude": -123.120738,
            "title": "Vancouver"
        }];

        // Add zoom control
        chart.zoomControl = new am4maps.ZoomControl();

        // Add and configure small map
        chart.smallMap = new am4maps.SmallMap();
        chart.smallMap.series.push(polygonSeries);
    },[])

    return (<div id="chartdiv" className={css.geoMap}></div>);
}

export default GeoMap;