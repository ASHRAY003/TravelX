import { GOOGLE_MAPS_API_KEY } from "../constants"

export const getPhotoRef = async (placename) => {
    const resp = await fetch('https://maps.googleapis.com/maps/api/place/textsearch/json' + '?query=' + placename + '&key=' + GOOGLE_MAPS_API_KEY)

    const result = await resp.json()
    console.log(result)
    return result
}
