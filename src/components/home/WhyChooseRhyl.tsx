import { Zap, ShieldCheck, Gift, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time tracking and delivery within minutes.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    description: "Handpicked items from top sustainable sources.",
  },
  {
    icon: Gift,
    title: "Rewards",
    description: "Earn points on every purchase and unlock perks.",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Dedicated concierge team available 24/7.",
  },
];

export default function WhyChooseRhyl() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="rounded-3xl bg-slate-800 overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
              Why Choose{" "}
              <span className="text-sky-400">Rhyl</span>
              ?
            </h2>
            <p className="text-slate-300 text-sm md:text-base">
              Setting the standard for premium lifestyle delivery
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-slate-700/80 border border-slate-600/50 p-6 text-center hover:bg-slate-700 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-600/50 text-sky-400 mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
