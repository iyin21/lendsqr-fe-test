import styles from "./card.module.scss";
import UserIcon from "../../assets/users.svg";
import UserLoanIcon from "../../assets/usersLoan.svg";
import UserSavingsIcon from "../../assets/userSavings.svg";
import ActiveUserIcon from "../../assets/activeUsers.svg";

const cardContent=[
    {icon:UserIcon, title: "USERS", quantity:"2,453" },
    {icon:ActiveUserIcon, title: "ACTIVE Users", quantity:"2,453" },
    {icon:UserLoanIcon, title: "USERS With LOANS", quantity:"2,453" },
    
    {icon:UserSavingsIcon, title: "USERS WITH SAVINGS", quantity:"2,453" }
]
const Card=()=>{
    return(
        <div className={styles.cardContainer} data-testid="card">
            {cardContent.map((item, index)=>(
                <div key={index} className={styles.card}>
                <img src={item.icon} alt="" />
                <p>{item.title}</p>
                <h5>{item.quantity}</h5>
            </div>
            ))}
            
        </div>
    )
}

export default Card;