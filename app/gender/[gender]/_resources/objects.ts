import { StaticImageData } from "next/image";
import FirstShirt from "../../../../public/shirt.jpg";
import SecondShirt from "../../../../public/shirt2.jpg";
/* cart details */
export default interface CardDetailsProps {
  id?: number;
  img: StaticImageData;
  name: string;
  price: number;
  subImages: StaticImageData[];
}

export const CardDetails: CardDetailsProps[] = [
  {
    id: 0,
    price: 140,
    img: FirstShirt,
    name: "შავი მაისური",
    subImages: [FirstShirt, SecondShirt, FirstShirt, SecondShirt],
  },
  {
    id: 1,
    img: SecondShirt,
    price: 130,
    name: "ვარდისფერი მაისური",
    subImages: [SecondShirt, SecondShirt, SecondShirt, SecondShirt],
  },
  {
    id: 2,
    img: SecondShirt,
    price: 130,
    name: "ვარდისფერი მაისური",
    subImages: [SecondShirt, SecondShirt, SecondShirt, SecondShirt],
  },
  {
    id: 3,
    img: SecondShirt,
    price: 130,
    name: "ვარდისფერი მაისური",
    subImages: [SecondShirt, SecondShirt, SecondShirt, SecondShirt],
  },
  {
    id: 4,
    img: SecondShirt,
    price: 130,
    name: "ვარდისფერი მაისური",
    subImages: [SecondShirt, SecondShirt, SecondShirt, SecondShirt],
  },
  {
    id: 5,
    img: SecondShirt,
    price: 130,
    name: "ვარდისფერი მაისური",
    subImages: [SecondShirt, SecondShirt, SecondShirt, SecondShirt],
  },
  {
    id: 6,
    img: SecondShirt,
    price: 130,
    name: "ვარდისფერი მაისური",
    subImages: [SecondShirt, SecondShirt, SecondShirt, SecondShirt],
  },
];
