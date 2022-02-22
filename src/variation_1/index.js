import variationCSS from "./index.css";
import norman from "../norman/index.js"
import breadcrumbs from "./breadcrumbs.js";
import gallery from "./gallery.js";

function build_template(details) {
    let breadcrumbs_html = breadcrumbs.build_breadcrumbs(details.crumbs)
    let gallery_html = gallery.build_gallery(details.images)
    return `<div class="pah156-layout-pdp">
        ${breadcrumbs_html}
        ${gallery_html}
    </div>`
}

function init() {
    norman.core.log("Variation 1")
    norman.core.track(Variant.name, "Loaded", true)
    // Move product title
    // Move product star rating
    // Adjust product price style
}

const Variant = {
    name: "Variation 1",
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