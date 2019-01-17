'use strict';

const utils = require('../../core/utils');
const GLRunner = require('../gl-runner');
const WebGLKernel = require('./kernel');
const WebGLFunctionBuilder = require('./function-builder');
let isCompatible = null;

class WebGLRunner extends GLRunner {
	static get isCompatible() {
		if (isCompatible !== null) {
			return isCompatible;
		}
		isCompatible = utils.isWebGlSupported();
		return isCompatible;
	}

	static isRelatedContext(context) {
		// from global
		if (typeof WebGLRenderingContext !== 'undefined') {
			return context instanceof WebGLRenderingContext;
		}
		return false;
	}

	/**
	 * @desc Instantiates a Runner instance for the kernel.
	 * @param {Object} settings - Settings to instantiate properties in Runner, with given values
	 *
	 */
	constructor(settings) {
		super(new WebGLFunctionBuilder(), settings);
		this.Kernel = WebGLKernel;
		this.kernel = null;
	}

	/**
	 * @desc Return the current mode in which gpu.js is executing.
	 * @returns {String} The current mode; "gpu".
	 */
	getMode() {
		return 'gpu';
	}
}

module.exports = WebGLRunner;