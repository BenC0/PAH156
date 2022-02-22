export function build_price(prices) {
    return `<div class="pah156-price" price_type="${prices.type}">
        <p class="saving">${prices.saving}</p>
        <p class="now">${prices.now}</p>
        <p class="was">${prices.was}</p>
        <p class="normalised">${prices.normalised}</p>
    </div>`
}

export const price = {
    build_price
}

export default price