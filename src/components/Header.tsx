"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {cn} from "@/lib/utils";
import {ChevronDown, Menu} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {FunctionComponent, useEffect, useState} from "react";
import Button from "./Button";
import {usePathname} from "next/navigation";


// Wisdom tooth
// extraction
// Dental implants
// Orthognathic surgery
// Genioplasty and chin implants
// Tooth extraction
// TMJ dysfunction
// Facial trauma
// Oral pathology
// Anesthesia
// Botox and filler
// Sleep Apnea
interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
  subItems?: {name: string; href: string}[];
}

const menuItems: MenuItem[] = [
  {name: "Home", href: "/"},
  {name: "For Patients", href: "/about"},
  {name: "Services", 
    href: "/about",
    subItems: [
      {name: "Wisdom Tooth", href: "/"},
      {name: "Extractions", href: "/"},
      {name: "Dental Implants", href: "/"},
      {name: "Orthognathic surgery", href: "/"},
      {name: "Genioplasty", href: "/"},
      {name: "Tooth Extraction", href: "/"},
      {name: "TMJ Disorder", href: "/"},
      {name: "Facial Trauma", href: "/"},
      {name: "Oral pathology", href: "/"},
      {name: "Anesthesia", href: "/"},
      {name: "Botox and Filler", href: "/"},
      {name: "Sleep Apnea", href: "/"},



    ],
  },
  {
    name: "About",
    href: "/about",
    subItems: [
      {name: "Our Team", href: "/about/team"},
      {name: "Mission", href: "/about/mission"},
      {name: "History", href: "/about/history"},
    ],
  },
  {name: "Contact", href: "/Contact"},
];

export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <nav>
      <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div
            key={item.href}
            className={cn(
              "ml-4 md:ml-8",
              item.subItems && "dropdown relative inline-block group"
            )}
          >
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-primary text-bold-22 font-semibold",
                item.subItems &&
                "dropbtn px-4 py-2 border-none",
                pathname === item.href && "font-semibold"
              )}
            >
              {item.name} {item.subItems &&  <ChevronDown className="inline" />}
            </a>
            {item.subItems && (
              <div className="dropdown-content hidden group-hover:block absolute rounded-md bg-white w-full shadow-lg z-10">
                {item.subItems.map((subItem) => (
                  <div
                    className="hover:bg-primary-teal m-1 rounded-md transition-colors duration-300 ease-in-out"
                    key={subItem.href}
                  >                    <a
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-4 py-2 text-md font-medium text-black hover:text-white"
                    >
                      {subItem.name}
                    </a>
                  </div>
    
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size="24" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target={item.openInNewTab ? "_blank" : "_self"}
                    className={cn(
                      "block py-2",
                      pathname === item.href && "font-semibold"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export const Header: FunctionComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={cn(
        "fixed top-0 left-0 w-full flex items-center justify-between px-8 z-50 transition-all",
        scrolled ? "backdrop-blur-md bg-background/70 shadow-sm" : "bg-transparent"
      )}
    >
      <Link href="/">
        <Image
          src="/images/Group.svg"
          alt="Logo"
          width={100}
          height={100}
          className="w-16 h-16 md:w-32 md:h-32 py-0"
          priority
        />
      </Link>
      <Navigation />
      <div className="hidden md:flex items-center">
        <Button text={"Schedule Today"} href="#" />
      </div>
    </section>
  );
};