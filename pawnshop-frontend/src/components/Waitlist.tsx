"use client";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import ConnectAuth from "./ConnectAuth";
import { useAuth } from "../context/AuthContext";
import { useConnect } from "@particle-network/auth-core-modal";
export function Waitlist() {

    const { connected }  = useConnect()
  const words = [
    {
      text: "Shop,",
    },
    {
      text: "Loan,",
    },
    {
      text: "Buy",
    },
    {
      text: "Your",
    },
    {
      text: "Jeweries",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "With",
        className: "text-blue-500 dark:text-blue-500",
      },
      {
        text: "Us.",
        className: "text-blue-500 dark:text-blue-500",
      },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] bg-black">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        At PawnShop, we offer a wide range of luxuries and unique style to meet your needs.
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="btn m-1 bg-white text-black">
          Connect With Us Today
        </button>
            {!connected && <ConnectAuth />}
          
      </div>
    </div>
  );
}
