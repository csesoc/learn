import React, { useEffect, useState } from "react";
import CreatorCard from "../../components/CreatorCard";
import Layout from "../../components/layout";
import creators from "../../assets/creators_data";

const Creators = () => {
    return (
        <Layout pageTitle="Creators page">
            <div>
                {creators &&
                    creators.map((item, index) => (
                        <CreatorCard
                            author={item.author}
                            image={item.image}
                            bio={item.bio}
                            key={index}
                        />
                    ))}
            </div>
        </Layout>
    );
};

export default Creators;
