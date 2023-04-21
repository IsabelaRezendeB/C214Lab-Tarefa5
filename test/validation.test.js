const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Little Women",
        ano: 2019,
        genero: "Romace"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        ano: 2020,
        genero: "Drama"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro ano', () => {
    const result = Validation.create({
        nome: "Joker",
        genero: "Drama"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro genero', () => {
    const result = Validation.create({
        nome: "Her",
        ano: 2014
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});