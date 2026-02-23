const milestones = [
    {
        quarter: 'Q1',
        status: 'Finished',
        title: 'wKFX presale',
        description:
            'The wKFX token presale has succeeded. The token has been launched on PancakeSwap. This will automatically trigger other events, such as the wKFX/KFX swap feature on our website.',
        type: 'type1',
    },
    {
        quarter: 'Q2',
        status: 'Up next',
        title: 'Token integration and branding Filestreams',
        description:
            "We will integrate more KFX branding to Filestreams and enhance the support for wKFX tokens. We'll add more information about the token and how users can pay and earn tokens on Filestreams",
        type: 'type2',
    },
    {
        quarter: 'Q3',
        status: 'Future',
        title: 'Product owner program',
        description:
            'As per our whitepaper, we will develop a program that makes it possible for product owners to apply to join the KnoxFS ecosystem and integrate our token into their product.',
        type: 'type3',
    },
    {
        quarter: 'Q4',
        status: 'Future',
        title: 'Cross chain solution wKFX',
        description:
            'The wKFX is a bep20 token on the BSC chain, but we want to look into options to list the token on other chains and enable cross-chain trading.',
        type: 'type1',
    },
];

export default function Roadmap() {
    return (
        <div className="roadmap-section">
            <h2>Roadmap</h2>
            <div className="timeline">
                {milestones.map((milestone) => (
                    <div
                        key={milestone.quarter}
                        className={`timeline__event animated fadeInUp timeline__event--${milestone.type}`}
                    >
                        <div className="timeline__event__icon">{milestone.quarter}</div>
                        <div className="timeline__event__date">{milestone.status}</div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">{milestone.title}</div>
                            <div className="timeline__event__description">
                                <p>{milestone.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
