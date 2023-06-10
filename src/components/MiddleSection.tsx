import { MiddleSectionData } from "@/types";
import { Typography } from "./core/Typography";

interface MiddleSectionProps {
  data: MiddleSectionData;
}

export default function MiddleSection({ data }: MiddleSectionProps) {
  return (
    <section className="middle-section">
      <Typography variant="h2" className="text-center" text={data.title} />
      <Typography
        markdown
        variant="h2"
        className="tintedBlack"
        text={data.subTitle}
      />
    </section>
  );
}
