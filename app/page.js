import "./globals.css";
import Header from "./instructon/Header";
import About from "./instructon/About";

export default function Home() {
  return (
    <div className="main" >
      <Header/>
      <About/>
    </div>
  );
}
