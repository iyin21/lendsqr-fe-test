import styles from "./generalDetails.module.scss";
import Star from "../../assets/star.svg";
import MarkedStar from "../../assets/markedStar.svg";
import { useState } from "react";
import { UserResponse } from "../../../../types/user.type";


const GeneralDetails = ({data}:{data?:UserResponse}) => {
    const links=["General Details", "Documents", "Bank Details", "Loans", "Savings", "App and System"];

    const [activeLink, setActiveLink]= useState("General Details")
  return (
    <div className={styles.container} data-testid="generalContainer">
      <div className={styles.top_content}>
        <img src={data?.profile.avatar} width={100} height={100} alt="" />
        <div className={styles.nameContainer}>
          <h4>{data?.profile.firstName+ " "+data?.profile.lastName}</h4>
          <p>LSQFf587g90</p>
        </div>
        <div className={styles.userContainer}>
          <p> User’s Tier</p>
          <div className={styles.starsContainer}>
            <img src={MarkedStar} alt="marked star" />
            <img src={Star} alt="star" />
            <img src={Star} alt="star" />
          </div>
        </div>
        <div className={styles.accountContainer}>
          <h3>₦{data?.accountBalance}</h3>
          <small>{data?.accountNumber}/Providus Bank</small>
        </div>
      </div>
      <div className={styles.linkContainer}>
        {links.map((item)=>(
            <p  key={item} onClick={()=>setActiveLink(item)} className={item ===activeLink ? styles.active : styles.link}>{item}</p>
        ))}
      </div>
    </div>
  );
};
export default GeneralDetails;
