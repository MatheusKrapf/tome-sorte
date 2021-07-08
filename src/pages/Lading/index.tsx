import React from "react";

import HeroBanner from "./HeroBanner";
import WhatGames from "./WhatGames";
import SeeWhen from "./SeeWhen";
import AppPresentation from "./AppPresentation";
import Suggestion from "./Suggestion";
import Footer from "./Footer";

const LadingPage: React.FC = () => {
    return (
        <>
            <HeroBanner />
            <WhatGames />
            <SeeWhen />
            <AppPresentation />
            <Suggestion />
            <Footer />
        </>
    );
}

export default LadingPage