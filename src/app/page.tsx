import { ClosingCta } from "@/features/home/ClosingCta";
import { Disciplines } from "@/features/home/Disciplines";
import { Hero } from "@/features/home/Hero";
import { Position } from "@/features/home/Position";
import { SelectedWork } from "@/features/home/SelectedWork";

export default function Home() {
  return (
    <>
      <Hero />
      <Position />
      <SelectedWork />
      <Disciplines />
      <ClosingCta />
    </>
  );
}
