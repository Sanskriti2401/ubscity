import React, { useState } from "react";
import ListingForm from "../components/ListingForm";
import ListingHome from "../components/ListingHome";
import { Helmet } from "react-helmet";
import Listing from "./Listing";

const Home = () => {
    const [listings, setListings] = useState([]);

    return (
        <>
            <Helmet>
                <title>Real Estate - Home</title>
                <meta name="description" content="sign up page" />
            </Helmet>
            <section className="">
                <ListingForm setListings={setListings} />
            </section>
            <section>
                <ListingHome listings={listings} />
            </section>
            <Listing />
        </>
    );
};

export default Home;
