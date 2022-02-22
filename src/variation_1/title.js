import norman from "../norman"

export function build_reviews(reviews, brand = "") {
    norman.core.log(`Building new product reviews element`)
    let star_svg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.61059 15.6109C3.22459 15.8089 2.7866 15.4619 2.8646 15.0179V15.0199L3.69459 10.29L0.17165 6.93402C-0.157344 6.62003 0.0136532 6.04604 0.454645 5.98404L5.35256 5.28805L7.53652 0.960131C7.57812 0.872421 7.64376 0.798317 7.7258 0.746427C7.80785 0.694537 7.90293 0.666992 8.00001 0.666992C8.09708 0.666992 8.19217 0.694537 8.27421 0.746427C8.35626 0.798317 8.4219 0.872421 8.4635 0.960131L10.6475 5.28705L15.5454 5.98304C15.9874 6.04504 16.1574 6.61903 15.8274 6.93302L12.3054 10.289L13.1354 15.0189C13.2134 15.4619 12.7754 15.8089 12.3894 15.6109L8.00051 13.3549L3.61059 15.6109Z"/></svg>
`
    let brand_str = brand == "" ? "" : `by <b>${brand}</b>`
    return `<div class="pah156-reviews">
        ${brand_str}
        <div class="pah156-reviews-rating">
            <div class="stars" score="${reviews.rating}">
                ${star_svg}
                ${star_svg}
                ${star_svg}
                ${star_svg}
                ${star_svg}
            </div>
            <div class="amount">(${reviews.number})</div>
        </div>
    </div>`
}

export function build_title(title) {
    norman.core.log(`Building new product title element`)
    return `<h1 class="pah156-title">${title}</h1>`
}

export function build_title_and_reviews(details) {
    norman.core.log(`Building new product title and reviews element`)
    let title = build_title(details.title)
    let reviews = build_reviews(details.reviews, details.brand)
    return `<div class="pah156-title-container">
        ${title}
        ${reviews}
    </div>`
}

export function get_title() {
    norman.core.log(`Getting product title`)
    let title_selector = ".pdp-heading-ratings__title"
    if(norman.core.elementManagement.exists(title_selector)) {
        let el = norman.core.elementManagement.get(title_selector).pop()
        return el.textContent.trim()
    } else {
        return ""
    }
}

export function get_reviews() {
    norman.core.log(`Getting product reviews`)
    let rating_stars_selector = ".pr-snippet-rating-decimal"
    let reviews_number_selector = ".pr-category-snippet__total"
    if(norman.core.elementManagement.exists(rating_stars_selector) && norman.core.elementManagement.exists(reviews_number_selector)) {
        let rating_stars = norman.core.elementManagement.get(rating_stars_selector).pop()
        let reviews_number = norman.core.elementManagement.get(reviews_number_selector).pop()
        return {
            rating: rating_stars.textContent.trim(),
            number: reviews_number.textContent.trim(),
        }
    } else {
        return {
            rating: "0",
            number: "0",
        }
    }
}

export function get_brand() {
    norman.core.log(`Getting product brand`)
    return !!window.googleFirstBasketItemImpression ? window.googleFirstBasketItemImpression.brand || "" : ""
}

export const title = {
    get_brand,
    get_title,
    get_reviews,
    build_title,
    build_reviews,
    build_title_and_reviews,
}

export default title