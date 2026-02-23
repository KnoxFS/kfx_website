import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section>
            <div className="custom-screen py-28">
                <div>
                    <div className="space-y-5 max-w-3xl mx-auto text-center">
                        <h1 className="bg-clip-text text-transparent bg-gradient-to-r mx-auto sm:text-6xl">
                            A New Wave of Data Management
                        </h1>
                        <p className="max-w-xl mx-auto text-main">
                            Building a completely distributed and secure means of sharing and
                            storing data using IPFS and blockchain technology.
                        </p>
                        <div className="flex justify-center font-medium text-sm">
                            <Link
                                className="py-2.5 px-4 text-center rounded-full duration-150 cssbuttons-io-button"
                                href="/"
                            >
                                Launch App
                                <div className="icon">
                                    <svg
                                        height="24"
                                        width="24"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path
                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="relative mt-16 sm:mt-28"
                    >
                        <div
                            className="absolute m-auto blur-[160px] max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]"
                            style={{
                                background:
                                    'linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)',
                            }}
                        />
                        <div className="relative">
                            <Image
                                alt="KnoxFS"
                                src="/images/hero.svg"
                                width={2316}
                                height={1582}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
