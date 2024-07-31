"use client"
import "./globals.css";
import "./media_query.css"
import Header from "./Component/Header";
import About from "./Component/About";
import Footer from "./Component/Footer";
export default function Home() {
  return (
    <div className="main" >
      <Header/>
      <About/>
      <Footer/>
    </div>
  );
}
