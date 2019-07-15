# MXMP.js

[![npm](https://badge.fury.io/js/mxmp.svg)](https://www.npmjs.com/package/mxmp)
[![license](https://img.shields.io/npm/l/mxmp.svg)](https://www.npmjs.com/package/mxmp)

Next generation mobile framework for building native / hybrid apps.

## Links

- [Website](http://haokuai.cn/)
- [Github](https://github.com/nm-cmd/)
- [Issues](https://github.com/nm-cmd/mxmp/issues)
- [中文文档](http://haokuai.cn/#/zh-cn/)

## Documentation
To check out docs and examples, visit [haokuai.cn](http://haokuai.cn/).

## MXMP Explorer
<img src="http://haokuai.cn/_assets/images/nat_screen_view.png" width="720" style="max-width: 720px; margin: -4% 0 0 -9%;">

MXMP Explorer is a mxmp example app, help you explore MXMP modules instantly. [Source Code](https://github.com/nm-cmd/mxmp-explorer)

[![Available on App Store](http://haokuai.cn/_assets/images/btn_app_store.svg)](https://itunes.apple.com/us/app/mxmp-explorer/id1262312650)
&nbsp;&nbsp;
[![Android App on Google Play](http://haokuai.cn/_assets/images/btn_google_play.svg)](https://play.google.com/store/apps/details?id=cn.haokuai.mxmp)

Also, you can download it directly by scan the QRcode below.

<img src="http://haokuai.cn/_assets/images/mxmp-explorer_qrcode-s.png" alt="Download Mxmp Explorer" width="120" style="display: block;">

## Installation

```bash
npm install mxmp --save
```

Add mxmp moudles you need from weex plugin market

```bash
weexpack plugin add [mxmp moudle]
```

## Usage

Use MXMP in vue/weex file (`.vue`/`.we`)

```html
<script>
import mx from 'mxmp'

// Make a phone call
mx.call('415-736-0000')

// Take a photo
mx.camera.captureImage((err, ret) => {
    console.log('Path: ', ret.path)
})

// Get device info
mx.device.info((err, ret) => {
    console.log('Info: ', ret)
})

</script>
```

## Modules

- camera
- communication
- geolocation
- media
    - image
    - audio
    - video
- modal
- recorder
- steam
- transfer
- sensor
    - accelerometer
    - compass
- device
    - info
    - network
    - vibration
    - screen
    - volume
    - battery
- third-party
    - alipay
    - wechat

## Supported Platforms

- Android
- iOS

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2017-present, nm-cmd@haokuai.cn
