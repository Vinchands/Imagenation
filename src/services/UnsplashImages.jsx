import fetchUnsplashData from './UnsplashService'

const URL_DOMAIN = 'https://api.unsplash.com'

export async function getImagesLimit(count = 10) {
    
    const url = `${URL_DOMAIN}/photos/random?per_page=${count}`
    
    try {
        const images = await fetchUnsplashData(url);
        return images
    }
    
    catch (error) {
        console.error('Error fetching images:', error)
    }
}

export async function getImagesLimitWithQuery(query, count = 10) {
    
    const url = `${URL_DOMAIN}/search/photos?query=${query}&per_page=${count}`
    
    try {
        const images = await fetchUnsplashData(url);
        return images
    }
    
    catch (error) {
        console.error('Error fetching images with query:', error)
    }
}

// TODO: More functions here...
