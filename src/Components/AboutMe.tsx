import Image from "next/image"
import ProfilePic from "../../public/profile-pic.jpg"
import { CSharpIcon } from "./stacksIcons/CSharpIcon"
import { JavaScriptIcon } from "./stacksIcons/JavaScriptIcon"
import { TypeScriptIcon } from "./stacksIcons/TypeScriptIcon"
import { NextjsIcon } from "./stacksIcons/NextjsIcon"
import { ReactjsIcon } from "./stacksIcons/ReactjsIcon"
import { RiMapPin2Fill } from "react-icons/ri"

const startCarrear = new Date(2022, 2, 14)
let yearsOfExperiance = (startCarrear.getFullYear() - new Date().getFullYear()) * -1

export function AboutMe() {
	return (
		<main className="flex flex-wrap-reverse justify-center gap-10 md:flex-nowrap md:justify-between">
			<div className="text-center md:text-start md:m-auto">
				<h1 className="text-3xl md:text-4xl mb-3">
					Hi, I'm <span className="font-bold">Paulo</span>👋
				</h1>
				<h2 className="text-xl md:text-3xl mb-1">
					<span className="md:text-xl">
						Web Developer, based in Osasco, Brazil
						<RiMapPin2Fill className="inline fill-p-green-500" />
					</span>
				</h2>

				{/* <Link href="/contatos">Ir para a página contatos</Link> */}
				{/* Stacks Icons */}
				<div className="mt-5">
					<ul className="grid grid-cols-5 md:flex md:gap-5 fill-[#3B8C6E]">
						<li className="m-auto opacity-40 hover:opacity-100 hover:contrast-150  transition-all duration-300 rounded">
							<JavaScriptIcon />
						</li>
						<li className="m-auto opacity-40 hover:opacity-100 hover:contrast-150 transition-all duration-300 rounded">
							<TypeScriptIcon />
						</li>
						<li className="m-auto opacity-40 hover:opacity-100 hover:contrast-150 transition-all duration-300 rounded">
							<ReactjsIcon />
						</li>
						<li className="m-auto opacity-40 hover:opacity-100 hover:contrast-150 transition-all duration-300 rounded">
							<NextjsIcon />
						</li>
						<li className="m-auto opacity-40 hover:opacity-100 hover:contrast-150 transition-all duration-300 rounded">
							<CSharpIcon />
						</li>
					</ul>
				</div>
			</div>

			<div className="relative">
				<Image
					src={ProfilePic}
					alt=""
					width={350}
					unoptimized
					className="rounded-full border-4 border-x-cyan-50"
				/>
				<p className="bg-p-green-500 absolute bottom-3 -right-4 md:-right-0 rounded-md text-center text-sm p-2">
					<span className="text-xl font-bold">{yearsOfExperiance}+</span>
					<br />
					years of experience
				</p>
			</div>
		</main>
	)
}
