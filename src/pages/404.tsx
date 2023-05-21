import Head from "@/Components/commons/Head"
import Link from "next/link"

export default function NotFound() {
	return (
		<>
			<Head title="404" />
			<div>
				<h1>404</h1>
				<div>
					<p>Oops, página não encontrada.</p>
					<span>Clique no botão abaixo para acessar a página inicial</span>
				</div>
				<Link href="/">Ir para Página Inicial</Link>
			</div>
		</>
	)
}
