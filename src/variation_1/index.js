import variationCSS from "./index.css";
import {init, log, track, elementManagement} from "../norman/index.js"
import gallery from "./gallery.js";
import price from "./price.js";
import title from "./title.js";

function build_template(details) {
    let gallery_html = gallery.build_gallery(details.images)
    let title_html = title.build_title_and_reviews(details)
    let price_html = price.build_price(details.prices)
    return `<div class="pah156-layout-pdp">
        ${gallery_html}
        ${title_html}
        ${price_html}
    </div>`
}

function get_details() {
    return {
        images: gallery.get_images(),
        title: title.get_title(),
        brand: title.get_brand(),
        reviews: title.get_reviews(),
        prices: price.get_prices(),
    }
}

function variant_actions() {
    log("Variation 1")
    track(Variant.name, "Loaded", true)
    log("Getting details")
    let details = get_details()
    log({
        msg: "Details scraped",
        details
    })
    log("Building template")
    let element = build_template(details)
    log({
        msg: "Template built",
        element
    })
    let targetSel = ".layout-pdp"
    let meth = "beforeBegin"
    log(`Checking if "${targetSel}" exists`)
    if(elementManagement.exists(targetSel)) {
        log(`Inserting template "${meth}" "${targetSel}"`)
        elementManagement.add(element, meth, targetSel)
        gallery.init_swiper()
        title.watch_reviews()
    }
}

const Variant = {
    name: "Variation 1",
    css: variationCSS,
    conditions: () => {
        let conditions = []
        // Check for product title
        conditions.push(elementManagement.exists(`.pdp-heading-ratings__title`))
        // Check for product star rating
        conditions.push(elementManagement.exists(`[onclick="ui.scrollTo('#pr-review-snapshot');"]`))
        // Check for product price
        conditions.push(elementManagement.exists(`[data-module="pdp_price"]`))
        log({message: `Polling: Conditions`, conditions})
        let result = conditions.every(a => a)
        log({message: `Polling: Result`, result})
        return result
    },
    actions: variant_actions,
}

let nVariant = init(Variant)
nVariant.run()