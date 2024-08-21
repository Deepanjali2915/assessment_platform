import Your_score from "./Your_score";
import Unattempted from "./Unattempted";
import Correct from "./Correct";
import Wrong from "./Wrong";
import "./score_contanier.css";

const Score_contanier = () => {
    return (
        <div className="score-contanier" >
            <Your_score />
            <div className="point-contanier-dektop" >
                <Unattempted />
                <Correct />
                <Wrong />
            </div>
            <div className="point-contanier-mobile" >
                <Unattempted />
                <Correct />
                <Wrong />
            </div>


        </div>
    );
};

export default Score_contanier;