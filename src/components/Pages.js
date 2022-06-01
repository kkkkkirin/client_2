import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "..";

const Pages = observer(() => {
    const { device } = useContext(Context)
    const pagesCount = Math.round(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="justify-content-center mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    )
})

export default Pages;