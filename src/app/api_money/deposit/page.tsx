"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import toast from "react-hot-toast";
import Image from "next/image";

type DepositForm = {
  paymentMethod: string;
  phone: string;
  ref: string;
  termsAccepted: boolean;
};
type DepositError = {
  paymentMethod: string;
  phone: string;
  ref: string;
  date: string;
  termsAccepted: string;
};

const Page = () => {
  const [date, setDate] = useState<Date>();
  const dateParse = date ? format(date, "yyyy-MM-dd") : null;

  const [inputs, setInputs] = useState<DepositForm>({
    paymentMethod: "",
    phone: "",
    ref: "",
    termsAccepted: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [messagenumeroValide, setMessageNumeroValide] = useState("");
  const [trueNumber, setTrueNumber] = useState(false);
  const [step, setStep] = useState(1);
  const [filter, setFilter] = useState("S");

  useEffect(() => {
    const validatePhone = () => {
      const phoneNumber = inputs?.phone || "";

      if (phoneNumber.length !== 10) {
        setMessageNumeroValide(
          "Le numéro de téléphone doit contenir 10 chiffres"
        );
        return;
      }

      const thirdDigit = phoneNumber.charAt(2);

      if (selectedPayment === "MVola") {
        if (thirdDigit !== "4" && thirdDigit !== "8") {
          setMessageNumeroValide(
            "Le numéro de téléphone n'est pas un numéro Telma (MVola)"
          );

          setTrueNumber(false);
        } else {
          setMessageNumeroValide("");
          setTrueNumber(true);
        }
      } else if (selectedPayment === "OrangeMoney") {
        if (thirdDigit !== "2" && thirdDigit !== "7") {
          setMessageNumeroValide(
            "Le numéro de téléphone n'est pas un numéro Orange (OrangeMoney)"
          );

          setTrueNumber(false);
        } else {
          setMessageNumeroValide("");

          setTrueNumber(true);
        }
      }
    };

    validatePhone();
  }, [inputs, selectedPayment]);

  const [errors, setErrors] = useState<DepositError>({
    paymentMethod: "",
    phone: "",
    ref: "",
    date: "",
    termsAccepted: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
      general: "",
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setInputs((prev) => ({
      ...prev,
      termsAccepted: checked,
    }));
  };

  const validateForm = () => {
    const newErrors: DepositError = {
      paymentMethod: "",
      phone: "",
      ref: "",
      date: "",
      termsAccepted: "",
    };

    if (!selectedPayment) {
      newErrors.paymentMethod = "Le champ mode de payement est requis.";
    }

    if (!inputs.phone) {
      newErrors.phone = "Le champ téléphone est requis.";
    } else if (inputs.phone.length !== 10 && inputs.phone.length !== 15) {
      newErrors.phone =
        "Le numéro de téléphone doit contenir soit 10, soit 15 caractères.";
    }

    if (!inputs.ref) {
      newErrors.ref = "Le champ référence est requis.";
    }

    if (!date) {
      newErrors.date = "Le champ date est requis.";
    }

    if (!inputs.termsAccepted) {
      newErrors.termsAccepted = "Vous devez accepter les conditions de dépôt.";
    }

    return newErrors;
  };

  const hasErrors = (errors: DepositError) => {
    return Object.values(errors).some((error) => error !== "");
  };

  const handlePaymentSelection = (method: string) => {
    setSelectedPayment(method);
  };

  const formErrors = validateForm();

  const handleSubmit = async (e: React.FormEvent) => {};

  return (
    <div>
      <div className="bg-white p-4 flex items-center gap-2 rounded-lg">
        <button
          onClick={() => setStep(1)}
          className={`py-2 px-5 border-[2px] rounded-full ${
            step === 1 && " bg-primary text-white"
          }`}>
          Faire un dépôt
        </button>
        <button
          onClick={() => {
            setStep(2);
            setFilter("S");
          }}
          className={`py-2 px-5 border-[2px] rounded-full ${
            step === 2 && "bg-primary text-white"
          } `}>
          Liste Dépôts
        </button>
      </div>
      {step === 1 && (
        <div>
          <form
            onSubmit={handleSubmit}
            className="mt-2 flex flex-col gap-8 pb-[6rem] ">
            <span className="flex flex-col gap-1">
              <div className="mt-6">
                <h1>Mode de payement</h1>
                <div className="grid grid-cols-3 gap-4 custom-760:grid-cols-1">
                  <div
                    onClick={() => handlePaymentSelection("MVola")}
                    className={`flex gap-2 border-[2px] min-h-[3rem] p-2 rounded-lg cursor-pointer ${
                      selectedPayment === "MVola" ? "border-green-500" : ""
                    }`}>
                    <div className="w-[3rem] h-[3rem] ">
                      <Image
                        className="w-full h-full object-cover"
                        src={"/assets/icons/mvola.svg"}
                        width={100}
                        height={100}
                        alt="MVola"
                      />
                    </div>
                    <div>
                      <p className=" font-[600] text-[1rem] ">MVola Telma</p>
                      <small>0342304165</small>
                    </div>
                  </div>
                  <div
                    onClick={() => handlePaymentSelection("OrangeMoney")}
                    className={`flex gap-2 border-[2px] min-h-[3rem] p-2 rounded-lg cursor-pointer ${
                      selectedPayment === "OrangeMoney"
                        ? "border-green-500"
                        : ""
                    }`}>
                    <div className="w-[3rem] h-[3rem] ">
                      <Image
                        className="w-full h-full object-cover"
                        src={"/assets/icons/orangeM.svg"}
                        width={100}
                        height={100}
                        alt="MVola"
                      />
                    </div>
                    <div>
                      <p>Orange Money</p>
                      <small>0322770260</small>
                    </div>
                  </div>
                  <div
                    // onClick={() => handlePaymentSelection("AirtelMoney")}
                    className={`flex gap-2 border-[2px] min-h-[3rem] p-2 rounded-lg bg-[#eee] opacity-50 cursor-not-allowed ${
                      selectedPayment === "AirtelMoney"
                        ? "border-green-500"
                        : ""
                    }`}>
                    <div className="w-[3rem] h-[3rem] ">
                      <Image
                        className="w-full h-full object-cover"
                        src={"/assets/icons/airtel-money.svg"}
                        width={100}
                        height={100}
                        alt="MVola"
                      />
                    </div>
                    <div>
                      <p>Airtel Money</p>
                      <small>0332304165</small>
                    </div>
                  </div>
                </div>
              </div>
              {errors.paymentMethod && (
                <span className="text-red-500 text-sm">
                  {errors.paymentMethod}
                </span>
              )}
            </span>
            {
              <span className="flex flex-col gap-1">
                <label htmlFor="phone">
                  Numéro téléphone du transfert{" "}
                  <span className="font-gilroyBold text-red-500 "> *</span>{" "}
                </label>
                <Input
                  type="text"
                  name="phone"
                  id="phone"
                  value={inputs.phone}
                  onChange={handleChange}
                  placeholder="Exemple : 0342304165 "
                  disabled={!selectedPayment}
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
                {messagenumeroValide && (
                  <span className="text-red-500 text-sm">
                    {messagenumeroValide}
                  </span>
                )}
              </span>
            }
            <span className="flex flex-col gap-1">
              <label htmlFor="ref">
                Réference du transfert{" "}
                <span className="font-gilroyBold text-red-500 "> *</span>{" "}
              </label>
              <Input
                type="text"
                name="ref"
                id="ref"
                value={inputs.ref}
                onChange={handleChange}
                placeholder="Exemple : 1603297194 "
              />{" "}
              {errors.ref && (
                <span className="text-red-500 text-sm">{errors.ref}</span>
              )}
            </span>
            <span className="flex flex-col gap-1">
              <label htmlFor="ref">
                Date du transfert
                <span className="font-gilroyBold text-red-500 "> *</span>{" "}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span>Sélectionnez une date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.date && (
                <span className="text-red-500 text-sm">{errors.date}</span>
              )}
            </span>

            {!trueNumber || hasErrors(formErrors) ? (
              <Button disabled className="font-gilroyBold">
                Déposer
              </Button>
            ) : !isLoading ? (
              <Button
                type="submit"
                className="font-gilroyBold active:scale-[.98] ">
                Déposer
              </Button>
            ) : (
              <Button disabled>
                <LoadingSpinner />
              </Button>
            )}
          </form>
        </div>
      )}
      {step === 2 && (
        <div>
          <div className="mt-3 flex gap-2">
            <input
              className="w-full border rounded-lg px-4"
              type="text"
              name="search"
              id="search"
              placeholder="rechercher par réference ..."
            />
            <select
              name="filterDepot"
              id="filterDepot"
              onChange={(e) => setFilter(e.target.value)}
              className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="S">Succes</option>
            </select>
          </div>
          {filter == "S" && <div className="flex flex-col gap-6 mt-6"></div>}
          {(filter === "P" || filter === "F") && (
            <div className="mt-6 flex flex-col gap-6"></div>
          )}
        </div>
      )}
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="p-1">
    <svg
      className="w-[1rem] fill-white"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <style>
        {`.spinner {
          transform-origin: center;
          animation: spinner .75s step-end infinite;
        }
        @keyframes spinner {
          8.3% { transform: rotate(30deg); }
          16.6% { transform: rotate(60deg); }
          25% { transform: rotate(90deg); }
          33.3% { transform: rotate(120deg); }
          41.6% { transform: rotate(150deg); }
          50% { transform: rotate(180deg); }
          58.3% { transform: rotate(210deg); }
          66.6% { transform: rotate(240deg); }
          75% { transform: rotate(270deg); }
          83.3% { transform: rotate(300deg); }
          91.6% { transform: rotate(330deg); }
          100% { transform: rotate(360deg); }
        }`}
      </style>
      <g className="spinner">
        <rect x="11" y="1" width="2" height="5" opacity=".14" />
        <rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(30 12 12)"
          opacity=".29"
        />
        <rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(60 12 12)"
          opacity=".43"
        />
        <rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(90 12 12)"
          opacity=".57"
        />
        <rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(120 12 12)"
          opacity=".71"
        />
        <rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(150 12 12)"
          opacity=".86"
        />
        <rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)" />
      </g>
    </svg>
  </div>
);

export default Page;
