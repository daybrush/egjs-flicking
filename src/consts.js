/**
 * Copyright (c) 2015 NAVER Corp.
 * egjs projects are licensed under the MIT license
 */
import {window as global, document as doc} from "./browser";

// define custom events name
const EVENTS = {
	beforeFlickStart: "beforeFlickStart",
	beforeRestore: "beforeRestore",
	flick: "flick",
	flickEnd: "flickEnd",
	restore: "restore"
};

// check for the transform property
const TRANSFORM = {
	name: "transform"
};

TRANSFORM.support = (() => {
	if (!doc.documentElement) {
		return false;
	}
	const style = doc.documentElement.style;

	return TRANSFORM.name in style || (TRANSFORM.name = "webkitTransform") in style;
})();

// check for will-change support
const SUPPORT_WILLCHANGE = global.CSS && global.CSS.supports &&
	global.CSS.supports("will-change", "transform");

// check for Android 2.x
const IS_ANDROID2 = /Android 2\./.test(global.navigator.userAgent);

// data-height attribute's name for adaptiveHeight option
const DATA_HEIGHT = "data-height";

export {
	EVENTS,
	TRANSFORM,
	SUPPORT_WILLCHANGE,
	IS_ANDROID2,
	DATA_HEIGHT
};
