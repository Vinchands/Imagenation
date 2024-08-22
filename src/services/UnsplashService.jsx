// import { useState, useEffect } from 'react'

const ACCESS_KEY = '9IGXBgbx529tpvlVfTglpN1tYE820sfXdlX92liRD-0'

export default async function fetchUnsplashData(url) {
    
    const fullURL = `${url}&client_id=${ACCESS_KEY}`
    
    return await fetch(fullURL)
        .then(response => {
            if (!response.ok) throw new Error(`Error! Status: ${response.status}`)
            return response.json()
        })
        .then(data => data)
}
