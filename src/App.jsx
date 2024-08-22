import { getImagesLimit, getImagesLimitWithQuery } from './services/UnsplashImages'
import * as Components from './Components'
import { useState, useEffect } from 'react'

export default function App() {
    
    const [images, setImages] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    
    useEffect(() => {
        (async () => {
            const data = await getImagesLimit(20)
            setImages(data)
        })()
    }, [])
    
    return (
        <>
            <Components.Header />
            <Components.Banner />
            <Components.SearchBar />
            <div className='container bg-body-tertiary rounded p-3'>
                <div className='row'>{ 
                    images.map(image =>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 g-3" key={ image.id }>
                            <img
                                src={ image.urls.small }
                                alt={ image.alt_description }
                                className='img-fluid'/>
                        </div>
                    )
                }</div>
            </div>
        </>
    );
}
