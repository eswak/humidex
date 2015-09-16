'use strict';

/*
 * @param {t} : The temperature in °C
 * @param {h} : The air humidity in % (0 <= h <= 1)
 * @returns : the humidex in °C
 */
module.exports = function humidex (t, h) {
  var dewPoint = Math.pow(h, 1 / 8) * (112 + 0.9 * t) + 0.1 * t - 112;
  var expIndex = 5417.753 * ((1 / 273.16) - (1 / (dewPoint + 273.16)));
  return t + 0.5555 * (6.11 * Math.exp(expIndex) - 10);
};
