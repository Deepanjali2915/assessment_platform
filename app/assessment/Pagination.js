import "./pagination.css";

const Pagination = () => {
    return (
        <>
            <div class="pagination">
                <div href="#" className="arrow" >&lsaquo;</div>
                <a href="#" className="page hidden" >1</a>
                <div className="hidden dot-hidden " >...</div>
                <a href="#" className="page" >2</a>
                <a href="#" className="page" >3</a>
                <a href="#" className="page" >4</a>
                <a href="#" className="page hidden" >5</a>
                <div className="hidden dot-hidden" >...</div>
                <a href="#" className="page" >6</a>
                <a href="#" className="page" >7</a>
                <a href="#" className="page hidden" >8</a>
                <div href="#" className="arrow" >&rsaquo;</div>
            </div>
        </>
    );
};

export default Pagination;

