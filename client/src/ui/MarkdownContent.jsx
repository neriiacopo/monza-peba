import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { CircularProgress, Container, Typography, Box } from "@mui/material";

import { useTheme } from "@mui/material";

export default function MarkdownContent({ title, filename }) {
    const theme = useTheme();
    const [content, setContent] = useState(null);

    useEffect(() => {
        fetch(`./mds/${filename}.md`)
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, [filename]);

    if (!content) return <CircularProgress />;

    return (
        <>
            <ReactMarkdown
                style={{
                    paddingTop: "20vh",
                    marginBottom: theme.offRad,
                    // textTransform: "uppercase",
                }}
                components={{
                    h1: ({ node, ...props }) => (
                        <Typography
                            variant="h2"
                            sx={{
                                pt: "20vh",
                                mb: theme.offRad,
                                textTransform: "uppercase",

                                // fontFeatureSettings: `"ss0${randomStyle()}" 1`,
                            }}
                        >
                            {props.children}
                        </Typography>
                    ),

                    h2: ({ node, ...props }) => (
                        <div
                            sx={{
                                mt: theme.offRad,
                            }}
                        >
                            <Typography
                                variant="h4"
                                {...props}
                                // sx={{
                                //     mt: theme.offRad,
                                // }}
                            >
                                {props.children}
                            </Typography>
                        </div>
                    ),

                    strong: ({ node, ...props }) => (
                        <Typography
                            component="span"
                            sx={{
                                // fontWeight: "bold",
                                textDecoration: "underline",
                                // mr: 1,
                            }}
                            {...props}
                        />
                    ),
                    p: ({ node, ...props }) => (
                        <Typography
                            {...props}
                            sx={{
                                textAlign: "left",
                                m: "1em 0",
                                fontSize: 13,
                                // fontFamily: theme.fonts.article,
                                lineHeight: "1.2rem",
                            }}
                        />
                    ),

                    ul: ({ node, ...props }) => (
                        <Typography
                            {...props}
                            sx={{
                                // textAlign: "left",
                                ml: "2em",
                                fontSize: 13,
                                // fontFamily: theme.fonts.article,
                                lineHeight: "1.2rem",
                            }}
                        />
                    ),
                }}
            >
                {content}
            </ReactMarkdown>
        </>
    );
}
