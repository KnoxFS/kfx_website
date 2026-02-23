const features = [
    {
        title: 'Decentralized Storage',
        description:
            'KnoxFS has implemented proven decentralized storage infrastructures such as Filecoin and Storj.',
        icon: (
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.5 6C4.5 5.17157 5.17157 4.5 6 4.5H9C9.82843 4.5 10.5 5.17157 10.5 6V7H13.5V6C13.5 5.17157 14.1716 4.5 15 4.5H18C18.8284 4.5 19.5 5.17157 19.5 6V9C19.5 9.82843 18.8284 10.5 18 10.5H17V13.5H18C18.8284 13.5 19.5 14.1716 19.5 15V18C19.5 18.8284 18.8284 19.5 18 19.5H15C14.1716 19.5 13.5 18.8284 13.5 18V17H10.5V18C10.5 18.8284 9.82843 19.5 9 19.5H6C5.17157 19.5 4.5 18.8284 4.5 18V15C4.5 14.1716 5.17157 13.5 6 13.5H7V10.5H6C5.17157 10.5 4.5 9.82843 4.5 9V6Z" fill="#ffffff" />
            </svg>
        ),
    },
    {
        title: 'Data Security and Encryption',
        description:
            'KnoxFS embraces a broad range of software solutions that enable users to secure and encrypt their data.',
        icon: (
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M14 15.0039V14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14V15.0039M10.5 18H13.5C13.9659 18 14.1989 18 14.3827 17.9239C14.6277 17.8224 14.8224 17.6277 14.9239 17.3827C15 17.1989 15 16.9659 15 16.5C15 16.0341 15 15.8011 14.9239 15.6173C14.8224 15.3723 14.6277 15.1776 14.3827 15.0761C14.1989 15 13.9659 15 13.5 15H10.5C10.0341 15 9.80109 15 9.61732 15.0761C9.37229 15.1776 9.17761 15.3723 9.07612 15.6173C9 15.8011 9 16.0341 9 16.5C9 16.9659 9 17.1989 9.07612 17.3827C9.17761 17.6277 9.37229 17.8224 9.61732 17.9239C9.80109 18 10.0341 18 10.5 18Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        title: 'A growing Software Ecosystem',
        description:
            'Consisting of an increasing number of top-tier software solutions with a massive user base.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
            </svg>
        ),
    },
    {
        title: 'Earn tokens by securing your data',
        description:
            'Users are rewarded for securing their data using the KnoxFS products.',
        icon: (
            <svg width="64" height="64" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                <path fill="#ffffff" d="M256 117c-65.2 0-124.2 11.6-166.13 29.7-20.95 9.1-37.57 19.8-48.57 31.1S25 200.4 25 212c0 11.6 5.3 22.9 16.3 34.2 11 11.3 27.62 22 48.57 31.1C131.8 295.4 190.8 307 256 307c65.2 0 124.2-11.6 166.1-29.7 21-9.1 37.6-19.8 48.6-31.1S487 223.6 487 212c0-11.6-5.3-22.9-16.3-34.2-11-11.3-27.6-22-48.6-31.1C380.2 128.6 321.2 117 256 117zM25 255.1v50.2c0 6.3 5.3 17.6 16.3 28.9 11 11.3 27.62 22 48.57 31.1C131.8 383.4 190.8 395 256 395c65.2 0 124.2-11.6 166.1-29.7 21-9.1 37.6-19.8 48.6-31.1s16.3-22.6 16.3-28.9v-50.2c-1.1 1.3-2.2 2.5-3.4 3.7-13.3 13.6-31.8 25.3-54.3 35-45 19.5-106 31.2-173.3 31.2-67.3 0-128.3-11.7-173.28-31.2-22.49-9.7-41.01-21.4-54.3-35-1.19-1.2-2.32-2.5-3.42-3.7z" />
            </svg>
        ),
    },
    {
        title: 'Earn Passive Income by running a Masternode.',
        description:
            'Invest in a KFX masternode and reap the benefits of daily passive income.',
        icon: (
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z" stroke="#ffffff" strokeWidth="1.5" />
                <path d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6" stroke="#ffffff" strokeWidth="1.5" />
                <path d="M12 17.3333C13.1046 17.3333 14 16.5871 14 15.6667C14 14.7462 13.1046 14 12 14C10.8954 14 10 13.2538 10 12.3333C10 11.4129 10.8954 10.6667 12 10.6667M12 17.3333C10.8954 17.3333 10 16.5871 10 15.6667M12 17.3333V18M12 10V10.6667M12 10.6667C13.1046 10.6667 14 11.4129 14 12.3333" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        title: 'Join the KFX community',
        description:
            'And care for your data security and file storage. Pay and earn tokens, or swap, save or sell them. It starts with KFX.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
    },
];

export default function Features() {
    return (
        <section className="py-10 lg:py-7">
            <div id="features" className="custom-screen text-gray-300">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold sm:text-4xl">Our Features</h2>
                    <p className="mt-3">Your data and its security are paramount</p>
                </div>
                <div className="relative mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <li
                                key={feature.title}
                                className="space-y-3 p-4 rounded-xl"
                                style={{ background: '#f7f9fb' }}
                            >
                                <div className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-lg text-gray-50">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold">{feature.title}</h3>
                                <p>{feature.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
