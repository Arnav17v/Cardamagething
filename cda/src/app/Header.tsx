import Image from "next/image";
import Link from "next/link";

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
          <div className="p-2 text">Home</div>
        </Link>
        <div className="p-2 text">Contact</div>
        <div className="p-2 text">About</div>
        <button>Signup</button>
      </div>
    </header>
  );
};

export default Header;
