import {elementManagement, log} from "../norman"

export function build_price(prices) {
    log({
        msg: "Building prices from object",
        prices
    })
    return `<div class="pah156-price" price_type="${prices.type}">
        <p class="saving">${prices.saving}</p>
        <div class="main_price">
            <p class="now">${prices.now}</p>
            <p class="was">${prices.was}</p>
        </div>
        <p class="normalised">${prices.normalised}</p>
    </div>`
}

export function check_and_get_price(selector) {
    log(`Checking and getting ${selector}`)
    if (elementManagement.exists(selector)) {
        let el = elementManagement.get(selector).pop()
        return el.textContent.replace(/\(|\)/g, "").trim()
    } else {
        return ""
    }
}

export function get_type() {
    log(`Getting product type`)
    let type = "one-time-purchase"
    if (elementManagement.exists("#checkout-combo__offer-text-er")) {
        type = "easy-repeat"
    } else if (elementManagement.exists(".pdp-offer-text__inner")) {
        type = "sale"
    }
    return type
}

export function get_prices() {
    log(`Getting product prices`)
    let prices = {
        type: get_type(),
        now: check_and_get_price("#offerPrice, #erOfferPrice"),
        was: check_and_get_price(".pdp-price__was").replace(/Was /g, ""),
        saving: check_and_get_price(".pdp-price__you-save, #checkout-combo__offer-text-er"),
        normalised: check_and_get_price(".pdp-price__weight"),
    }
    return prices
}

export const price = {
    get_prices,
    build_price,
}

export default price