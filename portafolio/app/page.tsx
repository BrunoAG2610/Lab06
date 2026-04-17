import Image from "next/image";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Interests_Subjects from "./Components/Interests_Subjects/Interests_Subjects";
import CV from "./Components/CV/CV";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Interests_Subjects />
    <CV />
    </>
  );
}
