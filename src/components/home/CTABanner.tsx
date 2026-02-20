import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="rounded-3xl bg-[#2962FF] shadow-lg overflow-hidden">
        <div className="py-12 md:py-16 px-6 md:px-12 flex flex-col items-center justify-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
            Ready to start your journey?
          </h2>
          <p className="text-white/95 text-base md:text-lg max-w-xl mb-8">
            Join 50,000+ members who enjoy premium lifestyles delivered daily.
          </p>
          <Link
            href="/login"
            className="inline-block px-8 py-3.5 bg-white text-[#2962FF] font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow"
          >
            Create Free Account
          </Link>
        </div>
      </div>
    </section>
  );
}
