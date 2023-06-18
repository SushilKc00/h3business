import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaGooglePlay, FaApple, FaArrowAltCircleUp } from "react-icons/fa";
import { Layout } from "../../components/Layout/Layout";
import { Carosoel } from "../Carosoel/Carosoel";
import loyaltymobile from "../../assets/loyalty_web.webp";
import happidoggy from "../../assets/happi_doggy_mobile.webp";
import natureshug from "../../assets/nature_s_hug_mobile.webp";
import sara from "../../assets/sara_s_mobile_200274f9-18b4-4bbc-979a-c5924797f654.webp";
import schesir from "../../assets/schesir_mobile_83693c78-bd9b-46e7-b48c-8b31dfb939c4.webp";
import treats from "../../assets/Treats.webp";
import dog from "../../assets/dog.webp";
import pet1 from "../../assets/pet1 (1).webp";
import pet2 from "../../assets/pet1 (2).webp";
import pet3 from "../../assets/pet1 (3).webp";
import pet4 from "../../assets/pet1 (4).webp";
import pet5 from "../../assets/pet1 (5).webp";
import banner from "../../assets/banner.webp";

const images = [
  "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Web_banner_24c121c3-a548-4b23-9a42-bf076fcdd0d8_1500x.jpg?v=1686722350",
  "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Dash-Dog-_1920x400_b5a6d67e-2e78-4ebe-b6a9-1ced66f3d14a_1500x.jpg?v=1686212293",
  "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Web_Banner_9d9ddd54-1360-4ce9-afb0-350837849378_1500x.jpg?v=1686289022",
];

const foodImages = [
  "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/kennel_kitchen_0b2116ea-e302-4a2d-ac2f-8c10d9268240.png?v=1681222891",
  "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/pedigree_dd17b305-3a8f-4afa-9f1c-75b5ee2299bf.png?v=1681222814",
  "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/whiskas_7161828a-ce7e-4b0e-ba7c-93f45e7763b1.png?v=1681222830",
  "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/orijen_66c26ad8-a664-4c5b-aa0c-b56c7dcea7e7.png?v=1681222839",
  "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/orijen_66c26ad8-a664-4c5b-aa0c-b56c7dcea7e7.png?v=1681222839",
  "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/LB.png?v=1685972351",
];

export const Home = () => {
  return (
    <Layout>
      <section>
        <div style={{ backgroundColor: "#C58B39", padding: "0.8rem 0" }}>
          <h4
            style={{
              color: "white",
              fontSize: "1.4rem",
              fontFamily: "sans-serif",
              fontWeight: "300",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            DOWNLOAD THE FUFT APP{" "}
            <FaGooglePlay style={{ fontSize: "1.5rem" }} />{" "}
            <FaApple style={{ fontSize: "1.4em" }} />
          </h4>
        </div>
        <div style={{ marginTop: "0.4rem" }}>
          <Carosoel allImage={images} imageNumber={1} mobileImageNumber={1} />
        </div>

        <div
          style={{
            width: "95%",
            margin: "auto",
            marginTop: "4rem",
          }}
        >
          <figure>
            <img src={loyaltymobile} alt="" width={"100%"} />
          </figure>
        </div>

        <h2
          style={{
            textAlign: "center",
            marginTop: "4rem",
            fontSize: "2.8rem",
            fontWeight: "700",
            fontFamily: "sans-serif",
          }}
        >
          Trending Brands in HUFT Rewards
        </h2>

        <div className="HBP">
          <div>
            <img src={happidoggy} alt="happidoggy" width={"100%"} />
          </div>
          <div>
            <img src={natureshug} alt="natureshug" width={"100%"} />
          </div>
          <div>
            <img src={sara} alt="sara" width={"100%"} />
          </div>
          <div>
            <img src={schesir} alt="sara" width={"100%"} />
          </div>
        </div>

        <h2
          style={{
            textAlign: "center",
            marginTop: "4rem",
            fontFamily: "sans-serif",
            fontSize: "2.6rem",
          }}
        >
          Popular Food Brands
        </h2>

        <div style={{ width: "95%", margin: "auto", marginTop: "2rem" }}>
          <Carosoel
            allImage={foodImages}
            imageNumber={6}
            mobileImageNumber={2}
          />
        </div>

        <div className="pet-banner">
          <div>
            <img src={dog} alt="dogs" />
          </div>

          <div>
            <img src={treats} alt="treats" />
          </div>
        </div>

        <h2
          style={{
            textAlign: "center",
            marginTop: "4rem",
            fontFamily: "sans-serif",
            fontSize: "2.6rem",
          }}
        >
          Explore More Categories
        </h2>

        <div className="dog-category">
          <div>
            <img src={pet1} alt="" />
            <p style={{ textAlign: "center", fontSize: "1.6rem" }}>Mats</p>
            <h2
              style={{
                textAlign: "center",
                fontFamily: "sans-serif",
                fontWeight: "800",
              }}
            >
              Upto 25% off
            </h2>
          </div>
          <div>
            <img src={pet2} alt="" />
            <p style={{ textAlign: "center", fontSize: "1.6rem" }}>Wellness</p>
            <h2
              style={{
                textAlign: "center",
                fontFamily: "sans-serif",
                fontWeight: "800",
              }}
            >
              Upto 25% off
            </h2>
          </div>
          <div>
            <img src={pet3} alt="" />
            <p style={{ textAlign: "center", fontSize: "1.6rem" }}>Toys</p>
            <h2
              style={{
                textAlign: "center",
                fontFamily: "sans-serif",
                fontWeight: "800",
              }}
            >
              Upto 25% off
            </h2>
          </div>
          <div>
            <img src={pet4} alt="" />
            <p style={{ textAlign: "center", fontSize: "1.6rem" }}>Cat food</p>
            <h2
              style={{
                textAlign: "center",
                fontFamily: "sans-serif",
                fontWeight: "800",
              }}
            >
              Upto 25% off
            </h2>
          </div>
          <div>
            <img src={pet5} alt="" />
            <p style={{ textAlign: "center", fontSize: "1.6rem" }}>Mats</p>
            <h2
              style={{
                textAlign: "center",
                fontFamily: "sans-serif",
                fontWeight: "800",
              }}
            >
              Upto 25% off
            </h2>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "2.8rem",
            fontFamily: "sans-serif",
            color: "#d68242",
            padding: "6rem 0",
          }}
        >
          <marquee scrollamount="8" loop="infnite">
            We believe pets are family. And family deserves only the best.
            &nbsp; &nbsp; We believe pets are family. And family deserves only
            the best.&nbsp; &nbsp; We believe pets are family. And family
            deserves only the best.&nbsp; &nbsp; We believe pets are family. And
            family deserves only the best.&nbsp; &nbsp; We believe pets are
            family. And family deserves only the best.&nbsp; &nbsp; We believe
            pets are family. And family deserves only the best.
          </marquee>
        </div>
        <div className="banner">
          <img src={banner} alt="banner" />
        </div>

        <div className="slider">
          <div className="slider-container">
            <img src={happidoggy} alt="sliderpicture" />
            <img src={natureshug} alt="sliderpicture" />
            <img src={schesir} alt="sliderpicture" />
            <img src={sara} alt="sliderpicture" />
            <img src={happidoggy} alt="sliderpicture" />
            <img src={natureshug} alt="sliderpicture" />
            <img src={sara} alt="sliderpicture" />
            <img src={schesir} alt="sliderpicture" />
          </div>
          <div className="slider-container">
            <img src={happidoggy} alt="sliderpicture" />
            <img src={natureshug} alt="sliderpicture" />
            <img src={schesir} alt="sliderpicture" />
            <img src={sara} alt="sliderpicture" />
            <img src={happidoggy} alt="sliderpicture" />
            <img src={natureshug} alt="sliderpicture" />
            <img src={sara} alt="sliderpicture" />
            <img src={schesir} alt="sliderpicture" />
          </div>
        </div>

        <div className="story-section">
          <div className="story-content">
            <h3>
              Our <span>Story</span>
            </h3>
            <p>
              Before the stores, spas, the website, there was Sara's
              unconditional love. 15 years ago, we began creating high-quality
              pet products with our own hands to help pets live their best
              lives. Today, our home-grown business is India's first and most
              trusted pet care brand with a community of over a million pet
              parents.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
