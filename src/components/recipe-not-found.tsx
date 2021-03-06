import * as React from "react"
import Layout from "./layout"

const suportedSites = [
    "https://www.101cookbooks.com/",
    "https://www.allrecipes.com/",
    "https://www.ambitiouskitchen.com/",
    "https://www.averiecooks.com/",
    "https://www.bbc.co.uk/",
    "https://www.bbcgoodfood.com/",
    "https://www.bonappetit.com/",
    "https://www.budgetbytes.com/",
    "https://www.centraltexasfoodbank.org/",
    "https://www.closetcooking.com/",
    "https://cookieandkate.com/",
    "https://copykat.com/",
    "https://damndelicious.net/",
    "https://www.eatingwell.com/",
    "https://www.epicurious.com/",
    "https://www.food.com/",
    "https://www.foodandwine.com/",
    "https://www.foodnetwork.com/",
    "https://gimmedelicious.com/",
    "https://www.gimmesomeoven.com/",
    "https://julieblanner.com/",
    "https://www.kitchenstories.com/",
    "https://www.melskitchencafe.com/",
    "https://www.minimalistbaker.com/",
    "https://www.myrecipes.com/",
    "https://www.nomnompaleo.com/",
    "https://www.omnivorescookbook.com/",
    "https://pinchofyum.com/",
    "https://recipetineats.com/",
    "https://www.seriouseats.com/",
    "https://www.simplyrecipes.com/",
    "https://smittenkitchen.com/",
    "https://thepioneerwoman.com/",
    "https://www.tasteofhome.com/",
    "https://tastesbetterfromscratch.com/",
    "https://thatlowcarblife.com/",
    "https://www.theblackpeppercorn.com/",
    "https://therealfoodrds.com/",
    "https://www.thespruceeats.com/",
    "https://whatsgabycooking.com/",
    "https://www.woolworths.com.au/",
    "https://www.yummly.com/",
    "https://www.jamieoliver.com/"
]

const RecipeNotFound = () => (
    <Layout title="Recipe Not Found" show_back_btn={true}>
        <p>The URL you entered could not be imported, Unfortunately not all cooking websites are currently supported.</p>
        <p>The following are supported recipe websites</p>
        <ul>
            {suportedSites.map((site, idx) => {
                return <li key={idx}><a href={site}>{site}</a></li>
            })}
        </ul>
    </Layout>
)

export default RecipeNotFound
