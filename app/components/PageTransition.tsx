"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
	children: ReactNode;
};

const PageTransition = ({ children }: PageTransitionProps) => {
	const pathname = usePathname();

	return (
		<AnimatePresence>
			<motion.div
				key={pathname}
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: -10 }}
				transition={{ duration: 0.22, ease: "easeOut" }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;
