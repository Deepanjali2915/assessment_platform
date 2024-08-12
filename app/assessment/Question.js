const Question = () => {
    return (
        <div className="main-question">
            <div className="question-score" >
                <div className="question-number" >
                    question 21
                </div>
                <div className="score" >
                    Score 10
                </div>
            </div>
            <div className="question-cantainer" >
                <div className="cantainer" >
                    <p>Which of the following committees recommended inclusion of fundamental duties?</p>
                    <form>
                        <label className="option">
                            <input type="radio" name="committee" />
                            Tarapore Committee
                        </label><br />
                        <label className="option">
                            <input type="radio" name="committee" value="radhakrishnan" />
                            Radha Krishnan Committee
                        </label><br />
                        <label className="option">
                            <input type="radio" name="committee" value="swaransingh" />
                            Swaran Singh Committee
                        </label><br />
                        <label className="option">
                            <input type="radio" name="committee" value="balwantraimehta" />
                            Balwantrai Mehta Committee
                        </label>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Question;  