function packaging(path) {
    return path.split('.').reduce(function (packing, part) {
        return packing[part] = packing[part] || {};
    }, window);
}

