import variationCSS from "./index.css";
import norman from "../norman/index.js"
import breadcrumbs from "./breadcrumbs.js";
import gallery from "./gallery.js";
import price from "./price.js";
import title from "./title.js";

function build_template(details) {
    let breadcrumbs_html = breadcrumbs.build_breadcrumbs(details.crumbs)
    let gallery_html = gallery.build_gallery(details.images)
    let title_html = `<h1 class="pah156-title">${details.title}</h1>`
    let price_html = price.build_price(details.prices)
    return `<div class="pah156-layout-pdp">
        ${breadcrumbs_html}
        ${gallery_html}
        ${title_html}
        ${price_html}
    </div>`
}

function get_details() {
    return {
        crumbs: [],
        images: gallery.get_images(),
        title: title.get_title(),
        brand: title.get_brand(),
        reviews: title.get_reviews(),
        prices: prices.get_prices(),
    }
}

function init() {
    norman.core.log("Variation 1")
    norman.core.track(Variant.name, "Loaded", true)
    norman.core.log("Getting details")
    let details = get_details()
    norman.core.log({
        msg: "Details scraped",
        details
    })
    norman.core.log("Building template")
    let element = build_template(details)
    norman.core.log({
        msg: "Template built",
        element
    })
    let targetSel = ".layout-pdp"
    let meth = "beforeBegin"
    norman.core.log(`Checking if "${targetSel}" exists`)
    if(norman.core.elementManagement.exists(targetSel)) {
        norman.core.log(`Inserting template "${meth}" "${targetSel}"`)
        norman.core.elementManagement.add(element, meth, targetSel)
    }
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