import { ClosingCta } from "@/features/home/ClosingCta";
import { DeliveryStory } from "@/features/home/DeliveryStory";
import { Disciplines } from "@/features/home/Disciplines";
import { EvidenceStudies } from "@/features/home/EvidenceStudies";
import { Hero } from "@/features/home/Hero";
import { Position } from "@/features/home/Position";
import { SelectedWork } from "@/features/home/SelectedWork";

export default function Home() {
  return (
    <>
      <Hero />
      <Position />
      <DeliveryStory />
      <EvidenceStudies />
      <SelectedWork />
      <Disciplines />
      <ClosingCta />
    </>
  );
}
