"use client";
import React from "react";
import {
  useConnect,
} from "@particle-network/auth-core-modal";

import { useAuth } from "../context/AuthContext";
import { truncateAddress } from "../utils/truncateAddress"
const ConnectAuth = () => {
  const { connected, disconnect } = useConnect();
  const { handleLogin, balance: balanceInfo, address, disconnect: logout, walletAddress } = useAuth()
  return (
    <div>
      {connected ? (
        <>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1  bg-white text-black">
              View Wallet
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-white text-black"
            >
              <li>
              <a>
                <p>Balance {balanceInfo}</p>
                </a>
              </li>
              <li>
              <a>
                  <p>{truncateAddress(address)}</p>
                </a>
              </li>
              <li>
              <a>
                  <button className="" onClick={() => disconnect()}>
                    Disconnect
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1 bg-white text-black">
              Connect Wallet
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu  rounded-box z-[1] w-52 p-2 shadow  bg-white text-black"
            >
              <li>
              <a>
                <button className="" onClick={() => handleLogin("twitter")}>
                    Connect with Twitter
                  </button>
                </a>
              </li>
              <li>
              <a>
                  <button className="" onClick={() => handleLogin("google")}>
                    Connect with Google
                  </button>
                </a>
              </li>
              <li>
              <a>
                  <button className="" onClick={() => handleLogin("github")}>
                    Connect with Github
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default ConnectAuth;
