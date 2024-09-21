import "./globals.css";
import Header from "./instruction/Header";
import About from "./instruction/About";

export default function Home() {
  return (
    <div className="main" >
      <Header/>
      <About/>
    </div>
  );
}
