import "./globals.css";
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
