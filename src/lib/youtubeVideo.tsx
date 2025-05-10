// src/lib/youtubeVideo.tsx

import React from 'react';

export interface YouTubeEmbedParams {
    [key: string]: string | number | undefined | null;
    autoplay?: "0" | "1";
    mute?: "0" | "1";
    loop?: "0" | "1";
    playsinline?: "0" | "1";
    controls?: "0" | "1" | "2";
    rel?: "0" | "1";
    showinfo?: "0" | "1";
    modestbranding?: "0" | "1";
    playlist?: string;
    start?: number;
    end?: number;
    cc_load_policy?: "0" | "1";
    iv_load_policy?: "1" | "3";
}

const DEFAULT_YOUTUBE_PARAMS: Readonly<YouTubeEmbedParams> = {
    autoplay: "1",
    mute: "1",
    loop: "1",
    playsinline: "1",
    controls: "0",
    rel: "0",
    showinfo: "0",
    modestbranding: "1",

};

interface YouTubeEmbedProps {
    videoId: string;
    customParams?: YouTubeEmbedParams;
    title?: string;
    className?: string;
    width?: string | number;
    height?: string | number;
    isBackgroundVideo?: boolean;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
    videoId,
    customParams = {},
    title = "YouTube video player",
    className,
    width,
    height,
    isBackgroundVideo = false,

}) => {
    if (!videoId) {
        console.error("YouTubeEmbed: videoId prop is required.");
        return null;
    }

    const combinedParams: YouTubeEmbedParams = {
        ...DEFAULT_YOUTUBE_PARAMS,
        ...customParams,
    };

    if (String(combinedParams.loop) === "1" && !combinedParams.hasOwnProperty('playlist')) {
        combinedParams.playlist = videoId;
    }

    const finalParams: Record<string, string> = {};
    for (const key in combinedParams) {
        if (Object.prototype.hasOwnProperty.call(combinedParams, key)) {
            const value = combinedParams[key];
            if (value !== undefined && value !== null) {
                finalParams[key] = String(value);
            }
        }
    }

    const searchParams = new URLSearchParams(finalParams).toString();
    const embedUrl = `https://www.youtube.com/embed/${videoId}${searchParams ? `?${searchParams}` : ''}`;

    if (isBackgroundVideo) {
        const wrapperStyles: React.CSSProperties = {
            position: 'absolute', // Assumes parent is relative and has overflow:hidden
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw', // Force 16:9 aspect ratio, wider than tall viewports
            height: '56.25vw', // 100 * (9/16)
            minWidth: '177.77vh', // Force 16:9 aspect ratio, taller than wide viewports
            minHeight: '100vh',   // 100 * (16/9)
            pointerEvents: 'none', // Usually desired for backgrounds
        };

        return (
            <div style={wrapperStyles} className={className || ''}>
                <iframe
                    src={embedUrl}
                    title={title}
                    width="100%" // Fills the wrapper
                    height="100%" // Fills the wrapper
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ border: 'none' }} // Remove iframe default border
                ></iframe>
            </div>
        );
    } else {

        return (
            <iframe
                src={embedUrl}
                title={title}
                width={width}
                height={height}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className={`w-full h-full object-cover ${className}`}
            ></iframe>
        );
    };
}

export default YouTubeEmbed;