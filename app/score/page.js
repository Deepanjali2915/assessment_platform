import Header from "../instruction/Header";
import "../instruction/component.css";
import Question_point from "./Questions_point";
import Score_contanier from "./Score_contanier";
import Question from "./Question";
import "./score_contanier.css";
import Unattempted_question from "./Unattempted_question";

const Page = () => {
    return (
        <>
            <Header />
            <div className="main-container" >
                <Score_contanier />
                <div className="mobile-question-container" >
                    <div className="check-text" >CHECK YOUR SCORE  </div>
                    <div className="line" ></div>
                    <Question />
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
                    </div>
                    <div className="line2" ></div>
                    <Question_point />
                    <Question_point />
                    <Question_point />
                    <Question_point />
                    <Question_point />
                    <Unattempted_question />
                </div>
            </div >
        </>
    );
};

export default Page;


