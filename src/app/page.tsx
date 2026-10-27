import { ClosingCta } from "@/features/home/ClosingCta";
import { DeliveryStory } from "@/features/home/DeliveryStory";
import { Disciplines } from "@/features/home/Disciplines";
import { EvidenceStudies } from "@/features/home/EvidenceStudies";
import { Hero } from "@/features/home/Hero";
import { LivingBlueprint } from "@/features/home/LivingBlueprint";
import { Position } from "@/features/home/Position";
import { SelectedWork } from "@/features/home/SelectedWork";
import { pageMetadata, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from "@/lib/seo";

export const metadata = pageMetadata({ title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION, path: "/" });

export default function Home() {
  return (
    <>
      <Hero />
      <Position />
      <DeliveryStory />
      <LivingBlueprint />
      <EvidenceStudies />
      <SelectedWork />
      <Disciplines />
      <ClosingCta />
    </>
  );
}
