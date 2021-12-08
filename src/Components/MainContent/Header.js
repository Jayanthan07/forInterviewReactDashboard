import css from "../../Styles/MainContent.module.css";

const Header = () => {
    return (
        <div className={css.Header}>
           
               
            <div className={css.headerLeft}> <i class="fas fa-search"></i><span className={css.MarginRight}>Search</span></div>
            <div className={css.headerRight}>
                <i class="fas fa-globe"></i>
                <i class="fas fa-comments"></i>
                <i class="fas fa-bell"></i>
                <span className={css.VerticalLine}></span>
                Jayanthan
                <img src="" />

                
                </div>
           

        
        </div>
    );

}
export default Header; 