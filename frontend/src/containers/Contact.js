import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { connect } from "react-redux";
import setAlert from "../store/actions/alert";
import Loader from "react-loader-spinner";
import { Email, LocationOn, Phone } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import DragAndDropApp from "../components/DragDrop";
import NavLeft from "../Header/NavLeft";
import NavRight from "../Header/NavRight";

import logo from "../images/logo.jpeg";

const Contact = ({ setAlert }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        desc: "",
        sale_type: "",
        sqft: "",
        price: "",
        BHKs: "",
        has_photos: "",
    });

    const { name, email, subject, desc, sale_type, sqft, price, BHKs, has_photos } = formData;

    const [loading, setLoading] = useState(false);

    const Divider = ({ children }) => {
        return (
          <div className="container">
            <div className="border" />
            <span className="contented">
              {children}
            </span>
            <div className="border" />
          </div>
        );
      };

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        setLoading(true);
        axios
            .post(
                `${process.env.REACT_APP_API_URL}/api/contacts/`,
                { name, email, subject, desc, sale_type, sqft, price, BHKs, has_photos },
                config
            )
            .then((res) => {
                setAlert("Message Sent", "success");
                setLoading(false);
                setFormData({ name: "", email: "", subject: "", desc: "", sale_type: "", sqf: "", price: "", BHKs: "", has_photos:"" });
                window.scrollTo(0, 0);
            })
            .catch((err) => {
                setAlert("Error with Sending Message", "error");
                setLoading(false);
                window.scrollTo(0, 0);
            });
        setFormData({
            name: "",
            email: "",
            subject: "",
            desc: "",
            sale_type: "",
            BHKs: "",
            has_photos:"",
        });
    };

    return (
        <div className="contact">
            <Helmet>
                <title>Add Property</title>
                <meta name="description" content="Add Property" />
            </Helmet>
            <NavRight />
            <img src={logo} style= {{ width:'210px',padding:'10px'}}/>
            <div className="heading-component">
            <h1>
            <Divider style= {{ color: "red"}} >Add Property</Divider>
            </h1>
            </div>
            <div className="container mb-5">
                <div className="row my-3" data-aos="fade-in">
                    {/* <div className="col-md-6">
                        <div className="row address">
                            <div className="col-2 d-flex align-items-center justify-content-center pl-3">
                                <LocationOn
                                    color="primary"
                                    style={{ fontSize: 40 }}
                                />
                            </div>
                            <div className="col-10">
                                <h4>Location:</h4>
                                <p>
                                    B2-710, High Rise Hostel, PDEU, Gandhinagar,
                                    382007, Gujarat
                                </p>
                            </div>
                        </div>

                        <div className="row email">
                            <div className="col-2 d-flex align-items-center justify-content-center">
                                <Email
                                    color="primary"
                                    style={{ fontSize: 40 }}
                                />
                            </div>
                            <div className="col-10">
                                <h4>Email:</h4>
                                <p>rajan@rockriver.com</p>
                            </div>
                        </div>

                        <div className="row phone">
                            <div className="col-2 d-flex align-items-center justify-content-center">
                                <Phone
                                    color="primary"
                                    style={{ fontSize: 40 }}
                                />
                            </div>
                            <div className="col-10">
                                <h4>Phone:</h4>
                                <p>+91 9512245920</p>
                            </div>
                        </div>
                        <div>
                            <iframe
                                width="100%"
                                height="250"
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0"
                                src="https://maps.google.com/maps?width=100%25&amp;height=250&amp;hl=en&amp;q=Pandit%20Deendayal%20Energy%20University+(Pandit%20Deendayal%20Energy%20University)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            ></iframe>
                        </div>
                    </div> */}

                    <div className="col-md-6">
                        <form className="form" onSubmit={(e) => onSubmit(e)}>
                            <div className="form-group my-2">
                                <label
                                    className="contact__form__label"
                                    htmlFor="sale_type"
                                >
                                    Sale or Rent
                                </label>
                                <select
                                    className="form-control"
                                    name="sale_type"
                                    onChange={(e) => onChange(e)}
                                    value={sale_type}
                                >
                                    <option>For Sale</option>
                                    <option>For Rent</option>
                                </select>
                            </div>
                            <div className="form-group my-2">
                                <label
                                    className="istingform__label"
                                    htmlFor="sqft"
                                >
                                    Square Foot
                                </label>
                                <select
                                    className="form-control"
                                    name="sqft"
                                    onChange={(e) => onChange(e)}
                                    value={sqft}
                                >
                                    <option>1000+</option>
                                    <option>1200+</option>
                                    <option>1500+</option>
                                    <option>2000+</option>
                                    <option>Any</option>
                                </select>
                            </div>
                            <div className="form-group my-2">
                                <label className="listingform__label" htmlFor="price">
                                    Minimum Price
                                </label>
                                <select
                                    className="form-control"
                                    name="price"
                                    onChange={(e) => onChange(e)}
                                    value={price}
                                >
                                    <option>Rs. 0+</option>
                                    <option>Rs. 200,000+</option>
                                    <option>Rs. 400,000+</option>
                                    <option>Rs. 600,000+</option>
                                    <option>Rs. 800,000+</option>
                                    <option>Rs. 1,000,000+</option>
                                    <option>Rs. 1,200,000+</option>
                                    <option>Rs. 1,500,000+</option>
                                    <option>Any</option>
                                </select>
                            </div>
                            <div className="form-group my-2">
                                <label
                                    className="listingform__label"
                                    htmlFor="BHKs"
                                >
                                    BHKs
                                </label>
                                <select
                                    className="form-control"
                                    name="BHKs"
                                    onChange={(e) => onChange(e)}
                                    value={BHKs}
                                >
                                    <option>0+</option>
                                    <option>1+</option>
                                    <option>2+</option>
                                    <option>3+</option>
                                    <option>4+</option>
                                    <option>5+</option>
                                </select>
                            </div>
                            <div className="form-group my-2">
                                <label
                                    className="listingform__label"
                                    htmlFor="has_photos"
                                >
                                    Has Photos
                                </label>
                                <select
                                    className="form-control"
                                    name="has_photos"
                                    onChange={(e) => onChange(e)}
                                    value={has_photos}
                                >
                                    <option>1+</option>
                                    <option>3+</option>
                                    <option>5+</option>
                                    <option>10+</option>
                                    <option>15+</option>
                                </select>
                            </div>
                            
                            <div className="form-group my-2">
                                <label
                                    className="contact__form__label"
                                    htmlFor="name"
                                >
                                    Address{" "}
                                    <span style={{ color: "red" }}> *</span>
                                </label>
                                <input
                                    className="form-control"
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={(e) => onChange(e)}
                                    value={name}
                                    required
                                />
                            </div>
                            <div className="form-group my-2">
                                <label
                                    className="contact__form__label"
                                    htmlFor="subject"
                                >
                                    Area{" "}
                                    <span style={{ color: "red" }}> *</span>
                                </label>
                                <input
                                    className="form-control"
                                    name="subject"
                                    type="text"
                                    placeholder="Pune/Mumbai/Hyderabad"
                                    onChange={(e) => onChange(e)}
                                    value={subject}
                                    required
                                />
                            </div>
                            <div className="form-group my-2">
                                <label
                                    className="contact__form__label"
                                    htmlFor="desc"
                                >
                                    Describe{" "}
                                    <span style={{ color: "red" }}> *</span>
                                </label>
                                <textarea
                                    className="form-control"
                                    name="desc"
                                    cols="30"
                                    rows="5"
                                    placeholder="Add aminities and owner info"
                                    style={{ resize: "none" }}
                                    onChange={(e) => onChange(e)}
                                    value={desc}
                                />
                            </div>
                            <DragAndDropApp />
                            <div className="form-group my-2">
                                <label
                                    className="contact__form__label"
                                    htmlFor="email"
                                >
                                    Owner Email{" "}
                                    <span style={{ color: "red" }}> *</span>
                                </label>
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email"
                                    placeholder="example@ubs.com"
                                    onChange={(e) => onChange(e)}
                                    value={email}
                                    required
                                />
                            </div>
                            {loading ? (
                                <div className="my-3 d-flex justify-content-center">
                                    <Loader
                                        type="Oval"
                                        color="#424242"
                                        height={50}
                                        width={50}
                                    />
                                </div>
                            ) : (
                                <div className="send-btn d-flex justify-content-center">
                                    <button
                                        className="btn my-3 px-5 "
                                        //className="bg-red-500 hover:bg-black text-white hover:text-white font-bold py-2 px-4 rounded"
                                        htmltype="submit"
                                        style={{ backgroundColor: 'red', color: 'white', border: 'red,' }}
                                    >
                                        Send
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { setAlert })(Contact);
