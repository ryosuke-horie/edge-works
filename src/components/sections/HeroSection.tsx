"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export const HeroSection = () => {
	const titleRef = useRef<HTMLDivElement>(null);
	const priceRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const tl = gsap.timeline();

		if (titleRef.current && priceRef.current) {
			tl.fromTo(
				titleRef.current,
				{
					y: 50,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power4.out",
				},
			).fromTo(
				priceRef.current,
				{
					y: 30,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.8,
					ease: "power3.out",
				},
				"-=0.5",
			);
		}
	}, []);

	return (
		<div className="relative h-screen">
			{/* 背景グラデーション */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-900 to-black" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,50,0.2),transparent_100%)]" />
				<div className="absolute inset-0 bg-grid-white/[0.02]" />
			</div>

			{/* 装飾的な要素 */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_50%)]" />
			</div>

			{/* メインコンテンツ */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
				<div ref={titleRef} className="mb-8">
					<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 mb-6">
						エッジを極める。
						<br />
						未来を創る。
					</h1>
					<p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mx-auto leading-relaxed">
						AI時代のウェブ開発を、
						<span className="text-blue-400 font-semibold">Edge</span>
						で革新する
					</p>
				</div>

				<div ref={priceRef} className="flex flex-col items-center gap-8">
					<div className="px-6 py-3 text-lg font-medium text-white/90 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm shadow-lg">
						⚡️ エッジファースト開発
					</div>
					<div className="block">
						<a
							href="#contact"
							className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out hover:text-blue-100"
						>
							<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full" />
							<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
							<span className="relative">お問い合わせはこちら</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
