// 1.빛 밝기가 100 이하일때, 음악 나오면서 네오픽셀 켜지기 (100)
// 
// 2. 토양수분센서 p0의 값이 260 이상일때, 수중센서 p1 10초간 작동하기
// 
// 3. 현재 빛,온도,밝기, 토양수분센서의 값이 OLED에 출력되게 하기
// 
// + 3초간격으로 출력
// 
// 예시 ) T : _____
// 
// L : _____
// 
// W : _____
// 
// led 12864
let strip = neopixel.create(DigitalPin.P5, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
OLED12864_I2C.init(60)
basic.forever(function () {
    if (input.lightLevel() <= 100) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        music.play(music.stringPlayable("B A G A G F A C5 ", 360), music.PlaybackMode.UntilDone)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (pins.analogReadPin(AnalogReadWritePin.P0) <= 260) {
        // 시작하자마자 P1을 켜고, 10초 뒤에 끕니다.
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(10000)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
basic.forever(function () {
    OLED12864_I2C.showString(
    0,
    0,
    "T :",
    1
    )
    OLED12864_I2C.showNumber(
    3,
    0,
    input.temperature(),
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "L : ",
    1
    )
    OLED12864_I2C.showNumber(
    3,
    1,
    input.lightLevel(),
    1
    )
    OLED12864_I2C.showString(
    0,
    2,
    "W : ",
    1
    )
    OLED12864_I2C.showNumber(
    3,
    2,
    pins.analogReadPin(AnalogPin.P0),
    1
    )
    basic.pause(3000)
})
