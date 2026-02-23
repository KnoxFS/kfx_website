import Image from 'next/image';

export default function WhyKFX() {
    return (
        <section className="py-10 lg:py-7">
            <div className="custom-screen text-gray-300">
                <div className="mt-12">
                    <ul className="space-y-8 gap-x-6 sm:flex sm:space-y-0">
                        <li className="card-fe flex-1 flex flex-col justify-between border border-gray-800 rounded-2xl">
                            <div className="flex flex-col sm:flex-row">
                                <div className="sm:w-1/2">
                                    <Image
                                        src="/images/section-01.svg"
                                        alt="Feature Image"
                                        width={540}
                                        height={400}
                                    />
                                </div>
                                <div className="p-8 sm:w-1/2">
                                    <h3 className="text-fe text-head text-xl font-semibold">
                                        Why a KFX token?
                                    </h3>
                                    <p className="text-body mt-3 sm:text-sm md:text-base">
                                        KnoxFS started out as a cryptocurrency project that had and
                                        still has it&apos;s own crypto coin; the KFX coin. As
                                        described in our whitepaper the coin runs on it&apos;s own
                                        blockchain and has specific features and benefits to users.
                                        In addition, we have created a wrapped KFX token which is
                                        the primary utility token for all the products in the KnoxFS
                                        ecosystem.
                                    </p>
                                    <p className="text-body mt-3 sm:text-sm md:text-base">
                                        The wKFX token can be used to pay for storage plans, monthly
                                        subscriptions or product upgrades. Users can also earn
                                        tokens in various ways and then spend them on other KnoxFS
                                        products, stake the tokens or sell them on an exchange. The
                                        KFX coins and tokens rewards users to protect and secure
                                        their data and they are an important factor in the KnoxFS
                                        ecosystem.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
