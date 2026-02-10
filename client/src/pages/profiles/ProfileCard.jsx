import { Box } from "@mui/material";
import { Fragment } from "react";

import { wrapSvg, colorizeSvg } from "@/lib/utils";

export default function ProfileCard({
    baseSvg,
    profilesSvg,
    viewBox,
    index,
    color,
}) {
    return (
        <>
            {baseSvg && profilesSvg && (
                <Box className="carousel-container">
                    {/* --- BASE LAYER (fixed) --- */}
                    <Box
                        className="costume-layer"
                        sx={{ zIndex: 1 }}
                        dangerouslySetInnerHTML={{
                            __html: wrapSvg(
                                colorizeSvg(baseSvg, color),
                                viewBox
                            ),
                        }}
                    />

                    {/* --- COSTUMES (sliding) --- */}
                    {profilesSvg.map((c, i) => {
                        const position =
                            i === index ? "0%" : i < index ? "-100%" : "100%";

                        return (
                            <Fragment key={c.id}>
                                {/* BACK */}
                                <Box
                                    className="costume-layer"
                                    sx={{
                                        zIndex: 0,
                                        transform: `translateX(${position})`,
                                        opacity: i === index ? 1 : 0,
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: wrapSvg(
                                            colorizeSvg(
                                                c.back,
                                                profilesSvg[i].color
                                            ),
                                            viewBox
                                        ),
                                    }}
                                />

                                {/* FRONT */}
                                <Box
                                    className="costume-layer"
                                    sx={{
                                        zIndex: 2,
                                        transform: `translateX(${position})`,
                                        opacity: i === index ? 1 : 0,
                                    }}
                                    dangerouslySetInnerHTML={{
                                        __html: wrapSvg(
                                            colorizeSvg(
                                                c.front,
                                                profilesSvg[i].color
                                            ),
                                            viewBox
                                        ),
                                    }}
                                />
                            </Fragment>
                        );
                    })}
                </Box>
            )}
        </>
    );
}
