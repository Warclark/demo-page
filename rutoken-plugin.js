
var rutoken = function(n) {
    var t, e = [], r = "application/x-rutoken-pki", i = window["C3B7563B-BF85-45B7-88FC-7CFF1BD3C2DB"];
    function o(t) {
        return t && t.call && t.apply
    }
    function l(t, n) {
        return o(t[n]) ? function() {
            return t[n].apply(t, arguments)
        }
        : t[n]
    }
    function s(t) {
        return function() {
            return t
        }
    }
    function u() {
        n.ready = Promise.resolve(!0),
        n.isExtensionInstalled = s(Promise.resolve(!1)),
        n.isPluginInstalled = s(Promise.resolve(!0)),
        n.loadPlugin = a,
        window.rutokenLoaded = c
    }
    function a() {
        var t = document.createElement("object");
        return t.style.setProperty("visibility", "hidden", "important"),
        t.style.setProperty("width", "0px", "important"),
        t.style.setProperty("height", "0px", "important"),
        t.style.setProperty("margin", "0px", "important"),
        t.style.setProperty("padding", "0px", "important"),
        t.style.setProperty("border-style", "none", "important"),
        t.style.setProperty("border-width", "0px", "important"),
        t.style.setProperty("max-width", "0px", "important"),
        t.style.setProperty("max-height", "0px", "important"),
        t.innerHTML = "<param name='onload' value='rutokenLoaded'/>",
        t.setAttribute("type", r),
        document.body.appendChild(t),
        new Promise(function(t, n) {
            e.push(t)
        }
        )
    }
    function loadPlugin() {
        var t = document.createElement("object");
        return t.style.setProperty("visibility", "hidden", "important"),
        t.style.setProperty("width", "0px", "important"),
        t.style.setProperty("height", "0px", "important"),
        t.style.setProperty("margin", "0px", "important"),
        t.style.setProperty("padding", "0px", "important"),
        t.style.setProperty("border-style", "none", "important"),
        t.style.setProperty("border-width", "0px", "important"),
        t.style.setProperty("max-width", "0px", "important"),
        t.style.setProperty("max-height", "0px", "important"),
        t.innerHTML = "<param name='onload' value='rutokenLoaded'/>",
        t.setAttribute("type", r),
        document.body.appendChild(t),
        new Promise(function(t, n) {
            e.push(t)
        }
        )
    }


    function p() {
        return i.loadPlugin().then(function e(r) {
            var i = {};
            var t = [];
            for (var n in r)
                !function(n) {
                    o(r[n].then) ? t.push(r[n].then(function(t) {
                        return e(t).then(function(t) {
                            o(t) ? i[n] = l(r, n) : i[n] = t
                        })
                    })) : i[n] = r[n]
                }(n);
            return 0 == t.length ? new Promise(function(t) {
                t(r)
            }
            ) : Promise.all(t).then(function() {
                return i
            })
        }).then(function(t) {
            return t.wrapWithOldInterface = f,
            t
        })
    }
    function c(t, n) {
        !function(t) {
            var n, e = {
                originalObject: t,
                wrapWithOldInterface: d
            };
            for (n in t)
                o(t[n]) ? e[n] = function(r, i) {
                    return function() {
                        var e = Array.prototype.slice.call(arguments);
                        return new Promise(function(t, n) {
                            e.push(t, n),
                            i.apply(r, e)
                        }
                        )
                    }
                }(t, t[n]) : e[n] = t[n];
            return new Promise(function(t) {
                t(e)
            }
            )
        }(t).then(function(t) {
            if (0 == e.length)
                throw "Internal error";
            e.shift()(t)
        })
    }
    function f() {
        var t, n = {};
        for (t in this)
            o(this[t]) ? n[t] = function(r, i) {
                return function() {
                    var n = arguments[arguments.length - 2]
                      , e = arguments[arguments.length - 1]
                      , t = Array.prototype.slice.call(arguments, 0, -2);
                    return i.apply(r, t).then(function(t) {
                        n(t)
                    }, function(t) {
                        e(t.message)
                    })
                }
            }(this, this[t]) : n[t] = this[t];
        return new Promise(function(t) {
            t(n)
        }
        )
    }
    function d() {
        var t, n = {
            originalObject: this.originalObject
        };
        for (t in this.originalObject)
            n[t] = l(this.originalObject, t);
        return new Promise(function(t) {
            t(n)
        }
        )
    }
    if (i)
        t = i.initialize().then(function() {
            return i.isPluginInstalled()
        }).then(function(t) {
            return n.isExtensionInstalled = s(Promise.resolve(!0)),
            n.isPluginInstalled = l(i, "isPluginInstalled"),
            t && (r = "application/x-rutoken-plugin",
            n.loadPlugin = p),
            !0
        }),
        n.ready = t;
    else if (navigator.mimeTypes && navigator.mimeTypes[r])
        u();
    else
        try {
            new ActiveXObject("Aktiv.CryptoPlugin");
            u()
        } catch (t) {
            n.ready = Promise.resolve(!0),
            n.isExtensionInstalled = s(Promise.resolve(!1)),
            n.isPluginInstalled = s(Promise.resolve(!1))
        }
    return n
}(rutoken || {});
"undefined" != typeof module && (module.exports = rutoken);
