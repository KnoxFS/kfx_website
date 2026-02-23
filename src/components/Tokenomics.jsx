import { useState } from 'react';

const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-indigo-600"
        viewBox="0 0 20 20"
        fill="currentColor"
    >
        <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
        />
    </svg>
);

const kfxFeatures = [
    'Algorithm PoS',
    'Masternode Collateral: 1000',
    'Masternode reward: 75%',
    'Staking (POS) reward: 5%',
    'Block Time: 2 min',
    'Maximum Supply: 5 000 000 KFX',
];

const wkfxFeatures = [
    'Blockchain: BSC',
    'Buy/Sell tax: 0%',
    'Decimal: 9',
    'Maintable: no',
    'Total vested: 16.7 million',
    'Maximum Supply: 150 000 000 KFX',
];

const CONTRACT_ADDRESS = '0xA9b1E2542024AC5527aFF797469B57457Bb12886';

export default function Tokenomics() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(CONTRACT_ADDRESS);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="tokenomic" className="py-10 lg:py-7 custom-screen">
            <div className="relative max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-semibold sm:text-4xl">
                    KnoxFS Economy is Real
                </h2>
            </div>
            <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0">
                {/* KFX Card */}
                <div
                    className="relative flex-1 flex items-stretch flex-col rounded-xl mt-6 sm:mt-0"
                    style={{
                        backgroundImage:
                            'linear-gradient(90.41deg, #458cfe -0.8%, #7dd8fd 126.74%)',
                        backgroundColor: 'transparent',
                    }}
                >
                    <div className="p-8 space-y-4 border-b text-center">
                        <span className="text-white-600 text-3xl font-medium">knoxFs</span>
                        <p className="text-white-500">Ideal for Masternodes Investors</p>
                    </div>
                    <div className="p-8">
                        <ul className="space-y-3">
                            {kfxFeatures.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-center gap-5 text-white-500"
                                >
                                    <CheckIcon />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-8" />
                    </div>
                </div>

                {/* wKFX Card */}
                <div
                    className="relative flex-1 flex items-stretch flex-col rounded-xl mt-6 sm:mt-0"
                    style={{ backgroundColor: '#12172c' }}
                >
                    <div className="p-8 space-y-4 border-b text-center">
                        <span className="text-white-600 text-3xl font-medium">
                            wKFX Tokens
                        </span>
                        <p className="text-white-500">Built for real use</p>
                    </div>
                    <div className="p-8">
                        <ul className="space-y-3">
                            {wkfxFeatures.map((feature) => (
                                <li
                                    key={feature}
                                    className="flex items-center gap-5 text-white-500"
                                >
                                    <CheckIcon />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-8" />
                    </div>
                </div>
            </div>

            <h2 className="text-3xl font-semibold sm:text-4xl">
                wKFX contract address
            </h2>
            <div className="flex items-center justify-center mt-6 sm:mt-0">
                <input
                    type="text"
                    readOnly
                    className="px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none"
                    style={{ width: 500, maxWidth: '100%' }}
                    value={CONTRACT_ADDRESS}
                />
                <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
                    onClick={handleCopy}
                >
                    {copied ? 'Copied!' : 'Copy'}
                </button>
            </div>
            <div className="mt-4 flex justify-center">
                <a
                    href="https://www.dextools.io/app/en/bnb/pair-explorer/0xd5a2ddf178098517421eaafa7bdee5d65b87fe5a?t=1712313621918"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Dextools
                </a>
            </div>
        </section>
    );
}
