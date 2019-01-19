!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Netcall = e() : t.Netcall = e()
}(this, function () {
    return function (t) {
        function e(i) {
            if (n[i]) return n[i].exports;
            var o = n[i] = {exports: {}, id: i, loaded: !1};
            return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }

        var n = {};
        return e.m = t, e.c = n, e.p = "", e(0)
    }({
        0: function (t, e, n) {
            "use strict";
            var i = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                }, o = n(232), s = n(128), r = n(185), a = n(230), c = n(112), u = n(194), l = n(195), h = n(196),
                d = void 0, p = i({}, c, {
                    webgl: o, install: function (t, e) {
                        s.install(t, e), r.install(t, e), t.parser.mixin({
                            configMap: u,
                            serializeMap: l,
                            unserializeMap: h
                        }), a.install(t, e)
                    }, getInstance: function (t) {
                        return d || (d = new a(t)), d
                    }, destroy: function () {
                        d && (d.destroy(), d = null)
                    }
                });
            t.exports = p
        }, 3: function (t, e, n) {
            (function (e) {
                "use strict";
                var n = "'3e91c53671eb52ebe3fc319fc6dac5f938226081", i = "3e91c536'", o = "4.7.0", s = "2.3.0.0109",
                    r = "3.6.0", a = "41", c = 1, u = "https://lbs.netease.im/lbs/webconf.jsp",
                    l = "development" === e.env.NODE_ENV ? 6e3 : 42e3, h = {
                        info: {hash: n, shortHash: i, version: o, sdkVersion: a, nrtcVersion: r, protocolVersion: c},
                        agentVersion: s,
                        lbsUrl: u,
                        connectTimeout: l,
                        xhrTimeout: l,
                        socketTimeout: l,
                        reconnectionDelay: 656.25,
                        reconnectionDelayMax: l,
                        reconnectionJitter: .1,
                        heartbeatInterval: 18e4,
                        cmdTimeout: l
                    };
                h.formatSocketUrl = function (t) {
                    var e = t.url, n = t.secure, i = n ? "https" : "http";
                    return e.indexOf("http") === -1 ? i + "://" + e : e
                }, h.fileServerUrl = "", h.replaceUrl = "", h.genUploadUrl = function (t) {
                    return h.uploadUrl ? h.uploadUrl + "/" + t : h.fileServerUrl + "/" + t
                }, h.genDownloadUrl = function (t, e) {
                    return h.downloadUrl ? h.replaceUrl + "/" + t + "/" + e : "https://" + t + "" + e
                }, t.exports = h
            }).call(e, n(9))
        }, 4: function (t, e, n) {
            "use strict";

            function i() {
            }

            function o(t, e, n) {
                this.fn = t, this.context = e, this.once = n || !1
            }

            function s() {
                this._events = new i, this._eventsCount = 0
            }

            var r = Object.prototype.hasOwnProperty, a = "~";
            Object.create && (i.prototype = Object.create(null), (new i).__proto__ || (a = !1)), s.prototype.eventNames = function () {
                var t, e, n = [];
                if (0 === this._eventsCount) return n;
                for (e in t = this._events) r.call(t, e) && n.push(a ? e.slice(1) : e);
                return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n
            }, s.prototype.listeners = function (t, e) {
                var n = a ? a + t : t, i = this._events[n];
                if (e) return !!i;
                if (!i) return [];
                if (i.fn) return [i.fn];
                for (var o = 0, s = i.length, r = new Array(s); o < s; o++) r[o] = i[o].fn;
                return r
            }, s.prototype.emit = function (t, e, n, i, o, s) {
                var r = a ? a + t : t;
                if (!this._events[r]) return !1;
                var c, u, l = this._events[r], h = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(t, l.fn, void 0, !0), h) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, e), !0;
                        case 3:
                            return l.fn.call(l.context, e, n), !0;
                        case 4:
                            return l.fn.call(l.context, e, n, i), !0;
                        case 5:
                            return l.fn.call(l.context, e, n, i, o), !0;
                        case 6:
                            return l.fn.call(l.context, e, n, i, o, s), !0
                    }
                    for (u = 1, c = new Array(h - 1); u < h; u++) c[u - 1] = arguments[u];
                    l.fn.apply(l.context, c)
                } else {
                    var d, p = l.length;
                    for (u = 0; u < p; u++) switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), h) {
                        case 1:
                            l[u].fn.call(l[u].context);
                            break;
                        case 2:
                            l[u].fn.call(l[u].context, e);
                            break;
                        case 3:
                            l[u].fn.call(l[u].context, e, n);
                            break;
                        case 4:
                            l[u].fn.call(l[u].context, e, n, i);
                            break;
                        default:
                            if (!c) for (d = 1, c = new Array(h - 1); d < h; d++) c[d - 1] = arguments[d];
                            l[u].fn.apply(l[u].context, c)
                    }
                }
                return !0
            }, s.prototype.on = function (t, e, n) {
                var i = new o(e, n || this), s = a ? a + t : t;
                return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], i] : this._events[s].push(i) : (this._events[s] = i, this._eventsCount++), this
            }, s.prototype.once = function (t, e, n) {
                var i = new o(e, n || this, !0), s = a ? a + t : t;
                return this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], i] : this._events[s].push(i) : (this._events[s] = i, this._eventsCount++), this
            }, s.prototype.removeListener = function (t, e, n, o) {
                var s = a ? a + t : t;
                if (!this._events[s]) return this;
                if (!e) return 0 === --this._eventsCount ? this._events = new i : delete this._events[s], this;
                var r = this._events[s];
                if (r.fn) r.fn !== e || o && !r.once || n && r.context !== n || (0 === --this._eventsCount ? this._events = new i : delete this._events[s]); else {
                    for (var c = 0, u = [], l = r.length; c < l; c++) (r[c].fn !== e || o && !r[c].once || n && r[c].context !== n) && u.push(r[c]);
                    u.length ? this._events[s] = 1 === u.length ? u[0] : u : 0 === --this._eventsCount ? this._events = new i : delete this._events[s]
                }
                return this
            }, s.prototype.removeAllListeners = function (t) {
                var e;
                return t ? (e = a ? a + t : t, this._events[e] && (0 === --this._eventsCount ? this._events = new i : delete this._events[e])) : (this._events = new i, this._eventsCount = 0), this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prototype.setMaxListeners = function () {
                return this
            }, s.prefixed = a, s.EventEmitter = s, t.exports = s
        }, 7: function (t, e, n) {
            "use strict";

            function i(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            e.__esModule = !0;
            var o = n(46);
            Object.defineProperty(e, "ajax", {
                enumerable: !0, get: function () {
                    return i(o)["default"]
                }
            });
            var s = n(47);
            Object.defineProperty(e, "element", {
                enumerable: !0, get: function () {
                    return i(s)["default"]
                }
            });
            var r = n(48);
            Object.defineProperty(e, "tool", {
                enumerable: !0, get: function () {
                    return i(r)["default"]
                }
            })
        }, 9: function (t, e) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }

            function i() {
                throw new Error("clearTimeout has not been defined")
            }

            function o(t) {
                if (l === setTimeout) return setTimeout(t, 0);
                if ((l === n || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
                try {
                    return l(t, 0)
                } catch (e) {
                    try {
                        return l.call(null, t, 0)
                    } catch (e) {
                        return l.call(this, t, 0)
                    }
                }
            }

            function s(t) {
                if (h === clearTimeout) return clearTimeout(t);
                if ((h === i || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);
                try {
                    return h(t)
                } catch (e) {
                    try {
                        return h.call(null, t)
                    } catch (e) {
                        return h.call(this, t)
                    }
                }
            }

            function r() {
                m && p && (m = !1, p.length ? f = p.concat(f) : v = -1, f.length && a())
            }

            function a() {
                if (!m) {
                    var t = o(r);
                    m = !0;
                    for (var e = f.length; e;) {
                        for (p = f, f = []; ++v < e;) p && p[v].run();
                        v = -1, e = f.length
                    }
                    p = null, m = !1, s(t)
                }
            }

            function c(t, e) {
                this.fun = t, this.array = e
            }

            function u() {
            }

            var l, h, d = t.exports = {};
            !function () {
                try {
                    l = "function" == typeof setTimeout ? setTimeout : n
                } catch (t) {
                    l = n
                }
                try {
                    h = "function" == typeof clearTimeout ? clearTimeout : i
                } catch (t) {
                    h = i
                }
            }();
            var p, f = [], m = !1, v = -1;
            d.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                f.push(new c(t, e)), 1 !== f.length || m || o(a)
            }, c.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.prependListener = u, d.prependOnceListener = u, d.listeners = function (t) {
                return []
            }, d.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, d.cwd = function () {
                return "/"
            }, d.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, d.umask = function () {
                return 0
            }
        }, 24: function (t, e, n) {
            "use strict";

            function i(t) {
                return t && t.__esModule ? t : {"default": t}
            }

            e.__esModule = !0;
            var o = n(43), s = i(o), r = n(44), a = i(r), c = n(45), u = i(c);
            e["default"] = {
                DataApi: function (t) {
                    return new s["default"](t)
                }, DataRtc: function (t) {
                    return new a["default"](t)
                }, DataStats: function (t) {
                    return new u["default"](t)
                }
            }, t.exports = e["default"]
        }, 43: function (t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            e.__esModule = !0;
            var o = n(7), s = n(3), r = s.info.nrtcVersion,
                a = "", c = function l() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, l);
                    var e = t.appkey, n = t.platform;
                    this.apis = {}, this.isRtc = /WebRTC/.test(n), this.init(e, n), this.resetStatus()
                };
            e["default"] = c;
            var u = c.prototype;
            u.init = function (t, e) {
                this.apis = Object.assign(this.apis, {
                    ver: 1,
                    platform: e,
                    sdk_ver: r || "v4.4.0",
                    uid: null,
                    appkey: t,
                    time: null
                })
            }, u.start = function (t) {
                this.calling = !0, this.apis = Object.assign(this.apis, t)
            }, u.resetStatus = function () {
                this.calling = !1, this.apis = Object.assign(this.apis, {
                    p2p: {value: 0},
                    meeting: {value: 0},
                    bypass: {value: 0},
                    call_control_type: {value: 0},
                    self_mute: {value: -1},
                    self_mic_mute: {value: -1},
                    switch_p2p_type: {value: 0},
                    set_speaker: {value: -1},
                    net_detect: {value: this.isRtc ? -1 : 0},
                    beautify: {value: -1},
                    water_mark: {value: -1},
                    audio_samples: {value: -1},
                    video_samples: {value: -1},
                    pre_view_mirror: {value: -1},
                    code_mirror: {value: -1},
                    custom_audio: {value: -1},
                    custom_video: {value: -1},
                    audio_mix: {value: -1},
                    snap_shot: {value: -1},
                    record: {value: 0},
                    audio_record: {value: 0},
                    display: {value: 0},
                    android_compatibility: {value: -1},
                    hd_audio: {value: 0},
                    video_quality: {value: 0},
                    fps: {value: 0},
                    prefered_video_encoder: {value: -1},
                    prefered_video_decoder: {value: -1},
                    video_max_encode_bitrate: {value: this.isRtc ? -1 : 0},
                    audio_scene: {value: -1},
                    video_adaptive_strategy: {value: this.isRtc ? -1 : 0},
                    ans: {value: this.isRtc ? -1 : 0},
                    agc: {value: -1},
                    dtx: {value: -1},
                    aec: {value: this.isRtc ? -1 : 0},
                    awc: {value: this.isRtc ? -1 : 0}
                })
            }, u.update = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments[1],
                    n = t.key, i = t.ext;
                t.constructor === String && (n = t), i = i || e, this.apis[n] && (this.apis[n].value = 1, void 0 !== i && (this.apis[n].ext = i), /(p2p|meeting)/.test(n) && (this.calling = !0))
            }, u.send = function () {
                var t = this;
                this.calling && (this.calling = !1, this.apis.time = Date.now(), (0, o.ajax)({
                    type: "post",
                    url: a,
                    data: this.apis
                }).then(function (e) {
                    t.resetStatus()
                })["catch"](function (e) {
                    console.log("err", e), t.resetStatus()
                }))
            }, t.exports = e["default"]
        }, 44: function (t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            e.__esModule = !0;
            var o = n(7), s = n(3), r = s.info.nrtcVersion,
                a = "", c = function h() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i(this, h);
                    var e = t.appkey;
                    this.infos = {}, this.userlist = [], this.localVolumn = 0, this.local = {}, this.remote = {}, this.init(e), this.resetStatus()
                };
            e["default"] = c;
            var u = c.prototype;
            u.init = function (t) {
                this.infos = Object.assign(this.infos, {
                    ver: 1,
                    device: -1,
                    isp: -1,
                    platform: l.convertPlatform(platform.os.family) + "-" + platform.os.version,
                    browser: platform.name + "-" + platform.version,
                    sdk_ver: r || "3.6.0",
                    appkey: t,
                    interval: 60,
                    samples: 30,
                    time: null,
                    qos_algorithm: -1,
                    fec_algorithm: -1,
                    qos_scene: -1,
                    qos_strategy: -1
                })
            }, u.resetStatus = function () {
                this.infos = Object.assign(this.infos, {
                    uid: null,
                    cid: null,
                    push_url: null,
                    turn_ip: null,
                    proxy_ip: null,
                    meeting: !1,
                    live: !1
                }), this.clearInfoData(), this.uidSsrcMap = {}, this.userlist = []
            }, u.initInfoData = function (t) {
                var e = {
                    uid: t,
                    cid: this.imInfo && this.imInfo.channelId || -1,
                    push_url: this.sessionConfig && this.sessionConfig.rtmpUrl || -1,
                    turn_ip: this.imInfo && this.imInfo.turnMap || -1,
                    proxy_ip: this.imInfo && this.imInfo.turnMap || -1,
                    meeting: /^meeting$/gi.test(this.imInfo.sessionMode),
                    live: this.sessionConfig && this.sessionConfig.liveEnable || !1,
                    p2p: !1,
                    isp: -1,
                    net: -1,
                    connect_state: this.imInfo && this.imInfo.code || 200,
                    signalling_time: (this.sessionConfig && this.sessionConfig.signalEndTime || 0) - (this.sessionConfig && this.sessionConfig.signalStartTime || 0),
                    connect_time: (this.sessionConfig && this.sessionConfig.rtcEndTime || 0) - (this.sessionConfig && this.sessionConfig.rtcStartTime || 0)
                };
                this.infos = Object.assign(this.infos, e)
            }, u.clearInfoData = function () {
                this.localVolumn = 0, this.infos = Object.assign(this.infos, {
                    rx: {audio: [], video: []},
                    tx: {
                        a_lost: [],
                        v_lost: [],
                        rtt: [],
                        rtt_mdev: [],
                        set_v_fps: [],
                        qos_v_fps: [],
                        v_fps: [],
                        set_v_quality: [],
                        real_v_res: [],
                        real_v_kbps: [],
                        real_v_kbps_n: [],
                        real_a_kbps: [],
                        real_a_kbps_n: [],
                        set_v_kbps: [],
                        qos_v_kbps: [],
                        tx_bw_kbps: [],
                        a_volume: []
                    }
                })
            }, u.start = function (t) {
                var e = this, n = t.info, i = t.imInfo, o = t.remoteUidMsidMap, s = t.sessionConfig,
                    r = t.rtcConnection, a = t.uid;
                i && o && r && (this.infos.appkey = n.appKey || n.appkey || this.infos.appkey, this.imInfo = i || {}, this.remoteUidMsidMap = o || {}, this.sessionConfig = s || {}, this.rtcConnection = r, this.videoConfig = t.videoConfig || {}, this.statsTimer || (this.getTurnMap(), this.initInfoData(a), this.format(), this.statsTimer = setInterval(function () {
                    e.sendInfo()
                }, 1e3 * this.infos.interval)))
            }, u.stop = function () {
                this.statsTimer && (clearInterval(this.statsTimer), this.statsTimer = null, this.resetStatus())
            }, u.update = function (t) {
                this.rtcStats = t, this.format(), this.updateRxMediaInfo(), this.updateTxMediaInfo()
            }, u.updateOnce = function (t) {
                var e = t.imInfo, n = t.remoteUidMsidMap, i = t.sessionConfig, o = t.rtcConnection;
                e && (this.imInfo = e || {}, this.remoteUidMsidMap = n || {}, this.sessionConfig = i || {}, this.rtcConnection = o || {}, this.videoConfig = t.videoConfig || {}, this.getTurnMap(), this.initInfoData(), this.sendInfo())
            }, u.updateLocalVolumn = function (t) {
                this.localVolumn = t
            }, u.updateRxMediaInfo = function () {
                var t = this, e = {u: [], g: [], c: [], bn: [], bc: []},
                    n = {u: [], i: [], bn: [], bc: [], r: [], f: []};
                this.userlist.map(function (i) {
                    var o = t.getMediaStats(i);
                    e.u.push(o.audio.u), e.g.push(-1), e.c.push(-1), e.bn.push(o.audio.bn), e.bc.push(o.audio.bc), n.u.push(o.video.u), n.i.push(o.video.i), n.bn.push(o.video.bn), n.bc.push(o.video.bc), n.r.push(o.video.r), n.f.push(o.video.f)
                }), this.infos.rx.audio.push(e), this.infos.rx.video.push(n)
            }, u.getMediaStats = function (t) {
                var e = this.rtcStats,
                    n = {audio: {u: +t, g: -1, c: -1, bn: 0, bc: 0}, video: {u: +t, i: -1, bn: 0, bc: 0, r: -1, f: 0}},
                    i = {}, o = this.uidSsrcMap[t];
                if (!o) return n;
                o = o.join("|");
                var s = new RegExp("(" + o + ")");
                return e.results.filter(function (t) {
                    return s.test(t.ssrc) && (i[t.mediaType] = t), s.test(t)
                }), i.audio && (n.audio.bn = (i.audio.availableBandwidth || 0) - 0, n.audio.bc = -1), i.video && (n.video.bn = (i.video.availableBandwidth || 0) - 0, n.video.bc = i.video.googFrameWidthReceived + "x" + i.video.googFrameHeightReceived, n.video.f = (i.video.googFrameRateDecoded || 0) - 0), n
            }, u.getLocalMediaStats = function () {
                var t = this.rtcStats, e = {
                    a_lost: -1,
                    v_lost: -1,
                    rtt: 0,
                    rtt_mdev: -1,
                    set_v_fps: this.videoConfig.frameRate || 0,
                    qos_v_fps: 0,
                    v_fps: 0,
                    set_v_quality: this.sessionConfig.videoQuality,
                    real_v_res: 0,
                    real_v_kbps: 0,
                    real_v_kbps_n: 0,
                    real_a_kbps: -1,
                    real_a_kbps_n: 0,
                    set_v_kbps: -1,
                    qos_v_kbps: 0,
                    tx_bw_kbps: 0,
                    a_volume: 0
                }, n = {}, i = this.imInfo.uid, o = this.uidSsrcMap[i];
                if (!o) return e;
                o = o.join("|");
                var s = new RegExp("(" + o + ")");
                return t.results.filter(function (t) {
                    return t.localCandidateId ? void (n.rtt = t) : (s.test(t.ssrc) && (n[t.mediaType] = t), s.test(t))
                }), n.audio && (e.real_a_kbps_n = (n.audio.availableBandwidth || t.audio.send.availableBandwidth) - 0, e.a_volume = this.localVolumn - 0), n.video && (e.qos_v_fps = n.video.googFrameRateInput - 0, e.v_fps = n.video.googFrameRateSent - 0, e.real_v_res = n.video.googFrameWidthSent + "x" + n.video.googFrameHeightSent, e.real_v_kbps = n.video.googEncodeUsagePercent - 0, e.real_v_kbps_n = n.video.availableBandwidth - 0), e.rtt = n.rtt.googRtt - 0, e.tx_bw_kbps = (t.connectionType.bitsSentPerSecond || 0) - 0, e
            }, u.updateTxMediaInfo = function () {
                var t = this.getLocalMediaStats(), e = this.infos.tx;
                for (var n in t) e[n].push(t[n]);
                this.infos.net = l.convertNetwork(this.rtcStats.connectionType.local.networkType[0])
            }, u.getTurnMap = function () {
                var t = this.imInfo;
                t.serverMap && (t.turnMap = JSON.parse(t.serverMap || null), t.turnMap = t.turnMap && t.turnMap.turnaddrs, t.turnMap = t.turnMap && t.turnMap[0], t.turnMap = t.turnMap.constructor === Array ? t.turnMap[0] : t.turnMap, t.turnMap = t.turnMap && t.turnMap.match(/\d+\.\d+.\d+\.\d+/), t.turnMap = t.turnMap[0])
            }, u.getSsrc = function (t, e) {
                var n = [], i = {audio: this.getTypeSsrc("audio", t, e), video: this.getTypeSsrc("video", t, e)};
                return i.audio && n.push(i.audio), i.video && n.push(i.video), n
            }, u.getTypeSsrc = function (t, e, n) {
                var i = void 0, o = "";
                if (i = new RegExp(t + "[.\\r\\n\\s\\S]*ssrc:(\\d+)\\smsid:" + e), o = n.match(i), o = o && o[0]) return i = new RegExp("ssrc:\\d+\\smsid:" + e), o = o.match(i), o = o.map(function (t) {
                    return i = new RegExp("ssrc:(\\d+)\\s"), t = t.match(i), t[1]
                })
            }, u.format = function () {
                this.formatLocal(), this.formatRemote()
            }, u.formatLocal = function () {
                this.localSdp = this.rtcConnection.localDescription, this.localStream = this.rtcConnection.getLocalStreams()[0], this.localStream && (this.uidSsrcMap[this.imInfo.uid] = this.getSsrc(this.localStream.id, this.localSdp.sdp), this.local.ssrc = this.uidSsrcMap[this.imInfo.uid])
            }, u.formatRemote = function () {
                this.remoteSdp = this.rtcConnection.remoteDescription, this.userlist = [];
                var t = this.remoteUidMsidMap;
                for (var e in t) this.userlist.push(e), this.remote[e] = {}, this.uidSsrcMap[e] = this.getSsrc(t[e], this.remoteSdp.sdp), this.remote[e].ssrc = this.uidSsrcMap[e]
            }, u.sendInfo = function () {
                var t = this;
                this.infos.uid && this.infos.cid && (this.infos.time = Date.now(), this.infos.samples = this.infos.rx.audio.length, (0, o.ajax)({
                    type: "post",
                    url: a,
                    data: this.infos
                }).then(function (e) {
                    t.clearInfoData()
                })["catch"](function (e) {
                    t.clearInfoData()
                }))
            };
            var l = {
                convertNetwork: function (t) {
                    var e = {wlan: "wifi", lan: "ethernet"};
                    return e[t] || "unknown"
                }, convertPlatform: function (t) {
                    var e = /Windows/i, n = /OS X/i, i = void 0;
                    return i = e.test(t) && "Win" || t, i = n.test(i) && "Mac" || i
                }
            };
            t.exports = e["default"]
        }, 45: function (t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            e.__esModule = !0;
            var o = n(7), s = n(3), r = s.info.nrtcVersion, a = "",
                c = function () {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, t);
                        var n = e.appkey;
                        this.infos = {}, this.init(n), this.resetStatus()
                    }

                    return t.prototype.resetStatus = function () {
                    }, t.prototype.init = function (t) {
                        this.infos = Object.assign(this.infos, {
                            interval: 60,
                            ver: 1,
                            platform: u.convertPlatform(platform.os.family) + "-" + platform.os.version,
                            browser: platform.name + "-" + platform.version,
                            sdk_ver: r || "3.6.0",
                            uid: null,
                            appkey: t,
                            time: null,
                            data: {}
                        })
                    }, t.prototype.clear = function () {
                        this.infos.data = {}
                    }, t.prototype.start = function () {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.infos.appkey = e.appKey || e.appkey || this.infos.appkey, this.infos.cid = e.cid, this.infos.uid = e.uid, this.statsTimer || (this.statsTimer = setInterval(function () {
                            t.send()
                        }, 1e3 * this.infos.interval))
                    }, t.prototype.stop = function () {
                        this.statsTimer && (clearInterval(this.statsTimer), this.statsTimer = null, this.clear())
                    }, t.prototype.update = function (t) {
                        this.infos.data["stat_" + Date.now()] = t
                    }, t.prototype.send = function () {
                        var t = this;
                        0 !== Object.keys(this.infos.data).length && (this.infos.time = Date.now(), (0, o.ajax)({
                            type: "post",
                            url: a,
                            data: this.infos
                        }).then(function (e) {
                            t.clear()
                        })["catch"](function (t) {
                            console.log("err", t)
                        }))
                    }, t
                }();
            e["default"] = c;
            var u = {
                convertNetwork: function (t) {
                    var e = {wlan: "wifi", lan: "ethernet"};
                    return e[t] || "unknown"
                }, convertPlatform: function (t) {
                    var e = /Windows/i, n = /OS X/i, i = void 0;
                    return i = e.test(t) && "Win" || t, i = n.test(i) && "Mac" || i
                }
            };
            t.exports = e["default"]
        }, 46: function (t, e) {
            "use strict";
            e.__esModule = !0, e["default"] = function (t) {
                if (!t.url || !t.data) return Promise.reject("参数不完整，无法发起请求");
                t.dataType = t.dataType || "json";
                var e = new XMLHttpRequest;
                return e.open(t.type || "GET", t.url, !0), e.responseType = "" + t.dataType, e.setRequestHeader("Content-type", "application/json;charset=UTF-8"), new Promise(function (n, i) {
                    e.onload = function () {
                        var t = e.response;
                        n(t)
                    }, e.onerror = function (t) {
                        i(t)
                    }, e.send(JSON.stringify(t.data))
                })
            };
            t.exports = e["default"]
        }, 47: function (t, e) {
            "use strict";
            e.__esModule = !0, e["default"] = {
                html2node: function (t) {
                    var e = document.createElement("div");
                    e.innerHTML = t;
                    var n, i, o = [];
                    if (e.children) for (n = 0, i = e.children.length; n < i; n++) o.push(e.children[n]); else for (n = 0, i = e.childNodes.length; n < i; n++) {
                        var s = e.childNodes[n];
                        1 === s.nodeType && o.push(s)
                    }
                    return o.length > 1 ? e : o[0]
                }, n2node: function (t) {
                    return t ? /HTML.+Element/gi.test(t) ? t : t[0] && /HTML.+Element/gi.test(t[0]) ? t[0] : null : null
                }
            }, t.exports = e["default"]
        }, 48: function (t, e) {
            "use strict";
            e.__esModule = !0, e["default"] = {
                merge: function () {
                    var t = arguments;
                    return t[0] = Object.assign.apply(Object.assign, arguments), t[0]
                }, verifyOptions: function () {
                    var t = arguments;
                    if (t[0] && t[0].constructor === Object) for (var e = 1; e < arguments.length; e++) {
                        var n = t[e];
                        n = n.split(" "), n.map(function (e) {
                            if (!t[0][e]) throw Error("参数缺失 " + e)
                        })
                    }
                }, guid: function () {
                    var t = function () {
                        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                    };
                    return function () {
                        return t() + t() + t() + t() + t() + t() + t() + t()
                    }
                }()
            }, t.exports = e["default"]
        }, 67: function (t, e) {
            function n(t) {
                t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0
            }

            t.exports = n, n.prototype.duration = function () {
                var t = this.ms * Math.pow(this.factor, this.attempts++);
                if (this.jitter) {
                    var e = Math.random(), n = Math.floor(e * this.jitter * t);
                    t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n
                }
                return 0 | Math.min(t, this.max)
            }, n.prototype.reset = function () {
                this.attempts = 0
            }, n.prototype.setMin = function (t) {
                this.ms = t
            }, n.prototype.setMax = function (t) {
                this.max = t
            }, n.prototype.setJitter = function (t) {
                this.jitter = t
            }
        }, 75: function (t, e) {
            "use strict";

            function n(t) {
                i(t.enable) && (this.enable = t.enable ? 1 : 0), i(t.needBadge) && (this.needBadge = t.needBadge ? 1 : 0), i(t.needPushNick) && (this.needPushNick = t.needPushNick ? 1 : 0), i(t.pushContent) && (this.pushContent = "" + t.pushContent), i(t.custom) && (this.custom = "" + t.custom), i(t.pushPayload) && (this.pushPayload = "" + t.pushPayload), i(t.sound) && (this.sound = "" + t.sound), i(t.webrtcEnable) && (this.webrtcEnable = t.webrtcEnable ? 1 : 0)
            }

            e.__esModule = !0, e["default"] = function (t) {
                var e = t.util;
                return i = e.notundef, n
            };
            var i = void 0;
            t.exports = e["default"]
        }, 112: function (t, e) {
            "use strict";
            e.__esModule = !0;
            var n, i, o = {
                NETCALL_TYPE_AUDIO: 1,
                NETCALL_TYPE_VIDEO: 2,
                NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_ON: 1,
                NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_OFF: 2,
                NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_ON: 3,
                NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_OFF: 4,
                NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO: 5,
                NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO_AGREE: 6,
                NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO_REJECT: 7,
                NETCALL_CONTROL_COMMAND_SWITCH_VIDEO_TO_AUDIO: 8,
                NETCALL_CONTROL_COMMAND_BUSY: 9,
                NETCALL_CONTROL_COMMAND_SELF_CAMERA_INVALID: 10,
                NETCALL_CONTROL_COMMAND_SELF_AUDIO_INVALID: 11,
                NETCALL_CONTROL_COMMAND_SELF_ON_BACKGROUND: 12,
                NETCALL_CONTROL_COMMAND_START_NOTIFY_RECEIVED: 13,
                NETCALL_CONTROL_COMMAND_NOTIFY_RECORD_START: 14,
                NETCALL_CONTROL_COMMAND_NOTIFY_RECORD_STOP: 15,
                DEVICE_TYPE_AUDIO_IN: 0,
                DEVICE_TYPE_AUDIO_OUT_LOCAL: 1,
                DEVICE_TYPE_AUDIO_OUT_CHAT: 2,
                DEVICE_TYPE_VIDEO: 3,
                DEVICE_STATUS_NO_CHANGE: 0,
                DEVICE_STATUS_CHANGE: 1,
                DEVICE_STATUS_WORK_REMOVE: 2,
                DEVICE_STATUS_RESET: 4,
                DEVICE_STATUS_START: 8,
                DEVICE_STATUS_END: 16,
                CHAT_VIDEO_QUALITY_NORMAL: 0,
                CHAT_VIDEO_QUALITY_LOW: 1,
                CHAT_VIDEO_QUALITY_MEDIUM: 2,
                CHAT_VIDEO_QUALITY_HIGH: 3,
                CHAT_VIDEO_QUALITY_480P: 4,
                CHAT_VIDEO_QUALITY_720P: 5,
                CHAT_VIDEO_QUALITY_540P: 6,
                CHAT_VIDEO_ENCODEMODE_NORMAL: 0,
                CHAT_VIDEO_ENCODEMODE_SMOOTH: 1,
                CHAT_VIDEO_ENCODEMODE_QUALITY: 2,
                CHAT_VIDEO_FRAME_RATE_NORMAL: 0,
                CHAT_VIDEO_FRAME_RATE_5: 1,
                CHAT_VIDEO_FRAME_RATE_10: 2,
                CHAT_VIDEO_FRAME_RATE_15: 3,
                CHAT_VIDEO_FRAME_RATE_20: 4,
                CHAT_VIDEO_FRAME_RATE_25: 5,
                CHAT_VIDEO_SCALE_None: 0,
                CHAT_VIDEO_SCALE_1x1: 1,
                CHAT_VIDEO_SCALE_4x3: 2,
                CHAT_VIDEO_SCALE_16x9: 3,
                CHAT_USER_LEFT_TIMEOUT: -1,
                CHAT_USER_LEFT_NORMAL: 0,
                CHAT_NET_STATUS_VERY_GOOD: 0,
                CHAT_NET_STATUS_GOOD: 1,
                CHAT_NET_STATUS_POOR: 2,
                CHAT_NET_STATUS_BAD: 3,
                CHAT_NET_STATUS_VERY_BAD: 4,
                CLIENT_TYPE_AOS: 1,
                CLIENT_TYPE_IOS: 2,
                CLIENT_TYPE_PC: 4,
                CLIENT_TYPE_WINPHONE: 8,
                CLIENT_TYPE_WEB: 16,
                CLIENT_TYPE_REST: 32,
                LAYOUT_SPLITBOTTOMHORFLOATING: 0,
                LAYOUT_SPLITTOPHORFLOATING: 1,
                LAYOUT_SPLITLATTICETILE: 2,
                LAYOUT_SPLITLATTICECUTTINGTILE: 3,
                LAYOUT_SPLITCUSTOMLAYOUT: 4,
                LAYOUT_SPLITAUDIOLAYOUT: 5,
                NETDETECT_AUDIO: 0,
                NETDETECT_VIDEO: 1
            };
            o.deviceTypeMap = (n = {}, n[o.DEVICE_TYPE_AUDIO_IN] = "audioIn", n[o.DEVICE_TYPE_AUDIO_OUT_CHAT] = "audioOut", n[o.DEVICE_TYPE_VIDEO] = "video", n), o.getDeviceTypeStr = function (t) {
                return o.deviceTypeMap[t]
            }, o.deviceStatusMap = (i = {}, i[o.DEVICE_STATUS_NO_CHANGE] = "noChange", i[o.DEVICE_STATUS_CHANGE] = "change", i[o.DEVICE_STATUS_WORK_REMOVE] = "workRemove", i[o.DEVICE_STATUS_RESET] = "reset", i[o.DEVICE_STATUS_START] = "start", i[o.DEVICE_STATUS_END] = "end", i), o.getDeviceStatusStr = function (t) {
                return o.deviceStatusMap[t]
            }, e["default"] = o, t.exports = e["default"]
        }, 128: function (t, e, n) {
            "use strict";
            var i = n(75), o = {};
            o.install = function (t) {
                var e = t.fn, n = t.util, o = i({util: n});
                e.initNetcall = function (t) {
                    return n.verifyOptions(t, "type accounts"), t.pushContent = "", t.custom = "", t.pushConfig || (t.pushConfig = {}), t.pushConfig.webrtcEnable = t.webrtcEnable, t.pushConfig = new o(t.pushConfig), this.cbAndSendCmd("initNetcall", t)
                }, e.keepCalling = function (t) {
                    return n.verifyOptions(t, "type accounts channelId"), this.cbAndSendCmd("keepCalling", t)
                }, e.calleeAck = function (t) {
                    return n.verifyOptions(t, "account channelId type accepted"), this.cbAndSendCmd("calleeAck", t)
                }, e.hangup = function (t) {
                    return n.verifyOptions(t, "channelId"), this.cbAndSendCmd("hangup", t)
                }, e.netcallControl = function (t) {
                    return n.verifyOptions(t, "channelId type"), this.cbAndSendCmd("netcallControl", t)
                }, e.createChannel = function (t) {
                    return this.cbAndSendCmd("createChannel", t)
                }, e.joinChannel = function (t) {
                    return n.verifyOptions(t, "channelName"), n.verifyBooleanWithDefault(t, "liveEnable", !1), n.verifyBooleanWithDefault(t, "webrtcEnable", !1), this.cbAndSendCmd("joinChannel", {
                        channelName: t.channelName,
                        liveOption: {liveEnable: t.liveEnable ? 1 : 0, webrtcEnable: t.webrtcEnable ? 1 : 0}
                    })
                }, e.queryAccountUidMap = function (t, e) {
                    return this.cbAndSendCmd("queryAccountUidMap", {channelName: t, uids: e})
                }
            }, t.exports = o
        }, 185: function (t, e) {
            "use strict";
            var n = {};
            n.install = function (t) {
                var e = t.Protocol.fn;
                e.processNetcall = function (t) {
                    switch (t.cmd) {
                        case"initNetcall":
                            this.onInitNetcall(t);
                            break;
                        case"beCalled":
                            this.onBeCalled(t);
                            break;
                        case"keepCalling":
                            this.onKeepCalling(t);
                            break;
                        case"calleeAck":
                            break;
                        case"notifyCalleeAck":
                            this.onNotifyCalleeAck(t);
                            break;
                        case"hangup":
                            break;
                        case"notifyHangup":
                            this.onNotifyHangup(t);
                            break;
                        case"notifyNetcallControl":
                            this.onNetcallControl(t);
                            break;
                        case"notifyCalleeAckSync":
                            this.onNotifyCalleeAckSync(t);
                            break;
                        case"notifyNetcallRecord":
                            this.onMsg(t);
                            break;
                        case"createChannel":
                            break;
                        case"joinChannel":
                            this.joinChannel(t);
                            break;
                        case"notifyJoin":
                            this.notifyJoin(t)
                    }
                }, e.onInitNetcall = function (t) {
                    if (!t.error) {
                        var e = t.obj.type;
                        t.obj = t.content, t.obj.type = e, t.obj.accounts = t.obj.keepCallingAccounts, this.setCurrentNetcall(t.obj.channelId), this.keepCalling(t)
                    }
                }, e.setCurrentNetcall = function (t) {
                    this.currentNetcallChannelId = t
                }, e.onKeepCalling = function (t) {
                    t.error || t.content.accounts.length && this.keepCalling(t)
                }, e.keepCalling = function (t) {
                    var e = this, n = t.obj, i = n.type, o = n.accounts, s = n.channelId;
                    o && o.length && setTimeout(function () {
                        e.currentNetcallChannelId && e.currentNetcallChannelId === s && e.api.keepCalling({
                            type: i,
                            accounts: o,
                            channelId: s
                        })["catch"](function () {
                        })
                    }, 3e3)
                }, e.onBeCalled = function (t) {
                    t.error || this.emitAPI({type: "beCalled", obj: t.content})
                }, e.onNotifyCalleeAck = function (t) {
                    t.error || this.emitAPI({type: "notifyCalleeAck", obj: t.content})
                }, e.onNotifyHangup = function (t) {
                    t.error || this.emitAPI({type: "notifyHangup", obj: t.content})
                }, e.onNetcallControl = function (t) {
                    t.error || this.emitAPI({type: "netcallControl", obj: t.content})
                }, e.onNotifyCalleeAckSync = function (t) {
                    t.error || this.emitAPI({type: "notifyCalleeAckSync", obj: t.content})
                }, e.notifyJoin = function (t) {
                    t.error || this.emitAPI({type: "notifyJoin", obj: t.content})
                }, e.joinChannel = function (t) {
                    t.obj = t.content
                }
            }, t.exports = n
        }, 194: function (t, e) {
            "use strict";
            var n = 9, i = {
                netcall: {
                    id: n,
                    initNetcall: 1,
                    keepCalling: 3,
                    calleeAck: 4,
                    notifyCalleeAck: 5,
                    hangup: 6,
                    notifyHangup: 7,
                    netcallControl: 8,
                    notifyNetcallControl: 9,
                    verifyChannelId: 10,
                    createChannel: 13,
                    joinChannel: 14,
                    queryAccountUidMap: 16
                }
            }, o = {
                initNetcall: {
                    sid: n,
                    cid: i.netcall.initNetcall,
                    params: [{type: "byte", name: "type"}, {type: "StrArray", name: "accounts"}, {
                        type: "String",
                        name: "pushContent"
                    }, {type: "String", name: "custom"}, {type: "Property", name: "pushConfig"}]
                },
                keepCalling: {
                    sid: n,
                    cid: i.netcall.keepCalling,
                    params: [{type: "byte", name: "type"}, {type: "StrArray", name: "accounts"}, {
                        type: "long",
                        name: "channelId"
                    }]
                },
                calleeAck: {
                    sid: n,
                    cid: i.netcall.calleeAck,
                    params: [{type: "string", name: "account"}, {type: "long", name: "channelId"}, {
                        type: "byte",
                        name: "type"
                    }, {type: "bool", name: "accepted"}]
                },
                hangup: {sid: n, cid: i.netcall.hangup, params: [{type: "long", name: "channelId"}]},
                netcallControl: {
                    sid: n,
                    cid: i.netcall.netcallControl,
                    params: [{type: "long", name: "channelId"}, {type: "byte", name: "type"}]
                },
                verifyChannelId: {
                    sid: n,
                    cid: i.netcall.verifyChannelId,
                    params: [{type: "long", name: "channelId"}, {type: "String", name: "account"}]
                },
                createChannel: {
                    sid: n,
                    cid: i.netcall.createChannel,
                    params: [{type: "String", name: "channelName"}, {type: "String", name: "custom"}, {
                        type: "String",
                        name: "webrtcEnable"
                    }]
                },
                joinChannel: {
                    sid: n,
                    cid: i.netcall.joinChannel,
                    params: [{type: "String", name: "channelName"}, {type: "Property", name: "liveOption"}]
                },
                queryAccountUidMap: {
                    sid: n,
                    cid: i.netcall.queryAccountUidMap,
                    params: [{type: "String", name: "channelName"}, {type: "LongArray", name: "uids"}]
                }
            }, s = "netcall", r = {
                "9_1": {
                    service: s,
                    cmd: "initNetcall",
                    response: [{type: "Number", name: "timetag"}, {type: "Number", name: "uid"}, {
                        type: "Number",
                        name: "channelId"
                    }, {type: "StrArray", name: "turnServerList"}, {
                        type: "StrArray",
                        name: "sturnServerList"
                    }, {type: "StrArray", name: "proxyServerList"}, {
                        type: "StrArray",
                        name: "keepCallingAccounts"
                    }, {type: "StrLongMap", name: "accountUidMap"}, {
                        type: "String",
                        name: "clientConfig"
                    }, {type: "String", name: "serverMap"}]
                },
                "9_2": {
                    service: s,
                    cmd: "beCalled",
                    response: [{type: "Number", name: "timetag"}, {type: "Number", name: "type"}, {
                        type: "Number",
                        name: "channelId"
                    }, {type: "String", name: "account"}, {type: "Number", name: "uid"}, {
                        type: "StrArray",
                        name: "turnServerList"
                    }, {type: "StrArray", name: "sturnServerList"}, {
                        type: "StrArray",
                        name: "proxyServerList"
                    }, {type: "StrLongMap", name: "accountUidMap"}, {
                        type: "String",
                        name: "clientConfig"
                    }, {type: "String", name: "custom"}, {type: "Property", name: "pushConfig"}, {
                        type: "String",
                        name: "serverMap"
                    }]
                },
                "9_3": {service: s, cmd: "keepCalling", response: [{type: "StrArr", name: "accounts"}]},
                "9_4": {service: s, cmd: "calleeAck", response: []},
                "9_5": {
                    service: s,
                    cmd: "notifyCalleeAck",
                    response: [{type: "String", name: "account"}, {type: "long", name: "channelId"}, {
                        type: "byte",
                        name: "type"
                    }, {type: "bool", name: "accepted"}]
                },
                "9_6": {service: s, cmd: "hangup", response: []},
                "9_7": {
                    service: s,
                    cmd: "notifyHangup",
                    response: [{type: "long", name: "channelId"}, {type: "String", name: "account"}, {
                        type: "long",
                        name: "timetag"
                    }]
                },
                "9_8": {service: s, cmd: "netcallControl", response: []},
                "9_9": {
                    service: s,
                    cmd: "notifyNetcallControl",
                    response: [{type: "String", name: "account"}, {type: "byte", name: "type"}, {
                        type: "long",
                        name: "channelId"
                    }]
                },
                "9_10": {service: s, cmd: "verifyChannelId", response: []},
                "9_11": {service: s, cmd: "notifyNetcallRecord", response: [{type: "Property", name: "msg"}]},
                "9_12": {
                    service: s,
                    cmd: "notifyCalleeAckSync",
                    response: [{type: "String", name: "timetag"}, {type: "long", name: "channelId"}, {
                        type: "byte",
                        name: "type"
                    }, {type: "bool", name: "accepted"}, {type: "byte", name: "fromClientType"}]
                },
                "9_13": {service: s, cmd: "createChannel", response: [{type: "long", name: "timetag"}]},
                "9_14": {
                    service: s,
                    cmd: "joinChannel",
                    response: [{type: "long", name: "timetag"}, {type: "long", name: "channelId"}, {
                        type: "StrLongMap",
                        name: "accountUidMap"
                    }, {type: "String", name: "serverMap"}, {type: "String", name: "clientConfig"}, {
                        type: "String",
                        name: "custom"
                    }]
                },
                "9_15": {
                    service: s,
                    cmd: "notifyJoin",
                    response: [{type: "Long", name: "channelId"}, {type: "StrLongMap", name: "accountUidMap"}]
                },
                "9_16": {service: s, cmd: "queryAccountUidMap", response: []}
            };
            t.exports = {idMap: i, cmdConfig: o, packetConfig: r}
        }, 195: function (t, e) {
            "use strict";
            t.exports = {
                pushConfig: {
                    enable: 1,
                    needBadge: 2,
                    needPushNick: 3,
                    pushContent: 4,
                    custom: 5,
                    pushPayload: 6,
                    sound: 7,
                    webrtcEnable: 10
                }, liveOption: {liveEnable: 1, webrtcEnable: 2}
            }
        }, 196: function (t, e) {
            "use strict";
            t.exports = {
                pushConfig: {
                    1: "enable",
                    2: "needBadge",
                    3: "needPushNick",
                    4: "pushContent",
                    5: "custom",
                    6: "pushPayload",
                    7: "sound",
                    10: "webrtcEnable"
                }, liveOption: {1: "liveEnable", 2: "webrtcEnable"}
            }
        }, 230: function (t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            var r = Object.assign || function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                    }
                    return t
                }, a = n(7), c = n(24), u = void 0, l = void 0, h = n(4), d = n(240), p = n(3), f = n(241), m = n(242),
                v = n(231), _ = n(112), g = p.agentVersion, y = function (t) {
                    function e(n) {
                        i(this, e);
                        var s = o(this, t.call(this));
                        return n.container = a.element.n2node(n.container), n.remoteContainer = a.element.n2node(n.remoteContainer),
                            s.setUtil(u), u.undef(n.heartbeat) && (n.heartbeat = !0), u.merge(s, n), s.init(), s
                    }

                    return s(e, t), e
                }(h);
            y.install = function (t) {
                u = t.util, l = t.Promise, f.install(t), m.install(t), v.install(t)
            };
            var C = y.prototype;
            C.init = function () {
                this.signal = null, this.signalInited = !1, this.localStreamInfo = null, this.resetStatus(), this.initProtocol(), this.dataApi = (0, c.DataApi)({
                    appkey: this.nim.options.appKey,
                    platform: "PC-Agent"
                })
            }, C.resetStatus = function () {
                this.channelId = null, this.channelName = null, this.type = null, this.target = null, this.sessionMode = null, this.sessionConfig = {}, this.isCaller = !1, this.callee = null, this.remoteStreamInfo = {}, this.calling = !1, this.callAccepted = !1, this.callerInfo = null, this.nim.protocol.setCurrentNetcall(), this.needQueryAccountMap = {}
            }, C.initProtocol = function () {
                var t = this.nim;
                this.account = this.nim.account, t.on("beCalled", this.onBeCalled.bind(this)), t.on("notifyCalleeAck", this.onCalleeAck.bind(this)), t.on("notifyHangup", this.onHangup.bind(this)), t.on("notifyUploadLog", this.uploadLog.bind(this)), t.on("netcallControl", this.onNetcallControl.bind(this)), t.on("notifyCalleeAckSync", this.onCalleeAckSync.bind(this)), t.on("notifyJoin", this.onNotifyJoin.bind(this))
            }, C.getAccount = function () {
                return this.nim.account
            }, C.getUid = function () {
                return this.accountUidMap ? this.accountUidMap[this.nim.account] || "-1" : "-1"
            }, C.isCurrentChannelId = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.channelId && this.channelId === t.channelId
            }, C.notCurrentChannelId = function (t) {
                return !this.isCurrentChannelId(t)
            }, C.rejectWithNoSignal = function () {
                return this.resetWhenHangup(), l.reject({code: "noConnection"})
            }, C.initSignal = function () {
                var t = this;
                return this.signal ? this.stopSignal().then(function () {
                    return t._initSignal()
                }) : this._initSignal()
            }, C._initSignal = function () {
                var t = this;
                return new l(function (e, n) {
                    var i = t.signal = new f({
                        url: d.signalUrl,
                        client: t,
                        kickLast: t.kickLast,
                        account: t.getAccount(),
                        heartbeat: t.heartbeat,
                        appkey: t.nim.options.appKey
                    });
                    i.on("init", function (i) {
                        return t.log(i), t.checkAgentVersion(i.version) ? (t.localStreamInfo = i, t.signalInited = !0, void e()) : (t.log("插件版本有更新，请下载最新的插件再使用音视频功能"), t.stopSignal(), i.error = "请安装最新版插件，方可使用视频功能", i.errorType = "agent_update", void n(i))
                    }), i.on("initError", function (e) {
                        t.log(e), e = e || {}, 417 === e.code && (e.error = "设备被别的程序占用中, 请检查重试", e.errorType = "device_busy"), "noPC" === e.code && (e.error = "请安装插件PC Agent，方可使用音视频功能", e.errorType = "agent_empty"), n(e), t.rejectWithNoSignal()
                    }), i.on("close", function () {
                        t.emit("signalClosed"), t.stopSignal()
                    }), i.on("devices", function (e) {
                        t.emit("devices", e)
                    }), i.on("login", function (e) {
                        t.emit("sessionStarted", e)
                    }), i.on("deviceStatus", function (e) {
                        t.emit("deviceStatus", e)
                    }), i.on("userJoined", t.onUserJoin.bind(t)), i.on("userLeft", t.onUserLeft.bind(t)), i.on("logUploaded", t.onLogUploaded.bind(t)), i.on("netStatus", function (e) {
                        var n = e.id, i = e.status;
                        t.emit("netStatus", {account: t.getAccountWithUid(n), status: i})
                    }), i.on("statistics", function (e) {
                        t.emit("statistics", e)
                    }), i.on("audioVolume", function (e) {
                        var n = e.self, i = e.receiver, o = {self: n};
                        i && i.forEach(function (e) {
                            var n = e.id, i = e.status;
                            o[t.getAccountWithUid(n)] = {status: i}
                        }), t.emit("audioVolume", o)
                    }), i.on("error", t.onError.bind(t)), i.on("recordMp4", t.onRecordMp4.bind(t)), i.on("heartBeatError", t.onError.bind(t))
                })
            }, C.checkAgentVersion = function () {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0.0.0.0", e = t.split("."), n = g.split("."), i = 0; i < e.length; i++) if (+e[i] < +n[i]) return !1;
                return !0
            }, C.stopSignal = function () {
                var t = this;
                return this.stopLocalStream(), this.stopRemoteStream(), this.signal ? this.signal.stopSession().then(function () {
                    t.signal.destroy(), t.signal = null, t.signalInited = !1
                }) : l.resolve()
            }, C.initNetcall = function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.type,
                    i = e.pushConfig;
                return this.type = n, this.sessionMode = "p2p", this.nim.initNetcall({
                    type: n,
                    accounts: [this.callee],
                    webrtcEnable: e.webrtcEnable || !1,
                    pushConfig: i
                }).then(function (e) {
                    return t.callerInfo = e, t.channelId = e.channelId, l.resolve(e)
                }, function (e) {
                    throw t.resetWhenHangup(), e
                })
            }, C.initSession = function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (this.signalInited) {
                    var n = this.isCaller ? this.callerInfo : e.beCalledInfo;
                    this.parseAccountUidMap(n.accountUidMap);
                    var i = this.sessionConfig || {};
                    return i.awc && this.dataApi.update({key: "awc"}), i.ans && this.dataApi.update({key: "ans"}), i.aec && this.dataApi.update({key: "aec"}), this.signal.startSession(r({}, n, i)).then(function () {
                        return {channelId: t.channelId}
                    })
                }
                return this.rejectWithNoSignal()
            }, C.call = function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.dataApi.update("p2p"), new l(function (n, i) {
                    if (!t.signalInited || t.calling) return t.resetStatus(), i({
                        type: "statusNotMatch",
                        error: "呼叫失败: 当前正在通话中或者Agent唤起失败，请排查"
                    });
                    var o = e.account, s = e.type, r = e.pushConfig, a = e.sessionConfig, c = void 0 === a ? {} : a,
                        u = e.webrtcEnable;
                    if (t.calling = !0, t.isCaller = !0, t.callee = t.target = o, t.sessionConfig = c, c.highAudio && t.dataApi.update("hd_audio"), void 0 !== c.videoFrameRate && t.dataApi.update("fps", 0 === +c.videoFrameRate ? 0 : +c.videoFrameRate + 1), void 0 !== c.videoEncodeMode && t.dataApi.update("video_adaptive_strategy", c.videoEncodeMode || 0), void 0 !== c.videoBitrate && t.dataApi.update("video_max_encode_bitrate", c.videoBitrate || ""), void 0 !== c.videoQuality) {
                        var l = c.videoQuality;
                        l === _.CHAT_VIDEO_QUALITY_540P ? l = _.CHAT_VIDEO_QUALITY_720P : l === _.CHAT_VIDEO_QUALITY_720P && (l = _.CHAT_VIDEO_QUALITY_540P), t.dataApi.update("video_quality", l || 0)
                    }
                    return o ? t.initNetcall({type: s, pushConfig: r, webrtcEnable: u}).then(function (t) {
                        n(t)
                    })["catch"](function (t) {
                        i(t)
                    }) : (t.resetStatus(), void i({code: "noCalleeAccount"}))
                })
            }, C.onBeCalled = function (t) {
                this.log("beCalling", t), this.emit("beCalling", t)
            }, C.response = function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.dataApi.update("p2p");
                var n = e.beCalledInfo;
                if (!n) return l.resolve();
                var i = n.accepted = e.accepted !== !1, o = this.sessionConfig = e.sessionConfig || {};
                if (o.highAudio && this.dataApi.update("hd_audio"), void 0 !== o.videoFrameRate && this.dataApi.update("fps", 0 === +o.videoFrameRate ? 0 : +o.videoFrameRate + 1), void 0 !== o.videoEncodeMode && this.dataApi.update("video_adaptive_strategy", o.videoEncodeMode || 0), void 0 !== o.videoBitrate && this.dataApi.update("video_max_encode_bitrate", o.videoBitrate || ""), void 0 !== o.videoQuality) {
                    var s = o.videoQuality;
                    s === _.CHAT_VIDEO_QUALITY_540P ? s = _.CHAT_VIDEO_QUALITY_720P : s === _.CHAT_VIDEO_QUALITY_720P && (s = _.CHAT_VIDEO_QUALITY_540P), this.dataApi.update("video_quality", s || 0)
                }
                return i ? (this.type = n.type, this.channelId = n.channelId, this.target = n.account, this.calling = !0) : (this.log("rejectNetcall", n), this.packNetcallRecord({
                    type: n.type,
                    channelId: n.channelId,
                    isCaller: !1,
                    target: n.account,
                    recordType: "rejectNetcall"
                })), this.sessionMode = "p2p", this.nim.calleeAck(n).then(function () {
                    if (i) return t.initSession({beCalledInfo: n})
                }, function (e) {
                    throw t.log(e), e
                })
            }, C.onCalleeAck = function (t) {
                if (!this.notCurrentChannelId(t)) return t.accepted ? this.initSession({type: t.type}) : (this.log("netcallRejected", t), this.packNetcallRecord({
                    type: t.type,
                    channelId: t.channelId,
                    isCaller: !0,
                    target: t.account,
                    recordType: "netcallRejected"
                }), this.resetWhenHangup(), this.emit("callRejected", t), void 0)
            }, C.onUserJoin = function (t) {
                this.log("onUserJoin ", t);
                var e = t.account, n = t.uid;
                return !e && n && (t.account = e = this.getAccountWithUid(n)), e ? void this.emitUserJoin(t) : (this.needQueryAccountMap[n] = t, void this.nim.queryAccountUidMap(this.channelName, [n]))
            }, C.emitUserJoin = function (t) {
                var e = t.uid, n = t.isMeeting;
                this.remoteStreamInfo[e] = t, this.dataApi.start({uid: this.getUid()}), n ? this.emit("joinChannel", {
                    type: t.type,
                    uid: t.uid,
                    account: t.account
                }) : (this.callAccepted || (this.callAccepted = !0), this.emit("callAccepted", {
                    type: t.type,
                    account: t.account,
                    uid: t.uid
                }))
            }, C.onUserLeft = function (t) {
                var e = this, n = t.account, i = t.uid, o = t.isMeeting;
                o ? (!n && i && (t.account = this.getAccountWithUid(i)), this.emit("leaveChannel", {account: t.account})) : (this.log("on user left", t), this.calling && setTimeout(function () {
                    t.account = e.getAccountWithUid(t.uid), e.onHangup(t)
                }, 1e3))
            }, C.onNetcallControl = function (t) {
                this.emit("control", t)
            }, C.onCalleeAckSync = function (t) {
                this.emit("callerAckSync", t), this.isCurrentChannelId(t) && this.resetWhenHangup()
            }, C.onNotifyJoin = function (t) {
                var e = t.accountUidMap, n = this.needQueryAccountMap;
                this.parseAccountUidMap(e);
                for (var i in e) {
                    var o = i, s = e[i];
                    if (s in n) {
                        var r = n[s];
                        r.account = o, this.emitUserJoin(r), delete n[s]
                    }
                }
            }, C.onHangup = function (t) {
                this.dataApi.send(), this.emit("hangup", t), this.isCurrentChannelId(t) && this.resetWhenHangup()
            }, C.hangup = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.channelId;
                !e && this.calling && this.channelId && (e = this.channelId), e && (this.dataApi.send(), this.nim.hangup({channelId: e})), e === this.channelId && (this.isCaller && !this.callAccepted && (this.log("cancelNetcallBeforeAccept", {channelId: e}), this.packNetcallRecord({recordType: "cancelNetcallBeforeAccept"})), this.resetWhenHangup())
            }, C.packNetcallRecord = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.recordType,
                    n = u.exist(t.type) ? t.type : this.type, i = u.exist(t.channelId) ? t.channelId : this.channelId,
                    o = u.exist(t.duration) ? t.duration : 0, s = u.exist(t.isCaller) ? t.isCaller : this.isCaller,
                    r = u.exist(t.target) ? t.target : this.target, a = this.getAccount(), c = s ? a : r, l = s ? r : a,
                    h = +new Date;
                this.nim.protocol.onMsg({
                    content: {
                        msg: {
                            attach: JSON.stringify({
                                data: {
                                    calltype: n,
                                    channel: i,
                                    duration: o,
                                    ids: [a, r],
                                    time: h
                                }, id: e
                            }),
                            from: c,
                            fromClientType: s ? 16 : 0,
                            fromDeviceId: "",
                            fromNick: "",
                            idClient: u.guid(),
                            idServer: u.guid(),
                            scene: 0,
                            time: h,
                            to: l,
                            type: 5
                        }
                    }
                })
            }, C.resetWhenHangup = function () {
                this.resetStatus(), this.signalInited && this.signal.stopSession()
            }, C.control = function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.command,
                    i = e.channelId;
                if (i || (i = this.channelId), n && i) return this.dataApi.update("call_control_type"), this.nim.netcallControl({
                    channelId: i,
                    type: n
                })["catch"](function (e) {
                    throw t.log(e), e
                })
            }, C.setVideoViewSize = function (t) {
                return this.signalInited ? this.signal.setVideoViewSize(t) : this.rejectWithNoSignal()
            }, C.setVideoViewRemoteSize = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.signalInited ? (t.account && (t.id = this.getUidWithAccount(t.account)), this.signal.setVideoViewRemoteSize(t)) : this.rejectWithNoSignal()
            }, C.setVideoScale = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.signalInited ? (t.account && (t.id = this.getUidWithAccount(t.account)), this.signal.setVideoScale(t)) : this.rejectWithNoSignal()
            }, C.startLocalStream = function (t) {
                var e = this;
                if (this.dataApi.update("display"), this.signalInited && !this.stream && this.localStreamInfo) {
                    var n = t || this.container, i = this.localStreamInfo.port;
                    this.stream = new m({
                        client: this,
                        url: d.genStreamUrl(i),
                        container: n,
                        mirror: this.mirror
                    }), this.stream.on("resize", function (t) {
                        e.emit("streamResize", t)
                    }), this.stream.on("error", function (t) {
                        e.emit("error", t)
                    })
                }
            }, C.stopLocalStream = function () {
                this.stream && (this.stream.destroy(), this.stream = null)
            }, C.startRemoteStream = function () {
                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                "p2p" === this.sessionMode ? (t = this.getUidWithAccount(this.target), this.remoteContainer || this.target || this.nim.logger.error("不传参数且点对点模式实例化Netcall必须设置remoteContainer与target；传参数必须包含account，node"), !this.getRemoteStream(t) && this.remoteStreamInfo[t] && this.addRemoteStream(this.remoteStreamInfo[t])) : (t = e.uid || this.getUidWithAccount(e.account), e.node = a.element.n2node(e.node), t && e.node ? this.addRemoteStream(this.remoteStreamInfo[t], e.node) : this.nim.logger.error("不传参数且点对点模式实例化Netcall必须设置remoteContainer与target；传参数必须包含account，node"))
            }, C.stopRemoteStream = function (t) {
                return t ? this.removeRemoteStream(t) : this.removeRemoteStreams()
            }, C.addRemoteStream = function (t, e) {
                var n = this, i = t.uid, o = t.port;
                this.remoteStreams || (this.remoteStreams = {});
                var s = this.remoteStreams[i];
                s && s.destroy(), s = this.remoteStreams[i] = new m({
                    client: this,
                    isRemote: !0,
                    url: d.genStreamUrl(o),
                    container: e || this.remoteContainer,
                    mirror: this.mirrorRemote
                }), s.on("resize", function (t) {
                    n.emit("remoteStreamResize", t)
                }), s.on("error", function (t) {
                    n.emit("error", t)
                })
            }, C.removeRemoteStreams = function () {
                var t = this;
                this.remoteStreams && Object.keys(this.remoteStreams).forEach(function (e) {
                    t.remoteStreams[e].destroy()
                }), this.remoteStreams = {}
            }, C.removeRemoteStream = function (t) {
                var e = this.getUidWithAccount(t);
                if (!this.remoteStreams[e]) {
                    var n = {code: "accountNotMatch"};
                    throw n
                }
                this.remoteStreams[e].destroy()
            }, C.getRemoteStream = function (t) {
                var e = this.getUidWithAccount(t);
                return this.remoteStreams && this.remoteStreams[e]
            }, C.suspendLocalStream = function () {
                this.stream && this.stream.suspend()
            }, C.resumeLocalStream = function () {
                this.stream && this.stream.resume()
            }, C.suspendRemoteStream = function (t) {
                var e = this.getRemoteStream(t || this.target);
                e && e.suspend()
            }, C.resumeRemoteStream = function (t) {
                var e = this.getRemoteStream(t || this.target);
                e && e.resume()
            }, C.switchVideoToAudio = function () {
                var t = this;
                return this.signalInited ? (this.dataApi.update("switch_p2p_type"), this.signal.switchVideoToAudio().then(function () {
                    t.type = _.NETCALL_TYPE_AUDIO
                })) : this.rejectWithNoSignal()
            }, C.switchAudioToVideo = function () {
                var t = this;
                return this.signalInited ? (this.dataApi.update("switch_p2p_type"), this.signal.switchAudioToVideo().then(function () {
                    t.type = _.NETCALL_TYPE_VIDEO
                })) : this.rejectWithNoSignal()
            }, C.getDevicesOfType = function (t) {
                return this.signalInited ? this.signal.getDevicesOfType(t) : this.rejectWithNoSignal()
            }, C.getStoredDevicesOfType = function (t) {
                return this.signalInited ? (t = +t, t === _.DEVICE_TYPE_AUDIO_OUT_LOCAL && (t = _.DEVICE_TYPE_AUDIO_OUT_CHAT), this.signal.devicesMap[t]) : void this.rejectWithNoSignal()
            }, C.hasDevicesOfType = function (t) {
                return this.getStoredDevicesOfType(t)
            }, C.getStartedDeviceOfType = function (t) {
                return this.signalInited ? this.signal.deviceMap[t] : this.rejectWithNoSignal()
            }, C.hasStartedDeviceOfType = function (t) {
                return this.getStartedDeviceOfType(t)
            }, C.stopDevice = function (t) {
                return this.signalInited ? this.hasStartedDeviceOfType(t) ? this.signal.stopDevice(t) : l.resolve() : this.rejectWithNoSignal()
            }, C.startDevice = function (t) {
                var e = t.type, n = t.device;
                if (this.signalInited) {
                    if (u.exist(e) && !n) {
                        if (this.hasStartedDeviceOfType(e)) return l.resolve();
                        this.hasDevicesOfType(e) && (n = t.device = this.getStoredDevicesOfType(e)[0])
                    }
                    return n ? this.signal.startDevice(t) : l.reject(r({type: "noDevice"}, t))
                }
                return this.rejectWithNoSignal()
            }, C.setSessionVideoQuality = function (t) {
                if (this.signalInited) {
                    if (void 0 !== t) {
                        var e = t;
                        e === _.CHAT_VIDEO_QUALITY_540P ? e = _.CHAT_VIDEO_QUALITY_720P : e === _.CHAT_VIDEO_QUALITY_720P && (e = _.CHAT_VIDEO_QUALITY_540P), this.dataApi.update("video_quality", e || 0)
                    }
                    return this.signal.setVideoQuality(t)
                }
                return this.rejectWithNoSignal()
            }, C.setSessionVideoFrameRate = function (t) {
                return this.signalInited ? (this.dataApi.update("fps", void 0 !== t ? +t + 1 : 0), this.signal.setVideoFrameRate(t)) : this.rejectWithNoSignal()
            }, C.setSessionVideoBitrate = function (t) {
                return this.signalInited ? (this.dataApi.update("video_max_encode_bitrate", t || ""), this.signal.setVideoBitrate(t)) : this.rejectWithNoSignal()
            }, C.setCaptureVolume = function (t) {
                return t = void 0 === t ? 255 : t, t.constructor === String && (t = +t || 255), this.signalInited ? this.signal.setCaptureVolume(t) : this.rejectWithNoSignal()
            }, C.setPlayVolume = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                /(Number|String)/.test(t.constructor) && (t = {volume: t});
                var e = t, n = e.volume;
                return n = void 0 === n ? 255 : n, this.signalInited ? this.signal.setPlayVolume(n) : this.rejectWithNoSignal()
            }, C.netDetect = function (t, e) {
                return this.dataApi.update({key: "net_detect"}), t = void 0 === t ? _.NETDETECT_AUDIO : t, e = e || _.CHAT_VIDEO_QUALITY_480P, this.signalInited ? this.signal.netDetect({
                    appKey: this.nim.options.appKey,
                    type: t,
                    quality: e
                }) : this.rejectWithNoSignal()
            }, C.uploadLog = function () {
                var t = this;
                this.signalInited && this.nim.getSimpleNosToken().then(function (e) {
                    t.signal.uploadLog(e)
                }, function (e) {
                    t.log(e)
                })
            }, C.onLogUploaded = function (t) {
                this.nim.uploadSdkLogUrl(t)
            }, C.log = function () {
                var t = this.nim.logger;
                t.log.apply(t, arguments)
            }, C.info = function () {
                var t = this.nim.logger;
                t.info.apply(t, arguments)
            }, C.parseAccountUidMap = function (t) {
                var e = this;
                Object.keys(t).forEach(function (n) {
                    e.addAccountUidMap({account: n, uid: t[n]})
                })
            }, C.addAccountUidMap = function (t) {
                var e = t.account, n = t.uid;
                this.uidAccountMap || (this.uidAccountMap = {}), this.uidAccountMap[n] = e, this.accountUidMap || (this.accountUidMap = {}), this.accountUidMap[e] = n
            }, C.getAccountWithUid = function (t) {
                if (this.uidAccountMap) return this.uidAccountMap[t]
            }, C.getUidWithAccount = function (t) {
                if (this.accountUidMap) return this.accountUidMap[t]
            }, C.onError = function (t) {
                this.emit("error", t)
            }, C.setAudioBlack = function (t) {
                var e = this.getUidWithAccount(t);
                if (e) return this.signal.setAudioBlack(this.getUidWithAccount(t), 1);
                var n = {code: "accountNotMatch"};
                return l.reject(n)
            }, C.setAudioStart = function (t) {
                var e = this.getUidWithAccount(t);
                if (e) return this.signal.setAudioBlack(this.getUidWithAccount(t), 0);
                var n = {code: "accountNotMatch"};
                return l.reject(n)
            }, C.setVideoBlack = function (t) {
                return this.signal.setVideoBlack(this.getUidWithAccount(t), 1)
            }, C.setVideoShow = function (t) {
                return this.signal.setVideoBlack(this.getUidWithAccount(t), 0)
            }, C.startRecordMp4 = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.dataApi.update({key: "record"}), u.verifyOptions(t, "path"), t.account && (t.id = this.getUidWithAccount(t.account)), this.signal.startRecordMp4(t)
            }, C.stopRecordMp4 = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return t.account && (t.id = this.getUidWithAccount(t.account)), this.signal.stopRecordMp4(t)
            }, C.startRecordAac = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.dataApi.update({key: "audio_record"}), u.verifyOptions(t, "path"), this.signal.startRecordAac(t)
            }, C.stopRecordAac = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return this.signal.stopRecordAac(t)
            }, C.onRecordMp4 = function (t, e) {
                t.type = e, this.emit("recordMp4", t)
            }, C.destroy = function () {
            }, C.setNetcallSession = function (t) {
                return this.calling ? l.reject({
                    type: "statusNotMatch",
                    error: "开启会话失败: 当前正在通话中"
                }) : (this.calling = !0, this.channelId = t.channelId, this.type = +t.netcallType, this.imInfo = t, this.imInfo.rtcUrls = t.rtcServerMap, this.beCalledInfo = this.imInfo, this.target = t.target.account, this.parseAccountUidMap(t.accountUidMap), this.signal.startSession(r({}, this.imInfo, {type: this.type}, this.imInfo.sessionConfig), !1))
            }, C.ans = function (t) {
                return this.signal ? (this.dataApi.update({key: "ans"}), this.sessionConfig.ns = ~~t, this.signal.audioControl({ns: this.sessionConfig.ns})) : l.reject({code: "noConnection"})
            }, C.aec = function (t) {
                return this.signal ? (this.dataApi.update({key: "aec"}), this.sessionConfig.aec = ~~t, this.signal.audioControl({aec: this.sessionConfig.aec})) : l.reject({code: "noConnection"})
            }, C.voiceDetection = function (t) {
                return this.signal ? (this.sessionConfig.vad = ~~t, this.signal.audioControl({vad: this.sessionConfig.vad})) : l.reject({code: "noConnection"})
            }, C.awc = function (t) {
                return this.signal ? (this.dataApi.update({key: "awc"}), this.sessionConfig.awc = ~~t, this.signal.awc(this.sessionConfig.awc)) : l.reject({code: "noConnection"})
            }, t.exports = y, n(239)
        }, 231: function (t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            var r = void 0, a = n(4), c = n(232), u = n(251), l = n(250), h = function (t) {
                function e(n) {
                    i(this, e);
                    var s = o(this, t.call(this));
                    return r.merge(s, n), s.init(), s
                }

                return s(e, t), e
            }(a);
            h.install = function (t) {
                r = t.util
            };
            var d = h.prototype;
            d.init = function () {
                this.reset()
            }, d.reset = function () {
                this.width = 0, this.height = 0
            }, d.initCanvas = function (t) {
                r.merge(this, t);
                var e = this.container || document.body, n = this.canvas;
                n || (n = this.canvas = document.createElement("canvas"), e.appendChild(n)), n.width = this.width, n.height = this.height;
                var i = this.gl;
                if (i || (i = this.gl = c.getWebGLContext(n)), i) i.viewport(0, 0, this.width, this.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT), c.initShaders(i, u, l), this.initBuffer(i), this.initTextures(i); else {
                    var o = {code: "notSupportWebGl"};
                    this.emit("error", o)
                }
            }, d.initBuffer = function (t) {
                this.positionLocation = t.getAttribLocation(t.program, "a_position"), this.texCoordLocation = t.getAttribLocation(t.program, "a_texCoord"), this.texCoordBuffer = t.createBuffer()
            }, d.initTextures = function (t) {
                this.yTexture = this.createTexture(t.TEXTURE0), this.uTexture = this.createTexture(t.TEXTURE1), this.vTexture = this.createTexture(t.TEXTURE2);
                var e = t.getUniformLocation(t.program, "Ytex");
                t.uniform1i(e, 0);
                var n = t.getUniformLocation(t.program, "Utex");
                t.uniform1i(n, 1);
                var i = t.getUniformLocation(t.program, "Vtex");
                t.uniform1i(i, 2)
            }, d.createTexture = function (t) {
                var e = this.gl, n = e.createTexture();
                return e.activeTexture(t), e.bindTexture(e.TEXTURE_2D, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), n
            }, d.destroyTextures = function () {
                var t = this.gl;
                t && (t.deleteTexture(this.yTexture), t.deleteTexture(this.uTexture), t.deleteTexture(this.vTexture)), this.yTexture = null, this.uTexture = null, this.vTexture = null
            }, d.destroyBuffer = function () {
                var t = this.gl;
                t && this.texCoordBuffer && t.deleteBuffer(this.texCoordBuffer), this.texCoordBuffer = null
            }, d.updateShaders = function () {
                var t = this.gl, e = void 0;
                e = this.mirror ? new Float32Array([-1, 1, 1, 0, -1, -1, 1, 1, 1, 1, 0, 0, 1, -1, 0, 1]) : new Float32Array([-1, 1, 0, 0, -1, -1, 0, 1, 1, 1, 1, 0, 1, -1, 1, 1]), t.bindBuffer(t.ARRAY_BUFFER, this.texCoordBuffer), t.bufferData(t.ARRAY_BUFFER, e, t.STATIC_DRAW);
                var n = e.BYTES_PER_ELEMENT;
                t.vertexAttribPointer(this.positionLocation, 2, t.FLOAT, !1, 4 * n, 0), t.vertexAttribPointer(this.texCoordLocation, 2, t.FLOAT, !1, 4 * n, 2 * n), t.enableVertexAttribArray(this.positionLocation), t.enableVertexAttribArray(this.texCoordLocation)
            }, d.updateTextures = function (t) {
                var e = t.y, n = t.u, i = t.v, o = this.gl, s = this.width, r = this.height;
                this.updateTexture(o.TEXTURE0, this.yTexture, e, s, r), this.updateTexture(o.TEXTURE1, this.uTexture, n, s / 2, r / 2), this.updateTexture(o.TEXTURE2, this.vTexture, i, s / 2, r / 2), o.finish()
            }, d.updateTexture = function (t, e, n, i, o) {
                var s = this.gl;
                s.activeTexture(t), s.bindTexture(s.TEXTURE_2D, e), s.texImage2D(s.TEXTURE_2D, 0, s.LUMINANCE, i, o, 0, s.LUMINANCE, s.UNSIGNED_BYTE, n)
            }, d.drawImage = function (t) {
                if (!this.destroyed) {
                    var e = t.width, n = t.height, i = t.y, o = t.u, s = t.v;
                    e === this.width && n === this.height || (this.width = e, this.height = n, this.clean(), this.initCanvas({
                        width: e,
                        height: n
                    }), this.emit("resize", {
                        width: e,
                        height: n,
                        isRemote: this.isRemote,
                        container: this.container
                    })), this.updateShaders(), this.updateTextures({y: i, u: o, v: s});
                    var r = this.gl;
                    r.drawArrays(r.TRIANGLE_STRIP, 0, 4)
                }
            }, d.destroy = function () {
                this.destroyed || (this.destroyed = !0, this.clean(), this.reset())
            }, d.clean = function () {
                this.destroyTextures(), this.destroyBuffer(), this.removeGl()
            }, d.removeGl = function () {
                this.canvas && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this.canvas = null, this.canvasInited = !1, this.gl = null
            }, t.exports = h
        }, 232: function (t, e) {
            "use strict";
            var n = {}, i = n.create3DContext = function (t, e) {
                for (var n = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], i = null, o = 0; o < n.length; ++o) {
                    try {
                        i = t.getContext(n[o], e)
                    } catch (s) {
                    }
                    if (i) {
                        console.log("use", n[o]);
                        break
                    }
                }
                return i
            };
            n.initShaders = function (t, e, n) {
                var i = o(t, e, n);
                return i ? (t.useProgram(i), t.program = i, !0) : (console.log("Failed to create program"), !1)
            };
            var o = n.createProgram = function (t, e, n) {
                var i = s(t, t.VERTEX_SHADER, e), o = s(t, t.FRAGMENT_SHADER, n);
                if (!i || !o) return null;
                var r = t.createProgram();
                if (!r) return null;
                t.attachShader(r, i), t.attachShader(r, o), t.linkProgram(r);
                var a = t.getProgramParameter(r, t.LINK_STATUS);
                if (!a) {
                    var c = t.getProgramInfoLog(r);
                    return console.log("Failed to link program: " + c), t.deleteProgram(r), t.deleteShader(o), t.deleteShader(i), null
                }
                return r
            }, s = n.loadShader = function (t, e, n) {
                var i = t.createShader(e);
                return null == i ? (console.log("unable to create shader"), null) : (t.shaderSource(i, n), t.compileShader(i), i)
            };
            n.getWebGLContext = function (t, e) {
                var n = i(t);
                return n ? n : null
            }, window.requestAnimationFrame || (window.requestAnimationFrame = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    window.setTimeout(t, 1e3 / 60)
                }
            }()), window.cancelAnimationFrame || (window.cancelAnimationFrame = window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame || window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame || window.clearTimeout), t.exports = n
        }, 239: function (t, e, n) {
            "use strict";
            var i = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }, o = n(230), s = n(112), r = o.prototype, a = void 0;
            r.setUtil = function (t) {
                a = t
            }, r.createChannel = function (t) {
                return a.verifyOptions(t, "channelName"), t.custom = t.custom || "", this.dataApi.update("meeting"), t.webrtcEnable || delete t.webrtcEnable, this.nim.createChannel(t)
            }, r.joinChannel = function (t) {
                var e = this;
                this.dataApi.update("meeting"), a.verifyOptions(t, "channelName type");
                var n = t.type, o = t.sessionConfig, r = void 0 === o ? {} : o;
                if (r.bypassRtmp = t.liveEnable, r.customLayout = t.layout || t.customLayout, t.liveEnable && this.dataApi.update("bypass", void 0 !== r.splitMode ? +r.splitMode + 1 : 0), r.highAudio && this.dataApi.update("hd_audio"), void 0 !== r.videoFrameRate && this.dataApi.update("fps", 0 === +r.videoFrameRate ? 0 : +r.videoFrameRate + 1), void 0 !== r.videoEncodeMode && this.dataApi.update("video_adaptive_strategy", r.videoEncodeMode || 0), void 0 !== r.videoBitrate && this.dataApi.update("video_max_encode_bitrate", r.videoBitrate || ""), void 0 !== r.videoQuality) {
                    var c = r.videoQuality;
                    c === s.CHAT_VIDEO_QUALITY_540P ? c = s.CHAT_VIDEO_QUALITY_720P : c === s.CHAT_VIDEO_QUALITY_720P && (c = s.CHAT_VIDEO_QUALITY_540P), this.dataApi.update("video_quality", c || 0)
                }
                if (r.awc && this.dataApi.update({key: "awc"}), r.ans && this.dataApi.update({key: "ans"}), r.aec && this.dataApi.update({key: "aec"}), this.signalInited) return this.nim.joinChannel({
                    channelName: t.channelName,
                    liveEnable: t.liveEnable,
                    webrtcEnable: t.webrtcEnable
                }).then(function (o) {
                    return console.log("joinchannel obj", o), console.log("joinchannel options", t), e.callerInfo = o, e.channelId = o.channelId, e.channelName = t.channelName, e.sessionMode = "meeting", e.parseAccountUidMap(o.accountUidMap), o.uid = e.getUidWithAccount(e.account), e.dataApi.start({uid: o.uid}), e.signal.startSession(i({}, o, {type: n}, t.sessionConfig), !0)
                });
                var u = {code: "noConnection"};
                return Promise.reject(u)
            }, r.leaveChannel = function () {
                if (this.signalInited) return this.dataApi.send(), this.signal.stopSession();
                var t = {code: "noConnection"};
                return Promise.reject(t)
            }, r.changeRoleToPlayer = function () {
                return this.signal.setRole(0)
            }, r.changeRoleToAudience = function () {
                return this.signal.setRole(1)
            }, r.updateRtmpUrl = function (t) {
                return this.signal.updateRtmpUrl(t)
            }
        }, 240: function (t, e) {
            "use strict";
            var n = "wss://localhost.netease.im:", i = {
                baseUrl: n, signalUrl: n + "30000", streamUrl: n + "40000", genStreamUrl: function (t) {
                    return "" + n + t
                }
            };
            t.exports = i
        }, 241: function (t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            var r = Object.assign || function (t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            }, a = void 0, c = n(4), u = n(112), l = n(243), h = n(67), d = function (t) {
                function e(n) {
                    i(this, e);
                    var s = o(this, t.call(this));
                    return a.merge(s, n), s.reset(), window.addEventListener("beforeunload", function () {
                        s.destroy()
                    }), s
                }

                return s(e, t), e
            }(c);
            d.install = function (t) {
                a = t.util
            };
            var p = d.prototype;
            p.reset = function () {
                this.inited = !1, this.isMeeting = !1, this.hasInvokePC = !1, this.cmdId = 1, this.cmdTasksMap = {}, this.sessionStopped = !1, this.devicesMap = {}, this.deviceMap = {}, this.initSocket(), this.audioGroup = {
                    aec: 1,
                    ns: 1,
                    vad: 1,
                    awc: 0
                }
            }, p.initSocket = function () {
                var t = this.socket = new WebSocket(this.url);
                t.onopen = this.onOpen.bind(this), t.onmessage = this.onMessage.bind(this), t.onerror = this.onError.bind(this), t.onclose = this.onClose.bind(this)
            }, p.onOpen = function (t) {
                var e = this, n = this.heartbeat ? 1 : 0, i = this.getName() + " open -> signal.js";
                this.inited = !0, this.logToConsole(i), this.log(i), this.emit("open"), this.sendCmd({
                    type: "on_init",
                    info: {account: this.account, type: this.kickLast ? 1 : 0, heartbeat: n, app_key: this.appkey}
                }).then(this.onInit.bind(this))["catch"](function (t) {
                    e.logToConsole("init error -> signal.js", t), e.emit("initError", t)
                })
            }, p.onError = function (t) {
                if (!this.destroyed && this.inited) {
                    var e = this.getName() + " error -> signal.js";
                    this.logToConsole(e)
                }
            }, p.onClose = function (t) {
                var e = this;
                if (!this.destroyed) if (this.inited) {
                    var n = this.getName() + " close -> signal.js : " + t.code;
                    this.logToConsole(n), this.inited = !1, this.emit("close")
                } else {
                    this.hasInvokePC || (this.hasInvokePC = !0, this.invokePC());
                    var i = this.backoff;
                    i || (i = this.backoff = new h({
                        min: 1e3,
                        max: 2e3
                    })), 3 === i.attempts ? this.emit("initError", {code: "noPC"}) : setTimeout(function () {
                        e.initSocket()
                    }, i.duration())
                }
            }, p.invokePC = function () {
                var t = "NIMWebAgent:invokePC", e = document.createElement("iframe");
                e.src = t, document.body.appendChild(e), setTimeout(function () {
                    e.parentNode && e.parentNode.removeChild(e)
                }, 0)
            }, p.onMessage = function (t) {
                if (!this.destroyed) {
                    var e = JSON.parse(t.data), n = e.cmd_id, i = e.cmd_type, o = e.cmd_info;
                    this.shouldPrintMsg({
                        cmdType: i,
                        cmdInfo: o
                    }) && "on_heartbeat_notify" !== i && this.client.info("signal socket msg", e);
                    var s = this.cmdTasksMap[n];
                    if (s) delete this.cmdTasksMap[n], 200 === o.code ? s.resolve(o) : s.reject(o); else switch (i) {
                        case"device_status_notify":
                            this.onDeviceStatus(o);
                            break;
                        case"session_notify":
                            this.onSessionNotify(o);
                            break;
                        case"upload_log_notify":
                            this.onUploadLogNotify(o)
                    }
                }
            }, p.shouldPrintMsg = function (t) {
                var e = t.cmdType, n = t.cmdInfo;
                return "session_notify" !== e || !n.audio_volume && !n.net && !n.static_info
            }, p.sendCmd = function (t) {
                var e = this;
                return new Promise(function (n, i) {
                    var o = "on_heartbeat" === t.type ? 0 : e.cmdId++,
                        s = r({cmd_id: o, cmd_type: t.type, cmd_info: t.info || {}}, t.extra);
                    e.socket && e.socket.readyState === WebSocket.OPEN ? ("on_heartbeat" !== t.type && e.logToConsole("send signal cmd", s), e.cmdTasksMap[o] = {
                        resolve: n,
                        reject: i
                    }, e.socket.send(JSON.stringify(s))) : i({code: "noConnection"})
                })
            }, p.onInit = function (t) {
                var e = t.code, n = t.version, i = t.port, o = t.device_list_notify;
                200 === e && (o.forEach(this.onDevices, this), this.emit("init", {
                    port: i,
                    version: n,
                    code: e
                }), this.startHeartBeat())
            }, p.startHeartBeat = function () {
                var t = this;
                this.heartBeatTimer && this.stopHeartBeat(), this.heartBeatTimer = setInterval(function () {
                    t.sendCmd({type: "on_heartbeat", info: {}})["catch"](function () {
                        t.emit("heartBeatError", {type: "heartbeatError"})
                    })
                }, 15e3)
            }, p.stopHeartBeat = function () {
                clearInterval(this.heartBeatTimer), this.heartBeatTimer = null
            }, p.setVideoViewSize = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = parseInt(t.width) || 0,
                    n = parseInt(t.height) || 0, i = void 0 === t.cut ? 1 : ~~t.cut;
                return this.sendCmd({type: "on_capture_video_size", info: {width: e, height: n, cut: i}})
            }, p.setVideoViewRemoteSize = function (t) {
                var e = parseInt(t.width) || 0, n = parseInt(t.height) || 0, i = t.id || 0,
                    o = void 0 === t.cut ? 1 : ~~t.cut;
                return this.sendCmd({
                    type: "on_rec_video_size", info: {
                        id: i, width: e, height: n, cut: o
                    }
                })
            }, p.setVideoScale = function (t) {
                var e = t.type, n = void 0 === e ? u.CHAT_VIDEO_SCALE_None : e, i = t.id;
                return this.sendCmd({type: "on_send_video_Scale", info: {id: i, type: n}})
            }, p.getDevicesOfType = function (t) {
                var e = this;
                return this.sendCmd({type: "on_get_devices", info: {type: t}}).then(function (t) {
                    return t.devices = t.devices || [], e.onDevices(t), t
                })["catch"](function (t) {
                    throw t
                })
            }, p.onDevices = function (t) {
                var e = t.type, n = t.devices;
                if (n && n.length) {
                    l.sortDevices(n);
                    var i = u.getDeviceTypeStr(e);
                    i && (this.devicesMap[e] = n, this.emit("devices", {type: e, typeStr: i, devices: n}))
                }
            }, p.startAllDevices = function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.videoQuality, i = e.audioOutType;
                Object.keys(this.devicesMap).forEach(function (e) {
                    e = +e, e === u.DEVICE_TYPE_AUDIO_OUT_CHAT && i === u.DEVICE_TYPE_AUDIO_OUT_LOCAL && (e = i);
                    var o = t.devicesMap[e];
                    t.startDevice({device: o[0], type: e, videoQuality: n})
                })
            }, p.startDevice = function (t) {
                var e = this, n = t.device, i = t.type, o = t.width, s = t.height;
                if (n) {
                    i = +i;
                    var r = {type: i, path: n.path};
                    return i === u.DEVICE_TYPE_VIDEO && (r.width = parseInt(o) || 0, r.height = parseInt(s) || 0), this.deviceMap[i] = n, this.sendCmd({
                        type: "on_start_device",
                        info: r
                    })["catch"](function () {
                        throw delete e.deviceMap[i], r
                    })
                }
            }, p.stopDevice = function (t) {
                var e = this, n = this.deviceMap[t];
                return delete this.deviceMap[t], this.sendCmd({
                    type: "on_stop_device",
                    info: {type: t}
                })["catch"](function () {
                    e.deviceMap[t] = n
                })
            }, p.onDeviceStatus = function (t) {
                var e = t.type, n = t.status, i = 1 === (1 & n), o = 4 === (4 & n), s = 8 === (8 & n),
                    a = 16 === (16 & n);
                s && (this.deviceMap[e] = t, this.emit("deviceStatus", r({}, t, {status: "started"}))), a && (delete this.deviceMap[e], this.emit("deviceStatus", r({}, t, {status: "stopped"}))), o && (this.deviceMap[e] = t, this.emit("deviceStatus", r({}, t, {status: "reset"}))), i && this.emit("deviceStatus", r({}, t, {status: "change"}))
            }, p.startSession = function (t, e) {
                var n = this;
                this.sessionStopped = !1;
                var i = a.guid();
                this.sessionId = i;
                var o = t.type;
                this.type = o;
                var s = {
                    id: t.uid,
                    cid: t.channelId,
                    type: o,
                    p2p_connect: 1,
                    dispatch: t.serverMap,
                    config: t.clientConfig,
                    v_encode_mode: this.normalizeVideoEncodeMode(t.videoEncodeMode),
                    video_quality: this.normalizeVideoQuality(t.videoQuality),
                    video_record: t.recordVideo ? 1 : 0,
                    record: t.recordAudio ? 1 : 0,
                    high_rate: t.highAudio ? 1 : 0,
                    frame_rate: this.normalizeVideoFrameRate(t.videoFrameRate),
                    max_video_rate: this.normalizeVideoBitrate(t.videoBitrate),
                    custom_layout: t.customLayout
                };
                return e && (s.meeting_mode = 1, s.bypass_rtmp = t.bypassRtmp ? 1 : 0, s.rtmp_url = t.rtmpUrl || "", s.rtmp_record = t.rtmpRecord ? 1 : 0, s.split_mode = t.splitMode || 0), this.sendCmd({
                    type: "on_start_chat",
                    info: s,
                    extra: {session_id: i}
                }).then(function (i) {
                    var o = i.login, s = i.error;
                    if (s) throw s;
                    return n.isMeeting = e, void 0 !== t.ns && n.audioControl({ns: t.ns}), void 0 !== t.vad && n.audioControl({vad: t.vad}), void 0 !== t.aec && n.audioControl({aec: t.aec}), void 0 !== t.awc && n.awc(t.awc), {login: o}
                })
            }, p.stopSession = function () {
                return this.sessionStopped ? Promise.resolve() : (this.sessionStopped = !0, this.isMeeting = !1, this.sendCmd({type: "on_stop_chat"}))
            }, p.clear = function () {
                this.sendCmd({type: "on_clear"})
            }, p.switchVideoToAudio = function () {
                return this.sendCmd({type: "on_set_chat_mode", info: {type: u.NETCALL_TYPE_AUDIO}})
            }, p.switchAudioToVideo = function () {
                return this.sendCmd({type: "on_set_chat_mode", info: {type: u.NETCALL_TYPE_VIDEO}})
            }, p.logToConsole = function () {
                var t = this.client;
                t && t.log.apply(t, arguments)
            }, p.log = function (t) {
                t && this.doLog({msg: t, level: 3})
            }, p.warn = function (t) {
                t && this.doLog({msg: t, level: 2})
            }, p.err = function (t) {
                t && this.doLog({msg: t, level: 1})
            }, p.doLog = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.msg, n = t.level;
                return this.sendCmd({type: "on_log", info: {type: n, content: "" + e}})["catch"](function () {
                })
            }, p.uploadLog = function (t) {
                var e = t.bucket, n = t.objectName, i = t.token;
                return this.sendCmd({
                    type: "on_upload_log",
                    info: {nos_bucket: e, nos_object: n, nos_header_token: i}
                })["catch"](function () {
                })
            }, p.normalizeVideoEncodeMode = function (t) {
                return parseInt(t) || u.CHAT_VIDEO_ENCODEMODE_NORMAL
            }, p.normalizeVideoQuality = function (t) {
                return parseInt(t) || u.CHAT_VIDEO_QUALITY_480P
            }, p.setVideoQuality = function (t) {
                return this.sendCmd({type: "on_set_video_quality", info: {type: this.normalizeVideoQuality(t)}})
            }, p.normalizeVideoFrameRate = function (t) {
                return parseInt(t) || u.CHAT_VIDEO_FRAME_RATE_NORMAL
            }, p.setVideoFrameRate = function (t) {
                return this.sendCmd({type: "on_set_video_frame_rate", info: {type: this.normalizeVideoFrameRate(t)}})
            }, p.normalizeVideoBitrate = function (t) {
                return parseInt(t) || 0
            }, p.setVideoBitrate = function (t) {
                return this.sendCmd({type: "on_set_video_bitrate", info: {code: this.normalizeVideoBitrate(t)}})
            }, p.netDetect = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.appKey, n = t.type,
                    i = t.quality, o = void 0 === i ? 0 : i;
                return this.sendCmd({type: "on_net_detect", info: {app_key: e, type: n, quality: o}})
            }, p.normalizeVolumn = function (t) {
                return t = +t, a.isNumber(t) && !isNaN(t) || (t = 255), t < 0 && (t = 0), t > 255 && (t = 255), t
            }, p.setCaptureVolume = function (t) {
                return t = this.normalizeVolumn(t), this.sendCmd({type: "on_capture_volume", info: {status: t}})
            }, p.setPlayVolume = function (t) {
                return t = this.normalizeVolumn(t), this.sendCmd({type: "on_play_volume", info: {status: t}})
            }, p.setRole = function (t) {
                return this.sendCmd({type: "on_set_viewer", info: {status: t}})
            }, p.setAudioBlack = function (t, e) {
                return this.sendCmd({type: "on_set_audio_black", info: {id: t, status: e}})
            }, p.setVideoBlack = function (t, e) {
                return this.sendCmd({type: "on_set_video_black", info: {id: t, status: e}})
            }, p.updateRtmpUrl = function (t) {
                return this.sendCmd({type: "on_update_rtmp_url", info: {content: t}})
            }, p.startRecordMp4 = function (t) {
                var e = t.path, n = t.id, i = void 0 === n ? "" : n;
                return this.sendCmd({type: "on_record_mp4", info: {path: e, id: i}})
            }, p.stopRecordMp4 = function (t) {
                var e = t.id, n = void 0 === e ? 0 : e;
                return this.sendCmd({type: "on_stop_record_mp4", info: {id: n}})
            }, p.startRecordAac = function (t) {
                var e = t.path;
                return this.sendCmd({type: "on_record_aac", info: {path: e}})
            }, p.stopRecordAac = function () {
                return this.sendCmd({type: "on_stop_record_aac", info: {}})
            }, p.onSessionNotify = function (t) {
                t && (t.user_joined ? (console.log("onSessionNotify ", t), this.emit("userJoined", {
                    uid: t.user_joined.id,
                    port: t.user_joined.port,
                    type: this.type,
                    isMeeting: this.isMeeting
                })) : t.user_left ? this.emit("userLeft", {
                    uid: t.user_left.id,
                    type: t.user_left.status,
                    isMeeting: this.isMeeting
                }) : t.net ? this.emit("netStatus", t.net) : t.static_info ? this.emit("statistics", t.static_info) : t.audio_volume ? this.emit("audioVolume", t.audio_volume) : t.error ? this.emit("error", t.error) : t.mp4_start ? this.emit("recordMp4", t.mp4_start, "start") : t.mp4_close && this.emit("recordMp4", t.mp4_close, "close"))
            }, p.onUploadLogNotify = function (t) {
                var e = t.code, n = t.url;
                200 === e && this.emit("logUploaded", {url: n})
            }, p.getName = function () {
                return "signal socket " + this.url
            }, p.destroy = function () {
                this.destroyed = !0, this.stopHeartBeat();
                var t = "signal close -> signal.js";
                this.logToConsole(t), this.socket && (this.socket.onopen = null, this.socket.onmessage = null, this.socket.onerror = null, this.socket.onclose = null, this.socket.readyState === WebSocket.OPEN && (this.clear(), this.socket.close()), this.socket = null)
            }, p.audioControl = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return a.merge(this.audioGroup, t), this.sendCmd({
                    type: "on_audio_process",
                    info: this.audioGroup,
                    id: ++this.cmdId
                })
            }, p.awc = function (t) {
                return this.sendCmd({type: "on_audio_howling", info: {status: ~~t}, id: ++this.cmdId})
            }, t.exports = d
        }, 242: function (t, e, n) {
            "use strict";

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function o(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            var r = void 0, a = n(4), c = n(231), u = n(249), l = function (t) {
                function e(n) {
                    i(this, e);
                    var s = o(this, t.call(this));
                    return r.merge(s, n), s.init(), s
                }

                return s(e, t), e
            }(a);
            l.install = function (t) {
                r = t.util
            };
            var h = l.prototype;
            h.init = function () {
                this.reset(), this.initRender(), this.initWorker(), window.addEventListener("beforeunload", this.destroy.bind(this))
            }, h.initRender = function () {
                var t = this;
                this.render = new c({
                    client: this.client,
                    stream: this,
                    isRemote: this.isRemote,
                    container: this.container,
                    mirror: this.mirror
                }), this.render.on("resize", function (e) {
                    t.emit("resize", e)
                }), this.render.on("error", function (e) {
                    t.emit("error", e)
                })
            }, h.reset = function () {
                this.currFrameCount = 0, this.width = 0, this.height = 0, this.timetag = 0, this.worker = null, this.render = null
            }, h.initWorker = function () {
                var t = this, e = new Blob([u], {type: "application/javascript"}),
                    n = this.worker = new Worker(URL.createObjectURL(e));
                n.addEventListener("message", function (e) {
                    var n = e.data;
                    switch (n.cmd) {
                        case"open":
                            t.onOpen();
                            break;
                        case"error":
                            t.onError();
                            break;
                        case"close":
                            t.onClose();
                            break;
                        case"message":
                            t.onMessage(n)
                    }
                }), this.sendWorkerCmd({cmd: "init", info: {url: this.url}})
            }, h.destroyWorker = function () {
                this.worker && this.worker.terminate()
            }, h.sendWorkerCmd = function (t) {
                this.worker && this.worker.postMessage(t)
            }, h.getName = function () {
                return (this.isRemote ? "remote " : "") + "stream socket " + this.url
            }, h.onOpen = function (t) {
                var e = this.getName() + " open -> stream.js";
                this.logToConsole(e), this.logToPC(e)
            }, h.startStatisticsTimer = function () {
                var t = this;
                this.statisticsTimer = setInterval(function () {
                    var e = t.currFrameCount - t.lastFrameCount;
                    t.sendWorkerCmd({
                        cmd: "msg",
                        info: {cmd: "statistics", info: {lastFrameCount: t.lastFrameCount, fps: e, latency: t.latency}}
                    }), t.lastFrameCount = t.currFrameCount, t.latency = 0
                }, 1e3)
            }, h.onError = function (t) {
                if (!this.destroyed) {
                    var e = this.getName() + " error -> stream.js";
                    this.logToConsole(e), this.logToPC(e), this.destroy()
                }
            }, h.onClose = function (t) {
                this.destroy(t)
            }, h.onMessage = function (t) {
                var e = t.data;
                if (!this.destroyed && e instanceof ArrayBuffer) {
                    var n = e.byteLength;
                    this.render && !this.suspended && this.renderFrame(e, n)
                }
            }, h.renderFrame = function (t, e) {
                var n = 16, i = new DataView(t), o = this.width = i.getUint32(0), s = this.height = i.getUint32(4),
                    r = i.getUint32(8), a = i.getUint32(12);
                this.timetag = 1e3 * r + a;
                var c = o * s, u = c / 4, l = c / 4;
                if (n + c + u + l !== e) {
                    var h = "yuv数据长度不匹配: total " + e + ", meta " + n + ", width " + o + ", height " + s + ", yLength " + c + " uLength " + u + " vLength " + l;
                    return this.logToConsole(h), void this.logToPC(h)
                }
                this.currFrameCount++, this.scheduleRender({
                    id: this.currFrameCount,
                    width: o,
                    height: s,
                    y: new Uint8Array(t, n, c),
                    u: new Uint8Array(t, n + c, u),
                    v: new Uint8Array(t, n + c + u)
                })
            }, h.scheduleRender = function (t) {
                this.render && !this.suspended && this.render.drawImage(t)
            }, h.suspend = function () {
                this.suspended = !0
            }, h.resume = function () {
                this.suspended = !1
            }, h.destroy = function (t) {
                this.sendWorkerCmd({
                    cmd: "close",
                    info: {cmd_type: "on_clear_media"}
                }), this.destroyed = !0, this.render && this.render.destroy(), this.reset();
                var e = t && t.constructor === Object ? t.code : "",
                    n = this.getName() + " destroy: code - " + e + " -> stream.js";
                this.logToConsole(n), this.logToPC(n)
            }, h.logToConsole = function () {
                var t = this.client;
                t && t.log.apply(t, arguments)
            }, h.logToPC = function () {
                var t = this.client;
                if (t) {
                    var e = t.signal;
                    e && e.log.apply(e, arguments)
                }
            }, t.exports = l
        }, 243: function (t, e) {
            "use strict";
            var n = {};
            n.sortDevices = function (t) {
                t && t.length > 1 && t.sort(function (t, e) {
                    var n = t.name.toLowerCase().indexOf("virtual") !== -1,
                        i = t.path.toLowerCase().indexOf("virtual") !== -1,
                        o = e.name.toLowerCase().indexOf("virtual") !== -1,
                        s = e.path.toLowerCase().indexOf("virtual") !== -1;
                    return i ? 1 : s ? -1 : n && o ? 0 : n ? 1 : o ? -1 : 0
                })
            }, t.exports = n
        }, 249: function (t, e) {
            t.exports = "'use strict';\n\n/* 该web worker 职能为向 websocket 发送指令及数据*/\n\nvar that = {};\n\nthat.init = function (data) {\n  if (!that.socket) {\n    var url = that.url = data.info.url;\n    var socket = that.socket = new WebSocket(url);\n    socket.onopen = function (event) {\n      postMessage({\n        cmd: 'open'\n      });\n    };\n    socket.onmessage = function (event) {\n      postMessage({\n        cmd: 'message',\n        data: event.data\n      });\n    };\n    socket.onerror = function (event) {\n      postMessage({\n        cmd: 'error'\n      });\n    };\n    socket.onclose = function (event) {\n      postMessage({ // web 端被动结束\n        cmd: 'close'\n      });\n    };\n    socket.binaryType = 'arraybuffer';\n  }\n};\n\nthat.close = function () {\n  if (that.socket) {\n    that.socket.onopen = null;\n    that.socket.onmessage = null;\n    that.socket.onerror = null;\n    that.socket.onclose = null;\n    that.socket.close(); // 结束socket\n    that.socket = null;\n  }\n  self.close(); // 结束worker，web端主动\n};\n\nthat.send = function (obj) {\n  if (that.socket && that.socket.readyState === WebSocket.OPEN) {\n    that.socket.send(JSON.stringify(obj));\n  }\n};\n// 侦听主线程的worker消息\nself.addEventListener('message', function (event) {\n  var data = event.data;\n  switch (data.cmd) {\n    case 'init':\n      // worker第一步2\n      that.init(data);\n      break;\n    case 'close':\n      // web发起，结束worker及相应socket\n      that.send(data.info);\n      that.close(data);\n      break;\n    case 'msg':\n      that.send(data.info);\n      break;\n  }\n});"
        }, 250: function (t, e) {
            t.exports = "precision mediump float;\r\nuniform sampler2D Ytex, Utex, Vtex;\r\nvarying vec2 v_texCoord;\r\nvoid main(void) {\r\n  float r, g, b, y, u, v;\r\n  vec4 yuv, rgb;\r\n  y = texture2D(Ytex, v_texCoord).r;\r\n  u = texture2D(Utex, v_texCoord).r;\r\n  v = texture2D(Vtex, v_texCoord).r;\r\n  yuv = vec4(y, u, v, 1.0);\r\n  yuv = yuv - vec4(0.0625, 0.5, 0.5, 0.0);\r\n  yuv = mat4(\r\n    1.1643, 0.0, 0.0, 0.0,\r\n    0.0, 1.0, 0.0, 0.0,\r\n    0.0, 0.0, 1.0, 0.0,\r\n    0.0, 0.0, 0.0, 1.0\r\n  ) * yuv;\r\n  rgb = mat4(\r\n    1.0, 1.0, 1.0, 0.0,\r\n    0.0, -0.3917, 2.017, 0.0,\r\n    1.5958, -0.8129, 0.0, 0.0,\r\n    0.0, 0.0, 0.0, 1.0\r\n  ) * yuv;\r\n  gl_FragColor = rgb;\r\n  // y = 1.1643 * (y - 0.0625);\r\n  // u = u - 0.5;\r\n  // v = v - 0.5;\r\n  // r = y + 1.5958 * v;\r\n  // g = y - 0.39173 * u - 0.81290 * v;\r\n  // b = y + 2.017 * u;\r\n  // gl_FragColor = vec4(r, g, b, 1.0);\r\n}\r\n"
        }, 251: function (t, e) {
            t.exports = "attribute vec4 a_position;\r\nattribute vec2 a_texCoord;\r\nvarying vec2 v_texCoord;\r\nvoid main () {\r\n  gl_Position = a_position;\r\n  v_texCoord = a_texCoord;\r\n}\r\n"
        }
    })
});
