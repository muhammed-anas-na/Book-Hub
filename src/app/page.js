import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";
import Comparison from "@/components/Comparisons";
import ExploreCategories from "@/components/UserGuide";
import FaqSection from "@/components/FAQ";

export default function Home() {
  return (
    <div>
    <Header/>
    <LandingPage/>
    <Comparison/>
    <ExploreCategories/>
    <FaqSection/>
    <Footer/>
    </div>
  );
}
