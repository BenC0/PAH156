import norman from "../norman"

export function build_image_str(img) {
    norman.core.log(`Building new product image element`)
    return `<img src="${img.src}" alt="${img.alt}">`
}

export function build_gallery(images) {
    norman.core.log(`Building new product image gallery element`)
    let htmlStr = ``
    images.forEach(img => htmlStr += build_image_str(img))
    return `<div class="pah156-image-gallery">${htmlStr}</div>`
}

export function get_images() {
    norman.core.log(`Getting product images`)
    let images_selector = "#pdp-full-image"
    if(norman.core.elementManagement.exists(images_selector)) {
        let image_els = norman.core.elementManagement.getAll(images_selector)
        let images = []
        image_els.forEach((el, ind) => images.push({
            src: el.getAttribute("src"),
            alt: el.getAttribute("alt") || `Product image #${ind}`,
        }))
        return images
    } else {
        return false
    }
}

export const gallery = {
    get_images,
    build_gallery,
    build_image_str,
}

export default gallery