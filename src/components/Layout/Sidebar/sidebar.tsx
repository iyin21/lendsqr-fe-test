import { NavLink } from "react-router-dom";
import {ReactComponent as SwitchIcon} from "./assets/switch.svg";
import {ReactComponent as DashboardIcon} from "./assets/dashboard.svg";
import {ReactComponent as DownArrow} from "./assets/downArrow.svg";
import { sidebarRoutes } from "./utils/routes";
import styles from "./sidebar.module.scss"



const Sidebar =()=>{
    function changeStyle(active: boolean) {
        
        return active
          ? {
            color: "#213F7D",
              backgroundColor: "rgba(57, 205, 204, 1)",
            }
          : {};
      }
      
    return(
        <aside >
            <ul>
                <li className={styles.first_nav}>
                    <SwitchIcon/>
                    <p>Switch Organization</p>
                    <DownArrow/>
                </li>
                <li className={styles.first_nav}>
                    <DashboardIcon/>
                    <p>Dashboard</p>
                    
                </li>
                {sidebarRoutes.map((item, index)=>
                item.route ?(
                    <li key={index}>
                    <NavLink to={item.route||""} style={({ isActive }) => changeStyle(isActive)}>
                        {item.icon &&<item.icon fill="currentColor" />}
                        {item.title}
                    </NavLink>
                </li>
                ):(
                    <li key={index} className={styles.section}>
                        
                        {item.title}
                    </li>
                ))}
                
            </ul>
        </aside>
    )
}

export default Sidebar;