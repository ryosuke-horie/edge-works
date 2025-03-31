import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
	href?: string;
	variant?: "primary" | "secondary";
	children: ReactNode;
	className?: string;
}

export default function Button({
	href,
	variant = "primary",
	children,
	className = "",
}: ButtonProps) {
	const baseStyles =
		"inline-flex items-center justify-center px-6 py-2 border text-base font-medium rounded-md shadow-sm transition-colors";
	const variantStyles = {
		primary: "border-transparent text-white bg-sky-600 hover:bg-sky-700",
		secondary: "border-gray-300 text-sky-600 bg-white hover:bg-gray-50",
	};

	const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

	if (href) {
		return (
			<Link href={href} className={buttonStyles}>
				{children}
			</Link>
		);
	}

	return (
		<button type="button" className={buttonStyles}>
			{children}
		</button>
	);
}
