import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serviceItems } from "./serviceItems";
import Link from "next/link";

const ServiceCard = () => {
  return (
    <div>
      <ul className="flex">
        {serviceItems.map((item) => (
          <li className="px-6" key={item.title}>
            <Link href={`/business/service/${item.id}`}>
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
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
    </div>
  );
}

export default ServiceCard;
