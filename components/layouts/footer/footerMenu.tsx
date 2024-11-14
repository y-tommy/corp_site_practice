import React from "react"
import { footerItems } from "./footerItems";
import Link from "next/link";

const FooterMenu = ({index, title}: {index: number, title: string}) => {
  return (
    <div>
      <h3 className="
        text-sm
        font-semibold
        text-foreground
        tracking-wider
        uppercase mb-4
      ">{title}</h3>
      <ul className="space-y-2">
        {footerItems[index].map((item) => (
          <li key={item.name}>
            <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterMenu;
