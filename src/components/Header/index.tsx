import Link from "next/link";
import Menu from "./Menu";
import SidebarHandlerButton from "./SidebarHandlerButton";

function Header() {
  return (
    <header className="flex h-14 w-full gap-8 bg-sky-500 p-3 justify-center items-center lg:gap-16">
      <div>
        <h1 className="hidden md:block w-12 h-full text-3xl text-center align-middle font-semibold text-white cursor-pointer">
          <Link href="/">Logo</Link>
        </h1>
        <SidebarHandlerButton />
      </div>
      <Menu />
    </header>
  );
}

export default Header;
