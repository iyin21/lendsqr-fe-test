import Logo from "../../../assets/icons/lendsqr.svg";
import Input from "../../Input/input";
import Search from "./assets/search.svg";
import Bell from "./assets/bell.svg";
import Avatar from "./assets/avatar.svg";
import DownArrow from "./assets/downArrow.svg";
import styles from "./topNav.module.scss";
import { HiMenuAlt2 } from "react-icons/hi";
import { Dispatch, SetStateAction,  } from "react";

interface TopNavInterface {
  setOpenSideBar: Dispatch<SetStateAction<boolean>>;
}

const TopNav = ({ setOpenSideBar }: TopNavInterface) => {
  return (
    <nav className={styles.container}>
      <img src={Logo} alt="Lendsqr" className={styles.logo} />
      <div className={styles.menu}>
          <HiMenuAlt2 size={28} onClick={() => setOpenSideBar(true)} />
      </div>
      <div className={styles.input_container}>
        <Input
            placeholder="Search for anything"
            className={styles.search}
          suffix={
            <div className={styles.search_img}><img
            src={Search}
            
            alt="Search"
            
          /></div> 
            
            
          }

        />
      </div>

      <div className={styles.info_container}>
        <a href="">Docs</a>
        <img src={Bell} className={styles.bell} alt="" />
        <img src={Avatar} className={styles.avatar} alt="" />
        <p>Adedeji</p>
        <img src={DownArrow} alt="" />
      </div>
    </nav>
  );
};
export default TopNav;
