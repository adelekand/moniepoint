type Service = {
  id: number,
  name: string,
}

type TopSectionPricing = {
  amount: string,
  duration: string,
  terms: string,
}

export interface TopSectionData {
  bannerTitle: string;
  subTitle: string;
  services: Service[];
  pricing: TopSectionPricing;
}

export interface MiddleSectionData {
  title: string;
  subTitle: string;
}

type BottomSectionPricing = {
  amount: string,
  tagLine: string,
  terms: string,
}

export interface BottomSectionData {
  title: string;
  subTitle: string;
  pricing: BottomSectionPricing;
}
