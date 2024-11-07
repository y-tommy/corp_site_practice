import React from "react";
// import BodyCardList from "@/components/layouts/bodyCardList/bodyCardList";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import Link from "next/link";
import { footerItems1 } from "@/components/layouts/footer/footerItems";

const Company = () => {
  return (
    <div>
      <ul className="grid grid-cols-2">
        {footerItems1.map((item) => (
          // コンポーネント化しようとしたらcssが適用されなかった為保留
          // <BodyCardList key={item.name} item={item} />
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

export default Company;
