"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FadeInProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

const FadeIn = ({ children, className, delay = 0 }: FadeInProps) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 12 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.4, ease: "easeOut", delay }}
		>
			{children}
		</motion.div>
	);
};

export default FadeIn;
