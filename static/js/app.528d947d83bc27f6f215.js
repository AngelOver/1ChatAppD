!function (e) {
  var n = {};

  function t(i) {
    if (n[i]) return n[i].exports;
    var o = n[i] = {i: i, l: !1, exports: {}};
    return e[i].call(o.exports, o, o.exports, t), o.l = !0, o.exports
  }

  t.m = e, t.c = n, t.d = function (e, n, i) {
    t.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: i})
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, t.t = function (e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (t.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) t.d(i, o, function (n) {
      return e[n]
    }.bind(null, o));
    return i
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n)
  }, t.p = "index.html", t(t.s = 0)
}({
  0: function (e, n, t) {
    e.exports = t("tjUo")
  }, "3ai9": function (e, n) {
    var t = function () {
      var e = navigator.userAgent;
      return navigator.appVersion, {
        trident: -1 < e.indexOf("Trident"),
        presto: -1 < e.indexOf("Presto"),
        webKit: -1 < e.indexOf("AppleWebKit"),
        gecko: -1 < e.indexOf("Gecko") && -1 == e.indexOf("KHTML"),
        mobile: !!e.match(/AppleWebKit.*Mobile.*/),
        ios: !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: -1 < e.indexOf("Android") || -1 < e.indexOf("Linux"),
        iPhone: -1 < e.indexOf("iPhone"),
        iPad: -1 < e.indexOf("iPad"),
        webApp: -1 == e.indexOf("Safari")
      }
    }(), i = ((navigator.browserLanguage || navigator.language).toLowerCase(), "ios"), o = "";
    if (forAndroidAlert = "您的手机是iOS系统，无法安装Android应用", isWechatRequest = "", reminderWechatContent = "请点击微信右上角按钮，然后在弹出的菜单中，点击在浏览器中打开，即可安装", isQQRequest = "", reminderQQContent = "请点击QQ右上角按钮，然后在弹出的菜单中，点击在浏览器中打开，即可安装", isUCRequest = "", reminderUCContent = "您当前使用的是 UC 浏览器，该浏览器不支持安装App。请在浏览器中打开，即可安装", isWeiboRequest = "", reminderWeiboContent = "请点击微博右上角按钮，然后在弹出的菜单中，点击在浏览器中打开，即可安装", isBaiduRequest = "123123", reminderBaiduContent = "该浏览器不支持安装App。请复制链接在系统浏览器Safari中打开，即可安装", browseType = "other", appStoreUrl = "", reminderWechatDownloadContent = "请点击微信右上角按钮，然后在弹出的菜单中，点击在浏览器中打开，即可下载", reminderUCDownloadContent = "您当前使用的是 UC 浏览器，该浏览器不支持安装App。请在浏览器中打开，即可下载", reminderWeiboDownloadContent = "请点击微博右上角按钮，然后在弹出的菜单中，点击在浏览器中打开，即可下载", reminderQQDownloadContent = "请点击QQ右上角按钮，然后在弹出的菜单中，点击在浏览器中打开，即可下载", downloadOnlyForCertification = 1, userIsCertification = !0, isIOS = 0, unableDownload = "应用维护中，暂时无法下载，请明天再来，谢谢支持!", beforeDownload = "安装后首次打开时需信任企业证书(设置>通用>设备管理>添加信任)，下面有详细设置方法，请注意查看！试用时间1天，请确认是否下载？", "appbuy" == a("type") ? window.location.href = "http://app.qidianym.net/ChatBOT-V1.05.apk" : "appbuy_tweak" == a("type") && (window.location.href = "http://app.qidianym.net/ChatBOT-V1.05.apk"), t.mobile) {
      o = "1";
      var r = navigator.userAgent.toLowerCase();
      "micromessenger" == r.match(/MicroMessenger/i) && (isWechatRequest = "1"), "weibo" == r.match(/WeiBo/i) && (isWeiboRequest = "1"), "qq" == r.match(/QQ/i) && (isQQRequest = "1"), "uc" == r.match(/UC/i) && (isUCRequest = "1"), t.ios && (browseType = "ios", isIOS = 1), t.android && (browseType = "android")
    }

    function a(e) {
      var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), t = window.location.search.substr(1).match(n);
      return null != t ? t[2] : null
    }

    window.installApp = function (e, n) {
      i = e, o ? "ios" != i || "android" != browseType ? "android" != i || "ios" != browseType ? isWechatRequest ? alert(reminderWechatContent) : isWeiboRequest ? alert(reminderWeiboContent) : isQQRequest ? alert(reminderQQContent) : !isUCRequest || isIOS ? "ios" == i ? (window.location.href = "itms-services://?action=download-manifest&url=" + n, $("#iOSInstallModal").modal()) : (window.location.href = n, $("#androidInstallModal").modal()) : alert(reminderUCContent) : alert(forAndroidAlert) : alert("您的手机是Android系统，无法安装iOS应用") : $("#qrCodeModal").modal()
    }
  }, "8z7e": function (e, n, t) {
  }, "m/LN": function (e, n) {
    !function (e) {
      "use strict";
      var n = e(window), t = e("#downloadAppbtn"), i = e("#contactbtn");
      t.click(function () {
        e("html, body").animate({scrollTop: e("#download").offset().top}, 1500)
      }), i.click(function () {
        e("html, body").animate({scrollTop: e("#contact").offset().top}, 1500)
      }), e.fn.onePageNav && e("#corenav").onePageNav({
        currentClass: "current_page_item",
        easing: "easeInOutQuart",
        scrollSpeed: 1440
      }), e.fn.niceScroll && e("textarea").niceScroll({
        cursorcolor: "#1a1a1a",
        cursorwidth: "5px",
        background: "transparent",
        cursorborder: "none",
        cursorborderradius: 0,
        zindex: "5000"
      }), e.fn.scrollUp && e.scrollUp({
        scrollSpeed: 1500,
        easingType: "easeInOutQuart",
        scrollText: ['<i class="ti-angle-up"></i>'],
        scrollImg: !1
      });
      var o = e(".single_benifits");
      o.on("mouseenter", function () {
        o.removeClass("active"), e(this).addClass("active")
      }), n.on("scroll", function () {
        150 < n.scrollTop() ? e(".main_header_area").addClass("sticky slideInDown") : e(".main_header_area").removeClass("sticky slideInDown")
      }), 767 < n.width() && (new WOW).init(), e("a[href='#']").on("click", function (e) {
        e.preventDefault()
      })
    }(jQuery)
  }, tjUo: function (e, n, t) {
    "use strict";
    t.r(n), t("vFxu"), t("3ai9"), t("m/LN"), t("8z7e")
  }, vFxu: function (e, n) {
    function t(e, n) {
      this.elem = e, this.$elem = i(e), this.options = n, this.metadata = this.$elem.data("plugin-options"), this.$win = i(o), this.sections = {}, this.didScroll = !1, this.$doc = i(r), this.docHeight = this.$doc.height()
    }

    var i, o, r;
    !function () {
      function e() {
      }

      for (var n, t = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = t.length, o = window.console = window.console || {}; i--;) o[n = t[i]] || (o[n] = e)
    }(), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
      def: "easeOutQuad", swing: function (e, n, t, i, o) {
        return jQuery.easing[jQuery.easing.def](e, n, t, i, o)
      }, easeInQuad: function (e, n, t, i, o) {
        return i * (n /= o) * n + t
      }, easeOutQuad: function (e, n, t, i, o) {
        return -i * (n /= o) * (n - 2) + t
      }, easeInOutQuad: function (e, n, t, i, o) {
        return (n /= o / 2) < 1 ? i / 2 * n * n + t : -i / 2 * (--n * (n - 2) - 1) + t
      }, easeInCubic: function (e, n, t, i, o) {
        return i * (n /= o) * n * n + t
      }, easeOutCubic: function (e, n, t, i, o) {
        return i * ((n = n / o - 1) * n * n + 1) + t
      }, easeInOutCubic: function (e, n, t, i, o) {
        return (n /= o / 2) < 1 ? i / 2 * n * n * n + t : i / 2 * ((n -= 2) * n * n + 2) + t
      }, easeInQuart: function (e, n, t, i, o) {
        return i * (n /= o) * n * n * n + t
      }, easeOutQuart: function (e, n, t, i, o) {
        return -i * ((n = n / o - 1) * n * n * n - 1) + t
      }, easeInOutQuart: function (e, n, t, i, o) {
        return (n /= o / 2) < 1 ? i / 2 * n * n * n * n + t : -i / 2 * ((n -= 2) * n * n * n - 2) + t
      }, easeInQuint: function (e, n, t, i, o) {
        return i * (n /= o) * n * n * n * n + t
      }, easeOutQuint: function (e, n, t, i, o) {
        return i * ((n = n / o - 1) * n * n * n * n + 1) + t
      }, easeInOutQuint: function (e, n, t, i, o) {
        return (n /= o / 2) < 1 ? i / 2 * n * n * n * n * n + t : i / 2 * ((n -= 2) * n * n * n * n + 2) + t
      }, easeInSine: function (e, n, t, i, o) {
        return -i * Math.cos(n / o * (Math.PI / 2)) + i + t
      }, easeOutSine: function (e, n, t, i, o) {
        return i * Math.sin(n / o * (Math.PI / 2)) + t
      }, easeInOutSine: function (e, n, t, i, o) {
        return -i / 2 * (Math.cos(Math.PI * n / o) - 1) + t
      }, easeInExpo: function (e, n, t, i, o) {
        return 0 == n ? t : i * Math.pow(2, 10 * (n / o - 1)) + t
      }, easeOutExpo: function (e, n, t, i, o) {
        return n == o ? t + i : i * (1 - Math.pow(2, -10 * n / o)) + t
      }, easeInOutExpo: function (e, n, t, i, o) {
        return 0 == n ? t : n == o ? t + i : (n /= o / 2) < 1 ? i / 2 * Math.pow(2, 10 * (n - 1)) + t : i / 2 * (2 - Math.pow(2, -10 * --n)) + t
      }, easeInCirc: function (e, n, t, i, o) {
        return -i * (Math.sqrt(1 - (n /= o) * n) - 1) + t
      }, easeOutCirc: function (e, n, t, i, o) {
        return i * Math.sqrt(1 - (n = n / o - 1) * n) + t
      }, easeInOutCirc: function (e, n, t, i, o) {
        return (n /= o / 2) < 1 ? -i / 2 * (Math.sqrt(1 - n * n) - 1) + t : i / 2 * (Math.sqrt(1 - (n -= 2) * n) + 1) + t
      }, easeInElastic: function (e, n, t, i, o) {
        var r = 1.70158, a = 0, s = i;
        return 0 == n ? t : 1 == (n /= o) ? t + i : (a = a || .3 * o, s < Math.abs(i) ? (s = i, r = a / 4) : r = a / (2 * Math.PI) * Math.asin(i / s), -s * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * o - r) * (2 * Math.PI) / a) + t)
      }, easeOutElastic: function (e, n, t, i, o) {
        var r = 1.70158, a = 0, s = i;
        return 0 == n ? t : 1 == (n /= o) ? t + i : (a = a || .3 * o, s < Math.abs(i) ? (s = i, r = a / 4) : r = a / (2 * Math.PI) * Math.asin(i / s), s * Math.pow(2, -10 * n) * Math.sin((n * o - r) * (2 * Math.PI) / a) + i + t)
      }, easeInOutElastic: function (e, n, t, i, o) {
        var r = 1.70158, a = 0, s = i;
        return 0 == n ? t : 2 == (n /= o / 2) ? t + i : (a = a || o * (.3 * 1.5), s < Math.abs(i) ? (s = i, r = a / 4) : r = a / (2 * Math.PI) * Math.asin(i / s), n < 1 ? s * Math.pow(2, 10 * (n -= 1)) * Math.sin((n * o - r) * (2 * Math.PI) / a) * -.5 + t : s * Math.pow(2, -10 * (n -= 1)) * Math.sin((n * o - r) * (2 * Math.PI) / a) * .5 + i + t)
      }, easeInBack: function (e, n, t, i, o, r) {
        return null == r && (r = 1.70158), i * (n /= o) * n * ((r + 1) * n - r) + t
      }, easeOutBack: function (e, n, t, i, o, r) {
        return null == r && (r = 1.70158), i * ((n = n / o - 1) * n * ((r + 1) * n + r) + 1) + t
      }, easeInOutBack: function (e, n, t, i, o, r) {
        return null == r && (r = 1.70158), (n /= o / 2) < 1 ? i / 2 * (n * n * ((1 + (r *= 1.525)) * n - r)) + t : i / 2 * ((n -= 2) * n * ((1 + (r *= 1.525)) * n + r) + 2) + t
      }, easeInBounce: function (e, n, t, i, o) {
        return i - jQuery.easing.easeOutBounce(e, o - n, 0, i, o) + t
      }, easeOutBounce: function (e, n, t, i, o) {
        return (n /= o) < 1 / 2.75 ? i * (7.5625 * n * n) + t : n < 2 / 2.75 ? i * (7.5625 * (n -= 1.5 / 2.75) * n + .75) + t : n < 2.5 / 2.75 ? i * (7.5625 * (n -= 2.25 / 2.75) * n + .9375) + t : i * (7.5625 * (n -= 2.625 / 2.75) * n + .984375) + t
      }, easeInOutBounce: function (e, n, t, i, o) {
        return n < o / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * n, 0, i, o) + t : .5 * jQuery.easing.easeOutBounce(e, 2 * n - o, 0, i, o) + .5 * i + t
      }
    }), i = jQuery, o = window, r = document, t.defaults = (t.prototype = {
      defaults: {
        navItems: "a",
        currentClass: "current_page_item",
        changeHash: !1,
        easing: "swing",
        filter: "",
        scrollSpeed: 750,
        scrollThreshold: .5,
        begin: !1,
        end: !1,
        scrollChange: !1
      }, init: function () {
        return this.config = i.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", i.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", i.proxy(this.getPositions, this)), this
      }, adjustNav: function (e, n) {
        e.$elem.find("." + e.config.currentClass).removeClass(e.config.currentClass), n.addClass(e.config.currentClass)
      }, bindInterval: function () {
        var e, n = this;
        n.$win.on("scroll.onePageNav", function () {
          n.didScroll = !0
        }), n.t = setInterval(function () {
          e = n.$doc.height(), n.didScroll && (n.didScroll = !1, n.scrollChange()), e !== n.docHeight && (n.docHeight = e, n.getPositions())
        }, 250)
      }, getHash: function (e) {
        return e.attr("href").split("#")[1]
      }, getPositions: function () {
        var e, n, t, o = this;
        o.$nav.each(function () {
          e = o.getHash(i(this)), (t = i("#" + e)).length && (n = t.offset().top, o.sections[e] = Math.round(n))
        })
      }, getSection: function (e) {
        var n = null, t = Math.round(this.$win.height() * this.config.scrollThreshold);
        for (var i in this.sections) this.sections[i] - t < e && (n = i);
        return n
      }, handleClick: function (e) {
        var n = this, t = i(e.currentTarget), r = t.parent(), a = "#" + n.getHash(t);
        r.hasClass(n.config.currentClass) || (n.config.begin && n.config.begin(), n.adjustNav(n, r), n.unbindInterval(), n.scrollTo(a, function () {
          n.config.changeHash && (o.location.hash = a), n.bindInterval(), n.config.end && n.config.end()
        })), e.preventDefault()
      }, scrollChange: function () {
        var e, n = this.$win.scrollTop(), t = this.getSection(n);
        null !== t && ((e = this.$elem.find('a[href$="#' + t + '"]').parent()).hasClass(this.config.currentClass) || (this.adjustNav(this, e), this.config.scrollChange && this.config.scrollChange(e)))
      }, scrollTo: function (e, n) {
        var t = i(e).offset().top - 50;
        i("html, body").animate({scrollTop: t}, this.config.scrollSpeed, this.config.easing, n)
      }, unbindInterval: function () {
        clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
      }
    }).defaults, i.fn.onePageNav = function (e) {
      return this.each(function () {
        new t(this, e).init()
      })
    }, function (e, n, t) {
      "use strict";
      e.fn.scrollUp = function (n) {
        e.data(t.body, "scrollUp") || (e.data(t.body, "scrollUp", !0), e.fn.scrollUp.init(n))
      }, e.fn.scrollUp.init = function (i) {
        var o, r, a, s, l, c, u = e.fn.scrollUp.settings = e.extend({}, e.fn.scrollUp.defaults, i), d = !1;
        switch (c = u.scrollTrigger ? e(u.scrollTrigger) : e("<a/>", {
          id: u.scrollName,
          href: "#top"
        }), u.scrollTitle && c.attr("title", u.scrollTitle), c.appendTo("body"), u.scrollImg || u.scrollTrigger || c.html(u.scrollText), c.css({
          display: "none",
          position: "fixed",
          zIndex: u.zIndex
        }), u.activeOverlay && e("<div/>", {id: u.scrollName + "-active"}).css({
          position: "absolute",
          top: u.scrollDistance + "px",
          width: "100%",
          borderTop: "1px dotted" + u.activeOverlay,
          zIndex: u.zIndex
        }).appendTo("body"), u.animation) {
          case"fade":
            o = "fadeIn", r = "fadeOut", a = u.animationSpeed;
            break;
          case"slide":
            o = "slideDown", r = "slideUp", a = u.animationSpeed;
            break;
          default:
            o = "show", r = "hide", a = 0
        }
        s = "top" === u.scrollFrom ? u.scrollDistance : e(t).height() - e(n).height() - u.scrollDistance, e(n).scroll(function () {
          e(n).scrollTop() > s ? d || (c[o](a), d = !0) : d && (c[r](a), d = !1)
        }), u.scrollTarget ? "number" == typeof u.scrollTarget ? l = u.scrollTarget : "string" == typeof u.scrollTarget && (l = Math.floor(e(u.scrollTarget).offset().top)) : l = 0, c.click(function (n) {
          n.preventDefault(), e("html, body").animate({scrollTop: l}, u.scrollSpeed, u.easingType)
        })
      }, e.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "easeOutElastic",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
      }, e.fn.scrollUp.destroy = function (i) {
        e.removeData(t.body, "scrollUp"), e("#" + e.fn.scrollUp.settings.scrollName).remove(), e("#" + e.fn.scrollUp.settings.scrollName + "-active").remove(), 7 <= e.fn.jquery.split(".")[1] ? e(n).off("scroll", i) : e(n).unbind("scroll", i)
      }, e.scrollUp = e.fn.scrollUp
    }(jQuery, window, document)
  }
});
