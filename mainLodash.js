"use strict";
// Q13
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var chunkedArray = (0, lodash_1.chunk)(numbers, 2);
console.log(chunkedArray); // Output: [ [1, 2], [3, 4], [5, 6], [7, 8] ]
