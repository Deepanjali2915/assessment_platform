import "./globals.css";
import "./media_query.css"
import Header from "./components/Header";
import About from "./components/About";

export default function Home() {
  return (
    <div className="main" >
      <Header/>
      <About/>
    </div>
  );
}
