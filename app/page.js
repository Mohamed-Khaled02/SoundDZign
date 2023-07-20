"use client"
import {
  Header,
  Blog,
  Info,
  Tesimonials,
  Footer,
  Topics,
} from "./components";
import "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Info />
      <Topics />
      <Blog />
      <Tesimonials />
      <Footer />
    </>
  );
}
