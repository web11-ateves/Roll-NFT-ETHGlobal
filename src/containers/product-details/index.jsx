import PropTypes from "prop-types";
import clsx from "clsx";
import Sticky from "@ui/sticky";
import GalleryTab from "@components/product-details/gallery-tab";
import ProductTitle from "@components/product-details/title";
import BidTab from "@components/product-details/bid-tab";
import PlaceBet from "@components/product-details/place-bet";
import { RollType } from "@utils/types";

// Demo Image

const ProductDetailsArea = ({ space, className, roll }) => (
    <div
        className={clsx(
            "product-details-area",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <Sticky>
                        <GalleryTab
                            images={[{ src: roll.nftImage, alt: roll.title }]}
                        />
                    </Sticky>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
                    <div className="rn-pd-content-area">
                        <ProductTitle
                            collection={roll.nftCollection}
                            title={roll.title}
                            likeCount={roll.likeCount}
                            shareUrl={`${process.env.NEXT_PUBLIC_APP_URL}/roll/${roll.raffleId}`}
                        />
                        <div className="bid">
                            <span className="price me-4">
                                <b>Total Ticket Value:</b> {roll.ticketsTotal}{" "}
                                {roll.ticketCurrency}
                            </span>
                            <span className="me-4">
                                <b>|</b>
                            </span>
                            <span className="price">
                                <b>NFT Floor price:</b> 0
                            </span>
                        </div>
                        <div className="rn-bid-details">
                            <PlaceBet
                                title={roll.title}
                                ticketsSold={roll.ticketsSold}
                                ticketSupply={roll.ticketSupply}
                                ticketPrice={roll.ticketPrice}
                                ticketCurrency={roll.ticketCurrency}
                                endDate={roll.endDate}
                                host={roll.userAddress}
                            />
                            <BidTab
                                bids={roll.tickets}
                                properties={roll.attributes}
                                tags={roll.categories}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ProductDetailsArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
    roll: PropTypes.objectOf(RollType),
};

// ProductDetailsArea.defaultProps = {
//     space: 1,
//     roll: {
//         _id: "1",
//         raffleId: "1",
//         userId: "1",
//         userAddress: "",
//         network: "",
//         nftId: "1",
//         nftContractAddress: "",
//         nftCollection: "Roll Collection",
//         nftImage: "/images/portfolio/lg/portfolio-01.jpg",
//         nftTokenId: "",
//         description: "Roll Description",
//         title: "Roll Title",
//         endDate: String(Date.now()),
//         ticketPrice: 0,
//         ticketCurrency: "",
//         ticketSupply: 0,
//         likeCount: 0,
//         properties: [],
//         tags: [],
//         tickets: [],
//         ticketsSold: 0,
//         ticketsTotal: 0,
//     },
// };

export default ProductDetailsArea;