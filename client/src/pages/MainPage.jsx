import ProfileSelectionPage from "./sub/ProfileSelectionPage.jsx";
import MapPage from "./sub/MapPage.jsx";

import Banner from "@/ui/Banner.jsx";
import Footer from "@/ui/Footer.jsx";

import { useStore } from "@/store/useStore.jsx";

export default function MainPage({ theme }) {
    const page = useStore((state) => state.page);

    return (
        <>
            {/* Banner */}
            <Banner page={page} />

            {page == "profiles" && <ProfileSelectionPage theme={theme} />}
            {page == "map" && <MapPage theme={theme} />}

            {/* Footer */}
            <Footer page={page} />
        </>
    );
}
