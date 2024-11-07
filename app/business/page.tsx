import { footerItems2 } from "@/components/layouts/footer/footerItems";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";
import React from "react"

const Business = () => {
  return (
    <div>
      <ul className="grid grid-cols-2">
        {footerItems2.map((item) => (
          <li className="p-10 mx-auto" key={item.name}>
            <Link href={item.href}>
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.detail}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Business;