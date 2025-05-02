import Link from "next/link";
import Menu from "./Menu";

function Header() {
  return (
    <header className="h-14 w-full bg-sky-500 p-3 flex justify-between items-center gap-32">
      <h1 className="w-16 h-full text-3xl text-center align-middle font-semibold text-white cursor-pointer">
        <Link href="/">Logo</Link>
      </h1>
      <Menu />
    </header>
  );
}

export default Header;
