"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import {
  useEthereum,
  useConnect,
  useAuthCore,
} from "@particle-network/auth-core-modal";
import { ArbitrumSepolia, chains } from "@particle-network/chains";
import { AAWrapProvider, SendTransactionMode } from "@particle-network/aa";
import { SmartAccount } from "@particle-network/aa";
import { createClient } from "viem";
import { ethers } from "ethers";

const SocialoginAccount = createContext();

export const AuthContext = ({ children }) => {
  const { provider } = useEthereum();
  

  const smartAccount = new SmartAccount(provider, {
    projectId: process.env.NEXT_PUBLIC_APP_PROJECT_ID || "",
    clientKey: process.env.NEXT_PUBLIC_APP_CLIENT_KEY || "",
    appId: process.env.NEXT_PUBLIC_APP_API_KEY || "", //
    aaOptions: {
      accountContracts: {
        SIMPLE: [{ version: "0.1.0", chainIds: [] }],
      },
    },
  });

  const customProvider = new ethers.providers.Web3Provider(
    new AAWrapProvider(smartAccount, SendTransactionMode.Gasless),
    "any"
  );
  const [balance, setBalance] = useState(null);
  const [address, setAddress] = useState(null);
  const [signer, setSigner] = useState(null);

  const { connect, disconnect, connected } = useConnect();
  const { userInfo } = useAuthCore();

  const contract = "contract"

  // fetch balanece
  const fetchBalance = async () => {
    const addressparticle = await smartAccount.provider.selectedAddress;
    setAddress(addressparticle);

    const balanceResponseparticle = await customProvider.getBalance(
      addressparticle
    );
    const balanceRes = ethers.utils.formatEthers(balanceResponseparticle);
    setBalance(balanceRes);
    const signers = customProvider?.getSigner();
    setSigner(signers);
  };
  const signerP = customProvider?.getSigner();
  if (signerP) {
    console.log("signerp", signerP);
  } else {
    console.error("customProvider is not available");
  }

  useEffect(() => {
    if (userInfo) {
      fetchBalance();
    }
  }, [userInfo, customProvider, signerP]);

  const handleLogin = async (authType) => {
    if (!userInfo) {
      try {
        await connect({
          socialType: authType,
          chain: ArbitrumSepolia,
          prompt: "select_account",
        });
      } catch (error) {
        console.log(error, "lognError");
      }
    }
  };

  return (
    <SocialoginAccount.Provider
      value={{
        handleLogin,
        userInfo,
        balance,
        connect,
        disconnect,
        address,
        customProvider,
        signer,
        contract,
        // client,
        signerP,
      }}
    >
      {children}
    </SocialoginAccount.Provider>
  );
};

export default SocialoginAccount;

export const useAuth = () => {
  return useContext(SocialoginAccount);
};
