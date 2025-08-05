"use client";

export default function Marquee() {
  return (
    <div className="marquee-container rounded-2xl bg-[#FF8F9B] p-4 sm:p-6
      w-[90vw] sm:w-full max-w-full overflow-hidden mx-auto">
      <div className="overflow-hidden whitespace-nowrap">
        <p
          className="animate-marquee-rtl inline-block font-bold text-[#2B2D42] text-base sm:text-xl"
          style={{ fontFamily: "Shabnam" }}
        >
          وبسایت شما ویترین 24 ساعته کسب و کارتان است ---- طراحی وبسایت‌های خلاقانه و زیبا برای شما
        </p>
      </div>
    </div>
  );
}
