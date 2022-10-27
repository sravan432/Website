import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
function PaginationComp({
    recordsPerPage,
    totalRecords,
    paginate,
    currentPage,
}) {
    let items2 = [];
    const [start, setStart] = useState(1);
    for (let i = start; i <= Math.ceil(totalRecords / recordsPerPage) && i > 0; i++) {
        if (i <= start + 3) {
            items2.push(
                <Pagination.Item
                    active={currentPage === i}
                    activeLabel={""}
                    key={i}
                    onClick={() => paginate(i)}
                >
                    {i}
                </Pagination.Item>
            );
        }
    }

    return (
        <>
            <Pagination className="mt-4 ms-2">
                <Pagination.First
                    onClick={() => {
                        paginate(1);
                        setStart(1);
                    }}
                    disabled={start < 2}
                />
                <Pagination.Prev
                    onClick={() => {
                        if (currentPage - 1 !== 0) paginate(currentPage - 1);
                        setStart(start - 1);
                    }}
                    disabled={start < 2}
                />
                {items2}
                <Pagination.Ellipsis
                    hidden={start > Math.ceil(totalRecords / recordsPerPage) - 4}
                />
                <Pagination.Item
                    hidden={start > Math.ceil(totalRecords / recordsPerPage) - 4}
                    onClick={() => {
                        paginate(Math.ceil(totalRecords / recordsPerPage));
                        setStart(Math.ceil(totalRecords / recordsPerPage) - 3);
                    }}>
                    {Math.ceil(totalRecords / recordsPerPage)}
                </Pagination.Item>
                <Pagination.Next
                    onClick={() => {
                        if (currentPage + 1 <= Math.ceil(totalRecords / recordsPerPage)) paginate(currentPage + 1);
                        setStart(start + 1);
                        console.log(currentPage);
                    }}
                    disabled={start > Math.ceil(totalRecords / recordsPerPage) - 4}
                />
                <Pagination.Last
                    onClick={() => {
                        paginate(Math.ceil(totalRecords / recordsPerPage));
                        setStart(Math.ceil(totalRecords / recordsPerPage) - 3);
                    }}
                    disabled={start > Math.ceil(totalRecords / recordsPerPage) - 4}
                />
            </Pagination>
        </>
    );
}

export default PaginationComp;
