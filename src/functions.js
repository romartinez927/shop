export function filterByLowerPrice(data) {
      // SORT BY LOW TO HIGH
      console.log("BAI")
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
           console.log("holi")
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