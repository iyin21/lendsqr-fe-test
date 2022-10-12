import TopNav from './TopNav/topNav';
import Sidebar from './Sidebar/sidebar';
import styles from './layout.module.scss';
import { Drawer } from '@mantine/core';
import useWindowSize from '../../hooks/useWindowSize';
import { useState } from 'react';
import Avatar from './TopNav/assets/avatar.svg';
import DownArrow from './TopNav/assets/downArrow.svg';
import { IoCloseOutline } from 'react-icons/io5';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const window = useWindowSize();
    const [openSideBar, setOpenSideBar] = useState(false);

    return (
        <div className={styles.container}>
            <TopNav setOpenSideBar={setOpenSideBar} />

            <div className={styles.wrapper}>
                {window.width > 900 ? (
                    <div className={styles.sideBar}>
                        <Sidebar />
                    </div>
                ) : (
                    <Drawer
                        opened={openSideBar}
                        onClose={() => setOpenSideBar(false)}
                        size="75%"
                        withCloseButton={false}
                        overlayBlur={2}
                        overlayColor="#132013"
                        overlayOpacity={0.5}
                    >
                        <div className={styles.closeMenu}>
                            <IoCloseOutline onClick={() => setOpenSideBar(false)} onKeyDown={() => setOpenSideBar(false)} size="2em" />
                        </div>
                        <div className={styles.info_container}>
                            <img src={Avatar} className={styles.avatar} alt="" />
                            <p>Adedeji</p>
                            <img src={DownArrow} alt="" />
                        </div>
                        <hr className={styles.line} />
                        <div className={styles.sideBar}>
                            <Sidebar />
                        </div>
                    </Drawer>
                )}

                <main>{children}</main>
            </div>
        </div>
    );
};
export default Layout;
