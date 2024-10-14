import Image from "next/image";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";
import Comparison from "@/components/Comparisons";
import ExploreCategories from "@/components/UserGuide";

export default function Home() {
  return (
    <div>
    <Header/>
    <LandingPage/>
    <Comparison/>
    <ExploreCategories/>
    <Footer/>
    </div>
  );
}
