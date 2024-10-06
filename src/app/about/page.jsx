import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function About() {
    return (
        <>
            <Header />

            <div className="flex justify-center mt-20 md:mx-40 mx-3">
                <img src="about.png" className="object-cover" />
            </div>

            <div className="bg-white flex flex-col items-center mt-5 md:mx-72 md:py-32">
                <h1 className="font-Tangerine text-2xl md:text-6xl font-bold text-gray-500">This is our story</h1>

                <div className="flex flex-col justify-start gap-8 mt-8 max-w-3xl mx-auto text-gray-700 px-5">
                    <p className="text-xs md:text-lg leading-relaxed">
                        Welcome to <span className="font-semibold text-gray-900">Book Hub</span>, a platform born out of a passion to solve real-world problems and make a meaningful impact on our society. As two young entrepreneurs, we embarked on our development journey in our early twenties, driven by a desire to create innovative solutions that make a difference.
                    </p>

                    <p className="text-xs md:text-lg leading-relaxed">
                        After working on several exciting projects, we turned our attention to tackling the challenges that matter most to us. As avid readers and entrepreneurs, we often found ourselves facing a common dilemma: the high cost of buying new books. We realized that our shelves were filled with books we no longer needed, while others in our community were searching for the same titles.
                    </p>

                    <p className="text-xs md:text-lg leading-relaxed">
                        This sparked an idea – what if we could create a platform that connects book lovers, allowing them to share, exchange, or sell their gently used books? <span className="font-semibold text-gray-900">Book Hub</span> was born, with the mission of bridging the gap between book owners and seekers, while promoting sustainability and community engagement.
                    </p>

                    <p className="text-xs md:text-lg leading-relaxed">
                        Our platform is designed to be user-friendly and accessible, enabling you to discover books listed by people in your vicinity. With just a few clicks, you can request a callback from the book owner and arrange a meetup to exchange or purchase the book. By leveraging the power of sharing and collaboration, we aim to make reading more affordable, convenient, and enjoyable for everyone.
                    </p>
                </div>
            </div>

            <Footer/>
        </>
    )
}