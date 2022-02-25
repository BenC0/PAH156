import {log, elementManagement} from "../norman"

export function build_image_str(img) {
    log(`Building new product image element`)
    return `<img src="${img.src}" alt="${img.alt}" class="swiper-slide">`
}

export function build_gallery(images) {
    log(`Building new product image gallery element`)
    let htmlStr = ``
    images.forEach(img => htmlStr += build_image_str(img))
    return `<div class="pah156-image-gallery">
        <div class="swiper-wrapper"> ${htmlStr} </div>
        <div class="pah156-progress-bar">
            <div class="indicator"></div>
        </div>
    </div>`
}

export function get_images() {
    log(`Getting product images`)
    let images_selector = "#pdp-full-image"
    if(elementManagement.exists(images_selector)) {
        let image_els = elementManagement.getAll(images_selector)
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

export function update_progress_bar() {
    let indicator_selector = ".pah156-progress-bar .indicator"
    let wrapper_selector = ".pah156-image-gallery .swiper-wrapper"
    let slide_selector = ".pah156-image-gallery .swiper-wrapper .swiper-slide"
    if (elementManagement.exists(indicator_selector)
    && elementManagement.exists(wrapper_selector)
    && elementManagement.exists(slide_selector)
    ) {
        let slides = elementManagement.get(slide_selector, true)
        let last_slide = slides.pop()

        let first_slide = slides[0]
        let slide_width = first_slide.style.width
        slide_width = slide_width.replace(/[a-z]/, "")
        slide_width = parseFloat(slide_width)
        
        let slide_gap = first_slide.style.marginRight
        slide_gap = slide_gap.replace(/[a-z]/, "")
        slide_gap = parseFloat(slide_gap)
        
        let total_slide_width = slide_width + slide_gap
        let max_width = total_slide_width * (slides.length + 1)

        let wrapper = elementManagement.get(wrapper_selector).pop()
        let wrapper_transform = wrapper.style.transform
        let wrapper_transform_values = wrapper_transform.match(/[0-9]*px/g)
        let wrapper_transform_x = wrapper_transform_values[0]
        wrapper_transform_x = wrapper_transform_x.replace(/[a-z]/g, '')
        let current_offset = parseFloat(wrapper_transform_x) + total_slide_width

        if (current_offset <= 0) {
            current_offset = total_slide_width
        }

        let indicator = elementManagement.get(indicator_selector).pop()
        indicator.style.width = `${(current_offset/max_width) * 100}%`

        log({
            msg: `updating indicator width to ${indicator.style.width}`,
            slide_gap,
            slide_width,
            max_width,
            total_slide_width,
            current_offset,
        })
    }
}

export function init_swiper() {
    let gallery_container_selector = ".pah156-image-gallery"
    log(`Initialising Swiper on ${gallery_container_selector}`)
    let g = new Swiper(gallery_container_selector, {
        speed: 500,
        spaceBetween: 10,
        createElements: true,
        on: {
            // sliderMove: update_progress_bar,
            slideChange: update_progress_bar,
        }
    });
    update_progress_bar()
    return g
}

export const gallery = {
    get_images,
    init_swiper,
    build_gallery,
    build_image_str,
}

export default gallery