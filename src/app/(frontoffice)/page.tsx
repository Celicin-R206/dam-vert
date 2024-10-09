import React from "react";
import Navbar from "./_components/navbar";
import { Button } from "@/components/ui/button";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import Image from "next/image";
import { ChevronRightIcon } from "lucide-react";

const Page = () => {
  return (
    <div>
      <div className="h-screen bg-[url('/assets/images/bg.svg')] bg-fixed bg-no-repeat bg-cover bg-center w-full ">
        <div className="w-[1150px] m-auto relative ">
          <Navbar />
          <div className="hero flex items-center mt-[5rem] flex-col gap-5">
            <div className="text-[4rem] font-[1000] text-center relative ">
              <h1>Make An Impact &</h1>
              <h1 className="flex">
                Give Back To{" "}
                <span className="text-primary n flex items-center flex-col relative">
                  Nature{" "}
                  <svg
                    className="w-[15rem] svg-nature"
                    viewBox="0 0 600 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M359.081 38.8229C279.232 40.3326 199.343 46.3216 119.842 57.0267C82.0441 62.1172 38.1499 61.4809 1.49101 78.8361C-0.335611 79.7095 0.0122627 82.3296 0.0517999 82.5916C0.130874 83.1281 0.463072 84.9122 1.91804 84.9995C2.07619 85.012 3.19106 84.7625 3.61806 84.6751C14.4433 82.4293 25.2291 79.8094 36.0623 77.6883C73.4645 70.3395 110.977 64.7873 148.546 59.9214C198.41 53.4584 248.701 50.0147 298.7 47.3197C326.068 45.8474 354.092 47.8062 381.546 44.7619C391.628 44.6745 401.71 44.6623 411.792 44.7122C453.939 44.9493 496.038 47.4696 538.114 50.9256C551.643 52.0361 561.962 53.2338 575.207 54.0448C580.237 54.3568 588.215 54.5689 593.766 54.7061C594.581 54.7311 596.66 54.7558 597.522 54.7683C597.609 54.7932 597.696 54.7933 597.791 54.7933C598.123 54.7933 598.281 54.7558 598.313 54.7558C600.195 54.3191 600.021 51.5119 599.974 51.0877C599.966 51.0004 599.681 48.6297 598.06 48.5424C597.673 48.5174 594.897 48.4927 593.829 48.4677C588.31 48.3305 580.363 48.1184 575.358 47.8189C562.137 47.0079 551.825 45.8102 538.319 44.6997C496.181 41.2437 454.018 38.7109 411.808 38.4738C406.652 38.4489 401.489 38.4364 396.333 38.4488C396.159 37.7377 395.772 36.9392 394.918 36.5898C394.119 36.2654 388.402 35.9785 386.196 35.6915C369.867 33.5705 370.349 33.6703 352.384 31.936C325.174 29.3034 321.031 28.7042 292.73 27.5938C241.324 25.5725 189.894 25.7349 138.48 25.9346C113.097 26.0469 85.9187 28.7543 60.1483 23.7012C68.6409 22.1291 77.1652 20.9813 85.6736 19.6712C114.726 15.2045 143.801 12.4345 172.972 10.4881C242.945 5.82182 313.028 3.96292 382.978 10.3261C368.088 10.5507 353.206 11.0745 338.316 11.4114C277.706 12.8088 216.51 11.7609 156.026 19.0099C154.943 19.1471 154.128 20.6443 154.207 22.3536C154.286 24.0754 155.243 25.3606 156.327 25.2358C216.731 17.9868 277.84 19.0472 338.372 17.6498C360.86 17.1383 383.341 16.2151 405.83 16.4896C413.548 16.5894 421.265 17.0386 428.983 17.1883C430.509 17.2258 434.439 17.6999 435.001 17.5002C436.242 17.0636 436.511 15.6162 436.59 14.905C436.629 14.4808 436.756 12.0353 434.858 11.1619C421.906 5.19803 398.002 5.47252 385.413 4.2997C314.602 -2.313 243.648 -0.466487 172.806 4.24974C143.564 6.2086 114.417 8.9911 85.2861 13.4703C75.1093 15.0299 64.9087 16.3773 54.7713 18.4485C53.1345 18.7854 49.4576 19.2721 47.6784 19.7836C46.9351 19.9957 46.3974 20.2949 46.1601 20.507C45.235 21.3305 45.0689 22.5283 45.0689 23.3393C45.061 23.9631 45.2271 26.159 47.1644 26.7579C76.6829 35.8785 108.803 32.2977 138.487 32.173C189.87 31.9733 241.26 31.8109 292.635 33.8322C320.865 34.9426 324.992 35.5293 352.146 38.1619C354.827 38.4114 357.097 38.6357 359.081 38.8229Z"
                      fill="#16a34a"
                    />
                  </svg>
                </span>
              </h1>
            </div>
            <p className="w-[70%] m-auto text-center">
              Voluptates consectetur porro dolore. Quibusdam hac veniam dolorem
              soluta ab consectetur architecto. Repellendus nec, eget vivamus
              quo illo, illum curae, alias egestas aut rerum impedit.
            </p>
            <div className="flex items-center gap-4">
              <Button className="py-6 px-5 rounded-full flex uppercase flex items-center gap-2">
                <p>Voir les evenements</p>
                <ChevronRightIcon className="text-white w-[1rem] stroke-[4px] " />
              </Button>
              <Button className="py-6 px-5 rounded-full uppercase flex items-center gap-2">
                <p>Vendre des produits</p>
                <ChevronRightIcon className="text-white w-[1rem] stroke-[4px] " />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-primary h-[37rem] py-[5rem] ">
        <div className="w-[1150px] m-auto flex gap-8 ">
          <div className="text-white  w-full flex flex-col gap-4 ">
            <h2 className="text-[2.5rem] font-[900] relative">
              Let's Join To Build The Better World{" "}
              <span className="text-secondary">
                Together{" "}
                <svg
                  className="w-[12rem] svg-nature absolute z-0 right-[5rem]"
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
              </span>
            </h2>
            <p className="z-10 mt-6">
              Odit fugit excepteur eiusmod fames, aliqua odio phasellus aliqua
              aenean, ratione primis. Nobis molestie adipisicing iaculis vel do,
              assumenda rutrum? Consequatur unde impedit scelerisque cillum
              aliqua odio phasellus .
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
      <div className="w-[1150px] m-auto mt-[-7rem] mb-5 grid grid-cols-4 gap-4">
        {dataFake?.map((value, index) => {
          return (
            <div
              key={index}
              className="w-[17rem] rounded-lg py-8 bg-white shadow-lg p-5 flex flex-col items-center text-center gap-4">
              <Image
                className="w-[5rem]"
                src={value?.image}
                width={500}
                height={500}
                alt="icon"
              />
              <h2 className="text-[1.2rem] font-[700] ">{value?.title}</h2>
              <p className="text-[14px]">{value?.description}</p>
              <Button className="bg-primary rounded-full">DONATE NOW</Button>
            </div>
          );
        })}
      </div>
      <div className="w-[1150px] m-auto mt-[5rem] flex items-center gap-14 py-4">
        <div className="bg-primary py-6 px-[4rem] text-white relative ">
          <p className="text-[4rem] font-[1000] absolute left-[-1rem] text-secondary top-[50%] translate-y-[-50%] ">
            1.
          </p>
          <h2 className="text-[1.3rem] font-[900]">Recurrring Donation</h2>
          <p>
            Dolorem interdum iure pharetra quia sapien, ipsum eligendi rerum
            volups tatibus sed dolor circum.
          </p>
        </div>
        <div className="bg-secondary py-6 px-[4rem] text-white relative ">
          <p className="text-[4rem] font-[1000] absolute left-[-1rem] text-primary top-[50%] translate-y-[-50%] ">
            2.
          </p>
          <h2 className="text-[1.3rem] font-[900] text-black ">
            Ongoing Circumstance
          </h2>
          <p className="text-black">
            Dolorem interdum iure pharetra quia sapien, ipsum eligendi rerum
            volups tatibus sed dolor circum.
          </p>
        </div>
      </div>
      <section className="w-[1150px] m-auto py-[5rem]">
        <div className="flex relative items-center flex-col justify-center">
          <h1 className="text-[2.5rem] z-10 text-primary font-[900] relative w-fit">
            Checkout Popular <span className="text-secondary">Causes</span>
            <svg
              className="w-[8rem] svg-nature absolute z-0 right-[-2rem]"
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

          <p className="text-[3.5rem] top-[-2rem] opacity-5 z-0 uppercase font-[900] absolute">
            popular causes
          </p>
          <p className="mt-4 w-[50%] text-center relative ">
            Assumenda occaecat cursus iaculis ab non, assumenda natoque aliquid
            sunt fusce quasi quod unde, ridiculus.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-6 mt-14">
            {fakeEvents?.map((value, index) => {
              return (
                <div key={index}>
                  <div className="h-[15rem] overflow-hidden rounded-t-[20px]">
                    <Image
                      className="w-full h-full object-cover"
                      src={value?.photo}
                      width={1000}
                      height={1000}
                      alt="event"
                    />
                  </div>
                  <div className="border px-4 py-5">
                    <div className="flex gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-primary font-[900]">
                          {value?.date}
                        </span>
                        <span className="text-[1.5rem]">{value?.jour}</span>
                      </div>
                      <div>
                        <h1 className="font-[900] text-[1rem]">
                          {value?.title}
                        </h1>
                        <p className="mt-2 text-[13px] opacity-50">
                          {value?.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="border border-primary text-[12px] rounded-full px-4 py-2 hover:bg-primary hover:text-white hover:transition-all hover:duration-500">
                        Rerserver
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center p-8">
            <Button className="py-6 px-14 rounded-full">Voire tout</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const dataFake = [
  {
    image: "/assets/icons/icon1-1.png",
    title: "Solar Energy",
    description: "Ad maxime magins nam phasellus lacus nostrud eaque quisque.",
  },
  {
    image: "/assets/icons/icon2-1.png",
    title: "Planting Project",
    description: "Ad maxime magins nam phasellus lacus nostrud eaque quisque.",
  },
  {
    image: "/assets/icons/icon4-1.png",
    title: "Recycle Project",
    description: "Ad maxime magins nam phasellus lacus nostrud eaque quisque.",
  },
  {
    image: "/assets/icons/icon3-1.png",
    title: "Be A Volunteer",
    description: "Ad maxime magins nam phasellus lacus nostrud eaque quisque.",
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
