import log from "./norman_modules/core/log.js"

export const config = {
    "id": "pah000",
    "tracking": {
        "google_analytics": {
            "dimension": false
        }
    },
    "conditions": _ => {
        let conditions = []
        conditions.push(true)
        log({message: `Polling: Conditions`, conditions})
        let result = conditions.every(a => a)
        log({message: `Polling: Result`, result})
        return result
    }
}

export default config