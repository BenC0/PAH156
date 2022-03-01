import variationCSS from "./index.css";
import norman from "../norman/index.js"
import price from "./price.js"

function init() {
    norman.core.log("Variation 2")
    norman.core.track(Variant.name, "Loaded", true)
    let prices = price.get_prices()
    let price_html = price.build_price(prices)
    let layoutPdp = norman.core.elementManagement.get('.layout-pdp').pop()
    norman.core.elementManagement.add(price_html, "beforeEnd", layoutPdp) 
    
    norman.core.elementManagement.get(`[onclick="ui.scrollTo('#pr-review-snapshot');"]`, true).forEach(el => el.addEventListener("click", _ => {
        norman.core.track("Variation 2", "Reviews Star Engagement", false)
    }))

    norman.core.elementManagement.get(".scroller__wrapper").forEach(el => {
        el.addEventListener("touchend", _ => {
            norman.core.track("Variation 2", `Gallery Image Engagement`, false)
        })
    })
}

const Variant = {
    name: "Variation 2",
    css: variationCSS,
    conditions: () => {
        let conditions = []
        // Check for product title
        conditions.push(norman.core.elementManagement.exists(`.pdp-heading-ratings__title`))
        // Check for product star rating
        conditions.push(norman.core.elementManagement.exists(`[onclick="ui.scrollTo('#pr-review-snapshot');"]`))
        // Check for product price
        conditions.push(norman.core.elementManagement.exists(`[data-module="pdp_price"]`))
        norman.core.log({message: `Polling: Conditions`, conditions})
        let result = conditions.every(a => a)
        norman.core.log({message: `Polling: Result`, result})
        return result
    },
    actions: init,
}

let nVariant = norman.init(Variant)
nVariant.run()