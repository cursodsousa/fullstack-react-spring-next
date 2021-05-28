export const converterEmBigDecimal = (value) : number => {
    if(!value){
        return 0;
    }
    return value.replace(".", "").replace(",", ".")
}

export const formatReal = ( valor ) => {
    const v = ((valor.replace(/\D/g, '') / 100).toFixed(2) + '').split('.');

    const m = v[0].split('').reverse().join('').match(/.{1,3}/g);

    for (let i = 0; i < m.length; i++)
        m[i] = m[i].split('').reverse().join('') + '.';

    const r = m.reverse().join('');

    return r.substring(0, r.lastIndexOf('.')) + ',' + v[1];
}