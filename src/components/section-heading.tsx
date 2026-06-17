type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-muted">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 font-heading text-fluid-3xl leading-tight text-brand-text">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-brand-body sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

