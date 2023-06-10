import TopSection from "@/components/TopSection";
import BottomSection from "@/components/BottomSection";
import MiddleSection from "@/components/MiddleSection";
import { topSectionData, middleSectionData, bottomSectionData } from "@/data";

export default function Home() {
  return (
    <main className="main-container">
      <TopSection data={topSectionData} />
      <MiddleSection data={middleSectionData} />
      <BottomSection data={bottomSectionData} />
    </main>
  );
}
