import "./timer.css"

const Timer = () => {
    return (

        <div className="main-timer" >
            <div className="timer">
                <div className="timer-double">
                    <div className="settime" > 
                        <div className="setnumber">35:23</div>
                        <div className="settext" >min sec</div>
                    </div>

                </div>
            </div>
            <div className="timer-text" >Remaining Time</div>
        </div>

    );
};

export default Timer;
