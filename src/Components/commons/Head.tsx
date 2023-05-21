import Head from "next/head"
import { ReactNode } from "react"

interface DefaultHeadProps {
	title: string
	children?: ReactNode
}

export default function DefaultHead({ title, children }: DefaultHeadProps) {
	return (
		<Head>
			<title>{title} | Paulo Godoi</title>
			{children ?? children}
		</Head>
	)
}
