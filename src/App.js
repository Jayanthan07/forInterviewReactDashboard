import MainContent from "./Components/MainContent/MainContent";
import SideNav from "./Components/SideNav/SideNav";
import css from "./Styles/Application.module.css";

function App() {
  let rootElement=document.getElementById("root");
  rootElement.style.height="100%";
  return (
    <div className={css.Container}>
      <div className={css.SideNav}>
  <SideNav />
      </div>
      <div className={css.MainContent}> 
  <MainContent />
      </div>
  </div>
  );
}

export default App;
