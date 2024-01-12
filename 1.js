# 1040
/*!
 * @dec/webui: dec/login generated at 2022-10-25 10:44:36
 *
 */
!function() {
    var e = {
        54778: function() {},
        33300: function() {},
        55754: function() {},
        74919: function() {},
        1713: function() {},
        81513: function() {},
        40418: function() {},
        33665: function() {},
        98261: function() {},
        46330: function() {},
        39812: function() {},
        54181: function() {},
        65706: function() {},
        99318: function() {},
        65353: function() {},
        27835: function() {},
        14218: function() {},
        57574: function() {},
        35234: function() {},
        56827: function() {},
        92092: function() {},
        41157: function() {},
        74687: function() {},
        48031: function(e, t, i) {
            "use strict";
            i.r(t)
        },
        46272: function() {},
        75918: function() {},
        91037: function() {},
        13425: function() {},
        68553: function() {},
        11219: function() {},
        24613: function() {},
        77818: function() {},
        2731: function(e, t, i) {
            "use strict";
            i.r(t)
        },
        52436: function() {},
        50653: function() {},
        96455: function() {},
        4591: function() {},
        80298: function() {},
        54629: function() {},
        20533: function() {},
        5100: function() {},
        62342: function() {},
        66259: function() {},
        25560: function() {},
        31784: function() {},
        63719: function() {},
        21612: function() {},
        93838: function() {},
        12949: function() {},
        48550: function() {},
        75746: function() {},
        79963: function() {},
        75430: function() {},
        46735: function() {},
        82491: function() {},
        39645: function() {},
        17209: function() {},
        97747: function() {},
        29395: function() {},
        68016: function(e, t, i) {
            e.exports = i(6585)
        },
        6024: function(e, t, i) {
            "use strict";
            var n = i(85246)
              , o = i(61126)
              , r = i(74737)
              , s = i(62719)
              , a = i(91558)
              , c = i(60001)
              , l = i(33975)
              , u = i(6662)
              , d = i(85100)
              , h = i(68573);
            e.exports = function(e) {
                return new Promise((function(t, i) {
                    var p, f = e.data, g = e.headers, m = e.responseType;
                    function b() {
                        e.cancelToken && e.cancelToken.unsubscribe(p),
                        e.signal && e.signal.removeEventListener("abort", p)
                    }
                    n.isFormData(f) && delete g["Content-Type"];
                    var I = new XMLHttpRequest;
                    if (e.auth) {
                        var E = e.auth.username || ""
                          , y = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                        g.Authorization = "Basic " + btoa(E + ":" + y)
                    }
                    var v = a(e.baseURL, e.url);
                    function _() {
                        if (I) {
                            var n = "getAllResponseHeaders"in I ? c(I.getAllResponseHeaders()) : null
                              , r = {
                                data: m && "text" !== m && "json" !== m ? I.response : I.responseText,
                                status: I.status,
                                statusText: I.statusText,
                                headers: n,
                                config: e,
                                request: I
                            };
                            o((function(e) {
                                t(e),
                                b()
                            }
                            ), (function(e) {
                                i(e),
                                b()
                            }
                            ), r),
                            I = null
                        }
                    }
                    if (I.open(e.method.toUpperCase(), s(v, e.params, e.paramsSerializer), !0),
                    I.timeout = e.timeout,
                    "onloadend"in I ? I.onloadend = _ : I.onreadystatechange = function() {
                        I && 4 === I.readyState && (0 !== I.status || I.responseURL && 0 === I.responseURL.indexOf("file:")) && setTimeout(_)
                    }
                    ,
                    I.onabort = function() {
                        I && (i(u("Request aborted", e, "ECONNABORTED", I)),
                        I = null)
                    }
                    ,
                    I.onerror = function() {
                        i(u("Network Error", e, null, I)),
                        I = null
                    }
                    ,
                    I.ontimeout = function() {
                        var t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"
                          , n = e.transitional || d.transitional;
                        e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                        i(u(t, e, n.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", I)),
                        I = null
                    }
                    ,
                    n.isStandardBrowserEnv()) {
                        var B = (e.withCredentials || l(v)) && e.xsrfCookieName ? r.read(e.xsrfCookieName) : void 0;
                        B && (g[e.xsrfHeaderName] = B)
                    }
                    "setRequestHeader"in I && n.forEach(g, (function(e, t) {
                        void 0 === f && "content-type" === t.toLowerCase() ? delete g[t] : I.setRequestHeader(t, e)
                    }
                    )),
                    n.isUndefined(e.withCredentials) || (I.withCredentials = !!e.withCredentials),
                    m && "json" !== m && (I.responseType = e.responseType),
                    "function" == typeof e.onDownloadProgress && I.addEventListener("progress", e.onDownloadProgress),
                    "function" == typeof e.onUploadProgress && I.upload && I.upload.addEventListener("progress", e.onUploadProgress),
                    (e.cancelToken || e.signal) && (p = function(e) {
                        I && (i(!e || e && e.type ? new h("canceled") : e),
                        I.abort(),
                        I = null)
                    }
                    ,
                    e.cancelToken && e.cancelToken.subscribe(p),
                    e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p))),
                    f || (f = null),
                    I.send(f)
                }
                ))
            }
        },
        6585: function(e, t, i) {
            "use strict";
            var n = i(85246)
              , o = i(44143)
              , r = i(42523)
              , s = i(85187);
            var a = function e(t) {
                var i = new r(t)
                  , a = o(r.prototype.request, i);
                return n.extend(a, r.prototype, i),
                n.extend(a, i),
                a.create = function(i) {
                    return e(s(t, i))
                }
                ,
                a
            }(i(85100));
            a.Axios = r,
            a.Cancel = i(68573),
            a.CancelToken = i(9367),
            a.isCancel = i(67459),
            a.VERSION = i(25310).version,
            a.all = function(e) {
                return Promise.all(e)
            }
            ,
            a.spread = i(97464),
            a.isAxiosError = i(38312),
            e.exports = a,
            e.exports.default = a
        },
        68573: function(e) {
            "use strict";
            function t(e) {
                this.message = e
            }
            t.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }
            ,
            t.prototype.__CANCEL__ = !0,
            e.exports = t
        },
        9367: function(e, t, i) {
            "use strict";
            var n = i(68573);
            function o(e) {
                if ("function" != typeof e)
                    throw new TypeError("executor must be a function.");
                var t;
                this.promise = new Promise((function(e) {
                    t = e
                }
                ));
                var i = this;
                this.promise.then((function(e) {
                    if (i._listeners) {
                        var t, n = i._listeners.length;
                        for (t = 0; t < n; t++)
                            i._listeners[t](e);
                        i._listeners = null
                    }
                }
                )),
                this.promise.then = function(e) {
                    var t, n = new Promise((function(e) {
                        i.subscribe(e),
                        t = e
                    }
                    )).then(e);
                    return n.cancel = function() {
                        i.unsubscribe(t)
                    }
                    ,
                    n
                }
                ,
                e((function(e) {
                    i.reason || (i.reason = new n(e),
                    t(i.reason))
                }
                ))
            }
            o.prototype.throwIfRequested = function() {
                if (this.reason)
                    throw this.reason
            }
            ,
            o.prototype.subscribe = function(e) {
                this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
            }
            ,
            o.prototype.unsubscribe = function(e) {
                if (this._listeners) {
                    var t = this._listeners.indexOf(e);
                    -1 !== t && this._listeners.splice(t, 1)
                }
            }
            ,
            o.source = function() {
                var e;
                return {
                    token: new o((function(t) {
                        e = t
                    }
                    )),
                    cancel: e
                }
            }
            ,
            e.exports = o
        },
        67459: function(e) {
            "use strict";
            e.exports = function(e) {
                return !(!e || !e.__CANCEL__)
            }
        },
        42523: function(e, t, i) {
            "use strict";
            var n = i(85246)
              , o = i(62719)
              , r = i(87555)
              , s = i(75780)
              , a = i(85187)
              , c = i(5710)
              , l = c.validators;
            function u(e) {
                this.defaults = e,
                this.interceptors = {
                    request: new r,
                    response: new r
                }
            }
            u.prototype.request = function(e) {
                "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {},
                (e = a(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var t = e.transitional;
                void 0 !== t && c.assertOptions(t, {
                    silentJSONParsing: l.transitional(l.boolean),
                    forcedJSONParsing: l.transitional(l.boolean),
                    clarifyTimeoutError: l.transitional(l.boolean)
                }, !1);
                var i = []
                  , n = !0;
                this.interceptors.request.forEach((function(t) {
                    "function" == typeof t.runWhen && !1 === t.runWhen(e) || (n = n && t.synchronous,
                    i.unshift(t.fulfilled, t.rejected))
                }
                ));
                var o, r = [];
                if (this.interceptors.response.forEach((function(e) {
                    r.push(e.fulfilled, e.rejected)
                }
                )),
                !n) {
                    var u = [s, void 0];
                    for (Array.prototype.unshift.apply(u, i),
                    u = u.concat(r),
                    o = Promise.resolve(e); u.length; )
                        o = o.then(u.shift(), u.shift());
                    return o
                }
                for (var d = e; i.length; ) {
                    var h = i.shift()
                      , p = i.shift();
                    try {
                        d = h(d)
                    } catch (e) {
                        p(e);
                        break
                    }
                }
                try {
                    o = s(d)
                } catch (e) {
                    return Promise.reject(e)
                }
                for (; r.length; )
                    o = o.then(r.shift(), r.shift());
                return o
            }
            ,
            u.prototype.getUri = function(e) {
                return e = a(this.defaults, e),
                o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            }
            ,
            n.forEach(["delete", "get", "head", "options"], (function(e) {
                u.prototype[e] = function(t, i) {
                    return this.request(a(i || {}, {
                        method: e,
                        url: t,
                        data: (i || {}).data
                    }))
                }
            }
            )),
            n.forEach(["post", "put", "patch"], (function(e) {
                u.prototype[e] = function(t, i, n) {
                    return this.request(a(n || {}, {
                        method: e,
                        url: t,
                        data: i
                    }))
                }
            }
            )),
            e.exports = u
        },
        87555: function(e, t, i) {
            "use strict";
            var n = i(85246);
            function o() {
                this.handlers = []
            }
            o.prototype.use = function(e, t, i) {
                return this.handlers.push({
                    fulfilled: e,
                    rejected: t,
                    synchronous: !!i && i.synchronous,
                    runWhen: i ? i.runWhen : null
                }),
                this.handlers.length - 1
            }
            ,
            o.prototype.eject = function(e) {
                this.handlers[e] && (this.handlers[e] = null)
            }
            ,
            o.prototype.forEach = function(e) {
                n.forEach(this.handlers, (function(t) {
                    null !== t && e(t)
                }
                ))
            }
            ,
            e.exports = o
        },
        91558: function(e, t, i) {
            "use strict";
            var n = i(51636)
              , o = i(26907);
            e.exports = function(e, t) {
                return e && !n(t) ? o(e, t) : t
            }
        },
        6662: function(e, t, i) {
            "use strict";
            var n = i(3510);
            e.exports = function(e, t, i, o, r) {
                var s = new Error(e);
                return n(s, t, i, o, r)
            }
        },
        75780: function(e, t, i) {
            "use strict";
            var n = i(85246)
              , o = i(57788)
              , r = i(67459)
              , s = i(85100)
              , a = i(68573);
            function c(e) {
                if (e.cancelToken && e.cancelToken.throwIfRequested(),
                e.signal && e.signal.aborted)
                    throw new a("canceled")
            }
            e.exports = function(e) {
                return c(e),
                e.headers = e.headers || {},
                e.data = o.call(e, e.data, e.headers, e.transformRequest),
                e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers),
                n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(t) {
                    delete e.headers[t]
                }
                )),
                (e.adapter || s.adapter)(e).then((function(t) {
                    return c(e),
                    t.data = o.call(e, t.data, t.headers, e.transformResponse),
                    t
                }
                ), (function(t) {
                    return r(t) || (c(e),
                    t && t.response && (t.response.data = o.call(e, t.response.data, t.response.headers, e.transformResponse))),
                    Promise.reject(t)
                }
                ))
            }
        },
        3510: function(e) {
            "use strict";
            e.exports = function(e, t, i, n, o) {
                return e.config = t,
                i && (e.code = i),
                e.request = n,
                e.response = o,
                e.isAxiosError = !0,
                e.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }
                ,
                e
            }
        },
        85187: function(e, t, i) {
            "use strict";
            var n = i(85246);
            e.exports = function(e, t) {
                t = t || {};
                var i = {};
                function o(e, t) {
                    return n.isPlainObject(e) && n.isPlainObject(t) ? n.merge(e, t) : n.isPlainObject(t) ? n.merge({}, t) : n.isArray(t) ? t.slice() : t
                }
                function r(i) {
                    return n.isUndefined(t[i]) ? n.isUndefined(e[i]) ? void 0 : o(void 0, e[i]) : o(e[i], t[i])
                }
                function s(e) {
                    if (!n.isUndefined(t[e]))
                        return o(void 0, t[e])
                }
                function a(i) {
                    return n.isUndefined(t[i]) ? n.isUndefined(e[i]) ? void 0 : o(void 0, e[i]) : o(void 0, t[i])
                }
                function c(i) {
                    return i in t ? o(e[i], t[i]) : i in e ? o(void 0, e[i]) : void 0
                }
                var l = {
                    url: s,
                    method: s,
                    data: s,
                    baseURL: a,
                    transformRequest: a,
                    transformResponse: a,
                    paramsSerializer: a,
                    timeout: a,
                    timeoutMessage: a,
                    withCredentials: a,
                    adapter: a,
                    responseType: a,
                    xsrfCookieName: a,
                    xsrfHeaderName: a,
                    onUploadProgress: a,
                    onDownloadProgress: a,
                    decompress: a,
                    maxContentLength: a,
                    maxBodyLength: a,
                    transport: a,
                    httpAgent: a,
                    httpsAgent: a,
                    cancelToken: a,
                    socketPath: a,
                    responseEncoding: a,
                    validateStatus: c
                };
                return n.forEach(Object.keys(e).concat(Object.keys(t)), (function(e) {
                    var t = l[e] || r
                      , o = t(e);
                    n.isUndefined(o) && t !== c || (i[e] = o)
                }
                )),
                i
            }
        },
        61126: function(e, t, i) {
            "use strict";
            var n = i(6662);
            e.exports = function(e, t, i) {
                var o = i.config.validateStatus;
                i.status && o && !o(i.status) ? t(n("Request failed with status code " + i.status, i.config, null, i.request, i)) : e(i)
            }
        },
        57788: function(e, t, i) {
            "use strict";
            var n = i(85246)
              , o = i(85100);
            e.exports = function(e, t, i) {
                var r = this || o;
                return n.forEach(i, (function(i) {
                    e = i.call(r, e, t)
                }
                )),
                e
            }
        },
        85100: function(e, t, i) {
            "use strict";
            var n = i(85246)
              , o = i(17865)
              , r = i(3510)
              , s = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            function a(e, t) {
                !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var c, l = {
                transitional: {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                adapter: (("undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process)) && (c = i(6024)),
                c),
                transformRequest: [function(e, t) {
                    return o(t, "Accept"),
                    o(t, "Content-Type"),
                    n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString()) : n.isObject(e) || t && "application/json" === t["Content-Type"] ? (a(t, "application/json"),
                    function(e, t, i) {
                        if (n.isString(e))
                            try {
                                return (t || JSON.parse)(e),
                                n.trim(e)
                            } catch (e) {
                                if ("SyntaxError" !== e.name)
                                    throw e
                            }
                        return (i || JSON.stringify)(e)
                    }(e)) : e
                }
                ],
                transformResponse: [function(e) {
                    var t = this.transitional || l.transitional
                      , i = t && t.silentJSONParsing
                      , o = t && t.forcedJSONParsing
                      , s = !i && "json" === this.responseType;
                    if (s || o && n.isString(e) && e.length)
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            if (s) {
                                if ("SyntaxError" === e.name)
                                    throw r(e, this, "E_JSON_PARSE");
                                throw e
                            }
                        }
                    return e
                }
                ],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            n.forEach(["delete", "get", "head"], (function(e) {
                l.headers[e] = {}
            }
            )),
            n.forEach(["post", "put", "patch"], (function(e) {
                l.headers[e] = n.merge(s)
            }
            )),
            e.exports = l
        },
        25310: function(e) {
            e.exports = {
                version: "0.24.0"
            }
        },
        44143: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return function() {
                    for (var i = new Array(arguments.length), n = 0; n < i.length; n++)
                        i[n] = arguments[n];
                    return e.apply(t, i)
                }
            }
        },
        62719: function(e, t, i) {
            "use strict";
            var n = i(85246);
            function o(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            e.exports = function(e, t, i) {
                if (!t)
                    return e;
                var r;
                if (i)
                    r = i(t);
                else if (n.isURLSearchParams(t))
                    r = t.toString();
                else {
                    var s = [];
                    n.forEach(t, (function(e, t) {
                        null != e && (n.isArray(e) ? t += "[]" : e = [e],
                        n.forEach(e, (function(e) {
                            n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)),
                            s.push(o(t) + "=" + o(e))
                        }
                        )))
                    }
                    )),
                    r = s.join("&")
                }
                if (r) {
                    var a = e.indexOf("#");
                    -1 !== a && (e = e.slice(0, a)),
                    e += (-1 === e.indexOf("?") ? "?" : "&") + r
                }
                return e
            }
        },
        26907: function(e) {
            "use strict";
            e.exports = function(e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
            }
        },
        74737: function(e, t, i) {
            "use strict";
            var n = i(85246);
            e.exports = n.isStandardBrowserEnv() ? {
                write: function(e, t, i, o, r, s) {
                    var a = [];
                    a.push(e + "=" + encodeURIComponent(t)),
                    n.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()),
                    n.isString(o) && a.push("path=" + o),
                    n.isString(r) && a.push("domain=" + r),
                    !0 === s && a.push("secure"),
                    document.cookie = a.join("; ")
                },
                read: function(e) {
                    var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        51636: function(e) {
            "use strict";
            e.exports = function(e) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
            }
        },
        38312: function(e) {
            "use strict";
            function t(e) {
                return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                t(e)
            }
            e.exports = function(e) {
                return "object" === t(e) && !0 === e.isAxiosError
            }
        },
        33975: function(e, t, i) {
            "use strict";
            var n = i(85246);
            e.exports = n.isStandardBrowserEnv() ? function() {
                var e, t = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
                function o(e) {
                    var n = e;
                    return t && (i.setAttribute("href", n),
                    n = i.href),
                    i.setAttribute("href", n),
                    {
                        href: i.href,
                        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                        host: i.host,
                        search: i.search ? i.search.replace(/^\?/, "") : "",
                        hash: i.hash ? i.hash.replace(/^#/, "") : "",
                        hostname: i.hostname,
                        port: i.port,
                        pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
                    }
                }
                return e = o(window.location.href),
                function(t) {
                    var i = n.isString(t) ? o(t) : t;
                    return i.protocol === e.protocol && i.host === e.host
                }
            }() : function() {
                return !0
            }
        },
        17865: function(e, t, i) {
            "use strict";
            var n = i(85246);
            e.exports = function(e, t) {
                n.forEach(e, (function(i, n) {
                    n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = i,
                    delete e[n])
                }
                ))
            }
        },
        60001: function(e, t, i) {
            "use strict";
            var n = i(85246)
              , o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            e.exports = function(e) {
                var t, i, r, s = {};
                return e ? (n.forEach(e.split("\n"), (function(e) {
                    if (r = e.indexOf(":"),
                    t = n.trim(e.substr(0, r)).toLowerCase(),
                    i = n.trim(e.substr(r + 1)),
                    t) {
                        if (s[t] && o.indexOf(t) >= 0)
                            return;
                        s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([i]) : s[t] ? s[t] + ", " + i : i
                    }
                }
                )),
                s) : s
            }
        },
        97464: function(e) {
            "use strict";
            e.exports = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }
        },
        5710: function(e, t, i) {
            "use strict";
            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                n(e)
            }
            var o = i(25310).version
              , r = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(e, t) {
                r[e] = function(i) {
                    return n(i) === e || "a" + (t < 1 ? "n " : " ") + e
                }
            }
            ));
            var s = {};
            r.transitional = function(e, t, i) {
                function n(e, t) {
                    return "[Axios v" + o + "] Transitional option '" + e + "'" + t + (i ? ". " + i : "")
                }
                return function(i, o, r) {
                    if (!1 === e)
                        throw new Error(n(o, " has been removed" + (t ? " in " + t : "")));
                    return t && !s[o] && (s[o] = !0,
                    console.warn(n(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
                    !e || e(i, o, r)
                }
            }
            ,
            e.exports = {
                assertOptions: function(e, t, i) {
                    if ("object" !== n(e))
                        throw new TypeError("options must be an object");
                    for (var o = Object.keys(e), r = o.length; r-- > 0; ) {
                        var s = o[r]
                          , a = t[s];
                        if (a) {
                            var c = e[s]
                              , l = void 0 === c || a(c, s, e);
                            if (!0 !== l)
                                throw new TypeError("option " + s + " must be " + l)
                        } else if (!0 !== i)
                            throw Error("Unknown option " + s)
                    }
                },
                validators: r
            }
        },
        85246: function(e, t, i) {
            "use strict";
            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                n(e)
            }
            var o = i(44143)
              , r = Object.prototype.toString;
            function s(e) {
                return "[object Array]" === r.call(e)
            }
            function a(e) {
                return void 0 === e
            }
            function c(e) {
                return null !== e && "object" === n(e)
            }
            function l(e) {
                if ("[object Object]" !== r.call(e))
                    return !1;
                var t = Object.getPrototypeOf(e);
                return null === t || t === Object.prototype
            }
            function u(e) {
                return "[object Function]" === r.call(e)
            }
            function d(e, t) {
                if (null != e)
                    if ("object" !== n(e) && (e = [e]),
                    s(e))
                        for (var i = 0, o = e.length; i < o; i++)
                            t.call(null, e[i], i, e);
                    else
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && t.call(null, e[r], r, e)
            }
            e.exports = {
                isArray: s,
                isArrayBuffer: function(e) {
                    return "[object ArrayBuffer]" === r.call(e)
                },
                isBuffer: function(e) {
                    return null !== e && !a(e) && null !== e.constructor && !a(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
                },
                isFormData: function(e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                },
                isArrayBufferView: function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                },
                isString: function(e) {
                    return "string" == typeof e
                },
                isNumber: function(e) {
                    return "number" == typeof e
                },
                isObject: c,
                isPlainObject: l,
                isUndefined: a,
                isDate: function(e) {
                    return "[object Date]" === r.call(e)
                },
                isFile: function(e) {
                    return "[object File]" === r.call(e)
                },
                isBlob: function(e) {
                    return "[object Blob]" === r.call(e)
                },
                isFunction: u,
                isStream: function(e) {
                    return c(e) && u(e.pipe)
                },
                isURLSearchParams: function(e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
                },
                forEach: d,
                merge: function e() {
                    var t = {};
                    function i(i, n) {
                        l(t[n]) && l(i) ? t[n] = e(t[n], i) : l(i) ? t[n] = e({}, i) : s(i) ? t[n] = i.slice() : t[n] = i
                    }
                    for (var n = 0, o = arguments.length; n < o; n++)
                        d(arguments[n], i);
                    return t
                },
                extend: function(e, t, i) {
                    return d(t, (function(t, n) {
                        e[n] = i && "function" == typeof t ? o(t, i) : t
                    }
                    )),
                    e
                },
                trim: function(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function(e) {
                    return 65279 === e.charCodeAt(0) && (e = e.slice(1)),
                    e
                }
            }
        },
        66510: function(e, t, i) {
            "use strict";
            var n = i(88298)
              , o = i(34717)
              , r = o(n("String.prototype.indexOf"));
            e.exports = function(e, t) {
                var i = n(e, !!t);
                return "function" == typeof i && r(e, ".prototype.") > -1 ? o(i) : i
            }
        },
        34717: function(e, t, i) {
            "use strict";
            var n = i(23111)
              , o = i(88298)
              , r = o("%Function.prototype.apply%")
              , s = o("%Function.prototype.call%")
              , a = o("%Reflect.apply%", !0) || n.call(s, r)
              , c = o("%Object.getOwnPropertyDescriptor%", !0)
              , l = o("%Object.defineProperty%", !0)
              , u = o("%Math.max%");
            if (l)
                try {
                    l({}, "a", {
                        value: 1
                    })
                } catch (e) {
                    l = null
                }
            e.exports = function(e) {
                var t = a(n, s, arguments);
                if (c && l) {
                    var i = c(t, "length");
                    i.configurable && l(t, "length", {
                        value: 1 + u(0, e.length - (arguments.length - 1))
                    })
                }
                return t
            }
            ;
            var d = function() {
                return a(n, r, arguments)
            };
            l ? l(e.exports, "apply", {
                value: d
            }) : e.exports.apply = d
        },
        50959: function(e) {
            "use strict";
            var t = "Function.prototype.bind called on incompatible "
              , i = Array.prototype.slice
              , n = Object.prototype.toString
              , o = "[object Function]";
            e.exports = function(e) {
                var r = this;
                if ("function" != typeof r || n.call(r) !== o)
                    throw new TypeError(t + r);
                for (var s, a = i.call(arguments, 1), c = function() {
                    if (this instanceof s) {
                        var t = r.apply(this, a.concat(i.call(arguments)));
                        return Object(t) === t ? t : this
                    }
                    return r.apply(e, a.concat(i.call(arguments)))
                }, l = Math.max(0, r.length - a.length), u = [], d = 0; d < l; d++)
                    u.push("$" + d);
                if (s = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(c),
                r.prototype) {
                    var h = function() {};
                    h.prototype = r.prototype,
                    s.prototype = new h,
                    h.prototype = null
                }
                return s
            }
        },
        23111: function(e, t, i) {
            "use strict";
            var n = i(50959);
            e.exports = Function.prototype.bind || n
        },
        88298: function(e, t, i) {
            "use strict";
            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                n(e)
            }
            var o, r = SyntaxError, s = Function, a = TypeError, c = function(e) {
                try {
                    return s('"use strict"; return (' + e + ").constructor;")()
                } catch (e) {}
            }, l = Object.getOwnPropertyDescriptor;
            if (l)
                try {
                    l({}, "")
                } catch (e) {
                    l = null
                }
            var u = function() {
                throw new a
            }
              , d = l ? function() {
                try {
                    return u
                } catch (e) {
                    try {
                        return l(arguments, "callee").get
                    } catch (e) {
                        return u
                    }
                }
            }() : u
              , h = i(91669)()
              , p = Object.getPrototypeOf || function(e) {
                return e.__proto__
            }
              , f = {}
              , g = "undefined" == typeof Uint8Array ? o : p(Uint8Array)
              , m = {
                "%AggregateError%": "undefined" == typeof AggregateError ? o : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? o : ArrayBuffer,
                "%ArrayIteratorPrototype%": h ? p([][Symbol.iterator]()) : o,
                "%AsyncFromSyncIteratorPrototype%": o,
                "%AsyncFunction%": f,
                "%AsyncGenerator%": f,
                "%AsyncGeneratorFunction%": f,
                "%AsyncIteratorPrototype%": f,
                "%Atomics%": "undefined" == typeof Atomics ? o : Atomics,
                "%BigInt%": "undefined" == typeof BigInt ? o : BigInt,
                "%Boolean%": Boolean,
                "%DataView%": "undefined" == typeof DataView ? o : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%Float32Array%": "undefined" == typeof Float32Array ? o : Float32Array,
                "%Float64Array%": "undefined" == typeof Float64Array ? o : Float64Array,
                "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? o : FinalizationRegistry,
                "%Function%": s,
                "%GeneratorFunction%": f,
                "%Int8Array%": "undefined" == typeof Int8Array ? o : Int8Array,
                "%Int16Array%": "undefined" == typeof Int16Array ? o : Int16Array,
                "%Int32Array%": "undefined" == typeof Int32Array ? o : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": h ? p(p([][Symbol.iterator]())) : o,
                "%JSON%": "object" === ("undefined" == typeof JSON ? "undefined" : n(JSON)) ? JSON : o,
                "%Map%": "undefined" == typeof Map ? o : Map,
                "%MapIteratorPrototype%": "undefined" != typeof Map && h ? p((new Map)[Symbol.iterator]()) : o,
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": "undefined" == typeof Promise ? o : Promise,
                "%Proxy%": "undefined" == typeof Proxy ? o : Proxy,
                "%RangeError%": RangeError,
                "%ReferenceError%": ReferenceError,
                "%Reflect%": "undefined" == typeof Reflect ? o : Reflect,
                "%RegExp%": RegExp,
                "%Set%": "undefined" == typeof Set ? o : Set,
                "%SetIteratorPrototype%": "undefined" != typeof Set && h ? p((new Set)[Symbol.iterator]()) : o,
                "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? o : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": h ? p(""[Symbol.iterator]()) : o,
                "%Symbol%": h ? Symbol : o,
                "%SyntaxError%": r,
                "%ThrowTypeError%": d,
                "%TypedArray%": g,
                "%TypeError%": a,
                "%Uint8Array%": "undefined" == typeof Uint8Array ? o : Uint8Array,
                "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? o : Uint8ClampedArray,
                "%Uint16Array%": "undefined" == typeof Uint16Array ? o : Uint16Array,
                "%Uint32Array%": "undefined" == typeof Uint32Array ? o : Uint32Array,
                "%URIError%": URIError,
                "%WeakMap%": "undefined" == typeof WeakMap ? o : WeakMap,
                "%WeakRef%": "undefined" == typeof WeakRef ? o : WeakRef,
                "%WeakSet%": "undefined" == typeof WeakSet ? o : WeakSet
            }
              , b = function e(t) {
                var i;
                if ("%AsyncFunction%" === t)
                    i = c("async function () {}");
                else if ("%GeneratorFunction%" === t)
                    i = c("function* () {}");
                else if ("%AsyncGeneratorFunction%" === t)
                    i = c("async function* () {}");
                else if ("%AsyncGenerator%" === t) {
                    var n = e("%AsyncGeneratorFunction%");
                    n && (i = n.prototype)
                } else if ("%AsyncIteratorPrototype%" === t) {
                    var o = e("%AsyncGenerator%");
                    o && (i = p(o.prototype))
                }
                return m[t] = i,
                i
            }
              , I = {
                "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                "%ArrayPrototype%": ["Array", "prototype"],
                "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                "%ArrayProto_values%": ["Array", "prototype", "values"],
                "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                "%BooleanPrototype%": ["Boolean", "prototype"],
                "%DataViewPrototype%": ["DataView", "prototype"],
                "%DatePrototype%": ["Date", "prototype"],
                "%ErrorPrototype%": ["Error", "prototype"],
                "%EvalErrorPrototype%": ["EvalError", "prototype"],
                "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                "%FunctionPrototype%": ["Function", "prototype"],
                "%Generator%": ["GeneratorFunction", "prototype"],
                "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                "%JSONParse%": ["JSON", "parse"],
                "%JSONStringify%": ["JSON", "stringify"],
                "%MapPrototype%": ["Map", "prototype"],
                "%NumberPrototype%": ["Number", "prototype"],
                "%ObjectPrototype%": ["Object", "prototype"],
                "%ObjProto_toString%": ["Object", "prototype", "toString"],
                "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                "%PromisePrototype%": ["Promise", "prototype"],
                "%PromiseProto_then%": ["Promise", "prototype", "then"],
                "%Promise_all%": ["Promise", "all"],
                "%Promise_reject%": ["Promise", "reject"],
                "%Promise_resolve%": ["Promise", "resolve"],
                "%RangeErrorPrototype%": ["RangeError", "prototype"],
                "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                "%RegExpPrototype%": ["RegExp", "prototype"],
                "%SetPrototype%": ["Set", "prototype"],
                "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                "%StringPrototype%": ["String", "prototype"],
                "%SymbolPrototype%": ["Symbol", "prototype"],
                "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                "%TypeErrorPrototype%": ["TypeError", "prototype"],
                "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                "%URIErrorPrototype%": ["URIError", "prototype"],
                "%WeakMapPrototype%": ["WeakMap", "prototype"],
                "%WeakSetPrototype%": ["WeakSet", "prototype"]
            }
              , E = i(23111)
              , y = i(37909)
              , v = E.call(Function.call, Array.prototype.concat)
              , _ = E.call(Function.apply, Array.prototype.splice)
              , B = E.call(Function.call, String.prototype.replace)
              , C = E.call(Function.call, String.prototype.slice)
              , T = E.call(Function.call, RegExp.prototype.exec)
              , x = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
              , w = /\\(\\)?/g
              , N = function(e) {
                var t = C(e, 0, 1)
                  , i = C(e, -1);
                if ("%" === t && "%" !== i)
                    throw new r("invalid intrinsic syntax, expected closing `%`");
                if ("%" === i && "%" !== t)
                    throw new r("invalid intrinsic syntax, expected opening `%`");
                var n = [];
                return B(e, x, (function(e, t, i, o) {
                    n[n.length] = i ? B(o, w, "$1") : t || e
                }
                )),
                n
            }
              , S = function(e, t) {
                var i, n = e;
                if (y(I, n) && (n = "%" + (i = I[n])[0] + "%"),
                y(m, n)) {
                    var o = m[n];
                    if (o === f && (o = b(n)),
                    void 0 === o && !t)
                        throw new a("intrinsic " + e + " exists, but is not available. Please file an issue!");
                    return {
                        alias: i,
                        name: n,
                        value: o
                    }
                }
                throw new r("intrinsic " + e + " does not exist!")
            };
            e.exports = function(e, t) {
                if ("string" != typeof e || 0 === e.length)
                    throw new a("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof t)
                    throw new a('"allowMissing" argument must be a boolean');
                if (null === T(/^%?[^%]*%?$/, e))
                    throw new r("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var i = N(e)
                  , n = i.length > 0 ? i[0] : ""
                  , o = S("%" + n + "%", t)
                  , s = o.name
                  , c = o.value
                  , u = !1
                  , d = o.alias;
                d && (n = d[0],
                _(i, v([0, 1], d)));
                for (var h = 1, p = !0; h < i.length; h += 1) {
                    var f = i[h]
                      , g = C(f, 0, 1)
                      , b = C(f, -1);
                    if (('"' === g || "'" === g || "`" === g || '"' === b || "'" === b || "`" === b) && g !== b)
                        throw new r("property names with quotes must have matching quotes");
                    if ("constructor" !== f && p || (u = !0),
                    y(m, s = "%" + (n += "." + f) + "%"))
                        c = m[s];
                    else if (null != c) {
                        if (!(f in c)) {
                            if (!t)
                                throw new a("base intrinsic for " + e + " exists, but the property is not available.");
                            return
                        }
                        if (l && h + 1 >= i.length) {
                            var I = l(c, f);
                            c = (p = !!I) && "get"in I && !("originalValue"in I.get) ? I.get : c[f]
                        } else
                            p = y(c, f),
                            c = c[f];
                        p && !u && (m[s] = c)
                    }
                }
                return c
            }
        },
        91669: function(e, t, i) {
            "use strict";
            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                n(e)
            }
            var o = "undefined" != typeof Symbol && Symbol
              , r = i(74539);
            e.exports = function() {
                return "function" == typeof o && ("function" == typeof Symbol && ("symbol" === n(o("foo")) && ("symbol" === n(Symbol("bar")) && r())))
            }
        },
        74539: function(e) {
            "use strict";
            function t(e) {
                return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                t(e)
            }
            e.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
                    return !1;
                if ("symbol" === t(Symbol.iterator))
                    return !0;
                var e = {}
                  , i = Symbol("test")
                  , n = Object(i);
                if ("string" == typeof i)
                    return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(i))
                    return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(n))
                    return !1;
                for (i in e[i] = 42,
                e)
                    return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
                    return !1;
                if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length)
                    return !1;
                var o = Object.getOwnPropertySymbols(e);
                if (1 !== o.length || o[0] !== i)
                    return !1;
                if (!Object.prototype.propertyIsEnumerable.call(e, i))
                    return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var r = Object.getOwnPropertyDescriptor(e, i);
                    if (42 !== r.value || !0 !== r.enumerable)
                        return !1
                }
                return !0
            }
        },
        37909: function(e, t, i) {
            "use strict";
            var n = i(23111);
            e.exports = n.call(Function.call, Object.prototype.hasOwnProperty)
        },
        78040: function(e, t, i) {
            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                n(e)
            }
            var o = "function" == typeof Map && Map.prototype
              , r = Object.getOwnPropertyDescriptor && o ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null
              , s = o && r && "function" == typeof r.get ? r.get : null
              , a = o && Map.prototype.forEach
              , c = "function" == typeof Set && Set.prototype
              , l = Object.getOwnPropertyDescriptor && c ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null
              , u = c && l && "function" == typeof l.get ? l.get : null
              , d = c && Set.prototype.forEach
              , h = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null
              , p = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null
              , f = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null
              , g = Boolean.prototype.valueOf
              , m = Object.prototype.toString
              , b = Function.prototype.toString
              , I = String.prototype.match
              , E = String.prototype.slice
              , y = String.prototype.replace
              , v = String.prototype.toUpperCase
              , _ = String.prototype.toLowerCase
              , B = RegExp.prototype.test
              , C = Array.prototype.concat
              , T = Array.prototype.join
              , x = Array.prototype.slice
              , w = Math.floor
              , N = "function" == typeof BigInt ? BigInt.prototype.valueOf : null
              , S = Object.getOwnPropertySymbols
              , D = "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? Symbol.prototype.toString : null
              , A = "function" == typeof Symbol && "object" === n(Symbol.iterator)
              , V = "function" == typeof Symbol && Symbol.toStringTag && (n(Symbol.toStringTag) === A || "symbol") ? Symbol.toStringTag : null
              , P = Object.prototype.propertyIsEnumerable
              , R = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
                return e.__proto__
            }
            : null);
            function O(e, t) {
                if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1e3 && e < 1e3 || B.call(/e/, t))
                    return t;
                var i = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
                if ("number" == typeof e) {
                    var n = e < 0 ? -w(-e) : w(e);
                    if (n !== e) {
                        var o = String(n)
                          , r = E.call(t, o.length + 1);
                        return y.call(o, i, "$&_") + "." + y.call(y.call(r, /([0-9]{3})/g, "$&_"), /_$/, "")
                    }
                }
                return y.call(t, i, "$&_")
            }
            var L = i(24654)
              , k = L.custom
              , M = G(k) ? k : null;
            function W(e, t, i) {
                var n = "double" === (i.quoteStyle || t) ? '"' : "'";
                return n + e + n
            }
            function H(e) {
                return y.call(String(e), /"/g, "&quot;")
            }
            function U(e) {
                return !("[object Array]" !== $(e) || V && "object" === n(e) && V in e)
            }
            function F(e) {
                return !("[object RegExp]" !== $(e) || V && "object" === n(e) && V in e)
            }
            function G(e) {
                if (A)
                    return e && "object" === n(e) && e instanceof Symbol;
                if ("symbol" === n(e))
                    return !0;
                if (!e || "object" !== n(e) || !D)
                    return !1;
                try {
                    return D.call(e),
                    !0
                } catch (e) {}
                return !1
            }
            e.exports = function e(t, i, o, r) {
                var c = i || {};
                if (z(c, "quoteStyle") && "single" !== c.quoteStyle && "double" !== c.quoteStyle)
                    throw new TypeError('option "quoteStyle" must be "single" or "double"');
                if (z(c, "maxStringLength") && ("number" == typeof c.maxStringLength ? c.maxStringLength < 0 && c.maxStringLength !== 1 / 0 : null !== c.maxStringLength))
                    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
                var l = !z(c, "customInspect") || c.customInspect;
                if ("boolean" != typeof l && "symbol" !== l)
                    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
                if (z(c, "indent") && null !== c.indent && "\t" !== c.indent && !(parseInt(c.indent, 10) === c.indent && c.indent > 0))
                    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
                if (z(c, "numericSeparator") && "boolean" != typeof c.numericSeparator)
                    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
                var m = c.numericSeparator;
                if (void 0 === t)
                    return "undefined";
                if (null === t)
                    return "null";
                if ("boolean" == typeof t)
                    return t ? "true" : "false";
                if ("string" == typeof t)
                    return q(t, c);
                if ("number" == typeof t) {
                    if (0 === t)
                        return 1 / 0 / t > 0 ? "0" : "-0";
                    var v = String(t);
                    return m ? O(t, v) : v
                }
                if ("bigint" == typeof t) {
                    var B = String(t) + "n";
                    return m ? O(t, B) : B
                }
                var w = void 0 === c.depth ? 5 : c.depth;
                if (void 0 === o && (o = 0),
                o >= w && w > 0 && "object" === n(t))
                    return U(t) ? "[Array]" : "[Object]";
                var S = function(e, t) {
                    var i;
                    if ("\t" === e.indent)
                        i = "\t";
                    else {
                        if (!("number" == typeof e.indent && e.indent > 0))
                            return null;
                        i = T.call(Array(e.indent + 1), " ")
                    }
                    return {
                        base: i,
                        prev: T.call(Array(t + 1), i)
                    }
                }(c, o);
                if (void 0 === r)
                    r = [];
                else if (K(r, t) >= 0)
                    return "[Circular]";
                function k(t, i, n) {
                    if (i && (r = x.call(r)).push(i),
                    n) {
                        var s = {
                            depth: c.depth
                        };
                        return z(c, "quoteStyle") && (s.quoteStyle = c.quoteStyle),
                        e(t, s, o + 1, r)
                    }
                    return e(t, c, o + 1, r)
                }
                if ("function" == typeof t && !F(t)) {
                    var j = function(e) {
                        if (e.name)
                            return e.name;
                        var t = I.call(b.call(e), /^function\s*([\w$]+)/);
                        if (t)
                            return t[1];
                        return null
                    }(t)
                      , Y = ee(t, k);
                    return "[Function" + (j ? ": " + j : " (anonymous)") + "]" + (Y.length > 0 ? " { " + T.call(Y, ", ") + " }" : "")
                }
                if (G(t)) {
                    var te = A ? y.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : D.call(t);
                    return "object" !== n(t) || A ? te : X(te)
                }
                if (function(e) {
                    if (!e || "object" !== n(e))
                        return !1;
                    if ("undefined" != typeof HTMLElement && e instanceof HTMLElement)
                        return !0;
                    return "string" == typeof e.nodeName && "function" == typeof e.getAttribute
                }(t)) {
                    for (var ie = "<" + _.call(String(t.nodeName)), ne = t.attributes || [], oe = 0; oe < ne.length; oe++)
                        ie += " " + ne[oe].name + "=" + W(H(ne[oe].value), "double", c);
                    return ie += ">",
                    t.childNodes && t.childNodes.length && (ie += "..."),
                    ie += "</" + _.call(String(t.nodeName)) + ">"
                }
                if (U(t)) {
                    if (0 === t.length)
                        return "[]";
                    var re = ee(t, k);
                    return S && !function(e) {
                        for (var t = 0; t < e.length; t++)
                            if (K(e[t], "\n") >= 0)
                                return !1;
                        return !0
                    }(re) ? "[" + Q(re, S) + "]" : "[ " + T.call(re, ", ") + " ]"
                }
                if (function(e) {
                    return !("[object Error]" !== $(e) || V && "object" === n(e) && V in e)
                }(t)) {
                    var se = ee(t, k);
                    return "cause"in Error.prototype || !("cause"in t) || P.call(t, "cause") ? 0 === se.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + T.call(se, ", ") + " }" : "{ [" + String(t) + "] " + T.call(C.call("[cause]: " + k(t.cause), se), ", ") + " }"
                }
                if ("object" === n(t) && l) {
                    if (M && "function" == typeof t[M] && L)
                        return L(t, {
                            depth: w - o
                        });
                    if ("symbol" !== l && "function" == typeof t.inspect)
                        return t.inspect()
                }
                if (function(e) {
                    if (!s || !e || "object" !== n(e))
                        return !1;
                    try {
                        s.call(e);
                        try {
                            u.call(e)
                        } catch (e) {
                            return !0
                        }
                        return e instanceof Map
                    } catch (e) {}
                    return !1
                }(t)) {
                    var ae = [];
                    return a.call(t, (function(e, i) {
                        ae.push(k(i, t, !0) + " => " + k(e, t))
                    }
                    )),
                    Z("Map", s.call(t), ae, S)
                }
                if (function(e) {
                    if (!u || !e || "object" !== n(e))
                        return !1;
                    try {
                        u.call(e);
                        try {
                            s.call(e)
                        } catch (e) {
                            return !0
                        }
                        return e instanceof Set
                    } catch (e) {}
                    return !1
                }(t)) {
                    var ce = [];
                    return d.call(t, (function(e) {
                        ce.push(k(e, t))
                    }
                    )),
                    Z("Set", u.call(t), ce, S)
                }
                if (function(e) {
                    if (!h || !e || "object" !== n(e))
                        return !1;
                    try {
                        h.call(e, h);
                        try {
                            p.call(e, p)
                        } catch (e) {
                            return !0
                        }
                        return e instanceof WeakMap
                    } catch (e) {}
                    return !1
                }(t))
                    return J("WeakMap");
                if (function(e) {
                    if (!p || !e || "object" !== n(e))
                        return !1;
                    try {
                        p.call(e, p);
                        try {
                            h.call(e, h)
                        } catch (e) {
                            return !0
                        }
                        return e instanceof WeakSet
                    } catch (e) {}
                    return !1
                }(t))
                    return J("WeakSet");
                if (function(e) {
                    if (!f || !e || "object" !== n(e))
                        return !1;
                    try {
                        return f.call(e),
                        !0
                    } catch (e) {}
                    return !1
                }(t))
                    return J("WeakRef");
                if (function(e) {
                    return !("[object Number]" !== $(e) || V && "object" === n(e) && V in e)
                }(t))
                    return X(k(Number(t)));
                if (function(e) {
                    if (!e || "object" !== n(e) || !N)
                        return !1;
                    try {
                        return N.call(e),
                        !0
                    } catch (e) {}
                    return !1
                }(t))
                    return X(k(N.call(t)));
                if (function(e) {
                    return !("[object Boolean]" !== $(e) || V && "object" === n(e) && V in e)
                }(t))
                    return X(g.call(t));
                if (function(e) {
                    return !("[object String]" !== $(e) || V && "object" === n(e) && V in e)
                }(t))
                    return X(k(String(t)));
                if (!function(e) {
                    return !("[object Date]" !== $(e) || V && "object" === n(e) && V in e)
                }(t) && !F(t)) {
                    var le = ee(t, k)
                      , ue = R ? R(t) === Object.prototype : t instanceof Object || t.constructor === Object
                      , de = t instanceof Object ? "" : "null prototype"
                      , he = !ue && V && Object(t) === t && V in t ? E.call($(t), 8, -1) : de ? "Object" : ""
                      , pe = (ue || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (he || de ? "[" + T.call(C.call([], he || [], de || []), ": ") + "] " : "");
                    return 0 === le.length ? pe + "{}" : S ? pe + "{" + Q(le, S) + "}" : pe + "{ " + T.call(le, ", ") + " }"
                }
                return String(t)
            }
            ;
            var j = Object.prototype.hasOwnProperty || function(e) {
                return e in this
            }
            ;
            function z(e, t) {
                return j.call(e, t)
            }
            function $(e) {
                return m.call(e)
            }
            function K(e, t) {
                if (e.indexOf)
                    return e.indexOf(t);
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t)
                        return i;
                return -1
            }
            function q(e, t) {
                if (e.length > t.maxStringLength) {
                    var i = e.length - t.maxStringLength
                      , n = "... " + i + " more character" + (i > 1 ? "s" : "");
                    return q(E.call(e, 0, t.maxStringLength), t) + n
                }
                return W(y.call(y.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Y), "single", t)
            }
            function Y(e) {
                var t = e.charCodeAt(0)
                  , i = {
                    8: "b",
                    9: "t",
                    10: "n",
                    12: "f",
                    13: "r"
                }[t];
                return i ? "\\" + i : "\\x" + (t < 16 ? "0" : "") + v.call(t.toString(16))
            }
            function X(e) {
                return "Object(" + e + ")"
            }
            function J(e) {
                return e + " { ? }"
            }
            function Z(e, t, i, n) {
                return e + " (" + t + ") {" + (n ? Q(i, n) : T.call(i, ", ")) + "}"
            }
            function Q(e, t) {
                if (0 === e.length)
                    return "";
                var i = "\n" + t.prev + t.base;
                return i + T.call(e, "," + i) + "\n" + t.prev
            }
            function ee(e, t) {
                var i = U(e)
                  , n = [];
                if (i) {
                    n.length = e.length;
                    for (var o = 0; o < e.length; o++)
                        n[o] = z(e, o) ? t(e[o], e) : ""
                }
                var r, s = "function" == typeof S ? S(e) : [];
                if (A) {
                    r = {};
                    for (var a = 0; a < s.length; a++)
                        r["$" + s[a]] = s[a]
                }
                for (var c in e)
                    z(e, c) && (i && String(Number(c)) === c && c < e.length || A && r["$" + c]instanceof Symbol || (B.call(/[^\w$]/, c) ? n.push(t(c, e) + ": " + t(e[c], e)) : n.push(c + ": " + t(e[c], e))));
                if ("function" == typeof S)
                    for (var l = 0; l < s.length; l++)
                        P.call(e, s[l]) && n.push("[" + t(s[l]) + "]: " + t(e[s[l]], e));
                return n
            }
        },
        80342: function(e) {
            "use strict";
            var t = String.prototype.replace
              , i = /%20/g
              , n = "RFC1738"
              , o = "RFC3986";
            e.exports = {
                default: o,
                formatters: {
                    RFC1738: function(e) {
                        return t.call(e, i, "+")
                    },
                    RFC3986: function(e) {
                        return String(e)
                    }
                },
                RFC1738: n,
                RFC3986: o
            }
        },
        99113: function(e, t, i) {
            "use strict";
            var n = i(98157)
              , o = i(14738)
              , r = i(80342);
            e.exports = {
                formats: r,
                parse: o,
                stringify: n
            }
        },
        14738: function(e, t, i) {
            "use strict";
            var n = i(67247)
              , o = Object.prototype.hasOwnProperty
              , r = Array.isArray
              , s = {
                allowDots: !1,
                allowPrototypes: !1,
                allowSparse: !1,
                arrayLimit: 20,
                charset: "utf-8",
                charsetSentinel: !1,
                comma: !1,
                decoder: n.decode,
                delimiter: "&",
                depth: 5,
                ignoreQueryPrefix: !1,
                interpretNumericEntities: !1,
                parameterLimit: 1e3,
                parseArrays: !0,
                plainObjects: !1,
                strictNullHandling: !1
            }
              , a = function(e) {
                return e.replace(/&#(\d+);/g, (function(e, t) {
                    return String.fromCharCode(parseInt(t, 10))
                }
                ))
            }
              , c = function(e, t) {
                return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
            }
              , l = function(e, t, i, n) {
                if (e) {
                    var r = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e
                      , s = /(\[[^[\]]*])/g
                      , a = i.depth > 0 && /(\[[^[\]]*])/.exec(r)
                      , l = a ? r.slice(0, a.index) : r
                      , u = [];
                    if (l) {
                        if (!i.plainObjects && o.call(Object.prototype, l) && !i.allowPrototypes)
                            return;
                        u.push(l)
                    }
                    for (var d = 0; i.depth > 0 && null !== (a = s.exec(r)) && d < i.depth; ) {
                        if (d += 1,
                        !i.plainObjects && o.call(Object.prototype, a[1].slice(1, -1)) && !i.allowPrototypes)
                            return;
                        u.push(a[1])
                    }
                    return a && u.push("[" + r.slice(a.index) + "]"),
                    function(e, t, i, n) {
                        for (var o = n ? t : c(t, i), r = e.length - 1; r >= 0; --r) {
                            var s, a = e[r];
                            if ("[]" === a && i.parseArrays)
                                s = [].concat(o);
                            else {
                                s = i.plainObjects ? Object.create(null) : {};
                                var l = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a
                                  , u = parseInt(l, 10);
                                i.parseArrays || "" !== l ? !isNaN(u) && a !== l && String(u) === l && u >= 0 && i.parseArrays && u <= i.arrayLimit ? (s = [])[u] = o : "__proto__" !== l && (s[l] = o) : s = {
                                    0: o
                                }
                            }
                            o = s
                        }
                        return o
                    }(u, t, i, n)
                }
            };
            e.exports = function(e, t) {
                var i = function(e) {
                    if (!e)
                        return s;
                    if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder)
                        throw new TypeError("Decoder has to be a function.");
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var t = void 0 === e.charset ? s.charset : e.charset;
                    return {
                        allowDots: void 0 === e.allowDots ? s.allowDots : !!e.allowDots,
                        allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : s.allowPrototypes,
                        allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : s.allowSparse,
                        arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : s.arrayLimit,
                        charset: t,
                        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : s.charsetSentinel,
                        comma: "boolean" == typeof e.comma ? e.comma : s.comma,
                        decoder: "function" == typeof e.decoder ? e.decoder : s.decoder,
                        delimiter: "string" == typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : s.delimiter,
                        depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : s.depth,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : s.interpretNumericEntities,
                        parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : s.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : s.plainObjects,
                        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : s.strictNullHandling
                    }
                }(t);
                if ("" === e || null == e)
                    return i.plainObjects ? Object.create(null) : {};
                for (var u = "string" == typeof e ? function(e, t) {
                    var i, l = {}, u = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, d = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, h = u.split(t.delimiter, d), p = -1, f = t.charset;
                    if (t.charsetSentinel)
                        for (i = 0; i < h.length; ++i)
                            0 === h[i].indexOf("utf8=") && ("utf8=%E2%9C%93" === h[i] ? f = "utf-8" : "utf8=%26%2310003%3B" === h[i] && (f = "iso-8859-1"),
                            p = i,
                            i = h.length);
                    for (i = 0; i < h.length; ++i)
                        if (i !== p) {
                            var g, m, b = h[i], I = b.indexOf("]="), E = -1 === I ? b.indexOf("=") : I + 1;
                            -1 === E ? (g = t.decoder(b, s.decoder, f, "key"),
                            m = t.strictNullHandling ? null : "") : (g = t.decoder(b.slice(0, E), s.decoder, f, "key"),
                            m = n.maybeMap(c(b.slice(E + 1), t), (function(e) {
                                return t.decoder(e, s.decoder, f, "value")
                            }
                            ))),
                            m && t.interpretNumericEntities && "iso-8859-1" === f && (m = a(m)),
                            b.indexOf("[]=") > -1 && (m = r(m) ? [m] : m),
                            o.call(l, g) ? l[g] = n.combine(l[g], m) : l[g] = m
                        }
                    return l
                }(e, i) : e, d = i.plainObjects ? Object.create(null) : {}, h = Object.keys(u), p = 0; p < h.length; ++p) {
                    var f = h[p]
                      , g = l(f, u[f], i, "string" == typeof e);
                    d = n.merge(d, g, i)
                }
                return !0 === i.allowSparse ? d : n.compact(d)
            }
        },
        98157: function(e, t, i) {
            "use strict";
            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                n(e)
            }
            var o = i(54285)
              , r = i(67247)
              , s = i(80342)
              , a = Object.prototype.hasOwnProperty
              , c = {
                brackets: function(e) {
                    return e + "[]"
                },
                comma: "comma",
                indices: function(e, t) {
                    return e + "[" + t + "]"
                },
                repeat: function(e) {
                    return e
                }
            }
              , l = Array.isArray
              , u = String.prototype.split
              , d = Array.prototype.push
              , h = function(e, t) {
                d.apply(e, l(t) ? t : [t])
            }
              , p = Date.prototype.toISOString
              , f = s.default
              , g = {
                addQueryPrefix: !1,
                allowDots: !1,
                charset: "utf-8",
                charsetSentinel: !1,
                delimiter: "&",
                encode: !0,
                encoder: r.encode,
                encodeValuesOnly: !1,
                format: f,
                formatter: s.formatters[f],
                indices: !1,
                serializeDate: function(e) {
                    return p.call(e)
                },
                skipNulls: !1,
                strictNullHandling: !1
            }
              , m = {}
              , b = function e(t, i, s, a, c, d, p, f, b, I, E, y, v, _, B, C) {
                for (var T, x = t, w = C, N = 0, S = !1; void 0 !== (w = w.get(m)) && !S; ) {
                    var D = w.get(t);
                    if (N += 1,
                    void 0 !== D) {
                        if (D === N)
                            throw new RangeError("Cyclic object value");
                        S = !0
                    }
                    void 0 === w.get(m) && (N = 0)
                }
                if ("function" == typeof f ? x = f(i, x) : x instanceof Date ? x = E(x) : "comma" === s && l(x) && (x = r.maybeMap(x, (function(e) {
                    return e instanceof Date ? E(e) : e
                }
                ))),
                null === x) {
                    if (c)
                        return p && !_ ? p(i, g.encoder, B, "key", y) : i;
                    x = ""
                }
                if ("string" == typeof (T = x) || "number" == typeof T || "boolean" == typeof T || "symbol" === n(T) || "bigint" == typeof T || r.isBuffer(x)) {
                    if (p) {
                        var A = _ ? i : p(i, g.encoder, B, "key", y);
                        if ("comma" === s && _) {
                            for (var V = u.call(String(x), ","), P = "", R = 0; R < V.length; ++R)
                                P += (0 === R ? "" : ",") + v(p(V[R], g.encoder, B, "value", y));
                            return [v(A) + (a && l(x) && 1 === V.length ? "[]" : "") + "=" + P]
                        }
                        return [v(A) + "=" + v(p(x, g.encoder, B, "value", y))]
                    }
                    return [v(i) + "=" + v(String(x))]
                }
                var O, L = [];
                if (void 0 === x)
                    return L;
                if ("comma" === s && l(x))
                    O = [{
                        value: x.length > 0 ? x.join(",") || null : void 0
                    }];
                else if (l(f))
                    O = f;
                else {
                    var k = Object.keys(x);
                    O = b ? k.sort(b) : k
                }
                for (var M = a && l(x) && 1 === x.length ? i + "[]" : i, W = 0; W < O.length; ++W) {
                    var H = O[W]
                      , U = "object" === n(H) && void 0 !== H.value ? H.value : x[H];
                    if (!d || null !== U) {
                        var F = l(x) ? "function" == typeof s ? s(M, H) : M : M + (I ? "." + H : "[" + H + "]");
                        C.set(t, N);
                        var G = o();
                        G.set(m, C),
                        h(L, e(U, F, s, a, c, d, p, f, b, I, E, y, v, _, B, G))
                    }
                }
                return L
            };
            e.exports = function(e, t) {
                var i, r = e, u = function(e) {
                    if (!e)
                        return g;
                    if (null !== e.encoder && void 0 !== e.encoder && "function" != typeof e.encoder)
                        throw new TypeError("Encoder has to be a function.");
                    var t = e.charset || g.charset;
                    if (void 0 !== e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset)
                        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var i = s.default;
                    if (void 0 !== e.format) {
                        if (!a.call(s.formatters, e.format))
                            throw new TypeError("Unknown format option provided.");
                        i = e.format
                    }
                    var n = s.formatters[i]
                      , o = g.filter;
                    return ("function" == typeof e.filter || l(e.filter)) && (o = e.filter),
                    {
                        addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : g.addQueryPrefix,
                        allowDots: void 0 === e.allowDots ? g.allowDots : !!e.allowDots,
                        charset: t,
                        charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : g.charsetSentinel,
                        delimiter: void 0 === e.delimiter ? g.delimiter : e.delimiter,
                        encode: "boolean" == typeof e.encode ? e.encode : g.encode,
                        encoder: "function" == typeof e.encoder ? e.encoder : g.encoder,
                        encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : g.encodeValuesOnly,
                        filter: o,
                        format: i,
                        formatter: n,
                        serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : g.serializeDate,
                        skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : g.skipNulls,
                        sort: "function" == typeof e.sort ? e.sort : null,
                        strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : g.strictNullHandling
                    }
                }(t);
                "function" == typeof u.filter ? r = (0,
                u.filter)("", r) : l(u.filter) && (i = u.filter);
                var d, p = [];
                if ("object" !== n(r) || null === r)
                    return "";
                d = t && t.arrayFormat in c ? t.arrayFormat : t && "indices"in t ? t.indices ? "indices" : "repeat" : "indices";
                var f = c[d];
                if (t && "commaRoundTrip"in t && "boolean" != typeof t.commaRoundTrip)
                    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                var m = "comma" === f && t && t.commaRoundTrip;
                i || (i = Object.keys(r)),
                u.sort && i.sort(u.sort);
                for (var I = o(), E = 0; E < i.length; ++E) {
                    var y = i[E];
                    u.skipNulls && null === r[y] || h(p, b(r[y], y, f, m, u.strictNullHandling, u.skipNulls, u.encode ? u.encoder : null, u.filter, u.sort, u.allowDots, u.serializeDate, u.format, u.formatter, u.encodeValuesOnly, u.charset, I))
                }
                var v = p.join(u.delimiter)
                  , _ = !0 === u.addQueryPrefix ? "?" : "";
                return u.charsetSentinel && ("iso-8859-1" === u.charset ? _ += "utf8=%26%2310003%3B&" : _ += "utf8=%E2%9C%93&"),
                v.length > 0 ? _ + v : ""
            }
        },
        67247: function(e, t, i) {
            "use strict";
            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                n(e)
            }
            var o = i(80342)
              , r = Object.prototype.hasOwnProperty
              , s = Array.isArray
              , a = function() {
                for (var e = [], t = 0; t < 256; ++t)
                    e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                return e
            }()
              , c = function(e, t) {
                for (var i = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n)
                    void 0 !== e[n] && (i[n] = e[n]);
                return i
            };
            e.exports = {
                arrayToObject: c,
                assign: function(e, t) {
                    return Object.keys(t).reduce((function(e, i) {
                        return e[i] = t[i],
                        e
                    }
                    ), e)
                },
                combine: function(e, t) {
                    return [].concat(e, t)
                },
                compact: function(e) {
                    for (var t = [{
                        obj: {
                            o: e
                        },
                        prop: "o"
                    }], i = [], o = 0; o < t.length; ++o)
                        for (var r = t[o], a = r.obj[r.prop], c = Object.keys(a), l = 0; l < c.length; ++l) {
                            var u = c[l]
                              , d = a[u];
                            "object" === n(d) && null !== d && -1 === i.indexOf(d) && (t.push({
                                obj: a,
                                prop: u
                            }),
                            i.push(d))
                        }
                    return function(e) {
                        for (; e.length > 1; ) {
                            var t = e.pop()
                              , i = t.obj[t.prop];
                            if (s(i)) {
                                for (var n = [], o = 0; o < i.length; ++o)
                                    void 0 !== i[o] && n.push(i[o]);
                                t.obj[t.prop] = n
                            }
                        }
                    }(t),
                    e
                },
                decode: function(e, t, i) {
                    var n = e.replace(/\+/g, " ");
                    if ("iso-8859-1" === i)
                        return n.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(n)
                    } catch (e) {
                        return n
                    }
                },
                encode: function(e, t, i, r, s) {
                    if (0 === e.length)
                        return e;
                    var c = e;
                    if ("symbol" === n(e) ? c = Symbol.prototype.toString.call(e) : "string" != typeof e && (c = String(e)),
                    "iso-8859-1" === i)
                        return escape(c).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                            return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                        }
                        ));
                    for (var l = "", u = 0; u < c.length; ++u) {
                        var d = c.charCodeAt(u);
                        45 === d || 46 === d || 95 === d || 126 === d || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || s === o.RFC1738 && (40 === d || 41 === d) ? l += c.charAt(u) : d < 128 ? l += a[d] : d < 2048 ? l += a[192 | d >> 6] + a[128 | 63 & d] : d < 55296 || d >= 57344 ? l += a[224 | d >> 12] + a[128 | d >> 6 & 63] + a[128 | 63 & d] : (u += 1,
                        d = 65536 + ((1023 & d) << 10 | 1023 & c.charCodeAt(u)),
                        l += a[240 | d >> 18] + a[128 | d >> 12 & 63] + a[128 | d >> 6 & 63] + a[128 | 63 & d])
                    }
                    return l
                },
                isBuffer: function(e) {
                    return !(!e || "object" !== n(e)) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                },
                isRegExp: function(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e)
                },
                maybeMap: function(e, t) {
                    if (s(e)) {
                        for (var i = [], n = 0; n < e.length; n += 1)
                            i.push(t(e[n]));
                        return i
                    }
                    return t(e)
                },
                merge: function e(t, i, o) {
                    if (!i)
                        return t;
                    if ("object" !== n(i)) {
                        if (s(t))
                            t.push(i);
                        else {
                            if (!t || "object" !== n(t))
                                return [t, i];
                            (o && (o.plainObjects || o.allowPrototypes) || !r.call(Object.prototype, i)) && (t[i] = !0)
                        }
                        return t
                    }
                    if (!t || "object" !== n(t))
                        return [t].concat(i);
                    var a = t;
                    return s(t) && !s(i) && (a = c(t, o)),
                    s(t) && s(i) ? (i.forEach((function(i, s) {
                        if (r.call(t, s)) {
                            var a = t[s];
                            a && "object" === n(a) && i && "object" === n(i) ? t[s] = e(a, i, o) : t.push(i)
                        } else
                            t[s] = i
                    }
                    )),
                    t) : Object.keys(i).reduce((function(t, n) {
                        var s = i[n];
                        return r.call(t, n) ? t[n] = e(t[n], s, o) : t[n] = s,
                        t
                    }
                    ), a)
                }
            }
        },
        54285: function(e, t, i) {
            "use strict";
            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                n(e)
            }
            var o = i(88298)
              , r = i(66510)
              , s = i(78040)
              , a = o("%TypeError%")
              , c = o("%WeakMap%", !0)
              , l = o("%Map%", !0)
              , u = r("WeakMap.prototype.get", !0)
              , d = r("WeakMap.prototype.set", !0)
              , h = r("WeakMap.prototype.has", !0)
              , p = r("Map.prototype.get", !0)
              , f = r("Map.prototype.set", !0)
              , g = r("Map.prototype.has", !0)
              , m = function(e, t) {
                for (var i, n = e; null !== (i = n.next); n = i)
                    if (i.key === t)
                        return n.next = i.next,
                        i.next = e.next,
                        e.next = i,
                        i
            };
            e.exports = function() {
                var e, t, i, o = {
                    assert: function(e) {
                        if (!o.has(e))
                            throw new a("Side channel does not contain " + s(e))
                    },
                    get: function(o) {
                        if (c && o && ("object" === n(o) || "function" == typeof o)) {
                            if (e)
                                return u(e, o)
                        } else if (l) {
                            if (t)
                                return p(t, o)
                        } else if (i)
                            return function(e, t) {
                                var i = m(e, t);
                                return i && i.value
                            }(i, o)
                    },
                    has: function(o) {
                        if (c && o && ("object" === n(o) || "function" == typeof o)) {
                            if (e)
                                return h(e, o)
                        } else if (l) {
                            if (t)
                                return g(t, o)
                        } else if (i)
                            return function(e, t) {
                                return !!m(e, t)
                            }(i, o);
                        return !1
                    },
                    set: function(o, r) {
                        c && o && ("object" === n(o) || "function" == typeof o) ? (e || (e = new c),
                        d(e, o, r)) : l ? (t || (t = new l),
                        f(t, o, r)) : (i || (i = {
                            key: {},
                            next: null
                        }),
                        function(e, t, i) {
                            var n = m(e, t);
                            n ? n.value = i : e.next = {
                                key: t,
                                next: e.next,
                                value: i
                            }
                        }(i, o, r))
                    }
                };
                return o
            }
        },
        73303: function(e, t, i) {
            var n, o;
            function r(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function s(e, t) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return function(e, t) {
                        for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
                            var o = i[n]
                              , r = Object.getOwnPropertyDescriptor(t, o);
                            r && r.configurable && void 0 === e[o] && Object.defineProperty(e, o, r)
                        }
                    }(e, t),
                    e
                }
                ,
                s(e, t)
            }
            function a(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                e
            }
            var c = (0,
            i(3911).shortcut)()((o = function(e) {
                var t, i;
                function n() {
                    for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                        n[o] = arguments[o];
                    return a(r(t = e.call.apply(e, [this].concat(n)) || this), "props", {
                        baseCls: "dec-base-a",
                        text: "",
                        link: "/"
                    }),
                    a(r(t), "text", void 0),
                    t
                }
                i = e,
                (t = n).prototype = Object.create(i.prototype),
                t.prototype.constructor = t,
                s(t, i);
                var o = n.prototype;
                return o.render = function() {
                    var e = this
                      , t = this.options;
                    return BI.isFunction(this.__watch) && (t.text = BI.isFunction(t.text) ? this.__watch(t.text, (function(t, i) {
                        e.setText(i)
                    }
                    )) : t.text,
                    t.link = BI.isFunction(t.link) ? this.__watch(t.link, (function(t, i) {
                        e.setLink(i)
                    }
                    )) : t.link),
                    BI.h(BI.VerticalAdaptLayout, null, BI.h(BI.Text, {
                        ref: function(t) {
                            e.text = t
                        },
                        cls: "bi-high-light bi-high-light-border-bottom"
                    }, t.text))
                }
                ,
                o.setText = function(e) {
                    this.attr("text", e),
                    this.text.setText(e)
                }
                ,
                o.setLink = function(e) {
                    this.attr("link", e)
                }
                ,
                o.doClick = function() {
                    window.open(this.options.link)
                }
                ,
                n
            }(BI.BasicButton),
            a(o, "xtype", "dec.base.a"),
            n = o)) || n;
            BI.shortcut("dec.link.button", c)
        },
        73151: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-bubble-combo",
                    onClickConfirm: BI.emptyFn,
                    onCancel: BI.emptyFn,
                    offsetStyle: "left",
                    text: "",
                    el: {}
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.bubble_combo",
                        ref: function(t) {
                            e.combo = t
                        },
                        offsetStyle: t.offsetStyle,
                        el: t.el,
                        listeners: [{
                            eventName: BI.BubbleCombo.EVENT_BEFORE_POPUPVIEW,
                            action: function() {
                                e.popup.populate(BI.isFunction(t.text) ? t.text() : t.text)
                            }
                        }],
                        popup: {
                            type: "bi.text_bubble_bar_popup_view",
                            ref: function(t) {
                                e.popup = t
                            },
                            cls: "dec-bubble-combo-popup",
                            text: t.text,
                            listeners: [{
                                eventName: BI.BubblePopupBarView.EVENT_CLICK_TOOLBAR_BUTTON,
                                action: function(i) {
                                    i ? t.onClickConfirm.call(e) : e.hideView()
                                }
                            }]
                        },
                        stopPropagation: !0
                    }
                },
                showView: function() {
                    this.combo.showView()
                },
                hideView: function() {
                    this.combo.hideView()
                },
                getValue: function() {}
            }),
            BI.shortcut("dec.bubble.combo", e),
            BI.shortcut("dec.base.bubble_combo", e)
        },
        91252: function() {
            var e;
            e = BI.inherit(BI.BasicButton, {
                props: {
                    baseCls: "bi-line-segment-button bi-list-item-effect cursor-pointer",
                    once: !0,
                    readonly: !0,
                    hgap: 0,
                    height: 25
                },
                render: function() {
                    var e = this.options;
                    this.text = BI.createWidget({
                        type: "bi.label",
                        element: this,
                        text: e.text,
                        height: e.height,
                        value: e.value,
                        hgap: e.hgap
                    }),
                    this.line = BI.createWidget({
                        type: "bi.layout",
                        cls: "line-segment-button-line",
                        height: 2
                    }),
                    BI.createWidget({
                        type: "bi.absolute",
                        element: this,
                        items: [{
                            el: this.line,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }]
                    })
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments),
                    t ? this.line.element.addClass("bi-high-light-background") : this.line.element.removeClass("bi-high-light-background")
                },
                setText: function(t) {
                    e.superclass.setText.apply(this, arguments),
                    this.text.setText(t)
                },
                destroy: function() {
                    e.superclass.destroy.apply(this, arguments)
                }
            }),
            BI.shortcut("dec.line_segment_button", e),
            BI.shortcut("dec.base.linear_segment_button", e)
        },
        69338: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "decision-line-segment",
                    items: [],
                    height: 30,
                    layouts: [{
                        type: "bi.center"
                    }],
                    defaultValue: null
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    this.buttonGroup = BI.createWidget({
                        element: this,
                        type: "bi.button_group",
                        items: BI.createItems(i.items, {
                            type: "dec.line_segment_button",
                            $testId: "dec-line-segment-button",
                            height: i.height - 1,
                            hgap: i.itemHgap
                        }),
                        value: i.value,
                        layouts: i.layouts
                    }),
                    this.buttonGroup.on(BI.Controller.EVENT_CHANGE, (function() {
                        t.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                    }
                    )),
                    this.buttonGroup.on(BI.ButtonGroup.EVENT_CHANGE, (function(i, n) {
                        t.fireEvent(e.EVENT_CHANGE, i, n)
                    }
                    )),
                    BI.isNull(i.defaultValue) || this.setValue(i.defaultValue)
                },
                setValue: function(e) {
                    this.buttonGroup.setValue(e)
                },
                setEnabledValue: function(e) {
                    this.buttonGroup.setEnabledValue(e)
                },
                getValue: function() {
                    return this.buttonGroup.getValue()
                },
                populate: function(e) {
                    var t = this.options;
                    this.buttonGroup.populate(BI.createItems(e, {
                        type: "dec.line_segment_button",
                        height: t.height - 1,
                        hgap: t.itemHgap
                    }))
                }
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.line_segment", e),
            BI.shortcut("dec.base.linear_segment", e)
        },
        57703: function() {
            Dec.Msg = {},
            Dec.Msg.pop = function(e, t) {
                var i = BI.createWidget(e)
                  , n = BI.createWidget({
                    type: "bi.absolute",
                    cls: "dec-msg-wrapper bi-card bi-border",
                    items: [{
                        el: i,
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    }]
                }, t);
                i.on("EVENT_CLOSE", (function() {
                    n.destroy()
                }
                ));
                var o = $("body");
                BI.createWidget({
                    type: "bi.absolute",
                    element: o,
                    items: [{
                        el: n,
                        bottom: 20,
                        right: 20
                    }]
                }),
                BI.delay((function() {
                    n.destroy()
                }
                ), 1e4)
            }
            ,
            BI.extend(Dec.Msg, {
                customAlert: function(e, t, i) {
                    var n = BI.UUID();
                    BI.Popovers.create(n, {
                        type: "bi.bar_popover",
                        size: "small",
                        header: e,
                        body: {
                            type: "bi.center_adapt",
                            cls: "bi-custom-alert",
                            items: [{
                                type: "bi.icon_label",
                                cls: "warning-icon prompt-warning-font icon-size-50",
                                width: 80
                            }, {
                                type: "bi.text",
                                text: t,
                                lineHeight: 24,
                                whiteSpace: "normal",
                                textAlign: "left"
                            }]
                        },
                        footer: {
                            type: "bi.right_vertical_adapt",
                            lgap: 10,
                            items: [{
                                type: "bi.button",
                                text: BI.i18nText("BI-Basic_Sure"),
                                handler: function() {
                                    BI.isFunction(i) && i(!0),
                                    BI.Popovers.remove(n)
                                }
                            }]
                        }
                    }).open(n)
                }
            }),
            Dec.Msg.confirm = function(e) {
                var t = BI.UUID();
                e || (e = {}),
                BI.Popovers.create(t, {
                    type: "bi.bar_popover",
                    header: e.title || BI.i18nText("BI-Basic_Sure"),
                    size: e.size || "small",
                    body: {
                        type: "bi.label",
                        whiteSpace: "normal",
                        text: e.message
                    },
                    listeners: [{
                        eventName: BI.Popover.EVENT_CANCEL,
                        action: function() {
                            BI.isFunction(e.callback) && e.callback.apply(null, [!1])
                        }
                    }, {
                        eventName: BI.Popover.EVENT_CONFIRM,
                        action: function() {
                            BI.isFunction(e.callback) && e.callback.apply(null, [!0])
                        }
                    }]
                }, this).open(t)
            }
            ,
            Dec.Msg.alert = function(e) {
                var t = BI.UUID();
                e || (e = {}),
                BI.Popovers.create(t, {
                    type: "bi.bar_popover",
                    header: e.title || BI.i18nText("BI-Basic_Prompt"),
                    size: e.size || "small",
                    body: {
                        type: "bi.label",
                        whiteSpace: "normal",
                        text: e.message
                    },
                    footer: {
                        type: "bi.right_vertical_adapt",
                        lgap: 10,
                        items: [{
                            type: "bi.button",
                            text: e.text || BI.i18nText("BI-Basic_Sure"),
                            handler: function() {
                                BI.isFunction(e.callback) && e.callback.apply(null, [!0]),
                                BI.Popovers.remove(t)
                            }
                        }]
                    },
                    listeners: [{
                        eventName: BI.Popover.EVENT_CLOSE,
                        action: function() {
                            BI.isFunction(e.callback) && e.callback.apply(null)
                        }
                    }]
                }, this).open(t)
            }
        },
        60639: function(e, t, i) {
            var n, o;
            window,
            n = function() {
                var e = {};
                window.NProgress = e,
                e.version = "0.2.0";
                var t = e.settings = {
                    minimum: .08,
                    easing: "linear",
                    positionUsing: "",
                    speed: 200,
                    trickle: !0,
                    trickleSpeed: 200,
                    showSpinner: !1,
                    barSelector: '[role="bar"]',
                    spinnerSelector: '[role="spinner"]',
                    parent: "body",
                    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                };
                function i(e, t, i) {
                    return e < t ? t : e > i ? i : e
                }
                function n(e) {
                    return 100 * (-1 + e)
                }
                function o(e, i, o) {
                    var r;
                    return (r = "translate3d" === t.positionUsing ? {
                        transform: "translate3d(" + n(e) + "%,0,0)"
                    } : "translate" === t.positionUsing ? {
                        transform: "translate(" + n(e) + "%,0)"
                    } : {
                        "margin-left": n(e) + "%"
                    }).transition = "all " + i + "ms " + o,
                    r
                }
                e.configure = function(e) {
                    var i, n;
                    for (i in e)
                        void 0 !== (n = e[i]) && e.hasOwnProperty(i) && (t[i] = n);
                    return this
                }
                ,
                e.status = null;
                var r, s, a = function() {
                    var e = [];
                    function t() {
                        var i = e.shift();
                        i && i(t)
                    }
                    return function(i) {
                        e.push(i),
                        1 === e.length && t()
                    }
                }(), c = function() {
                    var e = ["Webkit", "O", "Moz", "ms"]
                      , t = {};
                    function i(e) {
                        return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, (function(e, t) {
                            return t.toUpperCase()
                        }
                        ))
                    }
                    function n(t) {
                        var i = document.body.style;
                        if (t in i)
                            return t;
                        for (var n, o = e.length, r = t.charAt(0).toUpperCase() + t.slice(1); o--; )
                            if ((n = e[o] + r)in i)
                                return n;
                        return t
                    }
                    function o(e) {
                        return e = i(e),
                        t[e] || (t[e] = n(e))
                    }
                    function r(e, t, i) {
                        t = o(t),
                        e.style[t] = i
                    }
                    return function(e, t) {
                        var i, n, o = arguments;
                        if (2 === o.length)
                            for (i in t)
                                void 0 !== (n = t[i]) && t.hasOwnProperty(i) && r(e, i, n);
                        else
                            r(e, o[1], o[2])
                    }
                }();
                function l(e) {
                    return (" " + (e && e.className || "") + " ").replace(/\s+/gi, " ")
                }
                function u(e, t) {
                    return ("string" == typeof e ? e : l(e)).indexOf(" " + t + " ") >= 0
                }
                function d(e, t) {
                    var i = l(e)
                      , n = i + t;
                    u(i, t) || (e.className = n.substring(1))
                }
                function h(e, t) {
                    var i, n = l(e);
                    u(e, t) && (i = n.replace(" " + t + " ", " "),
                    e.className = i.substring(1, i.length - 1))
                }
                function p(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }
                return e.set = function(n) {
                    var r = e.isStarted();
                    n = i(n, t.minimum, 1),
                    e.status = 1 === n ? null : n;
                    var s = e.render(!r)
                      , l = s.querySelector(t.barSelector)
                      , u = t.speed
                      , d = t.easing;
                    return s.offsetWidth,
                    a((function(i) {
                        "" === t.positionUsing && (t.positionUsing = e.getPositioningCSS()),
                        c(l, o(n, u, d)),
                        1 === n ? (c(s, {
                            transition: "none",
                            opacity: 1
                        }),
                        s.offsetWidth,
                        setTimeout((function() {
                            c(s, {
                                transition: "all " + u + "ms linear",
                                opacity: 0
                            }),
                            setTimeout((function() {
                                e.remove(),
                                i()
                            }
                            ), u)
                        }
                        ), u)) : setTimeout(i, u)
                    }
                    )),
                    this
                }
                ,
                e.isStarted = function() {
                    return "number" == typeof e.status
                }
                ,
                e.start = function() {
                    e.status || e.set(0);
                    var i = function i() {
                        setTimeout((function() {
                            e.status && (e.trickle(),
                            i())
                        }
                        ), t.trickleSpeed)
                    };
                    return t.trickle && i(),
                    this
                }
                ,
                e.done = function(t) {
                    return t || e.status ? e.inc(.3 + .5 * Math.random()).set(1) : this
                }
                ,
                e.inc = function(t) {
                    var n = e.status;
                    return n ? n > 1 ? void 0 : ("number" != typeof t && (t = n >= 0 && n < .2 ? .1 : n >= .2 && n < .5 ? .04 : n >= .5 && n < .8 ? .02 : n >= .8 && n < .99 ? .005 : 0),
                    n = i(n + t, 0, .994),
                    e.set(n)) : e.start()
                }
                ,
                e.trickle = function() {
                    return e.inc()
                }
                ,
                r = 0,
                s = 0,
                e.promise = function(t) {
                    return t && "resolved" !== t.state() ? (0 === s && e.start(),
                    r++,
                    s++,
                    t.always((function() {
                        0 == --s ? (r = 0,
                        e.done()) : e.set((r - s) / r)
                    }
                    )),
                    this) : this
                }
                ,
                e.render = function(i) {
                    if (e.isRendered())
                        return document.getElementById("nprogress");
                    d(document.documentElement, "nprogress-busy");
                    var o = document.createElement("div");
                    o.id = "nprogress",
                    o.innerHTML = t.template;
                    var r, s = o.querySelector(t.barSelector), a = i ? "-100" : n(e.status || 0), l = document.querySelector(t.parent);
                    return c(s, {
                        transition: "all 0 linear",
                        transform: "translate3d(" + a + "%,0,0)"
                    }),
                    t.showSpinner || (r = o.querySelector(t.spinnerSelector)) && p(r),
                    l !== document.body && d(l, "nprogress-custom-parent"),
                    l.appendChild(o),
                    o
                }
                ,
                e.remove = function() {
                    h(document.documentElement, "nprogress-busy"),
                    h(document.querySelector(t.parent), "nprogress-custom-parent");
                    var e = document.getElementById("nprogress");
                    e && p(e)
                }
                ,
                e.isRendered = function() {
                    return !!document.getElementById("nprogress")
                }
                ,
                e.getPositioningCSS = function() {
                    var e = document.body.style
                      , t = "WebkitTransform"in e ? "Webkit" : "MozTransform"in e ? "Moz" : "msTransform"in e ? "ms" : "OTransform"in e ? "O" : "";
                    return t + "Perspective"in e ? "translate3d" : t + "Transform"in e ? "translate" : "margin"
                }
                ,
                e
            }
            ,
            void 0 === (o = "function" == typeof n ? n.call(t, i, t, e) : n) || (e.exports = o)
        },
        83683: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-pager",
                    $testId: "dec-pager",
                    pages: 1,
                    count: 1,
                    curr: 1
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    this._currentPage = t.curr,
                    t.pages = t.pages < 1 ? 1 : t.pages;
                    var i = 1 === this._currentPage
                      , n = this._currentPage === t.pages;
                    return this.editor = BI.createWidget({
                        type: "bi.small_text_editor",
                        $testId: "bi-editor",
                        $value: "page",
                        cls: "pager-editor bi-border-radius",
                        vgap: 0,
                        value: t.curr,
                        validationChecker: function(e) {
                            return BI.isPositiveInteger(e)
                        },
                        errorText: BI.i18nText("BI-Please_Input_Positive_Integer"),
                        width: 50,
                        height: 24,
                        listeners: [{
                            eventName: BI.TextEditor.EVENT_CONFIRM,
                            action: function() {
                                BI.parseInt(this.getValue()) !== e.getCurrentPage() && e._setPage(BI.parseInt(this.getValue())),
                                e._onPageChange()
                            }
                        }]
                    }),
                    this.allPages = BI.createWidget({
                        type: "bi.label",
                        $testId: "dec-pager-all-count",
                        $value: t.pages,
                        height: 24,
                        textAlign: "left",
                        title: t.pages,
                        text: "/" + t.pages
                    }),
                    this.first = BI.createWidget({
                        type: "bi.icon_button",
                        $testId: "dec-pager-first",
                        disabled: i,
                        cls: "dec-pager-first-font dec-pager-button",
                        height: 24,
                        width: 24,
                        handler: function() {
                            e._setPage(1),
                            e._onPageChange()
                        }
                    }),
                    this.last = BI.createWidget({
                        type: "bi.icon_button",
                        $testId: "dec-pager-last",
                        disabled: n,
                        cls: "dec-pager-last-font dec-pager-button",
                        height: 24,
                        width: 24,
                        handler: function() {
                            e._setPage(t.pages),
                            e._onPageChange()
                        }
                    }),
                    this.next = BI.createWidget({
                        type: "bi.icon_button",
                        $testId: "dec-pager-next",
                        disabled: n,
                        cls: "dec-pager-next-font dec-pager-button",
                        height: 24,
                        width: 24,
                        handler: function() {
                            e._setPage(e._currentPage + 1),
                            e._onPageChange()
                        }
                    }),
                    this.prev = BI.createWidget({
                        type: "bi.icon_button",
                        $testId: "dec-pager-prev",
                        disabled: i,
                        cls: "dec-pager-prev-font dec-pager-button",
                        height: 24,
                        width: 24,
                        handler: function() {
                            e._setPage(e._currentPage - 1),
                            e._onPageChange()
                        }
                    }),
                    {
                        type: "bi.right_vertical_adapt",
                        rgap: 5,
                        items: [this.first, this.prev, this.editor, this.allPages, this.next, this.last]
                    }
                },
                _onPageChange: function() {
                    var e = this.options;
                    this.first.setEnable(!(1 === this._currentPage)),
                    this.prev.setEnable(!(1 === this._currentPage)),
                    this.next.setEnable(!(this._currentPage === e.pages)),
                    this.last.setEnable(!(this._currentPage === e.pages))
                },
                _setPage: function(t) {
                    t > this.getAllPages() || t < 1 ? this.setPage(this._currentPage) : (this._currentPage = t,
                    this._onPageChange(),
                    this.editor.setValue(t),
                    this.fireEvent(e.EVENT_CHANGE, this.getCurrentPage()))
                },
                setPage: function(e) {
                    e > this.getAllPages() || e < 1 || (this._currentPage = e,
                    this._onPageChange(),
                    this.editor.setValue(e))
                },
                getCurrentPage: function() {
                    return this._currentPage
                },
                setAllPages: function(e) {
                    e < 1 && (e = 1),
                    this.options.pages = e,
                    this.allPages.setText("/" + e),
                    this.allPages.setTitle(e),
                    this._onPageChange()
                },
                getAllPages: function() {
                    return this.options.pages
                },
                setCount: function(e) {
                    this.options.count = e
                }
            })).EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.pager", e)
        },
        79753: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-simple-pager",
                    pages: 1,
                    count: 1,
                    curr: 1
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return this._currentPage = t.curr,
                    this.curPages = BI.createWidget({
                        type: "bi.label",
                        height: 24,
                        textAlign: "left",
                        title: t.curr,
                        text: t.curr
                    }),
                    this.allPages = BI.createWidget({
                        type: "bi.label",
                        height: 24,
                        textAlign: "left",
                        title: t.pages,
                        text: "/ " + t.pages
                    }),
                    this.next = BI.createWidget({
                        type: "bi.icon_button",
                        disabled: t.pages <= 1,
                        cls: "row-next-page-h-font dec-pager-button",
                        height: 24,
                        width: 24,
                        handler: function() {
                            e._setPage(e._currentPage + 1),
                            e._onPageChange()
                        }
                    }),
                    this.prev = BI.createWidget({
                        type: "bi.icon_button",
                        disabled: !0,
                        cls: "row-pre-page-h-font dec-pager-button",
                        height: 24,
                        width: 24,
                        handler: function() {
                            e._setPage(e._currentPage - 1),
                            e._onPageChange()
                        }
                    }),
                    {
                        type: "bi.right_vertical_adapt",
                        rgap: 5,
                        items: [this.prev, this.curPages, this.allPages, this.next]
                    }
                },
                _onPageChange: function() {
                    var e = this.options;
                    this.curPages.setValue(this._currentPage),
                    this.prev.setEnable(!(1 === this._currentPage)),
                    this.next.setEnable(!(this._currentPage === e.pages))
                },
                _setPage: function(t) {
                    this._currentPage = t,
                    this._onPageChange(),
                    this.fireEvent(e.EVENT_CHANGE, this.getCurrentPage())
                },
                getCurrentPage: function() {
                    return this._currentPage
                },
                setAllPages: function(e) {
                    e < 1 && (e = 1),
                    this.options.pages = e,
                    this.allPages.setText("/ " + e),
                    this.allPages.setTitle(e),
                    this._onPageChange()
                },
                getAllPages: function() {
                    return this.options.pages
                },
                setCount: function(e) {
                    this.options.count = e
                }
            })).EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.simple_pager", e)
        },
        22416: function() {
            var e;
            e = BI.inherit(BI.Single, {
                props: {
                    baseCls: "dec-switch-button",
                    $testId: "dec-switch-button",
                    $value: "default",
                    width: 44,
                    height: 22,
                    value: !1
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    return {
                        type: "bi.switch",
                        ref: function() {
                            t.switchBtn = this
                        },
                        width: i.width,
                        height: i.height,
                        selected: i.value === e.ON,
                        handler: function() {
                            t.fireEvent(e.EVENT_CHANGE, t.getValue())
                        }
                    }
                },
                setValue: function(e) {
                    this.switchBtn.setSelected(e)
                },
                getValue: function() {
                    return this.switchBtn.isSelected()
                }
            }),
            BI.extend(e, {
                ON: !0,
                OFF: !1
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.switch_button", e),
            BI.shortcut("dec.base.switch", e)
        },
        68614: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-base-tree-expander",
                    layer: 0,
                    isLastNode: !1,
                    isFirstNode: !1,
                    selectable: !0,
                    el: {}
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = BI.extend({}, t.el, {
                        ref: function(i) {
                            BI.isFunction(t.el.ref) && t.el.ref.call(i, i),
                            e.trigger = i
                        },
                        forceNotSelected: !t.selectable,
                        listeners: (t.el.listeners || []).concat([{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function() {
                                t.selectable && e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                            }
                        }])
                    });
                    return {
                        type: "bi.expander",
                        ref: function(t) {
                            e.expander = t
                        },
                        value: t.value,
                        trigger: t.selectable ? "" : "click",
                        el: i,
                        popup: {
                            type: "dec.base.tree_expander.popup",
                            layer: t.layer || t.el.layer,
                            isLastNode: t.isLastNode || t.el.isLastNode,
                            isFirstNode: t.isFirstNode || t.el.isFirstNode,
                            el: t.popup
                        },
                        listeners: [{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function(t) {
                                e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                            }
                        }]
                    }
                },
                setValue: function(e) {
                    BI.contains(e, this.trigger.getValue()) ? (this.trigger.setSelected(!0),
                    this.expander.setValue(e)) : (this.trigger.setSelected(!1),
                    this.expander.setValue(e))
                },
                getValue: function() {
                    return this.trigger.isSelected() ? [this.trigger.getValue()] : this.expander.getValue()
                },
                populate: function(e) {
                    this.expander.populate(e)
                }
            }),
            BI.shortcut("dec.base.tree_expander", e)
        },
        69222: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-base-tree-expander-popup",
                    layer: 0,
                    el: {},
                    isLastNode: !1
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return this.popupView = BI.createWidget(t.el),
                    this.popupView.on(BI.Controller.EVENT_CHANGE, (function() {
                        e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                    }
                    )),
                    this.popupView.element.css("margin-left", -12 * t.layer),
                    this.element.css("margin-left", 12 * t.layer),
                    {
                        type: "bi.vertical",
                        cls: t.isLastNode ? "" : "line",
                        scrolly: null,
                        items: [this.popupView]
                    }
                },
                setValue: function(e) {
                    this.popupView.setValue(e)
                },
                getValue: function() {
                    return this.popupview.getValue()
                },
                populate: function(e) {
                    this.popupview.populate(e)
                }
            }),
            BI.shortcut("dec.base.tree_expander.popup", e)
        },
        36095: function() {
            Dec.TreeItem = BI.inherit(BI.BasicButton, {
                props: {
                    baseCls: "dec-base-tree-item bi-list-item-active2",
                    $testId: "dec-base-tree-item",
                    layer: 0,
                    id: "",
                    pId: "",
                    height: 24,
                    once: !0,
                    isFirstNode: !1,
                    isLastNode: !1
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: "bi.label",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        textHeight: t.height,
                        height: t.height,
                        hgap: t.hgap,
                        text: t.text,
                        value: t.value,
                        title: t.text,
                        keyword: t.keyword,
                        py: t.py
                    }
                      , n = [];
                    return n.push({
                        width: 24,
                        el: {
                            type: "bi.layout",
                            cls: BI.Services.getService("dec.service.tree").getLineCls(t),
                            width: 24,
                            height: t.height
                        },
                        lgap: 12 * t.layer
                    }),
                    n.push({
                        el: i,
                        height: t.height
                    }),
                    {
                        type: "bi.htape",
                        ref: function(t) {
                            e.container = t
                        },
                        items: n
                    }
                },
                getValue: function() {
                    return this.options.id
                }
            }),
            BI.shortcut("dec.base.tree_item", Dec.TreeItem)
        },
        51726: function() {
            Dec.TreeNode = BI.inherit(BI.NodeButton, {
                props: {
                    extraCls: "bi-list-item-active2",
                    $testId: "dec-base-tree-node",
                    layer: 0,
                    id: "",
                    pId: "",
                    open: !1,
                    height: 24,
                    once: !0,
                    isFirstNode: !1,
                    isLastNode: !1
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: BI.Services.getService("dec.service.tree").getNodeCheckboxType(t),
                        $testId: "dec-tree-node-icon",
                        stopPropagation: !0,
                        ref: function(t) {
                            e.checkbox = t
                        },
                        listeners: [{
                            eventName: "EVENT_CHANGE",
                            action: function() {
                                this.isSelected() ? e.triggerExpand() : e.triggerCollapse()
                            }
                        }]
                    }
                      , n = {
                        type: "bi.label",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        textHeight: t.height,
                        height: t.height,
                        hgap: t.hgap,
                        text: t.text,
                        title: t.text,
                        value: t.value,
                        keyword: t.keyword,
                        py: t.py
                    }
                      , o = [];
                    return o.push({
                        el: i,
                        width: 24,
                        height: t.height,
                        lgap: 12 * t.layer
                    }),
                    o.push({
                        el: n,
                        height: t.height
                    }),
                    {
                        type: "bi.htape",
                        ref: function(t) {
                            e.container = t
                        },
                        items: o
                    }
                },
                doClick: function() {},
                getValue: function() {
                    return this.options.id
                },
                setOpened: function(e) {
                    Dec.TreeNode.superclass.setOpened.apply(this, arguments),
                    BI.isNotNull(this.checkbox) && this.checkbox.setSelected(e)
                }
            }),
            BI.shortcut("dec.base.tree_node", Dec.TreeNode)
        },
        37649: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-components-login-last",
                    $testId: "dec-system-login-last",
                    time: "2017-08-01 12:30:23",
                    ip: "255.255.0.0",
                    address: BI.i18nText("Dec-System_Login_Location")
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vtape",
                        cls: "bi-border",
                        height: 170,
                        width: 300,
                        items: [{
                            type: "bi.htape",
                            cls: "info-example-header bi-border-bottom",
                            items: [{
                                type: "bi.label",
                                textAlign: "left",
                                text: BI.i18nText("Dec-Msg-New_Message"),
                                _lgap: 10,
                                height: 36
                            }, {
                                type: "bi.icon_button",
                                cls: "close-font",
                                width: 30,
                                height: 36,
                                handler: function() {
                                    e.fireEvent("EVENT_CLOSE")
                                }
                            }],
                            height: 36
                        }, {
                            type: "bi.vertical",
                            _lgap: 56,
                            items: [{
                                type: "bi.icon_text_item",
                                logic: {
                                    dynamic: !0
                                },
                                cls: "time-tip time-tip-font",
                                _bgap: 10,
                                _tgap: 15,
                                _lgap: 4,
                                iconWidth: 30,
                                height: 30,
                                textLgap: 10,
                                text: BI.i18nText("Dec-System_Login_Last")
                            }, {
                                type: "bi.vertical_adapt",
                                height: 20,
                                items: [{
                                    type: "bi.label",
                                    width: 68,
                                    textAlign: "left",
                                    text: BI.i18nText("Dec-Basic_Time") + ":"
                                }, {
                                    type: "bi.label",
                                    text: t.time
                                }]
                            }, {
                                type: "bi.vertical_adapt",
                                height: 20,
                                invisible: BI.isEmpty(t.ip),
                                items: [{
                                    type: "bi.label",
                                    width: 68,
                                    textAlign: "left",
                                    text: BI.i18nText("Dec-Basic_IP") + ":"
                                }, {
                                    type: "bi.label",
                                    text: t.ip
                                }]
                            }, {
                                type: "bi.vertical_adapt",
                                height: 20,
                                invisible: BI.isEmpty(t.address),
                                items: [{
                                    type: "bi.label",
                                    width: 68,
                                    textAlign: "left",
                                    text: BI.i18nText("Dec-Basic_Location") + ":"
                                }, {
                                    type: "bi.label",
                                    text: t.address
                                }]
                            }]
                        }]
                    }
                }
            }),
            BI.shortcut("dec.components.login.last.info", e)
        },
        8375: function() {
            BI.constant("dec.constant.password.strength", [{
                id: "passwordLengthLimit",
                cardType: "dec.system.login.policies.strength.length",
                text: function(e) {
                    return BI.i18nText("Dec-System_Password_Strength_Length_More", e.passwordLength)
                },
                check: function(e, t) {
                    return e.length >= t.passwordLength
                }
            }, {
                id: "includeNumbers",
                text: BI.i18nText("Dec-System_Password_Strength_Contain_Digit"),
                check: function(e) {
                    return /\d+/.test(e)
                }
            }, {
                id: "includeLowercaseLetters",
                text: BI.i18nText("Dec-System_Password_Strength_Contain_Lowercase"),
                check: function(e) {
                    return /[a-z]+/.test(e)
                }
            }, {
                id: "includeCapitalLetters",
                text: BI.i18nText("Dec-System_Password_Strength_Contain_Capital"),
                check: function(e) {
                    return /[A-Z]+/.test(e)
                }
            }, {
                id: "includeSymbol",
                text: BI.i18nText("Dec-System_Password_Strength_Contain_Symbol"),
                check: function(e) {
                    return /[^a-zA-Z0-9]+/.test(e)
                }
            }, {
                id: "excludeUsername",
                text: BI.i18nText("Dec-System_Password_Strength_Not_Contain_Username"),
                check: function(e, t) {
                    var i = BI.isFunction(t.username) ? t.username() : t.username;
                    return BI.isKey(e) && -1 === BI.toLowerCase(e).indexOf(BI.toLowerCase(i))
                }
            }])
        },
        26008: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-password-strength-item",
                    text: ""
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vertical_adapt",
                        items: [{
                            type: "bi.icon_change_button",
                            iconCls: "password-check-font",
                            iconHeight: 16,
                            ref: function(t) {
                                e.icon = t
                            }
                        }, {
                            type: "bi.label",
                            height: 16,
                            lgap: 5,
                            text: t.text,
                            title: t.text
                        }]
                    }
                },
                changeIcon: function(e) {
                    this.icon.setIcon(e ? "password-check-success-font" : "password-check-font")
                }
            }),
            BI.shortcut("dec.password.strength.item", e)
        },
        46817: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-password-strength",
                    $testId: "dec-password-strength",
                    adjustHeight: 0,
                    username: "",
                    strength: !0
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.password.strength", this.options)
                },
                watch: {
                    password: function(e) {
                        var t = this
                          , i = this.model.checkOptions;
                        BI.each(this.model.needCheckItems, (function(n, o) {
                            t[o.id].changeIcon(o.check(e, i))
                        }
                        ))
                    }
                },
                beforeInit: function(e) {
                    this.store.initPage(e)
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = (26 * this.model.checkItemsLength + 12 - t.adjustHeight) / 2;
                    return {
                        type: "bi.combo",
                        invisible: 0 === this.model.checkItemsLength,
                        hideChecker: function() {
                            return !1
                        },
                        el: {
                            type: "bi.default"
                        },
                        popup: {
                            el: {
                                type: "bi.absolute",
                                items: [{
                                    el: {
                                        type: "bi.vertical",
                                        cls: "list-view-shadow bi-card",
                                        vgap: 10,
                                        hgap: 15,
                                        items: BI.map(this.model.needCheckItems, (function(t, i) {
                                            return {
                                                type: "dec.password.strength.item",
                                                height: 16,
                                                text: BI.isFunction(i.text) ? i.text(e.model.checkOptions) : i.text,
                                                ref: function(t) {
                                                    e[i.id] = t
                                                }
                                            }
                                        }
                                        ))
                                    },
                                    top: -i
                                }, {
                                    el: {
                                        type: "bi.center_adapt",
                                        cls: "triangle-wrapper",
                                        items: [{
                                            type: "bi.layout",
                                            cls: "bubble-combo-triangle-left"
                                        }]
                                    },
                                    top: t.adjustHeight / 2 - 5,
                                    left: -5
                                }]
                            }
                        },
                        ref: function(t) {
                            e.combo = t
                        }
                    }
                },
                setPassword: function(e) {
                    this.store.setPassword(e)
                },
                isValid: function() {
                    return !this.options.strength || this.model.isValid
                },
                showView: function() {
                    this.options.strength && this.combo.showView()
                },
                hideView: function() {
                    this.combo.hideView()
                }
            }),
            BI.shortcut("dec.password.strength", e)
        },
        84099: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                state: function() {
                    return {
                        passwordStrength: {},
                        password: ""
                    }
                },
                computed: {
                    needCheckItems: function() {
                        var e = this;
                        return this.model.passwordStrength.passwordStrengthLimit ? BI.filter(BI.Constants.getConstant("dec.constant.password.strength"), (function(t, i) {
                            return e.model.passwordStrength[i.id]
                        }
                        )) : []
                    },
                    checkItemsLength: function() {
                        return BI.size(this.model.needCheckItems)
                    },
                    checkOptions: function() {
                        return BI.extend({
                            passwordLength: this.model.passwordStrength.passwordLength,
                            username: this.options.username
                        }, BI.Providers.getProvider("dec.provider.password.strength").getStrengthParams())
                    },
                    isValid: function() {
                        var e = this.model.password
                          , t = this.model.checkOptions;
                        return !BI.some(this.model.needCheckItems, (function(i, n) {
                            return !n.check(e, t)
                        }
                        ))
                    }
                },
                actions: {
                    initPage: function(e) {
                        var t = this;
                        Dec.Utils.getLoginPasswordStrategy((function(i) {
                            t.model.passwordStrength = i,
                            e()
                        }
                        ))
                    },
                    setPassword: function(e) {
                        this.model.password = e
                    }
                }
            }),
            BI.model("dec.model.password.strength", e)
        },
        10028: function() {
            var e;
            e = {},
            BI.provider("dec.provider.password.strength", (function() {
                this.addStrengthLimit = function(t, i) {
                    BI.config("dec.constant.password.strength", (function(e) {
                        return e.push(t),
                        e
                    }
                    )),
                    BI.extend(e, i)
                }
                ,
                this.$get = function() {
                    return BI.inherit(BI.OB, {
                        getStrengthParams: function() {
                            return e
                        }
                    })
                }
            }
            ))
        },
        12387: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-bread-crumb",
                    $testId: "dec-common-bread-crumb",
                    items: [],
                    separator: {}
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return this.items = this.options.items,
                    {
                        type: "bi.button_group",
                        ref: function(t) {
                            e.group = t
                        },
                        items: this._createItems(t.items),
                        layouts: [{
                            type: "bi.vertical_adapt",
                            hgap: 10
                        }],
                        listeners: [{
                            eventName: "EVENT_CHANGE",
                            action: function(t) {
                                e._handleSelect(t)
                            }
                        }]
                    }
                },
                _handleSelect: function(e) {
                    BI.some(this.items, (function(t, i) {
                        if (i.value === e)
                            return this.items = this.items.slice(0, t + 1),
                            !0
                    }
                    ), this),
                    this._populate(this.items),
                    this.fireEvent("EVENT_CHANGE", e)
                },
                _createItems: function(e) {
                    var t = this
                      , i = []
                      , n = e.length;
                    return BI.each(e, (function(e, o) {
                        e !== n - 1 ? (i.push(BI.extend({
                            type: "bi.text_item"
                        }, o)),
                        i.push(BI.extend({
                            type: "bi.text",
                            text: "/",
                            disabled: !0
                        }, t.options.separator))) : i.push(BI.extend({
                            type: "bi.text_item",
                            disabled: !0
                        }, o))
                    }
                    )),
                    i
                },
                _populate: function(e) {
                    this.group.populate(this._createItems(e))
                },
                getValue: function() {},
                populate: function(e) {
                    this._populate(e)
                }
            }),
            BI.shortcut("dec.common.breadcrumb", e)
        },
        68295: function(e, t, i) {
            var n, o;
            function r(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function s(e, t) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return function(e, t) {
                        for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
                            var o = i[n]
                              , r = Object.getOwnPropertyDescriptor(t, o);
                            r && r.configurable && void 0 === e[o] && Object.defineProperty(e, o, r)
                        }
                    }(e, t),
                    e
                }
                ,
                s(e, t)
            }
            function a(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                e
            }
            var c = (0,
            i(3911).shortcut)()((o = function(e) {
                var t, i;
                function n() {
                    for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                        n[o] = arguments[o];
                    return a(r(t = e.call.apply(e, [this].concat(n)) || this), "props", {
                        baseCls: "dec-component-error-bubble-container",
                        el: {}
                    }),
                    t
                }
                i = e,
                (t = n).prototype = Object.create(i.prototype),
                t.prototype.constructor = t,
                s(t, i);
                var o = n.prototype;
                return o.mounted = function() {
                    var e = this;
                    BI.$(document).on("mousedown.".concat(this.getName()), (function() {
                        BI.Bubbles.hide(e.getName())
                    }
                    ))
                }
                ,
                o.render = function() {
                    var e = this.options.el;
                    return BI.h(BI.AdaptiveLayout, null, e)
                }
                ,
                o.beforeDestroy = function() {
                    this.hideError(),
                    BI.$(document).off("mousedown.".concat(this.getName()))
                }
                ,
                o.showError = function(e) {
                    e && BI.Bubbles.show(this.getName(), e, this)
                }
                ,
                o.hideError = function() {
                    BI.Bubbles.hide(this.getName())
                }
                ,
                n
            }(BI.Widget),
            a(o, "xtype", "dec.component.error_bubble_container"),
            n = o)) || n;
            BI.shortcut("dec.error_label", c)
        },
        75203: function() {
            var e;
            e = BI.inherit(BI.BasicButton, {
                props: {
                    baseCls: "dec-common-card-img-button bi-list-item-active2",
                    $testId: "dec-common-card-img-button",
                    width: 245,
                    height: 200,
                    value: "",
                    once: !0,
                    imgSrc: "",
                    footer: null,
                    iconWidth: null,
                    iconHeight: null
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = t.footer ? t.height - t.footer.height : t.height;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.vtape",
                                items: [{
                                    type: "bi.center_adapt",
                                    items: [{
                                        type: "bi.img",
                                        src: t.imgSrc,
                                        width: t.iconWidth || t.width,
                                        height: t.iconHeight || i
                                    }],
                                    height: i
                                }, t.footer]
                            },
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        }, {
                            el: {
                                type: "bi.layout",
                                ref: function(t) {
                                    e.selectBg = t
                                },
                                invisible: !t.selected,
                                cls: "dec-block-item-triangle-active",
                                height: 30,
                                width: 30
                            },
                            top: 0,
                            right: 0
                        }]
                    }
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments),
                    this.selectBg.setVisible(t)
                },
                getValue: function() {
                    return this.options.value
                }
            }),
            BI.shortcut("dec.common.card.img_button", e)
        },
        56750: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-card-delete-img-button bi-list-item-active2",
                    $testId: "dec-common-card-delete-img-button",
                    width: 245,
                    height: 200,
                    value: "",
                    once: !0,
                    imgSrc: "",
                    footer: null,
                    iconWidth: null,
                    iconHeight: null
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = t.footer ? t.height - t.footer.height : t.height;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.vtape",
                                items: [{
                                    type: "bi.center_adapt",
                                    items: [{
                                        type: "bi.img",
                                        src: t.imgSrc,
                                        width: t.iconWidth || t.width,
                                        height: t.iconHeight || i
                                    }],
                                    height: i
                                }, t.footer]
                            },
                            top: 0,
                            right: 0,
                            left: 0,
                            bottom: 0
                        }, {
                            el: {
                                type: "bi.icon_button",
                                $value: "delete-" + t.value,
                                ref: function(t) {
                                    e.button = t
                                },
                                cls: "widget-close-font",
                                height: 30,
                                width: 30,
                                bubble: BI.i18nText("Dec-Appearance_Entry_Image_Delete_Confirm"),
                                handler: function() {
                                    e.fireEvent(BI.Controller.EVENT_CHANGE, BI.Events.CLICK, e.getValue())
                                }
                            },
                            top: 0,
                            right: 0
                        }]
                    }
                },
                isSelected: function() {
                    return this.button.isSelected()
                },
                setSelected: function(e) {
                    this.button.setSelected(e)
                },
                getValue: function() {
                    return this.options.value
                }
            }),
            BI.shortcut("dec.common.card.delete_img_button", e)
        },
        51056: function() {
            var e;
            e = BI.inherit(BI.BasicButton, {
                props: {
                    baseCls: "dec-common-icon-card-button bi-list-item-active",
                    $testId: "dec-common-icon-card-button",
                    width: 60,
                    height: 60,
                    iconWidth: 24,
                    iconHeight: 24
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.center_adapt",
                                cls: t.iconCls,
                                items: [{
                                    type: "bi.icon",
                                    width: t.iconWidth,
                                    height: t.iconHeight
                                }]
                            },
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }, {
                            el: {
                                type: "bi.layout",
                                ref: function(t) {
                                    e.selectBg = t
                                },
                                invisible: !t.selected,
                                cls: "dec-block-item-triangle-active",
                                height: 30,
                                width: 30
                            },
                            top: 0,
                            right: 0
                        }],
                        width: t.width,
                        height: t.height
                    }
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments),
                    this.selectBg.setVisible(t)
                }
            }),
            BI.shortcut("dec.common.card.icon_button", e)
        },
        83965: function() {
            var e;
            e = BI.inherit(BI.BasicButton, {
                props: {
                    baseCls: "dec-common-icon-text-item",
                    $testId: "dec-common-icon-text-item",
                    height: 36,
                    iconWrapWidth: null
                },
                render: function() {
                    var e = this.options
                      , t = {
                        type: "bi.center_adapt",
                        height: e.height,
                        width: e.height,
                        cls: "platform-node-icon " + e.iconCls,
                        items: [{
                            type: "bi.icon",
                            height: 16,
                            width: 16
                        }]
                    }
                      , i = {
                        type: "bi.label",
                        textAlign: "left",
                        cls: "dec-frame-text",
                        text: e.text,
                        height: e.height,
                        title: e.textTitle || e.text
                    }
                      , n = [];
                    return n.push({
                        type: "bi.layout",
                        width: 10,
                        height: e.height
                    }),
                    n.push({
                        el: t,
                        height: e.height,
                        width: e.height
                    }),
                    n.push({
                        el: i,
                        height: e.height
                    }),
                    {
                        type: "bi.htape",
                        scrollable: !1,
                        items: n
                    }
                },
                getValue: function() {
                    return this.options.id || this.options.value
                }
            }),
            BI.shortcut("dec.common.icon_text_item", e)
        },
        16049: function() {
            var e;
            e = BI.inherit(BI.BasicButton, {
                props: {
                    baseCls: "dec-common-img-icon-text-item",
                    $testId: "dec-common-img-icon-text-item",
                    layer: 0,
                    id: "",
                    height: 36,
                    icon: "",
                    cover: "",
                    hgap: 10
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: "bi.label",
                        textAlign: "left",
                        cls: "dec-frame-text",
                        whiteSpace: "nowrap",
                        height: t.height,
                        text: t.text,
                        title: t.textTitle || t.text,
                        value: t.value
                    }
                      , n = [];
                    return n.push({
                        lgap: t.hgap,
                        width: 24 * t.layer,
                        el: {
                            type: "bi.layout",
                            height: t.height
                        }
                    }),
                    n.push({
                        width: 30,
                        lgap: 16,
                        el: {
                            type: "dec.common.icon_item",
                            ref: function(t) {
                                e.icon = t
                            },
                            iconWidth: 16,
                            iconHeight: 16,
                            width: 30,
                            icon: t.iconCls,
                            height: t.height
                        }
                    }),
                    n.push({
                        el: i,
                        rgap: t.hgap,
                        height: t.height
                    }),
                    {
                        type: "bi.htape",
                        items: n
                    }
                },
                getValue: function() {
                    return this.options.id
                }
            }),
            BI.shortcut("dec.common.img.icon_text_item", e)
        },
        92978: function() {
            var e;
            e = BI.inherit(BI.NodeButton, {
                props: {
                    baseCls: "dec-common-img-icon-text-node",
                    $testId: "dec-common-img-icon-text-node",
                    layer: 0,
                    id: "",
                    height: 36,
                    icon: "",
                    cover: "",
                    hgap: 10
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: "bi.center_adapt",
                        cls: "platform-node-arrow",
                        items: [{
                            el: {
                                type: "bi.icon_change_button",
                                ref: function(t) {
                                    e.arrow = t
                                },
                                iconCls: t.open ? "triangle-expand-font" : "triangle-collapse-font",
                                height: 16,
                                width: 16
                            }
                        }]
                    }
                      , n = {
                        type: "bi.label",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        height: t.height,
                        text: t.text,
                        title: t.textTitle || t.text,
                        value: t.value
                    }
                      , o = [];
                    return o.push({
                        width: 24 * t.layer,
                        lgap: t.hgap,
                        el: {
                            type: "bi.layout",
                            height: t.height
                        }
                    }),
                    o.push({
                        width: 16,
                        el: i
                    }),
                    o.push({
                        width: 30,
                        el: {
                            type: "dec.common.icon_item",
                            ref: function(t) {
                                e.icon = t
                            },
                            iconWidth: 16,
                            iconHeight: 16,
                            width: 30,
                            icon: t.iconCls,
                            height: t.height
                        }
                    }),
                    o.push({
                        el: n,
                        rgap: t.hgap,
                        height: t.height
                    }),
                    {
                        type: "bi.htape",
                        items: o
                    }
                },
                getValue: function() {
                    return this.options.id
                },
                setOpened: function(t) {
                    e.superclass.setOpened.apply(this, arguments),
                    this.arrow.setIcon(t ? "triangle-expand-font" : "triangle-collapse-font")
                }
            }),
            BI.shortcut("dec.common.img.icon_text_node", e)
        },
        36148: function() {
            var e;
            e = BI.inherit(BI.NodeButton, {
                props: {
                    baseCls: "dec-common-img-icon-text-node dec-common-img-icon-text-select-node",
                    $testId: "dec-common-img-icon-text-node",
                    layer: 0,
                    id: "",
                    height: 36,
                    icon: "",
                    cover: "",
                    hgap: 10
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: "bi.center_adapt",
                        cls: "platform-node-arrow",
                        items: [{
                            el: {
                                type: "bi.icon_change_button",
                                ref: function(t) {
                                    e.arrow = t
                                },
                                iconCls: t.open ? "triangle-expand-font" : "triangle-collapse-font",
                                height: 16,
                                width: 16
                            }
                        }]
                    }
                      , n = {
                        type: "bi.label",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        cls: "dec-frame-text",
                        height: t.height,
                        text: t.text,
                        title: t.textTitle || t.text,
                        value: t.value
                    }
                      , o = [];
                    return o.push({
                        width: 16,
                        el: i,
                        lgap: 24 * t.layer + t.hgap
                    }),
                    o.push({
                        width: 30,
                        el: {
                            type: "dec.common.icon_item",
                            ref: function(t) {
                                e.icon = t
                            },
                            iconWidth: 16,
                            iconHeight: 16,
                            width: 30,
                            icon: t.iconCls,
                            height: t.height
                        }
                    }),
                    o.push({
                        el: n,
                        rgap: t.hgap,
                        height: t.height
                    }),
                    {
                        type: "bi.htape",
                        items: o
                    }
                },
                doClick: function() {
                    this.isOpened() ? this.triggerCollapse() : this.triggerExpand()
                },
                getValue: function() {
                    return this.options.id
                },
                setOpened: function(t) {
                    e.superclass.setOpened.apply(this, arguments),
                    this.arrow.setIcon(t ? "triangle-expand-font" : "triangle-collapse-font")
                }
            }),
            BI.shortcut("dec.common.img.select_icon_text_node", e)
        },
        14175: function(e, t, i) {
            var n, o;
            function r(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function s(e, t) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return function(e, t) {
                        for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
                            var o = i[n]
                              , r = Object.getOwnPropertyDescriptor(t, o);
                            r && r.configurable && void 0 === e[o] && Object.defineProperty(e, o, r)
                        }
                    }(e, t),
                    e
                }
                ,
                s(e, t)
            }
            function a(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                e
            }
            var c = (0,
            i(3911).shortcut)()((o = function(e) {
                var t, i;
                function n() {
                    for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                        n[o] = arguments[o];
                    return a(r(t = e.call.apply(e, [this].concat(n)) || this), "props", {
                        baseCls: "dec-common-image-button",
                        width: 100,
                        height: 100,
                        imgCls: "",
                        imgSrc: "",
                        text: "",
                        items: [BI.h(BI.Fragment, null)],
                        handler: BI.emptyFn
                    }),
                    t
                }
                return i = e,
                (t = n).prototype = Object.create(i.prototype),
                t.prototype.constructor = t,
                s(t, i),
                n.prototype.render = function() {
                    var e = this.options
                      , t = e.width
                      , i = e.height
                      , n = e.imgCls
                      , o = e.imgSrc
                      , r = e.text
                      , s = e.items
                      , a = r ? BI.h(BI.Label, null, r) : s[0];
                    return n ? BI.h(BI.AbsoluteLayout, {
                        cls: n,
                        width: t,
                        height: i
                    }, BI.h(BI.Icon, {
                        width: t,
                        height: i
                    }), BI.h("el", {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, a)) : (o && BI.h(BI.AbsoluteLayout, {
                        width: t,
                        height: i
                    }, BI.h(BI.Img, {
                        width: t,
                        height: i,
                        src: Dec.resourceURL + o
                    }), BI.h("el", {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, a)),
                    BI.h(BI.TextButton, {
                        width: t,
                        height: i
                    }, r))
                }
                ,
                n
            }(BI.BasicButton),
            a(o, "xtype", "dec.common.image_button"),
            n = o)) || n
        },
        23235: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-card bi-card",
                    headerHeight: 40,
                    content: {
                        type: "bi.label",
                        text: "content"
                    },
                    contentPos: {
                        top: 15,
                        left: 10,
                        right: 10,
                        bottom: 15
                    },
                    text: "",
                    showButtons: !0,
                    bgap: null
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.htape",
                                cls: "bi-border-bottom",
                                height: t.headerHeight,
                                items: [{
                                    type: "bi.label",
                                    textAlign: "left",
                                    text: t.text,
                                    height: t.headerHeight
                                }, {
                                    type: "bi.center_adapt",
                                    invisible: !t.showButtons,
                                    items: [{
                                        type: "bi.button",
                                        $value: t.$value || t.text,
                                        text: BI.i18nText("BI-Basic_Save"),
                                        height: 24,
                                        handler: function() {
                                            e.fireEvent("EVENT_CHANGE")
                                        }
                                    }],
                                    width: 100
                                }]
                            },
                            top: 0,
                            left: 10,
                            right: 10
                        }, {
                            el: {
                                type: "bi.absolute",
                                items: [BI.extend({
                                    el: t.content,
                                    top: 15,
                                    left: 10,
                                    right: 10,
                                    bottom: 15
                                }, t.contentPos)]
                            },
                            top: t.headerHeight,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }]
                    }
                }
            }),
            BI.shortcut("dec.card", e)
        },
        62862: function(e, t, i) {
            var n, o, r = i(3911);
            function s(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function a(e, t) {
                return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return function(e, t) {
                        for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
                            var o = i[n]
                              , r = Object.getOwnPropertyDescriptor(t, o);
                            r && r.configurable && void 0 === e[o] && Object.defineProperty(e, o, r)
                        }
                    }(e, t),
                    e
                }
                ,
                a(e, t)
            }
            function c(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                e
            }
            var l = (0,
            r.shortcut)()((o = function(e) {
                var t, i;
                function n() {
                    for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                        n[o] = arguments[o];
                    return c(s(t = e.call.apply(e, [this].concat(n)) || this), "props", {
                        baseCls: "dec-common-card bi-card",
                        items: []
                    }),
                    t
                }
                return i = e,
                (t = n).prototype = Object.create(i.prototype),
                t.prototype.constructor = t,
                a(t, i),
                n.prototype.render = function() {
                    var e = (0,
                    r.getLayoutConstant)()
                      , t = e.GAP
                      , i = e.HEADER_HEIGHT
                      , n = this.options
                      , o = n.title
                      , s = n.extra
                      , a = n.items
                      , c = o || s ? BI.h(BI.LeftRightVerticalAdaptLayout, {
                        cls: "bi-border-bottom",
                        height: i
                    }, BI.h("left", null, "string" == typeof o ? BI.h(BI.Text, null, o) : o), BI.h("right", null, s)) : null
                      , l = BI.h(BI.VerticalLayout, {
                        vgap: t,
                        innerVgap: -t
                    }, a);
                    return BI.h(BI.VerticalLayout, {
                        hgap: t
                    }, c, l)
                }
                ,
                n
            }(BI.Widget),
            c(o, "xtype", "dec.common.card"),
            n = o)) || n
        },
        3900: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-vertical-card bi-card",
                    headerHeight: 40,
                    content: {
                        type: "bi.label",
                        text: "content"
                    },
                    text: "",
                    showButtons: !0,
                    hgap: 0
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vertical",
                        hgap: t.hgap,
                        items: [{
                            type: "bi.htape",
                            cls: "bi-border-bottom",
                            height: t.headerHeight,
                            items: [{
                                type: "bi.label",
                                textAlign: "left",
                                text: t.text,
                                height: t.headerHeight
                            }, {
                                type: "bi.right_vertical_adapt",
                                invisible: !t.showButtons,
                                items: [{
                                    type: "bi.button",
                                    $testId: "dec-card-vertical-save-btn",
                                    text: BI.i18nText("BI-Basic_Save"),
                                    height: 24,
                                    handler: function() {
                                        e.fireEvent("EVENT_CHANGE")
                                    }
                                }],
                                width: 100
                            }]
                        }, {
                            el: t.content
                        }]
                    }
                }
            }),
            BI.shortcut("dec.card.vertical", e)
        },
        64182: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-component-blur-combo",
                    el: {},
                    popup: {},
                    direction: "bottom",
                    adjustLength: 0,
                    adjustXOffset: 0,
                    adjustYOffset: 0,
                    offsetStyle: "left",
                    destroyWhenHide: !1
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.combo",
                        ref: function(t) {
                            e.combo = t
                        },
                        trigger: "click",
                        direction: t.direction,
                        container: t.container,
                        adjustLength: t.adjustLength,
                        adjustXOffset: t.adjustXOffset,
                        adjustYOffset: t.adjustYOffset,
                        offsetStyle: t.offsetStyle,
                        destroyWhenHide: t.destroyWhenHide,
                        el: t.el,
                        popup: t.popup,
                        listeners: [{
                            eventName: BI.Combo.EVENT_CHANGE,
                            action: function() {
                                e.fireEvent(BI.Combo.EVENT_CHANGE)
                            }
                        }, {
                            eventName: BI.Combo.EVENT_AFTER_POPUPVIEW,
                            action: function() {
                                e.fireEvent(BI.Combo.EVENT_AFTER_POPUPVIEW)
                            }
                        }, {
                            eventName: BI.Combo.EVENT_AFTER_HIDEVIEW,
                            action: function() {
                                e.fireEvent(BI.Combo.EVENT_AFTER_HIDEVIEW)
                            }
                        }]
                    }
                },
                _initTriggerAction: function() {
                    var e = this
                      , t = BI.isChrome()
                      , i = this.combo.element;
                    if (i.on("click." + this.getName(), (function(e) {
                        try {
                            i[0].focus()
                        } catch (e) {}
                    }
                    )),
                    t)
                        i.on("blur." + this.getName(), (function(t) {
                            e.combo.hideView()
                        }
                        ));
                    else {
                        var n = null;
                        e.combo.element.on("mouseleave." + e.getName(), (function(t) {
                            n = window.setTimeout((function() {
                                e.combo.hideView(),
                                window.clearTimeout(n)
                            }
                            ), 300)
                        }
                        )),
                        e.combo.element.on("mouseenter." + e.getName(), (function(e) {
                            window.clearTimeout(n)
                        }
                        ))
                    }
                },
                showView: function() {
                    this.combo.showView()
                },
                hideView: function() {
                    this.combo.hideView()
                },
                beforeDestroy: function() {
                    this.combo.element.off("click." + this.getName()).off("blur." + this.getName())
                }
            }),
            BI.shortcut("dec.component.blur_combo", e),
            BI.shortcut("dec.common.blur_combo", e)
        },
        29601: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-screening-open-combo dec-common-authority-filter-open-combo",
                    $testId: "dec-screening-open-combo",
                    height: 30,
                    chooseType: BI.ButtonGroup.CHOOSE_TYPE_SINGLE,
                    text: "",
                    el: {},
                    textLgap: 5
                },
                render: function() {
                    var t = this
                      , i = this.options
                      , n = {
                        type: "bi.label",
                        ref: function(e) {
                            t.text = e
                        },
                        textAlign: "left",
                        height: i.height,
                        text: i.text,
                        hgap: i.textHgap,
                        vgap: i.textVgap,
                        lgap: i.textLgap,
                        rgap: i.textRgap
                    }
                      , o = BI.extend({
                        type: "bi.trigger_icon_button",
                        $testId: "dec-screening-open-trigger",
                        ref: function(e) {
                            t.trigger = e
                        },
                        items: i.items,
                        height: i.height,
                        width: 24,
                        text: i.text
                    }, i.el)
                      , r = {
                        type: "bi.text_value_check_combo_popup",
                        ref: function(e) {
                            t.popup = e
                        },
                        chooseType: i.chooseType,
                        items: i.items,
                        value: i.value,
                        listeners: [{
                            eventName: "EVENT_CHANGE",
                            action: function() {
                                t.setValue(t.popup.getValue()),
                                t.textIconCombo.hideView(),
                                t.fireEvent(e.EVENT_CHANGE, arguments)
                            }
                        }, {
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function() {
                                t.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                            }
                        }]
                    };
                    return {
                        type: "bi.vertical_adapt",
                        items: [{
                            type: "bi.combo",
                            ref: function(e) {
                                t.textIconCombo = e
                            },
                            stopPropagation: !0,
                            isNeedAdjustWidth: !1,
                            container: "body",
                            adjustLength: 2,
                            el: {
                                type: "bi.vertical_adapt",
                                cls: "bi-trigger cursor-pointer",
                                $testId: "dec-screening-open-combo-trigger",
                                items: [n, o]
                            },
                            popup: {
                                el: r,
                                maxHeight: 300
                            }
                        }]
                    }
                },
                setValue: function(e) {
                    var t = BI.find(this.options.items, (function(t, i) {
                        return i.value === e[0]
                    }
                    ));
                    this.text.setValue(t.text)
                },
                getValue: function() {
                    return this.textIconCombo.getValue()
                },
                populate: function(e) {
                    this.options.items = e,
                    this.textIconCombo.populate(e)
                }
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.common.authority.filter_open.combo", e)
        },
        86205: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "bi-text-value-combo",
                    height: 24,
                    chooseType: BI.ButtonGroup.CHOOSE_TYPE_SINGLE,
                    textFormatter: function(e) {
                        return e
                    },
                    value: ""
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.combo",
                        container: t.container,
                        adjustLength: 2,
                        ref: function(t) {
                            e.combo = t
                        },
                        el: {
                            type: "dec.left_right_text_value_combo_trigger",
                            cls: "text-value-trigger",
                            items: t.items,
                            height: t.height - 2,
                            value: t.textFormatter(t.value),
                            ref: function(t) {
                                e.trigger = t
                            }
                        },
                        popup: {
                            el: {
                                type: "bi.text_value_combo_popup",
                                chooseType: t.chooseType,
                                value: t.value,
                                items: t.items,
                                ref: function(t) {
                                    e.popup = t
                                },
                                listeners: [{
                                    eventName: BI.TextValueComboPopup.EVENT_CHANGE,
                                    action: function() {
                                        e.setValue(e.getValue()),
                                        e.combo.hideView(),
                                        e.fireEvent("EVENT_CHANGE", arguments)
                                    }
                                }, {
                                    eventName: BI.Controller.EVENT_CHANGE,
                                    action: function() {
                                        e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                                    }
                                }]
                            },
                            value: t.value,
                            maxHeight: 240,
                            minHeight: 25
                        }
                    }
                },
                setValue: function(e) {
                    this.combo.setValue(e),
                    this.trigger.setValue(this.options.textFormatter(e))
                },
                getValue: function() {
                    var e = this.combo.getValue();
                    return BI.isNull(e) ? "" : BI.isArray(e) ? e[0] : e
                },
                populate: function(e) {
                    this.options.items = e,
                    this.combo.populate(e)
                }
            }),
            BI.shortcut("dec.left_right_text_value_combo", e)
        },
        48703: function() {
            var e;
            e = BI.inherit(BI.Trigger, {
                props: {
                    baseCls: "dec-left-right-text-value-combo-trigger",
                    value: {}
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = t.value;
                    return {
                        type: "bi.htape",
                        cls: "bi-border bi-border-radius",
                        items: [{
                            type: "bi.label",
                            text: i.text,
                            title: function() {
                                return e.textRow.getText()
                            },
                            height: t.height,
                            hgap: 3,
                            textAlign: "left",
                            ref: function(t) {
                                e.textRow = t
                            }
                        }, {
                            type: "bi.label",
                            text: i.value,
                            height: t.height,
                            width: 32,
                            textAlign: "right",
                            ref: function(t) {
                                e.valueRow = t
                            }
                        }, {
                            type: "bi.trigger_icon_button",
                            width: t.triggerWidth || t.height
                        }]
                    }
                },
                setValue: function(e) {
                    this.textRow.setText(e.text),
                    this.valueRow.setText(e.value)
                },
                setText: function(e) {
                    this.textRow.setText(e)
                }
            }),
            BI.shortcut("dec.left_right_text_value_combo_trigger", e)
        },
        95762: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-order-multi-select-combo",
                    itemsCreator: BI.emptyFn
                },
                watch: {},
                render: function() {
                    var e = this
                      , t = this.options;
                    return this.storeValue = [],
                    {
                        type: "bi.vertical",
                        scrolly: !1,
                        items: [{
                            el: {
                                type: "bi.multi_select_no_bar_combo",
                                ref: function(t) {
                                    e.combo = t
                                },
                                text: t.text,
                                height: t.height,
                                itemsCreator: t.itemsCreator,
                                valueFormatter: t.valueFormatter,
                                listeners: [{
                                    eventName: "EVENT_CLICK_ITEM",
                                    action: function() {
                                        e._orderStoreValue(this.getValue())
                                    }
                                }, {
                                    eventName: "EVENT_CONFIRM",
                                    action: function() {
                                        e._orderStoreValue(this.getValue()),
                                        e.fireEvent("EVENT_CONFIRM", arguments)
                                    }
                                }]
                            }
                        }]
                    }
                },
                _orderStoreValue: function(e) {
                    var t, i;
                    t = BI.difference(e, this.storeValue),
                    i = BI.difference(this.storeValue, e),
                    this.storeValue = BI.concat(this.storeValue, t),
                    BI.remove(this.storeValue, i),
                    1 === t.length && this.combo.setValue(this.storeValue)
                },
                setValue: function(e) {
                    this.storeValue = e || [],
                    this.combo.setValue(this.storeValue)
                },
                getValue: function() {
                    return this.storeValue
                },
                populate: function(e) {
                    this.combo.populate(e)
                }
            }),
            BI.shortcut("dec.common.order_multi_select_combo", e)
        },
        26016: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    offsetStyle: "left",
                    baseCls: "dec-text-bubble-combo",
                    text: "",
                    popupWidth: 300,
                    popupHeight: 140,
                    hgap: 15,
                    vgap: 10,
                    el: {}
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = (t.text + "").split("\n");
                    return i.length > 1 ? this.text = BI.createWidget({
                        type: "bi.vertical",
                        items: BI.map(i, (function(e, t) {
                            return {
                                type: "bi.label",
                                textAlign: "left",
                                whiteSpace: "normal",
                                text: t,
                                textHeight: 16
                            }
                        }
                        ))
                    }) : this.text = BI.createWidget({
                        type: "bi.label",
                        textAlign: "left",
                        whiteSpace: "normal",
                        text: t.text,
                        textHeight: 20
                    }),
                    {
                        type: "bi.bubble_combo",
                        offsetStyle: t.offsetStyle,
                        el: t.el,
                        popup: {
                            type: "bi.bubble_popup_view",
                            el: {
                                type: "bi.vertical",
                                scrolly: !0,
                                hgap: t.hgap,
                                vgap: t.vgap,
                                items: [{
                                    el: this.text
                                }],
                                ref: function(t) {
                                    e.textRow = t
                                }
                            },
                            maxHeight: t.popupHeight,
                            minHeight: null,
                            minWidth: t.popupWidth
                        },
                        stopPropagation: !0,
                        ref: function(t) {
                            e.combo = t
                        }
                    }
                },
                showView: function() {
                    this.combo.showView()
                },
                hideView: function() {
                    this.combo.hideView()
                }
            }),
            BI.shortcut("dec.text.bubble.combo", e)
        },
        59491: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "bi-text-value-check-combo",
                    $testId: "dec-text-value-check-combo",
                    width: 100,
                    height: 24,
                    chooseType: BI.ButtonGroup.CHOOSE_TYPE_SINGLE,
                    value: "",
                    noSelect: !0
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: "bi.select_text_trigger",
                        ref: function(t) {
                            e.trigger = t
                        },
                        items: t.items,
                        height: t.height,
                        text: t.text,
                        value: t.value
                    }
                      , n = {
                        type: "dec.text.value.check.combo.popup",
                        ref: function(t) {
                            e.popup = t
                        },
                        chooseType: t.chooseType,
                        noSelect: t.noSelect,
                        items: t.items,
                        value: t.value,
                        listeners: [{
                            eventName: BI.TextValueCheckComboPopup.EVENT_CHANGE,
                            action: function() {
                                this.getValue()[0] === DecCst.SELECT_NONE ? e.setValue("") : e.setValue(e.popup.getValue()),
                                e.textIconCheckCombo.hideView(),
                                e.fireEvent(BI.TextValueCheckCombo.EVENT_CHANGE)
                            }
                        }, {
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function() {
                                e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                            }
                        }]
                    };
                    return {
                        type: "bi.combo",
                        cls: "bi-border bi-focus-shadow",
                        ref: function(t) {
                            e.textIconCheckCombo = t
                        },
                        adjustLength: 2,
                        el: i,
                        value: t.value,
                        popup: {
                            el: n,
                            value: t.value,
                            maxHeight: 300
                        }
                    }
                },
                setTitle: function(e) {
                    this.trigger.setTitle(e)
                },
                setValue: function(e) {
                    this.trigger.setValue(e),
                    this.popup && this.popup.setValue(e)
                },
                setWarningTitle: function(e) {
                    this.trigger.setWarningTitle(e)
                },
                getValue: function() {
                    var e = this.textIconCheckCombo.getValue();
                    return BI.isKey(e) ? [e] : BI.isArray(e) ? e : []
                },
                populate: function(e) {
                    this.options.items = e,
                    this.textIconCheckCombo.populate(e)
                }
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.text.value.check.combo", e)
        },
        12050: function() {
            var e;
            e = BI.inherit(BI.BasicButton, {
                props: {
                    cls: "dec-no-select-text-item  bi-list-item",
                    height: 24
                },
                render: function() {
                    var e = this.options;
                    return {
                        type: "bi.label",
                        textAlign: "left",
                        hgap: e.hgap,
                        vgap: e.vgap,
                        lgap: e.lgap,
                        rgap: e.rgap,
                        text: BI.i18nText("Dec-Basic_Select_None"),
                        height: e.height
                    }
                }
            }),
            BI.shortcut("dec.no.select.text.item", e)
        },
        94505: function() {
            var e;
            e = BI.inherit(BI.Pane, {
                props: {
                    baseCls: "bi-text-icon-popup",
                    chooseType: BI.ButtonGroup.CHOOSE_TYPE_SINGLE,
                    noSelect: !0
                },
                render: function() {
                    var e = this.options
                      , t = this;
                    this.popup = BI.createWidget({
                        type: "bi.button_group",
                        items: this._formatItems(e.items),
                        chooseType: e.chooseType,
                        layouts: [{
                            type: "bi.vertical"
                        }],
                        value: e.value
                    }),
                    this.popup.on(BI.Controller.EVENT_CHANGE, (function(e, i, n) {
                        t.fireEvent(BI.Controller.EVENT_CHANGE, arguments),
                        e === BI.Events.CLICK && t.fireEvent(BI.TextValueCheckComboPopup.EVENT_CHANGE, i, n)
                    }
                    )),
                    BI.createWidget({
                        type: "bi.vertical",
                        element: this,
                        items: [this.popup]
                    })
                },
                _formatItems: function(e) {
                    if (BI.isEmpty(e))
                        return [];
                    var t = BI.map(e, (function(e, t) {
                        return BI.extend({
                            type: "bi.icon_text_item",
                            cls: "item-check-font bi-list-item",
                            height: 30
                        }, t)
                    }
                    ));
                    return this.options.noSelect && t.push({
                        type: "dec.no.select.text.item",
                        lgap: 25,
                        value: DecCst.SELECT_NONE,
                        height: 30
                    }),
                    t
                },
                populate: function(e) {
                    BI.TextValueCheckComboPopup.superclass.populate.apply(this, arguments),
                    this.popup.populate(this._formatItems(e))
                },
                getValue: function() {
                    return this.popup.getValue()
                },
                setValue: function(e) {
                    this.popup.setValue(e)
                }
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.text.value.check.combo.popup", e)
        },
        12058: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "bi-text-value-combo dec-text-value-combo",
                    $testId: "dec-text-value-multi-combo",
                    height: 24,
                    text: "",
                    loading: !1,
                    items: [],
                    itemsCreator: BI.emptyFn,
                    value: [],
                    el: {},
                    isDefaultInit: !0
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    return this.options.height -= 2,
                    {
                        type: "bi.combo",
                        isDefaultInit: i.isDefaultInit,
                        adjustLength: 2,
                        el: {
                            type: "dec.component.error_bubble_container",
                            cls: "bi-trigger",
                            el: {
                                type: "bi.text_trigger",
                                cls: "bi-border bi-border-radius",
                                items: i.items,
                                height: i.height,
                                text: i.text || this._digest(i.value),
                                ref: function(e) {
                                    t.trigger = e
                                }
                            },
                            ref: function(e) {
                                t.errorLabel = e
                            }
                        },
                        popup: {
                            el: {
                                type: "dec.text_value_combo_popup",
                                items: i.items,
                                loading: i.loading,
                                itemsCreator: i.itemsCreator,
                                value: this._checkValue(i.value),
                                ref: function(e) {
                                    t.popup = e
                                },
                                listeners: [{
                                    eventName: "EVENT_CHANGE",
                                    action: function() {
                                        t.errorLabel.hideError(),
                                        t._setTriggerValue(t.popup.getValue()),
                                        t.fireEvent(e.EVENT_CHANGE, arguments)
                                    }
                                }, {
                                    eventName: BI.Controller.EVENT_CHANGE,
                                    action: function() {
                                        t.errorLabel.hideError(),
                                        t.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                                    }
                                }]
                            },
                            maxHeight: 300
                        },
                        ref: function(e) {
                            t.textIconCombo = e
                        }
                    }
                },
                _setTriggerValue: function(e) {
                    e.type === BI.ButtonGroup.CHOOSE_TYPE_ALL ? this.trigger.setText(BI.i18nText("BI-Select_All")) : this.trigger.setText(this._digest(e.value)),
                    this.trigger.setTitle(this.getText())
                },
                setValue: function(e) {
                    var t = this._checkValue(e);
                    this._setTriggerValue(t),
                    this.popup && this.popup.setValue(t)
                },
                getValue: function() {
                    return this.popup ? this.popup.getValue() : this._checkValue(this.options.value)
                },
                getText: function() {
                    var e = this.getValue().value
                      , t = []
                      , i = BI.Tree.transformToArrayFormat(this.options.items);
                    return BI.each(i, (function(i, n) {
                        BI.deepContains(e, n.value) && !t.includes(n.text || n.value) && t.push(n.text || n.value)
                    }
                    )),
                    t.join(",")
                },
                showError: function(e) {
                    this.errorLabel.showError(e)
                },
                populate: function(e) {
                    this.options.items = e,
                    this.textIconCombo.populate(e)
                },
                _checkValue: function(e) {
                    var t = {};
                    return BI.isObject(e) && e.value ? t = e : t.value = e,
                    t
                },
                _digest: function(e) {
                    var t = this.options
                      , i = this.options.items;
                    e = BI.isArray(e) ? e : [e];
                    var n = []
                      , o = BI.Tree.transformToArrayFormat(i);
                    return BI.each(o, (function(t, i) {
                        BI.deepContains(e, i.value) && !n.includes(i.text || i.value) && n.push(i.text || i.value)
                    }
                    )),
                    n.length > 0 ? n.join(",") : t.text
                }
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.text_value_combo", e)
        },
        83879: function() {
            var e;
            e = BI.inherit(BI.Pane, {
                props: {
                    baseCls: "bi-text-icon-popup",
                    items: [],
                    loading: !1,
                    itemsCreator: BI.emptyFn,
                    value: []
                },
                render: function() {
                    var e = this.options
                      , t = this;
                    return {
                        type: "bi.vertical",
                        items: [{
                            type: "bi.select_list",
                            el: {
                                type: "bi.list_pane",
                                el: {
                                    chooseType: BI.Selection.Multi
                                },
                                ref: function(i) {
                                    t.listPane = i,
                                    e.loading && i.loading()
                                }
                            },
                            itemsCreator: e.itemsCreator,
                            items: BI.createItems(e.items, {
                                type: "bi.multi_select_item",
                                rgap: 10,
                                iconWrapperWidth: 36
                            }),
                            value: this._assertValue(e.value),
                            listeners: [{
                                eventName: BI.Controller.EVENT_CHANGE,
                                action: function(e, i, n) {
                                    t.fireEvent(BI.Controller.EVENT_CHANGE, arguments),
                                    e === BI.Events.CLICK && t.fireEvent(BI.TextValueComboPopup.EVENT_CHANGE, i, n)
                                }
                            }],
                            ref: function(e) {
                                t.popup = e
                            }
                        }]
                    }
                },
                populate: function(e) {
                    this.listPane.loaded(),
                    this.popup.populate(BI.createItems(e, {
                        type: "bi.multi_select_item",
                        rgap: 10,
                        iconWrapperWidth: 36
                    }))
                },
                getValue: function() {
                    var e = this.popup.getValue()
                      , t = e.type === BI.Selection.All ? e.assist : e.value
                      , i = e.type === BI.Selection.Multi && 0 === BI.size(e.assist)
                      , n = e.type === BI.Selection.All && 0 === BI.size(e.value);
                    return {
                        type: i || n ? BI.Selection.All : BI.Selection.Multi,
                        value: t
                    }
                },
                setValue: function(e) {
                    this.popup.setValue(this._assertValue(e))
                },
                _assertValue: function(e) {
                    return e.type === BI.Selection.All && (e.value = []),
                    e
                }
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.text_value_combo_popup", e)
        },
        49815: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-cipher-editor",
                    value: ""
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "dec.label.editor.item",
                        $value: t.$value,
                        inputType: "password",
                        autocomplete: "new-password",
                        text: t.text,
                        textWidth: t.textWidth,
                        textCls: t.textCls,
                        watermark: t.watermark,
                        value: t.value,
                        allowBlank: t.allowBlank,
                        editorWidth: t.editorWidth,
                        errorTop: t.errorTop,
                        el: t.el,
                        bubbleError: !1,
                        ref: function(t) {
                            e.passwordRow = t
                        },
                        listeners: [{
                            eventName: BI.Editor.EVENT_CHANGE,
                            action: function() {
                                e.passwordFlag = !0,
                                e.fireEvent(BI.Editor.EVENT_CHANGE, arguments)
                            }
                        }, {
                            eventName: BI.Editor.EVENT_FOCUS,
                            action: function() {
                                e.fireEvent(BI.Editor.EVENT_FOCUS, arguments)
                            }
                        }, {
                            eventName: BI.Editor.EVENT_BLUR,
                            action: function() {
                                e.fireEvent(BI.Editor.EVENT_BLUR, arguments)
                            }
                        }]
                    }
                },
                showError: function(e) {
                    this.passwordRow.showError(e)
                },
                hideError: function() {
                    this.passwordRow.hideError()
                },
                getValue: function() {
                    return this.passwordRow.getValue()
                },
                setValue: function(e) {
                    this.passwordRow.setValue(e)
                },
                setWaterMark: function(e) {
                    this.passwordRow.setWaterMark(e)
                },
                getCipher: function() {
                    var e = this.options.value;
                    return this.passwordFlag || e !== DecCst.PASSWORD_DEFAULT_TRANSMISSION ? BI.Providers.getProvider("dec.provider.cipher").getCipher(this.getValue()) : e
                }
            }),
            BI.shortcut("dec.common.cipher.editor", e)
        },
        55718: function() {
            BI.provider("dec.provider.cipher", (function() {
                var e = function(e) {
                    return Dec.system.transmissionEncryption === DecCst.System.Encryption.Mode.SM4 ? BI.SM4.ecbEncrypt(e, Dec.system.frontSM4Key) : BI.aesEncrypt(e, Dec.system.frontSeed)
                }
                  , t = function(e) {
                    return Dec.system.transmissionEncryption === DecCst.System.Encryption.Mode.SM4 ? BI.SM4.ecbDecrypt(e, Dec.system.frontSM4Key) : BI.aesDecrypt(e, Dec.system.frontSeed)
                };
                this.encrypt = function(t) {
                    e = t
                }
                ,
                this.decrypt = function(e) {
                    t = e
                }
                ,
                this.$get = function() {
                    return BI.inherit(BI.OB, {
                        getCipher: function(t) {
                            return e(t)
                        },
                        getPlain: function(e) {
                            return t(e)
                        }
                    })
                }
            }
            ))
        },
        33809: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-closeable-editor",
                    $testId: "dec-closeable-editor",
                    height: 24,
                    errorText: "",
                    watermark: "",
                    validationChecker: BI.emptyFn,
                    quitChecker: BI.emptyFn,
                    alwaysShowIcon: !0
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    this.editor = BI.createWidget({
                        type: "bi.editor",
                        height: i.height,
                        watermark: i.watermark,
                        allowBlank: !0,
                        errorText: i.errorText,
                        validationChecker: i.validationChecker,
                        quitChecker: i.quitChecker
                    }),
                    this.clear = BI.createWidget({
                        type: "bi.icon_button",
                        width: 24,
                        stopEvent: !0,
                        invisible: !i.alwaysShowIcon,
                        cls: "close-font"
                    }),
                    this.clear.on(BI.IconButton.EVENT_CHANGE, (function() {
                        t.setValue(""),
                        i.alwaysShowIcon || this.setVisible(!1),
                        t.fireEvent(BI.Controller.EVENT_CHANGE, BI.Events.STOPEDIT),
                        t.fireEvent(e.EVENT_CLEAR)
                    }
                    )),
                    BI.createWidget({
                        element: this,
                        type: "bi.absolute",
                        items: [{
                            el: this.editor,
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }, {
                            el: this.clear,
                            top: 2,
                            right: 0,
                            bottom: 2
                        }]
                    }),
                    this.editor.on(BI.Controller.EVENT_CHANGE, (function() {
                        t.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_FOCUS, (function() {
                        t.fireEvent(e.EVENT_FOCUS)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_BLUR, (function() {
                        t.fireEvent(e.EVENT_BLUR)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_CLICK, (function() {
                        t.fireEvent(e.EVENT_CLICK)
                    }
                    ));
                    var n = BI.debounce(BI.bind(this._handleChange, this), BI.EVENT_RESPONSE_TIME, !0);
                    this.editor.on(BI.Editor.EVENT_CHANGE, (function() {
                        n()
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_KEY_DOWN, (function(i) {
                        t.fireEvent(e.EVENT_KEY_DOWN, i)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_SPACE, (function() {
                        t.fireEvent(e.EVENT_SPACE)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_BACKSPACE, (function() {
                        t.fireEvent(e.EVENT_BACKSPACE)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_VALID, (function() {
                        t.fireEvent(e.EVENT_VALID)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_ERROR, (function() {
                        t.fireEvent(e.EVENT_ERROR)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_ENTER, (function() {
                        t.fireEvent(e.EVENT_ENTER)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_RESTRICT, (function() {
                        t.fireEvent(e.EVENT_RESTRICT)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_EMPTY, (function() {
                        t.fireEvent(e.EVENT_EMPTY)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_REMOVE, (function() {
                        t.fireEvent(e.EVENT_REMOVE)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_CONFIRM, (function() {
                        t.fireEvent(e.EVENT_CONFIRM)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_START, (function() {
                        t.fireEvent(e.EVENT_START)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_PAUSE, (function() {
                        t.fireEvent(e.EVENT_PAUSE)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_STOP, (function() {
                        t.fireEvent(e.EVENT_STOP)
                    }
                    ))
                },
                _checkClear: function() {
                    this.getValue() ? this.clear.visible() : this.clear.invisible()
                },
                _handleChange: function() {
                    "" !== this.getValue() ? (this.clear.setVisible(!0),
                    this.fireEvent(e.EVENT_CHANGE, this.getValue())) : this.options.alwaysShowIcon || this.clear.setVisible(!1)
                },
                focus: function() {
                    this.editor.focus()
                },
                blur: function() {
                    this.editor.blur()
                },
                getValue: function() {
                    if (this.isValid())
                        return this.editor.getValue()
                },
                getKeywords: function() {
                    var e = this.editor.getLastChangedValue()
                      , t = e.match(/[\S]+/g);
                    return BI.isEndWithBlank(e) ? t.concat([" "]) : t
                },
                setValue: function(e) {
                    "" !== e || this.options.alwaysShowIcon ? this.clear.setVisible(!0) : this.clear.setVisible(!1),
                    this.editor.setValue(e)
                },
                isValid: function() {
                    return this.editor.isValid()
                }
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            e.EVENT_FOCUS = "EVENT_FOCUS",
            e.EVENT_BLUR = "EVENT_BLUR",
            e.EVENT_CLICK = "EVENT_CLICK",
            e.EVENT_KEY_DOWN = "EVENT_KEY_DOWN",
            e.EVENT_SPACE = "EVENT_SPACE",
            e.EVENT_BACKSPACE = "EVENT_BACKSPACE",
            e.EVENT_CLEAR = "EVENT_CLEAR",
            e.EVENT_START = "EVENT_START",
            e.EVENT_PAUSE = "EVENT_PAUSE",
            e.EVENT_STOP = "EVENT_STOP",
            e.EVENT_CONFIRM = "EVENT_CONFIRM",
            e.EVENT_VALID = "EVENT_VALID",
            e.EVENT_ERROR = "EVENT_ERROR",
            e.EVENT_ENTER = "EVENT_ENTER",
            e.EVENT_RESTRICT = "EVENT_RESTRICT",
            e.EVENT_REMOVE = "EVENT_REMOVE",
            e.EVENT_EMPTY = "EVENT_EMPTY",
            BI.shortcut("dec.closeable.editor", e)
        },
        76758: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-component-password-file-secret",
                    password: "",
                    privateKey: "",
                    encrypted: !0,
                    watermark: "",
                    editable: !0
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.component.password.file.secret", this.options)
                },
                watch: {
                    privateKey: function(e) {
                        e && this.editor.setValue(""),
                        this.editor.setWaterMark(BI.i18nText(e ? "Dec-Components_Upload_Private_File" : this.options.watermark))
                    }
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.absolute",
                        height: 24,
                        width: t.textWidth + t.editorWidth,
                        items: [{
                            el: {
                                type: "dec.common.cipher.editor",
                                $value: "dec-file-secret-password",
                                textCls: t.textCls,
                                textWidth: t.textWidth,
                                editorWidth: t.editorWidth,
                                watermark: BI.i18nText(t.privateKey ? "Dec-Components_Upload_Private_File" : t.watermark),
                                text: t.text,
                                value: t.password,
                                el: {
                                    disabled: !t.editable
                                },
                                ref: function(t) {
                                    e.editor = t
                                },
                                listeners: [{
                                    eventName: BI.Editor.EVENT_CHANGE,
                                    action: function() {
                                        e.store.clearKey()
                                    }
                                }]
                            },
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0
                        }, {
                            el: {
                                type: "bi.icon_change_button",
                                disabled: !t.editable,
                                $value: "upload-btn",
                                cls: "bi-border-left secret-key-font",
                                title: BI.i18nText("Dec-Cluster_File_Server_SFTP_Tip"),
                                width: 22,
                                handler: function() {
                                    e.uploadFile.select()
                                },
                                ref: function(t) {
                                    e.uploadBtn = t
                                }
                            },
                            top: 0,
                            right: 0,
                            bottom: 0
                        }, {
                            el: {
                                type: "bi.multifile_editor",
                                $testId: "dec-file-secret-upload",
                                url: Dec.Utils.getUploadUrl(!0),
                                minWidth: 80,
                                ref: function(t) {
                                    e.uploadFile = t
                                },
                                listeners: [{
                                    eventName: BI.MultifileEditor.EVENT_ERROR,
                                    action: function(e) {}
                                }, {
                                    eventName: BI.MultifileEditor.EVENT_CHANGE,
                                    action: function() {
                                        this.upload()
                                    }
                                }, {
                                    eventName: BI.MultifileEditor.EVENT_UPLOADED,
                                    action: function() {
                                        var t = this.getValue();
                                        e.store.setKey(t[t.length - 1].attach_id),
                                        BI.Msg.toast(BI.i18nText("Dec-Cluster_File_Server_Upload_Success"), {
                                            level: "success"
                                        })
                                    }
                                }]
                            },
                            top: 0,
                            right: 0,
                            bottom: 0
                        }]
                    }
                },
                getValue: function() {
                    return {
                        password: this.model.privateKey ? "" : this.options.encrypted ? this.editor.getCipher() : this.editor.getValue(),
                        privateKey: this.model.privateKey
                    }
                },
                validation: function() {
                    return !BI.isEmptyString(this.model.privateKey) || !BI.isEmptyString(this.editor.getValue()) || (this.editor.showError(BI.i18nText("Dec-Components_Private_File_Password")),
                    !1)
                }
            }),
            BI.shortcut("dec.component.password.file.secret", e)
        },
        85325: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                state: function() {
                    return {
                        privateKey: this.options.privateKey
                    }
                },
                computed: {},
                actions: {
                    clearKey: function() {
                        this.model.privateKey = ""
                    },
                    setKey: function(e) {
                        this.model.privateKey = e
                    }
                }
            }),
            BI.model("dec.model.component.password.file.secret", e)
        },
        92638: function() {
            BI.constant("dec.constant.common.phone.type", [{
                value: "+86",
                text: BI.i18nText("Dec-Basic_Chinese_Mainland"),
                regex: /^1\d{10}$/
            }, {
                value: "+886",
                text: BI.i18nText("Dec-Basic_Chinese_Taiwan"),
                regex: /^9\d{8}$/
            }, {
                value: "+852",
                text: BI.i18nText("Dec-Basic_Chinese_Hong_Kong"),
                regex: /^[569]\d{3}\d{4}$/
            }, {
                value: "+90",
                text: BI.i18nText("Dec-Basic_Turkey"),
                regex: /^5\d{9}$/
            }, {
                value: "+82",
                text: BI.i18nText("Dec-Basic_South_Korea"),
                regex: /^[17]\d{8,9}$/
            }, {
                value: "+81",
                text: BI.i18nText("Dec-Basic_Japan"),
                regex: /^\d{1,4}\d{1,4}\d{4}$/
            }, {
                value: "+65",
                text: BI.i18nText("Dec-Basic_Singapore"),
                regex: /^\d{8}$/
            }, {
                value: "+60",
                text: BI.i18nText("Dec-Basic_Malaysia"),
                regex: /^1\d{8,9}$/
            }])
        },
        15893: function() {
            var e, t, i;
            e = 10,
            t = 24,
            i = BI.inherit(BI.BasicButton, {
                props: {
                    baseCls: "bi-list-item-active",
                    height: t,
                    label: "",
                    text: ""
                },
                render: function() {
                    var t = this.options;
                    return {
                        type: "bi.vertical_adapt",
                        hgap: e,
                        items: [{
                            type: "bi.label",
                            text: t.label,
                            textAlign: "left",
                            title: t.label
                        }, {
                            type: "bi.label",
                            text: t.text,
                            textAlign: "right"
                        }]
                    }
                },
                doClick: function() {
                    BI.SingleSelectItem.superclass.doClick.apply(this, arguments),
                    this.isValid() && this.fireEvent("EVENT_CHANGE", this.isSelected(), this)
                },
                setSelected: function(e) {
                    BI.SingleSelectItem.superclass.setSelected.apply(this, arguments)
                },
                getValue: function() {
                    return this.options.value
                }
            }),
            BI.shortcut("dec.components.phone.editor.item", i)
        },
        20344: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-components-phone-editor",
                    $testId: "dec-components-phone-editor",
                    value: "",
                    textWidth: 116,
                    comboWidth: 150,
                    editorWidth: 270,
                    textRGap: 0,
                    stop: !0,
                    rules: {
                        phone: !0
                    },
                    editable: !0
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    this.service = BI.Services.getService("dec.service.components.phone.editor");
                    var i = this.service.getNumberInfo(t.value);
                    return {
                        type: "bi.vertical_adapt",
                        items: [{
                            el: {
                                type: "bi.label",
                                cls: t.textCls,
                                textAlign: "left",
                                text: t.text,
                                width: t.textWidth,
                                rgap: t.textRGap
                            }
                        }, {
                            el: {
                                type: "dec.left_right_text_value_combo",
                                $testId: "dec-text-value-combo",
                                height: 24,
                                width: t.comboWidth,
                                disabled: !t.editable,
                                textFormatter: function(t) {
                                    var i = e.service.getNumberTypeItem(t);
                                    return {
                                        value: i.value,
                                        text: i.text
                                    }
                                },
                                items: BI.map(BI.Constants.getConstant("dec.constant.common.phone.type"), (function(e, t) {
                                    return {
                                        type: "dec.components.phone.editor.item",
                                        value: t.value,
                                        label: t.text,
                                        text: t.value
                                    }
                                }
                                )),
                                value: i.value,
                                ref: function(t) {
                                    e.codeCombo = t
                                },
                                listeners: [{
                                    eventName: "EVENT_CHANGE",
                                    action: function() {
                                        e.numberEditor.setValue("")
                                    }
                                }]
                            },
                            rgpa: 10
                        }, {
                            type: "dec.label.editor.item",
                            textWidth: 0,
                            disabled: !t.editable,
                            editorWidth: t.editorWidth,
                            watermark: t.watermark,
                            errorTop: t.errorTop,
                            value: i.number,
                            ref: function(t) {
                                e.numberEditor = t
                            },
                            listeners: [{
                                eventName: "EVENT_CHANGE",
                                action: function() {
                                    e.fireEvent("EVENT_CHANGE")
                                }
                            }]
                        }]
                    }
                },
                getValue: function() {
                    var e = this.codeCombo.getValue()
                      , t = this.numberEditor.getValue();
                    return BI.isKey(t) ? (e === DecCst.Web.Components.PhoneEditor.Code.ZH_CN ? "" : e) + t : ""
                },
                showError: function(e) {
                    this.numberEditor.showError(e)
                },
                validate: function() {
                    return this._validate(this.numberEditor.getValue())
                },
                getValidations: function() {
                    return BI.validator.validate(this.numberEditor.getValue(), this._getRule(), this.options.stop)
                },
                _getRule: function() {
                    return BI.extend({}, this.options.rules, {
                        phone: {
                            code: this.codeCombo.getValue()
                        }
                    })
                },
                _validate: function(e) {
                    var t = BI.validator.validate(e, this._getRule(), this.options.stop);
                    return !(!BI.isNotNull(t) || !t.approved) || (this.showError(t.errors[0]),
                    !1)
                }
            }),
            BI.shortcut("dec.components.phone.editor", e)
        },
        60163: function() {
            var e;
            e = BI.inherit(BI.OB, {
                getNumberInfo: function(e) {
                    e = BI.isNull(e) ? "" : e;
                    var t = {
                        value: DecCst.Web.Components.PhoneEditor.Code.ZH_CN,
                        number: e
                    };
                    return -1 === e.indexOf("+") && (e = DecCst.Web.Components.PhoneEditor.Code.ZH_CN + e),
                    BI.some(BI.Constants.getConstant("dec.constant.common.phone.type"), (function(i, n) {
                        if (e.indexOf(n.value) > -1)
                            return t = {
                                value: n.value,
                                number: e.replace(n.value, "")
                            },
                            !0
                    }
                    )),
                    t
                },
                getNumberTypeItem: function(e) {
                    return BI.find(BI.Constants.getConstant("dec.constant.common.phone.type"), (function(t, i) {
                        return e === i.value
                    }
                    )) || {}
                },
                getHiddenNumber: function(e) {
                    if (-1 === (e = BI.isNull(e) ? "" : e).indexOf("+"))
                        return Dec.Utils.getHiddenPhone(e);
                    var t = this.getNumberInfo(e);
                    return t.value + Dec.Utils.getHiddenPhone(t.number)
                },
                isValidNumber: function(e) {
                    var t = this.getNumberInfo(e);
                    return Dec.Utils.isPhoneNumber(t.number, t.value)
                }
            }),
            BI.service("dec.service.components.phone.editor", e)
        },
        95967: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-components-phone-editor-phone-code-combo"
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.combo",
                        container: t.container,
                        isNeedAdjustWidth: !1,
                        adjustLength: 2,
                        ref: function(t) {
                            e.combo = t
                        },
                        el: this._createTrigger(),
                        popup: {
                            el: {
                                type: "bi.text_value_combo_popup",
                                chooseType: t.chooseType,
                                value: t.value,
                                items: t.items,
                                ref: function(t) {
                                    e.popup = t
                                },
                                listeners: [{
                                    eventName: BI.TextValueComboPopup.EVENT_CHANGE,
                                    action: function() {
                                        e.setValue(e.getValue()),
                                        e.combo.hideView(),
                                        e.fireEvent("EVENT_CHANGE", arguments)
                                    }
                                }, {
                                    eventName: BI.Controller.EVENT_CHANGE,
                                    action: function() {
                                        e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                                    }
                                }]
                            },
                            value: t.value,
                            minHeight: 25,
                            maxWidth: null,
                            minWidth: 150
                        }
                    }
                },
                _createTrigger: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vertical_adapt",
                        cls: "bi-trigger cursor-pointer",
                        items: [{
                            el: {
                                type: "bi.label",
                                ref: function(t) {
                                    e.text = t
                                },
                                cls: "select-text-label" + (BI.isKey(t.textCls) ? " " + t.textCls : ""),
                                textAlign: "left",
                                height: t.height,
                                text: this._getTriggerText(t.value),
                                title: function() {
                                    return e.text.getText()
                                },
                                hgap: 6
                            }
                        }, {
                            el: {
                                type: "bi.trigger_icon_button",
                                width: 20
                            }
                        }]
                    }
                },
                _getTriggerText: function(e) {
                    return BI.find(this.options.items, (function(t, i) {
                        return i.value === e
                    }
                    )).text
                },
                setValue: function(e) {
                    this.combo.setValue(e),
                    this.text.setValue(this._getTriggerText(e))
                },
                getValue: function() {
                    var e = this.combo.getValue();
                    return BI.isNull(e) ? "" : BI.isArray(e) ? e[0] : e
                }
            }),
            BI.shortcut("dec.components.phone.editor.phone_code_combo", e)
        },
        30352: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-components-phone-samll-editor",
                    $testId: "dec-components-phone-samll-editor",
                    value: ""
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    this.service = BI.Services.getService("dec.service.components.phone.editor");
                    var i = this.service.getNumberInfo(t.value);
                    return {
                        type: "bi.vertical_adapt",
                        items: [{
                            el: {
                                type: "dec.components.phone.editor.phone_code_combo",
                                $testId: "dec-components-phone-editor-phone-code-combo",
                                height: 24,
                                width: t.comboWidth,
                                textFormatter: function(t) {
                                    var i = e.service.getNumberTypeItem(t);
                                    return {
                                        value: i.value,
                                        text: i.text
                                    }
                                },
                                items: BI.map(BI.Constants.getConstant("dec.constant.common.phone.type"), (function(e, t) {
                                    return {
                                        type: "dec.components.phone.editor.item",
                                        value: t.value,
                                        label: t.text,
                                        text: t.value
                                    }
                                }
                                )),
                                value: i.value,
                                ref: function(t) {
                                    e.codeCombo = t
                                },
                                listeners: [{
                                    eventName: "EVENT_CHANGE",
                                    action: function() {
                                        e.numberEditor.setValue("")
                                    }
                                }]
                            },
                            rgpa: 10
                        }, {
                            type: "bi.editor",
                            allowBlank: !0,
                            width: 100,
                            height: 32,
                            watermark: t.watermark,
                            errorTop: t.errorTop,
                            ref: function(t) {
                                e.numberEditor = t
                            },
                            listeners: [{
                                eventName: "EVENT_CHANGE",
                                action: function() {
                                    e.fireEvent("EVENT_CHANGE")
                                }
                            }, {
                                eventName: BI.Editor.EVENT_BLUR,
                                action: function() {
                                    e.fireEvent(BI.Editor.EVENT_BLUR, arguments)
                                }
                            }, {
                                eventName: BI.Editor.EVENT_FOCUS,
                                action: function() {
                                    e.fireEvent(BI.Editor.EVENT_FOCUS, arguments)
                                }
                            }, {
                                eventName: BI.Editor.EVENT_CHANGE,
                                action: function() {
                                    e.fireEvent(BI.Editor.EVENT_CHANGE, arguments)
                                }
                            }]
                        }]
                    }
                },
                focus: function() {
                    this.numberEditor.focus()
                },
                getValue: function() {
                    var e = this.codeCombo.getValue()
                      , t = this.numberEditor.getValue();
                    return BI.isKey(t) ? (e === DecCst.Web.Components.PhoneEditor.Code.ZH_CN ? "" : e) + t : ""
                }
            }),
            BI.shortcut("dec.components.phone.small_editor", e)
        },
        13633: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-search-editor bi-border bi-focus-shadow",
                    height: 24,
                    errorText: "",
                    watermark: BI.i18nText("BI-Basic_Search"),
                    validationChecker: BI.emptyFn,
                    quitChecker: BI.emptyFn
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    return this.editor = BI.createWidget({
                        type: "bi.editor",
                        height: i.height,
                        watermark: i.watermark,
                        allowBlank: !0,
                        hgap: 1,
                        errorText: i.errorText,
                        validationChecker: i.validationChecker,
                        quitChecker: i.quitChecker
                    }),
                    this.clear = BI.createWidget({
                        type: "bi.icon_button",
                        stopEvent: !0,
                        invisible: !0,
                        cls: "close-font"
                    }),
                    this.clear.on(BI.IconButton.EVENT_CHANGE, (function() {
                        t.setValue(""),
                        t.fireEvent(BI.Controller.EVENT_CHANGE, BI.Events.STOPEDIT),
                        t.fireEvent(e.EVENT_CLEAR)
                    }
                    )),
                    this.editor.on(BI.Controller.EVENT_CHANGE, (function() {
                        t.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_FOCUS, (function() {
                        t.fireEvent(e.EVENT_FOCUS)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_BLUR, (function() {
                        t.fireEvent(e.EVENT_BLUR)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_CLICK, (function() {
                        t.fireEvent(e.EVENT_CLICK)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_CHANGE, (function() {
                        t._checkClear(),
                        t.fireEvent(e.EVENT_CHANGE)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_KEY_DOWN, (function(i) {
                        t.fireEvent(e.EVENT_KEY_DOWN, i)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_SPACE, (function() {
                        t.fireEvent(e.EVENT_SPACE)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_BACKSPACE, (function() {
                        t.fireEvent(e.EVENT_BACKSPACE)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_VALID, (function() {
                        t.fireEvent(e.EVENT_VALID)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_ERROR, (function() {
                        t.fireEvent(e.EVENT_ERROR)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_ENTER, (function() {
                        t.fireEvent(e.EVENT_ENTER)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_RESTRICT, (function() {
                        t.fireEvent(e.EVENT_RESTRICT)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_EMPTY, (function() {
                        t._checkClear(),
                        t.fireEvent(e.EVENT_EMPTY)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_REMOVE, (function() {
                        t.fireEvent(e.EVENT_REMOVE)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_CONFIRM, (function() {
                        t.fireEvent(e.EVENT_CONFIRM)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_START, (function() {
                        t.fireEvent(e.EVENT_START)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_PAUSE, (function() {
                        t.fireEvent(e.EVENT_PAUSE)
                    }
                    )),
                    this.editor.on(BI.Editor.EVENT_STOP, (function() {
                        t.fireEvent(e.EVENT_STOP)
                    }
                    )),
                    {
                        type: "bi.htape",
                        items: [{
                            el: {
                                type: "bi.icon_label",
                                cls: "search-font"
                            },
                            width: 24
                        }, {
                            el: t.editor
                        }, {
                            el: this.clear,
                            width: 24
                        }]
                    }
                },
                _checkClear: function() {
                    this.getValue() ? this.clear.visible() : this.clear.invisible()
                },
                focus: function() {
                    this.editor.focus()
                },
                blur: function() {
                    this.editor.blur()
                },
                getValue: function() {
                    if (this.isValid())
                        return this.editor.getValue()
                },
                getKeywords: function() {
                    var e = this.editor.getValue()
                      , t = e.match(/[\S]+/g);
                    return BI.isEndWithBlank(e) ? t.concat([" "]) : t
                },
                getLastValidValue: function() {
                    return this.editor.getLastValidValue()
                },
                setValue: function(e) {
                    this.editor.setValue(e),
                    BI.isKey(e) && this.clear.visible()
                },
                isEditing: function() {
                    return this.editor.isEditing()
                },
                isValid: function() {
                    return this.editor.isValid()
                }
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            e.EVENT_FOCUS = "EVENT_FOCUS",
            e.EVENT_BLUR = "EVENT_BLUR",
            e.EVENT_CLICK = "EVENT_CLICK",
            e.EVENT_KEY_DOWN = "EVENT_KEY_DOWN",
            e.EVENT_SPACE = "EVENT_SPACE",
            e.EVENT_BACKSPACE = "EVENT_BACKSPACE",
            e.EVENT_CLEAR = "EVENT_CLEAR",
            e.EVENT_START = "EVENT_START",
            e.EVENT_PAUSE = "EVENT_PAUSE",
            e.EVENT_STOP = "EVENT_STOP",
            e.EVENT_CONFIRM = "EVENT_CONFIRM",
            e.EVENT_VALID = "EVENT_VALID",
            e.EVENT_ERROR = "EVENT_ERROR",
            e.EVENT_ENTER = "EVENT_ENTER",
            e.EVENT_RESTRICT = "EVENT_RESTRICT",
            e.EVENT_REMOVE = "EVENT_REMOVE",
            e.EVENT_EMPTY = "EVENT_EMPTY",
            BI.shortcut("dec.search.editor", e)
        },
        71202: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-component-loading-iframe",
                    src: "about_blank"
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.adaptive",
                        items: [{
                            type: "bi.iframe",
                            ref: function(t) {
                                e.iframe = t
                            },
                            src: t.src,
                            name: t.name,
                            attributes: BI.extend({
                                allowfullscreen: !0
                            }, t.attributes),
                            listeners: [{
                                eventName: "EVENT_LOADED",
                                action: function() {
                                    e.iframe.element.addClass("bi-card")
                                }
                            }]
                        }]
                    }
                },
                getValue: function() {
                    return this.iframe.element.attr("name")
                },
                setSrc: function(e) {
                    this.iframe.setSrc(e)
                },
                getSrc: function() {
                    return this.iframe.getSrc()
                },
                setName: function(e) {
                    this.iframe.setName(e)
                },
                getName: function() {
                    return this.iframe.getName()
                },
                setAttributes: function(e) {
                    this.iframe.element.attr(e)
                }
            }),
            BI.shortcut("dec.component.loading_iframe", e)
        },
        40979: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    width: 60,
                    height: 24
                },
                render: function() {
                    return this.options,
                    {
                        type: "bi.layout"
                    }
                },
                getValue: function() {
                    return this.options.value
                }
            }),
            BI.shortcut("dec.blankHolder", e)
        },
        77612: function() {
            var e;
            (e = BI.inherit(BI.Single, {
                props: {
                    baseCls: "dec-custom-checkbox dec-auth-checkbox",
                    selected: !1,
                    handler: BI.emptyFn,
                    iconClass: "auth-off-font",
                    height: 24,
                    width: 60,
                    iconWidth: 16,
                    iconHeight: 16,
                    bubble: !1,
                    bubbleText: BI.i18nText("Dec-Authority_User_Authority_Change_Tip_1") + "<br/>" + BI.i18nText("Dec-Authority_User_Authority_Change_Tip_2"),
                    block: !1,
                    preventIncompleteAuthorize: !1,
                    preventIncompleteAuthorizeText: BI.i18nText("Dec-Authority_Grade_Auth_Block_Tooltip"),
                    localStorageKey: "dec_authority_user_prompt"
                },
                render: function() {
                    var e = this.options;
                    return this._getCacheStatus() ? this._getNormalButton() : e.bubble ? this._getBubbleButton() : this._getNormalButton()
                },
                _getCacheStatus: function() {
                    return "true" === BI.Cache.getItem(this.options.localStorageKey)
                },
                _getIconCls: function() {
                    var e = this.options;
                    return this.isSelected() ? e.preventIncompleteAuthorize ? "auth-block-on-font" : "auth-on-font" : "auth-off-font"
                },
                _setIcon: function() {
                    var e = this.options
                      , t = this._getIconCls();
                    this.button.setIcon(t),
                    e.iconClass = t
                },
                _getNormalButton: function() {
                    var e = this;
                    return this.options,
                    BI.extend(this._initIconChangeButton(), {
                        listeners: [{
                            eventName: BI.IconChangeButton.EVENT_CHANGE,
                            action: function() {
                                e._handleClick()
                            }
                        }]
                    })
                },
                _getBubbleButton: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.bubble_combo",
                        ref: function(t) {
                            e.combo = t
                        },
                        trigger: "",
                        el: BI.extend(this._initIconChangeButton(), {
                            handler: function() {
                                t.preventIncompleteAuthorize && e.isSelected() || (e._getCacheStatus() ? e._handleClick() : e.combo.showView())
                            }
                        }),
                        isNeedAdjustWidth: !1,
                        popup: {
                            el: {
                                type: "bi.vertical",
                                $testId: "dec-checkbox-auth-tips",
                                hgap: 10,
                                vgap: 10,
                                items: [{
                                    type: "bi.vertical",
                                    items: [{
                                        type: "bi.html_label",
                                        text: t.bubbleText,
                                        whiteSpace: "normal",
                                        textHeight: 20
                                    }]
                                }, {
                                    type: "bi.left_right_vertical_adapt",
                                    items: {
                                        left: [{
                                            type: "bi.multi_select_item",
                                            cls: "bi-tips",
                                            lgap: -5,
                                            logic: {
                                                dynamic: !0
                                            },
                                            text: BI.i18nText("Dec-Basic_No_Prompt"),
                                            handler: function() {
                                                BI.Cache.setItem(e.options.localStorageKey, this.isSelected())
                                            }
                                        }],
                                        right: [{
                                            type: "bi.button",
                                            text: BI.i18nText("Dec-Yes_I_Known"),
                                            handler: function() {
                                                e.combo.hideView(),
                                                e._handleClick()
                                            }
                                        }]
                                    }
                                }]
                            }
                        }
                    }
                },
                _initIconChangeButton: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.icon_change_button",
                        ref: function(t) {
                            e.button = t
                        },
                        value: t.value,
                        iconCls: this._getIconCls(),
                        cls: "bi-user-select-disable",
                        title: function() {
                            return e.isSelected() && t.preventIncompleteAuthorize ? t.preventIncompleteAuthorizeText : ""
                        },
                        height: t.height,
                        selected: t.selected
                    }
                },
                _handleClick: function() {
                    this.options.preventIncompleteAuthorize && this.isSelected() || (this.options.selected = !this.options.selected,
                    this.fireEvent(BI.Controller.EVENT_CHANGE, BI.Events.STATECHANGE, this.getValue(), this))
                },
                setSelected: function(e) {
                    this.options.selected = e,
                    this._setIcon()
                },
                isSelected: function() {
                    return this.options.selected
                },
                setValue: function() {},
                getValue: function() {
                    return this.options.value
                }
            })).EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.auth.checkbox", e)
        },
        76577: function() {
            var e;
            e = BI.inherit(BI.Single, {
                props: {
                    baseCls: "bi-multi-select-bar",
                    $testId: "dec-multi-select-bar",
                    $value: "checkbox",
                    height: 25,
                    text: BI.i18nText("BI-Select_All"),
                    isAllCheckedBySelectedValue: BI.emptyFn,
                    disableSelected: !0,
                    isHalfCheckedBySelectedValue: function(e) {
                        return e.length > 0
                    }
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    this.checkbox = BI.createWidget({
                        type: "bi.checkbox",
                        stopPropagation: !0,
                        selected: t.selected,
                        handler: function() {
                            e.setSelected(e.isSelected())
                        }
                    }),
                    this.half = BI.createWidget({
                        type: "bi.half_icon_button",
                        stopPropagation: !0,
                        handler: function() {
                            e.setSelected(!0)
                        }
                    }),
                    this.checkbox.on(BI.Controller.EVENT_CHANGE, (function() {
                        e.fireEvent(BI.Controller.EVENT_CHANGE, BI.Events.CLICK, e.isSelected(), e)
                    }
                    )),
                    this.half.on(BI.Controller.EVENT_CHANGE, (function() {
                        e.fireEvent(BI.Controller.EVENT_CHANGE, BI.Events.CLICK, e.isSelected(), e)
                    }
                    )),
                    this.half.on(BI.HalfIconButton.EVENT_CHANGE, (function() {
                        e.fireEvent(BI.MultiSelectBar.EVENT_CHANGE, e.isSelected(), e)
                    }
                    )),
                    this.checkbox.on(BI.Checkbox.EVENT_CHANGE, (function() {
                        e.fireEvent(BI.MultiSelectBar.EVENT_CHANGE, e.isSelected(), e)
                    }
                    )),
                    BI.createWidget({
                        type: "bi.center_adapt",
                        element: this,
                        width: 24,
                        items: [this.checkbox, this.half]
                    }),
                    this.setHalfSelected(t.halfSelected)
                },
                beforeClick: function() {
                    var e = this.isHalfSelected()
                      , t = this.isSelected();
                    !0 === e ? this.setSelected(!0) : this.setSelected(!t)
                },
                setSelected: function(e) {
                    this.checkbox.setSelected(e),
                    this.setHalfSelected(!1)
                },
                setHalfSelected: function(e) {
                    this._half = !!e,
                    !0 === e ? (this.half.visible(),
                    this.checkbox.invisible()) : (this.half.invisible(),
                    this.checkbox.visible())
                },
                isHalfSelected: function() {
                    return !!this._half
                },
                isSelected: function() {
                    return this.checkbox.isSelected()
                },
                setValue: function() {}
            }),
            BI.shortcut("dec.multi.checkbox", e)
        },
        64011: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-form-checker"
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.form.error.item",
                        rules: t.rules,
                        el: BI.extend({
                            allowBlank: !t.rules.required,
                            validationChecker: function(t) {
                                return e._validate(t)
                            }
                        }, t.el, {
                            listeners: BI.concat([{
                                eventName: "EVENT_VALID",
                                action: function() {
                                    e.checkRow.hideError()
                                }
                            }, {
                                eventName: "EVENT_EMPTY",
                                action: function() {
                                    t.rules.required && e.checkRow.showError(BI.i18nText("Dec-Error_Null"))
                                }
                            }], t.el.listeners || [])
                        }),
                        ref: function(t) {
                            e.checkRow = t
                        }
                    }
                },
                _validate: function(e) {
                    var t = this.options
                      , i = BI.validator.validate(e, t.rules, t.stop);
                    return !(!BI.isNotNull(i) || !i.approved) || (this.checkRow.showError(i.errors[0]),
                    !1)
                }
            }),
            BI.shortcut("dec.form.checker", e)
        },
        15840: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-icon-item",
                    $testId: "dec-common-icon-item",
                    icon: "",
                    iconWidth: null,
                    iconHeight: null
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    BI.createWidget({
                        type: "bi.center_adapt",
                        element: this,
                        height: t.height,
                        width: t.width,
                        items: [{
                            type: "bi.icon",
                            cls: "icon-container",
                            ref: function(t) {
                                e.icon = t
                            },
                            width: t.iconWidth,
                            height: t.iconHeight
                        }]
                    }),
                    this.setIcon(t.icon)
                },
                _setCls: function(e) {
                    BI.isObject(this.options.icon) && this.icon.element.css({
                        backgroundImage: ""
                    }),
                    this.element.removeClass(this.options.icon).addClass(e),
                    this.options.icon = e
                },
                _setBackground: function(e) {
                    BI.isKey(this.options.icon) && this.element.removeClass(this.options.icon),
                    this.icon.element.css(e),
                    this.options.icon = e
                },
                setIcon: function(e) {
                    BI.isKey(e) ? this._setCls(e) : this._setBackground(e)
                }
            }),
            BI.shortcut("dec.common.icon_item", e)
        },
        7043: function(e, t, i) {
            var n, o, r = i(3911);
            function s(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function a(e, t) {
                return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return function(e, t) {
                        for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
                            var o = i[n]
                              , r = Object.getOwnPropertyDescriptor(t, o);
                            r && r.configurable && void 0 === e[o] && Object.defineProperty(e, o, r)
                        }
                    }(e, t),
                    e
                }
                ,
                a(e, t)
            }
            function c(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                e
            }
            var l = (0,
            r.shortcut)()((o = function(e) {
                var t, i;
                function n() {
                    for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                        n[o] = arguments[o];
                    return c(s(t = e.call.apply(e, [this].concat(n)) || this), "props", {
                        baseCls: "dec-common-label-item",
                        label: "",
                        items: [BI.h(BI.Fragment, null)]
                    }),
                    c(s(t), "layout", void 0),
                    t
                }
                i = e,
                (t = n).prototype = Object.create(i.prototype),
                t.prototype.constructor = t,
                a(t, i);
                var o = n.prototype;
                return o.render = function() {
                    var e = this
                      , t = (0,
                    r.getLayoutConstant)().LABEL_WIDTH
                      , i = this.options
                      , n = i.labelWidth
                      , o = void 0 === n ? t : n
                      , s = i.scrollx
                      , a = void 0 !== s && s
                      , c = this.createItems();
                    return BI.h(BI.HorizontalLayout, {
                        ref: function(t) {
                            e.layout = t
                        },
                        columnSize: [o, "fill"],
                        scrollx: a
                    }, c)
                }
                ,
                o.populate = function() {
                    var e = this.createItems();
                    this.layout.populate(e)
                }
                ,
                o.createItems = function() {
                    var e = (0,
                    r.getLayoutConstant)().HEIGHT
                      , t = this.options
                      , i = t.label
                      , n = t.text
                      , o = t.items;
                    return ["string" == typeof i ? BI.h(BI.Text, {
                        cls: "bi-font-bold",
                        lineHeight: e
                    }, i) : i, n ? BI.h(BI.Text, {
                        lineHeight: e
                    }, n) : o[0]]
                }
                ,
                n
            }(BI.Widget),
            c(o, "xtype", "dec.common.label_item"),
            n = o)) || n;
            BI.shortcut("dec.common.label.item", l)
        },
        91268: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-label-editor-item",
                    text: "",
                    textWidth: 115,
                    textAlign: "left",
                    textCls: "",
                    validationChecker: BI.emptyFn,
                    value: "",
                    allowBlank: !0,
                    inputType: "text",
                    editorWidth: 300,
                    errorTop: 0,
                    el: {},
                    bubbleError: !0
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vertical_adapt",
                        height: 24,
                        items: [{
                            el: {
                                type: "bi.label",
                                cls: t.textCls,
                                text: t.text,
                                title: t.text,
                                textHeight: 24,
                                width: t.textWidth,
                                textAlign: t.textAlign
                            },
                            rgap: t.textRGap
                        }, {
                            type: "dec.component.error_bubble_container",
                            width: t.editorWidth,
                            errorTop: t.errorTop,
                            el: BI.extend({
                                type: "bi.editor",
                                $value: "dec-label-editor-item-" + (t.$value ? t.$value : t.text),
                                cls: "bi-border bi-border-radius",
                                watermark: t.watermark,
                                inputType: t.inputType,
                                autocomplete: t.autocomplete,
                                height: 22,
                                value: t.value,
                                allowBlank: t.allowBlank,
                                validationChecker: t.validationChecker,
                                errorText: t.bubbleError ? t.errorText : "",
                                ref: function(t) {
                                    e.editor = t
                                },
                                listeners: [{
                                    eventName: BI.Editor.EVENT_FOCUS,
                                    action: function() {
                                        e.hideError(),
                                        e.fireEvent(BI.Editor.EVENT_FOCUS, arguments)
                                    }
                                }, {
                                    eventName: BI.Editor.EVENT_CHANGE,
                                    action: function() {
                                        e.fireEvent(BI.Editor.EVENT_CHANGE, arguments),
                                        e.hideError()
                                    }
                                }, {
                                    eventName: BI.Editor.EVENT_CONFIRM,
                                    action: function() {
                                        e.fireEvent(BI.Editor.EVENT_CONFIRM, arguments)
                                    }
                                }, {
                                    eventName: BI.Editor.EVENT_BLUR,
                                    action: function() {
                                        e.fireEvent(BI.Editor.EVENT_BLUR, arguments)
                                    }
                                }, {
                                    eventName: BI.Editor.EVENT_ERROR,
                                    action: function(i) {
                                        !t.bubbleError && BI.isNotNull(t.errorText) && e.editor.isEditing() && e.showError(BI.isFunction(t.errorText) ? t.errorText(i) : t.errorText)
                                    }
                                }, {
                                    eventName: BI.Editor.EVENT_VALID,
                                    action: function() {
                                        e.hideError()
                                    }
                                }]
                            }, t.el),
                            ref: function(t) {
                                e.editorError = t
                            }
                        }]
                    }
                },
                getValue: function() {
                    return this.editor.getValue()
                },
                setValue: function(e) {
                    this.editor.setValue(e),
                    this.hideError()
                },
                setWaterMark: function(e) {
                    this.editor.setWaterMark(e)
                },
                showError: function(e) {
                    this.editorError.showError(e)
                },
                focus: function() {
                    this.editor.focus()
                },
                hideError: function() {
                    this.editorError.hideError()
                }
            }),
            BI.shortcut("dec.label.editor.item", e)
        },
        89845: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-label-editor-item",
                    textWidth: 115,
                    textAlign: "left",
                    textCls: "",
                    text: "",
                    value: "",
                    allowBlank: !0,
                    editorWidth: 300,
                    errorTop: 0,
                    el: {},
                    realTime: !1,
                    stop: !0,
                    rules: {}
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = BI.isNotNull(t.rules.required) && t.realTime ? !t.rules.required : t.allowBlank;
                    return {
                        type: "bi.vertical_adapt",
                        height: 24,
                        items: [{
                            el: {
                                type: "bi.label",
                                cls: t.textCls,
                                text: t.text,
                                title: t.text,
                                textHeight: 24,
                                width: t.textWidth,
                                textAlign: t.textAlign
                            },
                            rgap: t.textRGap
                        }, {
                            type: "dec.component.error_bubble_container",
                            width: t.editorWidth,
                            errorTop: t.errorTop,
                            el: BI.extend({
                                type: "bi.editor",
                                $value: "dec-label-editor-" + (t.$value ? t.$value : t.text),
                                cls: "bi-border bi-border-radius",
                                watermark: t.watermark,
                                height: 22,
                                value: t.value,
                                allowBlank: i,
                                validationChecker: t.realTime ? function(t) {
                                    return e._validate(t)
                                }
                                : BI.emptyFn,
                                ref: function(t) {
                                    e.editor = t
                                },
                                listeners: [{
                                    eventName: BI.Editor.EVENT_FOCUS,
                                    action: function() {
                                        e.hideError(),
                                        e.fireEvent(BI.Editor.EVENT_FOCUS, arguments)
                                    }
                                }, {
                                    eventName: BI.Editor.EVENT_CHANGE,
                                    action: function() {
                                        e.fireEvent(BI.Editor.EVENT_CHANGE, arguments),
                                        e.hideError()
                                    }
                                }, {
                                    eventName: BI.Editor.EVENT_CONFIRM,
                                    action: function() {
                                        e.fireEvent(BI.Editor.EVENT_CONFIRM, arguments)
                                    }
                                }, {
                                    eventName: BI.Editor.EVENT_BLUR,
                                    action: function() {
                                        e.fireEvent(BI.Editor.EVENT_BLUR, arguments)
                                    }
                                }, {
                                    eventName: BI.Editor.EVENT_ERROR,
                                    action: function(t) {
                                        BI.isEmptyString(t) && e.editor.isEditing() && e.showError(BI.i18nText("Dec-Error_Null"))
                                    }
                                }, {
                                    eventName: BI.Editor.EVENT_VALID,
                                    action: function() {
                                        e.hideError()
                                    }
                                }]
                            }, t.el),
                            ref: function(t) {
                                e.editorError = t
                            }
                        }]
                    }
                },
                getValue: function() {
                    return this.editor.getValue()
                },
                setValue: function(e) {
                    this.editor.setValue(e),
                    this.hideError()
                },
                showError: function(e) {
                    this.editorError.showError(e)
                },
                focus: function() {
                    this.editor.focus()
                },
                hideError: function() {
                    this.editorError.hideError()
                },
                validate: function() {
                    return this._validate(this.getValue())
                },
                getValidations: function() {
                    var e = this.options;
                    return BI.validator.validate(this.getValue(), e.rules, e.stop)
                },
                _validate: function(e) {
                    var t = this.options
                      , i = BI.validator.validate(e, t.rules, t.stop);
                    return !(!BI.isNotNull(i) || !i.approved) || (this.showError(i.errors[0]),
                    !1)
                }
            }),
            BI.shortcut("dec.form.editor", e)
        },
        84329: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-label-line-feed",
                    textAlign: "left",
                    whiteSpace: "normal",
                    textHeight: 24
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.button_group",
                        layouts: [{
                            type: "bi.vertical"
                        }],
                        items: this._createItems(t.text),
                        ref: function(t) {
                            e.feedLine = t
                        }
                    }
                },
                setText: function(e) {
                    this.feedLine.populate(this._createItems(e))
                },
                _createItems: function(e) {
                    var t = this.options;
                    return e = e || "",
                    BI.map(e.split("\n"), (function(e, i) {
                        return {
                            type: "bi.label",
                            textAlign: t.textAlign,
                            textHeight: t.textHeight,
                            whiteSpace: t.whiteSpace,
                            text: i
                        }
                    }
                    ))
                }
            }),
            BI.shortcut("dec.label.line.feed", e)
        },
        37049: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-label-switch-button",
                    labelWidth: 115,
                    text: "",
                    value: !1
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    return {
                        type: "bi.vertical_adapt",
                        items: [{
                            type: "bi.label",
                            cls: "dec-font-weight-bold",
                            text: BI.i18nText(i.text),
                            title: BI.i18nText(i.text),
                            textHeight: 24,
                            textAlign: "left",
                            width: i.labelWidth
                        }, {
                            type: "dec.switch_button",
                            $value: i.text,
                            value: i.value,
                            listeners: [{
                                eventName: "EVENT_CHANGE",
                                action: function() {
                                    t.fireEvent(e.EVENT_CHANGE, arguments)
                                }
                            }],
                            ref: function(e) {
                                t.switchBtn = e
                            }
                        }]
                    }
                },
                getValue: function() {
                    return this.switchBtn.getValue()
                }
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.label.switch_button", e)
        },
        60990: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-label-textarea-item",
                    text: "",
                    textWidth: 115,
                    textCls: "",
                    value: "",
                    editorWidth: 300,
                    editorHeight: 100,
                    errorTop: 0,
                    textLGap: 0,
                    textRGap: 0,
                    textEl: {},
                    el: {},
                    allowBlank: !0
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return this.storeValue = t.value,
                    {
                        type: "bi.horizontal_adapt",
                        horizontalAlign: "left",
                        scrollx: !1,
                        columnSize: [t.textWidth, t.editorWidth],
                        height: t.editorHeight,
                        items: [{
                            el: BI.extend({
                                type: "bi.label",
                                cls: t.textCls,
                                text: t.text,
                                textHeight: 24,
                                textAlign: "left"
                            }, t.textEl),
                            lgap: t.textLGap,
                            rgap: t.textRGap
                        }, {
                            type: "dec.component.error_bubble_container",
                            errorTop: t.errorTop,
                            el: BI.extend({
                                type: "bi.textarea_editor",
                                $testId: "bi-editor",
                                $value: t.$value,
                                cls: "bi-border",
                                width: t.editorWidth - 2,
                                height: t.editorHeight - 2,
                                watermark: t.watermark,
                                value: t.value,
                                ref: function(t) {
                                    e.editor = t
                                },
                                listeners: [{
                                    eventName: BI.TextAreaEditor.EVENT_FOCUS,
                                    action: function() {
                                        e._checkError()
                                    }
                                }, {
                                    eventName: BI.TextAreaEditor.EVENT_BLUR,
                                    action: function() {
                                        e.setValue(e.storeValue)
                                    }
                                }, {
                                    eventName: BI.TextAreaEditor.EVENT_CHANGE,
                                    action: function() {
                                        e._checkError() || (e.storeValue = e.getValue(),
                                        e.fireEvent(BI.TextAreaEditor.EVENT_CHANGE, arguments))
                                    }
                                }]
                            }, t.el),
                            ref: function(t) {
                                e.editorError = t
                            }
                        }]
                    }
                },
                _checkError: function() {
                    var e = this.options.validationChecker
                      , t = !!BI.isFunction(e) && !e(this.getValue());
                    return this._setErrorVisible(this.isEnabled() && t),
                    t
                },
                _setErrorVisible: function(e) {
                    var t = this.options.errorText;
                    BI.isFunction(t) && (t = t(this.getValue())),
                    e && BI.isKey(t) ? this.showError(t) : this.hideError()
                },
                getValue: function() {
                    return this.editor.getValue()
                },
                setValue: function(e) {
                    this.storeValue = e,
                    this.editor.setValue(e),
                    this.hideError()
                },
                setWaterMark: function(e) {
                    this.editor.setWaterMark(e)
                },
                showError: function(e) {
                    this.editorError.showError(e)
                },
                focus: function() {
                    this.editor.focus()
                },
                hideError: function() {
                    this.editorError.hideError()
                },
                setWatermark: function(e) {
                    this.editor.setWatermark(e)
                }
            }),
            BI.shortcut("dec.label.textarea.item", e)
        },
        7050: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-label-value-item",
                    textWidth: 125,
                    textHeight: 24,
                    text: "",
                    value: ""
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vertical_adapt",
                        items: [{
                            type: "bi.label",
                            width: t.textWidth,
                            cls: "dec-font-weight-bold",
                            textHeight: t.textHeight,
                            text: t.text,
                            textAlign: "left"
                        }, {
                            type: "bi.label",
                            textAlign: "left",
                            textHeight: t.textHeight,
                            text: t.value,
                            ref: function(t) {
                                e.valueLabel = t
                            }
                        }]
                    }
                },
                setValue: function(e) {
                    this.valueLabel.setText(e)
                }
            }),
            BI.shortcut("dec.label.value.item", e)
        },
        67110: function() {
            var e;
            e = BI.inherit(BI.BasicButton, {
                props: {
                    baseCls: "dec-components-early-warning-radio-item"
                },
                mounted: function() {
                    this.isSelected() && this._showView()
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.combo",
                        ref: function(t) {
                            e.combo = t
                        },
                        trigger: "",
                        el: {
                            type: "bi.single_select_radio_item",
                            ref: function(t) {
                                e.radio = t
                            },
                            selected: t.selected,
                            text: t.text,
                            height: 24,
                            logic: {
                                dynamic: !0
                            }
                        },
                        popup: {
                            el: {
                                type: "bi.vertical",
                                items: [{
                                    type: "bi.tooltip",
                                    stopEvent: !0,
                                    text: t.warningText
                                }]
                            }
                        }
                    }
                },
                _showView: function() {
                    this.combo && this.combo.showView()
                },
                doClick: function() {
                    this.combo.showView()
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments),
                    this.radio.setSelected(t)
                },
                getValue: function() {
                    return this.options.value
                }
            }),
            BI.shortcut("dec.components.early_warning.radio.item", e)
        },
        12421: function() {
            var e;
            e = BI.inherit(BI.BasicButton, {
                props: {
                    baseCls: "dec-single-select-radio-multiline",
                    $testId: "dec-single-select-radio-multiline",
                    textHeight: 24,
                    vgap: 4,
                    hgap: 10
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.horizontal",
                        columnSize: [16, "fill"],
                        scrollx: !1,
                        vgap: t.vgap,
                        lgap: t.hgap,
                        items: [{
                            type: "bi.center_adapt",
                            height: t.textHeight,
                            items: [{
                                type: "bi.radio",
                                ref: function(t) {
                                    e.radio = t
                                }
                            }]
                        }, {
                            el: {
                                type: "bi.label",
                                cls: "list-item-text",
                                textAlign: "left",
                                whiteSpace: "normal",
                                textHeight: t.textHeight,
                                text: t.text,
                                keyword: t.keyword,
                                value: t.value,
                                py: t.py
                            },
                            lgap: 10
                        }]
                    }
                },
                doClick: function() {
                    e.superclass.doClick.apply(this, arguments),
                    this.radio.setSelected(this.isSelected())
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments),
                    this.radio.setSelected(t)
                }
            }),
            BI.shortcut("dec.single.select.radio.multiline.item", e)
        },
        33862: function(e, t, i) {
            var n, o, r = i(3911);
            function s(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function a(e, t) {
                return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return function(e, t) {
                        for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
                            var o = i[n]
                              , r = Object.getOwnPropertyDescriptor(t, o);
                            r && r.configurable && void 0 === e[o] && Object.defineProperty(e, o, r)
                        }
                    }(e, t),
                    e
                }
                ,
                a(e, t)
            }
            function c(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                e
            }
            i(48031);
            var l = (0,
            r.shortcut)()((o = function(e) {
                var t, i;
                function n() {
                    for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                        n[o] = arguments[o];
                    return c(s(t = e.call.apply(e, [this].concat(n)) || this), "props", {
                        baseCls: "dec-common-tag-item bi-border",
                        text: ""
                    }),
                    t
                }
                return i = e,
                (t = n).prototype = Object.create(i.prototype),
                t.prototype.constructor = t,
                a(t, i),
                n.prototype.render = function() {
                    var e = (0,
                    r.getLayoutConstant)()
                      , t = e.GAP_SMALL
                      , i = e.GAP_LARGE
                      , n = e.HEIGHT
                      , o = this.options.text;
                    return BI.h(BI.Text, {
                        hgap: i,
                        vgap: t,
                        lineHeight: n / 2
                    }, o)
                }
                ,
                n
            }(BI.Widget),
            c(o, "xtype", "dec.common.tag_item"),
            n = o)) || n
        },
        88087: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-base-wave-icon",
                    width: 60,
                    height: 60,
                    rectWidth: 5
                },
                render: function() {
                    var e = this.options;
                    return BI.isIE() && BI.getIEVersion() < 10 ? {
                        type: "bi.center_adapt",
                        cls: "wave-loading-icon",
                        items: [{
                            type: "bi.icon",
                            width: e.width,
                            height: e.height
                        }]
                    } : {
                        type: "bi.horizontal",
                        cls: "bi-loading-widget",
                        vgap: 2,
                        hgap: 10,
                        horizontalAlign: "center",
                        verticalAlign: "middle",
                        items: [{
                            type: "bi.layout",
                            cls: "animate-rect rect1",
                            height: .8 * e.height,
                            width: e.rectWidth
                        }, {
                            type: "bi.layout",
                            cls: "animate-rect rect2",
                            height: .8 * e.height,
                            width: e.rectWidth
                        }, {
                            type: "bi.layout",
                            cls: "animate-rect rect3",
                            height: .8 * e.height,
                            width: e.rectWidth
                        }]
                    }
                }
            }),
            BI.shortcut("dec.base.wave_icon", e)
        },
        61405: function() {
            var e, t;
            e = "__RESIZE_LAYERS_NAME__",
            t = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-drag-resize",
                    $testId: "dec-common-drag-resize",
                    leftWidth: 200,
                    resizeable: !0,
                    open: !0,
                    maxSize: 500,
                    minSize: 240
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return this.content = BI.createWidget(t.content),
                    {
                        type: "bi.absolute",
                        ref: function(t) {
                            e.wrapper = t
                        },
                        items: [{
                            el: this.content,
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: t.resizeable ? t.leftWidth : 20
                        }, {
                            el: {
                                type: "dec.slider",
                                $value: t.$value,
                                ref: function(t) {
                                    e.slider = t
                                },
                                cls: "dec-frame-popover",
                                width: 20,
                                popupWidth: t.leftWidth,
                                resizeable: t.resizeable,
                                open: t.open,
                                maxSize: t.maxSize,
                                minSize: t.minSize,
                                resize: function(t) {
                                    e._setLeftWidth(t),
                                    e.fireEvent("EVENT_RESIZE", t)
                                },
                                popup: t.popup,
                                hideChecker: function() {
                                    return !e.options.resizeable
                                },
                                startDragging: function() {
                                    e._createMasker()
                                },
                                stop: function() {
                                    e._hideMasker()
                                },
                                listeners: [{
                                    eventName: BI.Controller.EVENT_CHANGE,
                                    action: function() {
                                        e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                                    }
                                }]
                            },
                            top: 0,
                            bottom: 0,
                            left: 0
                        }]
                    }
                },
                _createMasker: function() {
                    BI.Layers.create(e, null, {
                        container: this.content,
                        render: {
                            type: "bi.layout",
                            cls: "dec-tabs-masker"
                        }
                    }),
                    BI.Layers.show(e)
                },
                _hideMasker: function() {
                    BI.Layers.remove(e)
                },
                _setLeftWidth: function(e) {
                    this.options.leftWidth = e,
                    this._resize(e)
                },
                _resize: function(e) {
                    this.wrapper.attr("items")[0].left = e,
                    this.wrapper.resize()
                },
                setResizeable: function(e) {
                    this.options.resizeable = e,
                    this.slider.setResizeable(e),
                    e ? this.slider.showView() : this.slider.hideView(),
                    this._resize(e ? this.options.leftWidth : 20)
                }
            }),
            BI.shortcut("dec.common.drag_resize", t)
        },
        29392: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-slider",
                    el: {},
                    popup: {},
                    hideChecker: BI.emptyFn,
                    showChecker: BI.emptyFn,
                    resizeable: !1,
                    open: !1
                },
                mounted: function() {
                    this._bindEvent()
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.absolute",
                                $testId: "dec-slider-trigger",
                                ref: function(t) {
                                    e.trigger = t
                                },
                                cls: "right-expand-font slider-trigger",
                                width: 20,
                                items: [{
                                    el: {
                                        type: "bi.icon"
                                    },
                                    left: 2,
                                    top: 7
                                }]
                            },
                            top: 0,
                            left: 0,
                            bottom: 0
                        }, {
                            el: {
                                type: "dec.common.resizeable_layout",
                                $value: t.$value,
                                cls: "slider-popup-wrapper " + (t.resizeable ? "" : "dec-slider-animate"),
                                ref: function(t) {
                                    e.popupWrapper = t
                                },
                                resizeable: t.resizeable,
                                maxSize: t.maxSize,
                                minSize: t.minSize,
                                width: t.open ? t.popupWidth : 0,
                                resize: BI.bind(this._resize, this),
                                stop: t.stop,
                                startDragging: t.startDragging,
                                item: t.popup
                            },
                            top: 0,
                            left: 0,
                            bottom: 0
                        }]
                    }
                },
                _bindEvent: function() {
                    var e, t = this, i = this.options;
                    this.element.on("mouseenter." + t.getName(), (function() {
                        e = window.setTimeout((function() {
                            t.isEnabled() && t.isValid() && (t.showView(),
                            t.fireEvent(BI.Controller.EVENT_CHANGE, BI.Events.EXPAND, "", t))
                        }
                        ), 300)
                    }
                    )),
                    this.element.on("mouseleave." + t.getName(), (function(n) {
                        window.clearTimeout(e),
                        !1 !== i.hideChecker.apply(this) && t.popupWrapper && (t.hideView(),
                        t.fireEvent(BI.Controller.EVENT_CHANGE, BI.Events.COLLAPSE, "", t))
                    }
                    ))
                },
                _resize: function(e) {
                    this.options.popupWidth = e,
                    this.popupWrapper.setWidth(e),
                    this.options.resize(e)
                },
                setResizeable: function(e) {
                    this.popupWrapper.setResizeable(e),
                    e ? this.popupWrapper.element.removeClass("dec-slider-animate") : this.popupWrapper.element.addClass("dec-slider-animate")
                },
                showView: function() {
                    this.isEnabled() && this.isValid() && this.popupWrapper.element.width(this.options.popupWidth)
                },
                hideView: function() {
                    this.popupWrapper && this.popupWrapper.element.width(0)
                }
            }),
            BI.shortcut("dec.slider", e)
        },
        5981: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-components-resizeable-h-tape",
                    left: {},
                    right: {}
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.absolute",
                        ref: function(t) {
                            e.container = t
                        },
                        items: [{
                            el: {
                                type: "dec.common.resizeable_layout",
                                resizeable: t.resizeable,
                                maxSize: t.maxSize,
                                minSize: t.minSize,
                                width: t.leftWidth,
                                resize: BI.bind(this._resize, this),
                                stop: t.stop,
                                startDragging: t.startDragging,
                                item: t.left
                            },
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: t.leftWidth
                        }, {
                            el: t.right,
                            top: 0,
                            left: t.leftWidth,
                            bottom: 0,
                            right: 0
                        }]
                    }
                },
                _resize: function(e) {
                    this.container.attr("items")[0].width = e,
                    this.container.attr("items")[1].left = e,
                    this.container.resize()
                }
            }),
            BI.shortcut("dec.components.resizeble.htape", e),
            BI.shortcut("dec.common.resizable_layout.htape", e)
        },
        25717: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "bi-resize-h-tape-layout",
                    item: {},
                    direction: "e",
                    minSize: 15,
                    maxSize: Number.MAX_VALUE,
                    start: BI.emptyFn,
                    resize: BI.emptyFn,
                    stop: BI.emptyFn,
                    resizeable: !0,
                    startDragging: BI.emptyFn
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = !1
                      , n = 0
                      , o = 0
                      , r = t.width || t.minSize
                      , s = {};
                    switch (this.cell = BI.createWidget(t.item),
                    t.direction) {
                    case "e":
                        s = {
                            right: -2,
                            top: 0,
                            bottom: 0
                        };
                        break;
                    case "w":
                        s = {
                            left: -2,
                            top: 0,
                            bottom: 0
                        }
                    }
                    function a(e) {
                        return BI.clamp(e, t.minSize, t.maxSize || Number.MAX_VALUE)
                    }
                    this.handler = BI.createWidget({
                        type: "bi.vertical_adapt",
                        cls: "font-drag resize-handle",
                        invisible: !t.resizeable,
                        width: 5,
                        $testId: "dec-resizeable-layout-resize-handle",
                        $value: t.$value,
                        items: [{
                            type: "bi.icon",
                            rgap: 3
                        }]
                    }),
                    this.handler.element.on("click", (function(e) {
                        e.stopPropagation()
                    }
                    )),
                    this._stared = !1;
                    var c = new BI.MouseMoveTracker((function(s, l) {
                        c.isDragging() && (e._stared || (e._stared = !0,
                        t.startDragging()),
                        $(document.body).css("cursor", "ew-resize"),
                        i = !0,
                        "w" === t.direction && (s = -s),
                        n = a(r + (o += s)),
                        e.handler.element.addClass("dragging"),
                        t.resize(n),
                        $(window).trigger("resize"))
                    }
                    ),(function() {
                        !0 === i && (n = a(n),
                        t.stop(n),
                        r = n,
                        n = 0,
                        o = 0,
                        i = !1,
                        e._stared = !1,
                        $(document.body).css("cursor", "auto")),
                        e.handler.element.removeClass("dragging"),
                        e.handler.element.removeClass("suitable"),
                        c.releaseMouseMoves()
                    }
                    ),document);
                    return this.handler.element.on("mousedown", (function(e) {
                        c.captureMouseMoves(e)
                    }
                    )),
                    {
                        type: "bi.absolute",
                        element: this,
                        items: [{
                            el: this.cell,
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, BI.extend({
                            el: this.handler
                        }, s)]
                    }
                },
                setMinSize: function(e) {
                    this.options.minSize = e
                },
                setMaxSize: function(e) {
                    this.options.maxSize = e
                },
                setResizeable: function(e) {
                    this.options.resizeable = e,
                    this.handler.setVisible(e),
                    $(window).trigger("resize")
                }
            }),
            BI.shortcut("dec.common.resizeable_layout", e),
            BI.shortcut("dec.common.resizable_layout", e)
        },
        80553: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-component-accordion",
                    itemHeight: 30,
                    openValue: null
                },
                mounted: function() {
                    BI.isNotNull(this.options.openValue) && this._expandItem(this.options.openValue),
                    this.resizeListener = BI.ResizeDetector.addResizeListener(this, BI.bind(this.resize, this))
                },
                render: function() {
                    var e = this;
                    return this.options,
                    {
                        type: "bi.absolute",
                        ref: function(t) {
                            e.wrapper = t
                        },
                        items: this._assertItems()
                    }
                },
                _expandItem: function(e) {
                    var t = this
                      , i = this.options;
                    i.openValue = e;
                    var n = this.element.height()
                      , o = this.wrapper.options.items;
                    BI.each(this.widgets, (function(i, n) {
                        e === n.getValue() ? (n.showView(),
                        t.expandIndex = i) : n.hideView()
                    }
                    )),
                    BI.each(this.widgets, (function(e, r) {
                        if (t.expandIndex < 0)
                            return delete o[e].bottom,
                            void (o[e].top = e * i.itemHeight);
                        t.expandIndex === e && (o[e].bottom = (i.items.length - 1 - e) * i.itemHeight,
                        o[e].top = e * i.itemHeight),
                        e > t.expandIndex && (o[e].bottom = (i.items.length - 1 - e) * i.itemHeight,
                        o[e].top = n - (i.items.length - e) * i.itemHeight),
                        e < t.expandIndex && (o[e].top = e * i.itemHeight,
                        o[e].bottom = n - (e - 1) * i.itemHeight)
                    }
                    )),
                    this.wrapper.resize()
                },
                _getBottomPosition: function(e) {
                    var t = this.options;
                    return (t.items.length - 1 - e) * t.itemHeight
                },
                _getTopPosition: function(e) {
                    return e * this.options.itemHeight
                },
                _collapseItem: function(e) {
                    var t = this.options
                      , i = this.wrapper.options.items;
                    t.openValue = null,
                    BI.each(this.widgets, (function(e, n) {
                        delete i[e].bottom,
                        n.element.css("bottom", ""),
                        i[e].top = e * t.itemHeight
                    }
                    )),
                    this.expandIndex = -1,
                    this.wrapper.resize()
                },
                _assertItems: function() {
                    var e = this
                      , t = this.options
                      , i = BI.createWidgets(BI.createItems(t.items, {}));
                    BI.each(i, (function(t, i) {
                        i.on(BI.Expander.EVENT_EXPAND, (function() {
                            e._expandItem(i.getValue())
                        }
                        )),
                        i.on(BI.Expander.EVENT_COLLAPSE, (function() {
                            e._collapseItem(i.getValue())
                        }
                        ))
                    }
                    )),
                    this.widgets = i;
                    var n = [];
                    return BI.each(t.items, (function(e, o) {
                        var r = {
                            left: 0,
                            right: 0
                        };
                        o.open && (t.openValue = o.value),
                        r.top = e * t.itemHeight,
                        n.push(BI.extend({
                            el: i[e]
                        }, r))
                    }
                    )),
                    n
                },
                resize: function() {
                    this._expandItem(this.options.openValue)
                },
                destroyed: function() {
                    this.resizeListener && this.resizeListener()
                }
            }),
            BI.shortcut("dec.component.accordion", e)
        },
        16517: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-component-accordion-expander"
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return this.popup = BI.createWidget(t.popup, {
                        invisible: !0
                    }),
                    this.trigger = BI.createWidget(t.el),
                    this.trigger.on("EVENT_CHANGE", (function(t) {
                        t ? e._showView() : e._hideView(),
                        e.fireEvent(t ? BI.Expander.EVENT_EXPAND : BI.Expander.EVENT_COLLAPSE)
                    }
                    )),
                    {
                        type: "bi.vtape",
                        ref: function(t) {
                            e.wrapper = t
                        },
                        items: [{
                            el: this.trigger,
                            height: t.el.height
                        }, {
                            el: this.popup
                        }]
                    }
                },
                _showView: function() {
                    this.popup.setVisible(!0),
                    this.trigger.setOpened(!0)
                },
                _hideView: function() {
                    this.popup.setVisible(!1),
                    this.trigger.setOpened(!1)
                },
                showView: function() {
                    this._showView()
                },
                hideView: function() {
                    this._hideView()
                }
            }),
            BI.shortcut("dec.component.accordion.expander", e)
        },
        62828: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-loader-list",
                    el: {},
                    items: [],
                    hasNext: BI.emptyFn
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    return {
                        type: "bi.loader",
                        ref: function(e) {
                            t.list = e
                        },
                        el: {
                            type: "bi.button_group",
                            chooseType: i.chooseType,
                            layouts: [{
                                type: "bi.virtual_group",
                                layouts: [{
                                    type: "bi.vertical"
                                }]
                            }]
                        },
                        element: this,
                        itemsCreator: function(e, n) {
                            i.itemsCreator(e, (function(e, i) {
                                n(t._formatItems(e), i)
                            }
                            ))
                        },
                        items: this._formatItems(i.items),
                        hasNext: i.hasNext,
                        listeners: [{
                            eventName: BI.Loader.EVENT_CHANGE,
                            action: function(i) {
                                t.fireEvent(e.EVENT_CHANGE, i.getValue(), i)
                            }
                        }]
                    }
                },
                _formatItems: function(e) {
                    var t = this.options;
                    return BI.map(e, (function(e, i) {
                        return BI.extend({
                            key: i.id || i.value
                        }, t.el, i)
                    }
                    ))
                },
                addItems: function(e) {
                    e = BI.isArray(e) ? e : [e],
                    this.list.addItems(this._formatItems(e))
                },
                getNodeByValue: function(e) {
                    return this.list.getNodeByValue(e)
                },
                setValue: function(e) {
                    this.list.setValue(e)
                },
                getValue: function() {
                    return this.list.getValue()
                },
                populate: function() {
                    0 !== arguments.length ? this.list.populate(this._formatItems.apply(this, arguments)) : this.list.populate()
                }
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.loader.list", e)
        },
        49521: function() {
            var e;
            e = BI.inherit(BI.BasicButton, {
                props: {
                    baseCls: "bi-list-item-active2 dec-common-search-list-item",
                    $testId: "dec-common-search-list-item",
                    layer: 0,
                    parentNames: []
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = this._initTitle()
                      , n = {
                        type: "bi.icon_button",
                        ref: function(t) {
                            e.gradeAdminRemark = t
                        },
                        cls: "remark-icon remark-font bi-keyword-red-mark",
                        title: BI.i18nText("Dec-Authority_Belong_To_Department_Tip"),
                        invisible: !t.selected || !t.includeGradeAdmin
                    };
                    return {
                        type: "bi.htape",
                        height: 54,
                        items: [{
                            type: "bi.vertical",
                            lgap: 10,
                            items: [{
                                el: {
                                    type: "bi.htape",
                                    ref: function(t) {
                                        e.container = t
                                    },
                                    height: 20,
                                    items: [{
                                        el: {
                                            type: "bi.label",
                                            textAlign: "left",
                                            text: t.text,
                                            title: i,
                                            keyword: t.keyword
                                        }
                                    }, {
                                        el: n,
                                        width: 0
                                    }]
                                },
                                tgap: 8
                            }, {
                                el: {
                                    type: "bi.label",
                                    height: 18,
                                    textAlign: "left",
                                    cls: "bi-tips",
                                    text: this._joinParentNames(),
                                    title: i
                                },
                                bgap: 8
                            }]
                        }]
                    }
                },
                _joinParentNames: function() {
                    return this.options.parentNames.join("/")
                },
                _initTitle: function() {
                    return this.options.text + "\n" + this._joinParentNames()
                },
                _showWarningIcon: function() {
                    if (this.options.includeGradeAdmin) {
                        var e = this.container.attr("items");
                        this.gradeAdminRemark.setVisible(!0),
                        BI.last(e).width = 16,
                        this.container.resize()
                    }
                },
                _hideWarningIcon: function() {
                    var e = this.container.attr("items");
                    BI.last(e).width = 0,
                    this.gradeAdminRemark.setVisible(!1),
                    this.container.resize()
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments),
                    t ? this._showWarningIcon() : this._hideWarningIcon()
                },
                getValue: function() {
                    return this.options.id
                }
            }),
            BI.shortcut("dec.common.search_list.item", e)
        },
        91720: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-search-list",
                    itemsCreator: BI.emptyFn,
                    isDefaultInit: !1,
                    scrollx: !1,
                    selectable: !0
                },
                watch: {},
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: "bi.loader",
                        ref: function(t) {
                            e.list = t
                        },
                        cls: "search-list-loader",
                        isDefaultInit: t.isDefaultInit,
                        el: {
                            type: "bi.button_tree",
                            chooseType: t.selectable ? BI.Selection.None : BI.Selection.Default,
                            layouts: [{
                                type: "bi.vertical"
                            }]
                        },
                        itemsCreator: function(i, n) {
                            t.listItemsCreator(i, (function(t) {
                                n(e._formatItems(t, i.layer + 1))
                            }
                            ))
                        },
                        hasNext: t.hasNext,
                        next: t.next,
                        listeners: [{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function(t, i, n) {
                                t === BI.Events.CLICK && (e.fireEvent("EVENT_CHANGE", i, n),
                                e.setValue(i)),
                                e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                            }
                        }]
                    };
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: i,
                            top: 0,
                            left: 0
                        }, {
                            el: {
                                type: "dec.components.emotional_tip",
                                ref: function(t) {
                                    e.tip = t
                                },
                                invisible: !0,
                                iconCls: "no-search-result-tip",
                                text: BI.i18nText("Dec-Basic_No_Search_Results")
                            },
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }]
                    }
                },
                _formatItems: function(e, t) {
                    var i = this
                      , n = this.options;
                    return BI.map(e, (function(e, o) {
                        return o.isParent ? {
                            type: "dec.common.search_list.tree",
                            layer: t || 0,
                            trigger: o,
                            itemsCreator: function(e, t) {
                                n.itemsCreator(e, (function(n) {
                                    t(i._formatSimpleItems(n, e.node.layer + 1))
                                }
                                ))
                            },
                            items: i._formatSimpleItems(o.items),
                            selectable: n.selectable
                        } : BI.extend({
                            type: "dec.common.search_list.item",
                            layer: t || 0
                        }, o)
                    }
                    ))
                },
                _formatSimpleItems: function(e, t) {
                    return BI.map(e, (function(e, i) {
                        return BI.defaults({}, i, {
                            type: i.isParent ? "dec.common.search_list.simple_node" : "dec.common.search_list.simple_item",
                            layer: t
                        })
                    }
                    ))
                },
                setValue: function(e) {
                    this.list.setValue(e)
                },
                populate: function(e) {
                    if (BI.isNull(e))
                        return this.list.populate(),
                        void this.tip.setVisible(!1);
                    this.tip.setVisible(BI.isEmptyArray(e)),
                    this.list.populate(this._formatItems(e))
                }
            }),
            BI.shortcut("dec.common.search_list", e)
        },
        45661: function() {
            var e;
            e = BI.inherit(BI.NodeButton, {
                props: {
                    baseCls: "bi-list-item-active2 dec-common-search-list-node",
                    layer: 0,
                    parentNames: []
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = this._initTitle()
                      , n = this._joinParentNames()
                      , o = {
                        type: "bi.icon_change_button",
                        $testId: "dec-common-search-list-node-triangle",
                        ref: function(t) {
                            e.arrow = t
                        },
                        stopPropagation: !0,
                        height: 20,
                        iconCls: t.open ? "triangle-expand-font" : "triangle-collapse-font",
                        listeners: [{
                            eventName: "EVENT_CHANGE",
                            action: function() {
                                e.triggerOpen()
                            }
                        }]
                    }
                      , r = {
                        type: "bi.icon_button",
                        ref: function(t) {
                            e.gradeAdminRemark = t
                        },
                        cls: "remark-icon remark-font bi-keyword-red-mark",
                        title: BI.i18nText("Dec-Authority_Belong_To_Department_Tip"),
                        invisible: !t.selected || !t.includeGradeAdmin
                    };
                    return t.rootNode ? {
                        type: "bi.htape",
                        $testId: "dec-common-search-list-root-node",
                        $scope: t.text,
                        ref: function(t) {
                            e.container = t
                        },
                        height: 34,
                        items: [{
                            el: {
                                type: "bi.vertical",
                                items: [{
                                    el: o,
                                    tgap: 8
                                }]
                            },
                            width: 16
                        }, {
                            el: {
                                type: "bi.vertical",
                                items: [{
                                    el: {
                                        type: "bi.label",
                                        height: 20,
                                        textAlign: "left",
                                        text: t.text,
                                        title: i,
                                        keyword: t.keyword
                                    },
                                    tgap: 8
                                }]
                            },
                            lgap: 10
                        }, {
                            el: r,
                            width: 0
                        }]
                    } : {
                        type: "bi.htape",
                        $testId: "dec-common-search-list-node",
                        $scope: t.text + "-" + n,
                        height: 54,
                        items: [{
                            el: {
                                type: "bi.vertical",
                                items: [{
                                    el: o,
                                    tgap: 8
                                }]
                            },
                            width: 16
                        }, {
                            el: {
                                type: "bi.vertical",
                                items: [{
                                    el: {
                                        type: "bi.htape",
                                        ref: function(t) {
                                            e.container = t
                                        },
                                        height: 20,
                                        items: [{
                                            el: {
                                                type: "bi.label",
                                                textAlign: "left",
                                                text: t.text,
                                                title: i,
                                                keyword: t.keyword
                                            }
                                        }, {
                                            el: r,
                                            width: 0
                                        }]
                                    },
                                    tgap: 8
                                }, {
                                    el: {
                                        type: "bi.label",
                                        height: 18,
                                        textAlign: "left",
                                        cls: "bi-tips",
                                        text: n,
                                        title: i
                                    },
                                    bgap: 8
                                }]
                            },
                            lgap: 10
                        }]
                    }
                },
                _joinParentNames: function() {
                    return this.options.parentNames.join("/")
                },
                _initTitle: function() {
                    return this.options.text + "\n" + this._joinParentNames()
                },
                _showWarningIcon: function() {
                    if (this.options.includeGradeAdmin) {
                        var e = this.container.attr("items");
                        this.gradeAdminRemark.setVisible(!0),
                        BI.last(e).width = 16,
                        this.container.resize()
                    }
                },
                _hideWarningIcon: function() {
                    var e = this.container.attr("items");
                    BI.last(e).width = 0,
                    this.gradeAdminRemark.setVisible(!1),
                    this.container.resize()
                },
                doClick: function() {},
                triggerOpen: function() {
                    this.isOpened() ? this.triggerCollapse() : this.triggerExpand()
                },
                getValue: function() {
                    return this.options.id
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments),
                    t ? this._showWarningIcon() : this._hideWarningIcon()
                },
                setOpened: function(t) {
                    e.superclass.setOpened.apply(this, arguments),
                    this.arrow.setIcon(t ? "triangle-expand-font" : "triangle-collapse-font")
                }
            }),
            BI.shortcut("dec.common.search_list.node", e)
        },
        905: function() {
            var e;
            e = BI.inherit(BI.BasicButton, {
                props: {
                    baseCls: "bi-list-item-active2 dec-common-search-list-simple-item",
                    $testId: "dec-common-search-list-simple-item",
                    layer: 0
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: "bi.icon_button",
                        ref: function(t) {
                            e.gradeAdminRemark = t
                        },
                        cls: "remark-icon remark-font bi-keyword-red-mark",
                        title: BI.i18nText("Dec-Authority_Belong_To_Department_Tip"),
                        invisible: !t.selected || !t.includeGradeAdmin
                    };
                    return {
                        type: "bi.htape",
                        ref: function(t) {
                            e.container = t
                        },
                        height: 24,
                        items: [{
                            el: {
                                type: "bi.label",
                                textAlign: "left",
                                text: t.text,
                                title: t.text,
                                keyword: t.keyword
                            },
                            lgap: 21 + 24 * t.layer
                        }, {
                            el: i,
                            width: 0
                        }]
                    }
                },
                _showWarningIcon: function() {
                    if (this.options.includeGradeAdmin) {
                        var e = this.container.attr("items");
                        this.gradeAdminRemark.setVisible(!0),
                        BI.last(e).width = 16,
                        this.container.resize()
                    }
                },
                _hideWarningIcon: function() {
                    var e = this.container.attr("items");
                    this.gradeAdminRemark.setVisible(!1),
                    BI.last(e).width = 0,
                    this.container.resize()
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments),
                    t ? this._showWarningIcon() : this._hideWarningIcon()
                },
                getValue: function() {
                    return this.options.id
                }
            }),
            BI.shortcut("dec.common.search_list.simple_item", e)
        },
        6322: function() {
            var e;
            e = BI.inherit(BI.NodeButton, {
                props: {
                    baseCls: "bi-list-item-active2 dec-common-search-list-simple-node",
                    $testId: "dec-common-search-list-simple-node",
                    layer: 0
                },
                watch: {},
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: "bi.icon_change_button",
                        ref: function(t) {
                            e.arrow = t
                        },
                        stopPropagation: !0,
                        iconCls: t.open ? "triangle-expand-font" : "triangle-collapse-font",
                        listeners: [{
                            eventName: "EVENT_CHANGE",
                            action: function() {
                                e.triggerOpen()
                            }
                        }]
                    }
                      , n = {
                        type: "bi.icon_button",
                        ref: function(t) {
                            e.gradeAdminRemark = t
                        },
                        cls: "remark-icon remark-font bi-keyword-red-mark",
                        title: BI.i18nText("Dec-Authority_Belong_To_Department_Tip"),
                        invisible: !t.selected || !t.includeGradeAdmin
                    };
                    return {
                        type: "bi.htape",
                        ref: function(t) {
                            e.container = t
                        },
                        height: 24,
                        items: [{
                            el: {
                                type: "bi.center_adapt",
                                items: [{
                                    el: i
                                }]
                            },
                            width: 16,
                            lgap: 24 * t.layer
                        }, {
                            el: {
                                type: "bi.label",
                                textAlign: "left",
                                text: t.text,
                                title: t.text,
                                keyword: t.keyword
                            },
                            lgap: 5
                        }, {
                            el: n,
                            width: 0
                        }]
                    }
                },
                _showWarningIcon: function() {
                    if (this.options.includeGradeAdmin) {
                        var e = this.container.attr("items");
                        this.gradeAdminRemark.setVisible(!0),
                        BI.last(e).width = 16,
                        this.container.resize()
                    }
                },
                _hideWarningIcon: function() {
                    var e = this.container.attr("items");
                    this.gradeAdminRemark.setVisible(!1),
                    BI.last(e).width = 0,
                    this.container.resize()
                },
                doClick: function() {},
                triggerOpen: function() {
                    this.isOpened() ? this.triggerCollapse() : this.triggerExpand()
                },
                getValue: function() {
                    return this.options.id
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments),
                    t ? this._showWarningIcon() : this._hideWarningIcon()
                },
                setOpened: function(t) {
                    e.superclass.setOpened.apply(this, arguments),
                    this.arrow.setIcon(t ? "triangle-expand-font" : "triangle-collapse-font")
                }
            }),
            BI.shortcut("dec.common.search_list.simple_node", e)
        },
        77975: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-search-list-tree",
                    layer: 0,
                    parentNames: [],
                    selectable: !0
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = BI.extend({
                        type: "dec.common.search_list.node",
                        layer: 0
                    }, t.trigger, {
                        ref: function(t) {
                            e.triggerNode = t
                        }
                    })
                      , n = {
                        type: "bi.loader",
                        ref: function(t) {
                            e.tree = t
                        },
                        items: t.items,
                        el: {
                            type: "bi.custom_tree",
                            expander: {
                                type: t.selectable ? "bi.select_tree_expander" : "bi.expander",
                                isDefaultInit: !1,
                                trigger: "",
                                el: {},
                                popup: {
                                    type: "bi.custom_tree",
                                    chooseType: t.selectable ? BI.Selection.None : BI.Selection.Default
                                }
                            },
                            itemsCreator: function(i, n) {
                                i.node = i.node || BI.extend({
                                    id: e.options.trigger.id,
                                    layer: 0
                                }, e.options.trigger),
                                t.itemsCreator(i, (function(e) {
                                    n(e)
                                }
                                ))
                            },
                            el: {
                                type: "dec.component.gradually_loader",
                                next: !1,
                                el: {
                                    type: "bi.button_tree",
                                    chooseType: t.selectable ? BI.Selection.None : BI.Selection.Default,
                                    layouts: [{
                                        type: "bi.vertical"
                                    }]
                                }
                            },
                            listeners: [{
                                eventName: BI.Controller.EVENT_CHANGE,
                                action: function(t, i, n) {
                                    e.fireEvent(BI.Controller.EVENT_CHANGE, t, i, n)
                                }
                            }]
                        }
                    };
                    return {
                        type: t.selectable ? "bi.select_tree_expander" : "bi.expander",
                        ref: function(t) {
                            e.expander = t
                        },
                        el: i,
                        popup: n,
                        trigger: "",
                        isDefaultInit: !1,
                        listeners: [{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function(t, i, n) {
                                e.fireEvent(BI.Controller.EVENT_CHANGE, arguments),
                                t === BI.Events.CLICK && e.fireEvent("EVENT_CHANGE", i)
                            }
                        }]
                    }
                },
                getValue: function() {
                    return this.options.trigger.id
                },
                setValue: function(e) {
                    this.expander.setValue(e)
                }
            }),
            BI.shortcut("dec.common.search_list.tree", e)
        },
        41184: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    items: [],
                    itemsCreator: BI.emptyFn,
                    perPage: 100,
                    chooseType: -1
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.loader",
                        ref: function(t) {
                            e.loader = t
                        },
                        itemsCreator: function(i, n) {
                            t.itemsCreator(i, (function(i) {
                                i.length < t.perPage ? n(i) : (n(i.splice(0, t.perPage)),
                                e.lazyAddItems(i))
                            }
                            ))
                        },
                        items: t.items,
                        next: !1,
                        chooseType: t.chooseType,
                        el: {
                            type: "bi.button_tree",
                            chooseType: t.chooseType,
                            layouts: [{
                                type: "bi.vertical"
                            }]
                        },
                        listeners: [{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function() {
                                e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                            }
                        }, {
                            eventName: BI.Loader.EVENT_CHANGE,
                            action: function() {
                                e.fireEvent(BI.Loader.EVENT_CHANGE, arguments)
                            }
                        }]
                    }
                },
                lazyAddItems: function(e) {
                    var t = this
                      , i = this.options;
                    BI.isEmptyArray(e) || BI.delay((function() {
                        t.addItems(e.splice(0, i.perPage)),
                        t.lazyAddItems(e)
                    }
                    ), 80)
                },
                setValue: function(e) {
                    this.loader.setValue(e)
                },
                getValue: function() {
                    return this.loader.getValue()
                },
                addItems: function(e) {
                    this.loader.addItems(e)
                },
                populate: function() {
                    this.loader.populate.apply(this.loader, arguments)
                }
            }),
            BI.shortcut("dec.component.gradually_loader", e)
        },
        33626: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-component-lazy-loader",
                    items: [],
                    itemsCreator: BI.emptyFn,
                    chooseType: -1,
                    getScrollParent: BI.emptyFn,
                    itemHeight: 24
                },
                mounted: function() {
                    var e = this;
                    this._listenScroll(),
                    BI.ResizeDetector.addResizeListener(this, (function() {
                        e._handleScroll()
                    }
                    ))
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return this.cacheItems = t.items,
                    this.loadIndex = 0,
                    {
                        type: "bi.loader",
                        ref: function(t) {
                            e.loader = t
                        },
                        itemsCreator: BI.bind(this._itemsCreator, this),
                        items: [],
                        next: !1,
                        chooseType: t.chooseType,
                        el: {
                            type: "bi.button_tree",
                            chooseType: t.chooseType,
                            layouts: [{
                                type: "bi.vertical"
                            }]
                        },
                        listeners: [{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function() {
                                e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                            }
                        }, {
                            eventName: BI.Loader.EVENT_CHANGE,
                            action: function() {
                                e.fireEvent(BI.Loader.EVENT_CHANGE, arguments)
                            }
                        }]
                    }
                },
                _getScrollParent: function() {
                    return this.options.getScrollParent() || this.element
                },
                _reCacheItems: function(e) {
                    this.cacheItems = e,
                    this.loadIndex = 0
                },
                _initFirstPageItems: function() {
                    var e = this.options;
                    if (!this.isMounted())
                        return [];
                    this.scrollParent = this._getScrollParent();
                    var t = this.scrollParent.height()
                      , i = Math.ceil(t / e.itemHeight * 1.5);
                    return this.loadIndex += i,
                    this.cacheItems.slice(0, this.loadIndex)
                },
                _getItemsByLoadIndex: function() {
                    var e = this.options
                      , t = this.loadIndex;
                    if (0 === t)
                        return this._initFirstPageItems();
                    this.scrollParent = this._getScrollParent();
                    var i = this.scrollParent.height()
                      , n = Math.ceil(i / e.itemHeight * .5);
                    return this.loadIndex += n,
                    this.cacheItems.slice(t, this.loadIndex)
                },
                _listenScroll: function() {
                    var e = this;
                    this.scrollParent = this._getScrollParent(),
                    this.scrollParent.on("scroll." + this.getName(), (function(t) {
                        e._handleScroll(t)
                    }
                    )),
                    BI.isNotEmptyArray(this.cacheItems) && this.loadMore()
                },
                _unListenScroll: function() {
                    this.scrollParent = this._getScrollParent(),
                    this.scrollParent.off("scroll." + this.getName())
                },
                _handleScroll: function(e) {
                    var t = this.options;
                    this.scrollParent.offset().top + this.scrollParent.height() >= this.element.offset().top + this.element.height() - t.itemHeight && this.loadMore()
                },
                _itemsCreator: function(e, t) {
                    var i = this
                      , n = this.options;
                    0 === this.loadIndex && (BI.isNotEmptyArray(this.cacheItems) ? t(this._initFirstPageItems()) : n.itemsCreator(e, (function(e) {
                        i._reCacheItems(e),
                        t(i._initFirstPageItems())
                    }
                    )))
                },
                loadMore: function() {
                    var e = this._getItemsByLoadIndex();
                    BI.isNotEmptyArray(e) && this.addItems(e)
                },
                setValue: function(e) {
                    this.loader.setValue(e)
                },
                getValue: function() {
                    return this.loader.getValue()
                },
                addItems: function(e) {
                    this.loader.addItems(e)
                },
                populate: function(e) {
                    this.loader.populate(e)
                },
                beforeDestroy: function() {
                    this._unListenScroll()
                }
            }),
            BI.shortcut("dec.component.lazy_loader", e)
        },
        33902: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-error-masker bi-card",
                    text: ""
                },
                render: function() {
                    var e = this.options;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.horizontal_auto",
                                bgap: 20,
                                items: [{
                                    type: "bi.layout",
                                    cls: "dec-error-tip-masker",
                                    height: 250
                                }, {
                                    type: "bi.label",
                                    cls: "dec-error-tip-text",
                                    textAlign: e.text.length > 30 ? "left" : "center",
                                    text: e.text,
                                    whiteSpace: "normal",
                                    width: 540
                                }]
                            },
                            left: 0,
                            right: 0,
                            top: "16%"
                        }]
                    }
                }
            }),
            BI.shortcut("dec.error_masker.single", e)
        },
        60197: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-migration-progress",
                    barWidth: 300,
                    start: 2
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.absolute",
                        height: 20,
                        width: t.barWidth,
                        items: [{
                            el: {
                                type: "bi.vertical_adapt",
                                items: [{
                                    type: "bi.label",
                                    disabled: !0,
                                    ref: function(t) {
                                        e.progressLabel = t
                                    }
                                }]
                            },
                            top: 20,
                            left: 0
                        }, {
                            el: {
                                type: "bi.absolute",
                                height: 10,
                                cls: "bi-border dec-progress-bar",
                                items: [{
                                    el: {
                                        type: "bi.layout",
                                        cls: "track gray-track",
                                        height: 10
                                    },
                                    top: 0,
                                    left: 0,
                                    width: "100%"
                                }, {
                                    el: {
                                        type: "bi.layout",
                                        cls: "track blue-track bi-high-light-background",
                                        height: 10,
                                        width: t.start + "%",
                                        ref: function(t) {
                                            e.blueTrack = t
                                        }
                                    },
                                    top: 0,
                                    left: 0
                                }]
                            },
                            top: 0,
                            left: 0,
                            width: t.barWidth
                        }]
                    }
                },
                populate: function(e) {
                    this.blueTrack.element.animate({
                        width: e + "%"
                    }, "slow")
                }
            }),
            BI.shortcut("dec.components.progress", e)
        },
        7321: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-scroll-bar",
                    $testId: "dec-common-scroll-bar"
                },
                mounted: function() {
                    this.element.mousedown(BI.bind(this._onMouseDown, this))
                },
                render: function() {
                    var e = this;
                    return {
                        type: "bi.absolute",
                        width: 16,
                        items: [{
                            el: {
                                type: "dec.common.scroll_bar_thumb",
                                ref: function(t) {
                                    e.thumb = t
                                },
                                listeners: [{
                                    eventName: "EVENT_DRAG",
                                    action: function(t) {
                                        e._onMouseMove(t)
                                    }
                                }]
                            },
                            left: 4,
                            right: 4,
                            top: 0
                        }]
                    }
                },
                _onMouseMove: function(e) {
                    var t = this.thumb.getOffsetHeight() * e / 100 * 100 / this.element.height();
                    this.fireEvent("EVENT_SCROLL", t)
                },
                _onMouseDown: function(e) {
                    if (e.target === this.element[0]) {
                        var t = 100 * (Math.abs(e.target.getBoundingClientRect().top - e.clientY) - this.thumb.getOffsetHeight() / 2) / this.element[0].offsetHeight;
                        this.fireEvent("EVENT_SCROLL", t)
                    }
                },
                updateThumbHeight: function(e) {
                    e >= 100 ? this.setVisible(!1) : this.setVisible(!0),
                    this.thumb.updateThumbHeight(e)
                },
                translateThumb: function(e) {
                    this.thumb.translateThumb(e)
                }
            }),
            BI.shortcut("dec.common.scroll_bar", e)
        },
        46392: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-scroll-content"
                },
                render: function() {
                    return {
                        type: "bi.default",
                        items: [this.options.content]
                    }
                }
            }),
            BI.shortcut("dec.common.scroll_content", e)
        },
        8579: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-scroll-view",
                    content: {},
                    classNames: {},
                    overlay: !1
                },
                mounted: function() {
                    this._updateThumbHeight()
                },
                render: function() {
                    var e = this;
                    return BI.isIE9Below() ? this.options.content : {
                        type: "bi.absolute",
                        scrollable: !1,
                        items: [{
                            el: {
                                type: "dec.common.scroll_wrap",
                                ref: function(t) {
                                    e.scrollWrap = t
                                },
                                content: this.options.content,
                                overlay: this.options.overlay,
                                listeners: [{
                                    eventName: "EVENT_SCROLL",
                                    action: function(t) {
                                        e._translateThumb(t)
                                    }
                                }]
                            },
                            top: 0,
                            left: 0,
                            right: 0
                        }, {
                            el: {
                                type: "dec.common.scroll_bar",
                                ref: function(t) {
                                    e.scrollBar = t
                                },
                                classNames: {},
                                listeners: [{
                                    eventName: "EVENT_SCROLL",
                                    action: function(t) {
                                        e._updateScrollTop(t)
                                    }
                                }]
                            },
                            top: 2,
                            right: 0,
                            bottom: 0
                        }]
                    }
                },
                _updateScrollTop: function(e) {
                    this.scrollWrap.updateScrollTop(e)
                },
                _getThumbHeight: function() {
                    return this.scrollWrap.getThumbHeight()
                },
                _updateThumbHeight: function() {
                    this.scrollBar && this.scrollBar.updateThumbHeight(this._getThumbHeight())
                },
                _translateThumb: function(e) {
                    this._updateThumbHeight(),
                    this.scrollBar.translateThumb(e)
                }
            }),
            BI.shortcut("dec.common.scroll_view", e)
        },
        84033: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-scroll-bar-thumb cursor-pointer",
                    $testId: "dec-common-scroll-bar-thumb",
                    height: 0,
                    translateY: 0
                },
                mounted: function() {
                    this._mouseMoveTracker = new BI.MouseMoveTracker(BI.bind(this._onMouseMove, this),BI.bind(this._onMouseMoveEnd, this),document),
                    this.element.mousedown(BI.bind(this._onMouseDown, this))
                },
                render: function() {
                    return {
                        type: "bi.layout"
                    }
                },
                _onMouseMove: function(e, t) {
                    this.element.addClass("dragging");
                    var i = this.element.height()
                      , n = (this.options.translateY * i / 100 + t) / i * 100;
                    this.fireEvent("EVENT_DRAG", n)
                },
                _onMouseMoveEnd: function(e) {
                    this.element.removeClass("dragging"),
                    this._mouseMoveTracker.releaseMouseMoves()
                },
                _onMouseDown: function(e) {
                    this._mouseMoveTracker.captureMouseMoves(e)
                },
                getOffsetHeight: function() {
                    return this.element.height()
                },
                updateThumbHeight: function(e) {
                    e += "%",
                    this.options.height = e,
                    this.element.height(e)
                },
                translateThumb: function(e) {
                    this.options.translateY = e,
                    this.element.css("transform", "translateY(" + e + "%)")
                }
            }),
            BI.shortcut("dec.common.scroll_bar_thumb", e)
        },
        89907: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-scroll-wrapper",
                    height: "100%"
                },
                mounted: function() {
                    var e = this;
                    this.element.css("marginRight", 0 - BI.DOM.getScrollWidth()),
                    !this.options.overlay && this.content.element.css("marginRight", BI.DOM.getScrollWidth()),
                    this.element.scroll(BI.bind(this._handleScroll, this)),
                    BI.ResizeDetector.addResizeListener(this.content, (function() {
                        e._handleResize()
                    }
                    ))
                },
                render: function() {
                    var e = this;
                    return {
                        type: "bi.absolute",
                        scrollable: !0,
                        items: [{
                            el: {
                                type: "dec.common.scroll_content",
                                ref: function(t) {
                                    e.content = t
                                },
                                content: this.options.content,
                                listeners: [{
                                    eventName: "EVENT_RESIZE",
                                    action: function() {
                                        e._handleResize()
                                    }
                                }]
                            },
                            top: 0,
                            left: 0,
                            right: 0
                        }]
                    }
                },
                _handleResize: function() {
                    this._handleScroll()
                },
                _handleScroll: function() {
                    var e = 100 * this.element.scrollTop() / this.element.height();
                    this.fireEvent("EVENT_SCROLL", e)
                },
                getThumbHeight: function() {
                    return 100 * this.element.height() / this.element[0].scrollHeight
                },
                updateScrollTop: function(e) {
                    var t = this.element[0].scrollHeight;
                    this.element.scrollTop(e * t / 100)
                }
            }),
            BI.shortcut("dec.common.scroll_wrap", e)
        },
        63487: function() {},
        5977: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-status-change-fail",
                    $testId: "dec-status-change-fail",
                    text: "",
                    link: ""
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.test.status.fail")
                },
                watch: {
                    "showStatus.message": function(e) {
                        this.failMessage.setText(e)
                    },
                    showDetail: function(e) {
                        this.detail.setVisible(e);
                        var t = e ? BI.i18nText("Dec-Basic_Pack_Up_Information") : BI.i18nText("Dec-Basic_Detailed_Information");
                        this.detailBtn.setText(t)
                    }
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.vertical",
                                items: [{
                                    type: "dec.tip.icon.vertical",
                                    iconCls: "upload-fail-icon",
                                    iconTgap: 40,
                                    text: t.text,
                                    ref: function(t) {
                                        e.failText = t
                                    }
                                }, {
                                    type: "bi.horizontal_float",
                                    items: [{
                                        type: "bi.vertical_adapt",
                                        tgap: 15,
                                        items: [{
                                            el: {
                                                type: "bi.button",
                                                text: BI.i18nText("Dec-Basic_Detailed_Information"),
                                                level: "ignore",
                                                ref: function(t) {
                                                    e.detailBtn = t
                                                },
                                                handler: function() {
                                                    e.store.setShowDetail(this.isSelected())
                                                }
                                            },
                                            rgap: 5
                                        }, {
                                            el: BI.extend({
                                                type: "bi.button",
                                                level: "ignore",
                                                text: BI.i18nText("Dec-Basic_Back"),
                                                handler: function() {
                                                    e.fireEvent("EVENT_CLOSE")
                                                }
                                            }, t.okBtn),
                                            lgap: 5
                                        }]
                                    }]
                                }]
                            },
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        }, {
                            el: {
                                type: "bi.vertical",
                                cls: "bi-card",
                                hgap: 5,
                                items: [{
                                    el: {
                                        type: "bi.vertical",
                                        height: 73,
                                        cls: "error-background",
                                        hgap: 10,
                                        scrolly: !0,
                                        invisible: !0,
                                        items: BI.concat([{
                                            el: {
                                                type: "dec.label.line.feed",
                                                cls: "message-board",
                                                width: 400,
                                                textHeight: 16,
                                                text: "",
                                                ref: function(t) {
                                                    e.failMessage = t
                                                }
                                            },
                                            tgap: 5
                                        }], t.failInfo),
                                        ref: function(t) {
                                            e.detail = t
                                        }
                                    },
                                    bgap: 10
                                }]
                            },
                            top: 190,
                            left: 0,
                            right: 0
                        }]
                    }
                },
                setText: function(e) {
                    this.failText.setText(e)
                }
            }),
            BI.shortcut("dec.test.status.fail", e)
        },
        92193: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-status-change-fail",
                    $testId: "dec-status-change-fail",
                    text: "",
                    reloadText: "",
                    linkText: "",
                    link: ""
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.test.status.fail")
                },
                watch: {
                    "showStatus.message": function(e) {
                        this.failMessage.setText(e)
                    },
                    "showStatus.errorCode": function(e) {
                        this.lackDriver.setVisible(e === DecCst.ErrorCode.LACK_DRIVER)
                    },
                    showDetail: function(e) {
                        this.detail.setVisible(e);
                        var t = e ? BI.i18nText("Dec-Basic_Pack_Up_Information") : BI.i18nText("Dec-Basic_Detailed_Information");
                        this.detailBtn.setText(t)
                    }
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.vertical",
                                items: [{
                                    type: "dec.tip.icon.vertical",
                                    iconCls: "upload-fail-icon",
                                    iconTgap: 40,
                                    text: t.text
                                }, {
                                    type: "bi.horizontal_float",
                                    items: [{
                                        type: "bi.vertical_adapt",
                                        tgap: 10,
                                        items: [{
                                            type: "bi.button",
                                            text: BI.i18nText("Dec-Basic_Detailed_Information"),
                                            level: "ignore",
                                            width: 80,
                                            height: 24,
                                            ref: function(t) {
                                                e.detailBtn = t
                                            },
                                            handler: function() {
                                                e.store.setShowDetail(!e.model.showDetail)
                                            }
                                        }, {
                                            type: "bi.button",
                                            hgap: 10,
                                            height: 24,
                                            level: "ignore",
                                            text: BI.i18nText("Dec-Basic_Back"),
                                            handler: function() {
                                                e.fireEvent("EVENT_CLOSE")
                                            }
                                        }, {
                                            type: "bi.button",
                                            height: 24,
                                            text: t.reloadText,
                                            handler: function() {
                                                e.fireEvent("EVENT_RELOAD")
                                            }
                                        }]
                                    }]
                                }]
                            },
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        }, {
                            el: {
                                type: "bi.vertical",
                                cls: "bi-card",
                                hgap: 5,
                                items: [{
                                    el: {
                                        type: "bi.vertical",
                                        height: 73,
                                        cls: "error-background",
                                        hgap: 10,
                                        scrolly: !0,
                                        invisible: !0,
                                        items: [{
                                            el: {
                                                type: "dec.label.line.feed",
                                                cls: "message-board",
                                                width: 400,
                                                textHeight: 16,
                                                text: "",
                                                ref: function(t) {
                                                    e.failMessage = t
                                                }
                                            },
                                            tgap: 5
                                        }, {
                                            type: "bi.horizontal",
                                            invisible: !0,
                                            items: [{
                                                type: "dec.link.button",
                                                text: t.linkText,
                                                link: t.link,
                                                handler: function() {
                                                    e.fireEvent("EVENT_CLICK")
                                                }
                                            }],
                                            ref: function(t) {
                                                e.lackDriver = t
                                            }
                                        }],
                                        ref: function(t) {
                                            e.detail = t
                                        }
                                    },
                                    bgap: 10
                                }]
                            },
                            top: 190,
                            left: 0,
                            right: 0
                        }]
                    }
                }
            }),
            BI.shortcut("dec.test.status.fail.link", e)
        },
        45207: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["showStatus", "showDetail"],
                computed: {},
                actions: {
                    setShowDetail: function(e) {
                        this.model.showDetail = e
                    }
                }
            }),
            BI.model("dec.model.test.status.fail", e)
        },
        44370: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-status-change-fail",
                    $testId: "dec-status-change-fail",
                    text: "",
                    reloadText: "",
                    link: ""
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.test.status.fail")
                },
                watch: {
                    "showStatus.message": function(e) {
                        this.failMessage.setText(e)
                    },
                    showDetail: function(e) {
                        this.detail.setVisible(e);
                        var t = e ? BI.i18nText("Dec-Basic_Pack_Up_Information") : BI.i18nText("Dec-Basic_Detailed_Information");
                        this.detailBtn.setText(t)
                    }
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.vertical",
                                items: [{
                                    type: "dec.tip.icon.vertical",
                                    iconCls: "upload-fail-icon",
                                    iconTgap: 40,
                                    text: t.text,
                                    ref: function(t) {
                                        e.failText = t
                                    }
                                }, {
                                    type: "bi.horizontal_float",
                                    items: [{
                                        type: "bi.vertical_adapt",
                                        tgap: 15,
                                        items: [{
                                            type: "bi.button",
                                            text: BI.i18nText("Dec-Basic_Detailed_Information"),
                                            level: "ignore",
                                            width: 80,
                                            height: 24,
                                            ref: function(t) {
                                                e.detailBtn = t
                                            },
                                            handler: function() {
                                                e.store.setShowDetail(!e.model.showDetail)
                                            }
                                        }, {
                                            type: "bi.button",
                                            hgap: 10,
                                            height: 24,
                                            level: "ignore",
                                            text: BI.i18nText("Dec-Basic_Back"),
                                            handler: function() {
                                                e.fireEvent("EVENT_CLOSE")
                                            }
                                        }, {
                                            type: "bi.button",
                                            height: 24,
                                            text: t.reloadText,
                                            handler: function() {
                                                e.fireEvent("EVENT_RELOAD")
                                            }
                                        }]
                                    }]
                                }]
                            },
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        }, {
                            el: {
                                type: "bi.vertical",
                                cls: "bi-card",
                                hgap: 5,
                                items: [{
                                    el: {
                                        type: "bi.vertical",
                                        height: 73,
                                        cls: "error-background",
                                        hgap: 10,
                                        scrolly: !0,
                                        invisible: !0,
                                        items: [{
                                            el: {
                                                type: "dec.label.line.feed",
                                                cls: "message-board",
                                                width: 400,
                                                textHeight: 16,
                                                text: "",
                                                ref: function(t) {
                                                    e.failMessage = t
                                                }
                                            },
                                            tgap: 5
                                        }],
                                        ref: function(t) {
                                            e.detail = t
                                        }
                                    },
                                    bgap: 10
                                }]
                            },
                            top: 190,
                            left: 0,
                            right: 0
                        }]
                    }
                },
                populateFail: function(e, t) {
                    this.failText.setText(e),
                    this.detailBtn.setVisible(t)
                }
            }),
            BI.shortcut("dec.test.status.fail.reload", e)
        },
        67605: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-status-change-masker",
                    $testId: "dec-status-change-masker",
                    waitingText: BI.i18nText("Dec-Reg_Upload_Waiting"),
                    successText: BI.i18nText("Dec-Reg_Upload_Success"),
                    failText: BI.i18nText("Dec-Reg_Upload_Fail")
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.test.status")
                },
                watch: {
                    showStatus: function(e) {
                        e.waitingText && this.setWaitingText(e.waitingText),
                        e.successText && this.setSuccessText(e.successText),
                        e.failText && this.setFailText(e.failText)
                    },
                    "showStatus.status": function(e) {
                        var t = this;
                        this.waitingBoard.setVisible(e === DecCst.TestStatus.WAITING),
                        this.successBoard.setVisible(e === DecCst.TestStatus.SUCCESS),
                        this.failBoard.setVisible(e === DecCst.TestStatus.FAIL),
                        e === DecCst.TestStatus.SUCCESS && BI.delay((function() {
                            t.fireEvent("EVENT_CLOSE")
                        }
                        ), 1500)
                    }
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.center_adapt",
                        cls: "bi-z-index-mask",
                        items: [{
                            type: "bi.center_adapt",
                            items: [{
                                type: "bi.absolute",
                                width: 450,
                                height: 250,
                                cls: "bi-card",
                                items: [{
                                    el: {
                                        type: "bi.vertical",
                                        items: [{
                                            type: "dec.tip.animate.vertical",
                                            $testId: "dec-status-change-loading",
                                            iconCls: "upload-loading-icon",
                                            text: t.waitingText,
                                            ref: function(t) {
                                                e.waitingBoard = t
                                            }
                                        }, {
                                            type: "dec.tip.icon.vertical",
                                            $testId: "dec-status-change-success",
                                            iconCls: "upload-success-icon",
                                            text: t.successText,
                                            invisible: !0,
                                            ref: function(t) {
                                                e.successBoard = t
                                            }
                                        }]
                                    },
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0
                                }, {
                                    el: {
                                        type: "dec.test.status.fail",
                                        text: t.failText,
                                        link: t.link,
                                        okBtn: t.okBtn,
                                        failInfo: t.failInfo,
                                        invisible: !0,
                                        ref: function(t) {
                                            e.failBoard = t
                                        },
                                        listeners: [{
                                            eventName: "EVENT_CLOSE",
                                            action: function() {
                                                e.fireEvent("EVENT_CLOSE")
                                            }
                                        }]
                                    },
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0
                                }]
                            }]
                        }]
                    }
                },
                setStatus: function(e) {
                    this.store.setTestStatus(e)
                },
                setWaitingText: function(e) {
                    this.waitingBoard.setText(e)
                },
                setSuccessText: function(e) {
                    this.successBoard.setText(e)
                },
                setFailText: function(e) {
                    this.failBoard.setText(e)
                }
            }),
            BI.shortcut("dec.test.status", e)
        },
        20585: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-status-change-masker",
                    $testId: "dec-status-change-masker",
                    waitingText: "Dec-Reg_Upload_Waiting",
                    successText: "Dec-Reg_Upload_Success",
                    failText: "Dec-Reg_Upload_Fail",
                    reloadText: "",
                    linkText: BI.i18nText("Dec-Connection_Download_Driver"),
                    link: ""
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.test.status")
                },
                watch: {
                    "showStatus.status": function(e) {
                        var t = this;
                        this.waitingBoard.setVisible(e === DecCst.TestStatus.WAITING),
                        this.successBoard.setVisible(e === DecCst.TestStatus.SUCCESS),
                        this.failReloadBoard.setVisible(e === DecCst.TestStatus.FAIL),
                        e === DecCst.TestStatus.SUCCESS && BI.delay((function() {
                            t.fireEvent("EVENT_CLOSE")
                        }
                        ), 1500)
                    }
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.center_adapt",
                        cls: "bi-z-index-mask",
                        items: [{
                            type: "bi.center_adapt",
                            items: [{
                                type: "bi.absolute",
                                width: 450,
                                height: 250,
                                cls: "bi-card",
                                items: [{
                                    el: {
                                        type: "bi.vertical",
                                        items: [{
                                            type: "dec.tip.animate.vertical",
                                            $testId: "dec-status-change-loading",
                                            iconCls: "upload-loading-icon",
                                            text: BI.i18nText(t.waitingText),
                                            ref: function(t) {
                                                e.waitingBoard = t
                                            }
                                        }, {
                                            type: "dec.tip.icon.vertical",
                                            $testId: "dec-status-change-success",
                                            iconCls: "upload-success-icon",
                                            text: BI.i18nText(t.successText),
                                            invisible: !0,
                                            ref: function(t) {
                                                e.successBoard = t
                                            }
                                        }]
                                    },
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0
                                }, {
                                    el: {
                                        type: "dec.test.status.fail.link",
                                        text: t.failText,
                                        reloadText: t.reloadText,
                                        linkText: t.linkText,
                                        link: t.link,
                                        invisible: !0,
                                        ref: function(t) {
                                            e.failReloadBoard = t
                                        },
                                        listeners: [{
                                            eventName: "EVENT_RELOAD",
                                            action: function() {
                                                e.store.setShowDetail(!1),
                                                e.fireEvent("EVENT_RELOAD")
                                            }
                                        }, {
                                            eventName: "EVENT_CLOSE",
                                            action: function() {
                                                e.fireEvent("EVENT_CLOSE")
                                            }
                                        }, {
                                            eventName: "EVENT_CLICK",
                                            action: function() {
                                                e.fireEvent("EVENT_CLICK")
                                            }
                                        }]
                                    },
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0
                                }]
                            }]
                        }]
                    }
                },
                setStatus: function(e) {
                    this.store.setTestStatus(e)
                }
            }),
            BI.shortcut("dec.test.status.link", e)
        },
        19365: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                state: function() {
                    return {
                        testStatus: {},
                        showDetail: !1
                    }
                },
                childContext: ["showStatus", "showDetail"],
                computed: {
                    showStatus: function() {
                        var e = this.model.testStatus;
                        if (BI.isUndefined(e.status)) {
                            var t = {};
                            return e.data ? t.status = DecCst.TestStatus.SUCCESS : e.errorCode || e.errorMsg ? t = {
                                status: DecCst.TestStatus.FAIL,
                                message: e.errorMsg,
                                errorCode: e.errorCode
                            } : t.status = DecCst.TestStatus.WAITING,
                            t
                        }
                        return e
                    }
                },
                actions: {
                    setTestStatus: function(e) {
                        this.model.testStatus = e
                    },
                    setShowDetail: function(e) {
                        this.model.showDetail = e
                    }
                }
            }),
            BI.model("dec.model.test.status", e)
        },
        18395: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-status-change-masker",
                    $testId: "dec-status-change-masker",
                    waitingText: "Dec-Reg_Upload_Waiting",
                    successText: "Dec-Reg_Upload_Success",
                    failText: "Dec-Reg_Upload_Fail",
                    reloadText: ""
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.test.status")
                },
                watch: {
                    "showStatus.status": function(e) {
                        var t = this;
                        this.waitingBoard.setVisible(e === DecCst.TestStatus.WAITING),
                        this.successBoard.setVisible(e === DecCst.TestStatus.SUCCESS),
                        this.failReloadBoard.setVisible(e === DecCst.TestStatus.FAIL),
                        e === DecCst.TestStatus.SUCCESS && BI.delay((function() {
                            t.fireEvent("EVENT_CLOSE")
                        }
                        ), 1500)
                    }
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.center_adapt",
                        cls: "bi-z-index-mask",
                        items: [{
                            type: "bi.center_adapt",
                            items: [{
                                type: "bi.absolute",
                                width: 450,
                                height: 250,
                                cls: "bi-card",
                                items: [{
                                    el: {
                                        type: "bi.vertical",
                                        items: [{
                                            type: "dec.tip.animate.vertical",
                                            $testId: "dec-status-change-loading",
                                            iconCls: "upload-loading-icon",
                                            text: BI.i18nText(t.waitingText),
                                            ref: function(t) {
                                                e.waitingBoard = t
                                            }
                                        }, {
                                            type: "dec.tip.icon.vertical",
                                            $testId: "dec-status-change-success",
                                            iconCls: "upload-success-icon",
                                            text: BI.i18nText(t.successText),
                                            invisible: !0,
                                            ref: function(t) {
                                                e.successBoard = t
                                            }
                                        }]
                                    },
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0
                                }, {
                                    el: {
                                        type: "dec.test.status.fail.reload",
                                        text: t.failText,
                                        reloadText: t.reloadText,
                                        link: t.link,
                                        invisible: !0,
                                        ref: function(t) {
                                            e.failReloadBoard = t
                                        },
                                        listeners: [{
                                            eventName: "EVENT_RELOAD",
                                            action: function() {
                                                e.store.setShowDetail(!1),
                                                e.fireEvent("EVENT_RELOAD")
                                            }
                                        }, {
                                            eventName: "EVENT_CLOSE",
                                            action: function() {
                                                e.fireEvent("EVENT_CLOSE")
                                            }
                                        }]
                                    },
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0
                                }]
                            }]
                        }]
                    }
                },
                populateFail: function(e, t) {
                    this.failReloadBoard.populateFail(e, t)
                },
                setStatus: function(e) {
                    this.store.setTestStatus(e)
                }
            }),
            BI.shortcut("dec.test.status.reload", e)
        },
        59012: function() {
            var e;
            e = BI.inherit(BI.OB, {
                showTestStatus: function(e) {
                    var t = this
                      , i = BI.UUID()
                      , n = BI.extend({
                        type: "dec.test.status",
                        waitingText: "",
                        successText: "",
                        failText: "",
                        listeners: [{
                            eventName: "EVENT_CLOSE",
                            action: function() {
                                BI.Maskers.remove(i)
                            }
                        }],
                        ref: function(e) {
                            t.uploadMasker = e
                        }
                    }, e);
                    return BI.Maskers.create(i, null, {
                        render: n
                    }),
                    BI.Maskers.show(i),
                    function(e) {
                        e ? BI.Maskers.remove(i) : t.uploadMasker.setStatus({
                            status: DecCst.TestStatus.SUCCESS
                        })
                    }
                }
            }),
            BI.service("dec.service.test.status", e)
        },
        51687: function() {
            var e;
            e = BI.inherit(BI.Single, {
                props: {
                    baseCls: "dec-multi-step-first-item",
                    forceNotSelected: !0,
                    readonly: !0,
                    stopEvent: !1,
                    stopPropagation: !1,
                    lgap: 10,
                    height: 25
                },
                render: function() {
                    var e = this.options
                      , t = this;
                    return {
                        type: "bi.vertical_adapt",
                        items: [{
                            type: "bi.vertical_adapt",
                            cls: "step-content",
                            items: [{
                                type: "bi.icon_change_button",
                                ref: function(e) {
                                    t.icon = e
                                },
                                iconCls: "step-radio-before-icon",
                                height: 24,
                                width: 24,
                                iconWidth: 18,
                                iconHeight: 18
                            }, {
                                el: {
                                    type: "bi.label",
                                    cls: "active",
                                    textAlign: "left",
                                    text: e.text,
                                    height: e.height,
                                    value: e.value,
                                    hgap: 5
                                }
                            }]
                        }]
                    }
                },
                setStatus: function(e) {
                    switch (e) {
                    case -1:
                        this.icon.setIcon("step-radio-after-icon"),
                        this.element.addClass("active");
                        break;
                    case 0:
                        this.icon.setIcon("step-radio-now-icon"),
                        this.element.addClass("active");
                        break;
                    case 1:
                        this.icon.setIcon("step-radio-before-icon"),
                        this.element.removeClass("active")
                    }
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments)
                },
                setText: function(t) {
                    e.superclass.setText.apply(this, arguments),
                    this.text.setText(t)
                },
                destroy: function() {
                    e.superclass.destroy.apply(this, arguments)
                }
            }),
            BI.shortcut("dec.multi_step_first.item", e)
        },
        47407: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-multi-steps",
                    $testId: "dec-multi-steps",
                    items: [],
                    stepCount: 3
                },
                mounted: function() {
                    this.setValue(0)
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return this.currentValue = 1,
                    {
                        type: "bi.button_group",
                        ref: function(t) {
                            e.stepsGroup = t
                        },
                        layouts: [{
                            type: "bi.vertical_adapt"
                        }],
                        items: this._createItems(t.items)
                    }
                },
                _createItems: function(e) {
                    var t = [];
                    return BI.each(e, (function(i, n) {
                        if (i !== e.length - 1) {
                            var o = {
                                type: "dec.multi_step_first.item",
                                value: i
                            };
                            t.push(BI.defaults(n, o))
                        } else
                            t.push(BI.defaults(n, {
                                type: "dec.multi_step_last.item",
                                value: i
                            }))
                    }
                    )),
                    t
                },
                setValue: function(e) {
                    var t = [];
                    this.currentValue = e,
                    BI.each(this.stepsGroup.getAllButtons(), (function(i, n) {
                        var o = n.getValue();
                        o === e && (n.setStatus(0),
                        t.push(o)),
                        o < e && (n.setStatus(-1),
                        t.push(o)),
                        o > e && n.setStatus(1)
                    }
                    ))
                },
                getValue: function() {
                    return this.currentValue
                }
            })).EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.multi.steps", e)
        },
        79419: function() {
            var e;
            e = BI.inherit(BI.Single, {
                props: {
                    baseCls: "dec-multi-step-last-item",
                    forceNotSelected: !0,
                    readonly: !0,
                    lgap: 10,
                    height: 25,
                    disabled: !0,
                    active: !1
                },
                render: function() {
                    var e = this.options
                      , t = this;
                    return {
                        type: "bi.vertical_adapt",
                        items: [{
                            type: "bi.vertical_adapt",
                            cls: "step-content",
                            items: [{
                                type: "bi.icon_change_button",
                                ref: function(e) {
                                    t.icon = e
                                },
                                iconCls: "step-radio-before-icon",
                                height: 24,
                                width: 24,
                                iconWidth: 18,
                                iconHeight: 18
                            }, {
                                el: {
                                    type: "bi.label",
                                    cls: "active",
                                    textAlign: "left",
                                    text: e.text,
                                    height: e.height,
                                    value: e.value,
                                    hgap: 5
                                }
                            }]
                        }]
                    }
                },
                setStatus: function(e) {
                    switch (e) {
                    case -1:
                        this.icon.setIcon("step-radio-after-icon"),
                        this.element.addClass("active"),
                        this.setEnable(!0);
                        break;
                    case 0:
                        this.icon.setIcon("step-radio-now-icon"),
                        this.element.addClass("active"),
                        this.setEnable(!0);
                        break;
                    case 1:
                        this.icon.setIcon("step-radio-before-icon"),
                        this.element.removeClass("active"),
                        this.setEnable(!1)
                    }
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments)
                },
                setText: function(t) {
                    e.superclass.setText.apply(this, arguments),
                    this.text.setText(t)
                },
                destroy: function() {
                    e.superclass.destroy.apply(this, arguments)
                }
            }),
            BI.shortcut("dec.multi_step_last.item", e)
        },
        11885: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "decision-capsule-table",
                    keyword: "",
                    tools: !0,
                    el: {},
                    items: [],
                    itemsCreator: BI.emptyFn,
                    perPage: 20,
                    text: "",
                    buttons: [],
                    left: [],
                    page: 1,
                    count: 1
                },
                render: function() {
                    var t = this
                      , i = this.options
                      , n = {
                        type: "bi.label",
                        textAlign: "left",
                        height: 36,
                        text: i.text,
                        rgap: 10
                    }
                      , o = {
                        type: "bi.button_group",
                        ref: function(e) {
                            t.container = e
                        },
                        chooseType: 0,
                        items: this._formatItems(i.items),
                        layouts: [{
                            type: "bi.left",
                            scrollable: !0,
                            rgap: 10,
                            vgap: 8
                        }],
                        listeners: [{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function(i, n, o) {
                                t.fireEvent(e.EVENT_CHANGE, n, o)
                            }
                        }]
                    }
                      , r = {
                        type: "dec.pager",
                        ref: function(e) {
                            t.pager = e
                        },
                        curr: i.page,
                        count: i.count,
                        pages: Math.max(Math.ceil(i.count / i.perPage), 1),
                        invisible: i.count <= i.perPage,
                        listeners: [{
                            eventName: "EVENT_CHANGE",
                            action: function(e) {
                                i.itemsCreator({
                                    page: e
                                }, (function(e) {
                                    t.populate(e)
                                }
                                ))
                            }
                        }]
                    };
                    return i.tools ? {
                        type: "bi.vtape",
                        hgap: 15,
                        items: [{
                            type: "bi.left_right_vertical_adapt",
                            items: {
                                left: [{
                                    el: n,
                                    width: 120
                                }].concat(i.left),
                                right: i.buttons
                            },
                            height: 36
                        }, {
                            type: "bi.vtape",
                            items: [o, {
                                el: r,
                                height: 50
                            }]
                        }]
                    } : {
                        type: "bi.vtape",
                        cls: "decision-capsule-table-wrapper",
                        hgap: 15,
                        items: [{
                            el: o
                        }, {
                            el: r,
                            height: 40
                        }]
                    }
                },
                _formatItems: function(e) {
                    return BI.createItems(e, BI.extend({
                        type: "bi.button"
                    }, this.options.el))
                },
                empty: function() {
                    this.container.empty()
                },
                setCount: function(e) {
                    this.pager.setCount(e),
                    this.setAllPages(Math.ceil(e / this.options.perPage)),
                    this.pager.setVisible(e > this.options.perPage)
                },
                setAllPages: function(e) {
                    this.pager.setAllPages(e)
                },
                setPage: function(e) {
                    this.pager.setPage(e)
                },
                getAllPages: function() {
                    return this.pager.getAllPages()
                },
                removeItems: function(e) {
                    this.container.removeItems(e)
                },
                addItems: function(e) {
                    e = BI.isArray(e) ? e : [e],
                    this.container.addItems(e)
                },
                getAllButtons: function() {
                    return this.container.getAllButtons()
                },
                getNodeByValue: function(e) {
                    this.container.getNodeByValue(e)
                },
                setDisabledValue: function(e) {
                    e = BI.isArray(e) ? e : [e],
                    BI.each(this.getAllButtons(), (function(t, i) {
                        BI.deepContains(e, i.getValue()) ? i._setEnable(!1) : i._setEnable(!0)
                    }
                    ))
                },
                populate: function(e) {
                    this.container.populate(this._formatItems(e))
                },
                getValue: function() {
                    return this.container.getValue()
                },
                setValue: function(e) {
                    this.container.setValue(e)
                }
            })).EVENT_CHANGE = "EVENT_CHANGE",
            e.EVENT_SELECT_ALL = "EVENT_SELECT_ALL",
            BI.shortcut("dec.capsule_table", e)
        },
        86266: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-check-page-table",
                    $testId: "dec-check-page-table",
                    perPage: 10,
                    columnSize: [],
                    items: [],
                    rowType: "dec.check.page.table.row",
                    totalCount: 0
                },
                _store: function() {
                    return this.items = this.options.items,
                    BI.Models.getModel("dec.model.check.page.table", {
                        items: this.options.items,
                        pageIds: this._createIds(),
                        totalCount: this.options.totalCount
                    })
                },
                watch: {
                    pageIds: function() {
                        this.listGroup.populate(this._createItems(this.items))
                    },
                    sort: function(t) {
                        this.fireEvent(e.EVENT_SORT, t)
                    },
                    "totalCount || currentPage": function() {
                        this.pager.setCount(this.model.totalCount),
                        this.pager.setPage(this.model.currentPage),
                        this.pager.setAllPages(Math.ceil(this.model.totalCount / this.options.perPage))
                    }
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    return {
                        type: "bi.vertical",
                        items: [{
                            type: "dec.check.page.table.header",
                            columnSize: i.columnSize,
                            items: i.header
                        }, {
                            type: "bi.button_group",
                            cls: "table-items",
                            layouts: [{
                                type: "bi.vertical"
                            }],
                            items: this._createItems(),
                            ref: function(e) {
                                t.listGroup = e
                            }
                        }, {
                            type: "dec.pager",
                            height: 30,
                            tgap: 10,
                            count: this.model.totalCount,
                            pages: 0 === this.model.totalCount ? 1 : Math.ceil(this.model.totalCount / i.perPage),
                            ref: function(e) {
                                t.pager = e
                            },
                            listeners: [{
                                eventName: e.PAGER_EVENT_CHANGE,
                                action: function() {
                                    t.fireEvent(e.PAGER_EVENT_CHANGE, this.getCurrentPage())
                                }
                            }]
                        }]
                    }
                },
                setCount: function(e) {
                    this.store.setCount(e)
                },
                setPage: function(e) {
                    this.store.setPage(e)
                },
                populate: function(e) {
                    this.items = e,
                    this.store.setPageIds(this._createIds())
                },
                getValue: function() {
                    return this.model.selectedIds
                },
                _createItems: function() {
                    var e = this.options;
                    return BI.map(this.items, (function(t, i) {
                        var n = i.id
                          , o = BI.deepClone(i);
                        return delete o.id,
                        {
                            type: e.rowType,
                            odd: BI.isOdd(t),
                            columnSize: e.columnSize,
                            id: n,
                            item: o
                        }
                    }
                    ))
                },
                _createIds: function() {
                    return BI.map(this.items, (function(e, t) {
                        var i = t.id || BI.UUID();
                        return t.id = i,
                        i
                    }
                    ))
                }
            })).PAGER_EVENT_CHANGE = "EVENT_CHANGE",
            e.EVENT_SORT = "EVENT_SORT",
            BI.shortcut("dec.check.page.table", e)
        },
        14370: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                state: function() {
                    return {
                        sort: {},
                        selectedIds: this.options.items.filter((function(e) {
                            return e.selected
                        }
                        )).map((function(e) {
                            return e.id
                        }
                        )),
                        pageIds: this.options.pageIds,
                        currentPage: 1,
                        totalCount: this.options.totalCount
                    }
                },
                childContext: ["sort", "selectedIds", "pageIds"],
                computed: {},
                actions: {
                    setCount: function(e) {
                        this.model.totalCount = e
                    },
                    setPage: function(e) {
                        this.model.currentPage = e
                    },
                    setPageIds: function(e) {
                        this.model.pageIds = e,
                        this.model.selectedIds = []
                    }
                }
            }),
            BI.model("dec.model.check.page.table", e)
        },
        39319: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-page-table-header",
                    items: [],
                    columnSize: []
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.check.page.table.header")
                },
                watch: {
                    sort: function(e) {
                        var t = this;
                        BI.each(this.sortabeld, (function(i, n) {
                            n !== e.columnName && t["sort_" + n].restore()
                        }
                        ))
                    },
                    "pageIds || selectedState": function() {
                        this.checkbox.setSelected(this.model.selectedState === BI.Selection.All),
                        this.checkbox.setHalfSelected(this.model.selectedState === BI.Selection.Multi)
                    }
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return this.sortabeld = [],
                    {
                        type: "bi.htape",
                        height: 32,
                        items: [{
                            type: "dec.multi.checkbox",
                            width: 36,
                            height: 32,
                            ref: function(t) {
                                e.checkbox = t
                            },
                            selected: this.model.selectedState === BI.Selection.All,
                            halfSelected: this.model.selectedState === BI.Selection.Multi,
                            listeners: [{
                                eventName: BI.MultiSelectBar.EVENT_CHANGE,
                                action: function() {
                                    e.store.setSelectedAll(this.isSelected())
                                }
                            }]
                        }, {
                            type: "bi.horizontal_adapt",
                            columnSize: t.columnSize,
                            items: e._createItems()
                        }]
                    }
                },
                _createItems: function() {
                    var e = this
                      , t = this.options
                      , i = 0;
                    return BI.map(t.items, (function(t, n) {
                        var o = {
                            text: n.text,
                            textAlign: "left",
                            lgap: i++ > 0 ? 10 : 0,
                            height: 32,
                            title: n.title || n.text
                        };
                        return !0 === n.sortable ? (e.sortabeld.push(n.value),
                        BI.extend({
                            type: "dec.page.table.sortable.label",
                            ref: function(t) {
                                e["sort_" + n.value] = t
                            },
                            listeners: [{
                                eventName: "EVENT_CHANGE",
                                action: function(t) {
                                    e.store.setSort(n.value, t)
                                }
                            }]
                        }, o)) : {
                            el: BI.extend({
                                type: "bi.label"
                            }, o)
                        }
                    }
                    ))
                }
            }),
            BI.shortcut("dec.check.page.table.header", e)
        },
        97451: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["sort", "pageIds", "selectedIds"],
                computed: {
                    selectedState: function() {
                        return 0 === BI.size(this.model.selectedIds) ? BI.Selection.None : BI.size(this.model.selectedIds) === BI.size(this.model.pageIds) ? BI.Selection.All : BI.Selection.Multi
                    }
                },
                actions: {
                    setSelectedAll: function(e) {
                        this.model.selectedIds = e ? BI.deepClone(this.model.pageIds) : []
                    },
                    setSort: function(e, t) {
                        this.model.sort = {
                            columnName: e,
                            desc: 1 === t
                        }
                    }
                }
            }),
            BI.model("dec.model.check.page.table.header", e)
        },
        78277: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-page-table-row",
                    item: {},
                    id: BI.UUID(),
                    columnSize: [],
                    odd: !1
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.check.page.table.row", {
                        id: this.options.id
                    })
                },
                watch: {
                    isSelected: function(e) {
                        this.checkbox.setSelected(e)
                    }
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = 0;
                    return {
                        type: "bi.htape",
                        height: 32,
                        cls: t.odd ? "row-odd" : "row-even",
                        items: [{
                            type: "bi.checkbox",
                            width: 36,
                            height: 32,
                            ref: function(t) {
                                e.checkbox = t
                            },
                            selected: this.model.isSelected,
                            handler: function() {
                                e.store.setSelected(this.isSelected())
                            }
                        }, {
                            type: "bi.td",
                            columnSize: t.columnSize,
                            items: [BI.map(t.item, (function(e, t) {
                                return BI.isPlainObject(t) ? BI.createWidget(t) : {
                                    type: "bi.htape",
                                    height: 32,
                                    items: [{
                                        el: {
                                            type: "bi.label",
                                            text: t,
                                            title: t,
                                            textAlign: "left",
                                            height: 32
                                        },
                                        lgap: i++ > 0 ? 10 : 0
                                    }]
                                }
                            }
                            ))]
                        }]
                    }
                }
            }),
            BI.shortcut("dec.check.page.table.row", e)
        },
        99624: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["sort", "pageIds", "selectedIds"],
                state: function() {
                    return {
                        id: this.options.id
                    }
                },
                computed: {
                    isSelected: function() {
                        return BI.contains(this.model.selectedIds, this.model.id)
                    }
                },
                actions: {
                    setSelected: function(e) {
                        e ? this.model.selectedIds.push(this.model.id) : BI.remove(this.model.selectedIds, this.model.id)
                    }
                }
            }),
            BI.model("dec.model.check.page.table.row", e)
        },
        87244: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-list-table-header",
                    items: [],
                    columnSize: []
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.page.table.header")
                },
                watch: {
                    sort: function(e) {
                        var t = this;
                        BI.each(this.sortabeld, (function(i, n) {
                            n !== e.columnName && t["sort_" + n].restore()
                        }
                        ))
                    }
                },
                render: function() {
                    var e = this.options;
                    return this.sortabeld = [],
                    {
                        type: "bi.td",
                        columnSize: e.columnSize,
                        items: [this._createItems()]
                    }
                },
                _createItems: function() {
                    var e = this
                      , t = this.options;
                    return BI.map(t.items, (function(t, i) {
                        var n = BI.extend({
                            textAlign: "left",
                            height: 32,
                            lgap: 10
                        }, i);
                        return !0 === i.sortable ? (e.sortabeld.push(i.value),
                        BI.extend({
                            type: "dec.page.table.sortable.label",
                            ref: function(t) {
                                e["sort_" + i.value] = t
                            },
                            listeners: [{
                                eventName: "EVENT_CHANGE",
                                action: function(t) {
                                    e.store.setSort(i.value, t)
                                }
                            }]
                        }, n)) : {
                            type: "bi.left",
                            height: 32,
                            items: [{
                                el: BI.extend({
                                    type: "bi.label"
                                }, n)
                            }]
                        }
                    }
                    ))
                }
            }),
            BI.shortcut("dec.list.table.header", e)
        },
        80181: function(e, t, i) {
            var n, o, r = i(3911);
            function s() {
                return s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i)
                            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                }
                ,
                s.apply(this, arguments)
            }
            function a(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function c(e, t) {
                return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return function(e, t) {
                        for (var i = Object.getOwnPropertyNames(t), n = 0; n < i.length; n++) {
                            var o = i[n]
                              , r = Object.getOwnPropertyDescriptor(t, o);
                            r && r.configurable && void 0 === e[o] && Object.defineProperty(e, o, r)
                        }
                    }(e, t),
                    e
                }
                ,
                c(e, t)
            }
            function l(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                e
            }
            i(2731);
            var u = (0,
            r.shortcut)()((o = function(e) {
                var t, i;
                function n() {
                    for (var t, i = arguments.length, n = new Array(i), o = 0; o < i; o++)
                        n[o] = arguments[o];
                    return l(a(t = e.call.apply(e, [this].concat(n)) || this), "props", {
                        baseCls: "dec-common-list-table",
                        group: BI.h(BI.VirtualGroup, null),
                        layout: BI.h(BI.VerticalAdaptLayout, null),
                        columnSize: [],
                        items: []
                    }),
                    l(a(t), "ref", void 0),
                    t
                }
                i = e,
                (t = n).prototype = Object.create(i.prototype),
                t.prototype.constructor = t,
                c(t, i);
                var o = n.prototype;
                return o.render = function() {
                    var e = this
                      , t = this.options.group
                      , i = this.createItems();
                    return BI.h(BI.VirtualGroup, s({}, t, {
                        ref: function(t) {
                            e.ref = t
                        },
                        layouts: BI.h(BI.VerticalLayout, null)
                    }), i)
                }
                ,
                o.populate = function() {
                    var e = this.createItems();
                    this.ref.populate(e)
                }
                ,
                o.createItems = function() {
                    var e = (0,
                    r.getLayoutConstant)()
                      , t = e.HEIGHT_LARGE
                      , i = e.GAP_SMALL
                      , n = this.options
                      , o = n.layout
                      , a = n.columnSize
                      , c = n.items
                      , l = function(e, n) {
                        var r = 0 === n ? "row-header" : (n - 1) % 2 == 0 ? "row-body-even" : "row-body-odd";
                        return BI.h(BI.Widget, s({
                            height: t
                        }, o, {
                            cls: "row ".concat(r),
                            columnSize: a
                        }), e.map((function(e) {
                            return BI.h(BI.Widget, s({
                                hgap: i
                            }, e))
                        }
                        )))
                    };
                    return "function" == typeof c ? function() {
                        return c().map(l)
                    }
                    : c.map(l)
                }
                ,
                n
            }(BI.Widget),
            l(o, "xtype", "dec.common.list_table"),
            n = o)) || n
        },
        95772: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-page-table",
                    perPage: 10,
                    columnSize: [],
                    hasPrev: BI.emptyFn,
                    hasNext: BI.emptyFn
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.page.table")
                },
                watch: {
                    sort: function(t) {
                        this.fireEvent(e.EVENT_SORT, t)
                    },
                    currentPage: function(e) {
                        1 === e && this.pager.setHPage(e)
                    },
                    pageLoading: function(e) {
                        this.masker.setVisible(e)
                    }
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    return {
                        type: "bi.vertical",
                        items: [{
                            type: "dec.page.table.header",
                            columnSize: i.columnSize,
                            items: i.header
                        }, {
                            type: "bi.button_group",
                            cls: "table-items",
                            layouts: [{
                                type: "bi.vertical"
                            }],
                            items: this.model.showItems,
                            ref: function(e) {
                                t.listGroup = e
                            }
                        }, {
                            type: "bi.absolute",
                            height: 30,
                            items: [{
                                el: {
                                    type: "bi.direction_pager",
                                    horizontal: {
                                        pages: !1,
                                        curr: 1,
                                        hasPrev: i.hasPrev,
                                        hasNext: i.hasNext,
                                        firstPage: 1
                                    },
                                    ref: function(e) {
                                        t.pager = e
                                    },
                                    listeners: [{
                                        eventName: BI.DirectionPager.EVENT_CHANGE,
                                        action: function() {
                                            t.fireEvent(e.PAGER_EVENT_CHANGE, this.getHPage())
                                        }
                                    }]
                                },
                                top: 0,
                                right: 0,
                                left: 0
                            }, {
                                el: {
                                    type: "bi.layout",
                                    width: 20,
                                    cls: "next-masker cursor-pointer",
                                    invisible: this.model.pageLoading,
                                    ref: function(e) {
                                        t.masker = e
                                    }
                                },
                                top: 0,
                                right: 10,
                                bottom: 0
                            }]
                        }]
                    }
                },
                setPage: function(e) {
                    this.store.setPage(e)
                },
                populate: function(e) {
                    this.listGroup.populate(this._createItems(e)),
                    this.pager.populate()
                },
                _createItems: function(e) {
                    var t = this.options;
                    return BI.map(e, (function(e, i) {
                        return {
                            type: "dec.page.table.row",
                            odd: BI.isOdd(e),
                            columnSize: t.columnSize,
                            item: i
                        }
                    }
                    ))
                }
            })).PAGER_EVENT_CHANGE = "EVENT_CHANGE",
            e.EVENT_SORT = "EVENT_SORT",
            BI.shortcut("dec.direction.page.table", e)
        },
        13303: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-page-table-header",
                    items: [],
                    columnSize: []
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.page.table.header")
                },
                watch: {
                    sort: function(e) {
                        var t = this;
                        BI.each(this.sortabeld, (function(i, n) {
                            n !== e.columnName && t["sort_" + n].restore()
                        }
                        ))
                    }
                },
                render: function() {
                    var e = this.options;
                    return this.sortabeld = [],
                    {
                        type: "bi.horizontal_adapt",
                        columnSize: e.columnSize,
                        items: this._createItems()
                    }
                },
                _createItems: function() {
                    var e = this
                      , t = this.options;
                    return BI.map(t.items, (function(t, i) {
                        var n = {
                            text: i.text,
                            textAlign: "left",
                            height: 32,
                            lgap: 10
                        };
                        return !0 === i.sortable ? (e.sortabeld.push(i.value),
                        BI.extend({
                            type: "dec.page.table.sortable.label",
                            ref: function(t) {
                                e["sort_" + i.value] = t
                            },
                            listeners: [{
                                eventName: "EVENT_CHANGE",
                                action: function(t) {
                                    e.store.setSort(i.value, t)
                                }
                            }]
                        }, n)) : {
                            el: BI.extend({
                                type: "bi.label"
                            }, n)
                        }
                    }
                    ))
                }
            }),
            BI.shortcut("dec.page.table.header", e)
        },
        39859: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["sort"],
                computed: {},
                actions: {
                    setSort: function(e, t) {
                        this.model.sort = {
                            columnName: e,
                            desc: 1 === t
                        }
                    }
                }
            }),
            BI.model("dec.model.page.table.header", e)
        },
        60666: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-page-table",
                    $testId: "dec-page-table",
                    perPage: 10,
                    showPager: !0,
                    columnSize: []
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.page.table")
                },
                watch: {
                    sort: function(t) {
                        this.fireEvent(e.EVENT_SORT, t)
                    },
                    "totalCount || currentPage": function() {
                        this.pager.setCount(this.model.totalCount),
                        this.pager.setPage(this.model.currentPage),
                        this.pager.setAllPages(Math.ceil(this.model.totalCount / this.options.perPage))
                    }
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    return {
                        type: "bi.vertical",
                        scrolly: !1,
                        items: [{
                            type: "dec.page.table.header",
                            columnSize: i.columnSize,
                            items: i.header
                        }, {
                            type: "bi.button_group",
                            cls: "table-items",
                            layouts: [{
                                type: "bi.vertical"
                            }],
                            items: this._createItems(i.items),
                            ref: function(e) {
                                t.listGroup = e
                            },
                            height: i.listHeight
                        }, {
                            type: "dec.pager",
                            height: 30,
                            invisible: !i.showPager,
                            tgap: 10,
                            count: this.model.totalCount,
                            pages: 0 === this.model.totalCount ? 1 : Math.ceil(this.model.totalCount / i.perPage),
                            ref: function(e) {
                                t.pager = e
                            },
                            listeners: [{
                                eventName: e.PAGER_EVENT_CHANGE,
                                action: function() {
                                    t.fireEvent(e.PAGER_EVENT_CHANGE, this.getCurrentPage())
                                }
                            }]
                        }]
                    }
                },
                setCount: function(e) {
                    this.store.setCount(e)
                },
                setPage: function(e) {
                    this.store.setPage(e)
                },
                populate: function(e) {
                    this.listGroup.populate(this._createItems(e))
                },
                _createItems: function(e) {
                    var t = this.options;
                    return BI.map(e, (function(e, i) {
                        return {
                            type: "dec.page.table.row",
                            odd: BI.isOdd(e),
                            columnSize: t.columnSize,
                            item: i
                        }
                    }
                    ))
                }
            })).PAGER_EVENT_CHANGE = "EVENT_CHANGE",
            e.EVENT_SORT = "EVENT_SORT",
            BI.shortcut("dec.page.table", e)
        },
        62121: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["pageLoading"],
                state: function() {
                    return {
                        sort: {},
                        currentPage: 1,
                        totalCount: 0
                    }
                },
                childContext: ["sort"],
                computed: {},
                actions: {
                    setCount: function(e) {
                        this.model.totalCount = e
                    },
                    setPage: function(e) {
                        this.model.currentPage = e
                    }
                }
            }),
            BI.model("dec.model.page.table", e)
        },
        84485: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-page-table-row",
                    item: {},
                    odd: !1,
                    columnSize: [],
                    height: 32
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.page.table.row")
                },
                watch: {},
                render: function() {
                    var e = this.options;
                    return {
                        type: "bi.td",
                        columnSize: e.columnSize,
                        cls: e.odd ? "row-odd" : "row-even",
                        items: [BI.map(e.item, (function(e, t) {
                            return BI.isPlainObject(t) ? BI.createWidget(t) : {
                                type: "bi.htape",
                                height: 32,
                                items: [{
                                    el: {
                                        type: "bi.label",
                                        text: t,
                                        title: t,
                                        textAlign: "left",
                                        height: 32,
                                        lgap: 10
                                    }
                                }]
                            }
                        }
                        ))]
                    }
                }
            }),
            BI.shortcut("dec.page.table.row", e)
        },
        86824: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["sort"],
                computed: {},
                actions: {}
            }),
            BI.model("dec.model.page.table.row", e)
        },
        44142: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-page-table-sortable-label",
                    height: 24
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vertical_adapt",
                        height: t.height,
                        items: [{
                            type: "bi.label",
                            textAlign: "left",
                            hgap: t.textHgap,
                            vgap: t.textVgap,
                            lgap: t.textLgap,
                            rgap: t.textRgap,
                            text: t.text,
                            value: t.value,
                            keyword: t.keyword,
                            height: t.height,
                            title: t.title
                        }, {
                            type: "bi.icon_change_button",
                            $testId: "dec-icon-change-button",
                            $value: t.value || t.text,
                            cls: "label-icon sort-font",
                            width: 24,
                            ref: function(t) {
                                e.iconButton = t
                            },
                            listeners: [{
                                eventName: BI.IconChangeButton.EVENT_CHANGE,
                                action: function(t) {
                                    var i = t.isSelected() ? "order-font" : "inverted-order-font"
                                      , n = t.isSelected() ? 1 : -1;
                                    e.iconButton.setIcon(i),
                                    e.fireEvent("EVENT_CHANGE", n)
                                }
                            }]
                        }]
                    }
                },
                restore: function() {
                    this.iconButton.setIcon(this.options.iconCls)
                }
            }),
            BI.shortcut("dec.page.table.sortable.label", e)
        },
        85295: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-tabs",
                    items: [],
                    value: null,
                    layouts: [{
                        type: "bi.vertical_adapt",
                        hgap: 10
                    }],
                    buttons: []
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: "dec.line_segment",
                        ref: function(t) {
                            e.nav = t
                        },
                        cls: "dec-font-weight-bold",
                        chooseType: 0,
                        layouts: t.layouts,
                        items: BI.createItems(t.items, {
                            hgap: 15,
                            type: "dec.line_segment_button"
                        }),
                        value: t.value,
                        height: 40,
                        listeners: [{
                            eventName: "EVENT_CHANGE",
                            action: function(t) {
                                e._handleTabSelect(t)
                            }
                        }]
                    };
                    return {
                        type: "bi.vtape",
                        items: [{
                            type: "bi.vertical_adapt",
                            cls: "bi-card bi-border-bottom",
                            items: t.buttons.concat({
                                el: i
                            }),
                            height: 40
                        }, {
                            type: "bi.absolute",
                            items: [{
                                el: {
                                    type: "bi.tab",
                                    cls: "bi-background",
                                    cardCreator: BI.bind(this._createCard, this),
                                    showIndex: t.value,
                                    ref: function(t) {
                                        e.tab = t
                                    }
                                },
                                top: 10,
                                left: 10,
                                right: 10,
                                bottom: 10
                            }]
                        }]
                    }
                },
                _handleTabSelect: function(e) {
                    this.tab.setSelect(e),
                    this.fireEvent("EVENT_CHANGE", e)
                },
                _createCard: function(e) {
                    var t = BI.find(this.options.items, (function(t, i) {
                        return i.value === e
                    }
                    ));
                    return t = t || {
                        cardType: "bi.label",
                        text: "no match value :" + e
                    },
                    BI.extend({}, t, {
                        type: t.cardType
                    })
                },
                setSelect: function(e) {
                    this.nav.setValue(e),
                    this.tab.setSelect(e)
                }
            }),
            BI.shortcut("dec.common.tabs", e)
        },
        14942: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-common-tabs",
                    layout: {
                        type: "bi.absolute"
                    },
                    single: !1
                },
                mounted: function() {
                    this.setSelect(this.options.showIndex)
                },
                render: function() {
                    var e = this;
                    return this.cardMap = {},
                    BI.extend({
                        ref: function(t) {
                            e.layout = t
                        }
                    }, this.options.layout)
                },
                _createCard: function(e) {
                    return this.options.cardCreator(e)
                },
                _deleteOtherCards: function(e) {
                    var t = this;
                    !1 !== this.options.single && BI.each(this.layout._children, (function(i, n) {
                        if (i !== e) {
                            if (n.attr("keepalive") || BI.isFunction(n.keepalive) && n.keepalive())
                                return;
                            t.deleteCardByName(i)
                        }
                    }
                    ))
                },
                isCardExisted: function(e) {
                    return !!this.cardMap[e]
                },
                addCardByName: function(e, t) {
                    if (this.isCardExisted(e))
                        throw new Error("cardName is already exist");
                    this.cardMap[e] = t;
                    var i = BI.createWidget(t, this);
                    return i.element.appendTo(this.layout.element),
                    i.invisible(),
                    this.layout.addWidget(e, i),
                    i
                },
                deleteCardByName: function(e) {
                    var t = this.layout._children[e];
                    delete this.layout._children[e],
                    delete this.cardMap[e],
                    t && t._destroy()
                },
                showCardByName: function(e) {
                    BI.each(this.layout._children, (function(t, i) {
                        t === e ? i.setVisible(!0) : i.setVisible(!1)
                    }
                    ))
                },
                setSelect: function(e) {
                    this.isCardExisted(e) || this.addCardByName(e, this._createCard(e)),
                    this.showCardByName(e),
                    this._deleteOtherCards(e)
                }
            }),
            BI.shortcut("dec.component.tabs", e)
        },
        70318: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-tip-animate-vertical-masker",
                    text: "",
                    buttons: [],
                    iconTgap: 70,
                    el: {}
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.horizontal_auto",
                        items: [{
                            el: {
                                type: "dec.base.wave_icon"
                            },
                            tgap: t.iconTgap,
                            bgap: 20
                        }, {
                            type: "bi.label",
                            height: 14,
                            text: t.text,
                            ref: function(t) {
                                e.text = t
                            }
                        }]
                    }
                },
                setText: function(e) {
                    this.text.setText(e)
                }
            }),
            BI.shortcut("dec.tip.animate.vertical", e)
        },
        12568: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-lack-authority-tip bi-card",
                    $testId: "dec-lack-authority-tip",
                    text: ""
                },
                render: function() {
                    return {
                        type: "dec.components.emotional_tip",
                        cls: "bi-card",
                        text: this.options.text,
                        iconCls: "no-auth-tip-icon"
                    }
                }
            }),
            BI.shortcut("dec.lack.authority.tip", e)
        },
        27036: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    iconCls: "",
                    baseCls: "dec-component-emotional-tip",
                    text: "",
                    textCls: "",
                    iconHeight: 130,
                    iconWidth: 130,
                    largeSize: !0,
                    vgap: 20
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.center_adapt",
                        items: [{
                            type: "bi.horizontal_auto",
                            cls: "content-container",
                            items: [{
                                type: "bi.center_adapt",
                                cls: BI.isIE9Below && BI.isIE9Below() ? t.iconCls + " hack" : t.iconCls,
                                items: [{
                                    type: "bi.icon",
                                    height: t.iconHeight,
                                    width: t.iconWidth
                                }]
                            }, {
                                type: "bi.label",
                                text: t.text,
                                whiteSpace: "normal",
                                textWidth: t.textWidth,
                                ref: function() {
                                    e.text = this
                                },
                                cls: "bi-tips " + t.textCls + (t.largeSize ? "emotional-tip-large-text" : "")
                            }],
                            vgap: t.vgap
                        }]
                    }
                },
                setText: function(e) {
                    this.text.setText(e)
                }
            }),
            BI.shortcut("dec.components.emotional_tip", e)
        },
        28603: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    iconCls: "",
                    text: "",
                    textCls: "",
                    iconHeight: 130,
                    iconWidth: 130,
                    tipWidth: 300
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.center_adapt",
                        items: [{
                            type: "bi.vertical",
                            cls: t.iconCls,
                            items: [{
                                type: "bi.icon",
                                height: t.iconHeight,
                                width: t.iconWidth
                            }, {
                                type: "bi.label",
                                text: t.text,
                                ref: function() {
                                    e.text = this
                                },
                                cls: "bi-tips " + t.textCls
                            }],
                            vgap: 20
                        }]
                    }
                },
                setText: function(e) {
                    this.text.setText(e)
                }
            }),
            BI.shortcut("dec.components.empty_tip", e)
        },
        39950: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-components-error-tip",
                    text: BI.i18nText("Dec-Basic_Delete_Fail"),
                    btnText: BI.i18nText("Dec-Basic_Back"),
                    iconCls: "preview-fail-tip-background",
                    errorMsg: "",
                    msgHeight: 100,
                    width: 450,
                    buttons: []
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.center_adapt",
                        items: [{
                            type: "bi.absolute",
                            cls: "bi-card",
                            width: t.width,
                            height: 250,
                            items: [{
                                el: {
                                    type: "bi.vertical",
                                    items: [{
                                        el: {
                                            type: "bi.horizontal_auto",
                                            bgap: 20,
                                            items: [{
                                                type: "bi.center_adapt",
                                                cls: BI.isIE9Below && BI.isIE9Below() ? t.iconCls + " hack" : t.iconCls,
                                                items: [{
                                                    type: "bi.icon",
                                                    height: 130,
                                                    width: 130
                                                }]
                                            }, {
                                                type: "bi.label",
                                                text: t.text
                                            }]
                                        }
                                    }, {
                                        type: "bi.horizontal_float",
                                        items: [{
                                            el: {
                                                type: "bi.vertical_adapt",
                                                hgap: 10,
                                                items: BI.concat([{
                                                    type: "bi.button",
                                                    text: BI.i18nText("Dec-Basic_Detailed_Information"),
                                                    level: "ignore",
                                                    width: 80,
                                                    height: 24,
                                                    ref: function(t) {
                                                        e.detailBtn = t
                                                    },
                                                    handler: function() {
                                                        e._togglePane()
                                                    }
                                                }], t.buttons)
                                            }
                                        }]
                                    }]
                                },
                                left: 10,
                                top: 10,
                                right: 10,
                                bottom: 10
                            }, {
                                el: {
                                    type: "bi.vertical",
                                    cls: "bi-card",
                                    hgap: 5,
                                    items: [{
                                        el: {
                                            type: "bi.vertical",
                                            height: t.msgHeight,
                                            cls: "error-background",
                                            hgap: 10,
                                            scrolly: !0,
                                            invisible: !0,
                                            items: [{
                                                el: {
                                                    type: "dec.label.line.feed",
                                                    cls: "message-board",
                                                    textHeight: 16,
                                                    text: t.errorMsg,
                                                    ref: function(t) {
                                                        e.detailText = t
                                                    }
                                                },
                                                tgap: 5
                                            }],
                                            ref: function(t) {
                                                e.detailInfo = t
                                            }
                                        },
                                        bgap: 10
                                    }]
                                },
                                top: 232,
                                left: 0,
                                right: 0
                            }]
                        }]
                    }
                },
                setErrorMsg: function(e) {
                    this.detailText.setText(e)
                },
                setDetailBtnVisible: function(e) {
                    this.detailBtn.setVisible(e)
                },
                _togglePane: function() {
                    this.detailInfo.isVisible() ? (this.detailBtn.setText(BI.i18nText("Dec-Basic_Detailed_Information")),
                    this.detailInfo.setVisible(!1)) : (this.detailBtn.setText(BI.i18nText("Dec-Basic_Pack_Up_Information")),
                    this.detailInfo.setVisible(!0))
                }
            }),
            BI.shortcut("dec.components.error_tip", e)
        },
        74365: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-component-icon-text-tip dec-component-icon-text-alert",
                    text: "",
                    iconCls: "prompt-warning-font"
                },
                render: function() {
                    return {
                        type: "bi.vtape",
                        items: [{
                            el: this.rebuildCenter()
                        }, {
                            el: this.rebuildSouth(),
                            height: 44
                        }]
                    }
                },
                rebuildCenter: function() {
                    return {
                        type: "bi.center_adapt",
                        verticalAlign: "stretch",
                        items: [{
                            el: {
                                type: "bi.icon_label",
                                cls: this.options.iconCls + " icon-size-50",
                                width: 50
                            }
                        }, {
                            el: {
                                type: "bi.label",
                                cls: "content-text",
                                text: this.options.text,
                                whiteSpace: "normal",
                                textAlign: "left",
                                lgap: 10
                            }
                        }]
                    }
                },
                rebuildSouth: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.right_vertical_adapt",
                        lgap: 10,
                        items: [{
                            type: "bi.button",
                            ref: function(t) {
                                e.sure = t
                            },
                            text: BI.i18nText("Dec-Basic_Sure"),
                            warningTitle: t.warningTitle,
                            height: 24,
                            value: 0,
                            handler: function() {
                                e.end()
                            }
                        }]
                    }
                },
                close: function() {
                    this.fireEvent("EVENT_CLOSE", !1)
                },
                end: function() {
                    this.fireEvent("EVENT_CLOSE", !0)
                }
            }),
            BI.shortcut("dec.component.icon_text.alert", e)
        },
        98999: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-component-icon-text-tip dec-component-icon-text-confirm",
                    text: "",
                    iconCls: "prompt-warning-font",
                    onClickConfirm: BI.emptyFn,
                    delay: !1,
                    delayTime: 5
                },
                render: function() {
                    return {
                        type: "bi.vtape",
                        items: [{
                            el: this.rebuildCenter()
                        }, {
                            el: this.rebuildSouth(),
                            height: 44
                        }]
                    }
                },
                rebuildCenter: function() {
                    return {
                        type: "bi.center_adapt",
                        verticalAlign: "stretch",
                        items: [{
                            el: {
                                type: "bi.icon_label",
                                cls: this.options.iconCls + " icon-size-50",
                                width: 50
                            }
                        }, {
                            el: {
                                type: "bi.label",
                                cls: "content-text",
                                text: this.options.text,
                                whiteSpace: "normal",
                                textAlign: "left",
                                lgap: 10
                            }
                        }]
                    }
                },
                rebuildSouth: function() {
                    var e = this
                      , t = this.options
                      , i = t.delay
                      , n = t.delayTime
                      , o = {
                        type: "bi.button",
                        ref: function(t) {
                            e.sure = t
                        },
                        text: i ? "".concat(n, "s") : BI.i18nText("Dec-Basic_Sure"),
                        disabled: i,
                        warningTitle: t.warningTitle,
                        height: 24,
                        value: 0,
                        mounted: function() {
                            if (i)
                                var t = setInterval((function() {
                                    if (0 == --n)
                                        return e.sure.setText(BI.i18nText("Dec-Basic_Sure")),
                                        e.sure.setEnable(!0),
                                        void clearInterval(t);
                                    e.sure.setText("".concat(n, "s"))
                                }
                                ), 1e3)
                        },
                        handler: function() {
                            e.end()
                        }
                    };
                    return {
                        type: "bi.right_vertical_adapt",
                        lgap: 10,
                        items: [{
                            type: "bi.button",
                            ref: function(t) {
                                e.cancel = t
                            },
                            text: BI.i18nText("Dec-Basic_Cancel"),
                            height: 24,
                            value: 1,
                            level: "ignore",
                            handler: function() {
                                e.close()
                            }
                        }, o]
                    }
                },
                close: function() {
                    this.fireEvent("EVENT_CLOSE", !1)
                },
                end: function() {
                    this.options.onClickConfirm(),
                    this.fireEvent("EVENT_CLOSE", !0)
                }
            }),
            BI.shortcut("dec.component.icon_text.confirm", e),
            BI.config("dec.delete.confirm.popover", (function(e) {
                return BI.extend(e, {
                    type: "dec.component.icon_text.confirm"
                })
            }
            ))
        },
        11560: function() {
            var e;
            e = BI.inherit(BI.OB, {
                alert: function(e, t) {
                    var i = BI.UUID();
                    return BI.Popovers.create(i, {
                        size: "small",
                        header: BI.i18nText("BI-Basic_Prompt"),
                        body: {
                            type: "dec.component.icon_text.alert",
                            text: e.text,
                            iconCls: e.iconCls,
                            listeners: [{
                                eventName: BI.Popover.EVENT_CLOSE,
                                action: function() {
                                    BI.Popovers.remove(i),
                                    t && t()
                                }
                            }]
                        },
                        listeners: [{
                            eventName: "EVENT_CLOSE",
                            action: function() {
                                BI.Popovers.remove(i),
                                t && t()
                            }
                        }]
                    }).open(i)
                },
                confirm: function(e, t) {
                    var i = BI.UUID();
                    BI.Popovers.create(i, {
                        type: "bi.popover",
                        header: BI.i18nText("BI-Basic_Sure"),
                        size: "small",
                        body: {
                            type: "dec.component.icon_text.confirm",
                            text: e.text,
                            iconCls: e.iconCls,
                            listeners: [{
                                eventName: "EVENT_CLOSE",
                                action: function(e) {
                                    BI.Popovers.remove(i),
                                    t && t(e)
                                }
                            }]
                        },
                        listeners: [{
                            eventName: "EVENT_CLOSE",
                            action: function() {
                                BI.Popovers.remove(i),
                                t && t(!1)
                            }
                        }]
                    }).open(i)
                }
            }),
            BI.service("dec.service.component.icon_text.msg", e)
        },
        7906: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-tip-icon-popover",
                    $testId: "dec-tip-icon-popover",
                    text: "",
                    showHeight: 52,
                    showCancel: !1,
                    iconCls: "prompt-warning-font"
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vtape",
                        items: [{
                            type: "bi.center_adapt",
                            items: [{
                                type: "bi.icon_label",
                                width: 50,
                                cls: t.iconCls + " left-icon"
                            }, {
                                type: "bi.text",
                                whiteSpace: "normal",
                                textAlign: "left",
                                lgap: 10,
                                text: t.text
                            }]
                        }, {
                            type: "bi.right_vertical_adapt",
                            height: 44,
                            lgap: 10,
                            items: [{
                                type: "bi.button",
                                $testId: "dec-tip-icon-popover-cancel",
                                level: "ignore",
                                invisible: !t.showCancel,
                                text: BI.i18nText("BI-Basic_Cancel"),
                                height: 24,
                                handler: function() {
                                    e.close(!1)
                                }
                            }, {
                                type: "bi.button",
                                $testId: "dec-tip-icon-popover-sure",
                                text: BI.i18nText("BI-Basic_Sure"),
                                height: 24,
                                handler: function() {
                                    e.close(!0)
                                }
                            }]
                        }]
                    }
                },
                close: function(e) {
                    this.fireEvent(BI.Popover.EVENT_CLOSE, e)
                }
            }),
            BI.shortcut("dec.tip.icon.popover", e)
        },
        50130: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-tip-icon-popover",
                    text: "",
                    textDetail: "",
                    iconCls: "prompt-warning-font",
                    textCls: ""
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vtape",
                        items: [{
                            el: {
                                type: "bi.center_adapt",
                                items: [{
                                    el: {
                                        type: "bi.icon_label",
                                        cls: t.iconCls + " icon-size-50",
                                        width: 50,
                                        height: 50
                                    }
                                }, {
                                    type: "bi.vertical",
                                    lgap: 10,
                                    items: [{
                                        type: "bi.label",
                                        cls: t.textCls,
                                        textAlign: "left",
                                        height: 24,
                                        text: t.text
                                    }, {
                                        type: "bi.label",
                                        whiteSpace: "normal",
                                        textAlign: "left",
                                        textHeight: 18,
                                        text: t.textDetail
                                    }]
                                }]
                            },
                            bgap: 10
                        }, {
                            type: "bi.right_vertical_adapt",
                            height: 44,
                            lgap: 10,
                            items: [{
                                type: "bi.button",
                                text: BI.i18nText("BI-Basic_Sure"),
                                handler: function() {
                                    e.close()
                                }
                            }]
                        }]
                    }
                },
                close: function() {
                    this.fireEvent(BI.Popover.EVENT_CLOSE)
                }
            }),
            BI.shortcut("dec.tip.icon.text.popover", e)
        },
        9292: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-tip-icon-popover",
                    $testId: "dec-tip-icon-popover",
                    text: "",
                    iconCls: "prompt-warning-font",
                    buttons: [],
                    width: 450
                },
                render: function() {
                    var e = this.options
                      , t = BI.map(e.text.split("\n"), (function(t, i) {
                        return {
                            type: "bi.label",
                            width: e.width - 130,
                            textHeight: e.textHeight,
                            whiteSpace: "normal",
                            textAlign: "left",
                            text: i
                        }
                    }
                    ));
                    return {
                        type: "bi.vtape",
                        width: e.width - 40,
                        items: [{
                            type: "bi.left_vertical_adapt",
                            items: [{
                                type: "bi.center_adapt",
                                cls: e.iconCls + " left-icon",
                                items: [{
                                    type: "bi.icon",
                                    width: 80
                                }]
                            }, {
                                el: {
                                    type: "bi.vertical",
                                    bgap: 5,
                                    items: t
                                },
                                lgap: 10
                            }]
                        }, {
                            type: "bi.right_vertical_adapt",
                            height: 44,
                            lgap: 10,
                            items: e.buttons
                        }]
                    }
                }
            }),
            BI.shortcut("dec.common.tip.icon.texts", e)
        },
        19579: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-tip-icon-vertical-masker",
                    iconCls: "upload-loading-icon",
                    text: "",
                    buttons: [],
                    iconTgap: 70,
                    el: {}
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vertical",
                        items: [{
                            type: "bi.horizontal_auto",
                            cls: t.iconCls,
                            tgap: t.iconTgap,
                            bgap: 20,
                            items: [{
                                type: "bi.icon",
                                width: 60,
                                height: 60
                            }]
                        }, {
                            type: "bi.label",
                            height: 14,
                            text: t.text,
                            ref: function(t) {
                                e.text = t
                            }
                        }]
                    }
                },
                setText: function(e) {
                    this.text.setText(e)
                }
            }),
            BI.shortcut("dec.tip.icon.vertical", e)
        },
        78614: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-multi-choose-tree-expander",
                    trigger: "",
                    toggle: !0,
                    direction: "bottom",
                    isDefaultInit: !0,
                    el: {},
                    popup: {}
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = BI.extend(t.el, {
                        ref: function(t) {
                            e.trigger = t
                        },
                        listeners: [{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function(t) {
                                BI.Events.CLICK,
                                e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                            }
                        }]
                    })
                      , n = {
                        type: "bi.expander",
                        ref: function(t) {
                            e.expander = t
                        },
                        trigger: t.trigger,
                        toggle: t.toggle,
                        direction: t.direction,
                        isDefaultInit: t.isDefaultInit,
                        el: i,
                        popup: t.popup,
                        listeners: [{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function() {
                                e.fireEvent(BI.Controller.EVENT_CHANGE, arguments)
                            }
                        }]
                    };
                    return n
                },
                setValue: function(e) {
                    BI.contains(e, this.trigger.getValue()) ? this.trigger.setSelected(!0) : this.trigger.setSelected(!1),
                    this.expander.setValue(e)
                },
                getValue: function() {
                    return this.trigger.isSelected() ? [this.trigger.getValue()] : this.expander.getValue()
                },
                populate: function(e) {
                    this.expander.populate(e)
                }
            }),
            BI.shortcut("dec.multi_choose_tree_expander", e)
        },
        69998: function() {
            var e;
            e = BI.inherit(BI.BasicButton, {
                props: {
                    extraCls: "bi-table.list-item-active",
                    layer: 0,
                    id: "",
                    pId: "",
                    height: 24
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: "bi.multi_select_item",
                        ref: function(t) {
                            e.item = t
                        },
                        iconWrapperWidth: 18,
                        stopPropagation: !0,
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        textHeight: t.height,
                        height: t.height,
                        hgap: 5,
                        text: t.text,
                        value: t.id,
                        listeners: [{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function(t, i) {
                                e.fireEvent(BI.Controller.EVENT_CHANGE, t, i, e)
                            }
                        }]
                    }
                      , n = []
                      , o = this._calculateGapLayers();
                    return BI.count(0, t.layer, (function(e) {
                        n.push({
                            type: "bi.layout",
                            cls: BI.contains(o, e) ? "" : "base-line-conn-background",
                            width: 18,
                            height: t.height
                        })
                    }
                    )),
                    n.push({
                        type: "bi.layout",
                        cls: this._getLineCls(),
                        width: 24,
                        height: t.height
                    }),
                    n.push({
                        el: i
                    }),
                    {
                        type: "bi.htape",
                        items: n
                    }
                },
                _getLineCls: function() {
                    var e = "mid-line-conn-background"
                      , t = this.options.node;
                    return BI.isNull(t.getLeft()) && BI.isNull(t.getParent().parent) && (e = "first-line-conn-background"),
                    BI.isNull(t.getRight()) && (e = "last-line-conn-background"),
                    e
                },
                _calculateGapLayers: function() {
                    for (var e = [], t = this.options.node; t.getParent(); )
                        BI.isNull(t.getRight()) && e.push(t.layer),
                        t = t.getParent();
                    return e
                },
                getValue: function() {
                    return this.options.id
                },
                doRedMark: function() {
                    this.item.doRedMark.apply(this.item, arguments)
                },
                unRedMark: function() {
                    this.item.unRedMark.apply(this.item, arguments)
                },
                isSelected: function() {
                    return this.item.isSelected()
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments),
                    this.item.setSelected(t)
                },
                doClick: function() {
                    BI.NodeButton.superclass.doClick.apply(this, arguments)
                }
            }),
            BI.shortcut("dec.multi_choose_tree_mid_item", e)
        },
        16421: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "decision-multi-choose-tree",
                    isDefaultInit: !1,
                    items: [],
                    itemsCreator: BI.emptyFn
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.multi_choose_tree", this.options)
                },
                watch: {
                    selectedValues: function(e) {
                        this.setValue(e),
                        this.fireEvent("EVENT_CHANGE", this.getValue())
                    }
                },
                beforeInit: function(e) {
                    this.store.initTreeData(e)
                },
                render: function() {
                    var e = this;
                    return this.options,
                    this.storeValue = [],
                    {
                        type: "bi.custom_tree",
                        ref: function(t) {
                            e.tree = t
                        },
                        expander: {
                            type: "dec.multi_choose_tree_expander",
                            trigger: "",
                            isDefaultInit: !1,
                            el: {},
                            popup: {
                                type: "bi.custom_tree"
                            }
                        },
                        items: this.store.getFormatedTreeData(),
                        el: {
                            type: "bi.button_tree",
                            chooseType: -2,
                            layouts: [{
                                type: "bi.vertical"
                            }]
                        },
                        listeners: [{
                            eventName: "EVENT_CHANGE",
                            action: function(t, i) {
                                e.store.handleNodeClick(t, i)
                            }
                        }]
                    }
                },
                populate: function(e, t) {
                    this.tree.populate(e, t)
                },
                getValue: function() {
                    return this.model.selectedValues
                },
                setValue: function(e) {
                    this.tree.setValue(e)
                }
            })).EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.multi_choose_tree", e)
        },
        38074: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                _init: function() {},
                state: function() {
                    return {
                        selectedValues: []
                    }
                },
                childContext: [],
                context: [],
                computed: {},
                watch: {},
                actions: {
                    initTreeData: function(e) {
                        BI.isNotEmptyArray(this.options.items) ? (this.initTree(this.options.items),
                        e()) : e()
                    },
                    getFormatedTreeData: function() {
                        return this.formatTreeData()
                    },
                    handleNodeClick: function(e, t) {
                        t.isSelected() ? this._selectNode(e, t.options.node) : this._unSelectNode(e, t.options.node)
                    }
                },
                initTree: function(e) {
                    e = BI.Tree.transformToTreeFormat(e),
                    this.tree = new BI.Tree,
                    this.tree.initTree(e)
                },
                formatTreeData: function() {
                    var e = this;
                    return this.tree.traverse((function(t) {
                        e.calculateLayer(t),
                        t.set("type", (t.getChildrenLength() || t.isParent) > 0 ? "dec.multi_choose_tree_first_node" : "dec.multi_choose_tree_mid_item"),
                        t.data && (t.data.type = (t.getChildrenLength() || t.isParent) > 0 ? "dec.multi_choose_tree_first_node" : "dec.multi_choose_tree_mid_item")
                    }
                    )),
                    this.tree.toJSONWithNode()
                },
                calculateLayer: function(e) {
                    for (var t = -1, i = e; !this.tree.isRoot(i); )
                        t++,
                        i = i.getParent();
                    e.set("layer", t),
                    e.data && (e.data.layer = t)
                },
                _selectNode: function(e, t) {
                    if (t.isLeaf())
                        this.model.selectedValues = BI.union(this.model.selectedValues, [e]);
                    else {
                        var i = [];
                        this.tree._traverse(t, (function(e) {
                            i.push(e.id)
                        }
                        )),
                        this.model.selectedValues = BI.union(this.model.selectedValues, i)
                    }
                },
                _unSelectNode: function(e, t) {
                    if (t.isLeaf())
                        BI.remove(this.model.selectedValues, e);
                    else {
                        var i = [];
                        this.tree._traverse(t, (function(e) {
                            i.push(e.id)
                        }
                        )),
                        BI.remove(this.model.selectedValues, i)
                    }
                }
            }),
            BI.model("dec.model.multi_choose_tree", e)
        },
        62968: function() {
            var e;
            e = BI.inherit(BI.NodeButton, {
                props: {
                    baseCls: "dec-multi-choose-tree-first-node",
                    layer: 0,
                    id: "",
                    pId: "",
                    open: !1,
                    height: 24
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = {
                        type: this._getCheckboxType(),
                        ref: function(t) {
                            e.expandCheckbox = t
                        },
                        stopPropagation: !0,
                        listeners: [{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function(t) {
                                t === BI.Events.CLICK && (this.isSelected() ? e.triggerExpand() : e.triggerCollapse())
                            }
                        }]
                    }
                      , n = {
                        type: "bi.multi_select_item",
                        ref: function(t) {
                            e.item = t
                        },
                        iconWrapperWidth: 18,
                        stopPropagation: !0,
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        textHeight: t.height,
                        height: t.height,
                        hgap: 5,
                        text: t.text,
                        value: t.id,
                        listeners: [{
                            eventName: BI.Controller.EVENT_CHANGE,
                            action: function(t, i) {
                                e.fireEvent(BI.Controller.EVENT_CHANGE, t, i, e)
                            }
                        }]
                    }
                      , o = []
                      , r = this._calculateGapLayers();
                    return BI.count(0, t.layer, (function(e) {
                        o.push({
                            type: "bi.layout",
                            cls: BI.contains(r, e) ? "" : "base-line-conn-background",
                            width: 18,
                            height: t.height
                        })
                    }
                    )),
                    o.push({
                        el: i,
                        width: 24
                    }),
                    o.push({
                        el: n
                    }),
                    {
                        type: "bi.htape",
                        items: o
                    }
                },
                _getCheckboxType: function() {
                    var e = "bi.mid_tree_node_checkbox"
                      , t = this.options.node;
                    return BI.isNull(t.getRight()) && (e = "bi.last_tree_node_checkbox"),
                    BI.isNull(t.getLeft()) && BI.isNull(t.getParent().parent) && (e = BI.isNull(t.getRight()) ? "bi.tree_node_checkbox" : "bi.first_tree_node_checkbox"),
                    e
                },
                _calculateGapLayers: function() {
                    for (var e = [], t = this.options.node; t.getParent(); )
                        BI.isNull(t.getRight()) && e.push(t.layer),
                        t = t.getParent();
                    return e
                },
                getValue: function() {
                    return this.options.id
                },
                isSelected: function() {
                    return this.item.isSelected()
                },
                doRedMark: function() {
                    this.item.doRedMark.apply(this.item, arguments)
                },
                unRedMark: function() {
                    this.item.unRedMark.apply(this.item, arguments)
                },
                setSelected: function(t) {
                    e.superclass.setSelected.apply(this, arguments),
                    this.item.setSelected(t)
                },
                setHalfSelected: function(e) {
                    this.item.setHalfSelected(e)
                },
                doClick: function() {},
                setOpened: function(t) {
                    e.superclass.setOpened.apply(this, arguments),
                    this.expandCheckbox.setSelected(t)
                }
            }),
            BI.shortcut("dec.multi_choose_tree_first_node", e)
        },
        13779: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-base-image-uploader",
                    holder: !1,
                    multiple: !1
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.multifile_editor",
                        ref: function(t) {
                            e.file = t
                        },
                        url: Dec.Utils.getUploadUrl(t.holder),
                        accept: "image/*",
                        multiple: t.multiple,
                        listeners: [{
                            eventName: BI.MultifileEditor.EVENT_ERROR,
                            action: function(t) {
                                e.fireEvent("EVENT_ERROR", t)
                            }
                        }, {
                            eventName: BI.MultifileEditor.EVENT_UPLOADED,
                            action: function() {
                                var t = this.getValue();
                                !BI.some(t, (function(e, t) {
                                    if (t.errorCode)
                                        return BI.Msg.toast(BI.i18nText(t.errorMsg), {
                                            level: "error"
                                        }),
                                        !0
                                }
                                )) && e.fireEvent("EVENT_UPLOADED", t)
                            }
                        }, {
                            eventName: BI.MultifileEditor.EVENT_CHANGE,
                            action: function(t) {
                                var i = t.files;
                                BI.some(i, (function(t, i) {
                                    if (!/image/.test(i.type))
                                        return BI.Msg.toast(BI.i18nText("BI-Upload_File_Type_Error"), {
                                            level: "error"
                                        }),
                                        e.fireEvent("EVENT_ERROR", {
                                            errorType: 0,
                                            file: i
                                        }),
                                        !0
                                }
                                )) ? i.splice(0, i.length) : this.upload()
                            }
                        }]
                    }
                },
                select: function() {
                    this.file.select()
                },
                getValue: function() {
                    this.file.getValue()
                }
            }),
            BI.shortcut("dec.base.image_uploader", e)
        },
        74438: function() {
            var e, t;
            e = [],
            t = [],
            Dec.init = {
                addPrepares: function(t) {
                    e.push(t)
                },
                doPrepares: function(t) {
                    var i = e.length;
                    for (n(); e.length > 0; )
                        e.shift()(n);
                    function n() {
                        0 == i-- && t()
                    }
                }
            },
            Dec.Configs = {
                pushConfig: function(e) {
                    t.push(e)
                },
                runConfigs: function() {
                    BI.each(t, (function(e, t) {
                        t()
                    }
                    ))
                }
            }
        },
        11195: function() {
            Dec.globleModel = Fix.define({
                selectedHash: "index",
                selectedManageNav: "common",
                selectedTab: -1,
                selectedMenu: null,
                openedTabs: [],
                unReadMessageCount: 0,
                partUnreadMessage: [],
                socketStatus: ""
            }),
            Dec.userInfo = Dec.userInfo || {}
        },
        34099: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = i(94116);
            Object.keys(n).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (e in t && t[e] === n[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return n[e]
                    }
                }))
            }
            ))
        },
        94116: function(e, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.instance = t.CancelToken = void 0,
            t.requestDelete = function(e, t) {
                return l.delete(e, t)
            }
            ,
            t.requestFormPost = function() {}
            ,
            t.requestGet = function(e, t, i) {
                return l.get(e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(i), !0).forEach((function(t) {
                            a(e, t, i[t])
                        }
                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                        }
                        ))
                    }
                    return e
                }({
                    params: t
                }, i))
            }
            ,
            t.requestPost = function(e, t, i) {
                return l.post(e, t, i)
            }
            ,
            t.requestPut = function(e, t, i) {
                return l.put(e, t, i)
            }
            ;
            var n = r(i(68016))
              , o = r(i(99113));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function s(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                    i.push.apply(i, n)
                }
                return i
            }
            function a(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                e
            }
            var c = n.default.CancelToken;
            t.CancelToken = c;
            var l = n.default.create({
                baseURL: Dec.fineServletURL,
                timeout: 0,
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                },
                paramsSerializer: function(e) {
                    return o.default.stringify(e, {
                        arrayFormat: "brackets"
                    })
                }
            });
            t.instance = l,
            l.interceptors.request.use((function(e) {
                return e.headers.Authorization = "Bearer ".concat(BI.Cache.getCookie("fine_auth_token")),
                e
            }
            ), (function(e) {
                return Promise.reject(e)
            }
            )),
            l.interceptors.response.use((function(e) {
                var t = e.data.errorCode;
                return [DecCst.ErrorCode.LOGIN_INFO_NOT_AVAILABLE, DecCst.ErrorCode.LOGIN_INFO_ERROR, DecCst.ErrorCode.TIMEOUT, DecCst.ErrorCode.CANNOT_GET_TOKEN].includes(t) && BI.Services.getService("dec.service.global").loginKick(t),
                e
            }
            ), (function(e) {
                return Promise.reject(e)
            }
            )),
            l.interceptors.response.use((function(e) {
                return e.data.errorCode === DecCst.ErrorCode.IN_MIGRATION && (location.href = "".concat(Dec.fineServletURL, "/v10/migration/page")),
                e
            }
            ), (function(e) {
                return Promise.reject(e)
            }
            )),
            l.interceptors.response.use((function(e) {
                return e.data = void 0 !== e.data.data ? e.data.data : e.data,
                e
            }
            ), (function(e) {
                return Promise.reject(e)
            }
            ))
        },
        3911: function(e, t, i) {
            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ,
                n(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = {
                shortcut: !0,
                model: !0,
                store: !0,
                Model: !0,
                mixins: !0,
                mixin: !0,
                provider: !0,
                getLayoutConstant: !0
            };
            t.Model = void 0,
            Object.defineProperty(t, "getLayoutConstant", {
                enumerable: !0,
                get: function() {
                    return s.getLayoutConstant
                }
            }),
            t.store = t.shortcut = t.provider = t.model = t.mixins = t.mixin = void 0;
            var r = function(e, t) {
                if (!t && e && e.__esModule)
                    return e;
                if (null === e || "object" !== n(e) && "function" != typeof e)
                    return {
                        default: e
                    };
                var i = a(t);
                if (i && i.has(e))
                    return i.get(e);
                var o = {}
                  , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in e)
                    if ("default" !== s && Object.prototype.hasOwnProperty.call(e, s)) {
                        var c = r ? Object.getOwnPropertyDescriptor(e, s) : null;
                        c && (c.get || c.set) ? Object.defineProperty(o, s, c) : o[s] = e[s]
                    }
                o.default = e,
                i && i.set(e, o);
                return o
            }(i(34099));
            Object.keys(r).forEach((function(e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(o, e) || e in t && t[e] === r[e] || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: function() {
                        return r[e]
                    }
                }))
            }
            ));
            var s = i(93730);
            function a(e) {
                if ("function" != typeof WeakMap)
                    return null;
                var t = new WeakMap
                  , i = new WeakMap;
                return (a = function(e) {
                    return e ? i : t
                }
                )(e)
            }
            BI.extend(Dec, {
                httpRequest: r,
                getLayoutConstant: s.getLayoutConstant
            });
            var c = BI.Decorators
              , l = c.shortcut
              , u = c.model
              , d = c.store
              , h = c.Model
              , p = c.mixins
              , f = c.mixin
              , g = c.provider;
            t.provider = g,
            t.mixin = f,
            t.mixins = p,
            t.Model = h,
            t.store = d,
            t.model = u,
            t.shortcut = l
        },
        93730: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            t.getLayoutConstant = void 0;
            var i = "dec.constant.layout";
            BI.constant(i, {
                GAP_SMALL: 5,
                GAP: 10,
                GAP_LARGE: 15,
                HEIGHT_SMALL: 16,
                HEIGHT: 24,
                HEIGHT_LARGE: 32,
                LABEL_WIDTH: 120,
                HEADER_HEIGHT: 40
            });
            t.getLayoutConstant = function() {
                return BI.Constants.getConstant(i)
            }
        },
        48776: function() {
            window.Dec || (window.Dec = {},
            Dec.injection = {}),
            window.DecCst || (window.DecCst = {}),
            BI.module("dec.decision", {
                version: "10.0.4"
            }),
            Dec.resourceURL = Dec.fineServletURL + "/resources?path=/com/fr/web/resources/dist/",
            Dec.system = Dec.system || {},
            Dec.personal = Dec.personal || {},
            Dec.personal.homepage = Dec.personal.homepage || {},
            BI.StartOfWeek = Dec.system.weekBegins,
            BI.specialCharsMap = DecCst.EncodeSpecialChar ? DecCst.EncodeSpecialChar.CHARSET : {},
            BI.timeZone = Dec.system.timeZone
        },
        10817: function() {
            var e, t;
            e = [],
            t = BI.inherit(BI.OB, {
                registerEntryLoader: function(t) {
                    e.push(t)
                },
                $get: function() {
                    return BI.inherit(BI.OB, {
                        getEntryLoaders: function() {
                            return e.slice(0)
                        }
                    })
                }
            }),
            BI.provider("dec.provider.frame.entry", t)
        },
        61595: function() {
            var e;
            e = BI.inherit(BI.OB, {
                init: function() {
                    this.entryProvider = BI.Providers.getProvider("dec.provider.frame.entry")
                },
                normalizeEntries: function(e, t) {
                    var i = this;
                    BI.isNull(t) && (t = !0);
                    var n = BI.Services.getService("dec.service.appearance.entry");
                    return BI.each(e, (function(e, t) {
                        t.value = t.id,
                        t.imgSrc = n.getComputedCover(t.cover),
                        t.iconCls = BI.isNotEmptyString(t.icon) ? n.getComputedIcon(t.icon) : n.getDefaultIcon(t),
                        t.iframeSrc = i.buildEntryIframeSrc(t),
                        t.text = BI.i18nText(t.text),
                        t.textTitle = t.text + (t.description ? "\n" + BI.i18nText("Dec-Platform_Directory_Description") + ": " + t.description : "")
                    }
                    )),
                    e = this._queueEntryLoaders(e),
                    t ? BI.sortBy(e, "sortIndex") : e
                },
                buildEntryIframeSrc: function(e) {
                    var t = "";
                    return e.entryType === DecCst.Entries.Entry_Type.LINK_TYPE ? (t = Dec.Utils.preCheckLink(e.path || e.pcURL),
                    t = this.normalizeLink(t)) : t = BI.isKey(e.id) ? Dec.fineServletURL + "/v10/entry/access/" + e.id : "about:blank",
                    t
                },
                normalizeLink: function(e) {
                    return Dec.Utils.encodeUrl2UTF8(e)
                },
                flattenEntry: function(e) {
                    var t = this
                      , i = []
                      , n = {
                        items: []
                    };
                    return BI.each(e.children, (function(e, o) {
                        var r, s;
                        o.entryType === DecCst.Entries.Entry_Type.FOLDER ? i.push({
                            entryName: o.text,
                            items: (r = o,
                            s = [],
                            BI.Tree.traversal(BI.sortBy(r.children, "sortIndex"), (function(e, t) {
                                t.entryType !== DecCst.Entries.Entry_Type.FOLDER && s.push(t)
                            }
                            )),
                            t.normalizeEntries(s))
                        }) : n.items.push(o)
                    }
                    )),
                    BI.concat(BI.isEmptyArray(n.items) ? [] : [n], i)
                },
                pickUnFolderItems: function(e) {
                    var t = BI.filter(e.children, (function(e, t) {
                        return t.entryType !== DecCst.Entries.Entry_Type.FOLDER
                    }
                    ));
                    return [{
                        entryName: e.text,
                        items: this.normalizeEntries(t)
                    }]
                },
                getEntryCover: function(e) {
                    return BI.Services.getService("dec.service.appearance.entry").getComputedCover(e.cover)
                },
                _patchSizeParams: function(e) {
                    var t = this.tabPane.getContainerSize();
                    return e + "&" + Dec.Utils.transformObject2URLParam(t)
                },
                _queueEntryLoaders: function(e) {
                    var t = this.entryProvider.getEntryLoaders();
                    return BI.each(t, (function(t, i) {
                        BI.isFunction(i) && (e = i(e))
                    }
                    )),
                    e
                }
            }),
            BI.service("dec.service.frame.entry", e)
        },
        37729: function() {
            function e(e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                e
            }
            var t;
            t = BI.inherit(BI.OB, {
                showLastLoginInfo: function() {
                    Dec.system.loginInfoRemind && !BI.Cache.getCookie(DecCst.Cookie.LAST_LOGIN_INFO) && Dec.Utils.getLastLoginInfo((function(e) {
                        if (e.data) {
                            var t = e.data;
                            Dec.Msg.pop({
                                type: "dec.components.login.last.info",
                                time: t.time,
                                ip: t.ip,
                                address: t.city
                            }, {
                                height: 170,
                                width: 300
                            }),
                            BI.Cache.addCookie(DecCst.Cookie.LAST_LOGIN_INFO, !0, Dec.system.cookiePath, -1)
                        }
                    }
                    ))
                },
                loginKick: function(t, i) {
                    var n;
                    BI.contains([DecCst.ErrorCode.SINGLE_LOGIN_KICK], t) && Dec.Utils.clearLoginToken(),
                    BI.isNotNull(Dec.socket) && Dec.socket.disconnect();
                    var o = i || (n = {},
                    e(n, DecCst.ErrorCode.PLATFORM_USER_REMOVE, "Dec-Login_Account_Not_Available"),
                    e(n, DecCst.ErrorCode.SINGLE_LOGIN_KICK, "Dec-Login_Single_Logged_Tip"),
                    e(n, DecCst.ErrorCode.USERNAME_PASSWORD_ERROR, "Dec-Login_Password_Changed"),
                    e(n, DecCst.ErrorCode.CANNOT_GET_TOKEN, {
                        type: "bi.center_adapt",
                        items: [{
                            type: "bi.label",
                            whiteSpace: "normal",
                            text: BI.i18nText("Dec-Login_Cannot_Get_Token")
                        }, {
                            type: "dec.link.button",
                            text: BI.i18nText("Dec-Basic_Click_Here_To_View_Help_Document"),
                            link: Dec.system[DecCst.Hyperlink.DECISION_HYPERLINK_CONFIG][DecCst.Hyperlink.CANNOT_GET_TOKEN]
                        }]
                    }),
                    n)[t] || "Dec-Login_Info_Not_Available"
                      , r = "string" == typeof o ? {
                        type: "bi.label",
                        whiteSpace: "normal",
                        text: BI.i18nText(o)
                    } : o
                      , s = "login.timeout";
                    BI.Popovers.create(s, {
                        header: BI.i18nText("BI-Basic_Prompt"),
                        size: "small",
                        closable: !1,
                        body: r,
                        footer: {
                            type: "bi.right_vertical_adapt",
                            items: [{
                                type: "bi.button",
                                $testId: "dec-login-kick-btn",
                                text: BI.i18nText("BI-Basic_OK"),
                                height: 24,
                                handler: function() {
                                    BI.Popovers.remove(s),
                                    window.location.reload(!0)
                                }
                            }]
                        }
                    }, this).open(s)
                },
                showErrorMasker: function(e) {
                    var t = BI.UUID();
                    BI.Maskers.create(t, null, {
                        render: {
                            type: "dec.error_masker.single",
                            text: e
                        }
                    }),
                    BI.Maskers.show(t)
                },
                refreshToken: function() {
                    $(document).click((function() {
                        Dec.Utils.saveLastOperatingTime()
                    }
                    )),
                    Dec.Utils.initRefreshToken()
                },
                isAdmin: function() {
                    return BI.contains(Dec.system.adminUser, Dec.personal.username)
                },
                checkAdmin: function(e) {
                    return BI.contains(Dec.system.adminUser, e.username)
                },
                initUsebleModules: function(e) {
                    var t = this;
                    if (!this._useableModules)
                        return Dec.personal.modules ? (this._useableModules = Dec.personal.modules,
                        void e(this._useableModules)) : void Dec.Utils.getUseAbleDecisionModules((function(i) {
                            t._useableModules = i.data,
                            e(t._useableModules)
                        }
                        ));
                    e(this._useableModules)
                },
                checkModulesUseable: function(e) {
                    return BI.some(this._useableModules, (function(t, i) {
                        return i.id === e
                    }
                    ))
                },
                getLanguage: function() {
                    return {
                        "默认": "zh_CN",
                        "預設": "zh_TW",
                        Default: "en_US",
                        "既定": "ja_JP",
                        "디폴트": "ko_KR"
                    }[BI.i18nText("Dec-Basic_Default")]
                },
                openExpireRemindDialog: function() {
                    var e = BI.UUID();
                    BI.Layers.create(e, null, {
                        type: "dec.expire_remind",
                        listeners: [{
                            eventName: "EVENT_CLICK",
                            action: function() {
                                BI.Layers.remove(e)
                            }
                        }]
                    }),
                    BI.Layers.show(e)
                },
                checkExpireRemindDialog: function() {
                    var e = this;
                    Dec.reqGet("/v10/register/module/remind/tip", {}, (function(t) {
                        var i = t.data;
                        BI.size(i) && (i.forEach((function(e) {
                            var t = e.registered
                              , i = void 0 === t || t
                              , n = e.deadline
                              , o = (new Date).getTime();
                            e.moduleState = i ? n < o ? BI.i18nText("Dec-Expire_Remind_Expired") : BI.i18nText("Dec-Expire_Remind_Expiring_Soon") : BI.i18nText("Dec-Expire_Remind_Unregistered")
                        }
                        )),
                        BI.config("dec.constant.expire_remind.module_list", (function() {
                            return i
                        }
                        )),
                        e.openExpireRemindDialog())
                    }
                    ))
                }
            }),
            BI.service("dec.service.global", t)
        },
        23823: function() {
            var e;
            e = BI.inherit(BI.OB, {
                initLicense: function(e) {
                    function t(t) {
                        Dec.AvailableFunctions = t,
                        e && e()
                    }
                    Dec.system.functions ? t(Dec.system.functions) : Dec.Utils.reqGetFunctionDetail((function(e) {
                        t(e.functions)
                    }
                    ))
                },
                getLicense: function(e) {
                    return BI.some(Dec.AvailableFunctions, (function(t, i) {
                        return i.functionID === e && !0 === i.support
                    }
                    )) || BI.some(Dec.AvailableFunctions, (function(t, i) {
                        return i.functionName === e && !0 === i.support
                    }
                    ))
                }
            }),
            BI.service("dec.service.global.lic", e),
            Dec.init.addPrepares((function(e) {
                BI.Services.getService("dec.service.global.lic").initLicense(e)
            }
            ))
        },
        41338: function() {
            var e, t;
            e = {
                accessToken: BI.Cache.getCookie(DecCst.Cookie.TOKEN),
                validity: BI.Cache.getCookie(DecCst.Cookie.REMEMBER_LOGIN)
            },
            t = BI.inherit(BI.OB, {
                getInfo: function() {
                    return e
                },
                setInfo: function(t) {
                    e = t
                },
                clearInfo: function() {
                    e = {
                        accessToken: null,
                        validity: null
                    }
                },
                getToken: function() {
                    return BI.Cache.getCookie(DecCst.Cookie.TOKEN) || e.accessToken
                },
                getValidity: function() {
                    return BI.parseInt(BI.Cache.getCookie(DecCst.Cookie.REMEMBER_LOGIN) || e.validity)
                }
            }),
            BI.service("dec.service.global.login", t)
        },
        87456: function() {
            var e;
            e = BI.inherit(BI.OB, {
                initTree: function(e) {
                    var t = new BI.Tree;
                    return t.initTree(BI.Tree.treeFormat(BI.deepClone(e))),
                    t
                },
                addNodes2Tree: function(e, t) {
                    BI.each(e, (function(e, i) {
                        t.addChild(i)
                    }
                    ), this)
                },
                deleteNodeFromTree: function(e) {
                    var t = e.getParent();
                    return t && t.removeChild(e.get("id")),
                    e.set("parent", null),
                    e
                },
                moveNode2BelongNode: function(e, t) {
                    this.deleteNodeFromTree(e),
                    t.addChild(e, 0)
                },
                moveNode2AdjoinNode: function(e, t) {
                    this.deleteNodeFromTree(e);
                    var i = t.getParent();
                    i.addChild(e, i.getChildIndex(t.get("id")) + 1)
                },
                decoratedTreeNodes: function(e) {
                    var t = this;
                    BI.each(e, (function(e, i) {
                        t.setData(i, "layer", t.getLayer(i)),
                        t.setData(i, "gapLayers", t.calculateGapLayers(i)),
                        i.get("isParent") ? t.setData(i, "checkboxType", t.getCheckboxType(i)) : t.setData(i, "lineCls", t.getLeafLineCls(i))
                    }
                    ))
                },
                recurseDecoratedTreeNodes: function(e) {
                    var t = this;
                    e.traverse((function(i) {
                        !e.isRoot(i) && t.decoratedTreeNodes([i])
                    }
                    ))
                },
                getCheckboxType: function(e) {
                    var t = "bi.mid_tree_node_checkbox";
                    return BI.isNull(e.getRight()) && (t = "bi.last_tree_node_checkbox"),
                    BI.isNull(e.getLeft()) && BI.isNull(e.getParent().parent) && (t = BI.isNull(e.getRight()) ? "bi.tree_node_checkbox" : "bi.first_tree_node_checkbox"),
                    t
                },
                calculateGapLayers: function(e) {
                    for (var t = [], i = 0; e.getParent(); )
                        i++,
                        BI.isNull(e.getRight()) && t.push(i),
                        e = e.getParent();
                    return BI.map(t, (function(e, t) {
                        return i - t
                    }
                    ))
                },
                getLeafLineCls: function(e) {
                    var t = "mid-line-conn-background";
                    return BI.isNull(e.getLeft()) && BI.isNull(e.getParent().parent) && (t = "first-line-conn-background"),
                    BI.isNull(e.getRight()) && (t = "last-line-conn-background"),
                    t
                },
                generateNodes: function(e) {
                    return BI.map(e, (function(e, t) {
                        var i = new BI.Node(t);
                        return i.set("data", t),
                        i
                    }
                    ))
                },
                getLayer: function(e) {
                    for (var t = -1, i = e.getParent(); i; )
                        t++,
                        i = i.getParent();
                    return t
                },
                setData: function(e, t, i) {
                    e.set(t, i),
                    e.data[t] = i
                },
                searchData: function(e, t) {
                    var i = [];
                    return e.traverse((function(n) {
                        var o = BI.Func.getSearchResult(e.isRoot(n) ? [] : [n.text], t);
                        if (o.find.length > 0 || o.match.length > 0)
                            return i.push(n),
                            !0
                    }
                    )),
                    this._fillTreeStructure4Search(e, i, "id")
                },
                getLineCls: function(e) {
                    return 0 === e.layer && e.isFirstNode && e.isLastNode ? "" : 0 === e.layer && e.isFirstNode ? "first-line-conn-background" : e.isLastNode ? "last-line-conn-background" : "mid-line-conn-background"
                },
                getNodeCheckboxType: function(e) {
                    return 0 === e.layer && e.isFirstNode && e.isLastNode ? "bi.tree_node_checkbox" : 0 === e.layer && e.isFirstNode ? "bi.first_tree_node_checkbox" : e.isLastNode ? "bi.last_tree_node_checkbox" : "bi.mid_tree_node_checkbox"
                },
                _fillTreeStructure4Search: function(e, t) {
                    var i = this
                      , n = []
                      , o = [];
                    for (BI.each(BI.deepClone(t), (function(e, t) {
                        o.push({
                            pId: t.pId
                        }),
                        n.push(t),
                        n = n.concat(i._getChildren(t))
                    }
                    )); BI.isNotEmptyArray(o); ) {
                        var r = o.shift()
                          , s = e.search(e.getRoot(), r.pId, "id");
                        BI.isNotNull(s) && (o.push({
                            pId: s.pId
                        }),
                        n.push(BI.extend({}, s, {
                            open: !0
                        })))
                    }
                    return BI.uniqBy(n, "id")
                },
                _getChildren: function(e) {
                    var t = this;
                    e.children = e.children || [];
                    var i = [];
                    return BI.each(e.children, (function(e, n) {
                        var o = t._getChildren(n);
                        i = i.concat(o)
                    }
                    )),
                    e.children.concat(i)
                }
            }),
            BI.service("dec.service.tree", e)
        },
        56592: function() {
            Dec.Utils = Dec.Utils || {},
            BI.extend(Dec.Utils, {
                getDynamicDateValue: function(e) {
                    if (e.type === BI.DynamicDateCombo.Dynamic)
                        return BI.DynamicDateHelper.getCalculation(e.value).print("%Y-%X-%d");
                    var t = e.type === BI.DynamicDateCombo.Static ? e.value : e;
                    return BI.getDate(t.year, t.month - 1, t.day).print("%Y-%X-%d")
                },
                strLength: function(e) {
                    return BI.isNull(e) ? 0 : (BI.isString(e) || (e += ""),
                    e.replace(/[^\x00-\xff]/g, "01").length)
                },
                parseVals2Array: function(e) {
                    var t = [];
                    return BI.each(e, (function(e, i) {
                        BI.isEmpty(i) ? t.push(e) : t = t.concat(Dec.Utils.parseVals2Array(i))
                    }
                    )),
                    t
                },
                randomStr: function(e) {
                    for (var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], i = "", n = 0; n < e; n++)
                        i += t[parseInt(t.length * Math.random(), 10)];
                    return i
                },
                distinguishTemplateType: function(e) {
                    var t = "";
                    return BI.each(["cpt", "frm"], (function(i, n) {
                        new RegExp("\\." + n).test(e) && (t = n)
                    }
                    )),
                    t
                },
                isFullScreen: function() {
                    return document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || !1
                },
                checkDirectoryEditAuth: function(e) {
                    return !!BI.isNull(e) || BI.some(e, (function(e, t) {
                        return 3 === t.privilegeType && 2 === t.privilegeValue
                    }
                    ))
                },
                recursionHtmlDecode: function(e) {
                    !function e(t) {
                        BI.each(t, (function(i, n) {
                            BI.isString(n) ? t[i] = BI.htmlDecode(n) : e(n)
                        }
                        ))
                    }(e)
                },
                getByteWidthUnit: function(e) {
                    var t = ["B", "KB", "MB", "GB", "TB", "PB"]
                      , i = 0
                      , n = BI.size(t) - 1;
                    if (!BI.isNumeric(e))
                        return "";
                    for (e = BI.parseFloat(e); e >= 1024 && i < n; )
                        e /= 1024,
                        i++;
                    return (Math.floor(e) === e ? e : e.toFixed(1)) + t[i]
                },
                getHiddenPhone: function(e) {
                    return BI.isNotEmptyString(e) ? e.replace(/^([0-9]{3})([0-9]+)([0-9]{4})$/, (function(e, t, i, n) {
                        return t + i.replace(/[0-9]/g, "*") + n
                    }
                    )) : ""
                },
                getHiddenMail: function(e) {
                    return BI.isNotEmptyString(e) ? e.replace(/^([a-zA-Z0-9._&#-]{1,2})[a-zA-Z0-9._&#-]*(@.+)/, "$1****$2") : ""
                },
                generateRandomString: function(e, t) {
                    var i = BI.extend({
                        letter: "abcdefghijklmnopqrstuvwxyz",
                        upperLetter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
                        number: "0123456789",
                        special: "_-@."
                    }, t);
                    function n(e) {
                        return e.charAt(Math.floor(Math.random() * e.length))
                    }
                    for (var o = "", r = e, s = BI.values(i).join(""); r--; )
                        o += n(s);
                    var a = Math.floor(Math.random() * e)
                      , c = Math.floor(e / BI.size(i));
                    return BI.each(i, (function(t, i) {
                        o = function(e, t, i) {
                            return e.substring(0, t) + i + e.substring(t + 1)
                        }(o, a % e, n(i)),
                        a += c
                    }
                    )),
                    o
                },
                dynamicloadChartResources: function(e) {
                    BI.$import(Dec.fineServletURL + "/file?path=/com/fr/web/core/js/vancharts-all.js&type=plain&parser=plain"),
                    e && e()
                },
                encodeUrl2UTF8: function(e) {
                    var t = /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g
                      , i = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g;
                    return function(e) {
                        return String(e).replace(i, "$1�$2").replace(t, encodeURI)
                    }(e)
                },
                addSecureCookie: function() {
                    arguments[1] = String(arguments[1]) + ("https:" === location.protocol ? ";SameSite=None;Secure" : ""),
                    BI.Cache.addCookie.apply(BI.Cache, arguments)
                }
            })
        },
        48702: function(e, t, i) {
            var n = i(3911);
            !function() {
                function e() {
                    return (new Date).getTime()
                }
                var t = BI.debounce((function() {
                    BI.Cache.setItem(DecCst.LAST_OPERATING_TIME, e())
                }
                ), BI.EVENT_RESPONSE_TIME, {
                    maxWait: 1e3,
                    leading: !0,
                    trailing: !1
                });
                BI.extend(Dec.Utils, {
                    initRefreshToken: function() {
                        BI.Cache.setItem(DecCst.LAST_OPERATING_TIME, e()),
                        Dec.Utils.refreshToken()
                    },
                    saveLastOperatingTime: function() {
                        t()
                    },
                    getLastOperatingTimeDifference: function() {
                        return e() - BI.Cache.getItem(DecCst.LAST_OPERATING_TIME)
                    },
                    emitRefreshToken: function(e) {
                        var t = BI.Services.getService("dec.service.global.login")
                          , i = {
                            oldToken: BI.Cache.getCookie(DecCst.Cookie.TOKEN),
                            tokenTimeOut: e
                        };
                        (0,
                        n.requestPost)("/token/refresh", i).then((function(e) {
                            return function(e) {
                                var i = e.data;
                                if (!BI.isNotEmptyObject(i))
                                    return;
                                var n = i.validity === DecCst.Cookie.REMEMBER_PASSWORD ? 24 * DecCst.Cookie.REMEMBER_DAY : DecCst.Cookie.VALIDITY_NOW;
                                t.setInfo(i),
                                Dec.Utils.addSecureCookie(DecCst.Cookie.REMEMBER_LOGIN, i.validity, Dec.system.cookiePath, n),
                                Dec.Utils.addSecureCookie(DecCst.Cookie.TOKEN, i.accessToken, Dec.system.cookiePath, n)
                            }(e)
                        }
                        ))
                    },
                    getLoginTimeout: function() {
                        return BI.parseInt(BI.Services.getService("dec.service.global.login").getValidity()) === DecCst.Cookie.REMEMBER_PASSWORD ? 24 * DecCst.Cookie.REMEMBER_DAY * 3600 * 1e3 : Dec.system.loginTimeout
                    },
                    refreshToken: function() {
                        var e = DecCst.TOKEN_FRESH_TIME
                          , t = Dec.Utils.getLastOperatingTimeDifference()
                          , i = Dec.Utils.getLoginTimeout() - t;
                        if (i <= 0)
                            BI.Services.getService("dec.service.global").loginKick();
                        else {
                            Dec.Utils.emitRefreshToken(i);
                            var n = window.setTimeout((function() {
                                Dec.Utils.refreshToken()
                            }
                            ), e);
                            if (e > i) {
                                var o = i - DecCst.TOKEN_FRESH_BEFORE_TIME;
                                Dec.Utils.onTimeoutFinalToken(o, (function() {
                                    window.clearTimeout(n)
                                }
                                ))
                            }
                        }
                    },
                    onTimeoutFinalToken: function(e, t) {
                        window.setTimeout((function() {
                            var e = Dec.Utils.getLastOperatingTimeDifference()
                              , i = Dec.Utils.getLoginTimeout() - e;
                            i > DecCst.TOKEN_FRESH_BEFORE_TIME ? Dec.Utils.emitRefreshToken(i) : (BI.Cache.removeItem(DecCst.LAST_OPERATING_TIME),
                            Dec.Utils.clearLoginToken(),
                            BI.Services.getService("dec.service.global").loginKick(),
                            t())
                        }
                        ), e)
                    },
                    clearLoginToken: function() {
                        BI.Cache.deleteCookie(DecCst.Cookie.TOKEN, Dec.system.cookiePath),
                        BI.Services.getService("dec.service.global.login").clearInfo()
                    }
                })
            }()
        },
        23911: function(e, t) {
            function i(e, t) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    limits: BI.MAX
                }
                  , n = i.limits
                  , o = function e(i) {
                    var o = [];
                    return i.forEach((function(i) {
                        var r = BI.Func.getSearchResult([i], t, "text");
                        if (BI.size(r.match.concat(r.find)) > 0)
                            i.children = [],
                            o.push(i);
                        else {
                            if (n <= 0)
                                return;
                            i.children && (i.children = e(i.children)),
                            BI.isNotEmptyArray(i.children) && (i.open = !0,
                            o.push(i))
                        }
                    }
                    )),
                    n -= o.length,
                    o
                };
                return o(BI.deepClone(e))
            }
            BI.extend(Dec, {
                searchTreeData: i
            })
        },
        46584: function() {
            Dec.Utils = Dec.Utils || {},
            BI.extend(Dec.Utils, {
                transformObject2URLParam: function(e, t, i) {
                    return BI.$.param(e)
                },
                buildTokenStr: function(e) {
                    return BI.indexOf(e, "?") > -1 ? e + "&" + DecCst.Cookie.URL_TOKEN + "=" + BI.Cache.getCookie(DecCst.Cookie.TOKEN) : e + "?" + DecCst.Cookie.URL_TOKEN + "=" + BI.Cache.getCookie(DecCst.Cookie.TOKEN)
                },
                getEncodeURL: function(e, t, i) {
                    var n = e.indexOf("?")
                      , o = i || {}
                      , r = BI.isNotEmptyObject(o);
                    if (n > -1) {
                        var s = (BI.endWith(e, "?") ? "" : "&") + BI.$.param(o || {});
                        return BI.getEncodeURL(e.substring(0, n), t) + e.substring(n) + (r ? s : "")
                    }
                    return BI.getEncodeURL(e, t) + (r ? "?" + BI.$.param(o) : "")
                },
                getUrlQuery: function(e) {
                    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
                      , i = window.location.search.substr(1).match(t);
                    return null !== i ? i[2] : ""
                },
                addAuthParam: function(e) {
                    var t = e.split("?");
                    return t[0] + "?" + (t[1] || "")
                },
                checkHashAuthority: function(e) {
                    var t = e.split("/")
                      , i = BI.find(BI.Tree.transformToArrayFormat(BI.Providers.getProvider("dec.provider.management").getManagementNavigations()), (function(e, i) {
                        return i.value === t[1]
                    }
                    ));
                    return !!i && !!BI.some(Dec.decisionModules, (function(e, t) {
                        return t.id === i.id
                    }
                    ))
                },
                buildResourceURI: function(e) {
                    return Dec.fineServletURL + "/resources?path=" + e
                },
                appendQuery: function(e, t) {
                    var i = e.split("?")
                      , n = i[0]
                      , o = i[1] || "";
                    return "" !== o && (o.endWith("&") || (o += "&")),
                    "string" == typeof t ? (t.startWith("&") && (o = t.substr(1)),
                    o += t) : (BI.each(t, (function(e, t) {
                        "string" == typeof e && (o += e + "=" + t + "&")
                    }
                    )),
                    o = o.substr(0, o.length - 1)),
                    n + "?" + o
                },
                encodeParam: function(e) {
                    for (var t in e)
                        _.isObject(e[t]) ? e[t] = window.encodeURIComponent(BI.jsonEncode(e[t])) : e[t] = window.encodeURIComponent(e[t]);
                    return e
                },
                exportFileByForm: function(e, t, i) {
                    i = i || {},
                    e = Dec.fineServletURL + e;
                    var n = {
                        method: i.method || "POST",
                        url: e,
                        data: t,
                        target: i.target
                    }
                      , o = $('<form method="' + n.method + '" />');
                    for (var r in o.attr("action", n.url),
                    o.attr("method", n.method || "post"),
                    o.attr("target", n.target || "_self"),
                    !0 === i.notEncode || (n.data = this.encodeParam(n.data)),
                    n.data)
                        o.append('<input type="hidden" name="' + r + '" value="' + n.data[r] + '" />');
                    $(document.body).append(o),
                    o[0].submit(),
                    o.destroy()
                },
                buildImgUrlByAttachId: function(e, t) {
                    return t ? Dec.fineServletURL + "/v10/attach/image/cache/" + e : Dec.fineServletURL + "/v10/attach/image/" + e
                },
                getUploadUrl: function(e) {
                    return Dec.fineServletURL + DecCst.Web.Upload_File_Url + (e ? "&isHolder=true" : "")
                },
                formatAddress: function(e) {
                    return e
                },
                preCheckLink: function(e) {
                    return BI.some(DecCst.Web.PSEUDO_PROTOCALS, (function(t, i) {
                        var n = new RegExp("^" + i + "[^s]*","gi");
                        return e.match(n)
                    }
                    )) ? "Unsafe_Link:" + e : e
                },
                deparam: function(e, t) {
                    var i = {}
                      , n = {
                        true: !0,
                        false: !1,
                        null: null
                    };
                    return BI.each(e.replace(/\+/g, " ").split("&"), (function(e, o) {
                        var r, s = o.split("="), a = decodeURIComponent(s[0]), c = i, l = 0, u = a.split("]["), d = u.length - 1;
                        if (/\[/.test(u[0]) && /\]$/.test(u[d]) ? (u[d] = u[d].replace(/\]$/, ""),
                        d = (u = u.shift().split("[").concat(u)).length - 1) : d = 0,
                        2 === s.length)
                            if (r = decodeURIComponent(s[1]),
                            t && (r = r && !isNaN(r) ? +r : "undefined" === r ? void 0 : void 0 !== n[r] ? n[r] : r),
                            d)
                                for (; l <= d; l++)
                                    c = c[a = "" === u[l] ? c.length : u[l]] = l < d ? c[a] || (u[l + 1] && isNaN(u[l + 1]) ? {} : []) : r;
                            else
                                $.isArray(i[a]) ? i[a].push(r) : void 0 !== i[a] ? i[a] = [i[a], r] : i[a] = r;
                        else
                            a && (i[a] = t ? void 0 : "")
                    }
                    )),
                    i
                },
                encodeUrl2UTF8: function(e) {
                    var t = /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g
                      , i = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g;
                    return function(e) {
                        return String(e + "").replace(i, "$1�$2").replace(t, encodeURI)
                    }(e)
                }
            })
        },
        46810: function() {
            Dec.Utils = Dec.Utils || {},
            BI.extend(Dec.Utils, {
                isPort: function(e) {
                    return /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(e)
                },
                isMultiPort: function(e) {
                    return /^(([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])\s*,\s*)*([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/.test(e)
                },
                isPhoneNumber: function(e, t) {
                    var i = BI.Constants.getConstant("dec.constant.common.phone.type");
                    return BI.some(i, (function(i, n) {
                        return t ? t === n.value && n.regex.test(e) : n.regex.test(e)
                    }
                    ))
                },
                isMultiPhoneNumber: function(e) {
                    if (BI.isNull(e))
                        return !1;
                    var t = BI.Constants.getConstant("dec.constant.common.phone.type");
                    return BI.every(e.split(","), (function(e, i) {
                        return -1 === i.indexOf("+") ? /^1\d{10}$/.test(i) : BI.some(t, (function(e, t) {
                            return t.regex.test(i.replace(t.value, ""))
                        }
                        ))
                    }
                    ))
                },
                isMailAddress: function(e) {
                    return /^[a-zA-Z0-9._&#-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e)
                },
                isMultiMailAddress: function(e) {
                    return /^([a-zA-Z0-9._&#-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+,)*[a-zA-Z0-9._&#-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e)
                },
                checkValidName: function(e) {
                    return /^[A-Za-z0-9@_\-.\u2E80-\u2FDF\u3040-\u318F\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7FF]+$/.test(e)
                },
                checkValidURL: function(e) {
                    return /^((?!@).)*$/.test(e)
                },
                checkValidCharacter: function(e) {
                    return /^[A-Za-z0-9_.()[\]{}（）\u2E80-\u2FDF\u3040-\u318F\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FFF\uA960-\uA97F\uAC00-\uD7FF]+$/.test(e)
                },
                checkValidMacAddress: function(e) {
                    return /^[A-F0-9]{2}(-[A-F0-9]{2}){5}$|^[A-F0-9]{2}(:[A-F0-9]{2}){5}$/.test(e)
                },
                isPositiveNumber: function(e) {
                    return BI.isNumeric(e) && e > 0
                },
                isFullURL: function(e) {
                    return /^(https?:)?\/\/.+$/.test(e)
                },
                isValidFileName: function(e) {
                    return /^[^\\/:*?"<>|&]+$/.test(e) && Dec.Utils.strLength(e) <= DecCst.STRING_SHORT_TEXT_LENGTH
                },
                isValidFolderName: function(e) {
                    return /[^.\s]/.test(e) && !BI.endWith(BI.trim(e), ".") && Dec.Utils.isValidFileName(e)
                },
                isLocalhost: function(e) {
                    return /localhost|127.0.0.1/.test(e)
                }
            })
        },
        89775: function() {
            DecCst = DecCst || {},
            DecCst.Authority = {},
            DecCst.Authority.DEBONCE_TIME = 300,
            DecCst.Authority.AUTH_VALUE = {
                PERMITTED: 2,
                FORBIDDEN: 1
            },
            DecCst.Authority.FILTER = {
                ALL: 1,
                OPEN: 2
            },
            DecCst.Authority.EDIT = 3,
            DecCst.Authority.USE = 201,
            DecCst.Authority.MANAGE = 202,
            DecCst.Authority.PRI = {
                view: 1,
                authentication: 1,
                exported: 3,
                authorized: 10,
                use: 1,
                manage: 5,
                edit: 100,
                preview: 9,
                write: 9,
                connectionmanage: 2,
                bi_view: 4,
                bi_export: 6
            },
            DecCst.Authority.CARRIER_TYPE = {
                DEPOST: "depost",
                ROLE: "role",
                USER: "user",
                POST: "post"
            },
            DecCst.Authority.ENTITY_TYPE = {
                DEPOSTS: "deposts",
                ENTRY: "entry",
                HOMEPAGE: "homepage",
                MODULE: "platformModule",
                CONNECTION: "connection",
                PACKAGE: "package"
            },
            DecCst.Authority.REUSE_TYPE = {
                DEPOST: "depost",
                ROLE: "role"
            },
            DecCst.DEPARTMENT_TREE_ROOT_ID = "decision-dep-root",
            DecCst.DEPARTMENT_ROLE_TREE_ROOT_ID = "decision-dep-role-root",
            DecCst.DEPARTMENT_ROLE_TREE_SPLIT = "@",
            DecCst.DIRECTORY_TREE_ROOT_ID = "decision-directory-root",
            DecCst.DIRECTORY_HOMEPAGE_TREE_ROOT_ID = "decision-homepage-root",
            DecCst.TEMPLATE_TREE_ROOT_ID = "reportlets",
            DecCst.BI_TEMPLATE_TREE_ROOT_ID = "decision-bi-template-root",
            DecCst.MANAGEMENT_SYSTEM_ROOT_ID = "decision-management-root",
            DecCst.SUPER_USER_ROLE = "super-user-custom-role",
            DecCst.SELECT_NONE = "__select_none__",
            DecCst.PASSWORD_DEFAULT_TRANSMISSION = "********",
            DecCst.SYSTEM_USER_NAME = "__system_user_name__",
            DecCst.ALL_SELECT_FLAG = "*",
            DecCst.LAST_OPERATING_TIME = "fine_last_operating_time",
            DecCst.TOKEN_FRESH_TIME = 42e4,
            DecCst.TOKEN_FRESH_BEFORE_TIME = 5e3,
            DecCst.BASE64_IMAGE_JPG_HEADER = "data:image/jpg;base64,",
            DecCst.BASE64_IMAGE_PNG_HEADER = "data:image/png;base64,",
            DecCst.BI_REPORT_ROOT_ID = "bi-user-templates-root",
            DecCst.STRING_SHORT_TEXT_LENGTH = 200,
            DecCst.STRING_LONG_TEXT_LENGTH = 1e4,
            DecCst.Connecttion = {},
            DecCst.Connecttion.AUTH_TYPE_KERBEROS = "kerberos",
            DecCst.Connecttion.ENCODING_AUTO = "auto",
            DecCst.DATA_INTERVAL_START_TIME = " 00:00:00",
            DecCst.DATA_INTERVAL_END_TIME = " 23:59:59",
            DecCst.Entries = {},
            DecCst.Entries.Entry_Type = {
                NONE: 0,
                FOLDER: 3,
                LINK_TYPE: 5,
                BI_REPORT: 201,
                SEARCH_SHARE: 202
            },
            DecCst.Entries.Device_Type = {
                DEFAULT: 7
            },
            DecCst.Homepage = {},
            DecCst.Homepage.Homepage_Type = {
                TEMPLATE: 0,
                ENTRY: 1,
                LINK: 2,
                BI_TEMPLATE: 3
            },
            DecCst.Homepage.Homepage_Terminals = {
                PC: "PC",
                PAD: "pad",
                MOBILE: "mobile"
            },
            DecCst.BI_Eentry_Type = {
                HOME: 5
            },
            DecCst.Encryption_Method = {
                BUILT_IN_SHA: 0,
                CUSTOM_PASSWORD: 1
            },
            DecCst.Regetser_Status = {},
            DecCst.Regetser_Status.Function_List = {
                FINE_CORE_FUNC_AI: "44",
                FINE_CORE_MOBILE_BI: "34",
                FINE_CORE_DATA_UPLOAD: "36",
                FINE_CORE_LIC_SUPPORT_SCHEDULE: "6",
                FINE_CORE_RE_MULTI_PRIVILEGE: "38",
                FINE_CORE_LIC_SUPPORT_PRIVILEGE: "11",
                FINE_CORE_FS_BI: "32"
            },
            DecCst.Regetser_Status.Failed_Reason = {
                LIC_UNMATCH: 0,
                LIC_VERSION: 1,
                APP_NAME: 2,
                APP_CONTENT: 3,
                MACHINE_CODE: 4,
                MAC_ADDRESS: 5,
                OUT_OF_DATE: 6,
                MULTI_SERVER: 7,
                DONGLE_NUMBER: 8,
                OVERALL_FAIL: 9,
                SINGLE_FAIL: 10,
                LIC_CONTEXT: 11,
                ALL_NODES_REBOT: 13
            },
            DecCst.Report_Authenticates = {
                NAME_PASSWORD: 0,
                ROLE_AUTH_CONTROL: 1,
                DIGITAL_SIGNATURE_VERIFICATION: 2
            },
            DecCst.PlatformStyle = {},
            DecCst.PlatformStyle.ColorScheme = {
                LIGHT: 0,
                DARK: 1,
                CUSTOM: 2
            },
            DecCst.PlatformStyle.DARK_THEME = "bi-theme-dark",
            DecCst.Message = {},
            DecCst.Message.MessageType = {
                SYSTEM: 0,
                PROCESS: 1
            },
            DecCst.Selected_Status = {
                NONE: 0,
                HALF: 1,
                ALL: 2
            },
            DecCst.NavTabs = {},
            DecCst.NavTabs.Notification = {
                DATA_UPDATE: "data-update",
                TEMPLATE: "template"
            },
            DecCst.NavTabs.Map = {
                Geographic: "geographic",
                CustomizeImage: "customize-image",
                GisBackground: "gis-background",
                GeoType: {
                    AreaGeo: "area-geo",
                    PointGeo: "point-geo"
                }
            },
            DecCst.GisLayers = {
                TileLayer: "tileLayer",
                WMS: "wmsLayer",
                WMTS: "wmtsLayer",
                AMAP: "amapLayer"
            },
            DecCst.MapCenters = {
                Beijing: [39.9, 116.3],
                Greenwich: [39.9, 0]
            },
            DecCst.MapRequest = {
                GeoRoot: "assets/map/geographic/",
                ImageRoot: "assets/map/image/",
                JsonExtension: ".json",
                GepMap: "geographic_map",
                ImageMap: "image_map",
                ReloadRequestUrl: "/map/reload",
                FolderRequestUrl: "/map/folder",
                GeoJsonRequestUrl: "/map/json?version=v10",
                SaveJsonDataRequestUrl: "/map/json",
                AddEntryRequestUrl: "/map/entry",
                DeleteEntryRequestUrl: "/map/entry",
                RenameEntryRequestUrl: "/map/entry",
                AddGisLayerRequestUrl: "/map/layer",
                DeleteGisLayerRequestUrl: "/map/layer",
                RenameGisLayerRequestUrl: "/map/layer",
                SaveAmapLayerRequestUrl: "/map/layer/AMAP",
                SaveGisLayerRequestUrl: "/map/layer/GIS",
                saveWmsLayerRequestUrl: "/map/layer/WMS",
                SaveWmtsLayerRequestUrl: "/map/layer/WMTS",
                GetWmsLayersUrl: "/map/layer/WMSLayer",
                SaveImageRequestUrl: "/map/image/v10",
                ExcelUploadUrl: "/map/excelData"
            },
            DecCst.MapConfig = {
                ROOT_ID: -2
            },
            DecCst.Entry_Node_Size = {
                HEIGHT: 36
            },
            DecCst.PlatformStyle.HeaderType = {
                APART: 1,
                INTEGRATED: 2
            },
            DecCst.PlatformStyle.HeaderBgMode = {
                COLOR: 0,
                IMAGE: 1
            },
            Dec.Frame = {},
            Dec.Frame.Slider_Width = 20,
            Dec.Frame.Workbench_Width = 240,
            Dec.Frame.Management_Width = 180,
            DecCst.Web = DecCst.Web || {},
            DecCst.Web.Module = {},
            DecCst.Web.Module.REPORT = "FR",
            DecCst.Web.Module.BI = "BI",
            DecCst.Web.Upload_File_Url = "/v10/attach/upload?width=32&height=32",
            DecCst.Web.Register = {},
            DecCst.Web.Register.UPLOAD_LIC_URL = "/v10/register/attach/upload?width=32&height=32",
            DecCst.Web.Register.PLUGIN_UPLOAD_LIC_URL = "/v10/register/plugin/attach/upload?width=32&height=32",
            DecCst.Web.Register.Tab = {},
            DecCst.Web.Register.Tab.VERSION_INFO = 1,
            DecCst.Web.Register.Tab.FUNCTION_LIST = 2,
            DecCst.Web.Register.Certificate = {},
            DecCst.Web.Register.Certificate.Tab = {},
            DecCst.Web.Register.Certificate.Tab.LOCAL = "local",
            DecCst.Web.Register.Certificate.Tab.PHONE = "phone",
            DecCst.Web.System = {},
            DecCst.Web.System.Tabs = {
                MIGRATION: "migration",
                ENCRYPTION: "encryption",
                LIMIT: "limit"
            },
            DecCst.Web.System.Encryption = {},
            DecCst.Web.System.Encryption.Algorithm = {},
            DecCst.Web.System.Encryption.Algorithm.DEFAULT = 1,
            DecCst.Web.System.Encryption.Algorithm.GM = 2,
            DecCst.Web.Schedule = {},
            DecCst.Web.Schedule.MAX_FILE_COUNT = 10,
            DecCst.Web.Schedule.FRM_TEMPLATE_SUFFIX = "frm",
            DecCst.Web.Schedule.CPTX_TEMPLATE_SUFFIX = "cptx",
            DecCst.Web.Schedule.BI_PARAMETER_TYPE = "param",
            DecCst.Web.Schedule.Tab = {},
            DecCst.Web.Schedule.Tab.MANAGE = 1,
            DecCst.Web.Schedule.Tab.RECORD = 2,
            DecCst.Web.Schedule.Step = {},
            DecCst.Web.Schedule.Step.BASIC = "basic",
            DecCst.Web.Schedule.Step.CYCLE = "cycle",
            DecCst.Web.Schedule.Step.DISPATCHER = "dispatcher",
            DecCst.Web.Schedule.Step.HANDLING = "file_handling",
            DecCst.Web.Schedule.Basic = {},
            DecCst.Web.Schedule.Basic.UserGroup = {},
            DecCst.Web.Schedule.Basic.UserGroup.SHOW = 1,
            DecCst.Web.Schedule.Basic.UserGroup.EDIT = 2,
            DecCst.Web.Schedule.EditTaskType = {},
            DecCst.Web.Schedule.EditTaskType.ADD = "add",
            DecCst.Web.Schedule.EditTaskType.EDIT = "edit",
            DecCst.Web.Schedule.EditTaskType.COPY = "copy",
            DecCst.Web.Schedule.Handling = {},
            DecCst.Web.Schedule.Handling.TIME_CALCULATE = "timer_calculate",
            DecCst.Web.Schedule.Handling.CLIENT_NOTIFICATION = "com.fr.schedule.base.bean.output.OutputClientNotification",
            DecCst.Web.Schedule.Handling.CUSTOM_CLASS = "com.fr.schedule.base.bean.output.OutputClass",
            DecCst.Web.Schedule.Handling.SEND_EMAIL = "com.fr.schedule.base.bean.output.OutputEmail",
            DecCst.Web.Schedule.Handling.FTP = "com.fr.schedule.base.bean.output.OutputFtp",
            DecCst.Web.Schedule.Handling.SFTP = "com.fr.schedule.base.bean.output.OutputSFtp",
            DecCst.Web.Schedule.Handling.MOUNT_DIR = "com.fr.schedule.base.bean.output.OutputMount",
            DecCst.Web.Schedule.Handling.PRINT = "com.fr.schedule.base.bean.output.OutputPrint",
            DecCst.Web.Schedule.Handling.SEND_SMS = "com.fr.schedule.base.bean.output.OutputSMS",
            DecCst.Web.Schedule.Handling.PUSH_MESSAGE = "com.fr.schedule.base.bean.output.OutputSystemMsg",
            DecCst.Web.Schedule.Handling.CLIENT_NOTIFICATION_DINGTALK = "com.fr.plugin.dingtalk.server.bean.OutputDingTalk",
            DecCst.Web.Schedule.Handling.CLIENT_NOTIFICATION_WEIXIN = "com.fr.plugin.weixin.server.bean.OutputWeiXin",
            DecCst.Web.Look = {},
            DecCst.Web.Look.Entry_Edit_Mode = {
                ICON: "icon",
                COVER: "cover"
            },
            DecCst.Web.Socket = {},
            DecCst.Web.Socket.Status = {},
            DecCst.Web.Socket.Status.WAITING = "waiting",
            DecCst.Web.Socket.Status.FAIL = "fail",
            DecCst.Web.Socket.Status.SUCCESS = "success",
            DecCst.Web.Watermark = {},
            DecCst.Web.Watermark.MIN_HORIZONTAL_GAP = 100,
            DecCst.Web.Watermark.MIN_VERTICAL_GAP = 50,
            DecCst.Web.Entry = {},
            DecCst.Web.Entry.DEFAULT_FOLDER_FONT = "dir-panel-folder-font",
            DecCst.Web.Entry.DEFAULT_FILE_FONT = "dir-panel-template-font",
            DecCst.Web.Entry.DEFAULT_COVER = "entry_cover1.png",
            DecCst.Web.Entry.LeftPane = {
                SEARCH: "search",
                NORMAL: "normal"
            },
            DecCst.Web.Frame = {},
            DecCst.Web.Frame.Tab = {},
            DecCst.Web.Frame.Tab.NORMAL_TAB_WIDTH = 135,
            DecCst.Web.Frame.Tab.SHORT_TAB_WIDTH = 100,
            DecCst.Web.Frame.Tab.PLATFORM_HOME_TAB_ID = "dec-tabs-homepage",
            DecCst.Web.Frame.Tab.ZOOM_CHANGE_TIME = 500,
            DecCst.Web.Frame.BLANK_PAGE = "about:blank",
            DecCst.Web.DataSet = {},
            DecCst.Web.DataSet.Tab = {},
            DecCst.Web.DataSet.Tab.VIEW = "view",
            DecCst.Web.DataSet.Tab.EDIT = "edit",
            DecCst.Web.DataSet.DEFAULT_ICON_CLS = "dataset-other-font",
            DecCst.Web.DataSet.View = {},
            DecCst.Web.DataSet.View.Tab = {},
            DecCst.Web.DataSet.View.Tab.EMPTY = "empty",
            DecCst.Web.DataSet.View.Tab.UNSUPPORT = "un-support",
            DecCst.Web.DataSet.View.Tab.INFO = "info",
            DecCst.Web.DataSet.Edit = {},
            DecCst.Web.DataSet.Edit.Tree = {},
            DecCst.Web.DataSet.Edit.Tree.FieldType = {
                COLUMN_NAME: 1,
                COLUMN_VALUE: 2
            },
            DecCst.Web.DataSet.Preview = {},
            DecCst.Web.DataSet.Preview.ROW_COUNT = 200,
            DecCst.Web.DataSet.Preview.Status = {
                PREVIEW_EMPTY: 1,
                PREVIEW_PANE: 2,
                PREVIEW_ERROR: 3,
                PREVIEW_LOADING: 4
            },
            DecCst.Web.DataSet.Tree = {},
            DecCst.Web.DataSet.Tree.BuildWay = {},
            DecCst.Web.DataSet.Tree.BuildWay.PARENTS = "parents",
            DecCst.Web.DataSet.Tree.BuildWay.LENGTH = "length",
            DecCst.Web.DataSet.Tree.Field = {},
            DecCst.Web.DataSet.Tree.Field.COLUMN_NAME = 1,
            DecCst.Web.DataSet.Tree.Field.COLUMN_ORDINAL = 2,
            DecCst.Web.DataSet.File = {},
            DecCst.Web.DataSet.File.UPLOAD_FILE = "/v10/dataset/upload",
            DecCst.Web.Login = {},
            DecCst.Web.Login.LogoURL = Dec.resourceURL + "resources/logo.png",
            DecCst.Web.User = {},
            DecCst.Web.User.Sync = {},
            DecCst.Web.User.Sync.CONFLICT_NAME_CHECK = 0,
            DecCst.Web.User.Sync.CONFLICT_ID_CHECK = 1,
            DecCst.Web.User.Sync.UserFrequency = {
                SECONDS: 1,
                MINUTES: 2,
                HOURS: 3,
                DAYS: 4,
                WEEK: 5
            },
            DecCst.Web.User.INFINITE_LIC = -1,
            DecCst.Web.User.Search = {},
            DecCst.Web.User.Search.PER_PAGE = 50,
            DecCst.Web.User.MAX_SYNC_RATE_SECONDS = 1e9,
            DecCst.Web.Components = {},
            DecCst.Web.Components.Progress = {},
            DecCst.Web.Components.Progress.WAITING = 1,
            DecCst.Web.Components.Progress.FAIL = 2,
            DecCst.Web.Components.Progress.SUCCESS = 3,
            DecCst.Web.Cloud = {},
            DecCst.Web.Cloud.CLOUD_DEMO = "http://demo.finereport.com/decision/view/report?viewlet=demo/cloud/demo.cpt",
            DecCst.Web.Cloud.CLOUD_CENTER = "https://market.fanruan.com/usercenter/cloud_analysis",
            DecCst.Web.PSEUDO_PROTOCALS = ["javascript:", "vbscript:", "data:"],
            DecCst.Web.Cache = {},
            DecCst.Web.Cache.SOCKET_PROMPTING = "fine_socket_toast",
            DecCst.Web.Cache.MANAGEMENT_WIDTH = "management_width",
            DecCst.Web.Cache.DIRECTORY_WIDTH = "directory_width",
            DecCst.Web.Components.ParameterList = {
                Type: {
                    DATA_SET: "TableColumn",
                    STRING: "String",
                    INTEGER: "Integer",
                    DOUBLE: "Double",
                    DATE: "Date",
                    BOOLEAN: "Boolean",
                    FORMULA: "Formula"
                },
                InputStyle: {
                    DEFAULT: 0,
                    DATA_SET: 1
                }
            },
            DecCst.Web.Components.AccountSetting = {
                Tab: {
                    SHOW: "show",
                    EDIT: "edit"
                }
            },
            DecCst.Web.Components.PhoneEditor = {
                Code: {
                    ZH_CN: "+86"
                },
                Card: {
                    SHOW: "show",
                    EDIT: "edit"
                }
            },
            DecCst.Web.Ftp = {
                FtpMode: {
                    PASSIVE: "passive",
                    ACTIVE: "active"
                }
            },
            DecCst.Web.Authority = {},
            DecCst.Web.Authority.Privilege_Type = {
                VIEW: 1,
                AUTHORITY: 2,
                ENTRY_EDIT: 3,
                CONNECTION_MANAGE: 4,
                MANAGE: 9
            },
            DecCst.Web.Authority.EntityType = {
                PERSONNEL: "personnel",
                ENTRY: "entry",
                HOMEPAGE: "homepage",
                PLATFORM_MODULE: "platformModule",
                CONNECTION: "connection",
                SERVER_DATASET: "serverDataSet",
                SCHEDULE: "schedule"
            },
            DecCst.Web.Backup = {},
            DecCst.Web.Backup.Status = {
                DEFAULT: 0,
                SUCCESS: 1,
                FAIL: 2,
                RUNNING: 3
            },
            DecCst.Web.Migration = {},
            DecCst.Web.Migration.ExportWithType = {
                EXCEL: "withExcelAttachment",
                SUB_TEMPLATE: "withSubTemplate",
                TIME_TASK: "withTimeTask",
                AUTHORITY: "withPrivileges",
                PUBLIC_LINK: "withLink"
            },
            DecCst.Web.Migration.ImportType = {
                ADDITION: 1,
                COVERING: 2,
                BAN: 3,
                ERROR: -1
            }
        },
        2849: function() {
            Dec.Utils = Dec.Utils || {},
            BI.extend(Dec.Utils, {
                getDeploymentGuide: function(e) {
                    Dec.reqGetHandle("/v10/deployment/guide", "", e)
                },
                checkDeployment: function(e, t) {
                    Dec.reqPost("/v10/deployment/check", e, t)
                },
                checkDeploymentJar: function(e) {
                    Dec.reqGetHandle("/v10/deployment/jar", "", e)
                },
                checkDeploymentDatabase: function(e, t) {
                    Dec.reqPost("/v10/deployment/database", e, t)
                },
                checkDeploymentHsql: function(e) {
                    Dec.reqGet("/v10/deployment/hsql", "", e)
                },
                checkDeploymentSocketPort: function(e, t) {
                    Dec.reqPost("/v10/deployment/websocket", {
                        port: e
                    }, t)
                },
                checkDeploymentStateServer: function(e, t) {
                    Dec.reqPost("/v10/deployment/state", e, t)
                },
                checkDeploymentFileServer: function(e, t) {
                    Dec.reqPost("/v10/deployment/file", e, t)
                }
            })
        },
        22412: function() {
            Dec.Utils = Dec.Utils || {},
            BI.extend(Dec.Utils, {
                getCompleteDirectoryTree: function(e) {
                    Dec.reqGet("/v10/view/entry/tree", "", e)
                },
                getWorkbenchSubDirectoryById: function(e, t) {
                    Dec.reqGet("/v10/" + e + "/entries", "", t)
                },
                searchWorkbenchSubDirectory: function(e, t) {
                    var i = Dec.httpRequest;
                    return (0,
                    i.requestGet)("/v10/entry/list", {
                        keyword: e
                    }, {
                        cancelToken: new (0,
                        i.CancelToken)(t)
                    })
                },
                handlerCollect: function(e, t, i) {
                    t ? Dec.reqPost("/v10/favorite/entry/" + e, {}, i) : Dec.reqDelete("/v10/favorite/entry/" + e, {}, i)
                },
                getFavoritesList: function(e) {
                    Dec.reqGet("/v10/favorite/entry/list", "", e)
                }
            })
        },
        85284: function() {
            Dec.Utils = Dec.Utils || {},
            BI.extend(Dec.Utils, {
                logout: function(e) {
                    Dec.reqPostHandle("/logout", {}, e)
                }
            }),
            BI.extend(Dec.Utils, {
                getUserAccount: function(e) {
                    Dec.reqGetHandle("/v10/user/account", {}, e)
                },
                updateUserAccount: function(e, t) {
                    Dec.reqPut("/v10/user/account", e, t)
                },
                loginChangePwd: function(e, t) {
                    Dec.reqPost("/login/pwd/change/current", e, t)
                },
                sendUserCaptcha: function(e, t) {
                    Dec.reqPostHandle("/v10/user/captcha", e, t)
                },
                updateUserPhone: function(e, t) {
                    Dec.reqPut("/v10/user/mobile", e, t)
                },
                updateUserEmail: function(e, t) {
                    Dec.reqPut("/v10/user/email?", e, t)
                }
            })
        },
        79207: function() {
            Dec.Utils = Dec.Utils || {},
            BI.extend(Dec.Utils, {
                loginAdminInfo: function(e, t) {
                    Dec.reqPost("/login/admin", e, t)
                }
            })
        },
        60965: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-authentication",
                    $testId: "dec-login-authentication"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.authentication")
                },
                watch: {
                    showReceiver: function() {
                        this.captchaRow.clearTime()
                    }
                },
                render: function() {
                    var e = this;
                    return this.options,
                    {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.vertical",
                                items: [{
                                    el: {
                                        type: "bi.absolute",
                                        height: 24,
                                        items: [{
                                            el: {
                                                type: "bi.label",
                                                height: 24,
                                                text: BI.i18nText("Dec-Login_Authentication")
                                            },
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0
                                        }, {
                                            el: {
                                                type: "bi.icon_button",
                                                $value: "back",
                                                height: 24,
                                                cls: "login-back-font",
                                                handler: function() {
                                                    e.store.setSelectedTab(DecCst.Login.Tabs.LOGIN)
                                                }
                                            },
                                            top: 0,
                                            left: 0
                                        }]
                                    },
                                    vgap: 28
                                }, {
                                    type: "bi.label",
                                    textAlign: "left",
                                    invisible: !this.model.showDesc,
                                    text: this.model.showDesc,
                                    whiteSpace: "normal",
                                    bgap: 15
                                }, {
                                    el: {
                                        type: "bi.absolute",
                                        cls: "bi-border-bottom dec-login-item",
                                        height: 36,
                                        items: [{
                                            el: {
                                                type: "dec.login.icon.text.combo",
                                                invisible: !this.model.isMultiWay,
                                                $value: "authentication",
                                                value: this.model.selectedType,
                                                text: this.model.showReceiver,
                                                items: this.model.supportType,
                                                listeners: [{
                                                    eventName: "EVENT_CHANGE",
                                                    action: function() {
                                                        e.store.setReceiverType(this.getValue())
                                                    }
                                                }]
                                            },
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0
                                        }, {
                                            el: {
                                                type: "bi.vertical_adapt",
                                                invisible: this.model.isMultiWay,
                                                height: 36,
                                                items: [{
                                                    type: "bi.center_adapt",
                                                    cls: "item-icon " + this.model.receiverIcon,
                                                    width: 16,
                                                    items: [{
                                                        type: "bi.icon"
                                                    }]
                                                }, {
                                                    el: {
                                                        type: "bi.label",
                                                        cls: "bi-tips",
                                                        $testId: "dec-login-authentication-change-receiver",
                                                        $value: this.model.selectedType,
                                                        textAlign: "left",
                                                        text: this.model.showReceiver
                                                    },
                                                    lgap: 10
                                                }]
                                            },
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0
                                        }]
                                    },
                                    bgap: 35
                                }, {
                                    type: "dec.login.captcha.item",
                                    bgap: 10,
                                    btnDisabled: !1,
                                    ref: function(t) {
                                        e.captchaRow = t
                                    },
                                    getCaptcha: function(t) {
                                        e.store.captcha({
                                            type: e.model.selectedType,
                                            receiver: e.model.receiver,
                                            username: e.model.loginInfo.username,
                                            token: e.model.propsInfo.token
                                        }, (function(i) {
                                            i.data ? (e.store.setCaptchaSendToken(i.data),
                                            t()) : i.errorCode === DecCst.ErrorCode.CAPTCHA_SEND_LIMITED ? (e.captchaRow.showError(BI.i18nText("Dec-Error_Get_Captcha_Limited")),
                                            t()) : (BI.Msg.toast(BI.i18nText("Dec-Error_Get_Captcha"), {
                                                level: "error"
                                            }),
                                            t())
                                        }
                                        ))
                                    }
                                }, {
                                    type: "bi.horizontal_auto",
                                    items: [{
                                        type: "bi.button",
                                        $testId: "dec-login-authentication-btn",
                                        cls: "login-button",
                                        text: BI.i18nText("BI-Basic_Sure"),
                                        width: 190,
                                        height: 40,
                                        handler: function() {
                                            e._start()
                                        }
                                    }]
                                }]
                            },
                            top: 0,
                            right: 40,
                            bottom: 0,
                            left: 40
                        }]
                    }
                },
                _start: function() {
                    var e = this
                      , t = this.captchaRow.getValue();
                    "" !== t ? this.store.startAuthentication({
                        token: this.model.captchaSendToken,
                        captcha: t
                    }, (function(t) {
                        t.data ? e.model.propsInfo.isChangePwd ? (e.store.setPropsInfo({
                            token: e.model.captchaSendToken
                        }),
                        e.store.setSelectedTab(DecCst.Login.Tabs.PASSWORD_TOKEN)) : e.store.tokenLogin(e.model.captchaSendToken, (function(t) {
                            e.fireEvent("EVENT_LOGIN", t.data)
                        }
                        )) : t.errorCode === DecCst.ErrorCode.CAPTCHA_ERROR ? e.captchaRow.showError(BI.i18nText("Dec-Error_Captcha_Error")) : t.errorCode === DecCst.ErrorCode.CAPTCHA_TIMEOUT ? e.captchaRow.showError(BI.i18nText("Dec-Error_Captcha_Timeout")) : t.errorCode === DecCst.ErrorCode.CAPTCHA_CHECK_LIMITED ? e.captchaRow.showError(BI.i18nText("Dec-Error_Captcha_Limited")) : BI.Msg.toast(BI.i18nText("Dec-Error_Check_Captcha_Error"), {
                            level: "error"
                        })
                    }
                    )) : this.captchaRow.showError(BI.i18nText("Dec-Error_Captcha_Null"))
                }
            })).EVENT_INPUT_TYPE = "EVENT_INPUT_TYPE",
            BI.shortcut("dec.login.authentication", e)
        },
        95078: function() {
            var e, t;
            e = "login_authentication",
            t = BI.inherit(Fix.Model, {
                context: ["selectedTab", "loginInfo", "propsInfo", "verifyConfig"],
                state: function() {
                    return {
                        receiverType: "",
                        userNames: [],
                        captchaSendToken: ""
                    }
                },
                computed: {
                    showPhone: function() {
                        return BI.Services.getService("dec.service.components.phone.editor").getHiddenNumber(this.model.propsInfo.phone)
                    },
                    showEmail: function() {
                        return Dec.Utils.getHiddenMail(this.model.propsInfo.email)
                    },
                    isSystemSMS: function() {
                        var e = this.model.verifyConfig;
                        return this.model.propsInfo.isChangePwd ? e.smsVerificationAfterChangePassword : e.smsRemind
                    },
                    isSystemEmail: function() {
                        var e = this.model.verifyConfig;
                        return this.model.propsInfo.isChangePwd ? e.emailVerificationAfterChangePassword : e.emailRemind
                    },
                    supportType: function() {
                        var e = [];
                        return this.model.isSystemSMS && this.model.propsInfo.phone && e.push({
                            text: this.model.showPhone,
                            value: DecCst.Login.AuthenticationWay.PHOME,
                            iconCls: "login-mobile-font"
                        }),
                        this.model.isSystemEmail && this.model.propsInfo.email && e.push({
                            text: this.model.showEmail,
                            value: DecCst.Login.AuthenticationWay.EMAIL,
                            iconCls: "login-email-font"
                        }),
                        e
                    },
                    selectedType: function() {
                        var t = BI.Cache.getItem(e) || DecCst.Login.AuthenticationWay.PHOME
                          , i = this.model.isMultiWay ? t : this.model.supportType[0].value;
                        return this.model.receiverType || i
                    },
                    receiver: function() {
                        return this.model.selectedType === DecCst.Login.AuthenticationWay.PHOME ? this.model.propsInfo.phone : this.model.propsInfo.email
                    },
                    showReceiver: function() {
                        return this.model.selectedType === DecCst.Login.AuthenticationWay.PHOME ? this.model.showPhone : this.model.showEmail
                    },
                    receiverIcon: function() {
                        return this.model.selectedType === DecCst.Login.AuthenticationWay.PHOME ? "login-mobile-font" : "login-email-font"
                    },
                    singleDesc: function() {
                        switch (this.model.propsInfo.from) {
                        case DecCst.Login.AuthenticationModule.LOGIN:
                            return BI.i18nText("Dec-Login_Authentication_Tip", BI.i18nText("Dec-Login_Authentication_Open"));
                        case DecCst.Login.AuthenticationModule.PWD_STRENGTH:
                            return BI.i18nText("Dec-Login_Authentication_Password_Strength_Tip");
                        case DecCst.Login.AuthenticationModule.PWD_UPDATE:
                            return BI.i18nText("Dec-Login_Authentication_Password_Update_Tip");
                        case DecCst.Login.AuthenticationModule.SINGLE:
                            return BI.i18nText("Dec-Login_Authentication_Single_Tip");
                        default:
                            return ""
                        }
                    },
                    multiDesc: function() {
                        switch (this.model.propsInfo.from) {
                        case DecCst.Login.AuthenticationModule.LOGIN:
                            return BI.i18nText("Dec-Login_Authentication_Multi_Tip", BI.i18nText("Dec-Login_Authentication_Open"));
                        case DecCst.Login.AuthenticationModule.PWD_STRENGTH:
                            return BI.i18nText("Dec-Login_Authentication_Password_Strength_Multi_Tip");
                        case DecCst.Login.AuthenticationModule.PWD_UPDATE:
                            return BI.i18nText("Dec-Login_Authentication_Password_Update_Multi_Tip");
                        case DecCst.Login.AuthenticationModule.SINGLE:
                            return BI.i18nText("Dec-Login_Authentication_Single_Multi_Tip");
                        default:
                            return ""
                        }
                    },
                    isMultiWay: function() {
                        return BI.size(this.model.supportType) > 1
                    },
                    showDesc: function() {
                        return this.model.isMultiWay ? this.model.multiDesc : this.model.singleDesc
                    }
                },
                actions: {
                    setSelectedTab: function(e) {
                        this.model.selectedTab = e
                    },
                    captcha: function(e, t) {
                        Dec.Utils.loginCaptcha(e, t)
                    },
                    setCaptchaSendToken: function(e) {
                        this.model.captchaSendToken = e
                    },
                    setPropsInfo: function(e) {
                        this.model.propsInfo = e
                    },
                    startAuthentication: function(e, t) {
                        Dec.Utils.loginAuthentication(e, (function(e) {
                            t(e)
                        }
                        ))
                    },
                    tokenLogin: function(e, t) {
                        BI.Services.getService("dec.service.login").useTokenLoginValue(e, this.model.loginInfo.validity, t)
                    },
                    setReceiverType: function(t) {
                        this.model.receiverType = t,
                        BI.Cache.setItem(e, t)
                    }
                }
            }),
            BI.model("dec.model.login.authentication", t)
        },
        87393: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-item dec-login-captcha-item",
                    errorText: "",
                    btnDisabled: !0,
                    getCaptcha: BI.emptyFn
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vertical",
                        items: [{
                            type: "bi.htape",
                            height: 36,
                            items: [{
                                type: "bi.center_adapt",
                                cls: "item-icon login-password-font",
                                width: 16,
                                items: [{
                                    type: "bi.icon"
                                }]
                            }, {
                                el: {
                                    type: "bi.editor",
                                    $value: "dec-login-captcha-item-editor",
                                    watermark: BI.i18nText("Dec-Login_Input_Captcha"),
                                    allowBlank: !0,
                                    ref: function(t) {
                                        e.editor = t
                                    },
                                    listeners: [{
                                        eventName: BI.Editor.EVENT_FOCUS,
                                        action: function() {
                                            e.hideError()
                                        }
                                    }]
                                },
                                lgap: 8
                            }, {
                                type: "bi.right",
                                width: 70,
                                items: [{
                                    type: "bi.button",
                                    $testId: "dec-login-get-captcha-btn",
                                    clear: !0,
                                    height: 36,
                                    block: !0,
                                    disabled: t.btnDisabled,
                                    text: BI.i18nText("Dec-Login_Get_Captcha"),
                                    ref: function(t) {
                                        e.getButton = t
                                    },
                                    handler: function() {
                                        e.setButtonEnable(!1),
                                        t.getCaptcha((function(t) {
                                            t || e.regainCaptcha()
                                        }
                                        ))
                                    }
                                }]
                            }]
                        }, {
                            type: "bi.label",
                            cls: "bi-border-top",
                            text: "",
                            height: 24,
                            ref: function(t) {
                                e.lineRow = t
                            }
                        }, {
                            type: "bi.label",
                            invisible: !0,
                            text: t.errorText,
                            height: 24,
                            textAlign: "left",
                            cls: "bi-border-top error",
                            ref: function(t) {
                                e.errorRow = t
                            }
                        }]
                    }
                },
                setButtonEnable: function(e) {
                    this.captchaTime && (e = !1),
                    this.getButton.setEnable(e)
                },
                regainCaptcha: function() {
                    var e = this
                      , t = 0;
                    window.clearInterval(e.captchaTime),
                    this.captchaTime = window.setInterval((function() {
                        if (60 === t)
                            return window.clearInterval(e.captchaTime),
                            e.captchaTime = null,
                            e.getButton.setText(BI.i18nText("Dec-Login_Get_Captcha")),
                            void e.setButtonEnable(!0);
                        e.getButton.setText(BI.i18nText("Dec-Login_Regain_Captcha") + "(" + (60 - t) + ")"),
                        t++
                    }
                    ), 1e3),
                    this.setButtonEnable(!1)
                },
                clearTime: function() {
                    window.clearInterval(this.captchaTime),
                    this.captchaTime = null,
                    this.getButton.setText(BI.i18nText("Dec-Login_Get_Captcha")),
                    this.setButtonEnable(!0)
                },
                showError: function(e) {
                    this.errorRow.visible(),
                    this.errorRow.setText(e),
                    this.lineRow.invisible()
                },
                hideError: function() {
                    this.errorRow.invisible(),
                    this.errorRow.setText(""),
                    this.lineRow.visible()
                },
                getValue: function() {
                    return this.editor.getValue()
                }
            }),
            BI.shortcut("dec.login.captcha.item", e)
        },
        73089: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-forget-forbid"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.forget.forbid")
                },
                watch: {},
                render: function() {
                    var e = this;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.horizontal_auto",
                                items: [{
                                    el: {
                                        type: "bi.absolute",
                                        height: 24,
                                        items: [{
                                            el: {
                                                type: "bi.label",
                                                height: 24,
                                                text: BI.i18nText("Dec-Login_Change_Password")
                                            },
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0
                                        }, {
                                            el: {
                                                type: "bi.icon_button",
                                                $value: "back",
                                                height: 24,
                                                cls: "login-back-font",
                                                handler: function() {
                                                    e.store.setSelectedTab(DecCst.Login.Tabs.LOGIN)
                                                }
                                            },
                                            top: 0,
                                            left: 0
                                        }]
                                    },
                                    vgap: 28
                                }, {
                                    type: "bi.label",
                                    text: BI.i18nText("Dec-Login_Change_Password_Forbid"),
                                    textAlign: "left",
                                    whiteSpace: "normal",
                                    tgap: 40,
                                    bgap: 30
                                }]
                            },
                            top: 0,
                            right: 40,
                            bottom: 0,
                            left: 40
                        }]
                    }
                }
            }),
            BI.shortcut("dec.login.forget.forbid", e)
        },
        10913: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["selectedTab"],
                computed: {},
                actions: {
                    setSelectedTab: function(e) {
                        this.model.selectedTab = e
                    }
                }
            }),
            BI.model("dec.model.login.forget.forbid", e)
        },
        8133: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-authentication"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.forget")
                },
                watch: {
                    forgetPasswordTab: function(e) {
                        this.tab.setSelect(e)
                    }
                },
                render: function() {
                    var e = this;
                    return {
                        type: "bi.tab",
                        showIndex: this.model.forgetPasswordTab,
                        cardCreator: BI.bind(this._createCard, this),
                        ref: function(t) {
                            e.tab = t
                        }
                    }
                },
                _createCard: function(e) {
                    switch (e) {
                    case DecCst.Login.ForgetPassword.PASSWORD:
                        return {
                            type: "dec.login.forget.password"
                        };
                    case DecCst.Login.ForgetPassword.FORBID:
                        return {
                            type: "dec.login.forget.forbid"
                        };
                    case DecCst.Login.ForgetPassword.VERIFICATION:
                    default:
                        return {
                            type: "dec.login.forget.verify"
                        }
                    }
                }
            }),
            BI.shortcut("dec.login.forget", e)
        },
        53355: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                state: function() {
                    return {
                        forgetPasswordTab: DecCst.Login.ForgetPassword.VERIFICATION,
                        forgetReceiverType: DecCst.Login.AuthenticationWay.PHOME,
                        forgetCaptchaToken: ""
                    }
                },
                childContext: ["forgetPasswordTab", "forgetCaptchaToken", "forgetReceiverType"],
                computed: {},
                actions: {}
            }),
            BI.model("dec.model.login.forget", e)
        },
        10777: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-forget-password"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.forget.password")
                },
                watch: {
                    password: function(e) {
                        this.passwordCombo.setPassword(e)
                    },
                    username: function() {
                        this._resetPasswordRow()
                    }
                },
                beforeInit: function(e) {
                    this.store.initPage(e)
                },
                render: function() {
                    var e = this;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.horizontal_auto",
                                items: [{
                                    el: {
                                        type: "bi.absolute",
                                        height: 24,
                                        items: [{
                                            el: {
                                                type: "bi.label",
                                                height: 24,
                                                text: BI.i18nText("Dec-Login_Change_Password")
                                            },
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0
                                        }, {
                                            el: {
                                                type: "bi.icon_button",
                                                $value: "back",
                                                height: 24,
                                                cls: "login-back-font",
                                                handler: function() {
                                                    e.store.setSelectedTab(DecCst.Login.Tabs.LOGIN)
                                                }
                                            },
                                            top: 0,
                                            left: 0
                                        }]
                                    },
                                    vgap: 28
                                }, {
                                    type: "dec.login.text_value_combo",
                                    height: 24,
                                    invisible: !this.model.showUsername,
                                    watermark: BI.i18nText("Dec-Login_Authentication_Choose_Username"),
                                    items: this.model.usernames,
                                    ref: function(t) {
                                        e.usernameRow = t
                                    },
                                    listeners: [{
                                        eventName: BI.TextValueCombo.EVENT_CHANGE,
                                        action: function() {
                                            e.store.changeUser(this.getValue()[0])
                                        }
                                    }]
                                }, {
                                    type: "bi.vertical_adapt",
                                    height: 24,
                                    invisible: this.model.showUsername,
                                    items: [{
                                        type: "bi.center_adapt",
                                        width: 16,
                                        cls: "item-icon login-username-font",
                                        items: [{
                                            type: "bi.icon"
                                        }]
                                    }, {
                                        type: "bi.label",
                                        cls: "bi-tips",
                                        text: this.model.username,
                                        title: this.model.username,
                                        rgap: 4,
                                        lgap: 6
                                    }]
                                }, {
                                    el: {
                                        type: "bi.absolute",
                                        height: 60,
                                        items: [{
                                            el: {
                                                type: "dec.login.item",
                                                iconCls: "login-new-password-font",
                                                watermark: BI.i18nText("Dec-Login_New_Password"),
                                                inputType: "password",
                                                ref: function(t) {
                                                    e.passwordRow = t
                                                },
                                                listeners: [{
                                                    eventName: "EVENT_CHANGE",
                                                    action: function() {
                                                        e.store.setPassword(this.getValue())
                                                    }
                                                }, {
                                                    eventName: "EVENT_FOCUS",
                                                    action: function() {
                                                        e.passwordCombo.showView()
                                                    }
                                                }, {
                                                    eventName: "EVENT_BLUR",
                                                    action: function() {
                                                        e.passwordCombo.hideView(),
                                                        e.passwordCombo.isValid() || e.passwordRow.showErrorText(BI.i18nText("Dec-Error_Password_Strength_Not"))
                                                    }
                                                }]
                                            },
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0
                                        }, {
                                            el: {
                                                type: "dec.password.strength",
                                                adjustHeight: 36,
                                                username: function() {
                                                    return e.model.username
                                                },
                                                ref: function(t) {
                                                    e.passwordCombo = t
                                                }
                                            },
                                            top: 0,
                                            right: 0
                                        }]
                                    },
                                    tgap: 30
                                }, {
                                    type: "dec.login.item",
                                    bgap: 10,
                                    iconCls: "login-confirm-password-font",
                                    watermark: BI.i18nText("Dec-Login_Re_New_Password"),
                                    inputType: "password",
                                    ref: function(t) {
                                        e.rePassswordRow = t
                                    }
                                }, {
                                    type: "bi.horizontal_auto",
                                    items: [{
                                        type: "bi.button",
                                        $testId: "dec-login-password-btn",
                                        cls: "login-button",
                                        text: BI.i18nText("BI-Basic_Save"),
                                        width: 190,
                                        height: 40,
                                        handler: function() {
                                            e._start()
                                        }
                                    }]
                                }]
                            },
                            top: 0,
                            right: 40,
                            bottom: 0,
                            left: 40
                        }]
                    }
                },
                _start: function() {
                    var e = this
                      , t = this.passwordRow.getValue()
                      , i = this.rePassswordRow.getValue();
                    BI.isEmptyString(this.model.username) ? BI.Msg.toast(BI.i18nText("Dec-Error_Login_Choose_Username"), {
                        level: "error"
                    }) : BI.isEmptyString(t) ? this.passwordRow.showError(BI.i18nText("Dec-Error_New_Password_Null")) : this.passwordCombo.isValid() ? BI.isEmptyString(i) ? this.rePassswordRow.showError(BI.i18nText("Dec-Error_New_Password_Null")) : t === i ? this.store.updatePwd({
                        username: this.model.username,
                        captchaToken: this.model.forgetCaptchaToken,
                        newPassword: this.passwordRow.getCipher(),
                        encrypted: !0
                    }, (function(t) {
                        t.data ? (e.store.setPropsInfo({
                            token: e.model.forgetCaptchaToken
                        }),
                        e.store.setSelectedTab(DecCst.Login.Tabs.SUCCESS_TOKEN)) : t.errorCode === DecCst.ErrorCode.CAPTCHA_TIMEOUT ? (BI.Msg.toast(BI.i18nText("Dec-Error_Captcha_Timeout"), {
                            level: "error"
                        }),
                        e.store.setSelectedTab(DecCst.Login.Tabs.LOGIN)) : t.errorCode === DecCst.ErrorCode.PASSWORD_STRENGTH ? e.passwordRow.showError(BI.i18nText("Dec-Error_Password_Strength_Not")) : t.errorCode === DecCst.ErrorCode.PASSWORD_SAME_ERROR ? e.passwordRow.showError(BI.i18nText("Dec-Error_Password_Equal_Old")) : t.errorCode === DecCst.ErrorCode.HISTORY_PASSWORD_LIMIT ? e.passwordRow.showError(BI.i18nText("Dec-Error_Password_Is_History")) : BI.Msg.toast(BI.i18nText("Dec-Login_Change_Password_Fail"), {
                            level: "error"
                        })
                    }
                    )) : this.rePassswordRow.showError(BI.i18nText("Dec-Error_Password_Be_Equal")) : this.passwordRow.showErrorText(BI.i18nText("Dec-Error_Password_Strength_Not"))
                },
                _resetPasswordRow: function() {
                    this.passwordRow.setValue(""),
                    this.passwordRow.hideError(),
                    this.rePassswordRow.setValue(""),
                    this.rePassswordRow.hideError(),
                    this.store.setPassword("")
                }
            }),
            BI.shortcut("dec.login.forget.password", e)
        },
        64103: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["selectedTab", "propsInfo", "forgetCaptchaToken", "forgetReceiverType", "forgetPasswordTab"],
                state: function() {
                    return {
                        password: "",
                        username: "",
                        usernames: []
                    }
                },
                computed: {
                    showUsername: function() {
                        return this.model.usernames.length > 1
                    }
                },
                actions: {
                    initPage: function(e) {
                        var t = this;
                        Dec.Utils.getUsernamesByToken({
                            type: this.model.forgetReceiverType,
                            captchaSendToken: this.model.forgetCaptchaToken
                        }, (function(i) {
                            var n = i.data;
                            BI.isNotEmptyArray(n) ? (t.model.usernames = BI.map(n, (function(e, t) {
                                return {
                                    value: t
                                }
                            }
                            )),
                            1 === n.length && t.changeUser(n[0])) : t.setActiveTab(DecCst.Login.ForgetPassword.FORBID),
                            e()
                        }
                        ))
                    },
                    changeUser: function(e) {
                        this.model.username = e
                    },
                    updatePwd: function(e, t) {
                        Dec.Utils.updateLoginPassword(e, t)
                    },
                    setSelectedTab: function(e) {
                        this.model.selectedTab = e
                    },
                    setActiveTab: function(e) {
                        this.model.forgetPasswordTab = e
                    },
                    setPropsInfo: function(e) {
                        this.model.propsInfo = e
                    },
                    setPassword: function(e) {
                        this.model.password = e
                    }
                }
            }),
            BI.model("dec.model.login.forget.password", e)
        },
        40242: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-forget-verify"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.forget.verify")
                },
                watch: {
                    errorMsg: function(e) {
                        this.receiverRow.showError(e)
                    },
                    forgetReceiverType: function() {
                        this._hideAllError(),
                        this.receiverRow.focus(),
                        this.captchaRow.setButtonEnable(!1)
                    }
                },
                render: function() {
                    var e = this;
                    return this.storeValue = "",
                    {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.vertical",
                                items: [{
                                    el: {
                                        type: "bi.absolute",
                                        height: 24,
                                        items: [{
                                            el: {
                                                type: "bi.label",
                                                height: 24,
                                                text: BI.i18nText("Dec-Login_Authentication")
                                            },
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0
                                        }, {
                                            el: {
                                                type: "bi.icon_button",
                                                $value: "back",
                                                height: 24,
                                                cls: "login-back-font",
                                                handler: function() {
                                                    e.store.setSelectedTab(DecCst.Login.Tabs.LOGIN)
                                                }
                                            },
                                            top: 0,
                                            left: 0
                                        }]
                                    },
                                    vgap: 28
                                }, {
                                    type: "dec.login.verification.way.item",
                                    bgap: 10,
                                    items: this.model.supportType,
                                    selectedType: this.model.forgetReceiverType,
                                    ref: function(t) {
                                        e.receiverRow = t
                                    },
                                    listeners: [{
                                        eventName: BI.Editor.EVENT_BLUR,
                                        action: function() {
                                            e._receiverChecker(this.getValue())
                                        }
                                    }, {
                                        eventName: "EVENT_TYPE",
                                        action: function(t) {
                                            e.store.setReceiverType(t)
                                        }
                                    }]
                                }, {
                                    type: "dec.login.captcha.item",
                                    bgap: 10,
                                    ref: function(t) {
                                        e.captchaRow = t
                                    },
                                    getCaptcha: function(t) {
                                        e.store.getCaptcha(e.receiverRow.getValue(), (function(i) {
                                            i.data ? (e.store.setCaptchaToken(i.data),
                                            t()) : i.errorCode === DecCst.ErrorCode.SMS_UNUSABLE ? (e.warningText.setText(BI.i18nText("Dec-Error_Login_SMS_Unable")),
                                            t(!0)) : i.errorCode === DecCst.ErrorCode.MAIL_UNUSABLE ? (e.warningText.setText(BI.i18nText("Dec-Error_Login_Email_Unable")),
                                            t(!0)) : i.errorCode === DecCst.ErrorCode.CAPTCHA_SEND_LIMITED ? (e.captchaRow.showError(BI.i18nText("Dec-Error_Get_Captcha_Limited")),
                                            t(!0)) : (BI.Msg.toast(BI.i18nText("Dec-Error_Get_Captcha"), {
                                                level: "error"
                                            }),
                                            t())
                                        }
                                        ))
                                    }
                                }, {
                                    type: "bi.horizontal_auto",
                                    items: [{
                                        type: "bi.button",
                                        $testId: "dec-login-forget-btn",
                                        cls: "login-button",
                                        text: BI.i18nText("BI-Basic_Sure"),
                                        width: 190,
                                        height: 40,
                                        handler: function() {
                                            e._start()
                                        }
                                    }]
                                }, {
                                    type: "bi.label",
                                    textAlign: "left",
                                    whiteSpace: "normal",
                                    text: "",
                                    cls: "warning-text",
                                    tgap: 5,
                                    ref: function(t) {
                                        e.warningText = t
                                    }
                                }]
                            },
                            top: 0,
                            right: 40,
                            bottom: 0,
                            left: 40
                        }]
                    }
                },
                _start: function() {
                    var e = this
                      , t = this.receiverRow.getValue().receiver
                      , i = this.captchaRow.getValue();
                    e._validationChecker(t) && (BI.isKey(i) ? this.store.startAuthentication({
                        token: this.model.forgetCaptchaToken,
                        captcha: i
                    }, (function(t) {
                        switch (t) {
                        case DecCst.ErrorCode.CAPTCHA_ERROR:
                            e.captchaRow.showError(BI.i18nText("Dec-Error_Captcha_Error"));
                            break;
                        case DecCst.ErrorCode.CAPTCHA_TIMEOUT:
                            e.captchaRow.showError(BI.i18nText("Dec-Error_Captcha_Timeout")),
                            e.captchaRow.setButtonEnable(!0);
                            break;
                        case DecCst.ErrorCode.CAPTCHA_CHECK_LIMITED:
                            e.captchaRow.showError(BI.i18nText("Dec-Error_Captcha_Limited"));
                            break;
                        default:
                            BI.Msg.toast(BI.i18nText("Dec-Error_Check_Captcha_Error"), {
                                level: "error"
                            })
                        }
                    }
                    )) : this.captchaRow.showError(BI.i18nText("Dec-Error_Captcha_Null")))
                },
                _receiverChecker: function(e) {
                    var t = this
                      , i = e.type === DecCst.Login.AuthenticationWay.PHOME
                      , n = e.receiver;
                    (i ? this._validationCheckerPhone(n, !0) : this._validationCheckerMail(n, !0)) && (this.storeValue = n,
                    this.store.checkUserExist(e, (function(e) {
                        e.data ? t.captchaRow.clearTime() : (t.receiverRow.showErrorText(BI.i18nText("Dec-Error_Login_Unbind_" + (i ? "Phone" : "Mail"))),
                        t.captchaRow.setButtonEnable(!1))
                    }
                    )))
                },
                _validationChecker: function(e) {
                    return this.model.isPhone ? this._validationCheckerPhone(e, !1) : this._validationCheckerMail(e, !1)
                },
                _validationCheckerPhone: function(e, t) {
                    if (!BI.isKey(e))
                        return this.receiverRow.showErrorText(BI.i18nText("Dec-Error_Phone_Not_Null")),
                        !1;
                    var i = BI.Services.getService("dec.service.components.phone.editor").getNumberInfo(e);
                    if (!Dec.Utils.isPhoneNumber(i.number, i.value)) {
                        var n = BI.i18nText("Dec-Error_Phone_Format");
                        return t ? this.receiverRow.showErrorText(n) : this.receiverRow.showError(n),
                        !1
                    }
                    return this.receiverRow.hideError(),
                    !0
                },
                _validationCheckerMail: function(e, t) {
                    if (!BI.isKey(e))
                        return this.receiverRow.showErrorText(BI.i18nText("Dec-Error_Email_Not_Null")),
                        !1;
                    if (!Dec.Utils.isMailAddress(e)) {
                        var i = BI.i18nText("Dec-Error_Email_Format");
                        return t ? this.receiverRow.showErrorText(i) : this.receiverRow.showError(i),
                        !1
                    }
                    return this.receiverRow.hideError(),
                    !0
                },
                _hideAllError: function() {
                    this.receiverRow.hideError(),
                    this.captchaRow.hideError(),
                    this.warningText.setText("")
                }
            }),
            BI.shortcut("dec.login.forget.verify", e)
        },
        87154: function() {
            var e, t;
            e = "login_forget_authentication",
            t = BI.inherit(Fix.Model, {
                context: ["selectedTab", "verifyConfig", "forgetPasswordTab", "forgetCaptchaToken", "forgetReceiverType"],
                state: function() {
                    return {}
                },
                created: function() {
                    var t = BI.Cache.getItem(e) || DecCst.Login.AuthenticationWay.PHOME;
                    this.model.forgetReceiverType = this.model.isMultiWay ? t : this.model.supportType[0].value
                },
                computed: {
                    supportType: function() {
                        var e = [];
                        return this.model.verifyConfig.smsVerificationAfterForgetPassword && e.push({
                            text: BI.i18nText("Dec-User_Mobile"),
                            value: DecCst.Login.AuthenticationWay.PHOME,
                            iconCls: "login-mobile-font",
                            editor: {
                                watermark: BI.i18nText("Dec-Login_Phone_Watermark"),
                                type: "dec.components.phone.small_editor"
                            }
                        }),
                        this.model.verifyConfig.emailVerificationAfterForgetPassword && e.push({
                            text: BI.i18nText("Dec-User_Email"),
                            value: DecCst.Login.AuthenticationWay.EMAIL,
                            iconCls: "login-email-font",
                            editor: {
                                watermark: BI.i18nText("Dec-Login_Email_Watermark")
                            }
                        }),
                        e
                    },
                    isMultiWay: function() {
                        return BI.size(this.model.supportType) > 1
                    },
                    isPhone: function() {
                        return this.model.forgetReceiverType === DecCst.Login.AuthenticationWay.PHOME
                    }
                },
                actions: {
                    setSelectedTab: function(e) {
                        this.model.selectedTab = e
                    },
                    setActiveTab: function(e) {
                        this.model.forgetPasswordTab = e
                    },
                    setReceiverType: function(t) {
                        this.model.forgetReceiverType = t,
                        BI.Cache.setItem(e, t)
                    },
                    checkUserExist: function(e, t) {
                        Dec.Utils.checkUserExistByReceiver(e, t)
                    },
                    getCaptcha: function(e, t) {
                        Dec.Utils.loginCaptcha(e, t)
                    },
                    setCaptchaToken: function(e) {
                        this.model.forgetCaptchaToken = e
                    },
                    startAuthentication: function(e, t) {
                        var i = this;
                        Dec.Utils.loginAuthentication(e, (function(e) {
                            e.data ? i.setActiveTab(DecCst.Login.ForgetPassword.PASSWORD) : t(e.errorCode)
                        }
                        ))
                    }
                }
            }),
            BI.model("dec.model.login.forget.verify", t)
        },
        71547: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-locked"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.locked")
                },
                watch: {},
                render: function() {
                    var e = this;
                    return this.options,
                    {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.horizontal_auto",
                                items: [{
                                    el: {
                                        type: "bi.absolute",
                                        height: 24,
                                        items: [{
                                            el: {
                                                type: "bi.label",
                                                height: 24,
                                                text: BI.i18nText("Dec-Login_Authentication")
                                            },
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0
                                        }, {
                                            el: {
                                                type: "bi.icon_button",
                                                $value: "back",
                                                height: 24,
                                                cls: "login-back-font",
                                                handler: function() {
                                                    e.store.setSelectedTab(DecCst.Login.Tabs.LOGIN)
                                                }
                                            },
                                            top: 0,
                                            left: 0
                                        }]
                                    },
                                    vgap: 28
                                }, {
                                    type: "bi.label",
                                    text: BI.i18nText(this.model.propsInfo.errorMsg),
                                    textAlign: "left",
                                    whiteSpace: "normal",
                                    tgap: 40,
                                    bgap: 30
                                }, {
                                    type: "bi.horizontal_auto",
                                    items: [{
                                        type: "bi.button",
                                        $testId: "dec-login-locked-btn",
                                        cls: "login-button",
                                        text: BI.i18nText("BI-Basic_Sure"),
                                        width: 190,
                                        height: 40,
                                        handler: function() {
                                            e.store.setSelectedTab(DecCst.Login.Tabs.LOGIN)
                                        }
                                    }]
                                }]
                            },
                            top: 0,
                            right: 40,
                            bottom: 0,
                            left: 40
                        }]
                    }
                }
            }),
            BI.shortcut("dec.login.locked", e)
        },
        12598: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["propsInfo", "selectedTab"],
                computed: {},
                actions: {
                    setSelectedTab: function(e) {
                        this.model.selectedTab = e
                    }
                }
            }),
            BI.model("dec.model.login.locked", e)
        },
        14325: function() {
            BI.constant("dec.constant.login.authentication.way", [{
                value: DecCst.Login.AuthenticationWay.PHOME,
                text: BI.i18nText("Dec-User_Mobile"),
                iconCls: "login-mobile-font"
            }, {
                value: DecCst.Login.AuthenticationWay.EMAIL,
                text: BI.i18nText("Dec-User_Email"),
                iconCls: "login-email-font"
            }])
        },
        90084: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-item",
                    iconCls: "",
                    watermark: "",
                    inputType: "text",
                    value: ""
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vertical",
                        items: [{
                            type: "bi.htape",
                            height: 36,
                            items: [{
                                type: "bi.vertical_adapt",
                                cls: "item-icon " + t.iconCls,
                                invisible: "" === t.iconCls,
                                width: "" === t.iconCls ? 0 : 26,
                                items: [{
                                    type: "bi.center_adapt",
                                    items: [{
                                        type: "bi.icon"
                                    }]
                                }]
                            }, {
                                type: "bi.absolute",
                                items: [{
                                    el: {
                                        type: "bi.input",
                                        element: "<input type='" + t.inputType + "' placeholder='" + t.watermark + "'/>",
                                        allowBlank: !0,
                                        value: t.value,
                                        ref: function(t) {
                                            e.editor = t
                                        },
                                        listeners: [{
                                            eventName: BI.Input.EVENT_FOCUS,
                                            action: function() {
                                                e.hideError()
                                            }
                                        }, {
                                            eventName: BI.Input.EVENT_BLUR,
                                            action: function() {
                                                e.fireEvent("EVENT_BLUR")
                                            }
                                        }]
                                    },
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                }]
                            }]
                        }, {
                            type: "bi.label",
                            cls: "bi-border-top",
                            text: "",
                            height: 24,
                            ref: function(t) {
                                e.lineRow = t
                            }
                        }, {
                            type: "bi.label",
                            invisible: !0,
                            height: 24,
                            textAlign: "left",
                            cls: "bi-border-top error",
                            ref: function(t) {
                                e.errorRow = t
                            }
                        }]
                    }
                },
                showError: function(e) {
                    this.errorRow.visible(),
                    this.errorRow.setText(e),
                    this.lineRow.invisible()
                },
                hideError: function() {
                    this.errorRow.invisible(),
                    this.errorRow.setText(""),
                    this.lineRow.visible()
                },
                getValue: function() {
                    return this.editor.getValue()
                },
                getCipher: function() {
                    return BI.Providers.getProvider("dec.provider.cipher").getCipher(this.getValue())
                }
            }),
            BI.shortcut("dec.login.input.item", e)
        },
        80409: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-item",
                    errorText: "",
                    iconCls: "",
                    watermark: "",
                    inputType: "text",
                    textHeight: 24,
                    value: "",
                    allowBlank: !0,
                    validationChecker: BI.emptyFn
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vertical",
                        items: [{
                            type: "bi.htape",
                            height: 36,
                            items: [{
                                type: "bi.center_adapt",
                                cls: "item-icon " + t.iconCls,
                                invisible: "" === t.iconCls,
                                width: "" === t.iconCls ? 0 : 16,
                                items: [{
                                    type: "bi.icon"
                                }]
                            }, {
                                el: {
                                    type: "bi.editor",
                                    $value: ("" === t.iconCls ? "dec-login-item" : t.iconCls) + "-editor",
                                    inputType: t.inputType,
                                    watermark: t.watermark,
                                    validationChecker: t.validationChecker,
                                    allowBlank: t.allowBlank,
                                    value: t.value,
                                    ref: function(t) {
                                        e.editor = t
                                    },
                                    listeners: [{
                                        eventName: BI.Editor.EVENT_FOCUS,
                                        action: function() {
                                            e.hideError(),
                                            e.fireEvent("EVENT_FOCUS")
                                        }
                                    }, {
                                        eventName: BI.Editor.EVENT_CHANGE,
                                        action: function() {
                                            e.hideError(),
                                            e.fireEvent("EVENT_CHANGE")
                                        }
                                    }, {
                                        eventName: BI.Editor.EVENT_BLUR,
                                        action: function() {
                                            e.fireEvent("EVENT_BLUR")
                                        }
                                    }]
                                },
                                lgap: 8
                            }]
                        }, {
                            type: "bi.label",
                            cls: "bi-border-top",
                            text: "",
                            height: 24,
                            ref: function(t) {
                                e.lineRow = t
                            }
                        }, {
                            type: "bi.label",
                            $testId: ("" === t.iconCls ? "dec-login-item" : t.iconCls) + "-error",
                            invisible: !0,
                            text: t.errorText,
                            textHeight: t.textHeight - 1,
                            textAlign: "left",
                            whiteSpace: "normal",
                            cls: "bi-border-top error",
                            ref: function(t) {
                                e.errorRow = t
                            }
                        }]
                    }
                },
                showError: function(e) {
                    this.showErrorText(e)
                },
                showErrorText: function(e) {
                    this.errorRow.visible(),
                    this.errorRow.setText(e),
                    this.lineRow.invisible()
                },
                hideError: function() {
                    this.errorRow.invisible(),
                    this.errorRow.setText(""),
                    this.lineRow.visible()
                },
                getValue: function() {
                    return this.editor.getValue()
                },
                setValue: function(e) {
                    this.editor.setValue(e)
                },
                getCipher: function() {
                    return BI.Providers.getProvider("dec.provider.cipher").getCipher(this.getValue())
                }
            }),
            BI.shortcut("dec.login.item", e)
        },
        11571: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-index"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.index")
                },
                watch: {
                    selectedTab: function(t) {
                        this.tab.setSelect(t),
                        this.fireEvent(e.EVENT_CHANGE, t)
                    }
                },
                render: function() {
                    var e = this;
                    return {
                        type: "bi.tab",
                        single: !0,
                        cardCreator: BI.bind(this._createCard, this),
                        showIndex: this.model.selectedTab,
                        ref: function(t) {
                            e.tab = t
                        }
                    }
                },
                mounted: function() {
                    this.store.initData()
                },
                _createCard: function(e) {
                    var t = this;
                    switch (e) {
                    case DecCst.Login.Tabs.LOGIN:
                        return {
                            type: "dec.login.login",
                            listeners: [{
                                eventName: "EVENT_LOGIN",
                                action: function(e) {
                                    t.store.login(e)
                                }
                            }]
                        };
                    case DecCst.Login.Tabs.FORGET_PASSWORD:
                        return {
                            type: "dec.login.forget"
                        };
                    case DecCst.Login.Tabs.AUTHENTICATION:
                        return {
                            type: "dec.login.authentication",
                            listeners: [{
                                eventName: "EVENT_LOGIN",
                                action: function(e) {
                                    t.store.login(e)
                                }
                            }]
                        };
                    case DecCst.Login.Tabs.PASSWORD_TOKEN:
                        return {
                            type: "dec.login.password",
                            listeners: [{
                                eventName: "EVENT_SAVE",
                                action: function(e) {
                                    t.store.toSuccess(e)
                                }
                            }]
                        };
                    case DecCst.Login.Tabs.SUCCESS_PWD:
                        return {
                            type: "dec.login.password.success",
                            username: this.model.loginInfo.username,
                            pwd: this.model.userInfo.pwd,
                            loginValidity: this.model.loginInfo.validity,
                            listeners: [{
                                eventName: "EVENT_LOGIN",
                                action: function(e) {
                                    t.store.login(e)
                                }
                            }]
                        };
                    case DecCst.Login.Tabs.SUCCESS_TOKEN:
                        return {
                            type: "dec.login.password.token",
                            listeners: [{
                                eventName: "EVENT_LOGIN",
                                action: function(e) {
                                    t.store.login(e)
                                }
                            }]
                        };
                    case DecCst.Login.Tabs.PASSWORD_OLD:
                        return {
                            type: "dec.login.single",
                            username: this.model.loginInfo.username,
                            listeners: [{
                                eventName: "EVENT_BACK",
                                action: function() {
                                    t.store.setTab(DecCst.Login.Tabs.LOGIN)
                                }
                            }, {
                                eventName: "EVENT_SURE",
                                action: function(e) {
                                    t.store.toSuccess(e)
                                }
                            }]
                        };
                    case DecCst.Login.Tabs.VERIFY_BING:
                        return {
                            type: "dec.login.verify"
                        };
                    case DecCst.Login.Tabs.LOCKED:
                        return {
                            type: "dec.login.locked"
                        };
                    default:
                        return {
                            type: "bi.layout"
                        }
                    }
                }
            })).EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.login.index", e)
        },
        44909: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                childContext: ["selectedTab", "verifyConfig", "loginInfo", "propsInfo", "sliderToken"],
                state: function() {
                    return {
                        token: "",
                        selectedTab: DecCst.Login.Tabs.LOGIN,
                        loginInfo: {},
                        verifyConfig: {},
                        propsInfo: {},
                        userInfo: {},
                        ipInfo: {},
                        sliderToken: ""
                    }
                },
                computed: {},
                actions: {
                    initData: function() {
                        var e = this;
                        BI.Cache.deleteCookie(DecCst.Cookie.LAST_LOGIN_INFO, Dec.loginConfig.cookiePath),
                        Dec.system.cloudEnabled && Dec.system.urlIP && Dec.Utils.getIPInfo(Dec.system.urlIP, (function(t) {
                            e.model.ipInfo = t
                        }
                        ))
                    },
                    setTab: function(e) {
                        this.model.selectedTab = e
                    },
                    setUserInfo: function(e) {
                        this.model.userInfo = e
                    },
                    toSuccess: function(e) {
                        this.setUserInfo({
                            pwd: e
                        }),
                        this.setTab(DecCst.Login.Tabs.SUCCESS_PWD)
                    },
                    login: function(e) {
                        this.setUserInfo({});
                        var t = this
                          , i = e.validity === DecCst.Cookie.REMEMBER_PASSWORD ? 24 * DecCst.Cookie.REMEMBER_DAY : DecCst.Cookie.VALIDITY_NOW;
                        Dec.Utils.addSecureCookie(DecCst.Cookie.REMEMBER_LOGIN, e.validity, Dec.loginConfig.cookiePath, i),
                        Dec.Utils.addSecureCookie(DecCst.Cookie.TOKEN, e.accessToken, Dec.loginConfig.cookiePath, i),
                        Dec.system.cloudEnabled ? BI.Services.getService("dec.service.login").addLoginInfo(this.model.ipInfo, (function() {
                            t._doLogin(e)
                        }
                        )) : t._doLogin(e)
                    }
                },
                _doLogin: function(e) {
                    var t = e.originUrlResponse;
                    "GET" === BI.toUpperCase(t.method) ? window.location.href = t.originUrl + window.location.hash : Dec.doActionByForm(t.originUrl, t.parameters, {
                        method: t.method
                    })
                }
            }),
            BI.model("dec.model.login.index", e)
        },
        99723: function() {
            BI.constant("dec.constant.login.way.extend", [])
        },
        99088: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-login-item",
                    inputType: "text"
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.vertical",
                        items: [{
                            type: "dec.login.input.item",
                            iconCls: t.iconCls,
                            invisible: BI.isIE(),
                            bgap: 10,
                            watermark: t.watermark,
                            inputType: t.inputType,
                            ref: function(t) {
                                e.usernameNotIERow = t
                            },
                            listeners: [{
                                eventName: "EVENT_BLUR",
                                action: function() {
                                    e.fireEvent("EVENT_BLUR")
                                }
                            }]
                        }, {
                            type: "dec.login.item",
                            iconCls: t.iconCls,
                            invisible: !BI.isIE(),
                            bgap: 10,
                            watermark: t.watermark,
                            inputType: t.inputType,
                            ref: function(t) {
                                e.usernameIERow = t
                            },
                            listeners: [{
                                eventName: "EVENT_BLUR",
                                action: function() {
                                    e.fireEvent("EVENT_BLUR")
                                }
                            }]
                        }]
                    }
                },
                showError: function(e) {
                    BI.isIE() ? this.usernameIERow.showErrorText(e) : this.usernameNotIERow.showError(e)
                },
                getValue: function() {
                    return BI.isIE() ? this.usernameIERow.getValue() : this.usernameNotIERow.getValue()
                },
                getCipher: function() {
                    return BI.Providers.getProvider("dec.provider.cipher").getCipher(this.getValue())
                }
            }),
            BI.shortcut("dec.login.login.item", e)
        },
        61781: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-login"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.login")
                },
                watch: {
                    supportForgetPwd: function(e) {
                        this.forgetPasswordRow.setVisible(e)
                    },
                    needSlider: function(e) {
                        this.sliderMasker.setVisible(e)
                    }
                },
                render: function() {
                    var e = this;
                    return this.options,
                    {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.vertical",
                                items: [{
                                    type: "dec.login.login.item",
                                    $testId: "dec-login-username",
                                    iconCls: "login-username-font",
                                    tgap: 50,
                                    watermark: BI.i18nText("Dec-User_Name"),
                                    ref: function(t) {
                                        e.usernameRow = t
                                    }
                                }, {
                                    type: "dec.login.login.item",
                                    $testId: "dec-login-password",
                                    iconCls: "login-password-font",
                                    watermark: BI.i18nText("Dec-Password"),
                                    inputType: "password",
                                    ref: function(t) {
                                        e.passwordRow = t
                                    }
                                }, {
                                    type: "bi.default",
                                    bgap: 30,
                                    cls: "clearfix",
                                    items: [{
                                        el: {
                                            type: "bi.multi_select_item",
                                            css: {
                                                float: "left"
                                            },
                                            $testId: "dec-login-remember",
                                            textLgap: 5,
                                            iconWrapperWidth: 16,
                                            height: 16,
                                            text: BI.i18nText("Dec-Login_Remember"),
                                            logic: {
                                                dynamic: !0
                                            },
                                            ref: function(t) {
                                                e.rememberRow = t
                                            }
                                        }
                                    }, {
                                        el: {
                                            type: "bi.right_vertical_adapt",
                                            css: {
                                                float: "right"
                                            },
                                            items: [{
                                                type: "bi.button",
                                                $testId: "dec-login-forget-password",
                                                clear: !0,
                                                height: 16,
                                                invisible: !this.model.supportForgetPwd,
                                                text: BI.i18nText("Dec-Basic_Forget_Password"),
                                                ref: function(t) {
                                                    e.forgetPasswordRow = t
                                                },
                                                handler: function() {
                                                    e.store.setSelectedTab(DecCst.Login.Tabs.FORGET_PASSWORD)
                                                }
                                            }].concat(this._createItems())
                                        }
                                    }]
                                }, {
                                    type: "bi.horizontal_auto",
                                    items: [{
                                        type: "bi.button",
                                        cls: "login-button",
                                        text: BI.i18nText("Dec-Basic_Login"),
                                        width: 190,
                                        height: 40,
                                        handler: function() {
                                            e._start()
                                        }
                                    }]
                                }, {
                                    el: {
                                        type: "bi.vertical",
                                        $testId: "dec-login-logged-chang-text",
                                        cls: "login-error",
                                        invisible: !0,
                                        scrolly: !1,
                                        items: [{
                                            type: "bi.text",
                                            tagName: "span",
                                            whiteSpace: "normal",
                                            text: BI.i18nText("Dec-Login_Other_Logged_Tip")
                                        }, {
                                            type: "bi.text",
                                            $testId: "dec-login-logged-chang-password",
                                            tagName: "span",
                                            cls: "password-btn",
                                            text: BI.i18nText("Dec-Login_Change_Password"),
                                            handler: function() {
                                                e.model.isNeedVerify ? e.store.setSelectedTab(DecCst.Login.Tabs.VERIFY_BING) : e.store.setSelectedTab(DecCst.Login.Tabs.PASSWORD_OLD)
                                            }
                                        }, {
                                            type: "bi.text",
                                            tagName: "span",
                                            text: BI.i18nText("Dec-Login_Change_Password_Interjection")
                                        }],
                                        ref: function(t) {
                                            e.loginErrorRow = t
                                        }
                                    },
                                    tgap: 20
                                }, {
                                    el: {
                                        type: "bi.text",
                                        $testId: "dec-login-logged-text",
                                        cls: "login-error",
                                        invisible: !0,
                                        whiteSpace: "normal",
                                        text: BI.i18nText("Dec-Login_Normal_Other_Logged_Tip"),
                                        ref: function(t) {
                                            e.loginNormalErrorRow = t
                                        }
                                    },
                                    tgap: 20
                                }]
                            },
                            top: 0,
                            right: 40,
                            bottom: 0,
                            left: 40
                        }, {
                            el: {
                                type: "bi.center_adapt",
                                cls: "slider-masker",
                                invisible: !0,
                                items: [{
                                    type: "dec.login.slider",
                                    listeners: [{
                                        eventName: "EVENT_SUCCESS",
                                        action: function() {
                                            e._start()
                                        }
                                    }, {
                                        eventName: "EVENT_CLOSE",
                                        action: function() {
                                            e.store.resetSlider()
                                        }
                                    }],
                                    ref: function(t) {
                                        e.sliderBar = t
                                    }
                                }],
                                ref: function(t) {
                                    e.sliderMasker = t
                                }
                            },
                            top: 0,
                            right: 40,
                            bottom: 0,
                            left: 40
                        }]
                    }
                },
                mounted: function() {
                    var e = this;
                    this.store.initData(),
                    this.element.keyup((function(t) {
                        13 === t.keyCode && e._start()
                    }
                    ))
                },
                _createItems: function() {
                    return BI.map(BI.Constants.getConstant("dec.constant.login.way.extend"), (function(e, t) {
                        return {
                            type: t.cardType
                        }
                    }
                    ))
                },
                _start: function() {
                    var e = this
                      , t = this.usernameRow.getValue()
                      , i = this.passwordRow.getValue()
                      , n = this.rememberRow.isSelected() ? -2 : -1;
                    e.loginErrorRow.invisible(),
                    e.loginNormalErrorRow.invisible(),
                    "" !== t ? "" !== i ? (this.store.setLoginInfo({
                        username: t,
                        validity: n,
                        phone: "",
                        captcha: ""
                    }),
                    this.store.login({
                        username: t,
                        password: this.passwordRow.getCipher(),
                        validity: n,
                        sliderToken: this.model.sliderToken,
                        origin: Dec.Utils.getUrlQuery("origin"),
                        encrypted: !0
                    }, (function(t) {
                        e.store.resetSlider(),
                        t.data && t.data.accessToken ? e.fireEvent("EVENT_LOGIN", t.data) : BI.bind(BI.Services.getService("dec.service.login.login").getHandler(t.errorCode), e)(t)
                    }
                    ))) : this.passwordRow.showError(BI.i18nText("Dec-Error_Password_Not_Null")) : this.usernameRow.showError(BI.i18nText("Dec-Error_Username_Not_Null"))
                }
            }),
            BI.shortcut("dec.login.login", e)
        },
        31431: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["selectedTab", "verifyConfig", "loginInfo", "propsInfo", "sliderToken"],
                state: function() {
                    return {
                        systemInfo: {},
                        needSlider: !1
                    }
                },
                computed: {
                    supportForgetPwd: function() {
                        return this.model.systemInfo.showForgetPassword
                    },
                    isNeedVerify: function() {
                        return this.model.verifyConfig.smsVerificationAfterChangePassword || this.model.verifyConfig.emailVerificationAfterChangePassword
                    }
                },
                actions: {
                    initData: function() {
                        var e = this;
                        Dec.Utils.loginConfig((function(t) {
                            e.model.verifyConfig = t,
                            Dec.Utils.getSystemInfo((function(t) {
                                e.model.systemInfo = t
                            }
                            ))
                        }
                        ))
                    },
                    setSelectedTab: function(e) {
                        this.model.selectedTab = e
                    },
                    setLoginInfo: function(e) {
                        this.model.loginInfo = e
                    },
                    setPropsInfo: function(e) {
                        this.model.propsInfo = e
                    },
                    login: function(e, t) {
                        Dec.Utils.login(e, t)
                    },
                    setNeedSlider: function(e) {
                        this.model.needSlider = e
                    },
                    resetSlider: function() {
                        this.model.needSlider = !1,
                        this.model.sliderToken = ""
                    }
                }
            }),
            BI.model("dec.model.login.login", e)
        },
        74244: function() {
            var e, t;
            e = "default_fail",
            t = BI.inherit(BI.OB, {
                init: function() {
                    this.failMap = {},
                    this._initErrorHandler()
                },
                addHandler: function(e, t) {
                    this.failMap[e] = t
                },
                getHandler: function(e) {
                    return BI.isFunction(this.failMap[e]) ? this.failMap[e] : this.failMap.default_fail
                },
                _initErrorHandler: function() {
                    this.failMap[DecCst.ErrorCode.USER_LOGGED] = function(e) {
                        this.store.setPropsInfo({
                            token: e.errorMsg,
                            isChangePwd: !0,
                            from: DecCst.Login.AuthenticationModule.SINGLE
                        }),
                        this.store.setNeedSlider(!1),
                        this.loginErrorRow.visible()
                    }
                    ,
                    this.failMap[DecCst.ErrorCode.USER_LOGGED_CAN_NOT_CHANGE_PASSWORD] = function() {
                        this.store.setNeedSlider(!1),
                        this.loginNormalErrorRow.visible()
                    }
                    ,
                    this.failMap[DecCst.ErrorCode.USERNAME_UNAVAILABLE] = function() {
                        this.usernameRow.showError(BI.i18nText("Dec-Error_Login_Username_Unable"))
                    }
                    ,
                    this.failMap[DecCst.ErrorCode.USERNAME_NOT_EXIST_PASSWORD_ERROR] = function() {
                        this.passwordRow.showError(BI.i18nText("Dec-Error_Incorrect_Password_Username"))
                    }
                    ,
                    this.failMap[DecCst.ErrorCode.SMS_CAPTCHA_UNCHECK] = function(e) {
                        this.store.setPropsInfo({
                            token: e.errorMsg,
                            isChangePwd: !1,
                            from: DecCst.Login.AuthenticationModule.LOGIN
                        }),
                        this.store.setSelectedTab(DecCst.Login.Tabs.VERIFY_BING)
                    }
                    ,
                    this.failMap[DecCst.ErrorCode.PASSWORD_NEED_SPLIDER] = function() {
                        this.store.setNeedSlider(!0),
                        this.sliderBar.resetAll()
                    }
                    ,
                    this.failMap[DecCst.ErrorCode.PASSWORD_LOCKED] = function(e) {
                        this.store.setPropsInfo({
                            errorMsg: e.errorMsg
                        }),
                        this.store.setSelectedTab(DecCst.Login.Tabs.LOCKED)
                    }
                    ,
                    this.failMap[DecCst.ErrorCode.PASSWORD_NEED_UPDATE] = function(e) {
                        this.store.setPropsInfo({
                            token: e.errorMsg,
                            isChangePwd: !0,
                            from: DecCst.Login.AuthenticationModule.PWD_UPDATE
                        }),
                        this.model.isNeedVerify ? this.store.setSelectedTab(DecCst.Login.Tabs.VERIFY_BING) : this.store.setSelectedTab(DecCst.Login.Tabs.PASSWORD_OLD)
                    }
                    ,
                    this.failMap[DecCst.ErrorCode.PASSWORD_STRENGTH] = function(e) {
                        this.store.setPropsInfo({
                            token: e.errorMsg,
                            isChangePwd: !0,
                            from: DecCst.Login.AuthenticationModule.PWD_STRENGTH
                        }),
                        this.model.isNeedVerify ? this.store.setSelectedTab(DecCst.Login.Tabs.VERIFY_BING) : this.store.setSelectedTab(DecCst.Login.Tabs.PASSWORD_OLD)
                    }
                    ,
                    this.failMap[DecCst.ErrorCode.CAPTCHA_TIMEOUT] = function() {
                        this.sliderError.setText(BI.i18nText("Dec-Basic_Captcha_Timeout")),
                        this.sliderBar.resetAll()
                    }
                    ,
                    this.addHandler(e, (function() {
                        this.passwordRow.showError(BI.i18nText("Dec-Login_Fail"))
                    }
                    ))
                }
            }),
            BI.service("dec.service.login.login", t)
        },
        27489: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-password"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.password")
                },
                watch: {
                    password: function(e) {
                        this.passwordCombo.setPassword(e)
                    }
                },
                render: function() {
                    var e = this;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.horizontal_auto",
                                items: [{
                                    el: {
                                        type: "bi.absolute",
                                        height: 24,
                                        items: [{
                                            el: {
                                                type: "bi.label",
                                                height: 24,
                                                text: BI.i18nText("Dec-Login_Change_Password")
                                            },
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0
                                        }, {
                                            el: {
                                                type: "bi.icon_button",
                                                $value: "back",
                                                height: 24,
                                                cls: "login-back-font",
                                                handler: function() {
                                                    e.store.setSelectedTab(DecCst.Login.Tabs.LOGIN)
                                                }
                                            },
                                            top: 0,
                                            left: 0
                                        }]
                                    },
                                    vgap: 28
                                }, {
                                    type: "bi.absolute",
                                    height: 60,
                                    items: [{
                                        el: {
                                            type: "dec.login.item",
                                            iconCls: "login-new-password-font",
                                            watermark: BI.i18nText("Dec-Login_New_Password"),
                                            inputType: "password",
                                            ref: function(t) {
                                                e.passwordRow = t
                                            },
                                            listeners: [{
                                                eventName: "EVENT_CHANGE",
                                                action: function() {
                                                    e.store.setPassword(this.getValue())
                                                }
                                            }, {
                                                eventName: "EVENT_FOCUS",
                                                action: function() {
                                                    e.passwordCombo.showView()
                                                }
                                            }, {
                                                eventName: "EVENT_BLUR",
                                                action: function() {
                                                    e.passwordCombo.hideView(),
                                                    e.passwordCombo.isValid() || e.passwordRow.showErrorText(BI.i18nText("Dec-Error_Password_Strength_Not"))
                                                }
                                            }]
                                        },
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0
                                    }, {
                                        el: {
                                            type: "dec.password.strength",
                                            adjustHeight: 36,
                                            username: this.model.loginInfo.username,
                                            ref: function(t) {
                                                e.passwordCombo = t
                                            }
                                        },
                                        top: 0,
                                        right: 0
                                    }]
                                }, {
                                    type: "dec.login.item",
                                    bgap: 10,
                                    iconCls: "login-confirm-password-font",
                                    watermark: BI.i18nText("Dec-Login_Re_New_Password"),
                                    inputType: "password",
                                    ref: function(t) {
                                        e.rePassswordRow = t
                                    }
                                }, {
                                    type: "bi.horizontal_auto",
                                    items: [{
                                        type: "bi.button",
                                        $testId: "dec-login-password-btn",
                                        cls: "login-button",
                                        text: BI.i18nText("BI-Basic_Save"),
                                        width: 190,
                                        height: 40,
                                        handler: function() {
                                            e._start()
                                        }
                                    }]
                                }]
                            },
                            top: 0,
                            right: 40,
                            bottom: 0,
                            left: 40
                        }]
                    }
                },
                _start: function() {
                    var e = this
                      , t = this.passwordRow.getValue()
                      , i = this.rePassswordRow.getValue();
                    "" !== t ? this.passwordCombo.isValid() ? "" !== i ? t === i ? this.store.save({
                        captchaToken: this.model.propsInfo.token,
                        newPassword: this.passwordRow.getCipher(),
                        encrypted: !0
                    }, (function(t) {
                        t.data ? e.store.setSelectedTab(DecCst.Login.Tabs.SUCCESS_TOKEN) : t.errorCode === DecCst.ErrorCode.CAPTCHA_TIMEOUT ? (BI.Msg.toast(BI.i18nText("Dec-Error_Captcha_Timeout"), {
                            level: "error"
                        }),
                        e.store.setSelectedTab(DecCst.Login.Tabs.LOGIN)) : t.errorCode === DecCst.ErrorCode.PASSWORD_STRENGTH ? e.passwordRow.showError(BI.i18nText("Dec-Error_Password_Strength_Not")) : t.errorCode === DecCst.ErrorCode.PASSWORD_SAME_ERROR ? e.passwordRow.showError(BI.i18nText("Dec-Error_Password_Equal_Old")) : t.errorCode === DecCst.ErrorCode.HISTORY_PASSWORD_LIMIT ? e.passwordRow.showError(BI.i18nText("Dec-Error_Password_Is_History")) : BI.Msg.toast(BI.i18nText("Dec-Login_Change_Password_Fail"), {
                            level: "error"
                        })
                    }
                    )) : this.rePassswordRow.showError(BI.i18nText("Dec-Error_Password_Be_Equal")) : this.rePassswordRow.showError(BI.i18nText("Dec-Error_New_Password_Null")) : this.passwordRow.showErrorText(BI.i18nText("Dec-Error_Password_Strength_Not")) : this.passwordRow.showError(BI.i18nText("Dec-Error_New_Password_Null"))
                }
            }),
            BI.shortcut("dec.login.password", e)
        },
        61264: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["selectedTab", "propsInfo", "loginInfo"],
                state: function() {
                    return {
                        password: ""
                    }
                },
                computed: {},
                actions: {
                    save: function(e, t) {
                        Dec.Utils.updateLoginPassword(e, t)
                    },
                    setSelectedTab: function(e) {
                        this.model.selectedTab = e
                    },
                    setPropsInfo: function(e) {
                        this.model.propsInfo = e
                    },
                    setPassword: function(e) {
                        this.model.password = e
                    }
                }
            }),
            BI.model("dec.model.login.password", e)
        },
        31564: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-single",
                    username: ""
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.single")
                },
                watch: {
                    password: function(e) {
                        this.passwordCombo.setPassword(e)
                    }
                },
                render: function() {
                    var e = this;
                    return {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.horizontal_auto",
                                items: [{
                                    el: {
                                        type: "bi.absolute",
                                        height: 24,
                                        items: [{
                                            el: {
                                                type: "bi.label",
                                                height: 24,
                                                text: BI.i18nText("Dec-Login_Change_Password")
                                            },
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0
                                        }, {
                                            el: {
                                                type: "bi.icon_button",
                                                $value: "back",
                                                height: 24,
                                                cls: "login-back-font",
                                                handler: function() {
                                                    e.fireEvent("EVENT_BACK")
                                                }
                                            },
                                            top: 0,
                                            left: 0
                                        }]
                                    },
                                    tgap: 28,
                                    bgap: 20
                                }, {
                                    type: "bi.label",
                                    text: this.model.showDesc,
                                    whiteSpace: "normal",
                                    invisible: !this.model.showDesc,
                                    bgap: 15
                                }, {
                                    type: "dec.login.item",
                                    iconCls: "login-password-font",
                                    bgap: 10,
                                    watermark: BI.i18nText("Dec-Login_Old_Password"),
                                    inputType: "password",
                                    ref: function(t) {
                                        e.oldPasswordRow = t
                                    }
                                }, {
                                    type: "bi.absolute",
                                    height: 60,
                                    items: [{
                                        el: {
                                            type: "dec.login.item",
                                            iconCls: "login-new-password-font",
                                            watermark: BI.i18nText("Dec-Login_New_Password"),
                                            inputType: "password",
                                            ref: function(t) {
                                                e.passwordRow = t
                                            },
                                            listeners: [{
                                                eventName: "EVENT_CHANGE",
                                                action: function() {
                                                    e.store.setPassword(this.getValue())
                                                }
                                            }, {
                                                eventName: "EVENT_FOCUS",
                                                action: function() {
                                                    e.passwordCombo.showView()
                                                }
                                            }, {
                                                eventName: "EVENT_BLUR",
                                                action: function() {
                                                    e.passwordCombo.hideView(),
                                                    e.passwordCombo.isValid() || e.passwordRow.showErrorText(BI.i18nText("Dec-Error_Password_Strength_Not"))
                                                }
                                            }]
                                        },
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0
                                    }, {
                                        el: {
                                            type: "dec.password.strength",
                                            adjustHeight: 36,
                                            username: this.model.loginInfo.username,
                                            ref: function(t) {
                                                e.passwordCombo = t
                                            }
                                        },
                                        top: 0,
                                        right: 0
                                    }]
                                }, {
                                    type: "dec.login.item",
                                    iconCls: "login-confirm-password-font",
                                    watermark: BI.i18nText("Dec-Login_Re_New_Password"),
                                    inputType: "password",
                                    ref: function(t) {
                                        e.rePassswordRow = t
                                    }
                                }]
                            },
                            top: 0,
                            right: 40,
                            bottom: 50,
                            left: 40
                        }, {
                            el: {
                                type: "bi.horizontal_auto",
                                items: [{
                                    type: "bi.button",
                                    $testId: "dec-login-single-btn",
                                    cls: "login-button",
                                    text: BI.i18nText("BI-Basic_Sure"),
                                    width: 190,
                                    height: 40,
                                    handler: function() {
                                        e._start()
                                    }
                                }]
                            },
                            right: 40,
                            bottom: 10,
                            left: 40
                        }]
                    }
                },
                _start: function() {
                    var e = this
                      , t = this.oldPasswordRow.getValue()
                      , i = this.passwordRow.getValue()
                      , n = this.rePassswordRow.getValue();
                    "" !== t ? "" !== i ? this.passwordCombo.isValid() ? "" !== n ? i === n ? i !== t ? this.store.changePwd({
                        username: this.options.username,
                        oldPassword: this.oldPasswordRow.getCipher(),
                        newPassword: this.passwordRow.getCipher(),
                        encrypted: !0
                    }, (function(t) {
                        if (t.data)
                            return e.model.isNeedVerify ? (e.store.setPropsInfo({
                                token: t.data,
                                isChangePwd: !1,
                                from: DecCst.Login.AuthenticationModule.LOGIN
                            }),
                            void e.store.setSelectedTab(DecCst.Login.Tabs.VERIFY_BING)) : void e.fireEvent("EVENT_SURE", i);
                        switch (t.errorCode) {
                        case DecCst.ErrorCode.OLD_PASSWORD_ERROR:
                            e.oldPasswordRow.showError(BI.i18nText("Dec-Error_Old_Password_Error", t.errorMsg));
                            break;
                        case DecCst.ErrorCode.PASSWORD_SAME_ERROR:
                            e.oldPasswordRow.showError(BI.i18nText("Dec-Error_Password_Equal_Old"));
                            break;
                        case DecCst.ErrorCode.PASSWORD_STRENGTH:
                            e.passwordRow.showError(BI.i18nText("Dec-Error_Password_Strength_Not"));
                            break;
                        case DecCst.ErrorCode.HISTORY_PASSWORD_LIMIT:
                            e.passwordRow.showError(BI.i18nText("Dec-Error_Password_Is_History"));
                            break;
                        case DecCst.ErrorCode.PASSWORD_CHANGE_BLOCK:
                            e.oldPasswordRow.showError(BI.i18nText(t.errorMsg));
                            break;
                        default:
                            BI.Msg.toast(BI.i18nText("Dec-Login_Change_Password_Fail"))
                        }
                    }
                    )) : this.passwordRow.showError(BI.i18nText("Dec-Error_Password_Equal_Old")) : this.rePassswordRow.showError(BI.i18nText("Dec-Error_Password_Be_Equal")) : this.rePassswordRow.showError(BI.i18nText("Dec-Error_New_Password_Null")) : this.passwordRow.showErrorText(BI.i18nText("Dec-Error_Password_Strength_Not")) : this.passwordRow.showError(BI.i18nText("Dec-Error_New_Password_Null")) : this.oldPasswordRow.showError(BI.i18nText("Dec-Error_Old_Password_Null"))
                }
            }),
            BI.shortcut("dec.login.single", e)
        },
        32098: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["selectedTab", "verifyConfig", "propsInfo", "loginInfo"],
                state: function() {
                    return {
                        password: ""
                    }
                },
                computed: {
                    isNeedVerify: function() {
                        return this.model.verifyConfig.smsRemind || this.model.verifyConfig.emailRemind
                    },
                    showDesc: function() {
                        switch (this.model.propsInfo.from) {
                        case DecCst.Login.AuthenticationModule.LOGIN:
                            return BI.i18nText("Dec-Login_Change_Password_Tip", BI.i18nText("Dec-Login_Authentication_Open"));
                        case DecCst.Login.AuthenticationModule.PWD_STRENGTH:
                            return BI.i18nText("Dec-Login_Change_Password_Strength_Tip");
                        case DecCst.Login.AuthenticationModule.PWD_UPDATE:
                            return BI.i18nText("Dec-Login_Change_Password_Update_Tip");
                        case DecCst.Login.AuthenticationModule.SINGLE:
                        default:
                            return ""
                        }
                    }
                },
                actions: {
                    changePwd: function(e, t) {
                        Dec.Utils.loginChangePassword(e, t)
                    },
                    setSelectedTab: function(e) {
                        this.model.selectedTab = e
                    },
                    setPropsInfo: function(e) {
                        this.model.propsInfo = e
                    },
                    setPassword: function(e) {
                        this.model.password = e
                    }
                }
            }),
            BI.model("dec.model.login.single", e)
        },
        73810: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-password-success",
                    $testId: "dec-login-password-success",
                    username: "",
                    pwd: "",
                    loginValidity: ""
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.password.success")
                },
                watch: {},
                render: function() {
                    var e = this;
                    return this.options,
                    {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.horizontal_auto",
                                items: [{
                                    type: "bi.icon_label",
                                    cls: "password-success-font",
                                    height: 96,
                                    width: 96
                                }, {
                                    type: "bi.label",
                                    tgap: 5,
                                    text: BI.i18nText("Dec-Login_Change_Password_Success")
                                }, {
                                    el: {
                                        type: "bi.button",
                                        $testId: "dec-login-btn",
                                        cls: "login-button",
                                        text: BI.i18nText("Dec-Login_Now"),
                                        width: 190,
                                        height: 40,
                                        handler: function() {
                                            e._login()
                                        }
                                    },
                                    tgap: 60
                                }, {
                                    type: "bi.label",
                                    cls: "bi-tips",
                                    width: 190,
                                    text: "",
                                    tgap: 15,
                                    textAlign: "left",
                                    ref: function(t) {
                                        e.autoLogin = t
                                    }
                                }]
                            },
                            top: 40,
                            right: 40,
                            bottom: 0,
                            left: 40
                        }]
                    }
                },
                mounted: function() {
                    this._autoLogin()
                },
                _autoLogin: function() {
                    var e = this
                      , t = 0
                      , i = window.setInterval((function() {
                        if (3 === t)
                            return window.clearInterval(i),
                            void e._login();
                        e.autoLogin.setText(3 - t + "s" + BI.i18nText("Dec-Login_Auto_Time")),
                        t++
                    }
                    ), 1e3)
                },
                _login: function() {
                    var e = this
                      , t = this.options;
                    this.store.login({
                        username: t.username,
                        password: BI.Providers.getProvider("dec.provider.cipher").getCipher(t.pwd),
                        validity: t.loginValidity,
                        origin: Dec.Utils.getUrlQuery("origin"),
                        encrypted: !0
                    }, (function(t) {
                        t.data ? e.fireEvent("EVENT_LOGIN", t.data) : BI.Msg.toast(BI.i18nText("Dec-Login_Fail"), {
                            level: "error"
                        })
                    }
                    ))
                }
            }),
            BI.shortcut("dec.login.password.success", e)
        },
        93723: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["propsInfo", "loginInfo"],
                computed: {},
                actions: {
                    login: function(e, t) {
                        Dec.Utils.login(e, t)
                    },
                    tokenLogin: function(e, t) {
                        BI.Services.getService("dec.service.login").useTokenLoginValue(e, this.model.loginInfo.validity, t)
                    }
                }
            }),
            BI.model("dec.model.login.password.success", e)
        },
        87931: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-password-token",
                    $testId: "dec-login-password-token"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.password.success")
                },
                watch: {},
                render: function() {
                    var e = this;
                    return this.options,
                    {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.horizontal_auto",
                                items: [{
                                    type: "bi.icon_label",
                                    cls: "password-success-font",
                                    height: 96,
                                    width: 96
                                }, {
                                    type: "bi.label",
                                    tgap: 5,
                                    text: BI.i18nText("Dec-Login_Change_Password_Success")
                                }, {
                                    el: {
                                        type: "bi.button",
                                        $testId: "dec-login-btn",
                                        cls: "login-button",
                                        text: BI.i18nText("Dec-Login_Now"),
                                        width: 190,
                                        height: 40,
                                        handler: function() {
                                            e._login()
                                        }
                                    },
                                    tgap: 60
                                }, {
                                    type: "bi.label",
                                    cls: "bi-tips",
                                    width: 190,
                                    text: "",
                                    tgap: 15,
                                    textAlign: "left",
                                    ref: function(t) {
                                        e.autoLogin = t
                                    }
                                }]
                            },
                            top: 40,
                            right: 40,
                            bottom: 0,
                            left: 40
                        }]
                    }
                },
                mounted: function() {
                    this._autoLogin()
                },
                _autoLogin: function() {
                    var e = this
                      , t = 0
                      , i = window.setInterval((function() {
                        if (3 === t)
                            return window.clearInterval(i),
                            void e._login();
                        e.autoLogin.setText(3 - t + "s" + BI.i18nText("Dec-Login_Auto_Time")),
                        t++
                    }
                    ), 1e3)
                },
                _login: function() {
                    var e = this;
                    this.store.tokenLogin(this.model.propsInfo.token, (function(t) {
                        t.data ? e.fireEvent("EVENT_LOGIN", t.data) : BI.Msg.toast(BI.i18nText("Dec-Login_Fail"), {
                            level: "error"
                        })
                    }
                    ))
                }
            }),
            BI.shortcut("dec.login.password.token", e)
        },
        46726: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-verify"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.verify")
                },
                watch: {},
                beforeInit: function(e) {
                    this.store.initPage(e)
                },
                render: function() {
                    var e = this;
                    return this.options,
                    {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.horizontal_auto",
                                items: [{
                                    el: {
                                        type: "bi.absolute",
                                        height: 24,
                                        items: [{
                                            el: {
                                                type: "bi.label",
                                                height: 24,
                                                text: BI.i18nText("Dec-Login_Authentication")
                                            },
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0
                                        }, {
                                            el: {
                                                type: "bi.icon_button",
                                                $value: "back",
                                                height: 24,
                                                cls: "login-back-font",
                                                handler: function() {
                                                    e.store.setSelectedTab(DecCst.Login.Tabs.LOGIN)
                                                }
                                            },
                                            top: 0,
                                            left: 0
                                        }]
                                    },
                                    vgap: 28
                                }, {
                                    type: "bi.label",
                                    text: this.model.showDesc,
                                    textAlign: "left",
                                    whiteSpace: "normal",
                                    tgap: 40,
                                    bgap: 30
                                }, {
                                    type: "bi.horizontal_auto",
                                    items: [{
                                        type: "bi.button",
                                        $testId: "dec-login-verify-btn",
                                        cls: "login-button",
                                        text: BI.i18nText("BI-Basic_Sure"),
                                        width: 190,
                                        height: 40,
                                        handler: function() {
                                            e.store.setSelectedTab(DecCst.Login.Tabs.LOGIN)
                                        }
                                    }]
                                }]
                            },
                            top: 0,
                            right: 40,
                            bottom: 0,
                            left: 40
                        }]
                    }
                }
            }),
            BI.shortcut("dec.login.verify", e)
        },
        37730: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                _init: function() {
                    this.loginConfigInfo = Dec.loginConfig || {}
                },
                context: ["loginInfo", "propsInfo", "selectedTab", "verifyConfig"],
                state: function() {
                    return {}
                },
                computed: {
                    supportType: function() {
                        var e = []
                          , t = this.model.verifyConfig;
                        return this.model.propsInfo.isChangePwd ? (t.smsVerificationAfterChangePassword && e.push(DecCst.Login.AuthenticationWay.PHOME),
                        t.emailVerificationAfterChangePassword && e.push(DecCst.Login.AuthenticationWay.EMAIL)) : (t.smsRemind && e.push(DecCst.Login.AuthenticationWay.PHOME),
                        t.emailRemind && e.push(DecCst.Login.AuthenticationWay.EMAIL)),
                        e
                    },
                    openService: function() {
                        return BI.map(this.model.supportType, (function(e, t) {
                            return BI.i18nText(t === DecCst.Login.AuthenticationWay.PHOME ? "Dec-User_Mobile" : "Dec-User_Email")
                        }
                        )).join(BI.i18nText("BI-Basic_Or"))
                    },
                    showDesc: function() {
                        switch (this.model.propsInfo.from) {
                        case DecCst.Login.AuthenticationModule.SINGLE:
                            return BI.i18nText("Dec-Login_Verify_Password_Single_Tip", this.model.openService);
                        case DecCst.Login.AuthenticationModule.LOGIN:
                            return BI.i18nText("Dec-Login_Verify_Tip", this.model.openService);
                        case DecCst.Login.AuthenticationModule.PWD_STRENGTH:
                            return BI.i18nText("Dec-Login_Verify_Password_Strength_Tip", this.model.openService);
                        case DecCst.Login.AuthenticationModule.PWD_UPDATE:
                            return BI.i18nText("Dec-Login_Verify_Password_Update_Tip", this.model.openService);
                        default:
                            return ""
                        }
                    }
                },
                actions: {
                    initPage: function(e) {
                        var t = this;
                        Dec.Utils.loginGetValidationTool(this.model.propsInfo.token, (function(i) {
                            var n = i.data;
                            t._isBind(n, t.model.supportType) ? (t.setPropsInfo({
                                phone: n.mobile,
                                email: n.email,
                                isChangePwd: t.model.propsInfo.isChangePwd,
                                token: t.model.propsInfo.token,
                                from: t.model.propsInfo.from
                            }),
                            t.setSelectedTab(DecCst.Login.Tabs.AUTHENTICATION)) : e()
                        }
                        ))
                    },
                    setSelectedTab: function(e) {
                        this.model.selectedTab = e
                    },
                    setPropsInfo: function(e) {
                        this.model.propsInfo = e
                    }
                },
                _isBind: function(e, t) {
                    return !!e.mobile && BI.contains(t, DecCst.Login.AuthenticationWay.PHOME) || !!e.email && BI.contains(t, DecCst.Login.AuthenticationWay.EMAIL)
                }
            }),
            BI.model("dec.model.login.verify", e)
        },
        87421: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login")
                },
                watch: {},
                render: function() {
                    var e = this
                      , t = this.model.loginConfig;
                    return BI.Services.getService("dec.service.login").initStyles(),
                    {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.center_adapt",
                                cls: "dec-login-background",
                                items: [{
                                    type: "bi.htape",
                                    cls: "login-card",
                                    width: 720,
                                    height: 380,
                                    items: [{
                                        type: "bi.absolute",
                                        $testId: "dec-login-img-background",
                                        cls: "dec-login-img-background",
                                        items: [{
                                            el: {
                                                type: "bi.horizontal_auto",
                                                cls: "dec-login-left-color",
                                                items: [{
                                                    el: {
                                                        type: "bi.center_adapt",
                                                        items: [{
                                                            type: "bi.img",
                                                            src: BI.isEmpty(t.loginLogoImgId) ? DecCst.Web.Login.LogoURL : Dec.fineServletURL + "/login/image/" + t.loginLogoImgId,
                                                            height: 50,
                                                            width: "auto"
                                                        }]
                                                    },
                                                    tgap: 140,
                                                    bgap: 30
                                                }, {
                                                    type: "bi.label",
                                                    cls: "dec-font-weight-bold",
                                                    text: t.loginTitle
                                                }]
                                            },
                                            top: 0,
                                            right: 0,
                                            bottom: 0,
                                            left: 0
                                        }],
                                        ref: function(t) {
                                            e.loginLeft = t
                                        }
                                    }, {
                                        type: "dec.login.index",
                                        cls: "bi-card",
                                        width: 270
                                    }]
                                }]
                            },
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0
                        }, {
                            el: {
                                type: "bi.center_adapt",
                                invisible: !t.copyrightInfoDisplay,
                                items: [{
                                    type: "bi.link",
                                    $testId: "dec-login",
                                    $value: "copyright",
                                    cls: "dec-copyright",
                                    tagName: "span",
                                    text: this.model.systemInfo.loginCopyright,
                                    href: this.model.siteUrl
                                }]
                            },
                            right: 0,
                            bottom: 30,
                            left: 0
                        }]
                    }
                },
                mounted: function() {
                    var e = this.model.loginConfig;
                    e.loginImg && this.loginLeft.element.css("backgroundImage", "url(" + Dec.fineServletURL + "/login/image/" + e.loginImgId + ")")
                }
            }),
            BI.shortcut("dec.login", e)
        },
        77263: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                computed: {
                    loginConfig: function() {
                        return Dec.loginConfig || {}
                    },
                    systemInfo: function() {
                        return Dec.system || {}
                    },
                    siteUrl: function() {
                        var e = this.model.systemInfo.url;
                        return Dec.Utils.isFullURL(e) ? e : "//" + e
                    }
                },
                actions: {}
            }),
            BI.model("dec.model.login", e)
        },
        15272: function() {
            var e = BI.inherit(BI.OB, {
                addLoginInfo: function(e, t) {
                    Dec.Utils.addLastLoginInfo({
                        time: BI.print(BI.getDate(), "%Y-%X-%d %H:%M:%S"),
                        ip: e.ip || "",
                        city: e.provincecity || ""
                    }, t)
                },
                useTokenLoginValue: function(e, t, i) {
                    Dec.Utils.loginTokenLogin({
                        token: e,
                        origin: Dec.Utils.getUrlQuery("origin"),
                        validity: t
                    }, i)
                },
                initStyles: function() {
                    var e;
                    document.title = Dec.loginConfig.loginTitle || BI.i18nText("Dec-Fine_Decision");
                    var t = Dec.loginConfig.loginColor
                      , i = null !== (e = Dec.loginConfig.loginImgAlpha) && void 0 !== e ? e : .7;
                    if (!BI.isEmpty(t)) {
                        var n = {
                            "#wrapper .dec-login-left-color": this._toRGBABackground(t, i),
                            "#wrapper .bi-high-light-border": {
                                "border-color": t,
                                "background-color": t
                            },
                            ".bi-checkbox.active .checkbox-content, .bi-checkbox:active .checkbox-content": {
                                "border-color": t,
                                "background-color": t
                            },
                            "#wrapper .login-button": BI.extend({
                                "border-color": t,
                                background: t
                            }, this._btnShadow(t, .2)),
                            "#wrapper .password-btn": {
                                color: t
                            },
                            "#wrapper .button-common.clear": {
                                color: t
                            },
                            "#wrapper .bi-list-item-active.active, .bi-list-item-active:active": {
                                color: t
                            },
                            "#wrapper .bi-list-item-active.active .b-font:before, .bi-list-item-active:active .b-font:before": {
                                color: t
                            }
                        }
                          , o = {
                            "#wrapper .slider-moving .track-moved": BI.extend({
                                "border-color": t
                            }, this._toRGBABackground(t, .2)),
                            "#wrapper .slider-moving .slider-trigger": {
                                "border-color": t,
                                background: t
                            }
                        }
                          , r = {
                            "#wrapper .login-back-font, #wrapper .login-trigger-font": {
                                color: t
                            },
                            "#wrapper .icon-combo-trigger-icon .b-font, #wrapper .item-icon": {
                                color: t
                            },
                            "#wrapper .password-success-font .b-font:before": {
                                color: t
                            }
                        }
                          , s = ""
                          , a = BI.extend({}, n, r, o);
                        BI.each(a, (function(e, t) {
                            s += e + "{",
                            BI.each(t, (function(e, t) {
                                s += e + ":" + t + ";"
                            }
                            )),
                            s += "} "
                        }
                        )),
                        BI.StyleLoaders.removeStyle("login").loadStyle("login", s)
                    }
                },
                _btnShadow: function(e, t) {
                    var i = this._toRGBAColor(e, t);
                    return {
                        "-webkit-box-shadow": "0 5px 15px 0 " + i + ";",
                        "-moz-box-shadow": "0 5px 15px 0 " + i + ";",
                        "box-shadow": "0 5px 15px 0 " + i + ";"
                    }
                },
                _toRGBAColor: function(e, t) {
                    BI.DOM.isHexColor(e) && (e = BI.DOM.hex2rgb(e));
                    var i = BI.DOM.rgb2json(e);
                    return i.a = t,
                    BI.DOM.json2rgba(i)
                },
                _toRGBABackground: function(e, t) {
                    BI.DOM.isHexColor(e) && (e = BI.DOM.hex2rgb(e));
                    var i = BI.DOM.rgb2json(e)
                      , n = Dec.Utils.rgb2hsv(i);
                    n.s = Math.min(1.5 * n.s, 100),
                    (i = Dec.Utils.hsv2rgb(n)).a = t;
                    var o = BI.DOM.json2rgba(i)
                      , r = Dec.Utils.rgba2argb(o);
                    return {
                        "background-color": BI.isIE9Below() ? "transparent" : o,
                        filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=" + r + ",endColorstr=" + r + ");"
                    }
                }
            });
            BI.service("dec.service.login", e)
        },
        64343: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-slider-image"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.slider.image")
                },
                watch: {
                    imageObj: function(e) {
                        this.bgImg.setSrc(Dec.fineServletURL + "/login/image/" + e.imageId),
                        this.moveBlock.setSrc(Dec.fineServletURL + "/login/image/" + e.moduleId),
                        this.moveBlock.element.css({
                            left: e.modelX,
                            top: e.modelY
                        })
                    },
                    loading: function(e) {
                        this.loadingBar.setVisible(e)
                    }
                },
                render: function() {
                    var e = this;
                    return this.options,
                    {
                        type: "bi.absolute",
                        cls: "bi-card",
                        width: 190,
                        height: 140,
                        items: [{
                            el: {
                                type: "bi.img",
                                height: 117,
                                ref: function(t) {
                                    e.bgImg = t
                                }
                            },
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        }, {
                            el: {
                                type: "bi.img",
                                width: 30,
                                height: 30,
                                ref: function(t) {
                                    e.moveBlock = t
                                }
                            },
                            top: 0,
                            left: 0
                        }, {
                            el: {
                                type: "bi.icon_button",
                                cls: "rollback-font",
                                width: 16,
                                height: 16,
                                handler: function() {
                                    e.fireEvent("EVENT_REFRESH"),
                                    e.refresh()
                                }
                            },
                            top: 10,
                            right: 10
                        }, {
                            el: {
                                type: "bi.center_adapt",
                                invisible: this.model.loadingBar,
                                height: 117,
                                cls: "bi-card bi-border upload-loading-icon",
                                items: [{
                                    type: "bi.vertical",
                                    items: [{
                                        type: "bi.icon",
                                        width: 46,
                                        height: 46
                                    }, {
                                        type: "bi.label",
                                        tgap: 5,
                                        text: BI.i18nText("Dec-Basic_Loading")
                                    }]
                                }],
                                ref: function(t) {
                                    e.loadingBar = t
                                }
                            },
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0
                        }]
                    }
                },
                mounted: function() {
                    BI.isEmptyObject(this.model.imageObj) && this.refresh()
                },
                move: function(e) {
                    this.moveBlock.element.css({
                        left: e
                    })
                },
                refresh: function() {
                    this.store.getImage()
                }
            }),
            BI.shortcut("dec.login.slider.image", e)
        },
        33327: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                context: ["sliderToken", "loading"],
                state: function() {
                    return {
                        imageObj: {}
                    }
                },
                watch: {
                    imageObj: function() {
                        var e = this;
                        BI.delay((function() {
                            e.setLoading(!1)
                        }
                        ), 300)
                    }
                },
                actions: {
                    getImage: function() {
                        var e = this;
                        this.model.loading || (this.model.loading = !0,
                        Dec.Utils.getLoginSliderInfo((function(t) {
                            e.model.imageObj = t,
                            e.model.sliderToken = t.sliderToken
                        }
                        )))
                    },
                    setLoading: function(e) {
                        this.model.loading = e
                    }
                }
            }),
            BI.model("dec.model.login.slider.image", e)
        },
        32557: function() {
            var e, t, i, n;
            e = 0,
            t = 1,
            i = 2,
            n = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-slider",
                    $testId: "dec-login-slider"
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.slider")
                },
                watch: {
                    checkResult: function(n) {
                        var o = this;
                        this.model.ableSlider || n === e || (this.element.removeClass("slider-moving"),
                        this.element.toggleClass("slider-fail", n === i),
                        this.element.toggleClass("slider-success", n === t),
                        this.sliderTrigger.setIcon(n === t ? "login-slider-success-font" : "login-slider-fail-font"),
                        n === i ? (o.fireEvent("EVENT_FAIL"),
                        this.failTimeout = window.setTimeout((function() {
                            o.resetAll()
                        }
                        ), 500)) : o.fireEvent("EVENT_SUCCESS"))
                    }
                },
                render: function() {
                    var e = this;
                    return this.options,
                    this.moving = !1,
                    {
                        type: "bi.absolute",
                        width: 190,
                        height: 166,
                        items: [{
                            el: {
                                type: "bi.icon_button",
                                cls: "close-font",
                                width: 24,
                                height: 24,
                                handler: function() {
                                    e._close()
                                }
                            },
                            right: 0,
                            top: -24
                        }, {
                            el: {
                                type: "bi.vertical",
                                cls: "bi-card",
                                width: 190,
                                items: [{
                                    type: "dec.login.slider.image",
                                    cls: "slider-img",
                                    ref: function(t) {
                                        e.sliderImg = t
                                    },
                                    listeners: [{
                                        eventName: "EVENT_REFRESH",
                                        action: function() {
                                            e.resetAll()
                                        }
                                    }]
                                }, {
                                    type: "bi.absolute",
                                    width: 190,
                                    height: 26,
                                    items: [{
                                        el: {
                                            type: "bi.label",
                                            cls: "bi-border slider-track",
                                            textHeight: 24,
                                            text: BI.i18nText("Dec-Login_To_Slider"),
                                            ref: function(t) {
                                                e.track = t
                                            }
                                        },
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0
                                    }, {
                                        el: {
                                            type: "bi.default",
                                            cls: "track-moved",
                                            width: 0,
                                            ref: function(t) {
                                                e.movedTrack = t
                                            }
                                        },
                                        top: 0,
                                        bottom: 0,
                                        left: 0
                                    }, {
                                        el: {
                                            type: "bi.icon_change_button",
                                            cls: "bi-border slider-trigger",
                                            iconCls: "login-slider-trigger-font",
                                            width: 30,
                                            height: 24,
                                            ref: function(t) {
                                                e.sliderTrigger = t
                                            }
                                        },
                                        left: 0,
                                        top: 0
                                    }]
                                }]
                            },
                            bottom: 0,
                            left: 0,
                            right: 0
                        }]
                    }
                },
                mounted: function() {
                    this._slider(),
                    this.element.focus()
                },
                resetAll: function() {
                    this.sliderImg.refresh(),
                    this.sliderTrigger.element.css({
                        left: 0
                    }),
                    this.element.removeClass("slider-fail"),
                    this.element.removeClass("slider-success"),
                    this.sliderTrigger.setIcon("login-slider-trigger-font"),
                    this.movedTrack.element.css({
                        width: 0
                    }),
                    window.clearTimeout(this.failTimeout),
                    this.store.reset(),
                    this.track.setText(BI.i18nText("Dec-Login_To_Slider"))
                },
                _close: function() {
                    this.fireEvent("EVENT_CLOSE")
                },
                _slider: function() {
                    var e = this
                      , t = {
                        x: 0,
                        y: 0
                    }
                      , i = !1
                      , n = this.sliderTrigger.element
                      , o = this.movedTrack.element;
                    n.mousedown((function(n) {
                        e.model.startSlider && (i = !0,
                        t = {
                            x: n.pageX,
                            y: n.pageY
                        })
                    }
                    )),
                    $(document).mousemove((function(r) {
                        var s = r.pageX - t.x;
                        i && s > 0 && s <= 160 && (e.moving = !0,
                        e.element.addClass("slider-moving"),
                        n.css({
                            left: s
                        }),
                        o.css({
                            width: s
                        }),
                        e.track.setText(""),
                        e.sliderImg.move(s))
                    }
                    )).mouseup((function(n) {
                        if (i) {
                            i = !1;
                            var o = n.pageX - t.x;
                            e.store.checkPosition(o)
                        }
                        e.moving = !1
                    }
                    ))
                }
            }),
            BI.shortcut("dec.login.slider", n)
        },
        73218: function() {
            var e, t, i, n;
            e = 0,
            t = 1,
            i = 2,
            n = BI.inherit(Fix.Model, {
                context: ["sliderToken"],
                childContext: ["loading"],
                state: function() {
                    return {
                        checkResult: e,
                        ableSlider: !0,
                        loading: !1
                    }
                },
                computed: {
                    startSlider: function() {
                        return !this.model.loading && this.model.ableSlider
                    }
                },
                actions: {
                    checkPosition: function(e) {
                        var n = this;
                        n.model.ableSlider = !1,
                        e <= 0 ? n.model.checkResult = i : Dec.Utils.checkSliderPosition({
                            sliderToken: this.model.sliderToken,
                            sliderLength: BI.parseInt(e)
                        }, (function(e) {
                            n.model.checkResult = e.data ? t : i
                        }
                        ))
                    },
                    setAbleSlider: function(e) {
                        this.model.ableSlider = e
                    },
                    setStatus: function(e) {
                        this.model.checkResult = e
                    },
                    reset: function() {
                        this.setAbleSlider(!0),
                        this.setStatus(e)
                    }
                }
            }),
            BI.model("dec.model.login.slider", n)
        },
        82482: function() {
            Dec.start = function() {
                BI.createWidget({
                    type: "dec.login",
                    element: "#wrapper"
                })
            }
            ,
            Dec.single = Dec.single || Dec.start
        },
        82187: function() {
            DecCst = DecCst || {},
            DecCst.Login = DecCst.Login || {},
            DecCst.Login.Tabs = {},
            DecCst.Login.Tabs.LOGIN = "login",
            DecCst.Login.Tabs.FORGET_PASSWORD = "forget",
            DecCst.Login.Tabs.AUTHENTICATION = "authentication",
            DecCst.Login.Tabs.PASSWORD_TOKEN = "password",
            DecCst.Login.Tabs.PASSWORD_OLD = "single",
            DecCst.Login.Tabs.SUCCESS_PWD = "password.success",
            DecCst.Login.Tabs.SUCCESS_TOKEN = "password.token",
            DecCst.Login.Tabs.VERIFY_BING = "verify",
            DecCst.Login.Tabs.LOCKED = "locked",
            DecCst.Login.AuthenticationWay = {},
            DecCst.Login.AuthenticationWay.PHOME = "mobile",
            DecCst.Login.AuthenticationWay.EMAIL = "email",
            DecCst.Login.AuthenticationModule = {},
            DecCst.Login.AuthenticationModule.PWD_UPDATE = "update",
            DecCst.Login.AuthenticationModule.PWD_STRENGTH = "strength",
            DecCst.Login.AuthenticationModule.LOGIN = "login",
            DecCst.Login.AuthenticationModule.SINGLE = "single",
            DecCst.Login.ForgetPassword = {},
            DecCst.Login.ForgetPassword.VERIFICATION = 1,
            DecCst.Login.ForgetPassword.PASSWORD = 2,
            DecCst.Login.ForgetPassword.FORBID = 3
        },
        80255: function() {
            Dec.Utils = Dec.Utils || {},
            BI.extend(Dec.Utils, {
                loginConfig: function(e) {
                    Dec.reqGetHandle("/login/config", {}, e)
                },
                getSystemInfo: function(e) {
                    Dec.reqGetHandle("/system/info", {}, e)
                },
                login: function(e, t) {
                    Dec.reqPost("/login", e, t)
                },
                loginTokenLogin: function(e, t) {
                    Dec.reqPost("/login/captcha", e, t)
                },
                loginChangePassword: function(e, t) {
                    Dec.reqPost("/login/pwd/change", e, t)
                },
                updateLoginPassword: function(e, t) {
                    Dec.reqPut("/login/pwd/resetting", e, t)
                },
                getUsernamesByToken: function(e, t) {
                    Dec.reqPost("/login/usernames", e, t)
                },
                loginCaptcha: function(e, t) {
                    Dec.reqPost("/login/captcha/gain", e, t)
                },
                loginGetValidationTool: function(e, t) {
                    Dec.reqPost("/login/validation/tool", {
                        token: e
                    }, t)
                },
                loginAuthentication: function(e, t) {
                    Dec.reqPut("/login/captcha", e, t)
                },
                getIPInfo: function(e, t) {
                    Dec.jsonpAjax(e, t)
                },
                addLastLoginInfo: function(e, t) {
                    Dec.reqTokenPost("/login/info", e, "", t)
                },
                getLoginSliderInfo: function(e) {
                    Dec.reqGetHandle("/login/slider/info", {}, e)
                },
                checkSliderPosition: function(e, t) {
                    Dec.reqPost("/login/slider/verification", e, t)
                },
                getLoginPasswordStrategy: function(e) {
                    Dec.reqGetHandle("/login/password/strategy", {}, e)
                },
                checkUserExistByReceiver: function(e, t) {
                    Dec.reqPost("/login/receiver/exist", e, t)
                }
            })
        },
        98801: function() {
            BI.extend(Dec, {
                asyncAjax: function(e) {
                    e = e || {};
                    var t = Dec.fineServletURL + e.url;
                    $.support.cors = !0,
                    $.ajax({
                        url: t,
                        type: e.type,
                        headers: e.headers,
                        contentType: "application/json",
                        data: "GET" === e.type ? null : JSON.stringify(e.data),
                        dataType: "json",
                        cache: !1,
                        async: !0,
                        error: function() {
                            BI.Msg.toast("ajax error !", {
                                level: "warning"
                            })
                        },
                        complete: function(t, i) {
                            var n = BI.jsonDecode(t.responseText);
                            "success" === i && BI.isFunction(e.success) && e.success(n),
                            BI.isFunction(e.complete) && e.complete(n, i)
                        }
                    })
                },
                doActionByForm: function(e, t, i) {
                    var n = {
                        method: (i = i || {}).method,
                        url: e,
                        data: t,
                        target: i.target
                    }
                      , o = $('<form method="' + n.method + '" />');
                    for (var r in o.attr("action", n.url),
                    o.attr("method", n.method || "post"),
                    o.attr("target", n.target || "_self"),
                    n.data)
                        o.append('<input type="hidden" name="' + r + '" value="' + n.data[r] + '" />');
                    $(document.body).append(o),
                    o[0].submit(),
                    o.destroy()
                },
                jsonpAjax: function(e, t) {
                    $.ajax({
                        url: e,
                        async: !0,
                        dataType: "JSONP"
                    }).done((function(e) {
                        BI.isFunction(t) && t(e)
                    }
                    ))
                },
                reqGet: function(e, t, i, n) {
                    Dec.asyncAjax({
                        url: e,
                        type: "GET",
                        data: t,
                        success: i,
                        complete: n
                    })
                },
                reqPost: function(e, t, i, n) {
                    Dec.asyncAjax({
                        url: e,
                        type: "POST",
                        data: t,
                        success: i,
                        complete: n
                    })
                },
                reqPut: function(e, t, i, n) {
                    Dec.asyncAjax({
                        url: e,
                        type: "PUT",
                        data: t,
                        success: i,
                        complete: n
                    })
                },
                reqTokenPost: function(e, t, i, n) {
                    Dec.asyncAjax({
                        url: e,
                        type: "POST",
                        headers: {
                            Authorization: "Bearer " + BI.Cache.getCookie(DecCst.Cookie.TOKEN)
                        },
                        data: t,
                        success: i,
                        complete: n
                    })
                },
                reqGetHandle: function(e, t, i, n) {
                    Dec.asyncAjax({
                        url: e,
                        type: "GET",
                        data: t,
                        success: function(e) {
                            void 0 !== e.data && BI.isFunction(i) ? i(e.data) : BI.Msg.toast(BI.i18nText("Dec-Basic_Ajax_Request_Fail"), {
                                level: "error"
                            })
                        },
                        complete: n
                    })
                }
            })
        },
        51204: function() {
            Dec.Utils = Dec.Utils || {},
            BI.extend(Dec.Utils, {
                rgba2argb: function(e) {
                    var t = BI.DOM.rgba2json(e)
                      , i = BI.DOM.int2hex;
                    return "#" + i(Math.round(255 * t.a)) + i(t.r) + i(t.g) + i(t.b)
                },
                rgb2hsv: function(e) {
                    var t, i, n = e.r / 255, o = e.g / 255, r = e.b / 255, s = Math.max(n, o, r), a = Math.min(n, o, r), c = s, l = s - a;
                    if (i = 0 === s ? 0 : l / s,
                    s === a)
                        t = 0;
                    else {
                        switch (s) {
                        case n:
                            t = (o - r) / l + (o < r ? 6 : 0);
                            break;
                        case o:
                            t = (r - n) / l + 2;
                            break;
                        case r:
                            t = (n - o) / l + 4
                        }
                        t /= 6
                    }
                    return {
                        h: (360 * t).toFixed(2),
                        s: (100 * i).toFixed(2),
                        v: (100 * c).toFixed(2)
                    }
                },
                hsv2rgb: function(e) {
                    var t, i, n = e.h % 360 / 360 * 360, o = e.s / 100, r = e.v / 100, s = [r, r * (1 - o), r * (1 - (i = n / 60 - (t = Math.floor(n / 60 % 6))) * o), r * (1 - (1 - i) * o)], a = [[0, 3, 1], [2, 0, 1], [1, 0, 3], [1, 2, 0], [3, 1, 0], [0, 1, 2]];
                    return {
                        r: Math.round(255 * s[a[t][0]]),
                        g: Math.round(255 * s[a[t][1]]),
                        b: Math.round(255 * s[a[t][2]])
                    }
                }
            })
        },
        42837: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "bi-icon-combo",
                    $testId: "bi-icon-combo",
                    width: 28,
                    height: 24,
                    el: {},
                    popup: {},
                    minWidth: 100,
                    maxWidth: "auto",
                    maxHeight: 300,
                    direction: "bottom",
                    adjustLength: 3,
                    adjustXOffset: 0,
                    adjustYOffset: 0,
                    offsetStyle: "left",
                    chooseType: BI.ButtonGroup.CHOOSE_TYPE_SINGLE
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    return this.trigger = BI.createWidget(i.el, {
                        type: "dec.icon_combo_trigger",
                        iconCls: i.iconCls,
                        title: i.title,
                        items: i.items,
                        width: i.width,
                        height: i.height,
                        iconWidth: i.iconWidth,
                        iconHeight: i.iconHeight,
                        value: i.value
                    }),
                    this.popup = BI.createWidget(i.popup, {
                        type: "bi.icon_combo_popup",
                        chooseType: i.chooseType,
                        items: i.items,
                        value: i.value,
                        listeners: [{
                            eventName: BI.IconComboPopup.EVENT_CHANGE,
                            action: function() {
                                t.setValue(t.popup.getValue()),
                                t.iconCombo.hideView(),
                                t.fireEvent(e.EVENT_CHANGE)
                            }
                        }]
                    }),
                    {
                        type: "bi.combo",
                        direction: i.direction,
                        trigger: i.trigger,
                        container: i.container,
                        adjustLength: i.adjustLength,
                        adjustXOffset: i.adjustXOffset,
                        adjustYOffset: i.adjustYOffset,
                        offsetStyle: i.offsetStyle,
                        el: this.trigger,
                        popup: {
                            el: this.popup,
                            maxWidth: i.maxWidth,
                            maxHeight: i.maxHeight,
                            minWidth: i.minWidth
                        },
                        ref: function(e) {
                            t.iconCombo = e
                        }
                    }
                },
                showView: function() {
                    this.iconCombo.showView()
                },
                hideView: function() {
                    this.iconCombo.hideView()
                },
                setValue: function(e) {
                    this.trigger.setValue(e),
                    this.popup.setValue(e)
                },
                getValue: function() {
                    var e = this.popup.getValue();
                    return BI.isNull(e) ? [] : BI.isArray(e) ? e : [e]
                },
                populate: function(e) {
                    this.options.items = e,
                    this.iconCombo.populate(e)
                }
            })).EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.icon_combo", e)
        },
        82958: function() {
            var e;
            e = BI.inherit(BI.Trigger, {
                props: {
                    extraCls: "bi-icon-combo-trigger",
                    el: {},
                    items: [],
                    iconCls: "",
                    width: 28,
                    height: 24,
                    isShowDown: !0,
                    value: ""
                },
                render: function() {
                    var e = this.options
                      , t = this
                      , i = "";
                    return BI.isKey(e.value) && (i = this._digest(e.value, e.items)),
                    {
                        type: "bi.absolute",
                        items: [{
                            el: {
                                type: "bi.icon_change_button",
                                cls: "icon-combo-trigger-icon",
                                iconCls: i,
                                disableSelected: !0,
                                width: e.width - 10,
                                height: e.height,
                                iconWidth: e.iconWidth,
                                iconHeight: e.iconHeight,
                                selected: BI.isNotEmptyString(i),
                                ref: function(e) {
                                    t.button = e
                                }
                            },
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, {
                            el: {
                                type: "bi.icon_button",
                                disableSelected: !0,
                                cls: "icon-combo-down-icon login-trigger-font",
                                width: 10,
                                height: 10,
                                invisible: !e.isShowDown,
                                selected: BI.isNotEmptyString(i),
                                ref: function(e) {
                                    t.down = e
                                }
                            },
                            right: 0,
                            bottom: 0
                        }]
                    }
                },
                _digest: function(e, t) {
                    var i = "";
                    return e = BI.isArray(e) ? e[0] : e,
                    BI.any(t, (function(t, n) {
                        if (e === n.value)
                            return i = n.iconCls,
                            !0
                    }
                    )),
                    i
                },
                populate: function(e) {
                    var t = this.options;
                    this.options.items = e || [],
                    this.button.setIcon(t.iconCls),
                    this.button.setSelected(!1),
                    this.down.setSelected(!1)
                },
                setValue: function(e) {
                    var t = this.options;
                    e = BI.isArray(e) ? e[0] : e;
                    var i = this._digest(e, this.options.items);
                    BI.isNotEmptyString(i) ? (this.button.setIcon(i),
                    this.button.setSelected(!0),
                    this.down.setSelected(!0)) : (this.button.setIcon(t.iconCls),
                    this.button.setSelected(!1),
                    this.down.setSelected(!1))
                }
            }),
            BI.shortcut("dec.icon_combo_trigger", e)
        },
        31918: function() {
            var e;
            (e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-icon-text-combo",
                    $testId: "dec-login-icon-text-combo",
                    minWidth: 100,
                    maxWidth: "auto",
                    maxHeight: 300,
                    direction: "bottom",
                    adjustLength: 3
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    return {
                        type: "bi.combo",
                        direction: i.direction,
                        trigger: i.trigger,
                        container: i.container,
                        adjustLength: i.adjustLength,
                        el: {
                            type: "dec.login.icon.text.trigger",
                            text: i.text,
                            items: i.items,
                            value: i.value,
                            ref: function(e) {
                                t.trigger = e
                            }
                        },
                        popup: {
                            el: {
                                type: "bi.icon_combo_popup",
                                chooseType: BI.ButtonGroup.CHOOSE_TYPE_SINGLE,
                                items: BI.map(i.items, (function(e, t) {
                                    return BI.extend({
                                        iconWrapperWidth: 36,
                                        height: 28,
                                        $testId: "dec-login-icon-text-combo-item",
                                        $value: t.value
                                    }, t)
                                }
                                )),
                                value: i.value,
                                listeners: [{
                                    eventName: BI.IconComboPopup.EVENT_CHANGE,
                                    action: function() {
                                        t.setValue(t.popup.getValue()[0]),
                                        t.iconCombo.hideView(),
                                        t.fireEvent(e.EVENT_CHANGE)
                                    }
                                }],
                                ref: function(e) {
                                    t.popup = e
                                }
                            },
                            maxWidth: i.maxWidth,
                            maxHeight: i.maxHeight,
                            minWidth: i.minWidth
                        },
                        ref: function(e) {
                            t.iconCombo = e
                        }
                    }
                },
                setValue: function(e) {
                    this.trigger.setValue(e),
                    this.popup.setValue(e)
                },
                getValue: function() {
                    return this.popup ? this.popup.getValue()[0] : ""
                }
            })).EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.login.icon.text.combo", e)
        },
        42583: function() {
            var e;
            e = BI.inherit(BI.Trigger, {
                props: {
                    extraCls: "dec-login-icon-text-trigger",
                    $testId: "dec-login-icon-text-trigger",
                    items: [],
                    value: "",
                    text: ""
                },
                render: function() {
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.htape",
                        height: 36,
                        items: [{
                            type: "bi.icon_change_button",
                            cls: "icon-combo-trigger-icon",
                            width: 16,
                            iconCls: this._digest(t.value).iconCls,
                            ref: function(t) {
                                e.button = t
                            }
                        }, {
                            el: {
                                type: "bi.label",
                                cls: "bi-tips",
                                $testId: "dec-login-authentication-receiver",
                                textAlign: "left",
                                text: t.text,
                                ref: function(t) {
                                    e.text = t
                                }
                            },
                            lgap: 10
                        }, {
                            type: "bi.trigger_icon_button",
                            cls: "trigger-btn",
                            width: 16
                        }]
                    }
                },
                _digest: function(e) {
                    return BI.find(this.options.items, (function(t, i) {
                        return e === i.value
                    }
                    )) || {}
                },
                setValue: function(e) {
                    var t = this._digest(e);
                    this.button.setIcon(t.iconCls),
                    this.text.setText(t.text)
                }
            }),
            BI.shortcut("dec.login.icon.text.trigger", e)
        },
        76214: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseClass: "bi-text-value-combo",
                    $testId: "bi-text-value-combo",
                    height: 30,
                    chooseType: BI.ButtonGroup.CHOOSE_TYPE_SINGLE,
                    text: "",
                    value: ""
                },
                render: function() {
                    var t = this
                      , i = this.options;
                    return {
                        type: "bi.combo",
                        adjustLength: 0,
                        el: {
                            type: "dec.login.icon_select_text_trigger",
                            items: i.items,
                            height: i.height,
                            text: i.text,
                            value: i.value,
                            ref: function(e) {
                                t.trigger = e
                            }
                        },
                        popup: {
                            el: {
                                type: "bi.text_value_combo_popup",
                                chooseType: i.chooseType,
                                value: i.value,
                                items: i.items,
                                listeners: [{
                                    eventName: "EVENT_CHANGE",
                                    action: function() {
                                        t.setValue(t.popup.getValue()),
                                        t.textIconCombo.hideView(),
                                        t.fireEvent(e.EVENT_CHANGE, arguments)
                                    }
                                }],
                                ref: function(e) {
                                    t.popup = e
                                }
                            },
                            maxHeight: 300
                        },
                        ref: function(e) {
                            t.textIconCombo = e
                        },
                        listeners: [{
                            eventName: BI.Combo.EVENT_BEFORE_POPUPVIEW,
                            action: function() {
                                t.trigger.setIsPopup(!0)
                            }
                        }, {
                            eventName: BI.Combo.EVENT_AFTER_HIDEVIEW,
                            action: function() {
                                t.trigger.setIsPopup(!1)
                            }
                        }]
                    }
                },
                setValue: function(e) {
                    this.trigger.setValue(e),
                    this.popup.setValue(e)
                },
                getValue: function() {
                    var e = this.popup.getValue();
                    return BI.isNull(e) ? [] : BI.isArray(e) ? e : [e]
                },
                populate: function(e) {
                    this.options.items = e,
                    this.textIconCombo.populate(e)
                }
            }),
            e.EVENT_CHANGE = "EVENT_CHANGE",
            BI.shortcut("dec.login.text_value_combo", e)
        },
        10755: function() {
            var e;
            e = BI.inherit(BI.Trigger, {
                props: {
                    baseCls: "bi-select-text-trigger dec-icon-select-text-trigger",
                    height: 24
                },
                render: function() {
                    this.options.height -= 2;
                    var e = this
                      , t = this.options;
                    return {
                        type: "bi.htape",
                        cls: "bi-border-bottom",
                        items: [{
                            type: "bi.center_adapt",
                            width: 16,
                            cls: "item-icon login-username-font",
                            items: [{
                                type: "bi.icon"
                            }]
                        }, {
                            type: "bi.label",
                            textAlign: "left",
                            height: t.height,
                            text: t.text,
                            title: function() {
                                return e.text.getText()
                            },
                            rgap: 4,
                            lgap: 6,
                            readonly: t.readonly,
                            ref: function(t) {
                                e.text = t
                            }
                        }, {
                            type: "bi.center_adapt",
                            width: 16,
                            cls: "trigger",
                            items: [{
                                type: "bi.icon_change_button",
                                iconCls: "pull-down-font",
                                forceNotSelected: !0,
                                ref: function(t) {
                                    e.iconChangeButton = t
                                }
                            }]
                        }]
                    }
                },
                _digest: function(e, t) {
                    var i = this.options;
                    e = BI.isArray(e) ? e : [e];
                    var n = []
                      , o = BI.Tree.transformToArrayFormat(t);
                    return BI.each(o, (function(t, i) {
                        BI.deepContains(e, i.value) && !BI.contains(n, i.text || i.value) && n.push(i.text || i.value)
                    }
                    )),
                    n.length > 0 ? n.join(",") : i.text
                },
                setValue: function(e) {
                    this.text.setText(this._digest(e, this.options.items))
                },
                setIsPopup: function(e) {
                    var t = e ? "pull-up-font" : "pull-down-font";
                    this.iconChangeButton.setIcon(t)
                },
                populate: function(e) {
                    this.options.items = e
                }
            }),
            BI.shortcut("dec.login.icon_select_text_trigger", e)
        },
        76200: function() {
            var e;
            e = BI.inherit(BI.Widget, {
                props: {
                    baseCls: "dec-login-item",
                    errorText: "",
                    watermark: "",
                    value: "",
                    items: [],
                    selectedType: DecCst.Login.AuthenticationWay.PHOME
                },
                _store: function() {
                    return BI.Models.getModel("dec.model.login.verification.way.item", this.options)
                },
                watch: {
                    selectedType: function(e) {
                        this.tab.setSelect(e)
                    }
                },
                render: function() {
                    var e = this
                      , t = this.options
                      , i = t.items.length > 1;
                    return {
                        type: "bi.vertical",
                        items: [{
                            type: "bi.htape",
                            height: 36,
                            items: [{
                                type: "bi.center_adapt",
                                width: i ? 24 : 16,
                                items: [{
                                    type: "dec.icon_combo",
                                    invisible: !i,
                                    $value: "login-item",
                                    value: t.selectedType,
                                    height: 24,
                                    width: 24,
                                    items: t.items,
                                    listeners: [{
                                        eventName: BI.IconCombo.EVENT_CHANGE,
                                        action: function() {
                                            e._changeType(this.getValue()[0])
                                        }
                                    }]
                                }, {
                                    type: "bi.center_adapt",
                                    $value: "login-one-item",
                                    invisible: i,
                                    cls: "item-icon " + t.items[0].iconCls,
                                    items: [{
                                        type: "bi.icon",
                                        width: 16
                                    }]
                                }]
                            }, {
                                el: {
                                    type: "bi.tab",
                                    showIndex: t.selectedType,
                                    cardCreator: BI.bind(this._createCard, this),
                                    ref: function(t) {
                                        e.tab = t
                                    }
                                },
                                lgap: i ? 0 : 8
                            }]
                        }, {
                            type: "bi.label",
                            cls: "bi-border-top",
                            text: "",
                            height: 24,
                            ref: function(t) {
                                e.lineRow = t
                            }
                        }, {
                            type: "bi.label",
                            cls: "bi-border-top error",
                            invisible: !0,
                            height: 24,
                            textAlign: "left",
                            text: t.errorText,
                            ref: function(t) {
                                e.errorRow = t
                            }
                        }]
                    }
                },
                showError: function(e) {
                    this.focus(),
                    this.showErrorText(e)
                },
                showErrorText: function(e) {
                    this.errorRow.visible(),
                    this.errorRow.setText(e),
                    this.lineRow.invisible()
                },
                hideError: function() {
                    this.errorRow.invisible(),
                    this.errorRow.setText(""),
                    this.lineRow.visible()
                },
                getValue: function() {
                    return {
                        receiver: this.tab.getValue(),
                        type: this.model.selectedType
                    }
                },
                focus: function() {
                    this.tab.getSelectedTab().focus()
                },
                _changeType: function(e) {
                    this.store.changeType(e),
                    this.fireEvent("EVENT_TYPE", e)
                },
                _createCard: function(e) {
                    var t = this
                      , i = this.options
                      , n = BI.find(i.items, (function(t, i) {
                        return i.value === e
                    }
                    ));
                    return n ? BI.extend({
                        type: "bi.editor",
                        $value: "dec-login-verification-way-item-" + e,
                        height: 36,
                        value: i.value,
                        allowBlank: !0,
                        listeners: [{
                            eventName: BI.Editor.EVENT_FOCUS,
                            action: function() {
                                t.hideError()
                            }
                        }, {
                            eventName: BI.Editor.EVENT_BLUR,
                            action: function() {
                                t.fireEvent(BI.Editor.EVENT_BLUR, arguments)
                            }
                        }, {
                            eventName: BI.Editor.EVENT_CHANGE,
                            action: function() {
                                t.hideError()
                            }
                        }]
                    }, n.editor) : {
                        type: "bi.label",
                        text: e
                    }
                }
            }),
            BI.shortcut("dec.login.verification.way.item", e)
        },
        43185: function() {
            var e;
            e = BI.inherit(Fix.Model, {
                state: function() {
                    return {
                        selectedType: this.options.selectedType
                    }
                },
                computed: {},
                actions: {
                    changeType: function(e) {
                        this.model.selectedType = e
                    }
                }
            }),
            BI.model("dec.model.login.verification.way.item", e)
        },
        60782: function() {
            !function() {
                var e = "dec.constant.management.navigation";
                Dec.Plugin = Dec.Plugin || {},
                BI.extend(Dec.Plugin, {
                    getMenus: function() {
                        return BI.Providers.getProvider("dec.provider.frame.menu").getFrameMenus()
                    },
                    getManagementModules: function(e) {
                        BI.isEmpty(Dec.decisionModules) ? Dec.Utils.getDecisionModules((function(t) {
                            e(t.data)
                        }
                        )) : e(Dec.decisionModules)
                    },
                    getEntriesByPid: function(e, t) {
                        Dec.Utils.getWorkbenchSubDirectoryById(e, t)
                    }
                }),
                BI.extend(Dec.Plugin, {
                    workbench: {
                        hideSlideBar: function() {
                            BI.Services.getService("dec.service.workbench").hideSlideBar()
                        }
                    }
                }),
                BI.extend(Dec.Plugin, {
                    tabPane: {
                        closeActiveTab: function() {
                            BI.Services.getService("dec.service.frame.tab_pane").closeActiveTab()
                        },
                        closeTab: function(e) {
                            BI.Services.getService("dec.service.frame.tab_pane").closeTab(e)
                        },
                        addItem: function(e, t, i) {
                            BI.Services.getService("dec.service.frame.tab_pane").addItem({
                                text: e,
                                id: e,
                                cardType: i
                            })
                        },
                        openTab: function(e) {
                            BI.Services.getService("dec.service.frame.tab_pane").addItem(e)
                        }
                    }
                }),
                BI.extend(Dec.Plugin, {
                    Management: {
                        config: function(t) {
                            return BI.config(e, t)
                        },
                        addItem: function(t) {
                            BI.config(e, (function(e) {
                                return BI.concat(e, [BI.extend(t, {
                                    text: t.displayName || t.text,
                                    id: t.id || t.value,
                                    value: t.value || t.value,
                                    cardType: t.cardType,
                                    cls: t.cls
                                })])
                            }
                            ))
                        }
                    }
                }),
                BI.extend(Dec.Plugin, {
                    Menus: {
                        config: function(t) {
                            return BI.config(e, t)
                        },
                        addItem: function(e) {
                            BI.config("dec.constant.menu.items", (function(t) {
                                return t.push(e),
                                t
                            }
                            ))
                        }
                    }
                }),
                window.FS = window.FS || {},
                FS.tabPane = {
                    closeActiveTab: function() {
                        Dec.Plugin.tabPane.closeActiveTab()
                    },
                    addItem: function(e) {
                        var i = t(e.src);
                        try {
                            i = decodeURI(i)
                        } catch (e) {}
                        Dec.Plugin.tabPane.addItem(e.title, e.title, {
                            src: encodeURI(i)
                        })
                    }
                },
                Dec.Logout = function() {
                    Dec.Utils.logout((function(e) {
                        Dec.Utils.clearLoginToken(),
                        window.location.href = e
                    }
                    ))
                }
                ,
                FS.signOut = function() {
                    Dec.Logout()
                }
                ;
                var t = function(e) {
                    var t = "";
                    switch (Dec.Utils.distinguishTemplateType(e)) {
                    case "cpt":
                        t = "report";
                        break;
                    case "frm":
                        t = "form"
                    }
                    return e.replace(/^\?reportlet=/, Dec.fineServletURL + "/view/" + t + "?viewlet=")
                }
            }()
        },
        51356: function() {
            DecCst = DecCst || {},
            DecCst.POINT = {}
        },
        86570: function() {
            Dec.Utils = Dec.Utils || {},
            BI.extend(Dec.Utils, {
                saveFocusPoint: function(e) {
                    e = BI.extend({
                        source: 1,
                        token: BI.Cache.getCookie(DecCst.Cookie.TOKEN)
                    }, e),
                    Dec.socket && Dec.socket.emit("focusPoint", e)
                }
            })
        },
        42835: function() {
            var e, t, i;
            e = [],
            t = {},
            i = BI.inherit(BI.OB, {
                inject: function(i) {
                    e = BI.concat(e, i.routes || []),
                    BI.extend(t, i.enterCheckers || {})
                },
                $get: function() {
                    return BI.inherit(BI.OB, {
                        init: function() {
                            this.routeMap = {
                                routes: {
                                    "": "index",
                                    index: "index",
                                    directory: "directory",
                                    "management/:id": "management_id",
                                    "management/:id/:subId": "management_id_subId",
                                    management: "management"
                                },
                                index: function() {
                                    Dec.globleModel.selectedMenu = "directory"
                                },
                                management_id: function(e) {
                                    Dec.globleModel.selectedManageNav = e,
                                    Dec.globleModel.selectedMenu = "management"
                                },
                                management_id_subId: function(e, t) {
                                    Dec.systemManage.activeTab = t,
                                    Dec.globleModel.selectedManageNav = e,
                                    Dec.globleModel.selectedMenu = "management"
                                },
                                management: function() {
                                    Dec.globleModel.selectedManageNav = "common",
                                    Dec.globleModel.selectedMenu = "management"
                                },
                                directory: function() {
                                    Dec.globleModel.selectedMenu = "directory"
                                }
                            }
                        },
                        createRouter: function() {
                            this._initDefaultRoutes(),
                            this._initMenuRoutes();
                            var e = BI.inherit(BI.Router, this.routeMap)
                              , t = this.router = new e;
                            return BI.history.start(),
                            t
                        },
                        addRoutes: function(e) {
                            var t = this;
                            this.router ? BI.each(e, (function(e, i) {
                                t.router.route(i.key, i.value, i.handler)
                            }
                            )) : this._addRoutes(e)
                        },
                        checkHashAuthority: function(e) {
                            var i = e || BI.history.getFragment()
                              , n = !1;
                            return BI.some(t, (function(e, t) {
                                if (t.regex.test(i))
                                    return n = t.enterChecker(i),
                                    !0
                            }
                            )) || (n = BI.Services.getService("dec.service.main").checkHashAuthority()),
                            n
                        },
                        _initDefaultRoutes: function() {
                            this._addRoutes(e)
                        },
                        _initMenuRoutes: function() {
                            var e = this;
                            BI.each(BI.Providers.getProvider("dec.provider.frame.menu").getFrameMenus(), (function(t, i) {
                                e.routeMap.routes[i.value] || (e.routeMap.routes[i.value] = i.value,
                                e.routeMap[i.value] = function() {
                                    Dec.globleModel.selectedMenu = i.value
                                }
                                )
                            }
                            ))
                        },
                        _addRoutes: function(e) {
                            var i = this;
                            BI.each(e, (function(e, n) {
                                i.routeMap.routes[n.key] || (i.routeMap.routes[n.key] = n.value,
                                i.routeMap[n.value] = n.handler,
                                n.enterChecker && (t[n.key] = n.enterChecker))
                            }
                            ))
                        }
                    })
                }
            }),
            BI.provider("dec.provider.router", i)
        },
        24654: function() {}
    }
      , t = {};
    function i(n) {
        var o = t[n];
        if (void 0 !== o)
            return o.exports;
        var r = t[n] = {
            exports: {}
        };
        return e[n](r, r.exports, i),
        r.exports
    }
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i(3911),
    i(48776),
    i(74438),
    i(11195),
    i(89775),
    i(10817),
    i(61595),
    i(37729),
    i(23823),
    i(41338),
    i(87456),
    i(56592),
    i(48702),
    i(46584),
    i(46810),
    i(42835),
    i(51356),
    i(86570),
    i(51204),
    i(2849),
    i(22412),
    i(85284),
    i(79207),
    i(80255),
    i(73151),
    i(91252),
    i(69338),
    i(57703),
    i(60639),
    i(83683),
    i(79753),
    i(22416),
    i(68614),
    i(36095),
    i(51726),
    i(69222),
    i(12387),
    i(23235),
    i(3900),
    i(71202),
    i(41184),
    i(33626),
    i(60197),
    i(7321),
    i(46392),
    i(8579),
    i(84033),
    i(89907),
    i(63487),
    i(51687),
    i(47407),
    i(79419),
    i(13779),
    i(75203),
    i(56750),
    i(51056),
    i(83965),
    i(16049),
    i(92978),
    i(36148),
    i(64182),
    i(29601),
    i(86205),
    i(48703),
    i(95762),
    i(26016),
    i(59491),
    i(12050),
    i(94505),
    i(12058),
    i(83879),
    i(49815),
    i(55718),
    i(33809),
    i(76758),
    i(85325),
    i(92638),
    i(15893),
    i(20344),
    i(60163),
    i(95967),
    i(30352),
    i(13633),
    i(40979),
    i(77612),
    i(76577),
    i(64011),
    i(15840),
    i(91268),
    i(89845),
    i(84329),
    i(37049),
    i(60990),
    i(7050),
    i(67110),
    i(12421),
    i(88087),
    i(61405),
    i(5981),
    i(25717),
    i(80553),
    i(62828),
    i(49521),
    i(91720),
    i(45661),
    i(905),
    i(6322),
    i(77975),
    i(33902),
    i(67605),
    i(20585),
    i(19365),
    i(18395),
    i(59012),
    i(11885),
    i(86266),
    i(14370),
    i(95772),
    i(60666),
    i(62121),
    i(85295),
    i(14942),
    i(70318),
    i(12568),
    i(27036),
    i(28603),
    i(39950),
    i(74365),
    i(98999),
    i(11560),
    i(19579),
    i(16421),
    i(38074),
    i(29392),
    i(16517),
    i(5977),
    i(92193),
    i(45207),
    i(44370),
    i(39319),
    i(97451),
    i(78277),
    i(99624),
    i(87244),
    i(13303),
    i(39859),
    i(84485),
    i(86824),
    i(44142),
    i(7906),
    i(50130),
    i(9292),
    i(78614),
    i(69998),
    i(62968),
    i(60782),
    i(73303),
    i(62862),
    i(7043),
    i(68295),
    i(14175),
    i(33862),
    i(80181),
    i(23911),
    i(62342),
    i(46735),
    i(66259),
    i(25560),
    i(31784),
    i(63719),
    i(21612),
    i(93838),
    i(12949),
    i(48550),
    i(75746),
    i(79963),
    i(75430),
    i(54778),
    i(33300),
    i(55754),
    i(74919),
    i(1713),
    i(40418),
    i(98261),
    i(46330),
    i(99318),
    i(65353),
    i(57574),
    i(68553),
    i(24613),
    i(81513),
    i(33665),
    i(39812),
    i(54181),
    i(65706),
    i(27835),
    i(14218),
    i(35234),
    i(56827),
    i(92092),
    i(41157),
    i(74687),
    i(48031),
    i(75918),
    i(91037),
    i(13425),
    i(2731),
    i(50653),
    i(80298),
    i(54629),
    i(20533),
    i(46272),
    i(11219),
    i(77818),
    i(52436),
    i(96455),
    i(4591),
    i(5100),
    i(37649),
    i(82187),
    i(8375),
    i(26008),
    i(46817),
    i(84099),
    i(10028),
    i(87421),
    i(77263),
    i(15272),
    i(82482),
    i(14325),
    i(90084),
    i(80409),
    i(11571),
    i(44909),
    i(32557),
    i(73218),
    i(98801),
    i(60965),
    i(95078),
    i(87393),
    i(8133),
    i(53355),
    i(71547),
    i(12598),
    i(99723),
    i(99088),
    i(61781),
    i(31431),
    i(74244),
    i(27489),
    i(61264),
    i(31564),
    i(32098),
    i(73810),
    i(93723),
    i(87931),
    i(46726),
    i(37730),
    i(64343),
    i(33327),
    i(42837),
    i(82958),
    i(31918),
    i(42583),
    i(76214),
    i(10755),
    i(76200),
    i(43185),
    i(73089),
    i(10913),
    i(10777),
    i(64103),
    i(40242),
    i(87154),
    i(82491),
    i(39645),
    i(17209),
    i(97747);
    i(29395)
}();
