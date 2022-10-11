import LendsqrLogo from "../../assets/icons/lendsqr.svg";
import styles from "./index.module.scss";
import Input from "../../components/Input/input";
import Button from "../../components/Button/button";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LoginImg from "./assets/loginImg.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <img src={LendsqrLogo} className={styles.logo} alt="Lendsqr" />

        <div>
          <img src={LoginImg} alt="Image" />
        </div>
      </div>
      <div className={styles.rightContent}>
        <h2 data-testid="main-heading">Welcome!</h2>
        <h5 data-testid="sub-heading">Enter details to login.</h5>
        <div className={styles.input_container}>
          <Input data-testid='email_input' type="text" placeholder="Email" className={styles.input} />
        </div>
        <div className={styles.input_container}>
          <Input data-testid='password_input'type="text" placeholder="password" className={styles.input} suffix={<p>Show</p>} />
        </div>
        <a href="#" className={styles.forgot_password}>FORGOT PASSWORD</a>
        <Button variant="primary" onClick={()=>navigate("/user")}>LOG IN</Button>
      </div>
    </div>
  );
};
export default Login;
