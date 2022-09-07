import { utils } from "ethers";
import { OrderFromAPI } from "../types";

const findMaxBid = (buyOrders: OrderFromAPI[] = []): number => {
    let max = 0;
    try {
        buyOrders.forEach((buyOrder) => {
            if(buyOrder && buyOrder.base_price) {
                const parsed = parseFloat(
                    utils
                        .formatEther(buyOrder.base_price.toString())
                        .replace("/,/g", ""),
                );

                if (parsed > max && buyOrder.side === 0) {
                    max = parsed;
                }
            }
        });
    } catch (err) {
        console.log("Exception in findMaxBid", err);
    }
    return max;
};

export default findMaxBid;
