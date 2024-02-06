import { resolve } from "path";
import { ResolvedConfigFileName } from "typescript";

const arr: Array<string> = [];

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 2000)
})

promise.then(data => {
    data.toFixed();
})