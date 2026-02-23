import Image from 'next/image';

const tokens = [
    {
        title: 'KnoxFS cryptocurrency',
        description:
            'KnoxFS is a Bitcoin-based cryptocurrency with a focus on decentralized data storage, distribution, privacy, and security',
        image: '/images/Feature-1.svg',
        alt: 'KnoxFS cryptocurrency',
    },
    {
        title: 'wKFX token',
        description:
            'The wKFX token can be used to pay for storage plans, monthly subscriptions or product upgrades. Users can also earn tokens in various ways.',
        image: '/images/Feature-2.svg',
        alt: 'wKFX token',
    },
];

export default function TokenTandem() {
    return (
        <section className="py-10 lg:py-7">
            <div className="custom-screen text-gray-300">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold sm:text-4xl">
                        Token Tandem: Unveiling the Dynamic Duo of Knox
                    </h2>
                    <p className="mt-3">
                        Dive into the Dual Realm: Explore the Origins and Uniqueness of Our
                        Bitcoin-Inspired Crypto and BSC Blockchain Token. Unveiling the Power
                        of Two Distinctive Tokens in Our Ecosystem.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
                        {tokens.map((token) => (
                            <li
                                key={token.title}
                                className="card-ma flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl"
                            >
                                <div className="p-8">
                                    <h3 className="text-head text-xl font-semibold">
                                        {token.title}
                                    </h3>
                                    <p className="text-body mt-3 sm:text-sm md:text-base">
                                        {token.description}
                                    </p>
                                </div>
                                <div className="pl-8">
                                    <Image
                                        alt={token.alt}
                                        src={token.image}
                                        width={540}
                                        height={305}
                                        className="w-full ml-auto"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
