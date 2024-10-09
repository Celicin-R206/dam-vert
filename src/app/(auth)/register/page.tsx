/** @format */
"use client";

import React, { useState } from "react";
import "./style.css";
import Image from "next/image";
import { HandshakeIcon, MoveLeftIcon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { register_partner, register_personel } from "@/app/utils/hooks/auth";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  // --------------------------------------------- //

  const [selectAccount, setSelectAccount] = useState("Partenaire");
  const [step, setStep] = useState(1);
  const [isLoading, setIsoloading] = useState(false);

  const handleAccountSelect = () => {
    setStep(2);
  };

  const initalPersonnel = {
    first_name: "",
    last_name: "",
    adress: "",
    contact: "",
    sexe: "",
    email: "",
    password: "",
    password_confirm: "",
  };

  const [personnelData, setPersonnelData] = useState(initalPersonnel);

  const initalPartner = {
    first_name: "",
    last_name: "",
    adress: "",
    contact: "",
    sexe: "",
    email: "",
    domaine: "",
    profession: "",
    organisation: "",
    password: "",
    password_confirm: "",
  };

  const [partnerData, setPartnerData] = useState(initalPartner);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPersonnelData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setPartnerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let first_name = personnelData?.first_name;
    let last_name = personnelData?.last_name;
    let adress = personnelData?.adress;
    let contact = personnelData?.contact;
    let email = personnelData?.email;
    let sexe = personnelData?.sexe;
    let password = personnelData?.password;
    setIsoloading(true);
    const res = register_personel(
      first_name,
      last_name,
      adress,
      contact,
      email,
      sexe,
      password
    )
      .then((res) => {
        setIsoloading(false);
        toast.success("Inscription est efféctuer avec succès !", {
          duration: 6000,
        });
        setPersonnelData(initalPersonnel);
        router.push("/login");
      })
      .catch((err) => {
        toast.error("Erreur lors de l'inscription !", {
          duration: 6000,
        });
        setIsoloading(false);
      });
  };

  const handleSubmitPartner = (e: React.FormEvent) => {
    e.preventDefault();
    let first_name = partnerData?.first_name;
    let last_name = partnerData?.last_name;
    let adress = partnerData?.adress;
    let contact = partnerData?.contact;
    let email = partnerData?.email;
    let sexe = partnerData?.sexe;
    let domaine = partnerData?.domaine;
    let profession = partnerData?.profession;
    let organisation = partnerData?.organisation;
    let password = partnerData?.password;
    setIsoloading(true);
    register_partner(
      first_name,
      last_name,
      adress,
      contact,
      email,
      sexe,
      domaine,
      profession,
      organisation,
      password
    )
      .then((res) => {
        setIsoloading(false);
        toast.success("Inscription est efféctuer avec succès !", {
          duration: 6000,
        });
        setPartnerData(initalPartner);
        router.push("/login");
      })
      .catch((err) => {
        toast.error("Erreur lors de l'inscription !", {
          duration: 6000,
        });
        setIsoloading(false);
      });
  };

  const isIncomplete = (obj: any) => {
    return Object.values(obj).some(
      (value) => value === "" || value === undefined || value === null
    );
  };
  const isIncompletePartner = (obj: any) => {
    return Object.values(obj).some(
      (value) => value === "" || value === undefined || value === null
    );
  };

  return (
    <div className="register">
      {step === 1 && (
        <div className="bg-white rounded-2xl p-8 mt-[5rem] w-[40%] ">
          <Link href={"/"}>
            <span className="text-[#5A48B4] mb-3 cursor-pointer border-[2px] border-[#5A48B4] w-fit py-1 px-4 rounded-full flex items-center gap-2 text-[12px]">
              <div className="flex items-center gap-2">
                <MoveLeftIcon className="w-[1rem]" /> <p>Retour</p>
              </div>
            </span>
          </Link>
          <h1 className="text-[1.3rem] font-[800] mb-6 ">
            Sélectionner le compte que vous voulez créer
          </h1>
          <p className="text-[13px] text-[#888] ">
            Choisissez le type de compte qui correspond à vos besoins.
          </p>

          <div className="mt-[3rem] flex flex-col gap-8">
            {/* Compte Partenaire */}
            <div
              className={`flex border-[3px] items-center gap-3 ${
                selectAccount == "Partenaire" && "bg-green-100"
              } p-4 rounded-2xl cursor-pointer`}
              onClick={() => setSelectAccount("Partenaire")}>
              <div
                className={`w-[5rem] h-[5rem] border-[2px] ${
                  selectAccount == "Partenaire" && "bg-primary text-white"
                } grid place-content-center rounded-xl`}>
                <HandshakeIcon />
              </div>
              <span>
                <h2 className="text-[1.2rem] font-[800] ">Partenaire</h2>
                <p>Créer un compte pour les partenaires commerciaux.</p>
              </span>
            </div>

            {/* Compte Personnel */}
            <div
              className={`flex border-[3px] items-center gap-3 ${
                selectAccount == "Personnel" && "bg-green-100"
              } p-4 rounded-2xl cursor-pointer`}
              onClick={() => setSelectAccount("Personnel")}>
              <div
                className={`w-[5rem] h-[5rem] border-[2px] ${
                  selectAccount == "Personnel" && "bg-primary text-white"
                } grid place-content-center rounded-xl`}>
                <User />
              </div>
              <span>
                <h2 className="text-[1.2rem] font-[800] ">Personnel</h2>
                <p>Créer un compte personnel pour vous-même.</p>
              </span>
            </div>

            <Button
              className="py-[1.8rem]"
              onClick={() => handleAccountSelect()}>
              Next step
            </Button>
          </div>
        </div>
      )}

      {step === 2 && selectAccount === "Partenaire" && (
        <div className="content_register w-fit flex flex-col gap-[1rem] items-center">
          <div className="logo">
            <Image
              src="/assets/icons/logo.png"
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <h1>S'inscrire à DamVert en tant que compte {selectAccount} </h1>
          <form onSubmit={handleSubmitPartner}>
            <span
              onClick={() => setStep(1)}
              className="text-[#5A48B4] cursor-pointer border-[2px] border-[#5A48B4] w-fit py-1 px-4 rounded-full flex items-center gap-2 text-[12px]">
              <div className="flex items-center gap-2">
                <MoveLeftIcon className="w-[1rem]" /> <p>Retour</p>
              </div>
            </span>
            <h2 className="font-[800] text-[1.2rem] ">Information personnel</h2>
            <div className="form-groupe">
              <span>
                <label htmlFor="first_name">Nom</label>
                <input
                  type="text"
                  name="first_name"
                  onChange={handleChange}
                  id="first_name"
                />
              </span>
              <span>
                <label htmlFor="last_name">Prénoms</label>
                <input
                  type="text"
                  name="last_name"
                  onChange={handleChange}
                  id="last_name"
                />
              </span>
            </div>
            <div className="form-groupe">
              <span>
                <label htmlFor="adress">Adresse</label>
                <input
                  type="text"
                  name="adress"
                  onChange={handleChange}
                  id="adress"
                />
              </span>
              <span>
                <label htmlFor="contact">Tépéhone</label>
                <input
                  type="text"
                  name="contact"
                  onChange={handleChange}
                  id="contact"
                />
              </span>
            </div>
            <span>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                id="email"
              />
            </span>
            <span>
              <label htmlFor="sexe">Sexe</label>
              <select
                name="sexe"
                id="sexe"
                onChange={handleChange}
                className="border-[2px] p-[.3rem] rounded-sm">
                <option value="select sex"></option>
                <option value="masculin">Masculin</option>
                <option value="feminin">Féminin</option>
              </select>
            </span>

            <h2 className="font-[800] text-[1.2rem] ">
              Information professionel
            </h2>
            <div className="form-groupe">
              <span>
                <label htmlFor="domaine">Domaine</label>
                <input
                  type="text"
                  name="domaine"
                  onChange={handleChange}
                  id="domaine"
                />
              </span>
              <span>
                <label htmlFor="profession">Proffession</label>
                <input
                  type="text"
                  name="profession"
                  onChange={handleChange}
                  id="profession"
                />
              </span>
            </div>

            <span>
              <label htmlFor="organisation">Nom Organisation</label>
              <input
                type="text"
                name="organisation"
                onChange={handleChange}
                id="organisation"
              />
            </span>
            <div className="form-groupe">
              <span className="password">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  id="password"
                />
              </span>
              <span className="password_confirm">
                <label htmlFor="password_confirm">Confirmer mot de passe</label>
                <input
                  type="password"
                  onChange={handleChange}
                  name="password_confirm"
                  id="password_confirm"
                />
              </span>
            </div>
            <span>
              {partnerData && !isLoading && (
                <Button
                  type="submit"
                  disabled={isIncompletePartner(partnerData)}>
                  Créer
                </Button>
              )}
              {isLoading && (
                <Button className="flex items-center gap-1" disabled>
                  <Loader2Icon className="animate-spin h-4 w-4" /> patientez
                </Button>
              )}
            </span>
          </form>
          <div className="bottom_register">
            <p>Sign in with a passkey</p>
            <p>
              New to Pioneer ? <Link href={"/login"}>Create an account</Link>
            </p>
          </div>
        </div>
      )}
      {step === 2 && selectAccount === "Personnel" && (
        <div className="content_register w-fit flex flex-col gap-[1rem] items-center">
          <div className="logo">
            <Image
              src="/assets/icons/logo.png"
              width={100}
              height={100}
              alt="logo"
            />
          </div>
          <h1>S'inscrire à DamVert en tant que compte {selectAccount} </h1>
          <form onSubmit={handleSubmit}>
            <span
              onClick={() => setStep(1)}
              className="text-[#5A48B4] cursor-pointer border-[2px] border-[#5A48B4] w-fit py-1 px-4 rounded-full flex items-center gap-2 text-[12px]">
              <div className="flex items-center gap-2">
                <MoveLeftIcon className="w-[1rem]" /> <p>Retour</p>
              </div>
            </span>
            <div className="form-groupe">
              <span>
                <label htmlFor="first_name">Nom</label>
                <input
                  type="text"
                  name="first_name"
                  onChange={handleChange}
                  id="first_name"
                />
              </span>
              <span>
                <label htmlFor="last_name">Prénoms</label>
                <input
                  type="text"
                  name="last_name"
                  onChange={handleChange}
                  id="last_name"
                />
              </span>
            </div>
            <div className="form-groupe">
              <span>
                <label htmlFor="adress">Adresse</label>
                <input
                  type="text"
                  name="adress"
                  onChange={handleChange}
                  id="adress"
                />
              </span>
              <span>
                <label htmlFor="contact">Tépéhone</label>
                <input
                  type="text"
                  name="contact"
                  onChange={handleChange}
                  id="contact"
                />
              </span>
            </div>
            <span>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                id="email"
              />
            </span>
            <span>
              <label htmlFor="sexe">Sexe</label>
              <select
                onChange={handleChange}
                id="sexe"
                name="sexe"
                className="border-[2px] p-[.3rem] rounded-sm">
                <option value="select sex"></option>
                <option value="masculin">Maculin</option>
                <option value="feminin">Féminin</option>
              </select>
            </span>
            <div className="form-groupe">
              <span className="password">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  id="password"
                />
              </span>
              <span className="password_confirm">
                <label htmlFor="password_confirm">Confirmer mot de passe</label>
                <input
                  name="password_confirm"
                  type="password"
                  onChange={handleChange}
                  id="password_confirm"
                />
              </span>
            </div>
            {personnelData && !isLoading && (
              <Button type="submit" disabled={isIncomplete(personnelData)}>
                Créer
              </Button>
            )}
            {isLoading && (
              <Button className="flex items-center gap-1" disabled>
                <Loader2Icon className="animate-spin h-4 w-4" /> patientez
              </Button>
            )}
          </form>
          <div className="bottom_register">
            <p>Sign in with a passkey</p>
            <p>
              New to Pioneer ? <Link href={"/login"}>Create an account</Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
