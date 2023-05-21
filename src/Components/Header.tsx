import Link from "next/link"
import Image from "next/image"
import { Lato } from "next/font/google"
import HeaderPic from "../../public/laptop.png"

const lato = Lato({
	subsets: ["latin"],
	weight: "400",
})

export function Header() {
	return (
		<header className={`${lato.className} text-sm flex justify-end py-3 sticky top-0 z-20`}>
			{/* <Link href="/">
				<Image
					src={HeaderPic}
					unoptimized
					alt=""
					// title="Icon by freeicons.io https://freeicons.io"
					width={55}
					height={55}
				/>
			</Link> */}
			<nav className="hidden md:flex items-center gap-10 text-md">
				<Link href="/">Sobre mim</Link>
				<Link href="/portfolio">Portfolio</Link>
				<Link href="/contatos">Contatos</Link>
			</nav>
		</header>
	)
}
