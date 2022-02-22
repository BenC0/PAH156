import norman from "../norman"

export function build_price(prices) {
    norman.core.log({
        msg: "Building prices from object",
        prices
    })
    return `<div class="pah156-price" price_type="${prices.type}">
        <p class="saving">${prices.saving}</p>
        <p class="now">${prices.now}</p>
        <p class="was">${prices.was}</p>
        <p class="normalised">${prices.normalised}</p>
    </div>`
}

export function check_and_get_price(selector) {
    norman.core.log(`Checking and getting ${selector}`)
    if (norman.core.elementManagement.exists(selector)) {
        return norman.core.elementManagement.get(selector).textContent.trim()
    } else {
        return ""
    }
}

export function get_type() {
    norman.core.log(`Getting product type`)
    let type = "one-time-purchase"
    if (norman.core.elementManagement.exists("#checkout-combo__offer-text-er")) {
        type = "easy-repeat"
    } else if (norman.core.elementManagement.exists(".pdp-offer-text__inner")) {
        type = "sale"
    }
    return type
}

export function get_prices() {
    norman.core.log(`Getting product prices`)
    let prices = {
        type: get_type(),
        now: check_and_get_price("#offerPrice"),
        was: check_and_get_price(".pdp-price__was"),
        saving: check_and_get_price(".pdp-price__you-save"),
        normalised: check_and_get_price(".pdp-price__weight"),
    }
    return prices
}

export const price = {
    get_prices,
    build_price,
}

export default price