import {log} from "../norman/index.js"

export function build_crumb(crumb) {
    log(`Building breadcrumb`)
    return `<a href="${crumb.link}" class="crumb">${crumb.text}</a>`
}

export function build_breadcrumbs(crumbs) {
    log(`Building product breadcrumbs`)
    let htmlStr = ""
    crumbs.forEach(crumb => htmlStr += build_crumb(crumb))
    return `<nav class="pah156-breadcrumbs">${htmlStr}</nav>`
}

export const breadcrumbs = {
    build_crumb,
    build_breadcrumbs,
}

export default breadcrumbs