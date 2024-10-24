import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
// import Navbar from "../components/Navbar"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import {Waitlist} from "../components/Waitlist"

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Waitlist />
        <Hero />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
