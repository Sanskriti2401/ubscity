import React, { useState } from "react";
import ListingForm from "../components/ListingForm";
import ListingHome from "../components/ListingHome";
import { Helmet } from "react-helmet";
import Listing from "./Listing";
import logo from "../images/logo.jpeg";
import NavRight from "../Header/NavRight";

const Home = () => {
    const [listings, setListings] = useState([]);

    return (
        <>
            <Helmet>
                <title>UBSCity - Home</title>
                <meta name="description" content="sign up page" />
            </Helmet>

            <img src={logo} style= {{ width:'210px',padding:'10px'}}/>
            <NavRight/>

            <section className="">
                <ListingForm setListings={setListings} />
            </section>
            <section>
                <ListingHome listings={listings} />
            </section>
            
        </>
    );
};

export default Home;
