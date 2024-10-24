"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import Image from "next/image";
import { CalendarClockIcon, ChevronRightIcon } from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { useAllEvent } from "../utils/hooks/event";
import { EventType } from "../utils/types/api";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

const Page = () => {
  const router = useRouter();
  const { allEvent } = useAllEvent();
  const selectEvent = (event: EventType) => {
    if (event) {
      const encodedEvent = encodeURIComponent(JSON.stringify(event));
      router.push(`/event/${encodedEvent}`);
    }
  };

  return (
    <div>
      <div className="h-screen bg-[url('/assets/images/bg.svg')] bg-fixed bg-no-repeat bg-cover bg-center w-full ">
        <div className="px-[5rem] custom-640:px-[2rem] relative ">
          <div className="hero flex items-center pt-[11rem] flex-col gap-5">
            <div className="text-[4rem] custom-950:text-[3rem] custom-768:text-[2.5rem] custom-640:text-[1.5rem] font-[900] text-center relative ">
              <h1>Un avenir Sain </h1>

              <h1 className="flex">
                Pour
                <span className="text-primary ml-4 n flex items-center flex-col relative">
                  <FlipWords
                    words={["Vous", "La-planete"]}
                    className="font-serif italic text-primary"
                  />
                  <svg
                    className="w-[15rem] custom-768:w-[10rem] custom-640:w-[6rem] custom-640:text-[2rem] svg-nature"
                    viewBox="0 0 600 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M359.081 38.8229C279.232 40.3326 199.343 46.3216 119.842 57.0267C82.0441 62.1172 38.1499 61.4809 1.49101 78.8361C-0.335611 79.7095 0.0122627 82.3296 0.0517999 82.5916C0.130874 83.1281 0.463072 84.9122 1.91804 84.9995C2.07619 85.012 3.19106 84.7625 3.61806 84.6751C14.4433 82.4293 25.2291 79.8094 36.0623 77.6883C73.4645 70.3395 110.977 64.7873 148.546 59.9214C198.41 53.4584 248.701 50.0147 298.7 47.3197C326.068 45.8474 354.092 47.8062 381.546 44.7619C391.628 44.6745 401.71 44.6623 411.792 44.7122C453.939 44.9493 496.038 47.4696 538.114 50.9256C551.643 52.0361 561.962 53.2338 575.207 54.0448C580.237 54.3568 588.215 54.5689 593.766 54.7061C594.581 54.7311 596.66 54.7558 597.522 54.7683C597.609 54.7932 597.696 54.7933 597.791 54.7933C598.123 54.7933 598.281 54.7558 598.313 54.7558C600.195 54.3191 600.021 51.5119 599.974 51.0877C599.966 51.0004 599.681 48.6297 598.06 48.5424C597.673 48.5174 594.897 48.4927 593.829 48.4677C588.31 48.3305 580.363 48.1184 575.358 47.8189C562.137 47.0079 551.825 45.8102 538.319 44.6997C496.181 41.2437 454.018 38.7109 411.808 38.4738C406.652 38.4489 401.489 38.4364 396.333 38.4488C396.159 37.7377 395.772 36.9392 394.918 36.5898C394.119 36.2654 388.402 35.9785 386.196 35.6915C369.867 33.5705 370.349 33.6703 352.384 31.936C325.174 29.3034 321.031 28.7042 292.73 27.5938C241.324 25.5725 189.894 25.7349 138.48 25.9346C113.097 26.0469 85.9187 28.7543 60.1483 23.7012C68.6409 22.1291 77.1652 20.9813 85.6736 19.6712C114.726 15.2045 143.801 12.4345 172.972 10.4881C242.945 5.82182 313.028 3.96292 382.978 10.3261C368.088 10.5507 353.206 11.0745 338.316 11.4114C277.706 12.8088 216.51 11.7609 156.026 19.0099C154.943 19.1471 154.128 20.6443 154.207 22.3536C154.286 24.0754 155.243 25.3606 156.327 25.2358C216.731 17.9868 277.84 19.0472 338.372 17.6498C360.86 17.1383 383.341 16.2151 405.83 16.4896C413.548 16.5894 421.265 17.0386 428.983 17.1883C430.509 17.2258 434.439 17.6999 435.001 17.5002C436.242 17.0636 436.511 15.6162 436.59 14.905C436.629 14.4808 436.756 12.0353 434.858 11.1619C421.906 5.19803 398.002 5.47252 385.413 4.2997C314.602 -2.313 243.648 -0.466487 172.806 4.24974C143.564 6.2086 114.417 8.9911 85.2861 13.4703C75.1093 15.0299 64.9087 16.3773 54.7713 18.4485C53.1345 18.7854 49.4576 19.2721 47.6784 19.7836C46.9351 19.9957 46.3974 20.2949 46.1601 20.507C45.235 21.3305 45.0689 22.5283 45.0689 23.3393C45.061 23.9631 45.2271 26.159 47.1644 26.7579C76.6829 35.8785 108.803 32.2977 138.487 32.173C189.87 31.9733 241.26 31.8109 292.635 33.8322C320.865 34.9426 324.992 35.5293 352.146 38.1619C354.827 38.4114 357.097 38.6357 359.081 38.8229Z"
                      fill="#1c5e34"
                    />
                  </svg>
                </span>
              </h1>
            </div>
            <p className="w-[70%] custom-768:w-full m-auto text-center">
              Prenez soin de votre santé sexuelle tout en agissant pour un
              environnement durable. Ensemble, combattons les effets du
              changement climatique et protégeons notre planète, tout en offrant
              des ressources et des conseils essentiels pour le bien-être des
              femmes.
            </p>
            <div className="flex items-center custom-768:flex-col-reverse gap-4">
              <Button className="py-6 px-5 rounded-full flex items-center gap-2">
                <p>Voire les formations</p>
              </Button>
              <div className="z-10 flex items-center justify-center">
                <AnimatedGradientText className="py-4 rounded-full">
                  🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
                  <span
                    className={cn(
                      `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                    )}>
                    Voire tout les evenements
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-primary h-[40rem] custom-950:h-full py-[5rem] ">
        <div className="w-[80%] m-auto flex gap-14 custom-950:flex-col ">
          <div className="text-white  w-full flex flex-col gap-4 ">
            <h2 className="text-[2.5rem] custom-768:text-[1.8rem] font-[900] relative">
              Renforcer l'autonomisation des femmes et leur santé sexuelle face
              aux
              <span className="text-secondary"> défis climatiques</span>
            </h2>
            <p className="z-10 mt-6">
              Ensemble, nous œuvrons pour un monde où la santé sexuelle des
              femmes et la protection de l'environnement sont au cœur des
              priorités. En unissant nos efforts, nous créons des solutions
              durables face aux défis du changement climatique, tout en
              améliorant le bien-être des femmes à travers l'éducation et
              l'accès à des ressources essentielles.
            </p>
          </div>
          <div className="w-full">
            <div className="relative">
              <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                thumbnailAlt="Hero Video"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
                thumbnailAlt="Hero Video"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="w-[1150px] custom-1280:w-[80%] m-auto mt-[-7rem] custom-950:mt-[2rem] mb-5 grid grid-cols-4 custom-1280:grid-cols-2 custom-768:grid-cols-1 gap-4">
        {dataFake?.map((value, index) => {
          return (
            <div
              key={index}
              className="w-full rounded-lg py-8 bg-white shadow-lg p-5 flex flex-col items-center text-center gap-4">
              <Image
                className="w-[5rem]"
                src={value?.image}
                width={500}
                height={500}
                alt="icon"
              />
              <h2 className="text-[1.2rem] font-[700] ">{value?.title}</h2>
              <p className="text-[14px]">{value?.description}</p>
              <Button className="bg-primary rounded-full">
                EN SAVOIR PLUS
              </Button>
            </div>
          );
        })}
      </div>
      <div className="w-[80%] m-auto mt-[5rem] flex custom-950:flex-col gap-14 py-4">
        <div className="bg-primary py-6 px-[4rem] custom-950:px-[3rem] text-white relative ">
          <p className="text-[4rem] font-[1000] absolute left-[-1rem] text-secondary top-[50%] translate-y-[-50%] ">
            1.
          </p>
          <h2 className="text-[1.3rem] font-[900]">Agir Ensemble</h2>
          <p>
            Ensemble, nous pouvons surmonter les défis environnementaux et
            améliorer la santé des femmes. Chaque action compte pour un futur
            plus vert et plus sain.
          </p>
        </div>
        <div className="bg-secondary py-6 px-[4rem] custom-950:px-[3rem] text-white relative ">
          <p className="text-[4rem] font-[1000] absolute left-[-1rem] text-primary top-[50%] translate-y-[-50%] ">
            2.
          </p>
          <h2 className="text-[1.3rem] font-[900] text-black ">
            Soutenir & Préserver
          </h2>
          <p className="text-black">
            En soutenant les initiatives de santé sexuelle et de protection de
            l'environnement, nous préservons notre planète et assurons le
            bien-être des générations futures.
          </p>
        </div>
      </div>
      <section className="w-[80%] m-auto py-[5rem]">
        <div className="flex relative items-center flex-col justify-center">
          <h1 className="text-[2.5rem] custom-640:text-[1.5rem] z-10 text-primary font-[900] relative w-fit">
            Découvrez Nos Événements à{" "}
            <span className="text-secondary">venir</span>
            <svg
              className="w-[8rem] custom-640:w-[5rem] custom-640:right-0 svg-nature absolute z-0 right-[-2rem]"
              viewBox="0 0 600 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M359.081 38.8229C279.232 40.3326 199.343 46.3216 119.842 57.0267C82.0441 62.1172 38.1499 61.4809 1.49101 78.8361C-0.335611 79.7095 0.0122627 82.3296 0.0517999 82.5916C0.130874 83.1281 0.463072 84.9122 1.91804 84.9995C2.07619 85.012 3.19106 84.7625 3.61806 84.6751C14.4433 82.4293 25.2291 79.8094 36.0623 77.6883C73.4645 70.3395 110.977 64.7873 148.546 59.9214C198.41 53.4584 248.701 50.0147 298.7 47.3197C326.068 45.8474 354.092 47.8062 381.546 44.7619C391.628 44.6745 401.71 44.6623 411.792 44.7122C453.939 44.9493 496.038 47.4696 538.114 50.9256C551.643 52.0361 561.962 53.2338 575.207 54.0448C580.237 54.3568 588.215 54.5689 593.766 54.7061C594.581 54.7311 596.66 54.7558 597.522 54.7683C597.609 54.7932 597.696 54.7933 597.791 54.7933C598.123 54.7933 598.281 54.7558 598.313 54.7558C600.195 54.3191 600.021 51.5119 599.974 51.0877C599.966 51.0004 599.681 48.6297 598.06 48.5424C597.673 48.5174 594.897 48.4927 593.829 48.4677C588.31 48.3305 580.363 48.1184 575.358 47.8189C562.137 47.0079 551.825 45.8102 538.319 44.6997C496.181 41.2437 454.018 38.7109 411.808 38.4738C406.652 38.4489 401.489 38.4364 396.333 38.4488C396.159 37.7377 395.772 36.9392 394.918 36.5898C394.119 36.2654 388.402 35.9785 386.196 35.6915C369.867 33.5705 370.349 33.6703 352.384 31.936C325.174 29.3034 321.031 28.7042 292.73 27.5938C241.324 25.5725 189.894 25.7349 138.48 25.9346C113.097 26.0469 85.9187 28.7543 60.1483 23.7012C68.6409 22.1291 77.1652 20.9813 85.6736 19.6712C114.726 15.2045 143.801 12.4345 172.972 10.4881C242.945 5.82182 313.028 3.96292 382.978 10.3261C368.088 10.5507 353.206 11.0745 338.316 11.4114C277.706 12.8088 216.51 11.7609 156.026 19.0099C154.943 19.1471 154.128 20.6443 154.207 22.3536C154.286 24.0754 155.243 25.3606 156.327 25.2358C216.731 17.9868 277.84 19.0472 338.372 17.6498C360.86 17.1383 383.341 16.2151 405.83 16.4896C413.548 16.5894 421.265 17.0386 428.983 17.1883C430.509 17.2258 434.439 17.6999 435.001 17.5002C436.242 17.0636 436.511 15.6162 436.59 14.905C436.629 14.4808 436.756 12.0353 434.858 11.1619C421.906 5.19803 398.002 5.47252 385.413 4.2997C314.602 -2.313 243.648 -0.466487 172.806 4.24974C143.564 6.2086 114.417 8.9911 85.2861 13.4703C75.1093 15.0299 64.9087 16.3773 54.7713 18.4485C53.1345 18.7854 49.4576 19.2721 47.6784 19.7836C46.9351 19.9957 46.3974 20.2949 46.1601 20.507C45.235 21.3305 45.0689 22.5283 45.0689 23.3393C45.061 23.9631 45.2271 26.159 47.1644 26.7579C76.6829 35.8785 108.803 32.2977 138.487 32.173C189.87 31.9733 241.26 31.8109 292.635 33.8322C320.865 34.9426 324.992 35.5293 352.146 38.1619C354.827 38.4114 357.097 38.6357 359.081 38.8229Z"
                fill="#feda48"
              />
            </svg>
          </h1>

          <p className="text-[3.5rem] custom-640:text-[2.5rem] top-[-2rem] opacity-5 z-0 uppercase font-[900] absolute">
            Événements à venir
          </p>
          <p className="mt-4 w-[50%] custom-640:w-full text-center relative ">
            Participez à nos événements enrichissants et engageants, conçus pour
            sensibiliser et mobiliser des actions en faveur de la santé des
            femmes et de la protection de l'environnement. Rejoignez-nous pour
            faire la différence et créer un impact positif dans notre
            communauté.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 custom-1280:grid-cols-2 custom-950:grid-cols-1 gap-6 mt-14">
            {allEvent?.slice(0, 3).map((value: EventType, index: number) => {
              return (
                <div key={index}>
                  <div className="h-[15rem] border-[2px] overflow-hidden rounded-t-[20px]">
                    <img
                      className="w-full h-full object-cover"
                      // @ts-ignore
                      src={value?.images?.[0]?.image_url}
                      width={1000}
                      height={1000}
                      alt="event"
                    />
                  </div>
                  <div className="border px-4 py-5">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-primary flex items-center">
                          <CalendarClockIcon className="w-[1rem]" />
                          <span className="text-[13px]  font-[700] px-3 p-1 rounded-sm">
                            {value?.date_debut} à {value?.date_fin}
                          </span>
                        </span>
                      </div>
                      <div>
                        <h1 className="font-[900] text-[1rem]">
                          {value?.name_evenement}
                        </h1>
                        <p className="mt-2 text-[13px] opacity-50">
                          {value?.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={() => selectEvent(value)}
                        className="border w-full mt-2 border-primary p-1 font-[600] text-primary hover:bg-primary hover:text-white transition-all duration-100 rounded-full">
                        Rerserver
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            {!allEvent &&
              [1, 2, 3]?.map((value, index) => {
                return (
                  <div key={index}>
                    <div className="h-[15rem] border-[2px] overflow-hidden rounded-t-[20px]">
                      <Skeleton className="w-full h-full object-cover bg-gray-100 " />
                    </div>
                    <div className="border px-4 py-5">
                      <div className="flex flex-col gap-4">
                        <div className="flex uppercase flex-col gap-2">
                          <span className="text-primary flex items-center gap-4">
                            <span className="bg-secondary text-[12px]  font-[700] px-3 p-1 rounded-sm">
                              <Skeleton className="w-[5rem] bg-gray-400 h-3 " />
                            </span>
                            <span className="bg-secondary  text-[12px] font-[700] px-3 p-1 rounded-sm">
                              <Skeleton className="w-[5rem] bg-gray-400 h-3 " />
                            </span>
                          </span>
                        </div>
                        <div>
                          <h1 className="font-[900] text-[1rem]">
                            <Skeleton className="w-[5rem] bg-gray-400 h-3 " />
                          </h1>
                          <div className="mt-2 text-[13px] opacity-50 flex flex-col gap-2">
                            <Skeleton className="w-[10rem] bg-gray-400 h-2 " />
                            <Skeleton className="w-[17rem] bg-gray-400 h-2 " />
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="border w-full border-primary text-[12px] rounded-full px-4 py-2 hover:bg-primary hover:text-white hover:transition-all hover:duration-500">
                          Rerserver
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex items-center justify-center p-8">
            <Button
              onClick={() => router?.push("/event")}
              className="py-6 px-14 rounded-full">
              Voire tout
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const dataFake = [
  {
    image: "/assets/icons/icon1-1.png",
    title: "Météo",
    description:
      "Aidez à promouvoir l'énergie propre et renouvelable pour un avenir plus durable.",
  },
  {
    image: "/assets/icons/icon2-1.png",
    title: "Santé sexuel",
    description:
      "Assurez l'accès à l'éducation et aux soins pour des relations saines.",
  },
  {
    image: "/assets/icons/icon4-1.png",
    title: "Projet de Recyclage",
    description:
      "Contribuez à réduire les déchets et à protéger notre planète grâce au recyclage.",
  },
  {
    image: "/assets/icons/icon3-1.png",
    title: "Engagement",
    description:
      "Restez informé des prévisions pour mieux planifier vos activités.",
  },
];

const fakeEvents = [
  {
    id: 1,
    photo: "/assets/images/events.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "15",
  },
  {
    id: 2,
    photo: "/assets/images/events1.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "18",
  },
  {
    id: 3,
    photo: "/assets/images/events2.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "15",
  },
  {
    id: 4,
    photo: "/assets/images/events.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "15",
  },
  {
    id: 5,
    photo: "/assets/images/events1.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "18",
  },
  {
    id: 6,
    photo: "/assets/images/events2.jpg",
    title: "Indonesia - Korea Conference",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Doloribus quidem facere perferendis soluta!",
    date: "SEPT",
    jour: "15",
  },
];

export default Page;
