import styles from './pagination.module.scss';
import { usePagination } from '../../hooks/usePagination';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface Iprop {
    currentPage: number;
    totalCount: number;
    onPageChange: (page: number) => void;
    pageSize: number;
}
const Pagination = ({ currentPage, totalCount, onPageChange, pageSize }: Iprop) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        pageSize
    });

    if (currentPage === 0 || (paginationRange && typeof paginationRange !== undefined && paginationRange.length < 2)) {
        return null;
    }

    const lastPage = paginationRange ? paginationRange[paginationRange.length - 1] : null;

    const onNext = () => {
        if (currentPage !== lastPage) {
            onPageChange(currentPage + 1);
        }
    };

    const onPrevious = () => {
        if (currentPage !== 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <div className={styles['paginationContainer']}>
            {currentPage != 1 && (
                <span onClick={onPrevious} className={styles['btn']}>
                    <AiOutlineLeft />
                    {/* &#60;{" "} */}
                </span>
            )}
            {paginationRange?.map((pageNumber: number) => {
                if (pageNumber === 1000) {
                    return <span key={pageNumber} className={styles.dots}>&#8230;</span>;
                }
                return (
                    <span key={pageNumber} className={` ${currentPage === pageNumber ? styles.pageActive: styles.pageNumbers}`} onClick={() => onPageChange(pageNumber)}>
                        {pageNumber}
                    </span>
                );
            })}
            {currentPage !== lastPage && (
                <span onClick={onNext} className={styles['btn']}>
                    <AiOutlineRight />
                    {/* &#62; */}
                </span>
            )}
        </div>
    );
};

export default Pagination;
