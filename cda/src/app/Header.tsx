import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Header = () => {
  return (
    <header className="flex justify-between w-[88rem] m-auto">
      <div className="flex items-center">
        <Link href="./">
          <Image src="/logo.png" alt="CDA Logo" width={100} height={100} />
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link href="./">
          <div className="p-2 text">
            <button>Home</button>
          </div>
        </Link>
        <div>
          <Sheet>
            <SheetTrigger>Contact us</SheetTrigger>
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle>Contact details:</SheetTitle>
                <SheetDescription>Email: info@example.com</SheetDescription>
                <SheetDescription>Contact: 123-456-7890</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div className="sm:hidden">
          <Drawer>
            <DrawerTrigger className="bg-white p-1 rounded-sm hover:bg-yellow-200">
              Contact
            </DrawerTrigger>
            <DrawerContent className="bg-white">
              <DrawerHeader>
                <DrawerTitle>CONTACT DETAILS</DrawerTitle>
                <DrawerDescription>Email:</DrawerDescription>
                <DrawerDescription>Name:</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <DrawerClose>Close</DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
        <button>Signup</button>
      </div>
    </header>
  );
};

export default Header;
