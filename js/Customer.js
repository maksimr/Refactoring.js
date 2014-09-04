/**
 * Класс представляющий клиента магазина
 * @param {string} name
 * @constructor
 */
var Customer = function (name) {
    this._name = name;

    /**
     * @type {Rental[]}
     * @private
     */
    this._rentals = [];
};

/**
 * @param {Rental} arg
 */
Customer.prototype.addRental = function (arg) {
    this._rentals.push(arg);
};

/**
 * @returns {string|*}
 */
Customer.prototype.getName = function () {
    return this._name;
};

/**
 * Метод, создающий отчет
 */
Customer.prototype.statement = function () {
    var totalAmount = 0;
    var frequentRenterPoints = 0;
    var rentals = ths._rentals;
    var result = 'Rental Record for ' + this.getName() + '\n';

    while (rentals.length) {
        var thisAmount = 0;
        var each = rentals.shift();

        // Определяет сумму для каждой строки
        switch (each.getMovie().getPriceCode()) {
            case Movie.MovieTypes.REGULAR:
                thisAmount += 2;
                if (each.getDaysRented() > 2) {
                    thisAmount += (each.getDaysRented() - 2) * 1.5;
                }
                break;
            case Movie.MovieTypes.NEW_RELEASE:
                thisAmount += each.getDaysRented() * 3;
                break;
            case Movie.MovieTypes.CHILDRENS:
                thisAmount += 1.5;
                if (each.getDaysRented() > 3) {
                    thisAmount += (each.getDaysRented() - 3) * 1.5;
                    break;
                }
        }

        // Добавить балы для активного арендатора
        frequentRenterPoints += 1;

        // Бонус за аренду новинки на два дня
        if (each.getMovie().getPriceCode() === Movie.MovieTypes.NEW_RELEASE) {
            frequentRenterPoints += 1;
        }

        // Показать результат для этой аренды
        result += '\t' + each.getMovie().getTitle() + '\t' +
            String(thisAmount) + '\n';

        totalAmount += thisAmount;
    }

    // Добавить нижний колонтитул
    result += 'Сумма задолженности составляет' + String(totalAmount) + '\n';
    result += 'Вы заработали ' + String(frequentRenterPoints) + 'очков за активность';

    return result;
};