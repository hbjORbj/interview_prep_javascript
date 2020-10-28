class Comparator {
    constructor() {}
    compare(a, b) {
        if (typeof a == "number" && typeof b == "number") return this.a === this.b;
        if (typeof a == "string" && typeof b == "string") return this.a === this.b;
        if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length !== b.length) return false;
            for (let i = 0; i < a.length; i++) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        }
    }
}