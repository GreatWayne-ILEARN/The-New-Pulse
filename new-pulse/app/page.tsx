'use client'

import TopStories from "@/components/home/TopStories";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import { Children } from "react";

export default function Home() {
  return (
    <div className="">
      <Header />
      <TopStories/>
      <Footer />
    </div>
  );
}
