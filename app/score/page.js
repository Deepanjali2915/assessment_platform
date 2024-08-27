import Header from "../instructon/Header";
import "../instructon/component.css";
import Question_point from "./Questions_point";
import Score_contanier from "./Score_contanier";
import Question from "./Question";
import "./score_contanier.css";

const Page = () => {
    return (
        <>
            <Header />
            <div className="main-container" >
                <Score_contanier />
                <div className="check-text" >CHECK YOUR SCORE  </div>
                <div className="line" ></div>
                <Question />
                <div className="main-question-point" >
                    <div className="question-point" >
                        <img className="question-point-img" src="wrong.svg" />
                        <div className="question-point-text" >10</div>
                        <div className="question-point-text" >Q1</div>
                        <img className="question-point-img-collapse" src="expand.png" />
                    </div>
                </div>
                <div className="line2" ></div>
                <Question_point />
                <Question_point />
                <Question_point />
                <Question_point />
                <Question_point />
            </div >
        </>
    );
};

export default Page;


