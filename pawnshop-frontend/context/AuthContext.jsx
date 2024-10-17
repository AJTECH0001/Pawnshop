'use client'
import React, { createContext, useState, useContext, useEffect } from 'react'
import { useEthereum, useConnect, useAuthCore } from "@particle-network/auth-core-modal"
import { ArbitrumSepolia, chains } from "@particle-network/chains"
import { AAWrapProvider, SmartAccount, SendTransactionMode } from "@particle-network/aa"
import { createClient } from 'viem'
import { ethers } from "ethers";



const SocialoginAccount = createClient();
const AuthContext = ({ children }) => {
  const { provider } = useEthereum();

  const smartAccount = new SmartAccount(provider, {
    projectId: process.env.NEXT_PUBLIC_APP_PROJECT_ID,
    clientKey: process.env.NEXT_PUBLIC_APP_CLIENT_KEY,
    appId: process.env.NEXT_PUBLIC_APP_APP_ID,
    aaOptions: {
        accountContracts: {
            SIMPLE: [{ version: "0.1.0", chainIds: []}]
        }
    }
  })

  const customProvider = new ethers.providers.Web3Provider(new AAWrapProvider(smartAccount, SendTransactionMode.Gasless), "any");
  const [balance, setBalance] = useState(null);
  const [address, setAddress] = useState(null);
  const [signer, setSigner] = useState(null);


  const { connect, disconnect, connected } = useConnect();
  const { userInfo } = useAuthCore();

  // fetch balanece
  const fetchBalance = async () => {
    const addressparticle = await smartAccount.provider.selectedAddress
    setAddress(addressparticle)

    const balanceResponseparticle = await customProvider.getBalance(
      addressparticle
    )
    const balanceRes = ethers.utils.formatEthers(balanceResponseparticle)
    setBalance(balanceRes)
    const signers = customProvider?.getSigner();
    setSigner(signers)
  }

  useEffect(() => {
    if (userInfo) {
      fetchBalance();
    }
  }, [userInfo, customProvider])

  return (
    <div>AuthContext</div>
  )
}

export default AuthContext