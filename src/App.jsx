import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import React from "react";  
import FAQ from "./components/Faq";

const Faqs = [
  { question: "What is AN Systems?", answer: "AN Systems is an IT services company offering solutions in Cloud, AI, Cybersecurity, and more." },
  { question: "Which industries do you serve?", answer: "We work across multiple industries like finance, healthcare, e-commerce, and startups." },
  { question: "How can I contact your team?", answer: "You can reach us via our contact page or email us at info@ansystems.com." },

  { question: "Do you provide automated QA testing?", answer: "Yes, we provide manual as well as automated testing using industry-standard tools." },
  { question: "Can you migrate on-premise systems to the cloud?", answer: "Absolutely. We specialize in cloud migration, DevOps, and platform engineering." },
  { question: "Do you offer cybersecurity audits?", answer: "Yes, we conduct vulnerability assessments, penetration testing, and full security audits." },
];

const App = () => {
  return (
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen pt-5 flex flex-col">
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Services />
        <About />
        <Contact />
        <FAQ faqs={Faqs} title={"Frequently Asked Questions" } />
        <Footer />
      </div>
    
  );
}
export default App;