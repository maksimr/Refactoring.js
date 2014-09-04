/**
 * Класс представляющий данные о прокате фильма
 * @param {Movie} movie
 * @param {number} daysRented
 * @constructor
 */
var Rental = function (movie, daysRented) {
    this._movie = movie;
    this._daysRented = daysRented;
};

/**
 * @returns {number|*}
 */
Rental.prototype.getDaysRented = function () {
    return this._daysRented;
};

/**
 * @returns {Movie|*}
 */
Rental.prototype.getMovie = function () {
    return this._movie;
};