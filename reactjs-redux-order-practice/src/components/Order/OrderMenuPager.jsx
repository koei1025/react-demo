import React, {PropTypes} from 'react'

const OrderMenuPager = ({pagesCount, currentPage, changeMenuPageBy}) => {
    const hasNextPage = pagesCount - currentPage > 1 // 是否還有下一頁
    const hasPrevPage = currentPage - 1 > -1 // 是否還有上一頁
    const nextPage = hasNextPage
        ? currentPage + 1
        : currentPage
    const prevPage = hasPrevPage
        ? currentPage - 1
        : currentPage

    return (
        <div className="item-nav">
            <div className="btn-group btn-group-justified" role="group" aria-label="MenuItemNav">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-lg btn-default" onClick={() => changeMenuPageBy(prevPage)} disabled={!hasPrevPage
                        ? 'disabled'
                        : ''}>
                        <span className="glyphicon glyphicon-backward"></span>
                    </button>
                </div>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-lg btn-default" onClick={() => changeMenuPageBy(nextPage)} disabled={!hasNextPage
                        ? 'disabled'
                        : ''}>
                        <span className="glyphicon glyphicon-forward"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
OrderMenuPager.propTypes = {
    pagesCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    changeMenuPageBy: PropTypes.func.isRequired
}

export default OrderMenuPager
