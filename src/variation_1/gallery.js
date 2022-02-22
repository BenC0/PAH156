export function build_image_str(img) {
    return `<img src="${img.src}" alt="${img.alt}">`
}

export function build_gallery(images) {
    let htmlStr = ``
    images.forEach(img => htmlStr += build_image_str(img))
    return `<div class="pah156-image-gallery">${htmlStr}</div>`
}

export const gallery = {
    build_gallery,
    build_image_str,
}

export default gallery