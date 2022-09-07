import { useCallback, useEffect, useState } from "react";

const getBidHistory = (address: string, tokenId: string) => {
    const [bidHistory, setAsset] = useState(null);
    const fetchAsset = useCallback(async () => {
        try {
            const res = await fetch(
                `https://api.opensea.io/api/v1/events?asset_contract_address=${address}&token_id=${tokenId}&event_type=bid_entered&only_opensea=true&side=buy`,
                {
                    headers: {
                        "X-API-KEY": process.env.NEXT_PUBLIC_OPENSEA_KEY,
                    },
                },
            );
            const data = await res.json();
            setAsset(data);
            console.log(data, "asset data", address, tokenId)
        } catch (err) {
            console.log("Exception in fetch asset", err);
        }
    }, [address, tokenId]);

    useEffect(() => {
        fetchAsset();
    }, [fetchAsset]);

    return { bidHistory, fetchAsset };
};

export default getBidHistory;
