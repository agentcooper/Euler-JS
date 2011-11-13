Array.prototype.init = function(value) {
    var a = this.valueOf();
    for (var i = 0; i < a.length; i++) {
        a[i] = value;
    }
}

function Segment(a, b) {
    var arr = [];
    for (var i = a; i <= b; i++) arr.push(i);
    return arr;
}

Array.prototype.subtract = function(arrayB) {
    var arrayA = this.valueOf(),
        res = [];

    for (var i = 0; i < arrayA.length; i++) {
        var found = false;
        for (var j = 0; j < arrayB.length; j++) {
            if (arrayA[i] == arrayB[j]) found = true;
        }
        if (!found) res.push(arrayA[i]);
    }

    return res;
}

// [2, 3, 5].unite([3, 5, 6]) => [2, 3, 5, 3, 5, 6]
Array.prototype.unite = function(arrayB) {
    var arrayA = this.valueOf(), res = [];

    for (var i = 0; i < arrayA.length; i++) {
        if (arrayA[i] != undefined) res.push(arrayA[i]);
    }

    for (var i = 0; i < arrayB.length; i++) {
        if (arrayB[i] != undefined) res.push(arrayB[i]);
    }

    return res;
}

// [2, 3, 5].merge([3, 5, 6]) => [2, 3, 5, 6]
Array.prototype.merge = function(arrayB) {
    var arrayA = this.valueOf(), res = [], bCopy;

    res = arrayA.unite([]);
    bCopy = arrayB.unite([]);

    for (var i = 0; i < res.length; i++) {
        for (var j = 0; j < arrayB.length; j++) {
            if (res[i] == bCopy[j]) {
                delete bCopy[j];
                break;
            }
        }
    }

    return res.unite(bCopy);
}

// TODO: caching
var erato = {
    known: [],

    get: function(n) {
        var a = new Array(n), primes = [];
        a.init(true);

        for (var i = 2; i * i <= n; i++) {
            if (a[i] == true) {
                for (var j = i * i; j <= n; j += i) {
                    a[j] = false;
                }
            }
        }

        for (var i = 2; i < a.length; i++) if (a[i]) primes.push(i);
        return primes;
    }
}

function getPrimeFactors(n) {
    var primes = erato.get(n), remained = n, res = [];

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