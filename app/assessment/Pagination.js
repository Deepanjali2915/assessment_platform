import "./pagination.css";

const Pagination = () => {
    return (
        <div class="pagination">
            <a href="#" className="start" >&lsaquo;</a>
            <a href="#" className="page" >1</a>
            <a href="#" className="page hidden" >2</a>
            <a href="#" className="page hidden" >3</a>
            <a href="#" className="page hidden" >4</a>
            <a href="#" className="page " >5</a>
            <a href="#" className="page hidden" >6</a>
            <a href="#" className="page hidden" >7</a>
            <a href="#" className="page " >8</a>
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