"use client";

export default function FrontOfficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative">
        <div
          className={`w-full top-0 z-50 fixed bg-white
            }`}></div>
        {children}
        <section className="border">
          <div className="w-[80%] m-auto py-[2rem]"></div>
        </section>
      </div>
    </>
  );
}
