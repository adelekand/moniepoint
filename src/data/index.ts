import { TopSectionData, MiddleSectionData, BottomSectionData } from "@/types";

export const topSectionData: TopSectionData = {
  bannerTitle:
    "Open a NorthOne Account for one low monthly fee<sup className='font-features sups'>1</sup>",
  subTitle:
    "Get a smart, digital Deposit Account for one low monthly fee<sup className='font-features sups'>1</sup>. Join now with no commitments, cancel anytime.",
  pricing: {
    amount: "$10",
    duration: "per month",
    terms: "There is a $15 fee for outgoing and incoming wires",
  },
  services: [
    { id: 1, name: "ACH Payments" },
    { id: 2, name: "Deposits" },
    { id: 3, name: "Transfers" },
    { id: 4, name: "Purchases" },
    { id: 5, name: "Envelopes" },
    { id: 6, name: "App Integrations" },
  ],
};

export const middleSectionData: MiddleSectionData = {
  title: "Radically transparent pricing.",
  subTitle:
    "Business builders need to understand their costs.<br />That is why we made our pricing simple",
};

export const bottomSectionData: BottomSectionData = {
  title: "Other Fees",
  subTitle: "We don't hide fees in fine print, they're right here.",
  pricing: {
    amount: "$10",
    tagLine: "Domestic Wire Transfer",
    terms:
      "Pay $15 whenever you send or receive a domestic wire transfer. We work hard to this fee low.",
  },
};
