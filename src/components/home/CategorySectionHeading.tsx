interface CategorySectionHeadingProps {
  title: string;
  accentColor: "amber" | "teal" | "rose" | "emerald" | "blue";
}

const accentColors = {
  amber: "bg-amber-400",
  teal: "bg-teal-400",
  rose: "bg-rose-400",
  emerald: "bg-emerald-400",
  blue: "bg-sky-400",
};

export default function CategorySectionHeading({ title, accentColor }: CategorySectionHeadingProps) {
  return (
    <div className="col-span-2 md:col-span-4 flex items-center pt-8 first:pt-0">
      <div className="flex flex-col">
        <div className={`w-8 h-0.5 ${accentColors[accentColor]} mb-2`} />
        <h3 className="text-xl md:text-2xl font-bold text-slate-800">{title}</h3>
      </div>
    </div>
  );
}
