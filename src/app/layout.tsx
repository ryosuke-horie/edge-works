import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Edge Works | 月額3,000円のウェブサイト制作",
	description:
		"初期費用0円、月額3,000円のみでプロフェッショナルなウェブサイトを制作。ドメイン取得、ホスティング、保守・運用まで一貫サポート。",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" data-oid="q447d8q">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				data-oid="ujx5t7h"
			>
				{children}
			</body>
		</html>
	);
}
