import React from "react";
import Header from "@/composite/header/index";
import JourneyStart from "@/view/journeyStart/index";
import Footer from "@/composite/footer/footer";
const Index = () => {
  return (
    <div>
      <div className="container mx-auto">
      <Header />
      </div>
      <JourneyStart />
      <Footer />
</div>
  );
};
export default Index;
