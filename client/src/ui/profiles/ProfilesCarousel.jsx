import React, { useMemo, useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { extractLayers, wrapSvg, colorizeSvg } from "@/lib/utils";
import { profiles, profileList } from "@/lib/profiles.config.js";
import { useStore } from "@/store/useStore";

import baseSvg from "@/assets/svg/profiles_base.svg?raw";
import "./character.css";

import ProfileCard from "./ProfileCard";

export default function ProfilesCarousel() {
    const selectedProfileId = useStore((s) => s.selectedProfileId);
    const setProfile = useStore((s) => s.setProfile);
    const mainColor = useStore((s) => s.mainColor);
    const theme = useTheme();

    // Load & parse ALL costumes once
    const parsed = useMemo(() => {
        const baseParsed = extractLayers(baseSvg);

        return {
            base: baseParsed.base,
            viewBox: baseParsed.viewBox,
            costumes: profileList.map((p) => ({
                id: p.id,
                label: p.label,
                color: p.color,
                front: extractLayers(p.svg).front,
                back: extractLayers(p.svg).back,
            })),
        };
    }, []);

    useEffect(() => {
        useStore.setState({
            mainColor: parsed.costumes[selectedProfileId].color,
            selectedProfile: profileList[selectedProfileId],
        });
    }, []);

    const total = parsed.costumes.length;

    const prev = () => {
        const newIndex =
            selectedProfileId === 0 ? total - 1 : selectedProfileId - 1;
        setProfile(parsed.costumes[newIndex].id);
    };

    const next = () => {
        const newIndex =
            selectedProfileId === total - 1 ? 0 : selectedProfileId + 1;
        setProfile(parsed.costumes[newIndex].id);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                position: "relative",
                flexGrow: 1,
            }}
        >
            {/* LEFT BUTTON */}
            <IconButton
                // variant="mini"
                onClick={prev}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: 0,
                    transform: "translateY(-50%)",
                    zIndex: 10,
                }}
            >
                <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            {/* RIGHT BUTTON */}
            <IconButton
                onClick={next}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    transform: "translateY(-50%)",
                    zIndex: 10,
                }}
            >
                <ArrowForwardIosIcon fontSize="small" />
            </IconButton>

            {/* CAROUSEL CONTENT */}
            <ProfileCard
                baseSvg={parsed.base}
                profilesSvg={parsed.costumes}
                viewBox={parsed.viewBox}
                index={selectedProfileId}
                color={mainColor}
            />
        </Box>
    );
}
