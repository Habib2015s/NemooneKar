"use client";

export default function Marquee() {
  return (
    <div className="marquee-container w-xl rounded-2xl m-15 bg-[#FF8F9B]">
      <div className="overflow-hidden whitespace-nowrap">
        <p
          className="animate-marquee-rtl inline-block text-xl font-bold text-[#2B2D42]"
          style={{ fontFamily: "Shabnam" }}
        >
          وبسایت شما ویترین 24 ساعته کسب و کارتان است ---- طراحی وبسایت‌های خلاقانه و زیبا برای شما
        </p>
      </div>
    </div>
  );
}
