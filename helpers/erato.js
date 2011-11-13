Array.prototype.init = function(value) {
    var self = this.valueOf();
    for (var i = 0; i < self.length; i++) {
        self[i] = value;
    }
	return self;
}

// to-do : finish memoization
var erato = {
    known: [],
	sieve: [],

    get: function(n) {
		if (this.sieve.length >= n) {
			for (var i = 0; i < this.known.length; i++) {
				if (this.known[i] >= n) break;
			}
			return this.known.slice(0, i);
		}
		
		var sieve = this.sieve.concat(
			(new Array(n - this.sieve.length)).init(true)
		), primes = [];

        for (var i = 2; i * i < n; i++) {
            if (sieve[i] == true) {
                for (var j = i * i; j < n; j += i) {
                    sieve[j] = false;
                }
            }
        }

		var k = (this.sieve.length == 0 ? 2 : this.sieve.length);
        for (var i = k; i < sieve.length; i++) if (sieve[i]) primes.push(i);
		
		this.sieve = sieve.slice();

		return this.known = this.known.concat(primes);
    }
}

function isPrime(n) {
	if (n == 1) return false;
	else
	if (n < 4) return true;
	else
	if (n % 2 == 0) return false;
	else
	if (n < 9) return true;
	else
	if (n % 3 == 0) return false;
	else {
		var r = Math.floor(Math.sqrt(n)),
			f = 5;
			
		while (f <= r) {
			if (n % f == 0) return false;
			if (n % (f + 2) == 0) return false;
			f += 6;
		}
		
		return true;
	}
}