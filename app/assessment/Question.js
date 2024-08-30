import "./question.css";

const Question = () => {
    return (
        <>
            <div className="main-question-container" >
                <div className="question-score" >
                    <div className="question-number" >
                        question 21
                    </div>
                    <div className="score" >
                        Score 10
                    </div>
                </div>
                <div className="question-cantainer" >
                    <div className="question" >
                        <p>Which of the following committees recommended inclusion of fundamental duties?</p>
                        <form>
                            <label className="option">
                                <input type="radio" name="committee" className="single-option" />
                                Tarapore Committee
                            </label><br />
                            <label className="option">
                                <input type="radio" name="committee" value="radhakrishnan" className="single-option" />
                                Radha Krishnan Committee
                            </label><br />
                            <label className="option">
                                <input type="radio" name="committee" value="swaransingh" className="single-option" />
                                Swaran Singh Committee
                            </label><br />
                            <label className="option">
                                <input type="radio" name="committee" value="balwantraimehta" className="single-option" />
                                Balwantrai Mehta Committee
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Question;



