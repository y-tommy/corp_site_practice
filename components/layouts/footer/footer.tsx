import Link from "next/link";
import {
  footerItems1,
  footerItems2,
  footerItems3,
  footerItems4
} from "./footerItems";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-4 flex-grow sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <NavigationMenu>
              <Link href="/" className="flex items-center">
                <span className="ml-2 text-xl font-bold text-foreground">会社名が入ります</span>
              </Link>
            </NavigationMenu>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">会社について</h3>
            <ul className="space-y-2">
              {footerItems1.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">事業について</h3>
            <ul className="space-y-2">
              {footerItems2.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">お問い合わせ</h3>
            <ul className="space-y-2">
              {footerItems3.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">　</h3>
            <ul className="space-y-2">
              {footerItems4.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-muted pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 会社名</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;