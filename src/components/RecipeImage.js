import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Img = ({ src, className, alt }) => {
    if (src) {
        return <img src={src} className={className} alt={alt} />
    }
    else {
        return <StaticImage src="../images/defaultRecipe.png" width={73} height={80} layout="fixed" className={className} alt="Recipe Icon" />
    }
}

export default Img