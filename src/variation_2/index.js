import variationCSS from "./index.css";
import norman from "../norman/index.js"

function init() {
    norman.core.log("Variation 2")
    norman.core.track(Variant.name, "Loaded", true)
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