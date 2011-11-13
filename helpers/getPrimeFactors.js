function getPrimeFactors(n, primesUnderN) {
    var primes = primesUnderN || erato.get(n), remained = n, res = [];

    for (var i = 0; i < primes.length; i++) {
        var p = primes[i];

        if (remained == p) {
            res.push(p);
            break;
        }

        if (remained % p == 0) {
            res.push(p);
            remained = remained / p;
            i = -1;
        }
    }

    return res;
}