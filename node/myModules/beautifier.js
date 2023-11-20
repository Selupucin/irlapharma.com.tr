exports.lower = (xData) => {
    var trMap = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o',
        ' _,.;:/\'\^\\`&%+#£>!<|=}{][*)(': '-'
    };
    for (var key in trMap) {
        xData = xData.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
    }
    return xData.replace(/[^-a-zA-Z0-9\s]+/ig, '')
        .replace(/\s/gi, "-")
        .replace(/[-]+/gi, "-")
        .toLowerCase();
}

exports.lower2 = (xData) => {
    var trMap = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o',
        ' _,;:/\'\^\\`&%+#£>!<|=}{][*)(': '-'
    };
    for (var key in trMap) {
        xData = xData.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
    }
    console.log()
    return xData.replace(/[^-a-zA-Z0-9\s]+/ig, '.')
        .replace(/\s/gi, "-")
        .replace(/[-]+/gi, "-")
        .toLowerCase();
}

exports.upper = (xData) => {
    var trMap = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o',
        ' _,.;:/\'\^\\`&%+#£>!<|=}{][*)(': '-'
    };
    for (var key in trMap) {
        xData = xData.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
    }
    return xData.replace(/[^-a-zA-Z0-9\s]+/ig, '')
        .replace(/\s/gi, "-")
        .replace(/[-]+/gi, "-")
        .toUpperCase();
}