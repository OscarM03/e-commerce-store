import OverviewCard from "./cards/OverviewCard";

import S25 from '/public/assets/images/samsung.png';
import iPhone15 from '/public/assets/images/iPhone.png';
import Pixel8 from '/public/assets/images/pixel9.png';
import EarPods from '/public/assets/images/earpods.png';
import JBL from '/public/assets/images/jbl.png';
import GamePad from '/public/assets/images/pad.png';
import Redmi14C from '/public/assets/images/redmi14c.png';
import Tablet from '/public/assets/images/tablet.png';
import Watch from '/public/assets/images/watch.png';
import Xiaomi12 from '/public/assets/images/xiaomi12.png';

const Overview = () => {
    const cards = [
        { title: 'Hot Deals', description: 'Enjoy amazing discounts -10%+', bgClass: 'bg-overview-bg-1', images: [EarPods, Tablet, Xiaomi12, Redmi14C] },
        { title: 'Upgrade Today', description: 'Be on top today with top brands', bgClass: 'bg-overview-bg-2', images: [iPhone15, Pixel8, S25, Xiaomi12] },
        { title: 'Quality Accessories', description: 'Buy high quality products today', bgClass: 'bg-overview-bg-3', images: [JBL, Watch, GamePad, EarPods] },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
            {cards.map((card, index) => (
                <div className={`${index === 2 ? 'block  md:hidden xl:block' : ''}`} key={index}>
                    <OverviewCard {...card} />
                </div>
            ))}
        </div>
    );
};

export default Overview;
