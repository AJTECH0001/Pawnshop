'use client'
import React, { createContext, useState, useContext, useEffect } from 'react'
import { useEthereum, useConnect, useAuthCore } from "@particle-network/auth-core-modal"
import { ArbitrumSepolia, chains } from "@particle-network/chains"
import { AAWrapProvider, SmartAccount, SendTransactionMode } from "@particle-network/aa"
import { createClient } from 'viem'


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

  

  return (
    <div>AuthContext</div>
  )
}

export default AuthContext