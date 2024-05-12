import React from "react";
import Footer from "../../footer/footer";

const MainPage = () => {
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <div style={{ paddingBottom: "327px" }}>
                {/* Ваш контент страницы */}
            </div>
            <Footer style={{ position: "absolute", left: "0", bottom: "0", width: "100%" }} />
        </div>
    );
}

export default MainPage;