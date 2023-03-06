export function filterByLowerPrice(data) {
      // SORT BY LOW TO HIGH
    if (data) {
        data.sort(function (a, b) {
            if (a.precio > b.precio) {
                return 1;
            }
            if (a.precio < b.precio) {
                return -1;
            }
            // a must be equal to b
            return 0;
            });
    }
}

export function filterByHigherPrice(data) {
    // SORT BY HIGH TO LOW
    if (data) {
        data.sort(function (a, b) {
            if (a.precio < b.precio) {
                return 1;
            }
            if (a.precio > b.precio) {
                return -1;
            }
            // a must be equal to b
            return 0;
            });
    }
}

export function sortByAZ(data) {
    if (data) {
        data.sort(function (a, b) {
            if (a.nombre > b.nombre) {
            return 1;
            }
            if (a.nombre < b.nombre) {
            return -1;
            }
            // a must be equal to b
            return 0;
        });
    }
}

export function sortByZA(data) {
    if (data) {
        data.sort(function (a, b) {
            if (a.nombre < b.nombre) {
                return 1;
            }
            if (a.nombre > b.nombre) {
                return -1;
            }
            // a must be equal to b
            return 0;
            });
    }
}
