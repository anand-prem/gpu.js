'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FunctionBuilder = require('../function-builder');
var CPUFunctionNode = require('./function-node');

/**
 * @desc Builds functions to execute on CPU from JavaScript function Strings
 */

var CPUFunctionBuilder = function (_FunctionBuilder) {
	_inherits(CPUFunctionBuilder, _FunctionBuilder);

	function CPUFunctionBuilder() {
		_classCallCheck(this, CPUFunctionBuilder);

		var _this = _possibleConstructorReturn(this, (CPUFunctionBuilder.__proto__ || Object.getPrototypeOf(CPUFunctionBuilder)).call(this));

		_this.Node = CPUFunctionNode;
		return _this;
	}

	return CPUFunctionBuilder;
}(FunctionBuilder);

module.exports = CPUFunctionBuilder;