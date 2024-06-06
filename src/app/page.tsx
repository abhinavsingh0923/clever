import Background from "@/components/Background";
import CTA from "@/components/CTA";
import {Hero} from "@/components/Hero";
import KeybProblem from "@/components/KeybProblem";
import { Crousel } from "@/components/Crousel";
import Infinitecrousel from "@/components/ui/infinite-crousel";
import Review from "@/components/Review";
import Problem from "@/components/Problem";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section: */}
      {/* Create an eye-catching hero section with a compelling catchphrase that reflects innovation and creativity. */}
      <Hero/>
      {/* Key Problems Solved Section: */}
      {/* Create a section which showcases the key issues targeted by Crest. */}
      <KeybProblem/>
      {/* Key Metrics Section: */}
      {/* Section with different dummy icons explaining why someone should choose Crest for their Inventory management. */}
      <Infinitecrousel/>
      {/* Reviews Section: */}
      {/* Implement a reviews section, signaling credibility for visitors to sign up. */}
      <Review/>
      {/* Problem Target Section: */}
      {/* Create a section which showcases various tabs explaining various features . */}
      <Problem/>
      {/* CTA Section : */}
      {/* (Grow faster than you think) Create a section which triggers a CTA for the user. */}
      <CTA/>
    </main>
  );
}
