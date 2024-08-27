import "./mobile_pagination.css";

const Mobile_pagination = () => {
    return (
        <div className="mobile-pagination">
            <div href="#" className="start-pagination" >&lsaquo;</div>
            <a href="#" className="page" >1</a>
            <div className="hidden" >...</div>
            <a href="#" className="page " >5</a>
            <div className="hidden">...</div>
            <a href="#" className="page " >8</a>
            <div href="#" className="end-pagination" >&rsaquo;</div>
        </div>
    );
};

export default Mobile_pagination;

