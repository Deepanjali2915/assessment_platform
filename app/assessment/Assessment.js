import Filter from "./Filter";
import Questions from "./Questions";
const Assessment = () => {
    return (
        <div className="main-assesment-cantainer">
            <div className="assesment-cantainer">
                <div>
                    <Filter/>
                </div>
                <div>
                    <Questions/>
                </div>
            </div>
        </div>

    );
};

export default Assessment;  