import css from "../../Styles/SideNavigation.module.css";

const ListOptions=()=>{
    return(
        <div>
            <ul className={css.unorderedList}>
                <li className={css.list}>
      <i class="fas fa-home"></i> Home
                </li>
                <li className={css.activeList}>
                    <i class="fas fa-chart-line"></i>Dashboard
                </li>
                <li className={css.list}>
                    <i class="fas fa-inbox"></i> Inbox
                </li>
                <li className={css.list}>
<i class="fas fa-toolbox"></i>   Products
                </li>
                <li className={css.list}>
                    <i class="fas fa-anchor"></i> Invoices
                </li>
                <li className={css.list}>
                    <i class="far fa-address-card"></i> Customers
                </li>
                <li className={css.list}>
                    <i class="fas fa-comments"></i>  Chat Room
                </li>
                <li className={css.list}>
                    <i class="fas fa-calendar-day"></i>
  Calender
                </li>
                <li className={css.list}>
       <i class="far fa-question-circle"></i> Help Center
                </li>
                <li className={css.list}>
      <i class="fas fa-user-cog"></i>  Settings
                </li>
            </ul>
        </div>
    );
}

export default ListOptions;