/** @format */
"use client";

import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Loader2Icon } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/app/utils/hooks/auth";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email("Adresse email invalide").nonempty("Email requis"),
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .nonempty("Mot de passe requis"),
});

type LoginFormType = z.infer<typeof loginSchema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: LoginFormType) => {
    setIsLoading(true);
    login(data?.email, data?.password)
      .then((res) => {
        console.log(res);
        if (res?.is_user) {
          setIsLoading(false);

          const dataCookie = JSON.stringify(res);
          document.cookie = `clientCustomer=${dataCookie}; path=/`;
          window.location.href = "/profile";
        }
        if (!res?.is_user) {
          setIsLoading(false);

          const dataCookie = JSON.stringify(res);
          document.cookie = `partnerCustomer=${dataCookie}; path=/`;
          window.location.href = "/backoffice/home";
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="login">
      <div className="content_login w-fit flex flex-col gap-[1rem] items-center">
        <div className="logo">
          <Image
            src="/assets/icons/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <h1>Se connecter à la cité dam vert</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <span className="email">
            <label htmlFor="code">Adresse e-mail</label>
            <input type="code" {...register("email")} id="code" />
            {errors.email && (
              <small className="text-red-500">
                {errors.email.message?.toString()}
              </small>
            )}
          </span>
          <span className="password">
            <div>
              <label htmlFor="password">Mot de passe</label>
            </div>
            <input type="password" id="password" {...register("password")} />

            {errors.password && (
              <small className="text-red-500">
                {errors.password.message?.toString()}
              </small>
            )}
          </span>
          <span>
            {!isLoading ? (
              <button type="submit">Se connecter</button>
            ) : (
              <button
                className="flex items-center justify-center gap-1"
                disabled>
                <Loader2Icon className="animate-spin h-4 w-4" /> patientez
              </button>
            )}
          </span>
        </form>
        <div className="bottom_login p-4">
          <p>
            Vous êtes nouveau chez Pioneer ?{" "}
            <Link href={"/register"}>
              <span className="underline text-blue-700">Créez un compte.</span>{" "}
            </Link>
          </p>
        </div>
      </div>
      {isLoading && (
        <div className="absolute left-0 top-0 w-full flex items-center h-[100vh] bg-[#00000052] justify-center">
          {" "}
          <svg
            viewBox="0 0 24 24"
            className="fill-[#f8ae06] w-[45px]"
            xmlns="http://www.w3.org/2000/svg">
            <style jsx>{`
              .spinner {
                transform-origin: center;
                animation: spinner 1s infinite linear;
              }
              @keyframes spinner {
                100% {
                  transform: rotate(360deg);
                }
              }
              .circleAnimation {
                animation: circleAnimation 2s cubic-bezier(0.36, 0.6, 0.31, 1)
                  infinite;
              }
              .circleAnimation1 {
                animation-delay: -0.5s;
              }
              .circleAnimation2 {
                animation-delay: -1s;
              }
              .circleAnimation3 {
                animation-delay: -1.5s;
              }
              @keyframes circleAnimation {
                0% {
                  r: 0;
                }
                25% {
                  r: 3px;
                  cx: 4px;
                }
                50% {
                  r: 3px;
                  cx: 12px;
                }
                75% {
                  r: 3px;
                  cx: 20px;
                }
                100% {
                  r: 0;
                  cx: 20px;
                }
              }
            `}</style>
            <circle className="circleAnimation" cx="4" cy="12" r="3" />
            <circle
              className="circleAnimation circleAnimation1"
              cx="4"
              cy="12"
              r="3"
            />
            <circle
              className="circleAnimation circleAnimation2"
              cx="4"
              cy="12"
              r="3"
            />
            <circle
              className="circleAnimation circleAnimation3"
              cx="4"
              cy="12"
              r="3"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Register;
