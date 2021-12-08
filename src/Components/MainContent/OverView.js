import css from "../../Styles/MainContent.module.css";
import React, { useState } from "react";

import Card from "./Card";
import Statitics from "./Statitics";
import GeoMap from "./GeoMap";

const OverView = () => {
    const staticData = [
        { title: "Total Views", cost: "235 k", color: "green", profit: true, percent: "33.33%" },
        { title: "Products Sold", cost: "2453", color: "green", profit: false, percent: "33.33%" },
        { title: "Total Earnings", cost: "$39k", color: "green", profit: true, percent: "33.33%" }]
    const [arry, setArry] = useState(staticData);


    return (
        <div>
            <h2 className={css.Heading}>Over View</h2>
            <div className={css.cardContainer}>
                {arry.map((res, index) => <Card data={res} index={index} />)}
            </div>
            <div className={css.chartContainer}>
                <div className={css.chartTitle}>Satistics</div>
                <Statitics />
            </div>
            <div className={css.geoChartContainer}>
                <div className={css.chartTitle}>Details On Map</div>

                <GeoMap />
            </div>
        </div>
    );

}
export default OverView;