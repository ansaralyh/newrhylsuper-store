import { PromoBar, MainHeader, Footer } from "@/components/layout";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PromoBar />
      <MainHeader />
      <main className="flex-1 relative z-10">{children}</main>
      <Footer />
    </>
  );
}
