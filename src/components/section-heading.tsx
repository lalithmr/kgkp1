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
      <h2 className="h2 mt-4">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-brand-body">
          {description}
        </p>
      ) : null}
    </div>
  );
}

