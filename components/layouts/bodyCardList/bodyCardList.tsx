import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";
import { footerItems } from "../footer/footerItems";

const BodyCardList = ({index}: {index: number}) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2">
      {footerItems[index].map((item) => (
        <li className="p-10 mx-auto" key={item.name}>
          <Link href={item.href}>
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.detail}</CardDescription>
              </CardContent>
              <CardFooter>
              </CardFooter>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default BodyCardList;
