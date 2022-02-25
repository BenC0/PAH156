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
        <div class="swiper-container">
            <div class="swiper-wrapper"> ${htmlStr} </div>
        </div>
        <div class="pah156-progress-bar">
            <div class="indicator"></div>
        </div>
        <div class="zoom-wrapper">
            <div class="logo">
                <svg xmlns="http://www.w3.org/2000/svg" class="site-logo__svg" viewBox="0 0 50 50"><path d="M5 0h40c2.8 0 5 2.2 5 5v40c0 2.8-2.2 5-5 5H5c-2.8 0-5-2.2-5-5V5c0-2.8 2.2-5 5-5z" fill="#54b947"></path><path d="M11.3 17.7c-.7 0-1.3.4-1.9 1.1v4.1c.5.2.8.3 1.5.3 1.1 0 2-.9 2-3 .1-1.7-.6-2.5-1.6-2.5zm-5.2-2.8H9l.2 1.4c.8-.8 1.7-1.7 3.1-1.7 2.2 0 3.9 1.7 3.9 5.4 0 4.1-2.2 5.8-4.6 5.8-.8 0-1.5-.1-2.3-.4v3.1l-3.3.6c.1.1.1-14.2.1-14.2zm16 2c-.9 0-1.6.8-1.7 2.5h3.4c-.1-1.7-.7-2.5-1.7-2.5zm4.8 4.3h-6.5c.2 1.7 1.2 2.4 2.7 2.4 1.2 0 2.4-.4 3.6-1.1l.3 2.3c-1.2.8-2.6 1.2-4.3 1.2-3.3 0-5.6-1.7-5.6-5.6 0-3.5 2.2-5.7 5.1-5.7 3.3 0 4.8 2.5 4.8 5.6 0 .4 0 .7-.1.9zm5.8 4.7c-2.3 0-3.9-.8-3.9-3.6v-4.7h-1.4v-2.7h1.4v-3.2l3.3-.5v3.7h2.5v2.7h-2.5v4.1c0 .9.4 1.3 1.3 1.3.3 0 .6 0 .8-.1l.4 2.7c-.5.3-1 .3-1.9.3m7.1.1c-1.7 0-3.3-.5-4.5-1.1l.4-2.5c1.3.8 2.9 1.3 4.1 1.3.9 0 1.4-.3 1.4-.8 0-.6-.3-.8-1.8-1.2-2.7-.7-3.9-1.4-3.9-3.5 0-2 1.5-3.4 4.2-3.4 1.5 0 2.9.3 4 .8l-.4 2.5c-1.2-.6-2.5-1-3.6-1-.8 0-1.2.3-1.2.7 0 .4.3.7 1.8 1.1 2.9.8 3.9 1.5 3.9 3.5.1 2.3-1.5 3.6-4.4 3.6" fill="#fffffe"></path><path d="M9.6 33.4c-1.2.2-1.5.6-1.5 1.1 0 .4.2.6.6.6.3 0 .7-.2 1-.4-.1-.1-.1-1.3-.1-1.3zm.2 2.8l-.1-.7c-.5.5-1 .8-1.8.8-.9 0-1.6-.6-1.6-1.6 0-1.4 1-2 3.3-2.2v-.1c0-.5-.3-.7-.9-.7-.6 0-1.3.2-1.9.4l-.2-1.3c.7-.3 1.5-.5 2.4-.4 1.6 0 2.4.5 2.4 2v3.9l-1.6-.1zm4.7.1c-1.2 0-2.1-.5-2.1-1.9v-2.5h-.8v-1.5h.8v-1.8l1.8-.3v2.1h1.3v1.5h-1.3v2.2c0 .5.2.7.7.7.2 0 .3 0 .4-.1l.2 1.5c-.2 0-.5.1-1 .1m7.1-.1v-3.6c0-.4-.2-.7-.6-.7-.3 0-.7.2-1 .5v3.8h-1.8v-8.6l1.8-.3v3.8c.5-.5 1-.8 1.7-.8 1.1 0 1.6.7 1.6 1.8v4.1h-1.7m5-4.4c-.7 0-1.1.6-1.1 1.5s.4 1.6 1.1 1.6c.7 0 1.1-.6 1.1-1.6s-.4-1.6-1.1-1.5zm0 4.5c-1.6 0-2.8-1.1-2.8-3s1.2-3 2.8-3c1.6 0 2.8 1.2 2.8 3 0 1.9-1.2 3-2.8 3zm9.8-.1v-3.6c0-.4-.2-.7-.6-.7-.3 0-.6.2-.9.5v3.8h-1.8v-3.6c0-.4-.2-.7-.6-.7-.3 0-.6.2-.9.5v3.8h-1.8v-5.8h1.6l.1.8c.5-.5 1.1-.9 1.8-.9.8 0 1.2.4 1.4.9.5-.5 1.1-.9 1.8-.9 1.1 0 1.6.7 1.6 1.8v4.1h-1.7m4.9-4.8c-.5 0-.8.4-.9 1.3h1.8c0-.8-.4-1.3-.9-1.3zm2.6 2.3h-3.5c.1.9.6 1.3 1.4 1.3.6 0 1.3-.2 1.9-.6l.2 1.3c-.6.4-1.4.7-2.3.7-1.7 0-3-.9-3-3 0-1.9 1.2-3 2.7-3 1.8 0 2.6 1.3 2.6 3v.3z" fill="#165830"></path></svg>
            </div>
            <div class="close">
                <svg class="close_icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.496031 0.495727C0.712989 0.278769 1.06475 0.278769 1.28171 0.495727L13.5039 12.7179C13.7209 12.9349 13.7209 13.2867 13.5039 13.5036C13.287 13.7206 12.9352 13.7206 12.7183 13.5036L0.496031 1.2814C0.279073 1.06444 0.279073 0.712684 0.496031 0.495727Z" fill="#2A2A2A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.496031 13.5036C0.279073 13.2867 0.279073 12.9349 0.496031 12.7179L12.7183 0.495726C12.9352 0.278768 13.287 0.278768 13.5039 0.495726C13.7209 0.712685 13.7209 1.06444 13.5039 1.2814L1.28171 13.5036C1.06475 13.7206 0.712989 13.7206 0.496031 13.5036Z" fill="#2A2A2A"/>
                </svg>
            </div>
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
        elementManagement.get("html, body").forEach(el => {
            el.style.overflow = new_status ? "hidden" : "auto"
        })
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
    let gallery_container_selector = ".pah156-image-gallery .swiper-container"
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
    elementManagement.get(".pah156-image-gallery .zoom, .pah156-image-gallery .close").forEach(el => {
        el.addEventListener('click', _ => {
            toggle_zoom()
            g.update()
        })
    })
    if(elementManagement.getAll('.swiper-slide').length < 1) {
        update_progress_bar()
    }
    return g
}

export const gallery = {
    get_images,
    init_swiper,
    build_gallery,
    build_image_str,
}

export default gallery