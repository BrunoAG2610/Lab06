import Image from "next/image";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Interests_Subjects from "./Components/Interests_Subjects/Interests_Subjects";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Interests_Subjects />
    </>
  );
}
