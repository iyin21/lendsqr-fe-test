import Layout from '../../components/Layout/layout';
import BackButton from './assets/backButton.svg';
import styles from './index.module.scss';
import Button from '../../components/Button/button';
import { useGetUserDetails } from '../../hooks/users.hook';
import { useParams } from 'react-router-dom';
import GeneralDetails from './components/GeneralDetails/generalDetails';
import { Loader } from '@mantine/core';
import PersonalInformation from './components/PersonalInformation/personalInformation';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const { id: id } = useParams<{ id: string }>();
    const { isLoading, userData } = useGetUserDetails({ id: id || '' });
    const navigate = useNavigate();

    const storedUserData = localStorage.getItem('userDetails');
    
    const storedData = storedUserData && JSON.parse(storedUserData);
    return (
        <Layout>
            {isLoading ? (
                <div className={styles.loader}>
                    <Loader />
                </div>
            ) : (
                <div>
                    <div className={styles.back} onClick={() => navigate(-1)} data-testid="backBtn">
                        <img src={BackButton} alt="" />

                        <p>Back to Users</p>
                    </div>

                    <div className={styles.header}>
                        <h3 data-testid="main-heading">User Details</h3>
                        <div className={styles.btn}>
                            <Button variant="outline_red" className={styles.blacklistBtn}>
                                BLACKLIST USER
                            </Button>
                            <Button variant="outline_blue" className={styles.activateBtn}>
                                ACTIVATE USER
                            </Button>
                        </div>
                    </div>
                    <GeneralDetails data={userData || storedData} />
                    <PersonalInformation data={userData} />
                </div>
            )}
        </Layout>
    );
};
export default UserDetails;
