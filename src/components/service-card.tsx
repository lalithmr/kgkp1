"use client";

import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  description: string;
  items: string[];
  index: number;
};

export function ServiceCard({
  title,
  description,
  items,
  index,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="premium-card group h-full"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary dark:bg-brand-accent text-sm font-semibold tracking-[0.16em] text-white shadow-lg shadow-brand-primary/15 transition-transform duration-300 group-hover:scale-110">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-heading text-2xl text-brand-text dark:text-brand-heading transition-colors duration-300 group-hover:text-brand-primary dark:group-hover:text-white">{title}</h3>
        </div>
        <p className="mt-5 text-base leading-8 text-brand-body dark:text-brand-body">{description}</p>
        <ul className="mt-6 grid gap-3 text-sm leading-7 text-brand-text dark:text-brand-text">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-brand-secondary dark:bg-brand-accent transition-transform duration-300 group-hover:scale-125" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
