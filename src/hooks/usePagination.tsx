import { useMemo } from 'react';

interface PageControl {
    totalCount: number;
    pageSize: number;

    currentPage: number;
}

const range = (start: number, end: number) => {
    const length = end - start + 1;

    return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = (props: PageControl) => {
    const { totalCount, pageSize, currentPage } = props;
    const paginationRange = useMemo(() => {
        const siblingCount = 1;
        const totalPageCount = Math.ceil(totalCount / pageSize);
        const totalPageNumbers = siblingCount ? siblingCount + 5 : 1;

        // To determine range of page numbers displayed

        // CASE 1: when total number of pages is less than the number of pages we can show at a time
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }

        // To ensure left and right sibling index are within the range of 1 and total pageCount
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        //To be used when dots are do be displayed due to large number of pages.
        const DOTS = 1000;

        // CASE 2: don't show left dots, but show right dots
        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        // CASE 3: show left dots, but don't show right dots
        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [firstPageIndex, DOTS, ...rightRange];
        }

        // CASE 4: show both left and right dots
        if (leftSiblingIndex > 2 && rightSiblingIndex < totalPageCount) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [totalCount, pageSize, currentPage]);

    return paginationRange;
};
