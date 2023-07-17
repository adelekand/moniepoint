export type OfferType = {
  id: number,
  text: string,
  markdown?: boolean,
}

export type SliderContentType = {
  id: number,
  name: string,
  position: string,
  text: string,
  image: string,
}

export type TabItemType = {
  id: number,
  title: string,
  content: React.ReactNode,
}