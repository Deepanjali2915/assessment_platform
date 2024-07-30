"use client"
import "./globals.css";
import "./media_query.css"
import Header from "./Component/Header";
import About from "./Component/About";
export default function Home() {
  return (
    <div className="main" >
      <Header/>
      <About/>
    </div>
  );
}
