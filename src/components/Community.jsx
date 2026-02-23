import Image from 'next/image';

export default function Community() {
    return (
        <section id="Community" className="bg-black">
            <div className="relative">
                <div
                    className="absolute m-auto blur-[160px] max-w-xs h-[13rem] top-12 inset-0"
                    style={{
                        background:
                            'linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)',
                    }}
                />
                <div className="relative">
                    <div className="custom-screen py-28 relative">
                        <div className="relative z-10">
                            <div className="max-w-xl mx-auto text-center">
                                <h2 className="text-gray-50 text-3xl font-semibold sm:text-4xl">
                                    Meet the worldwide community
                                </h2>
                                <p className="mt-5 text-main">
                                    Join our community of innovators connected all over the world,
                                    and building the new era of open finance.
                                </p>
                            </div>
                            <div className="mt-5 flex justify-center font-medium text-sm">
                                <a
                                    className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700"
                                    href="https://discord.gg/ga9cH4HgJ3"
                                >
                                    Discord
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center text-white ml-5 bg-purple-600 hover:bg-purple-500 active:bg-purple-700"
                                    href="https://t.me/knoxFSOfficial"
                                >
                                    Telegram
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="py-2.5 px-4 text-center rounded-full duration-150 flex items-center text-white ml-5 bg-purple-600 hover:bg-purple-500 active:bg-purple-700"
                                    href="https://twitter.com/OKnoxfs"
                                >
                                    Twitter
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <Image
                            alt="Background pattern"
                            src="/images/bg-pattern.webp"
                            width={2880}
                            height={1358}
                            className="w-full h-full object-cover m-auto absolute inset-0 pointer-events-none"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
