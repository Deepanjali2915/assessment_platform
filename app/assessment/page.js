import HeaderAssessment from "./HeaderAssessment";
import Timer from "./Timer";
import "./assessment.css"
import Assessment from "./Assessment";
// import 
const Page = () => {
    return (
        <>
            <div  >
                <HeaderAssessment />
                {/* {<Timer /> */}
                <Assessment/>
            </div>
        </>
    );
};

export default Page;



