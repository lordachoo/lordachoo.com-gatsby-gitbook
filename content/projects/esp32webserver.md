---
title: "ESP32 Web Server"
metaTitle: "ESP32 Based Web Server"
metaDescription: "ESP32 Based Web Server"
---

# ESP32 Based Web Server

Web server serving data (PROGMEM in Memory) from ESP32 based IoT hardware.

Server : [http://esp32webserver.lordachoo.com/](http://esp32webserver.lordachoo.com/)

Arduino (C/C++) Code: [GitHub Repo](https://github.com/lordachoo/esp32webserver)

## Hardware

![Image](https://firebasestorage.googleapis.com/v0/b/lordachoo-c2966.appspot.com/o/images%2Fesp32webserver.png?alt=media&token=baad2430-ace6-4361-8a3f-d31de6df2683)

```
- ESP32 IoT (powered via 3.3v or USB stepped down to 3.3v via onboard VRM)
  - 2x 240MHZ Xtensa 32-Bit LX6 Cores
  - 520KB SRAM, 448KB ROM, 16KB RTC SRAM
  - 802.11 b/g/n Wifi , BT v4
  - 34 GPIO Channels

  - GPIO Additions
    - 0.96" OLED Screen, Showing acquired IP address, page hit counter
    - MicroSD card slot for serving static data coming soon
  ```