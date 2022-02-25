import {log, elementManagement} from "../norman"

export function build_image_str(img) {
    log(`Building new product image element`)
    return `<img src="${img.src}" alt="${img.alt}" class="swiper-slide">`
}

export function build_gallery(images) {
    log(`Building new product image gallery element`)
    let htmlStr = ``
    images.forEach(img => htmlStr += build_image_str(img))
    return `<div class="pah156-image-gallery" zoom="false" images="${images.length}">
        <div class="swiper-wrapper"> ${htmlStr} </div>
        <div class="pah156-progress-bar">
            <div class="indicator"></div>
        </div>
        <div class="close">
            <svg class="close_icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.496031 0.495727C0.712989 0.278769 1.06475 0.278769 1.28171 0.495727L13.5039 12.7179C13.7209 12.9349 13.7209 13.2867 13.5039 13.5036C13.287 13.7206 12.9352 13.7206 12.7183 13.5036L0.496031 1.2814C0.279073 1.06444 0.279073 0.712684 0.496031 0.495727Z" fill="#2A2A2A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.496031 13.5036C0.279073 13.2867 0.279073 12.9349 0.496031 12.7179L12.7183 0.495726C12.9352 0.278768 13.287 0.278768 13.5039 0.495726C13.7209 0.712685 13.7209 1.06444 13.5039 1.2814L1.28171 13.5036C1.06475 13.7206 0.712989 13.7206 0.496031 13.5036Z" fill="#2A2A2A"/>
            </svg>
        </div>
        <div class="zoom">
            <svg class="zoom_icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="#F7F7F7"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7815 17.3333C19.7726 17.3333 17.3333 19.7726 17.3333 22.7815C17.3333 25.7905 19.7726 28.2297 22.7815 28.2297C25.7905 28.2297 28.2297 25.7905 28.2297 22.7815C28.2297 19.7726 25.7905 17.3333 22.7815 17.3333ZM16 22.7815C16 19.0362 19.0362 16 22.7815 16C26.5269 16 29.5631 19.0362 29.5631 22.7815C29.5631 26.5269 26.5269 29.5631 22.7815 29.5631C19.0362 29.5631 16 26.5269 16 22.7815Z" fill="#2A2A2A"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6311 26.6311C26.8915 26.3708 27.3136 26.3708 27.574 26.6311L31.8047 30.8619C32.0651 31.1223 32.0651 31.5444 31.8047 31.8047C31.5444 32.0651 31.1223 32.0651 30.8619 31.8047L26.6311 27.574C26.3708 27.3136 26.3708 26.8915 26.6311 26.6311Z" fill="#2A2A2A"/>
                <g clip-path="url(#clip0_8585_56844)">
                    <path d="M18.75 22.4167H26.75V23.0833H18.75V22.4167Z" fill="#2A2A2A"/>
                    <path d="M22.4167 26.75V18.75H23.0833V26.75H22.4167Z" fill="#2A2A2A"/>
                </g>
                <defs>
                    <clipPath id="clip0_8585_56844">
                        <rect width="8" height="8" fill="white" transform="translate(18.75 18.75)"/>
                    </clipPath>
                </defs>
            </svg>
        </div>

    </div>`
}

export function toggle_zoom() {
    let parent_sel =  ".pah156-image-gallery"
    let parent = elementManagement.get(parent_sel)
    if(parent.length !== 0) {
        parent = parent.pop()
        let current_zoom_status = parent.getAttribute("zoom")
        let new_status = current_zoom_status == "false"
        parent.setAttribute("zoom", new_status)
    }
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
    elementManagement.get(".pah156-image-gallery .zoom, .pah156-image-gallery .close").forEach(el => {
        el.addEventListener('click', toggle_zoom)
    })
    return g
}

export const gallery = {
    get_images,
    init_swiper,
    build_gallery,
    build_image_str,
}

export default gallery