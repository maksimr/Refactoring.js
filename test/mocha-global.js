(function (global) {

    /**
     * Clear test context after each test.
     * It improve determinism in tests and
     * reduce side effect between tests.
     * @param {Object} context
     */
    var clearContext = function (context) {
        for (var propertyName in context) {
            if (context.hasOwnProperty(propertyName)) {
                delete context[propertyName];
            }
        }
    };

    /**
     * global beforEach callback
     * called before each test
     */
    global.beforeEach(function () {

        /**
         * Create sandbox which
         * will be automatically restore stubbed
         * functions and properties after each test
         */
        this.sinon = global.sinon.sandbox.create();
    });

    /**
     * global afterEach callback called
     * after each test
     */
    global.afterEach(function () {
        this.sinon.restore();
        clearContext(this);
    });
}(window));
