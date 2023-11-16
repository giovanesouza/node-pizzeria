module.exports = (req, res, next) => {
    // limit: quantidade de informações por requisição - Ex.: 10
    // offset: de onde está partindo, para onde quer ir - Ex.: 0 - 10 | 11 - 20...

    let { limit, offset } = req.query;

    limit = Number(limit);
    offset = Number(offset);

    // Operador condicional ternário: Caso não seja informado um valor (na requisição), os valores abaixo são setados como default
    !limit ? limit = 10 : null;
    !offset ? offset = 0 : null;

    req.query.limit = limit;
    req.query.offset = offset;

    return next();
};