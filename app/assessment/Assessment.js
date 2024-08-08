import Filter from "./Filter";
import Questions from "./Questions";
const Assessment = () => {
    return (
        <div className="main-assesmentcantainer">
            <div className="assesmentcantainer">
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