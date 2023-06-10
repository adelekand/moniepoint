import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { TopSectionData } from "@/types";
import Button from "./core/Button";
import { Typography } from "./core/Typography";

interface TopSectionProps {
  data: TopSectionData;
}

export default function TopSection({ data }: TopSectionProps) {
  return (
    <section className="top-section">
      <div className="banner">
        <Typography markdown variant="h1" text={data.bannerTitle} />
        <Typography
          className="font-light"
          markdown
          variant="lg"
          text={data.subTitle}
        />

        <Button to="https://join.northone.com/">Apply for an Account</Button>
      </div>
      <div className="poster-card">
        <Image
          className="wallet"
          src="/assets/images/wallet.png"
          width="0"
          height="0"
          sizes="100vw"
          alt="wallet"
          priority
        />
        <div className="top-section-price">
          <Typography
            variant="h1"
            className="top-pricing-amount"
            text={data.pricing.amount}
          />
          <Typography
            variant="md"
            className="text-primaryBlack font-bold"
            text={data.pricing.duration}
          />
        </div>
        <Typography variant="h3" text="No additional fees for:" />
        <ul className="services">
          {data.services.map((service) => (
            <li key={service.id}>
              <FaCheck />
              <Typography variant="md" text={service.name} />
            </li>
          ))}
        </ul>
        <Typography variant="xs" className="text-center" text={data.pricing.terms} />
      </div>
    </section>
  );
}
