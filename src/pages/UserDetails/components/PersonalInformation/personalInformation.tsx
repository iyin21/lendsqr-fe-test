import styles from './personalInformation.module.scss';
import { UserResponse } from '../../../../types/user.type';

const PersonalInformation = ({ data }: { data?: UserResponse }) => {
    return (
        <div className={styles.container} data-testid="personalContainer">
            <div>
                <h6>Personal Information</h6>
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        <small>FULL NAME</small>
                        <h6>{data?.profile.firstName + ' ' + data?.profile.lastName}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>PHONE NUMBER</small>
                        <h6>{data?.profile.phoneNumber}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>EMAIL ADDRESS</small>
                        <h6>{data?.email}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>BVN</small>
                        <h6>{data?.profile.bvn}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>GENDER</small>
                        <h6>{data?.profile.gender}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>MARITAL STATUS</small>
                        <h6>Single</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>CHILDREN</small>
                        <h6>None</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>TYPE OF RESIDENCE</small>
                        <h6>Parent&apos;s Apartment</h6>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <h6 className={styles.title}>Education and Employment</h6>
                <div className={styles.educationGridContainer}>
                    <div className={styles.grid1}>
                        <small>LEVEL OF EDUCATION</small>
                        <h6>{data?.education.level}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>EMPLOYMENT STATUS</small>
                        <h6>{data?.education.employmentStatus}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>SECTOR OF EMPLOYMENT</small>
                        <h6>{data?.education.sector}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>DURATION</small>
                        <h6>{data?.education.duration}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>OFFICE EMAIL</small>
                        <h6>{data?.education.officeEmail}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>MONTHLY INCOME</small>
                        <h6>₦{data?.education.monthlyIncome[0].toLocaleString() + '-  ₦' + data?.education.monthlyIncome[1].toLocaleString()}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>LOAN REPAYMENT</small>
                        <h6>{data?.education.loanRepayment.toLocaleString()}</h6>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <h6 className={styles.title}>Socials</h6>
                <div className={styles.gridContainer}>
                    <div className={styles.grid1}>
                        <small>TWITTER</small>
                        <h6>{data?.socials.twitter}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>FACEBOOK</small>
                        <h6>{data?.socials.facebook}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>INSTAGRAM</small>
                        <h6>{data?.socials.instagram}</h6>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <h6 className={styles.title}>Guarantor</h6>
                <div className={styles.gridContainer}>
                    <div className={styles.grid1}>
                        <small>FULL NAME</small>
                        <h6>{data?.guarantor.firstName + ' ' + data?.guarantor.lastName}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>PHONE NUMBER</small>
                        <h6>{data?.guarantor.phoneNumber}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>EMAIL ADDRESS</small>
                        <h6>{data?.email}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>RELATIONSHIP</small>
                        <h6>Sister</h6>
                    </div>
                </div>
            </div>
            <div className={`${styles.section} ${styles.lastSection}`}>
                <div className={styles.gridContainer}>
                    <div className={styles.grid1}>
                        <small>FULL NAME</small>
                        <h6>{data?.guarantor.firstName + ' ' + data?.guarantor.lastName}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>PHONE NUMBER</small>
                        <h6>{data?.guarantor.phoneNumber}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>EMAIL ADDRESS</small>
                        <h6>{data?.email}</h6>
                    </div>
                    <div className={styles.grid}>
                        <small>RELATIONSHIP</small>
                        <h6>Sister</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PersonalInformation;
