import HeaderAssessment from "./HeaderAssessment";
import Timer from "./Timer";
import "./assessment.css"
import Question from "./Assessment";

const Assessment = () => {
    return (
        <>
            <div  >
                <HeaderAssessment />
                {/* <Timer /> */}
                <Question/>
            </div>
        </>
    );
};

export default Assessment;



