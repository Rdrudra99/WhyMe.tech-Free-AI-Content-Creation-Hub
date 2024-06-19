
import { FacebookIcon, InstagramIcon, LinkedinIcon, MountainIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-4 md:py-4">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="text-lg font-bold">
                Kya Re Rudra
          </span>
        </Link>
        <div className="items-center gap-4 hidden md:flex">
          <Link href="#" aria-label="Twitter" prefetch={false}>
            <TwitterIcon className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Facebook" prefetch={false}>
            <FacebookIcon className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Instagram" prefetch={false}>
            <InstagramIcon className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" prefetch={false}>
            <LinkedinIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
