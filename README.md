Humidex
============
This package contains a single short function that computes the humidex index for a given air temperature & hygrometry.

## What is it ?
_From [Wikipedia](https://en.wikipedia.org/wiki/Humidex):_
> The humidex (short for humidity index) is an index number used by Canadian meteorologists to describe how hot the weather feels to the average person, by combining the effect of heat and humidity.
> The humidex is a dimensionless quantity based on the dew point, but it is equivalent to dry temperature in degrees Celsius.

_Image from the University of Manitoba (Canada) :_

![](http://www.umleagues.ca/media/leagues/3551/graphics/Image/UMSL%20-%20Humidex%20Table.bmp)

## How to use ?
```js
var humidex = require('humidex');

// get the humidex for 20°C with 50% hygrometry
console.log(humidex(20, 0.5)); // 20.92671275216489
```
