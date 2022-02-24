// Config
import config from "./config.js"
// Core Modules
import log from './norman_modules/core/log.js';
import track from './norman_modules/core/tracking.js';
import poll from './norman_modules/core/pollFunction.js';
import cookie from './norman_modules/core/cookieFunctions.js';
import registerTest from './norman_modules/core/registerTest.js';
import elementManagement from './norman_modules/core/elementManagement.js';
// Util Modules
import debounce from './norman_modules/utils/debounce.js';
import isInViewport from './norman_modules/utils/isInViewport.js';
import onMouseLeave from './norman_modules/utils/onMouseLeave.js';
import watchForChange from './norman_modules/utils/watchForChange.js';
import getHighestZIndex from './norman_modules/utils/getHighestZIndex.js';

/**
 * Initialises Norman & registers tests
 * @param {Object} Variant contains name, css, actions, and conditions 
 * @returns {Object} Test ID, test details and run function to poll for test & variant conditions before running variant actions
 */
export function init(Variant) {
	console.log("Test Registered")
	console.timeLog("Variation 1 Run Time")
	let test = registerTest(Variant.name, {
		css: Variant.css,
		actions: Variant.actions,
		conditions: Variant.conditions,
	})
	let id = config.id
	let run = () => {
		console.log("Test Poll Start")
		console.timeLog("Variation 1 Run Time")
		poll(Variant.conditions, _ => {
			console.log("Variant Poll Complete")
			console.timeLog("Variation 1 Run Time")
			document.body.classList.add(`${id}_loaded`)
			Variant.actions()
		})
	}
	return {
		id,
		test,
		run,
	}
}

export const core = {
	log,
	poll,
	track,
	cookie,
	registerTest,
	elementManagement,
}

export const utils = {
	debounce,
	isInViewport,
	onMouseLeave,
	watchForChange,
	getHighestZIndex,
}

export const norman = {
	init,
	core,
	utils,
	config,
}

export default norman 