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
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
    videoId,
    customParams = {},
    title = "YouTube video player",
    className,

    width,
    height,
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

export default YouTubeEmbed;