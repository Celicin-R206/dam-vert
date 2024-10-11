"use client";

import { useEffect, useState } from "react";
import Footer from "./_components/footer";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { useScroll } from "framer-motion";
import { ArrowUpIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function FrontOfficeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      gsap.to(".loader-container", {
        opacity: 0,
        display: 0,
        duration: 0.5,
        onComplete: () => {
          setLoading(false);
        },
      });
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsVisible(latest > 0);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {!loading && (
        <div>
          {children}
          <section className="border">
            <div className="w-[1150px] m-auto py-[2rem]">
              <Footer />

              <button
                onClick={scrollToTop}
                className={cn(
                  "fixed bottom-4 right-4 size-20 bg-secondary rounded-full z-20 grid place-items-center opacity-0 translate-y-4 transition-all duration-1000",
                  isVisible && "opacity-100 translate-y-0"
                )}>
                <svg
                  className="absolute top-0 left-0 size-full animate-spin [animation-duration:_8s]"
                  viewBox="0 0 84 84"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M42.1241 72.9032C42.7278 72.9032 43.2201 73.1388 43.601 73.6101C43.9788 74.0847 44.1676 74.7804 44.1676 75.6972C44.1676 76.6238 43.9755 77.3243 43.5914 77.7989C43.2072 78.2767 42.7052 78.5156 42.0854 78.5156C41.8271 78.5156 41.5995 78.48 41.4026 78.409C41.2056 78.338 41.0362 78.2428 40.8941 78.1233C40.7488 78.0039 40.6262 77.8699 40.5261 77.7214H40.4777C40.497 77.8247 40.5212 77.9764 40.5503 78.1766C40.5761 78.38 40.589 78.5882 40.589 78.8013V80.5349H39.1072V73H40.2404L40.5261 73.7022H40.589C40.6827 73.5537 40.8005 73.4181 40.9425 73.2954C41.0814 73.1759 41.2476 73.0807 41.4413 73.0097C41.635 72.9387 41.8626 72.9032 42.1241 72.9032ZM41.606 74.0799C41.2024 74.0799 40.9183 74.1993 40.7537 74.4382C40.5858 74.6803 40.497 75.0435 40.4873 75.5278V75.6876C40.4873 76.2138 40.5681 76.6157 40.7295 76.8933C40.8909 77.1742 41.1911 77.3146 41.6302 77.3146C41.9562 77.3146 42.2113 77.1742 42.3953 76.8933C42.5793 76.6125 42.6713 76.2073 42.6713 75.6779C42.6713 75.1484 42.5793 74.7497 42.3953 74.4818C42.208 74.2138 41.9449 74.0799 41.606 74.0799Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M34.4832 77.8937C33.9904 77.8068 33.5828 77.6366 33.2604 77.3831C32.9373 77.1327 32.7106 76.8108 32.58 76.4173C32.4494 76.0239 32.4298 75.568 32.5211 75.0498L32.6456 74.344L36.084 74.9503C36.1404 74.5374 36.0749 74.1931 35.8875 73.9175C35.6963 73.6445 35.3957 73.4718 34.9855 73.3995C34.6453 73.3395 34.3276 73.3195 34.0323 73.3396C33.737 73.3596 33.4276 73.4133 33.1041 73.5005L33.3026 72.375C33.5894 72.2912 33.8828 72.2446 34.1828 72.2352C34.4796 72.2252 34.8331 72.2564 35.2432 72.3287C35.7773 72.4229 36.2336 72.605 36.6122 72.875C36.9875 73.1444 37.2573 73.5017 37.4213 73.947C37.5822 74.3917 37.6086 74.9208 37.5004 75.5344C37.3905 76.1576 37.1942 76.6573 36.9115 77.0336C36.6251 77.4125 36.2744 77.6719 35.8597 77.8119C35.4443 77.955 34.9855 77.9823 34.4832 77.8937ZM34.6561 76.8572C34.9391 76.9071 35.1903 76.8579 35.4099 76.7098C35.6262 76.5611 35.7829 76.2953 35.8799 75.9125L33.8388 75.5526C33.8039 75.7694 33.8097 75.9687 33.8563 76.1507C33.8997 76.3321 33.9874 76.4852 34.1195 76.6101C34.2483 76.7345 34.4272 76.8168 34.6561 76.8572ZM32.319 79.6265L32.3366 79.5263C32.4445 79.4536 32.5847 79.3652 32.7571 79.2612C32.9295 79.1572 33.1142 79.0488 33.3111 78.936C33.5074 78.8264 33.6997 78.721 33.888 78.6198C34.0758 78.5217 34.2392 78.4407 34.3783 78.3768L35.3464 78.5475L35.3237 78.6762C35.1975 78.7785 35.0515 78.9003 34.8856 79.0415C34.716 79.1854 34.5472 79.3342 34.3791 79.4882C34.211 79.6421 34.0679 79.7841 33.9499 79.9141L32.319 79.6265Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M27.8651 74.4261L29.0664 74.8633L30.5388 70.818L31.9267 71.3231L30.4543 75.3684L31.2188 75.6467L30.9753 76.3156L30.075 76.4105L29.9392 76.7836C29.7813 77.2174 29.586 77.5277 29.3531 77.7143C29.1161 77.9029 28.8465 77.9972 28.5442 77.9971C28.2378 77.9989 27.901 77.933 27.534 77.7994C27.264 77.7012 27.0265 77.589 26.8216 77.4629C26.6157 77.3398 26.4528 77.2256 26.3331 77.1202L27.0591 76.23C27.1531 76.3021 27.2573 76.3744 27.3718 76.4469C27.4862 76.5195 27.6238 76.585 27.7846 76.6436C27.9788 76.7142 28.1429 76.707 28.2769 76.6218C28.4069 76.5385 28.505 76.4059 28.5712 76.2239L28.6872 75.9053L27.4858 75.4681L27.8651 74.4261Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M23.4348 73.3285L26.1417 68.6399L27.4208 69.3784L24.7138 74.067L23.4348 73.3285ZM23.0117 75.5333C22.8216 75.4236 22.6839 75.2844 22.5985 75.1159C22.5116 74.9501 22.5375 74.747 22.6763 74.5066C22.8135 74.2689 22.9772 74.1435 23.1675 74.1303C23.3562 74.12 23.5455 74.1697 23.7356 74.2794C23.9286 74.3908 24.0677 74.5308 24.153 74.6993C24.234 74.8691 24.2058 75.0728 24.0686 75.3104C23.9298 75.5508 23.7683 75.6757 23.584 75.6849C23.3954 75.6952 23.2046 75.6447 23.0117 75.5333Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M21.7566 65.4814L22.888 66.4308L18.0447 72.2028L16.9133 71.2535L21.7566 65.4814Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M13.9617 65.3934C13.6401 65.0101 13.4372 64.6177 13.3532 64.2162C13.2667 63.8168 13.2999 63.4244 13.4528 63.0391C13.6056 62.6537 13.8836 62.292 14.2867 61.9537L14.8357 61.493L17.08 64.1676C17.3886 63.8876 17.5597 63.5817 17.5933 63.2501C17.6224 62.9181 17.5031 62.5926 17.2354 62.2736C17.0133 62.0089 16.7828 61.7894 16.5437 61.615C16.3046 61.4405 16.0331 61.2827 15.7292 61.1416L16.6047 60.407C16.8783 60.5271 17.133 60.68 17.3689 60.8657C17.6026 61.0488 17.8533 61.2999 18.121 61.6189C18.4696 62.0344 18.7022 62.4672 18.8186 62.9173C18.933 63.365 18.9099 63.8121 18.7494 64.2587C18.5868 64.7027 18.2668 65.125 17.7895 65.5255C17.3048 65.9322 16.8332 66.1889 16.3748 66.2954C15.9118 66.4016 15.4764 66.3749 15.0688 66.2155C14.6586 66.0582 14.2896 65.7842 13.9617 65.3934ZM14.7605 64.7106C14.9452 64.9307 15.1692 65.0545 15.4326 65.0821C15.6939 65.1073 15.9848 65.0044 16.3051 64.7735L14.9729 63.1858C14.8068 63.3294 14.6831 63.4859 14.6019 63.6552C14.5185 63.8221 14.4873 63.9958 14.5082 64.1763C14.527 64.3544 14.6111 64.5325 14.7605 64.7106Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M9.34597 58.4727C9.30884 58.4084 9.27026 58.3319 9.23022 58.2432C9.18578 58.1533 9.15381 58.0785 9.13432 58.019L10.3894 57.4229C10.3996 57.473 10.4246 57.5387 10.4642 57.6202C10.4994 57.7006 10.5331 57.7687 10.5654 57.8246C10.6606 57.9895 10.7744 58.1382 10.9067 58.2705C11.0374 58.4001 11.1858 58.4989 11.3519 58.5671C11.5152 58.6368 11.6947 58.6637 11.8905 58.6476C12.0818 58.6303 12.2879 58.5579 12.5087 58.4304L14.895 57.0527L15.6334 58.3318L10.9449 61.0387L10.3856 60.07L11.065 59.4261L11.0287 59.3632C10.8161 59.3629 10.6045 59.3322 10.394 59.2711C10.1791 59.2088 9.98169 59.1122 9.80171 58.9812C9.61733 58.8491 9.46541 58.6796 9.34597 58.4727Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M6.02143 48.2401C5.93454 47.7473 5.95508 47.3061 6.08305 46.9164C6.20784 46.5272 6.43276 46.204 6.75782 45.9467C7.08288 45.6894 7.50452 45.5151 8.02274 45.4237L8.72854 45.2993L9.33482 48.7377C9.74214 48.6494 10.0432 48.4701 10.2382 48.1997C10.4293 47.9267 10.4887 47.5852 10.4164 47.175C10.3564 46.8349 10.2665 46.5295 10.1467 46.2588C10.0269 45.9882 9.87065 45.7158 9.67807 45.4416L10.8035 45.2432C10.9804 45.4841 11.1246 45.7439 11.236 46.0225C11.3468 46.298 11.4384 46.6408 11.5107 47.0509C11.6049 47.585 11.5899 48.0761 11.4656 48.5242C11.3408 48.9691 11.0973 49.3447 10.735 49.6512C10.3722 49.9545 9.88396 50.1602 9.27036 50.2684C8.64723 50.3783 8.11051 50.3648 7.66021 50.2278C7.20617 50.0882 6.84246 49.8475 6.5691 49.5056C6.29256 49.1643 6.11 48.7424 6.02143 48.2401ZM7.0546 48.0481C7.10449 48.3311 7.23658 48.5503 7.45087 48.706C7.66461 48.8584 7.96793 48.9147 8.36084 48.875L8.00095 46.8339C7.78532 46.8752 7.59998 46.9488 7.44493 47.0549C7.28933 47.1577 7.17542 47.2925 7.10321 47.4593C7.03044 47.6229 7.01423 47.8192 7.0546 48.0481Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M5.48444 40.8844C5.48444 40.3066 5.64263 39.8417 5.959 39.4898C6.27215 39.1379 6.77576 38.962 7.46985 38.962H11V40.4389H7.83787C7.45048 40.4389 7.15832 40.51 6.96139 40.652C6.76446 40.7908 6.666 41.0103 6.666 41.3106C6.666 41.7625 6.81934 42.0708 7.12603 42.2355C7.43272 42.4001 7.875 42.4825 8.45287 42.4825H11V43.9594H5.58613L5.58613 42.8311L6.2786 42.6326V42.5502C6.09136 42.434 5.93963 42.2904 5.82341 42.1193C5.70719 41.9449 5.62164 41.7529 5.56676 41.543C5.51188 41.3299 5.48444 41.1104 5.48444 40.8844Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M5.62406 29.2736L7.06654 29.7986C7.31833 29.8903 7.55468 29.9866 7.77557 30.0876C7.99757 30.1856 8.15394 30.2563 8.24467 30.2996L8.27117 30.2268C8.13497 30.0535 8.03931 29.8727 7.9842 29.6843C7.9302 29.4929 7.91054 29.2968 7.92522 29.096C7.93989 28.8952 7.98533 28.6901 8.06151 28.4808C8.19511 28.1138 8.37682 27.8174 8.60664 27.5919C8.83343 27.3652 9.11245 27.2263 9.44372 27.1751C9.77195 27.1228 10.1545 27.1762 10.5913 27.3352L13.9086 28.5425L13.4034 29.9304L10.432 28.8489C10.068 28.7164 9.76915 28.6832 9.53551 28.7493C9.30188 28.8155 9.13427 28.9881 9.03269 29.2672C8.93111 29.5463 8.91628 29.7899 8.98821 29.9982C9.0571 30.2054 9.2053 30.3881 9.4328 30.5465C9.65726 30.7038 9.94999 30.8481 10.311 30.9795L12.7045 31.8507L12.1994 33.2386L5.11891 30.6615L5.62406 29.2736Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M10.5435 23.4338C10.9067 22.8048 11.3221 22.4016 11.7898 22.2243C12.2575 22.047 12.7709 22.1197 13.3301 22.4426L16.4544 24.2464L15.9386 25.1397L15.1583 25.0191L15.139 25.0526C15.2292 25.2836 15.2871 25.4997 15.3127 25.7009C15.3382 25.902 15.3237 26.1079 15.2691 26.3187C15.2145 26.5295 15.1121 26.7649 14.962 27.0249C14.8022 27.3017 14.6054 27.5199 14.3717 27.6794C14.1395 27.8361 13.8781 27.9144 13.5874 27.9143C13.2939 27.9126 12.978 27.8141 12.6397 27.6188C12.142 27.3315 11.8767 26.9453 11.8436 26.4602C11.8077 25.9736 11.979 25.3735 12.3574 24.66L12.8019 23.8319L12.5964 23.7133C12.3504 23.5712 12.1329 23.5314 11.9441 23.5938C11.7552 23.6563 11.5946 23.8021 11.4622 24.0314C11.3315 24.2578 11.2353 24.4986 11.1737 24.7538C11.1121 25.009 11.0673 25.2739 11.0392 25.5485L9.93076 25.4733C9.94302 25.1486 10.0002 24.8107 10.1022 24.4596C10.2059 24.1057 10.353 23.7637 10.5435 23.4338ZM13.5484 24.2629L13.2795 24.7674C13.0517 25.1877 12.9596 25.5184 13.003 25.7597C13.0479 25.9981 13.1823 26.1819 13.4059 26.311C13.6016 26.424 13.7745 26.4474 13.9246 26.3812C14.0718 26.3134 14.1987 26.1872 14.3053 26.0027C14.4634 25.7287 14.5155 25.4513 14.4615 25.1703C14.4091 24.8866 14.2334 24.6584 13.9342 24.4856L13.5484 24.2629Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M16.0395 16.2886L20.1868 19.7686L19.4584 20.6366L18.8003 20.3436L18.7505 20.4029C18.8168 20.6102 18.8384 20.818 18.8153 21.0263C18.7923 21.2345 18.7344 21.4366 18.6415 21.6327C18.5487 21.8287 18.4297 22.0133 18.2844 22.1864C18.0354 22.4831 17.7666 22.698 17.478 22.8309C17.187 22.9618 16.8783 22.9957 16.552 22.9326C16.2278 22.867 15.8876 22.6848 15.5315 22.386L12.8272 20.1168L13.7766 18.9854L16.1989 21.018C16.4957 21.267 16.7641 21.4016 17.0042 21.4219C17.2443 21.4421 17.4618 21.336 17.6569 21.1036C17.8499 20.8736 17.9494 20.6495 17.9555 20.4312C17.9592 20.2109 17.8814 19.9897 17.7222 19.7676C17.5626 19.541 17.3356 19.3042 17.0413 19.0573L15.0901 17.42L16.0395 16.2886Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M22.7183 16.3019C22.842 16.1982 22.9516 16.0852 23.047 15.9629C23.145 15.8386 23.2365 15.7091 23.3216 15.5745L24.0282 16.4165C23.9527 16.5726 23.8392 16.7437 23.6877 16.9298C23.5408 17.1163 23.361 17.2988 23.1483 17.4773C22.901 17.6848 22.6452 17.832 22.381 17.9189C22.1171 18.0012 21.8453 17.9911 21.5655 17.8888C21.2862 17.7818 20.9971 17.5503 20.6983 17.1942L19.0205 15.1947L18.4789 15.6492L18.0774 15.1707L18.3831 14.2694L17.975 13.12L18.6983 12.513L19.4391 13.3959L20.6002 12.4216L21.313 13.2711L20.1519 14.2454L21.8297 16.2448C21.9625 16.4031 22.1066 16.4844 22.262 16.4889C22.4179 16.4888 22.57 16.4265 22.7183 16.3019Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M29.1865 9.81959C29.0595 9.47073 29.0156 9.17066 29.0547 8.91938C29.0926 8.66507 29.1931 8.45501 29.3561 8.2892C29.5179 8.12035 29.7217 7.99121 29.9674 7.90178C30.2071 7.81455 30.4432 7.78359 30.6757 7.80889C30.9071 7.83117 31.1206 7.92695 31.3162 8.09624C31.5107 8.2625 31.6715 8.52006 31.7984 8.86893C31.9232 9.21172 31.9651 9.51083 31.9241 9.76625C31.883 10.0217 31.7821 10.2353 31.6214 10.4072C31.4595 10.576 31.2588 10.7041 31.0191 10.7913C30.7734 10.8807 30.5343 10.9128 30.3018 10.8875C30.0682 10.8591 29.8551 10.7598 29.6625 10.5894C29.4699 10.419 29.3113 10.1624 29.1865 9.81959Z"
                    className="fill-primary"
                  />
                  <path
                    d="M41.8759 11.0968C41.2722 11.0968 40.7799 10.8612 40.399 10.3899C40.0212 9.91529 39.8324 9.21959 39.8324 8.30275C39.8324 7.37623 40.0245 6.67568 40.4086 6.20112C40.7928 5.72333 41.2948 5.48444 41.9146 5.48444C42.1729 5.48444 42.4005 5.51995 42.5974 5.59097C42.7944 5.662 42.9638 5.75723 43.1059 5.87668C43.2512 5.99613 43.3738 6.1301 43.4739 6.2786H43.5223C43.503 6.1753 43.4788 6.02357 43.4497 5.82341C43.4239 5.62003 43.411 5.4118 43.411 5.19873V3.46513L44.8928 3.46513V11H43.7596L43.4739 10.2978H43.411C43.3173 10.4463 43.1995 10.5819 43.0575 10.7046C42.9186 10.8241 42.7524 10.9193 42.5587 10.9903C42.365 11.0613 42.1374 11.0968 41.8759 11.0968ZM42.394 9.92013C42.7976 9.92013 43.0817 9.80068 43.2463 9.56179C43.4142 9.31967 43.503 8.95648 43.5127 8.47224V8.31244C43.5127 7.78622 43.4319 7.3843 43.2705 7.10666C43.1091 6.8258 42.8089 6.68537 42.3698 6.68537C42.0438 6.68537 41.7887 6.8258 41.6047 7.10666C41.4207 7.38753 41.3287 7.79268 41.3287 8.32212C41.3287 8.85156 41.4207 9.25026 41.6047 9.51821C41.792 9.78616 42.0551 9.92013 42.394 9.92013Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M49.5094 5.96591C50.0022 6.0528 50.4098 6.22302 50.7323 6.47656C51.0553 6.72692 51.2821 7.04883 51.4127 7.44228C51.5433 7.83574 51.5629 8.29157 51.4715 8.80979L51.347 9.51559L47.9087 8.90931C47.8522 9.32224 47.9177 9.66652 48.1052 9.94214C48.2963 10.2152 48.597 10.3878 49.0071 10.4601C49.3473 10.5201 49.665 10.5401 49.9603 10.52C50.2556 10.5 50.565 10.4464 50.8885 10.3592L50.6901 11.4846C50.4032 11.5684 50.1098 11.615 49.8098 11.6244C49.513 11.6344 49.1596 11.6032 48.7495 11.5309C48.2153 11.4367 47.759 11.2546 47.3805 10.9846C47.0051 10.7152 46.7354 10.3579 46.5713 9.91262C46.4104 9.46793 46.3841 8.93879 46.4923 8.32519C46.6021 7.70206 46.7984 7.20234 47.0811 6.82603C47.3676 6.44711 47.7182 6.18768 48.133 6.04773C48.5483 5.90461 49.0071 5.87734 49.5094 5.96591ZM49.3365 7.00244C49.0536 6.95255 48.8023 7.00168 48.5828 7.14982C48.3664 7.29852 48.2097 7.56429 48.1127 7.94711L50.1538 8.30701C50.1888 8.09026 50.1829 7.89091 50.1364 7.70895C50.0929 7.52756 50.0052 7.37441 49.8732 7.2495C49.7443 7.12516 49.5654 7.04281 49.3365 7.00244ZM51.6737 4.23314L51.656 4.33329C51.5481 4.40605 51.408 4.49444 51.2355 4.59844C51.0631 4.70244 50.8785 4.81084 50.6816 4.92363C50.4852 5.03325 50.2929 5.13866 50.1046 5.23985C49.9168 5.33787 49.7534 5.41887 49.6143 5.48285L48.6462 5.31215L48.6689 5.18339C48.7951 5.08108 48.9412 4.95931 49.107 4.8181C49.2766 4.67426 49.4455 4.52538 49.6136 4.37144C49.7817 4.21751 49.9247 4.07555 50.0427 3.94556L51.6737 4.23314Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M56.1349 9.57394L54.9336 9.1367L53.4612 13.182L52.0733 12.6769L53.5457 8.63155L52.7812 8.35331L53.0247 7.6844L53.925 7.58951L54.0608 7.21637C54.2187 6.78257 54.414 6.47233 54.6469 6.28568C54.8839 6.09709 55.1535 6.00284 55.4558 6.00293C55.7622 6.00109 56.099 6.06697 56.466 6.20057C56.736 6.29884 56.9735 6.41103 57.1784 6.53714C57.3843 6.66021 57.5472 6.77445 57.6669 6.87984L56.9409 7.76995C56.8469 7.69794 56.7427 7.62564 56.6282 7.55307C56.5138 7.4805 56.3762 7.41495 56.2154 7.35643C56.0212 7.28577 55.8571 7.29303 55.7231 7.37821C55.5931 7.46147 55.495 7.59411 55.4288 7.77612L55.3128 8.09465L56.5142 8.5319L56.1349 9.57394Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M60.5652 10.6715L57.8583 15.3601L56.5792 14.6216L59.2862 9.93304L60.5652 10.6715ZM60.9883 8.46665C61.1784 8.57642 61.3161 8.71558 61.4015 8.88414C61.4884 9.0499 61.4625 9.253 61.3237 9.49344C61.1865 9.73108 61.0228 9.85649 60.8325 9.86965C60.6438 9.88003 60.4545 9.83033 60.2644 9.72057C60.0714 9.60919 59.9323 9.46922 59.847 9.30066C59.766 9.13092 59.7942 8.92723 59.9314 8.68959C60.0702 8.44915 60.2317 8.32434 60.416 8.31515C60.6046 8.30477 60.7954 8.35528 60.9883 8.46665Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M62.2434 18.5186L61.1119 17.5692L65.9553 11.7972L67.0867 12.7465L62.2434 18.5186Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M70.0383 18.6066C70.3599 18.9899 70.5628 19.3823 70.6468 19.7838C70.7333 20.1832 70.7001 20.5756 70.5472 20.9609C70.3944 21.3463 70.1164 21.708 69.7133 22.0463L69.1643 22.507L66.92 19.8324C66.6114 20.1124 66.4403 20.4183 66.4067 20.7499C66.3776 21.0819 66.497 21.4074 66.7646 21.7264C66.9867 21.9911 67.2172 22.2106 67.4563 22.385C67.6954 22.5595 67.9669 22.7173 68.2708 22.8584L67.3953 23.593C67.1217 23.4729 66.867 23.32 66.6312 23.1343C66.3974 22.9512 66.1467 22.7001 65.879 22.3811C65.5304 21.9656 65.2979 21.5328 65.1814 21.0827C65.0671 20.635 65.0901 20.1879 65.2506 19.7413C65.4132 19.2973 65.7332 18.875 66.2105 18.4745C66.6952 18.0678 67.1668 17.8111 67.6252 17.7046C68.0882 17.5984 68.5236 17.6251 68.9312 17.7845C69.3414 17.9418 69.7104 18.2158 70.0383 18.6066ZM69.2395 19.2894C69.0549 19.0693 68.8308 18.9455 68.5674 18.9179C68.3061 18.8927 68.0153 18.9956 67.6949 19.2265L69.0271 20.8142C69.1932 20.6706 69.3169 20.5141 69.3981 20.3448C69.4815 20.1779 69.5127 20.0042 69.4918 19.8237C69.473 19.6456 69.3889 19.4675 69.2395 19.2894Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M74.654 25.5274C74.6912 25.5917 74.7297 25.6682 74.7698 25.7569C74.8142 25.8468 74.8462 25.9215 74.8657 25.9811L73.6106 26.5771C73.6004 26.5271 73.5754 26.4613 73.5358 26.3798C73.5006 26.2995 73.4669 26.2314 73.4346 26.1755C73.3394 26.0105 73.2256 25.8619 73.0933 25.7295C72.9625 25.6 72.8142 25.5011 72.6481 25.433C72.4848 25.3632 72.3053 25.3364 72.1095 25.3525C71.9182 25.3698 71.7121 25.4422 71.4912 25.5697L69.105 26.9474L68.3666 25.6683L73.0551 22.9613L73.6144 23.9301L72.935 24.574L72.9713 24.6369C73.1839 24.6372 73.3955 24.6678 73.606 24.729C73.8209 24.7913 74.0183 24.8879 74.1983 25.0188C74.3827 25.151 74.5346 25.3205 74.654 25.5274Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M77.9786 35.7599C78.0654 36.2527 78.0449 36.6939 77.9169 37.0836C77.7921 37.4728 77.5672 37.796 77.2422 38.0533C76.9171 38.3106 76.4955 38.4849 75.9772 38.5763L75.2714 38.7007L74.6652 35.2623C74.2578 35.3506 73.9567 35.5299 73.7618 35.8003C73.5707 36.0733 73.5112 36.4148 73.5836 36.825C73.6435 37.1651 73.7335 37.4705 73.8533 37.7412C73.9731 38.0118 74.1293 38.2842 74.3219 38.5584L73.1965 38.7568C73.0196 38.5159 72.8754 38.2561 72.764 37.9775C72.6532 37.702 72.5616 37.3592 72.4893 36.9491C72.3951 36.415 72.4101 35.9239 72.5343 35.4758C72.6591 35.0309 72.9027 34.6553 73.265 34.3488C73.6278 34.0455 74.116 33.8398 74.7296 33.7316C75.3528 33.6217 75.8895 33.6352 76.3398 33.7722C76.7938 33.9118 77.1575 34.1525 77.4309 34.4944C77.7074 34.8357 77.89 35.2576 77.9786 35.7599ZM76.9454 35.9519C76.8955 35.6689 76.7634 35.4497 76.5491 35.294C76.3354 35.1416 76.0321 35.0853 75.6391 35.125L75.999 37.1661C76.2147 37.1248 76.4 37.0512 76.5551 36.9451C76.7107 36.8423 76.8246 36.7075 76.8968 36.5407C76.9695 36.3771 76.9858 36.1808 76.9454 35.9519Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M78.5156 43.1156C78.5156 43.6934 78.3574 44.1583 78.041 44.5102C77.7279 44.8621 77.2242 45.038 76.5302 45.038H73V43.5611H76.1621C76.5495 43.5611 76.8417 43.49 77.0386 43.348C77.2355 43.2092 77.334 42.9897 77.334 42.6894C77.334 42.2375 77.1807 41.9292 76.874 41.7645C76.5673 41.5999 76.125 41.5175 75.5471 41.5175H73V40.0406H78.4139V41.1689L77.7214 41.3674V41.4498C77.9086 41.566 78.0604 41.7096 78.1766 41.8807C78.2928 42.0551 78.3784 42.2471 78.4332 42.457C78.4881 42.6701 78.5156 42.8896 78.5156 43.1156Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M78.3759 54.7264L76.9335 54.2014C76.6817 54.1097 76.4453 54.0134 76.2244 53.9124C76.0024 53.8144 75.8461 53.7437 75.7553 53.7004L75.7288 53.7732C75.865 53.9465 75.9607 54.1273 76.0158 54.3157C76.0698 54.5071 76.0895 54.7032 76.0748 54.904C76.0601 55.1048 76.0147 55.3099 75.9385 55.5192C75.8049 55.8862 75.6232 56.1826 75.3934 56.4081C75.1666 56.6348 74.8875 56.7737 74.5563 56.8249C74.228 56.8772 73.8455 56.8238 73.4087 56.6648L70.0914 55.4575L70.5966 54.0696L73.568 55.1511C73.932 55.2836 74.2309 55.3168 74.4645 55.2507C74.6981 55.1845 74.8657 55.0119 74.9673 54.7328C75.0689 54.4537 75.0837 54.2101 75.0118 54.0018C74.9429 53.7946 74.7947 53.6119 74.5672 53.4535C74.3427 53.2962 74.05 53.1519 73.689 53.0205L71.2955 52.1493L71.8006 50.7614L78.8811 53.3385L78.3759 54.7264Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M73.4565 60.5662C73.0933 61.1952 72.6779 61.5984 72.2102 61.7757C71.7425 61.953 71.2291 61.8803 70.6699 61.5574L67.5456 59.7536L68.0614 58.8603L68.8417 58.9809L68.861 58.9474C68.7708 58.7164 68.7129 58.5003 68.6873 58.2991C68.6618 58.098 68.6763 57.8921 68.7309 57.6813C68.7855 57.4705 68.8879 57.2351 69.038 56.9751C69.1978 56.6983 69.3946 56.4801 69.6283 56.3206C69.8605 56.1639 70.1219 56.0856 70.4126 56.0857C70.7061 56.0874 71.022 56.1859 71.3603 56.3812C71.858 56.6685 72.1233 57.0547 72.1564 57.5398C72.1923 58.0264 72.021 58.6265 71.6426 59.34L71.1981 60.1681L71.4036 60.2867C71.6496 60.4288 71.8671 60.4686 72.0559 60.4062C72.2448 60.3437 72.4054 60.1979 72.5378 59.9686C72.6685 59.7422 72.7647 59.5014 72.8263 59.2462C72.8879 58.991 72.9327 58.7261 72.9608 58.4515L74.0692 58.5267C74.057 58.8514 73.9998 59.1893 73.8978 59.5404C73.7941 59.8943 73.647 60.2363 73.4565 60.5662ZM70.4516 59.7371L70.7205 59.2326C70.9483 58.8123 71.0404 58.4816 70.997 58.2403C70.9521 58.0019 70.8177 57.8181 70.5941 57.689C70.3984 57.576 70.2255 57.5526 70.0754 57.6188C69.9282 57.6866 69.8013 57.8128 69.6947 57.9973C69.5366 58.2713 69.4845 58.5487 69.5385 58.8297C69.5909 59.1134 69.7666 59.3416 70.0658 59.5144L70.4516 59.7371Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M67.9605 67.7114L63.8133 64.2314L64.5416 63.3634L65.1997 63.6564L65.2495 63.5971C65.1833 63.3898 65.1616 63.182 65.1847 62.9737C65.2077 62.7655 65.2656 62.5634 65.3585 62.3673C65.4513 62.1713 65.5704 61.9867 65.7156 61.8136C65.9646 61.5169 66.2334 61.302 66.522 61.1691C66.813 61.0382 67.1217 61.0043 67.448 61.0674C67.7722 61.133 68.1124 61.3152 68.4685 61.614L71.1728 63.8832L70.2234 65.0146L67.8011 62.982C67.5043 62.733 67.2359 62.5984 66.9958 62.5781C66.7557 62.5579 66.5382 62.664 66.3431 62.8964C66.1501 63.1264 66.0506 63.3505 66.0445 63.5688C66.0408 63.7891 66.1186 64.0103 66.2778 64.2324C66.4374 64.459 66.6644 64.6958 66.9587 64.9427L68.9099 66.58L67.9605 67.7114Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M61.2817 67.6981C61.158 67.8018 61.0484 67.9148 60.953 68.0371C60.855 68.1614 60.7635 68.2909 60.6784 68.4255L59.9718 67.5835C60.0473 67.4274 60.1608 67.2563 60.3123 67.0702C60.4592 66.8837 60.639 66.7012 60.8517 66.5227C61.099 66.3152 61.3548 66.168 61.619 66.0811C61.8829 65.9988 62.1547 66.0089 62.4345 66.1112C62.7138 66.2182 63.0029 66.4497 63.3017 66.8058L64.9795 68.8053L65.5211 68.3508L65.9226 68.8293L65.6169 69.7306L66.025 70.88L65.3017 71.487L64.5609 70.6041L63.3998 71.5784L62.687 70.7289L63.8481 69.7546L62.1703 67.7552C62.0375 67.5969 61.8934 67.5156 61.738 67.5111C61.5821 67.5112 61.43 67.5735 61.2817 67.6981Z"
                    className="fill-secondary-foreground"
                  />
                  <path
                    d="M54.8135 74.1804C54.9405 74.5293 54.9844 74.8293 54.9453 75.0806C54.9074 75.3349 54.8069 75.545 54.6439 75.7108C54.4821 75.8796 54.2783 76.0088 54.0326 76.0982C53.7929 76.1855 53.5568 76.2164 53.3243 76.1911C53.0929 76.1688 52.8794 76.0731 52.6838 75.9038C52.4893 75.7375 52.3285 75.4799 52.2016 75.1311C52.0768 74.7883 52.0349 74.4892 52.0759 74.2338C52.117 73.9783 52.2179 73.7647 52.3786 73.5928C52.5405 73.424 52.7412 73.2959 52.9809 73.2087C53.2266 73.1193 53.4657 73.0872 53.6982 73.1125C53.9318 73.1409 54.1449 73.2402 54.3375 73.4106C54.5301 73.581 54.6887 73.8376 54.8135 74.1804Z"
                    className="fill-primary"
                  />
                </svg>

                <ArrowUpIcon />
              </button>
            </div>
          </section>
        </div>
      )}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center">
          <Image
            className="w-[7rem]"
            src={"/assets/icons/loader.gif"}
            width={500}
            height={500}
            alt="gif"
          />
        </div>
      )}
    </>
  );
}
