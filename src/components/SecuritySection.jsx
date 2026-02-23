const items = [
    {
        title: 'Decentralized Storage',
        description: 'KnoxFS has implemented proven decentralized storage infrastructures such as Filecoin and Storj.',
    },
    {
        title: 'Data Security and Encryption',
        description: 'KnoxFS embraces a broad range of software solutions that enable users to secure and encrypt their data.',
    },
    {
        title: 'A growing Software Ecosystem',
        description: 'Consisting of an increasing number of top-tier software solutions with a massive user base.',
    },
    {
        title: 'Earn tokens by securing your data',
        description: 'Users are rewarded for securing their data using the KnoxFS products.',
    },
    {
        title: 'Earn Passive Income by running a Masternode.',
        description: 'Invest in a KFX masternode and reap the benefits of daily passive income.',
    },
    {
        title: 'Join the KFX community',
        description: 'And care for your data security and file storage. Pay and earn tokens, or swap, save or sell them. It starts with KFX.',
    },
];

export default function SecuritySection() {
    return (
        <section id="faqs" className="py-10 lg:py-7">
            <div className="custom-screen text-gray-300">
                <div className="max-w-xl text-center xl:mx-auto">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">
                        Your data and its security are paramount
                    </h2>
                    <p className="mt-3">
                        KnoxFS is a Bitcoin-based cryptocurrency with a focus on
                        decentralized data storage, distribution, privacy, and security.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3">
                        {items.map((item) => (
                            <li key={item.title} className="space-y-3">
                                <summary className="flex items-center justify-between font-bold">
                                    {item.title}
                                </summary>
                                <p className="leading-relaxed">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
