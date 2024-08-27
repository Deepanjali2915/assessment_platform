import Question from "../assessment/Question";

const Question_point = () => {
    return (
        <>
            <div className="main-question-point" >
                <div className="question-point" >
                    <img className="question-point-img" src="Check.png" />
                    <div className="question-point-text" >10</div>
                    <div className="question-point-text" >Q1</div>
                    <img className="question-point-img-collapse" src="expand.png" />
                </div>
            </div>
            <div className="line2" ></div>
        </>
    );
};

export default Question_point;  