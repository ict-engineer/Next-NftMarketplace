import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Index.module.scss";
import {
    API_URL,
    AMALGAM_TOKENS_QUERY,
    AMALGAM_TOKENS_IN_HOME,
    AMALGAM_TEXT_TITLE,
    AMALGAM_TEXT_OWNER,

    SOLD_TOKENS_IN_HOME,
    SOLD_TOKENS_QUERY,
    UPCOMING_TOKENS_QUERY,
    UPCOMING_TOKENS_IN_HOME,
} from "../utils/constants";
import { NFT, Slide } from "../types";
import Auctions from "../components/Auctions";
import ActiveAuctions from "../components/ActiveAuctions";
import Slider from "../components/Slider";
import HeadWithImage from "../components/HeadWithImage";
// index page start
export const Home: React.FC<{
    assets: NFT[];
}> = ({ assets }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Chainsaw NFT</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HeadWithImage />
            {/* <Slider slides={slides} /> */}
            <div className={styles.centerItem}>
                <h2>&nbsp;</h2>
                <h2>{AMALGAM_TEXT_TITLE}</h2>
                <h2>{AMALGAM_TEXT_OWNER}</h2>
            </div>
            {(assets?.length > 0) && (
                <Auctions assets={assets} title="Auctions" link="/whitehot/0" />
            )}
            
        </div>
    );
};

export default Home;

export async function getStaticProps() {
    /** Get tokens with auctions */
    const whtieTokenRes = await fetch(
        `${API_URL}/tokens?_limit=${AMALGAM_TOKENS_IN_HOME}&${AMALGAM_TOKENS_QUERY}`,
    );
    const whiteTokens = await whtieTokenRes.json();
    
    return {
        props: {
            assets: whiteTokens
        },
    };
}
