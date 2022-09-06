import { useState, useEffect } from "react";
import { Box } from "./Box";

const ArticleScrollProg = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
            setProgress(scrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Box className="progress-bar">
            <Box
                className="progress-bar__progress"
                css={{ position: 'fixed', top: '0', left: '0', zIndex: 10, width: `${progress}%`, height: '4px', backgroundColor: `$blue9` }}
            ></Box>
        </Box>
    );
}

export default ArticleScrollProg