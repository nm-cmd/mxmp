'use strict';

var mx = {};

if (weex && weex.requireModule || typeof __weex_define__ === 'function') {
	var camera = require('./camera');
	var communication = require('./communication');
	var geolocation = require('./geolocation');
	var media = require('./media');
	var modal = require('./modal');
	var recorder = require('./recorder');
	var network = require('./network');
	var sensor = require('./sensor');
	var device = require('./device');
	var Navigator = require('./navigator');
	var alipay = require('./third-party/alipay');
	var wechat = require('./third-party/wechat');

	// camera
	if (camera) {
		mx.camera = camera;
	}

	// communication
	if (communication) {
		mx.call = communication.call;
		mx.sms = communication.sms;
		mx.mail = communication.mail;
	}

	// geolocation
	if (geolocation) {
		mx.geolocation = geolocation;
	}

	// media
	if (media) {
		mx.audio = media.audio;
		mx.image = media.image;
		mx.video = media.video;
	}

	// recorder
	if (recorder) {
		mx.recorder = recorder;
	}

	// modal
	if (modal) {
		mx.alert = modal.alert;
		mx.confirm = modal.confirm;
		mx.prompt = modal.prompt;
		mx.toast = modal.toast;
		mx.actionSheet = modal.actionSheet;
	}

	// network
	if (network) {
		mx.fetch = network.stream.fetch;
		mx.download = network.transfer.download;
		mx.upload = network.transfer.upload;
		mx.websocket = network.websocket;
	}

	// sensor
	if (sensor) {
		mx.accelerometer = sensor.accelerometer;
		mx.compass = sensor.compass;
	}

	// device
	if (device) {
		mx.device = device.info;
		mx.battery = device.battery;
		mx.network = device.network;
		mx.screen = device.screen;
		mx.vibrate = device.vibration.vibrate;
		mx.volume = device.volume;
	}

	// navigator
	if (Navigator) {
		mx.navigator = Navigator;
	}

	// alipay
	if (alipay) {
		mx.alipay = alipay;
	}

	// wechat
	if (wechat) {
		mx.wechat = wechat;
	}
}

module.exports = mx;