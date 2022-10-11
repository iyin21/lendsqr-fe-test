import { Table, Menu } from "@mantine/core";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { BiFilter } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { UserResponse } from "../../../../types/user.type";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import styles from "./usersTable.module.scss";
import { GrUserExpert } from "react-icons/gr";
import BlackListUser from "../../assets/blackListUser.svg";
import Input from "../../../../components/Input/input";
import Button from "../../../../components/Button/button";
import { useState } from "react";

interface Props {
  elements: UserResponse[];
}

const FilterMenu = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="">Organization</label>
        <select name="" id="">
          <option value="">Select</option>
        </select>
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="">Username</label>
        <Input className={styles.input} type="text" placeholder="User" />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="">Email</label>
        <Input className={styles.input} type="text" placeholder="Email" />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="">Date</label>
        <Input className={styles.input} type="date" placeholder="Date" />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="">Phone Number</label>
        <Input
          className={styles.input}
          type="text"
          placeholder="Phone Number"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="">Status</label>
        <select name="" id="">
          <option value="">Select</option>
        </select>
      </div>
      <div className={styles.btnContainer}>
        <Button variant="outline_deep_blue" className={styles.resetBtn}>
          Reset
        </Button>
        <Button variant="primary" className={styles.filterBtn}>
          Filter
        </Button>
      </div>
    </div>
  );
};
const UsersTable = ({ elements }: Props) => {
  const navigate = useNavigate();
  const rows = elements.map((element, index) => (
    <tr key={index}>
      <td>{element.orgName}</td>

      <td>{element.profile.firstName + " " + element.profile.lastName}</td>

      <td>{element.email}</td>

      <td>{element.phoneNumber}</td>

      <td>{dayjs(element.createdAt).format("MMMM D, YYYY h:mm A")}</td>

      <td>
        <Menu transition="fade">
          <Menu.Target data-testid="menu_icon">
            <IoEllipsisVerticalSharp />
          </Menu.Target>
          <Menu.Dropdown data-testid="menu_dropdown"> 
            <Menu.Item
              icon={<AiOutlineEye size={14} />}
              onClick={() => navigate(`/user/${element.id}`)}
            >
              View Details
            </Menu.Item>
            <Menu.Item icon={<img src={BlackListUser} alt="" />}>
              Blacklist User
            </Menu.Item>
            <Menu.Item icon={<GrUserExpert size={14} />}>
              Activate User
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </td>
    </tr>
  ));
  const tableHead = [
    "organization",
    "Username",
    "Email",
    "Phone number",
    "Date joined",
    "Status",
  ];

  const [filter, setFilter] = useState(false);
  return (
    <Table className={styles.table}>
      <thead>
        <tr>
          <>
            {tableHead.map((item, index) => (
              <th
                key={index}
                style={{
                  borderBottom: "none",
                  fontSize: "12px",
                }}
              >
                <p style={{ alignItems: "center", display: "flex" }}>
                  <span>{item}</span>
                  <span
                    style={{
                      paddingTop: "5px",
                      paddingLeft: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => setFilter((prev) => !prev)}
                    data-testid="filter_icon"
                  >
                    <BiFilter />
                  </span>{" "}
                </p>
              </th>
            ))}
            <th></th>
          </>
        </tr>
      </thead>
      {filter && (
        <span className={styles.filterMenu} data-testid="filter_menu">
          {" "}
          <FilterMenu />
        </span>
      )}
      <tbody>{rows}</tbody>
    </Table>
  );
};
export default UsersTable;
