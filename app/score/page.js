import Header from "../instructon/Header";
import "../instructon/component.css";
// import "./score_contanier.css";
import Score_contanier from "./Score_contanier";
import "./score_contanier.css";

const Page = () => {
    return (
        <>
            <Header />
            <div className="main-container" >
                <Score_contanier />

            </div >
        </>
    );
};

export default Page;



