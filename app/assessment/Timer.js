import "./assessment.css"

const Timer = () => {
    return (
        <>
            <div className="main-timer" >
                <div className="timer">
                    <div className="timer-double"></div>

                </div>
                <div className="timer-text" >Remaining Time</div>
            </div>

            <div className="mobile-timer-filter" >
                <div className="mobile-timer" >
                    <div className="mobile-timer-double"></div>
                </div>
                <div className="mobile-filter" >
                    <img className="filter" src="Mobile.png" />
                </div>
            </div>

        </>
    );
};

export default Timer;

