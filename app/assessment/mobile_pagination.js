import "./mobile_pagination.css";

const Mobile_pagination = () => {
    return (
        <div className="mobile-pagination">
            <a href="#" className="start" >&lsaquo;</a>
            <a href="#" className="page" >1</a>
            <div className="hidden" >...</div>
            <a href="#" className="page " >5</a>
            <div className="hidden">...</div>
            <a href="#" className="page " >8</a>
            <a href="#" className="end" >&rsaquo;</a>
        </div>
    );
};

export default Mobile_pagination;

