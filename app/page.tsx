import Image from "next/image";
import Navbar from "./components/navbar";
import PapersCarousel from "./components/carousel";
import Logos from "./components/logos";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-offoffwhite">
      <Navbar></Navbar>
      <div className="px-24">
      <h1 className="pt-48 text-6xl w-2/3 font-serif">We're a group of MIT students conducting research to <span className="text-purple-600">reduce risk from advanced AI</span>.</h1>
      <h2 className="pt-16 text-lg w-2/3 font-sans">We think that reducing risks from advanced artificial intelligence may be one of the most important problems of our time. We also think it’s a highly interesting and exciting problem, with open opportunities for many more researchers to make progress on it.<br/><br/>
      MAIA supports undergraduate and graduate students in conducting research relevant to reducing risks from advanced AI. <br/><br/>We also run a semester-long introductory reading group on AI safety, including both a technical machine learning track and a policy track.</h2>

      <a href="https://www.mitalignment.org/aisf-ml"><h2 className="pt-12 text-lg underline">Apply to our technical AI safety program &rarr;</h2></a>
      <a href="https://www.mitalignment.org/aisf-policy"><h2 className="pt-2 text-lg underline">Apply to our policy AI safety program &rarr;</h2></a>

      <h2 className="pt-20 text-3xl w-2/3 font-serif">Selected Research</h2>
      <PapersCarousel></PapersCarousel>

      <h2 className="pt-12 text-3xl w-2/3 font-serif">Organizations we work with</h2>
      <p className="pt-12">This is a list of some of the organizations our members have worked with. Not all organisations listed endorse or are affiliated with MAIA.</p>
      <Logos></Logos>
      </div>
    </main>
  );
}
