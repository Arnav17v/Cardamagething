import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between w-[88rem] m-auto">
      <div className="flex items-center">
        <Image src="/logo.png" alt="CDA Logo" width={100} height={100} />
      </div>
      <div className="flex items-center gap-6">
        <Link href="./">
          <div className="p-2 text">Home</div>
        </Link>
        <Link href="/contact">
          <div className="p-2 text">Contact</div>
        </Link>
        <button>Signup</button>
      </div>
    </header>
  );
};

export default Header;
