import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TokenTandem from '../components/TokenTandem';
import Features from '../components/Features';
import WhyKFX from '../components/WhyKFX';
import SecuritySection from '../components/SecuritySection';
import Roadmap from '../components/Roadmap';
import Tokenomics from '../components/Tokenomics';
import Community from '../components/Community';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>KnoxFS - A New Wave of Data Management</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <main>
                <Hero />
                <TokenTandem />
                <Features />
                <WhyKFX />
                <SecuritySection />
                <Roadmap />
                <Tokenomics />
                <Community />
            </main>
            <Footer />
        </>
    );
}
