import "./pagination.css";

const Pagination = () => {
    return (
        <div class="pagination">
            <a href="#" className="start" >&lsaquo;</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">7</a>
            <a href="#">8</a>
            <a href="#" className="end" >&rsaquo;</a>
        </div>
    );
};

export default Pagination;  




// display: flex;
// justify-content: center;
// align-items: center;
// gap: 16px;



// display: flex;
// width: 30px;
// padding: 7px 10px 6px 10px;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// gap: 10px;