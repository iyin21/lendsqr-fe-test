import Layout from '../../components/Layout/layout';
import Card from './components/Card/card';
import { useGetUsers } from '../../hooks/users.hook';
import UsersTable from './components/UsersTable/usersTable';
import { useState, useMemo } from 'react';
import { Pagination } from '../../components/Pagination';
import styles from './index.module.scss';
import Paginate from '../../components/Paginate/pagination';
import { Loader } from '@mantine/core';

const User = () => {
    const { isLoading, userData } = useGetUsers();
    const [activePage, setPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const handleChange = (pageNumber: number) => {
        setPage(pageNumber);
    };
    const paginatedData = useMemo(() => {
        const firstPageIndex = (activePage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return userData?.slice(firstPageIndex, lastPageIndex);
    }, [activePage, userData]);

    const options = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    return (
        <Layout>
            {isLoading ? (
                <div className={styles.loader}>
                    <Loader />
                </div>
            ) : (
                <div>
                    <h3 data-testid="main-heading">Users</h3>
                    <Card data-testid="card" />
                    <div className={styles.tableContainer} data-testid="table-container">
                        <UsersTable elements={paginatedData} />
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.showing}>
                            <p>Showing</p>
                            <select value={pageSize} onChange={(event) => setPageSize(Number(event.currentTarget.value))}>
                                {options?.map((value: number) => (
                                    <option value={value} key={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                            <p>out of {userData.length}</p>
                        </div>
                        <Pagination currentPage={activePage} totalCount={userData.length} pageSize={pageSize} onPageChange={handleChange} />
                    </div>
                </div>
            )}
        </Layout>
    );
};
export default User;
