import css from "../../Styles/MainContent.module.css"
import MicroCharts from "./MicroCharts";

const Card=(props)=>{
    const {title,cost,color,percent,profit}=props.data;

    return(<div className={css.card}>
        <div>{title}

        </div>
        <div className={css.card_cost}>
            {cost}
            <div className={profit ? css.Profit :css.Loss}>{percent}</div>

        </div>
        <div className={css.card_chart}><MicroCharts  index={props.index}/></div>
    </div>);
}

export default Card;