import TopNav from "./TopNav/topNav";
import Sidebar from "./Sidebar/sidebar";
import styles from "./layout.module.scss";

const Layout=({children}:{children:React.ReactNode})=>{
    return(
        <div className={styles.container}>
            <TopNav/>
            <div className={styles.wrapper}>
                <div className={styles.sideBar}>
                <Sidebar/>
                </div>
                
                <main>{children}</main>
            </div>
        </div>
    )
}
export default Layout;