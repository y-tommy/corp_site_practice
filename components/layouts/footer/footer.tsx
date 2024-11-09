import Link from "next/link";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import FooterMenu from "./footerMenu";

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
          <FooterMenu index={0} title="会社について" />
          <FooterMenu index={1} title="事業について" />
          <FooterMenu index={2} title="お問い合わせ" />
          <FooterMenu index={3} title="　" />
        </div>
        <div className="mt-8 border-t border-muted pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 会社名</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;