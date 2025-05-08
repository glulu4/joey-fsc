"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
interface MenuItem {
  name: string;
  href: string;
  openInNewTab?: boolean;
}
const menuItems: MenuItem[] = [
  {name: "Home", href: "/"},
  {name: "About", href: "/about"},
  {name: "Procedures", href: "/procedures"},
  {name: "Resources", href: "/resources"},
  {name: "Results", href: "/results"},
  {name: "Contact", href: "/Contact"},
];
export const Navigation: FunctionComponent = () => {
  const pathname = usePathname();


  return (
    <nav>
      <div className="hidden md:flex items-center">
        {menuItems.map((item) => (
          <div key={item.href} className="ml-4 md:ml-8">
            <a
              href={item.href}
              target={item.openInNewTab ? "_blank" : "_self"}
              className={cn(
                "hover:text-primary text-bold-22 font-semibold",
                pathname === item.href && "font-semibold"
              )}
            >
              {item.name}
            </a>
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
      setScrolled(window.scrollY > 10); // If scrolled more than 10px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // <section className="flex items-center justify-between mt-8 md:mt-16 mb-12 px-8">
    // <section className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50 transition-all">
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

      <div className="hidden md:flex items-center justify-center bg-primaryBlue text-white px-6 py-4 rounded-3xl hover:bg-primary/80 transition-all">
      <p className="text-lg font-semibold">
          Schedule Today 

      </p>
      </div>
    </section>
  );
};
// "use client";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import {config} from "@/config";
// import {cn} from "@/lib/utils";
// import {Menu} from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import {usePathname} from "next/navigation";
// import {FunctionComponent} from "react";

// interface MenuItem {
//   name: string;
//   href: string;
//   openInNewTab?: boolean;
// }

// // 6 items total
// const menuItems: MenuItem[] = [
//   {name: "Home", href: "/"},
//   {name: "About", href: "/about"},
//   {name: "Services", href: "/services"},
//   {name: "Blog", href: "/blog"},
//   {name: "Contact", href: "/contact"},
//   {name: "Careers", href: "/careers"},
// ];

// export const Navigation: FunctionComponent = () => {
//   const pathname = usePathname();

//   const firstHalf = menuItems.slice(0, 3);
//   const secondHalf = menuItems.slice(3, 6);

//   return (
//     <nav className="w-full">
//       {/* Desktop */}
//       <div className="hidden md:flex items-end justify-around w-full ">
//         <div className="flex items-center justify-end gap-8 pb-5">
//           {firstHalf.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               target={item.openInNewTab ? "_blank" : "_self"}
//               className={cn(
//                 "hover:text-primary text-bold-22 font-semibold",
//                 pathname === item.href && "font-semibold"
//               )}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         <Link href="/" className="px-12">
//           <Image
//             src="/images/logo.png"
//             alt="Logo"
//             width={100}
//             height={100}
//             className="w-16 h-16 md:w-40 md:h-40 rounded-full"
//             priority
//           />

//         </Link>
        

//         <div className="flex items-center gap-8 pb-5">
//           {secondHalf.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               target={item.openInNewTab ? "_blank" : "_self"}
//               className={cn(
//                 "hover:text-primary text-bold-22 font-semibold",
//                 pathname === item.href && "font-semibold"
//               )}
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//       </div>

//       {/* Mobile */}
//       <div className="md:hidden flex justify-end">
//         <Sheet>
//           <SheetTrigger>
//             <Menu size="24" />
//           </SheetTrigger>
//           <SheetContent>
//             <SheetHeader>
//               <SheetDescription>
//                 {menuItems.map((item) => (
//                   <a
//                     key={item.href}
//                     href={item.href}
//                     target={item.openInNewTab ? "_blank" : "_self"}
//                     className={cn(
//                       "block py-2",
//                       pathname === item.href && "font-semibold"
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </SheetDescription>
//             </SheetHeader>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </nav>
//   );
// };

// export const Header: FunctionComponent = () => {
//   return (
//     <section className="flex items-center justify-center py-10 w-full px-10  h-full z-0 shadow-md">

//       <Link href="/" className="flex items-center justify-center md:hidden ">
//         <Image
//           src="/images/logo.png"
//           alt="Logo"
//           width={100}
//           height={100}
//           className="w-16 h-16 md:w-32 md:h-32 "
//           priority
//         />
//       </Link>

//       <Navigation />
//     </section>
//   );
// };
