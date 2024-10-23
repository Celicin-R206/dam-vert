import React, { useEffect, useState } from "react";
import AnimatedCircularProgressBar from "@/components/ui/animated-circular-progress-bar";

const Catastrophe = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const handleIncrement = (prev: number) => {
      if (prev === 0) {
        return 0;
      }
      return prev + 10;
    };
    setValue(handleIncrement);
    const interval = setInterval(() => setValue(handleIncrement), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-[5rem]">
      <div className="w-full">
        <img
          className="object-cover"
          src="/assets/images/mada.png"
          alt="mada"
        />
      </div>
      <div className="py-16">
        <div className="flex gap-4 items-center">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={value}
            gaugePrimaryColor="red"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
          />
          <div>
            <h1 className="font-[800]">Danger imminent</h1>
            <p>
              Un danger imminent indique qu'une catastrophe naturelle est en
              train de se produire ou qu'elle est sur le point de se produire.
              Il est essentiel de prendre des mesures immédiates pour se
              protéger et se mettre à l'abri. Restez informé et suivez les
              directives des autorités locales.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={value}
            gaugePrimaryColor="yellow"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
          />
          <div>
            <h1 className="font-[800]">Avi de ménace</h1>
            <p>
              Un avertissement de menace signale qu'il y a un risque élevé de
              catastrophe naturelle. Bien que cela ne soit pas imminent, il est
              crucial de rester vigilant et préparé. Suivez les mises à jour et
              prenez des mesures de précaution pour assurer votre sécurité et
              celle de vos proches.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <AnimatedCircularProgressBar
            max={100}
            min={0}
            value={value}
            gaugePrimaryColor="green"
            gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
          />
          <div>
            <h1 className="font-[800]">Pas de danger</h1>
            <p>
              Lorsque le niveau de menace est "pas de danger", cela signifie
              qu'il n'y a pas de risque immédiat de catastrophe naturelle.
              Cependant, il est toujours conseillé de rester informé et de
              préparer des plans d'urgence pour se protéger en cas de besoin à
              l'avenir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catastrophe;
