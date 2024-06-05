import { endpoints } from "@/services/api";

export const getMediaInfo = async (mediaType, mediaId) => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints[mediaType]}/${mediaId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getMediaSimilar = async (mediaType, mediaId) => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints[mediaType]}/${mediaId}${endpoints.SIMILAR}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

export const getMediaImages = async (mediaType, mediaId) => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints[mediaType]}/${mediaId}${endpoints.IMAGES}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};