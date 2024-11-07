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

const BodyCardList = ({item}) => {
  return (
    <div>
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
    </div>
  );
}

export default BodyCardList;
