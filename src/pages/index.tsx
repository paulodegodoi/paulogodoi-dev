import { AboutMe } from "@/Components/AboutMe"
import Head from "@/Components/commons/Head"

export default function Home() {
	return (
		<>
			<Head title="Sobre mim">
				<meta name="description" content="Conheça um pouco sobre mim e meus projetos." />
			</Head>
			<div className="space-y-10">
				<AboutMe />
			</div>
		</>
	)
}
