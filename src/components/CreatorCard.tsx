import React from "react";

type params = {
    author: string;
    bio: string[];
    image: string;
};

const CreatorCard = ({ author, bio, image }: params) => {
    return (
        <div>
            {author}
            {bio.map((item) => (
                <div>{item}</div>
            ))}
        </div>
    );
};

export default CreatorCard;
