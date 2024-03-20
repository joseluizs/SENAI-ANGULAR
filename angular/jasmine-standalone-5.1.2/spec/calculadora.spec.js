describe("Teste Calculadora", function () {
    it("Somas válidas", function () {
        expect(soma(1, 2)).toBe(3);
        expect(soma(9, 9)).toBe(18);
    });
    it("Somas Inválidas", function () {
        expect(soma(1, 2)).not.toBe(4);
        expect(soma(9, 9)).not.toBe(1);
    });
    it("Subtração válidas", function () {
        expect(subtracao(2, 2)).toBe(0);
        expect(subtracao(9, 9)).toBe(0);
    });
    it("Multiplicação válidas", function () {
        expect(multiplicacao(1, 2)).toBe(2);
        expect(multiplicacao(9, 9)).toBe(81);
    });
    it("Divisão válidas", function () {
        expect(divisao(4, 2)).toBe(2);
        expect(divisao(9, 9)).toBe(1);
    });
});