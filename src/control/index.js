import {config, init, log, track, elementManagement} from "../norman/index.js"

function variant_actions() {
    log("Control Loaded")
    track(Variant.name, "Loaded", true)
    
    elementManagement.get(`[onclick="ui.scrollTo('#pr-review-snapshot');"]`, true).forEach(el => el.addEventListener("click", _ => {
        track("Control", "Reviews Star Engagement", false)
    }))

    elementManagement.get(".scroller__wrapper").forEach(el => {
        el.addEventListener("touchend", _ => {
            track("Control", `Gallery Image Engagement`, false)
        })
    })
}

const Variant = {
    name: "Control",
    css: "",
    conditions: () => {
        let conditions = []
        // Check for product title
        conditions.push(elementManagement.exists(`.pdp-heading-ratings__title`))
        // Check for product star rating
        conditions.push(elementManagement.exists(`[onclick="ui.scrollTo('#pr-review-snapshot');"]`))
        // Check for product price
        conditions.push(elementManagement.exists(`[data-module="pdp_price"]`))
        log({message: `Polling: Conditions`, conditions})
        let result = conditions.every(a => a)
        log({message: `Polling: Result`, result})
        return result
    },
    actions: variant_actions,
}

let nVariant = init(Variant)
nVariant.run()