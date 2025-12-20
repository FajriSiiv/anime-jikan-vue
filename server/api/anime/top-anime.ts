type AnimeTypeProps = {
    images: any;
    mal_id: number;
    title: string;
    score: number;
    synopsis: string;
    genres: {
        name: string;
    }[];
    type:string
}

export default defineCachedEventHandler(async (event) => {
    const url = 'https://api.jikan.moe/v4/top/anime'

    try {
        const response: any = await $fetch(url);
        return response.data.map((item: AnimeTypeProps) => ({
            id: item.mal_id,    
            title: item.title,
            score: item.score,  
            imageUrl: item.images.webp.large_image_url,
            description:item.synopsis,
            genres:item.genres.map((genre: { name: string }) => genre.name),
            type:item.type
        }));
    } catch (error) {
        throw createError({ statusCode: 500, statusMessage: 'Failed to fetch from Jikan API' });
    }
},{
    maxAge: 3600, // Simpan data selama 1 jam
    name: 'topAnime',
    getKey: () => 'top-list'
})