
import { ModeToggle } from "./theme-toggle-button";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

function Navbar() {
  return (
    <nav className=" flex justify-between p-5">
      <Link href="/">
      <h1 className="text-3xl font-bold text-gray-800  dark:text-gray-100">NEXT ACTIONS CRUD</h1>
      </Link>
      <div className=" flex gap-x-2 items-start">
        <Link href="/new"
        className={buttonVariants({variant: 'secondary'})}
        >Crea un Task</Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
