import "./pagination.css";

const Pagination = () => {
    return (
        <div class="pagination">
            <div href="#" className="start" >&lsaquo;</div>
            <a href="#" className="page" >1</a>
            <a href="#" className="page" >2</a>
            <a href="#" className="page" >3</a>
            <a href="#" className="page" >4</a>
            <a href="#" className="page" >5</a>
            <a href="#" className="page" >6</a>
            <a href="#" className="page" >7</a>
            <a href="#" className="page" >8</a>
            <div href="#" className="end" >&rsaquo;</div>
        </div>
    );
};

export default Pagination;

