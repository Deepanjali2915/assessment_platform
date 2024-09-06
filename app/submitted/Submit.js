import "./submit.css";

const Submit = () => {
    return (
        <>
            <div className="main-contanier" >
                <img className="tick" src="Tick.png" />
                <div className="main-text" >
                    <div className="h1">Successfully Sumbitted</div>
                    <div className="h3" >Thank you for completing the test!</div>
                    <div className="p" >Review your results and keep practicing. <br /> Great job and keep up the hard work!</div>
                </div>
                <a href="/score" className="text-name" >
                    <button className="button">Check Your Score</button>
                </a >
            </div>
        </>
    );
};

export default Submit;  