import styles from "./pagination.module.scss";
import { Pagination } from "@mantine/core";

interface IPaginationProps {
    page: number;
    total: number;
    onChange?: (page: number) => void;
    initialPage?: number;
    boundaries: number;
    //recordPerpage: number;
}

const Paginate= ({
    page,
    onChange,
    total,
    boundaries,
    initialPage,
    //recordPerpage,
}: IPaginationProps) => {

    return(
        <div className={styles.paginationContainer}>
                    <Pagination
                    // classNames={{
                    //     active: "text-white bg-dark-green-400 rounded-lg",
                    //     item: "border-none text-3sm md:text-3md",
                    //     dots: "text-neutral-50",
                    // }}
                    // classNames={{
                    //     //active: "text-white bg-dark-green-400 rounded-lg",
                    //     item: "border-none text-3sm md:text-3md",
                    //     dots: "text-neutral-50",
                    // }}
                    //position="center"
                    boundaries={boundaries}
                    page={page}
                    onChange={onChange}
                    // size="xs"
                    // spacing="xs"
                    total={total}
                    initialPage={initialPage}

                    className={styles.pagination}
                />
        </div>
    )
}

export default Paginate;