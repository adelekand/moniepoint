import AmericanFlag from "./icons/AmericanFlag";
import { BottomSectionData } from "@/types";
import { Typography } from "./core/Typography";

interface BottomSectionProps {
  data: BottomSectionData;
}

export default function BottomSection({ data }: BottomSectionProps) {
  return (
    <section className="bottom-section">
      <div className="content">
        <Typography variant="h2" text={data.title} />
        <Typography
          markdown
          variant="md"
          className="text-center"
          text={data.subTitle}
        />
        <div className="bottom-section-price">
          <AmericanFlag />
          <div className="price-content">
            <Typography
            variant="h1"
            className="bottom-pricing-amount"
            text={data.pricing.amount}
          />
            <Typography variant="sm" text={data.pricing.tagLine} />
          </div>
        </div>

        <Typography
          variant="md"
          className="text-center"
          text={data.pricing.terms}
        />
      </div>
    </section>
  );
}
