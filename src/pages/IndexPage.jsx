import React from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import "./IndexPage.css";

function IndexPage() {
  return (
    <div className="wrap">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default IndexPage;
