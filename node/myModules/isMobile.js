module.exports = (req) => {
    var isMobile = {
        Android: function () {
            if (!!req.headers['user-agent'].match(/Android/i)) {
                return true
            } else {
                return false
            }

        },
        BlackBerry: function () {
            if (!!req.headers['user-agent'].match(/BlackBerry/i)) {
                return true
            } else {
                return false
            }

        },
        iOS: function () {
            if (!!req.headers['user-agent'].match(/iPhone|iPad|iPod/i)) {
                return true
            } else {
                return false
            }

        },
        Opera: function () {
            if (!!req.headers['user-agent'].match(/Opera Mini/i)) {
                return true
            } else {
                return false
            }

        },
        Windows: function () {
            if (!!req.headers['user-agent'].match(/IEMobile/i)) {
                return true
            } else {
                return false
            }

        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }
    return isMobile.any()
}