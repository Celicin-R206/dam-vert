"use client";

import Footer from "./_components/footer";

export default function FrontOfficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <section className="border">
        <div className="w-[1150px] m-auto py-[2rem]">
          <Footer />
        </div>
      </section>
    </div>
  );
}
