/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GrWflGspvjv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from 'next/image';
import maiaIcon from "../../public/maia.svg";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-40">
    <div className="font-serif py-4 bg-offoffwhite">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link className="flex items-center gap-2" href="#">
            <Image
              priority
              src={maiaIcon}
              alt="MAIA logo"
              height={24}
            />
              <span className="sr-only">Acme Inc</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-4">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Get Involved
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Donate
            </Link>
          </nav>
        </div>
        
      </div>
      
    </div>
    <hr className="mx-12"></hr>
    </div>
  )
}
