/* global Basket */
'use strict';

describe('potterSpec', function () {
    var basket = new Basket();
    describe('When Basket is empty', function () {
        it('Should return 0', function () {
            expect(basket.calculate()).toBe(0);
        });
    });
    describe('When Basket is empty', function () {
        it('Should return 0', function () {
            expect(basket.calculate([])).toBe(0);
        });
    });
    describe('When Basket contains just one book', function () {
        it('Should calculate the full price for the book', function () {
            expect(basket.calculate([1])).toBe(8);
        });
    });
    describe('When Basket contains the same book twice', function () {
        it('Should calculate with the full price for both books', function () {
            expect(basket.calculate([2])).toBe(16);
        });
    });
    describe('When Basket contains the same book three times', function () {
        it('Should calculate with the full price for three books', function () {
            expect(basket.calculate([3])).toBe(24);
        });
    });
    describe('When Basket contains the same book four times', function () {
        it('Should calculate with the full price for four books', function () {
            expect(basket.calculate([4])).toBe(32);
        });
    });
    describe('When Basket contains the same book five times', function () {
        it('Should calculate with the full price for five books', function () {
            expect(basket.calculate([5])).toBe(40);
        });
    });
    describe('When Basket contains two different books', function () {
        it('Should give 5 percent discount for each book', function () {
            expect(basket.calculate([1, 1])).toBe(15.2);
        });
    });
    describe('When Basket contains three different books', function () {
        it('Should give 5 percent discount for each book', function () {
            expect(basket.calculate([1, 1, 1])).toBe(21.6);
        });
    });
    describe('When Basket contains four different books', function () {
        it('Should give 5 percent discount for each book', function () {
            expect(basket.calculate([1, 1, 1, 1])).toBe(25.6);
        });
    });
    describe('When Basket contains five different books', function () {
        it('Should give 5 percent discount for each book', function () {
            expect(basket.calculate([1, 1, 1, 1, 1])).toBe(30);
        });
    });

    describe('When Basket contains more books', function () {
        it('Should give the user the best price', function () {
            expect(basket.calculate([2, 2, 2, 1, 1])).toBe(51.2);
        });
    });
});
