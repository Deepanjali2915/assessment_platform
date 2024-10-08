const Question = () => {
    return (

        <>
            <div className="main-question-point" >
                <div className="question-point" >
                    <div className="point" >
                        <img className="question-point-img" src="Check.png" />
                        <div className="question-point-text" >10</div>
                        <div className="question-point-text" >Q1</div>
                    </div>
                    <div className="point-img" >
                        <img className="question-point-img-collapse" src="Collapse Expand.png" />
                    </div>
                </div>
                <div className="question-point-cantainer" >
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
            <div className="line2" ></div>
            <div className="main-question-point" >
                <div className="question-point" >
                    <div className="point" >
                        <img className="question-point-img" src="wrong.svg" />
                        <div className="question-point-text" >10</div>
                        <div className="question-point-text" >Q1</div>
                    </div>
                    <div className="point-img" >
                        <img className="question-point-img-collapse" src="Collapse Expand.png" />
                    </div>
                </div>
                <div className="question-point-cantainer wrongg" >
                    <div className="question " >
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
            <div className="line2" ></div>
        </>
    );
};

export default Question;  