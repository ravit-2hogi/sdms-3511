let strip = neopixel.create(DigitalPin.P5, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
OLED12864_I2C.init(60)
basic.forever(function () {
    if (input.lightLevel() < 100) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})

/* 1.빛 밝기가 100 이하일때, 음악 나오면서 네오픽셀 켜지기 (100)
2. 토양수분센서 p0의 값이 260 이상일때, 수중센서 p1 10초간 작동하기
3. 현재 빛,온도,밝기, 토양수분센서의 값이 OLED에 출력되게 하기
+ 3초간격으로 출력
예시 ) T : _____
      L : _____
      W : _____

*/