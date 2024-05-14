import Link from "next/link";

export default function Header() {
  return (
    <header 
        className="flex w-full justify-between items-center px-8 py-4 bg-[#50076d] text-white">

        <h1 className="text-lg font-bold">
            <Link href="/">Learn Next.js</Link>
        </h1>
        <nav className="flex  space-x-6">
            <Link href="/">Home</Link>
            <Link href="/connexion">connexion</Link>
            <Link href="/inscription">inscription</Link>
            <Link href="/store">Store</Link>
            <Link href="/about">About</Link>
        </nav>
    </header>
  );
}
