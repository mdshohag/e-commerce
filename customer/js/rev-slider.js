/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 4.6.1 (13.09.2014)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/


function revslider_showDoubleJqueryError(e) {
    var t =
        "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
    t +=
        "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
    t +=
        "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
    t +=
        "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
    t = "<span style='font-size:16px;color:#BC0C06;'>" + t + "</span>";
    jQuery(e).show().html(t)
}(function(e, t) {
    function n() {
        var e = false;
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent
            .match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
            if (navigator.userAgent.match(/OS 4_\d like Mac OS X/i)) {
                e = true
            }
        } else {
            e = false
        }
        return e
    }

    function r(r, i) {
        if (r == t) return false;
        if (r.data("aimg") != t) {
            if (r.data("aie8") == "enabled" && f(8) || r.data(
                "amobile") == "enabled" && Q()) r.html(
                '<img class="tp-slider-alternative-image" src="' +
                r.data("aimg") + '">')
        }
        if (i.navigationStyle == "preview1" || i.navigationStyle ==
            "preview3" || i.navigationStyle == "preview4") {
            i.soloArrowLeftHalign = "left";
            i.soloArrowLeftValign = "center";
            i.soloArrowLeftHOffset = 0;
            i.soloArrowLeftVOffset = 0;
            i.soloArrowRightHalign = "right";
            i.soloArrowRightValign = "center";
            i.soloArrowRightHOffset = 0;
            i.soloArrowRightVOffset = 0;
            i.navigationArrows = "solo"
        }
        if (i.simplifyAll == "on" && (f(8) || n())) {
            r.find(".tp-caption").each(function() {
                var t = e(this);
                t.removeClass("customin").removeClass(
                    "customout").addClass("fadein").addClass(
                    "fadeout");
                t.data("splitin", "");
                t.data("speed", 400)
            });
            r.find(">ul>li").each(function() {
                var t = e(this);
                t.data("transition", "fade");
                t.data("masterspeed", 500);
                t.data("slotamount", 1);
                var n = t.find(">img").first();
                n.data("kenburns", "off")
            })
        }
        i.desktop = !navigator.userAgent.match(
            /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
        );
        if (i.fullWidth != "on" && i.fullScreen != "on") i.autoHeight =
            "off";
        if (i.fullScreen == "on") i.autoHeight = "on";
        if (i.fullWidth != "on" && i.fullScreen != "on")
            forceFulWidth = "off";
        if (i.fullWidth == "on" && i.autoHeight == "off") r.css({
            maxHeight: i.startheight + "px"
        });
        if (Q() && i.hideThumbsOnMobile == "on" && i.navigationType ==
            "thumb") i.navigationType = "none";
        if (Q() && i.hideBulletsOnMobile == "on" && i.navigationType ==
            "bullet") i.navigationType = "none";
        if (Q() && i.hideBulletsOnMobile == "on" && i.navigationType ==
            "both") i.navigationType = "none";
        if (Q() && i.hideArrowsOnMobile == "on") i.navigationArrows =
            "none";
        if (i.forceFullWidth == "on" && r.closest(
            ".forcefullwidth_wrapper_tp_banner").length == 0) {
            var s = r.parent().offset().left;
            var l = r.parent().css("marginBottom");
            var m = r.parent().css("marginTop");
            if (l == t) l = 0;
            if (m == t) m = 0;
            r.parent().wrap(
                '<div style="position:relative;width:100%;height:380px;margin-top:' +
                m + ";margin-bottom:" + l +
                '" class="forcefullwidth_wrapper_tp_banner"></div>'
            );
            r.closest(".forcefullwidth_wrapper_tp_banner").append(
                '<div class="tp-fullwidth-forcer" style="width:100%;height:' +
                r.height() + 'px"></div>');
            r.css({
                backgroundColor: r.parent().css(
                    "backgroundColor"),
                backgroundImage: r.parent().css(
                    "backgroundImage")
            });
            r.parent().css({
                left: 0 - s + "px",
                position: "absolute",
                width: e(window).width()
            });
            i.width = e(window).width()
        }
        try {
            if (i.hideThumbsUnderResolution > e(window).width() &&
                i.hideThumbsUnderResolution != 0) {
                r.parent().find(".tp-bullets.tp-thumbs").css({
                    display: "none"
                })
            } else {
                r.parent().find(".tp-bullets.tp-thumbs").css({
                    display: "block"
                })
            }
        } catch (g) {}
        if (!r.hasClass("revslider-initialised")) {
            r.addClass("revslider-initialised");
            if (r.attr("id") == t) r.attr("id", "revslider-" + Math
                .round(Math.random() * 1e3 + 5));
            i.firefox13 = false;
            i.ie = !e.support.opacity;
            i.ie9 = document.documentMode == 9;
            i.origcd = i.delay;
            var y = e.fn.jquery.split("."),
                w = parseFloat(y[0]),
                E = parseFloat(y[1]),
                S = parseFloat(y[2] || "0");
            if (w == 1 && E < 7) {
                r.html(
                    '<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' +
                    y +
                    " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"
                )
            }
            if (w > 1) i.ie = false;
            if (!e.support.transition) e.fn.transition = e.fn.animate;
            r.find(".caption").each(function() {
                e(this).addClass("tp-caption")
            });
            if (Q()) {
                r.find(".tp-caption").each(function() {
                    var t = e(this);
                    if (t.data("autoplayonlyfirsttime") ==
                        true || t.data(
                            "autoplayonlyfirsttime") ==
                        "true") t.data(
                        "autoplayonlyfirsttime",
                        "false");
                    if (t.data("autoplay") == true || t.data(
                        "autoplay") == "true") t.data(
                        "autoplay", false)
                })
            }
            var x = 0;
            var T = 0;
            var N = 0;
            var C = "http";
            if (location.protocol === "https:") {
                C = "https"
            }
            r.find(".tp-caption").each(function(n) {
                try {
                    if ((e(this).data("ytid") != t || e(
                        this).find("iframe").attr(
                        "src").toLowerCase().indexOf(
                        "youtube") > 0) && x == 0) {
                        x = 1;
                        var r = document.createElement(
                            "script");
                        var i = "https";
                        r.src = i +
                            "://www.youtube.com/iframe_api";
                        var s = document.getElementsByTagName(
                            "script")[0];
                        var o = true;
                        e("head").find("*").each(function() {
                            if (e(this).attr("src") ==
                                i +
                                "://www.youtube.com/iframe_api"
                            ) o = false
                        });
                        if (o) {
                            s.parentNode.insertBefore(r, s)
                        }
                    }
                } catch (u) {}
                try {
                    if ((e(this).data("vimeoid") != t || e(
                        this).find("iframe").attr(
                        "src").toLowerCase().indexOf(
                        "vimeo") > 0) && T == 0) {
                        T = 1;
                        var a = document.createElement(
                            "script");
                        a.src = C +
                            "://a.vimeocdn.com/js/froogaloop2.min.js";
                        var s = document.getElementsByTagName(
                            "script")[0];
                        var o = true;
                        e("head").find("*").each(function() {
                            if (e(this).attr("src") ==
                                C +
                                "://a.vimeocdn.com/js/froogaloop2.min.js"
                            ) o = false
                        });
                        if (o) s.parentNode.insertBefore(a,
                            s)
                    }
                } catch (u) {}
                try {
                    if (e(this).data("videomp4") != t || e(
                        this).data("videowebm") != t) {}
                } catch (u) {}
            });
            r.find(".tp-caption video").each(function(t) {
                e(this).removeClass("video-js").removeClass(
                    "vjs-default-skin");
                e(this).attr("preload", "");
                e(this).css({
                    display: "none"
                })
            });
            if (i.shuffle == "on") {
                var L = new Object,
                    A = r.find(">ul:first-child >li:first-child");
                L.fstransition = A.data("fstransition");
                L.fsmasterspeed = A.data("fsmasterspeed");
                L.fsslotamount = A.data("fsslotamount");
                for (var O = 0; O < r.find(">ul:first-child >li").length; O++) {
                    var M = Math.round(Math.random() * r.find(
                        ">ul:first-child >li").length);
                    r.find(">ul:first-child >li:eq(" + M + ")").prependTo(
                        r.find(">ul:first-child"))
                }
                var _ = r.find(">ul:first-child >li:first-child");
                _.data("fstransition", L.fstransition);
                _.data("fsmasterspeed", L.fsmasterspeed);
                _.data("fsslotamount", L.fsslotamount)
            }
            i.slots = 4;
            i.act = -1;
            i.next = 0;
            if (i.startWithSlide != t) i.next = i.startWithSlide;
            var D = u("#")[0];
            if (D.length < 9) {
                if (D.split("slide").length > 1) {
                    var P = parseInt(D.split("slide")[1], 0);
                    if (P < 1) P = 1;
                    if (P > r.find(">ul:first >li").length) P = r.find(
                        ">ul:first >li").length;
                    i.next = P - 1
                }
            }
            i.firststart = 1;
            if (i.navigationHOffset == t) i.navOffsetHorizontal = 0;
            if (i.navigationVOffset == t) i.navOffsetVertical = 0;
            r.append('<div class="tp-loader ' + i.spinner + '">' +
                '<div class="dot1"></div>' +
                '<div class="dot2"></div>' +
                '<div class="bounce1"></div>' +
                '<div class="bounce2"></div>' +
                '<div class="bounce3"></div>' + "</div>");
            if (r.find(".tp-bannertimer").length == 0) r.append(
                '<div class="tp-bannertimer" style="visibility:hidden"></div>'
            );
            var H = r.find(".tp-bannertimer");
            if (H.length > 0) {
                H.css({
                    width: "0%"
                })
            }
            r.addClass("tp-simpleresponsive");
            i.container = r;
            i.slideamount = r.find(">ul:first >li").length;
            if (r.height() == 0) r.height(i.startheight);
            if (i.startwidth == t || i.startwidth == 0) i.startwidth =
                r.width();
            if (i.startheight == t || i.startheight == 0) i.startheight =
                r.height();
            i.width = r.width();
            i.height = r.height();
            i.bw = i.startwidth / r.width();
            i.bh = i.startheight / r.height();
            if (i.width != i.startwidth) {
                i.height = Math.round(i.startheight * (i.width / i.startwidth));
                r.height(i.height)
            }
            if (i.shadow != 0) {
                r.parent().append(
                    '<div class="tp-bannershadow tp-shadow' + i
                    .shadow + '"></div>');
                var s = 0;
                if (i.forceFullWidth == "on") s = 0 - i.container.parent()
                    .offset().left;
                r.parent().find(".tp-bannershadow").css({
                    width: i.width,
                    left: s
                })
            }
            r.find("ul").css({
                display: "none"
            });
            var B = r;
            r.find("ul").css({
                display: "block"
            });
            b(r, i);
            if (i.parallax != "off") nt(r, i);
            if (i.slideamount > 1) c(r, i);
            if (i.slideamount > 1 && i.navigationType == "thumb") it(
                r, i);
            if (i.slideamount > 1) h(r, i);
            if (i.keyboardNavigation == "on") p(r, i);
            d(r, i);
            if (i.hideThumbs > 0) v(r, i);
            setTimeout(function() {
                k(r, i)
            }, i.startDelay);
            i.startDelay = 0;
            if (i.slideamount > 1) K(r, i);
            setTimeout(function() {
                r.trigger("revolution.slide.onloaded")
            }, 500);
            e("body").data("rs-fullScreenMode", false);
            e(window).on(
                "mozfullscreenchange webkitfullscreenchange fullscreenchange",
                function() {
                    e("body").data("rs-fullScreenMode", !e(
                        "body").data(
                        "rs-fullScreenMode"));
                    if (e("body").data("rs-fullScreenMode")) {
                        setTimeout(function() {
                            e(window).trigger("resize")
                        }, 200)
                    }
                });
            var j = "resize.revslider-" + r.attr("id");
            e(window).on(j, function() {
                if (r == t) return false;
                if (e("body").find(r) != 0)
                    if (i.forceFullWidth == "on") {
                        var n = i.container.closest(
                            ".forcefullwidth_wrapper_tp_banner"
                        ).offset().left;
                        i.container.parent().css({
                            left: 0 - n + "px",
                            width: e(window).width()
                        })
                    }
                if (r.outerWidth(true) != i.width || r.is(
                    ":hidden")) {
                    a(r, i)
                }
            });
            try {
                if (i.hideThumbsUnderResoluition != 0 && i.navigationType ==
                    "thumb") {
                    if (i.hideThumbsUnderResoluition > e(window).width())
                        e(".tp-bullets").css({
                            display: "none"
                        });
                    else e(".tp-bullets").css({
                        display: "block"
                    })
                }
            } catch (g) {}
            r.find(".tp-scrollbelowslider").on("click", function() {
                var t = 0;
                try {
                    t = e("body").find(i.fullScreenOffsetContainer)
                        .height()
                } catch (n) {}
                try {
                    t = t - parseInt(e(this).data(
                        "scrolloffset"), 0)
                } catch (n) {}
                e("body,html").animate({
                    scrollTop: r.offset().top + r.find(
                            ">ul >li").height() - t +
                        "px"
                }, {
                    duration: 400
                })
            });
            var F = r.parent();
            if (e(window).width() < i.hideSliderAtLimit) {
                r.trigger("stoptimer");
                if (F.css("display") != "none") F.data("olddisplay",
                    F.css("display"));
                F.css({
                    display: "none"
                })
            }
            o(r, i)
        }
    }
    e.fn.extend({
        revolution: function(n) {
            defaults = {
                delay: 9e3,
                startheight: 380,
                startwidth: 960,
                fullScreenAlignForce: "off",
                autoHeight: "off",
                hideTimerBar: "off",
                hideThumbs: 200,
                hideNavDelayOnMobile: 1500,
                thumbWidth: 100,
                thumbHeight: 50,
                thumbAmount: 3,
                navigationType: "bullet",
                navigationArrows: "solo",
                navigationInGrid: "off",
                hideThumbsOnMobile: "off",
                hideBulletsOnMobile: "off",
                hideArrowsOnMobile: "off",
                hideThumbsUnderResoluition: 0,
                navigationStyle: "round",
                navigationHAlign: "center",
                navigationVAlign: "bottom",
                navigationHOffset: 0,
                navigationVOffset: 20,
                soloArrowLeftHalign: "left",
                soloArrowLeftValign: "center",
                soloArrowLeftHOffset: 20,
                soloArrowLeftVOffset: 0,
                soloArrowRightHalign: "right",
                soloArrowRightValign: "center",
                soloArrowRightHOffset: 20,
                soloArrowRightVOffset: 0,
                keyboardNavigation: "on",
                touchenabled: "on",
                onHoverStop: "on",
                stopAtSlide: -1,
                stopAfterLoops: -1,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLimit: 0,
                hideSliderAtLimit: 0,
                shadow: 0,
                fullWidth: "off",
                fullScreen: "off",
                minFullScreenHeight: 0,
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                dottedOverlay: "none",
                forceFullWidth: "off",
                spinner: "spinner0",
                swipe_treshold: 75,
                swipe_min_touches: 1,
                drag_block_vertical: false,
                isJoomla: false,
                parallax: "off",
                parallaxLevels: [10, 15, 20, 25, 30, 35,
                    40, 45, 50, 55, 60, 65, 70, 75,
                    80, 85
                ],
                parallaxBgFreeze: "off",
                parallaxOpacity: "on",
                parallaxDisableOnMobile: "off",
                panZoomDisableOnMobile: "off",
                simplifyAll: "on",
                minHeight: 0,
                nextSlideOnWindowFocus: "off",
                startDelay: 0
            };
            n = e.extend({}, defaults, n);
            return this.each(function() {
                if (window.tplogs == true) try {
                    console.groupCollapsed(
                        "Slider Revolution 4.6.1 Initialisation on " +
                        e(this).attr("id"));
                    console.groupCollapsed(
                        "Used Options:");
                    console.info(n);
                    console.groupEnd();
                    console.groupCollapsed(
                        "Tween Engine:")
                } catch (i) {}
                if (punchgs.TweenLite == t) {
                    if (window.tplogs == true) try {
                        console.error(
                            "GreenSock Engine Does not Exist!"
                        )
                    } catch (i) {}
                    return false
                }
                punchgs.force3D = true;
                if (window.tplogs == true) try {
                    console.info(
                        "GreenSock Engine Version in Slider Revolution:" +
                        punchgs.TweenLite.version
                    )
                } catch (i) {}
                if (n.simplifyAll == "on") {} else {
                    punchgs.TweenLite.lagSmoothing(
                        1e3, 16);
                    punchgs.force3D = "true"
                } if (window.tplogs == true) try {
                    console.groupEnd();
                    console.groupEnd()
                } catch (i) {}
                r(e(this), n)
            })
        },
        revscroll: function(n) {
            return this.each(function() {
                var r = e(this);
                if (r != t && r.length > 0 && e(
                    "body").find("#" + r.attr(
                    "id")).length > 0) e(
                    "body,html").animate({
                    scrollTop: r.offset().top +
                        r.find(">ul >li").height() -
                        n + "px"
                }, {
                    duration: 400
                })
            })
        },
        revredraw: function(n) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e(
                    "body").find("#" + n.attr(
                    "id")).length > 0) {
                    var r = n.parent().find(
                        ".tp-bannertimer");
                    var i = r.data("opt");
                    a(n, i)
                }
            })
        },
        revkill: function(n) {
            var r = e(this);
            if (r != t && r.length > 0 && e("body").find(
                "#" + r.attr("id")).length > 0) {
                r.data("conthover", 1);
                r.data("conthover-changed", 1);
                r.trigger("revolution.slide.onpause");
                var i = r.parent().find(".tp-bannertimer");
                var s = i.data("opt");
                s.bannertimeronpause = true;
                r.trigger("stoptimer");
                punchgs.TweenLite.killTweensOf(r.find("*"),
                    false);
                punchgs.TweenLite.killTweensOf(r, false);
                r.unbind(
                    "hover, mouseover, mouseenter,mouseleave, resize"
                );
                var o = "resize.revslider-" + r.attr("id");
                e(window).off(o);
                r.find("*").each(function() {
                    var n = e(this);
                    n.unbind(
                        "on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"
                    );
                    n.off(
                        "on, hover, mouseenter,mouseleave,mouseover, resize"
                    );
                    n.data("mySplitText", null);
                    n.data("ctl", null);
                    if (n.data("tween") != t) n.data(
                        "tween").kill();
                    if (n.data("kenburn") != t) n.data(
                        "kenburn").kill();
                    n.remove();
                    n.empty();
                    n = null
                });
                punchgs.TweenLite.killTweensOf(r.find("*"),
                    false);
                punchgs.TweenLite.killTweensOf(r, false);
                i.remove();
                try {
                    r.closest(
                        ".forcefullwidth_wrapper_tp_banner"
                    ).remove()
                } catch (u) {}
                try {
                    r.closest(".rev_slider_wrapper").remove()
                } catch (u) {}
                try {
                    r.remove()
                } catch (u) {}
                r.empty();
                r.html();
                r = null;
                s = null;
                delete r;
                delete s;
                return true
            } else {
                return false
            }
        },
        revpause: function(n) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e(
                    "body").find("#" + n.attr(
                    "id")).length > 0) {
                    n.data("conthover", 1);
                    n.data("conthover-changed", 1);
                    n.trigger(
                        "revolution.slide.onpause"
                    );
                    var r = n.parent().find(
                        ".tp-bannertimer");
                    var i = r.data("opt");
                    i.bannertimeronpause = true;
                    n.trigger("stoptimer")
                }
            })
        },
        revresume: function(n) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e(
                    "body").find("#" + n.attr(
                    "id")).length > 0) {
                    n.data("conthover", 0);
                    n.data("conthover-changed", 1);
                    n.trigger(
                        "revolution.slide.onresume"
                    );
                    var r = n.parent().find(
                        ".tp-bannertimer");
                    var i = r.data("opt");
                    i.bannertimeronpause = false;
                    n.trigger("starttimer")
                }
            })
        },
        revnext: function(n) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e(
                    "body").find("#" + n.attr(
                    "id")).length > 0) n.parent().find(
                    ".tp-rightarrow").click()
            })
        },
        revprev: function(n) {
            return this.each(function() {
                var n = e(this);
                if (n != t && n.length > 0 && e(
                    "body").find("#" + n.attr(
                    "id")).length > 0) n.parent().find(
                    ".tp-leftarrow").click()
            })
        },
        revmaxslide: function(t) {
            return e(this).find(">ul:first-child >li").length
        },
        revcurrentslide: function(n) {
            var r = e(this);
            if (r != t && r.length > 0 && e("body").find(
                "#" + r.attr("id")).length > 0) {
                var i = r.parent().find(".tp-bannertimer");
                var s = i.data("opt");
                return s.act
            }
        },
        revlastslide: function(n) {
            var r = e(this);
            if (r != t && r.length > 0 && e("body").find(
                "#" + r.attr("id")).length > 0) {
                var i = r.parent().find(".tp-bannertimer");
                var s = i.data("opt");
                return s.lastslide
            }
        },
        revshowslide: function(n) {
            return this.each(function() {
                var r = e(this);
                if (r != t && r.length > 0 && e(
                    "body").find("#" + r.attr(
                    "id")).length > 0) {
                    r.data("showus", n);
                    r.parent().find(
                        ".tp-rightarrow").click()
                }
            })
        }
    });
    var s = function() {
        var e, t, n = {
            hidden: "visibilitychange",
            webkitHidden: "webkitvisibilitychange",
            mozHidden: "mozvisibilitychange",
            msHidden: "msvisibilitychange"
        };
        for (e in n) {
            if (e in document) {
                t = n[e];
                break
            }
        }
        return function(n) {
            if (n) document.addEventListener(t, n);
            return !document[e]
        }
    }();
    var o = function(n, r) {
        var i = document.documentMode === t,
            s = window.chrome;
        if (i && !s) {
            e(window).on("focusin", function() {
                if (n == t) return false;
                setTimeout(function() {
                    if (r.nextSlideOnWindowFocus ==
                        "on") n.revnext();
                    n.revredraw()
                }, 300)
            }).on("focusout", function() {})
        } else {
            if (window.addEventListener) {
                window.addEventListener("focus", function(e) {
                    if (n == t) return false;
                    setTimeout(function() {
                        if (r.nextSlideOnWindowFocus ==
                            "on") n.revnext();
                        n.revredraw()
                    }, 300)
                }, false);
                window.addEventListener("blur", function(e) {},
                    false)
            } else {
                window.attachEvent("focus", function(e) {
                    setTimeout(function() {
                        if (n == t) return false;
                        if (r.nextSlideOnWindowFocus ==
                            "on") n.revnext();
                        n.revredraw()
                    }, 300)
                });
                window.attachEvent("blur", function(e) {})
            }
        }
    };
    var u = function(e) {
        var t = [],
            n;
        var r = window.location.href.slice(window.location.href.indexOf(
            e) + 1).split("_");
        for (var i = 0; i < r.length; i++) {
            r[i] = r[i].replace("%3D", "=");
            n = r[i].split("=");
            t.push(n[0]);
            t[n[0]] = n[1]
        }
        return t
    };
    var a = function(n, r) {
        if (n == t) return false;
        try {
            if (r.hideThumbsUnderResoluition != 0 && r.navigationType ==
                "thumb") {
                if (r.hideThumbsUnderResoluition > e(window).width())
                    e(".tp-bullets").css({
                        display: "none"
                    });
                else e(".tp-bullets").css({
                    display: "block"
                })
            }
        } catch (i) {}
        n.find(".defaultimg").each(function(t) {
            y(e(this), r)
        });
        var s = n.parent();
        if (e(window).width() < r.hideSliderAtLimit) {
            n.trigger("stoptimer");
            if (s.css("display") != "none") s.data("olddisplay", s.css(
                "display"));
            s.css({
                display: "none"
            })
        } else {
            if (n.is(":hidden")) {
                if (s.data("olddisplay") != t && s.data(
                    "olddisplay") != "undefined" && s.data(
                    "olddisplay") != "none") s.css({
                    display: s.data("olddisplay")
                });
                else s.css({
                    display: "block"
                });
                n.trigger("restarttimer");
                setTimeout(function() {
                    a(n, r)
                }, 150)
            }
        }
        var o = 0;
        if (r.forceFullWidth == "on") o = 0 - r.container.parent().offset()
            .left;
        try {
            n.parent().find(".tp-bannershadow").css({
                width: r.width,
                left: o
            })
        } catch (i) {}
        var u = n.find(">ul >li:eq(" + r.act + ") .slotholder");
        var f = n.find(">ul >li:eq(" + r.next + ") .slotholder");
        x(n, r, n);
        punchgs.TweenLite.set(f.find(".defaultimg"), {
            opacity: 0
        });
        u.find(".defaultimg").css({
            opacity: 1
        });
        f.find(".defaultimg").each(function() {
            var i = e(this);
            if (r.panZoomDisableOnMobile == "on" && Q()) {} else {
                if (i.data("kenburn") != t) {
                    i.data("kenburn").restart();
                    Y(n, r, true)
                }
            }
        });
        var l = n.find(">ul >li:eq(" + r.next + ")");
        var c = n.parent().find(".tparrows");
        if (c.hasClass("preview2")) c.css({
            width: parseInt(c.css("minWidth"), 0)
        });
        I(l, r, true);
        m(n, r)
    };
    var f = function(t, n) {
        var r = e('<div style="display:none;"/>').appendTo(e("body"));
        r.html("<!--[if " + (n || "") + " IE " + (t || "") +
            "]><a>&nbsp;</a><![endif]-->");
        var i = r.find("a").length;
        r.remove();
        return i
    };
    var l = function(e, t) {
        if (e.next == t.find(">ul >li").length - 1) {
            e.looptogo = e.looptogo - 1;
            if (e.looptogo <= 0) e.stopLoop = "on"
        }
        k(t, e)
    };
    var c = function(t, n) {
        var r = "hidebullets";
        if (n.hideThumbs == 0) r = "";
        if (n.navigationType == "bullet" || n.navigationType ==
            "both") {
            t.parent().append('<div class="tp-bullets ' + r +
                " simplebullets " + n.navigationStyle +
                '"></div>')
        }
        var i = t.parent().find(".tp-bullets");
        t.find(">ul:first >li").each(function(e) {
            var n = t.find(">ul:first >li:eq(" + e +
                ") img:first").attr("src");
            i.append('<div class="bullet"></div>');
            var r = i.find(".bullet:first")
        });
        i.find(".bullet").each(function(r) {
            var i = e(this);
            if (r == n.slideamount - 1) i.addClass("last");
            if (r == 0) i.addClass("first");
            i.click(function() {
                var e = false;
                if (n.navigationArrows ==
                    "withbullet" || n.navigationArrows ==
                    "nexttobullets") {
                    if (i.index() - 1 == n.act) e =
                        true
                } else {
                    if (i.index() == n.act) e =
                        true
                } if (n.transition == 0 && !e) {
                    if (n.navigationArrows ==
                        "withbullet" || n.navigationArrows ==
                        "nexttobullets") {
                        n.next = i.index() - 1
                    } else {
                        n.next = i.index()
                    }
                    l(n, t)
                }
            })
        });
        i.append('<div class="tpclear"></div>');
        m(t, n)
    };
    var h = function(e, n) {
        function u(t) {
            e.parent().append('<div style="' + i +
                '" class="tp-' + t + "arrow " + s +
                " tparrows " + o +
                '"><div class="tp-arr-allwrapper"><div class="tp-arr-iwrapper"><div class="tp-arr-imgholder"></div><div class="tp-arr-imgholder2"></div><div class="tp-arr-titleholder"></div><div class="tp-arr-subtitleholder"></div></div></div></div>'
            )
        }
        var r = e.find(".tp-bullets");
        var i = "",
            s = "hidearrows";
        if (n.hideThumbs == 0) s = "";
        var o = n.navigationStyle;
        if (n.navigationArrows == "none") i =
            "visibility:hidden;display:none";
        n.soloArrowStyle = "default" + " " + n.navigationStyle;
        if (n.navigationArrows != "none" && n.navigationArrows !=
            "nexttobullets") o = n.soloArrowStyle;
        u("left");
        u("right");
        e.parent().find(".tp-rightarrow").click(function() {
            if (n.transition == 0) {
                if (e.data("showus") != t && e.data(
                    "showus") != -1) n.next = e.data(
                    "showus") - 1;
                else n.next = n.next + 1;
                e.data("showus", -1);
                if (n.next >= n.slideamount) n.next = 0;
                if (n.next < 0) n.next = 0;
                if (n.act != n.next) l(n, e)
            }
        });
        e.parent().find(".tp-leftarrow").click(function() {
            if (n.transition == 0) {
                n.next = n.next - 1;
                n.leftarrowpressed = 1;
                if (n.next < 0) n.next = n.slideamount - 1;
                l(n, e)
            }
        });
        m(e, n)
    };
    var p = function(n, r) {
        e(document).keydown(function(e) {
            if (r.transition == 0 && e.keyCode == 39) {
                if (n.data("showus") != t && n.data(
                    "showus") != -1) r.next = n.data(
                    "showus") - 1;
                else r.next = r.next + 1;
                n.data("showus", -1);
                if (r.next >= r.slideamount) r.next = 0;
                if (r.next < 0) r.next = 0;
                if (r.act != r.next) l(r, n)
            }
            if (r.transition == 0 && e.keyCode == 37) {
                r.next = r.next - 1;
                r.leftarrowpressed = 1;
                if (r.next < 0) r.next = r.slideamount - 1;
                l(r, n)
            }
        });
        m(n, r)
    };
    var d = function(t, n) {
        var r = "vertical";
        if (n.touchenabled == "on") {
            if (n.drag_block_vertical == true) r = "none";
            t.swipe({
                allowPageScroll: r,
                fingers: n.swipe_min_touches,
                treshold: n.swipe_treshold,
                swipe: function(i, s, o, u, a, f) {
                    switch (s) {
                        case "left":
                            if (n.transition == 0) {
                                n.next = n.next + 1;
                                if (n.next == n.slideamount)
                                    n.next = 0;
                                l(n, t)
                            }
                            break;
                        case "right":
                            if (n.transition == 0) {
                                n.next = n.next - 1;
                                n.leftarrowpressed = 1;
                                if (n.next < 0) n.next =
                                    n.slideamount - 1;
                                l(n, t)
                            }
                            break;
                        case "up":
                            if (r == "none") e(
                                "html, body").animate({
                                scrollTop: t.offset()
                                    .top + t.height() +
                                    "px"
                            });
                            break;
                        case "down":
                            if (r == "none") e(
                                "html, body").animate({
                                scrollTop: t.offset()
                                    .top - e(
                                        window)
                                    .height() +
                                    "px"
                            });
                            break
                    }
                }
            })
        }
    };
    var v = function(e, t) {
        var n = e.parent().find(".tp-bullets");
        var r = e.parent().find(".tparrows");
        if (n == null) {
            e.append('<div class=".tp-bullets"></div>');
            var n = e.parent().find(".tp-bullets")
        }
        if (r == null) {
            e.append('<div class=".tparrows"></div>');
            var r = e.parent().find(".tparrows")
        }
        e.data("hideThumbs", t.hideThumbs);
        n.addClass("hidebullets");
        r.addClass("hidearrows");
        if (Q()) {
            try {
                e.hammer().on("touch", function() {
                    e.addClass("hovered");
                    if (t.onHoverStop == "on") e.trigger(
                        "stoptimer");
                    clearTimeout(e.data("hideThumbs"));
                    n.removeClass("hidebullets");
                    r.removeClass("hidearrows")
                });
                e.hammer().on("release", function() {
                    e.removeClass("hovered");
                    e.trigger("starttimer");
                    if (!e.hasClass("hovered") && !n.hasClass(
                        "hovered")) e.data("hideThumbs",
                        setTimeout(function() {
                            n.addClass(
                                "hidebullets");
                            r.addClass("hidearrows");
                            e.trigger("starttimer")
                        }, t.hideNavDelayOnMobile))
                })
            } catch (i) {}
        } else {
            n.hover(function() {
                t.overnav = true;
                if (t.onHoverStop == "on") e.trigger(
                    "stoptimer");
                n.addClass("hovered");
                clearTimeout(e.data("hideThumbs"));
                n.removeClass("hidebullets");
                r.removeClass("hidearrows")
            }, function() {
                t.overnav = false;
                e.trigger("starttimer");
                n.removeClass("hovered");
                if (!e.hasClass("hovered") && !n.hasClass(
                    "hovered")) e.data("hideThumbs",
                    setTimeout(function() {
                        n.addClass("hidebullets");
                        r.addClass("hidearrows")
                    }, t.hideThumbs))
            });
            r.hover(function() {
                t.overnav = true;
                if (t.onHoverStop == "on") e.trigger(
                    "stoptimer");
                n.addClass("hovered");
                clearTimeout(e.data("hideThumbs"));
                n.removeClass("hidebullets");
                r.removeClass("hidearrows")
            }, function() {
                t.overnav = false;
                e.trigger("starttimer");
                n.removeClass("hovered")
            });
            e.on("mouseenter", function() {
                e.addClass("hovered");
                if (t.onHoverStop == "on") e.trigger(
                    "stoptimer");
                clearTimeout(e.data("hideThumbs"));
                n.removeClass("hidebullets");
                r.removeClass("hidearrows")
            });
            e.on("mouseleave", function() {
                e.removeClass("hovered");
                e.trigger("starttimer");
                if (!e.hasClass("hovered") && !n.hasClass(
                    "hovered")) e.data("hideThumbs",
                    setTimeout(function() {
                        n.addClass("hidebullets");
                        r.addClass("hidearrows")
                    }, t.hideThumbs))
            })
        }
    };
    var m = function(t, n) {
        var r = t.parent();
        var i = r.find(".tp-bullets");
        if (n.navigationType == "thumb") {
            i.find(".thumb").each(function(t) {
                var r = e(this);
                r.css({
                    width: n.thumbWidth * n.bw +
                        "px",
                    height: n.thumbHeight * n.bh +
                        "px"
                })
            });
            var s = i.find(".tp-mask");
            s.width(n.thumbWidth * n.thumbAmount * n.bw);
            s.height(n.thumbHeight * n.bh);
            s.parent().width(n.thumbWidth * n.thumbAmount * n.bw);
            s.parent().height(n.thumbHeight * n.bh)
        }
        var o = r.find(".tp-leftarrow");
        var u = r.find(".tp-rightarrow");
        if (n.navigationType == "thumb" && n.navigationArrows ==
            "nexttobullets") n.navigationArrows = "solo";
        if (n.navigationArrows == "nexttobullets") {
            o.prependTo(i).css({
                "float": "left"
            });
            u.insertBefore(i.find(".tpclear")).css({
                "float": "left"
            })
        }
        var a = 0;
        if (n.forceFullWidth == "on") a = 0 - n.container.parent().offset()
            .left;
        var f = 0,
            l = 0;
        if (n.navigationInGrid == "on") {
            f = t.width() > n.startwidth ? (t.width() - n.startwidth) /
                2 : 0, l = t.height() > n.startheight ? (t.height() -
                    n.startheight) / 2 : 0
        }
        if (n.navigationArrows != "none" && n.navigationArrows !=
            "nexttobullets") {
            o.css({
                position: "absolute"
            });
            u.css({
                position: "absolute"
            });
            if (n.soloArrowLeftValign == "center") o.css({
                top: "50%",
                marginTop: n.soloArrowLeftVOffset - Math.round(
                    o.innerHeight() / 2) + "px"
            });
            if (n.soloArrowLeftValign == "bottom") o.css({
                top: "auto",
                bottom: 0 + n.soloArrowLeftVOffset + "px"
            });
            if (n.soloArrowLeftValign == "top") o.css({
                bottom: "auto",
                top: 0 + n.soloArrowLeftVOffset + "px"
            });
            if (n.soloArrowLeftHalign == "center") o.css({
                left: "50%",
                marginLeft: a + n.soloArrowLeftHOffset -
                    Math.round(o.innerWidth() / 2) + "px"
            });
            if (n.soloArrowLeftHalign == "left") o.css({
                left: f + n.soloArrowLeftHOffset + a + "px"
            });
            if (n.soloArrowLeftHalign == "right") o.css({
                right: f + n.soloArrowLeftHOffset - a +
                    "px"
            });
            if (n.soloArrowRightValign == "center") u.css({
                top: "50%",
                marginTop: n.soloArrowRightVOffset - Math.round(
                    u.innerHeight() / 2) + "px"
            });
            if (n.soloArrowRightValign == "bottom") u.css({
                top: "auto",
                bottom: 0 + n.soloArrowRightVOffset + "px"
            });
            if (n.soloArrowRightValign == "top") u.css({
                bottom: "auto",
                top: 0 + n.soloArrowRightVOffset + "px"
            });
            if (n.soloArrowRightHalign == "center") u.css({
                left: "50%",
                marginLeft: a + n.soloArrowRightHOffset -
                    Math.round(u.innerWidth() / 2) + "px"
            });
            if (n.soloArrowRightHalign == "left") u.css({
                left: f + n.soloArrowRightHOffset + a +
                    "px"
            });
            if (n.soloArrowRightHalign == "right") u.css({
                right: f + n.soloArrowRightHOffset - a +
                    "px"
            });
            if (o.position() != null) o.css({
                top: Math.round(parseInt(o.position().top,
                    0)) + "px"
            });
            if (u.position() != null) u.css({
                top: Math.round(parseInt(u.position().top,
                    0)) + "px"
            })
        }
        if (n.navigationArrows == "none") {
            o.css({
                visibility: "hidden"
            });
            u.css({
                visibility: "hidden"
            })
        }
        if (n.navigationVAlign == "center") i.css({
            top: "50%",
            marginTop: n.navigationVOffset - Math.round(i.innerHeight() /
                2) + "px"
        });
        if (n.navigationVAlign == "bottom") i.css({
            bottom: 0 + n.navigationVOffset + "px"
        });
        if (n.navigationVAlign == "top") i.css({
            top: 0 + n.navigationVOffset + "px"
        });
        if (n.navigationHAlign == "center") i.css({
            left: "50%",
            marginLeft: a + n.navigationHOffset - Math.round(
                i.innerWidth() / 2) + "px"
        });
        if (n.navigationHAlign == "left") i.css({
            left: 0 + n.navigationHOffset + a + "px"
        });
        if (n.navigationHAlign == "right") i.css({
            right: 0 + n.navigationHOffset - a + "px"
        })
    };
    var g = function(n) {
        var r = n.container;
        n.beforli = n.next - 1;
        n.comingli = n.next + 1;
        if (n.beforli < 0) n.beforli = n.slideamount - 1;
        if (n.comingli >= n.slideamount) n.comingli = 0;
        var i = r.find(">ul:first-child >li:eq(" + n.comingli + ")"),
            s = r.find(">ul:first-child >li:eq(" + n.beforli + ")"),
            o = s.find(".defaultimg").attr("src"),
            u = i.find(".defaultimg").attr("src");
        if (n.arr == t) {
            n.arr = r.parent().find(".tparrows"), n.rar = r.parent()
                .find(".tp-rightarrow"), n.lar = r.parent().find(
                    ".tp-leftarrow"), n.raimg = n.rar.find(
                    ".tp-arr-imgholder"), n.laimg = n.lar.find(
                    ".tp-arr-imgholder"), n.raimg_b = n.rar.find(
                    ".tp-arr-imgholder2"), n.laimg_b = n.lar.find(
                    ".tp-arr-imgholder2"), n.ratit = n.rar.find(
                    ".tp-arr-titleholder"), n.latit = n.lar.find(
                    ".tp-arr-titleholder")
        }
        var a = n.arr,
            f = n.rar,
            l = n.lar,
            c = n.raimg,
            h = n.laimg,
            p = n.raimg_b,
            d = n.laimg_b,
            v = n.ratit,
            m = n.latit;
        if (i.data("title") != t) v.html(i.data("title"));
        if (s.data("title") != t) m.html(s.data("title"));
        if (f.hasClass("itishovered")) {
            f.width(v.outerWidth(true) + parseInt(f.css("minWidth"),
                0))
        }
        if (l.hasClass("itishovered")) {
            l.width(m.outerWidth(true) + parseInt(l.css("minWidth"),
                0))
        }
        if (a.hasClass("preview2") && !a.hasClass("hashoveralready")) {
            a.addClass("hashoveralready");
            if (!Q()) a.hover(function() {
                var t = e(this),
                    n = t.find(".tp-arr-titleholder");
                if (e(window).width() > 767) t.width(n.outerWidth(
                    true) + parseInt(t.css(
                    "minWidth"), 0));
                t.addClass("itishovered")
            }, function() {
                var t = e(this),
                    n = t.find(".tp-arr-titleholder");
                t.css({
                    width: parseInt(t.css(
                        "minWidth"), 0)
                });
                t.removeClass("itishovered")
            });
            else {
                var a = e(this),
                    g = a.find(".tp-arr-titleholder");
                g.addClass("alwayshidden");
                punchgs.TweenLite.set(g, {
                    autoAlpha: 0
                })
            }
        }
        if (s.data("thumb") != t) o = s.data("thumb");
        if (i.data("thumb") != t) u = i.data("thumb");
        if (!a.hasClass("preview4")) {
            punchgs.TweenLite.to(c, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    c.css({
                        backgroundImage: "url(" +
                            u + ")"
                    });
                    h.css({
                        backgroundImage: "url(" +
                            o + ")"
                    })
                }
            });
            punchgs.TweenLite.to(h, .5, {
                autoAlpha: 0,
                onComplete: function() {
                    punchgs.TweenLite.to(c, .5, {
                        autoAlpha: 1,
                        delay: .2
                    });
                    punchgs.TweenLite.to(h, .5, {
                        autoAlpha: 1,
                        delay: .2
                    })
                }
            })
        } else {
            p.css({
                backgroundImage: "url(" + u + ")"
            });
            d.css({
                backgroundImage: "url(" + o + ")"
            });
            punchgs.TweenLite.fromTo(p, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    c.css({
                        backgroundImage: "url(" +
                            u + ")"
                    });
                    punchgs.TweenLite.set(p, {
                        x: 0
                    })
                }
            });
            punchgs.TweenLite.fromTo(d, .8, {
                force3D: punchgs.force3d,
                x: 0
            }, {
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    h.css({
                        backgroundImage: "url(" +
                            o + ")"
                    });
                    punchgs.TweenLite.set(d, {
                        x: 0
                    })
                }
            });
            punchgs.TweenLite.fromTo(c, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: -c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(c, {
                        x: 0
                    })
                }
            });
            punchgs.TweenLite.fromTo(h, .8, {
                x: 0
            }, {
                force3D: punchgs.force3d,
                x: c.width(),
                ease: punchgs.Power3.easeOut,
                delay: 1,
                onComplete: function() {
                    punchgs.TweenLite.set(h, {
                        x: 0
                    })
                }
            })
        } if (f.hasClass("preview4") && !f.hasClass(
            "hashoveralready")) {
            f.addClass("hashoveralready");
            f.hover(function() {
                var t = e(this).find(".tp-arr-iwrapper");
                var n = e(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(t, .4, {
                    x: t.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(n, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var t = e(this).find(".tp-arr-iwrapper");
                var n = e(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(t, .4, {
                    x: t.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(n, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            });
            l.hover(function() {
                var t = e(this).find(".tp-arr-iwrapper");
                var n = e(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.fromTo(t, .4, {
                    x: 0 - t.width()
                }, {
                    x: 0,
                    delay: .3,
                    ease: punchgs.Power3.easeOut,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(n, .2, {
                    autoAlpha: 1,
                    overwrite: "all"
                })
            }, function() {
                var t = e(this).find(".tp-arr-iwrapper");
                var n = e(this).find(".tp-arr-allwrapper");
                punchgs.TweenLite.to(t, .4, {
                    x: 0 - t.width(),
                    ease: punchgs.Power3.easeOut,
                    delay: .2,
                    overwrite: "all"
                });
                punchgs.TweenLite.to(n, .2, {
                    delay: .6,
                    autoAlpha: 0,
                    overwrite: "all"
                })
            })
        }
    };
    var y = function(n, r) {
        r.container.closest(".forcefullwidth_wrapper_tp_banner").find(
            ".tp-fullwidth-forcer").css({
            height: r.container.height()
        });
        r.container.closest(".rev_slider_wrapper").css({
            height: r.container.height()
        });
        r.width = parseInt(r.container.width(), 0);
        r.height = parseInt(r.container.height(), 0);
        r.bw = r.width / r.startwidth;
        r.bh = r.height / r.startheight;
        if (r.bh > r.bw) r.bh = r.bw;
        if (r.bh < r.bw) r.bw = r.bh;
        if (r.bw < r.bh) r.bh = r.bw;
        if (r.bh > 1) {
            r.bw = 1;
            r.bh = 1
        }
        if (r.bw > 1) {
            r.bw = 1;
            r.bh = 1
        }
        r.height = Math.round(r.startheight * (r.width / r.startwidth));
        if (r.height > r.startheight && r.autoHeight != "on") r.height =
            r.startheight;
        if (r.fullScreen == "on") {
            r.height = r.bw * r.startheight;
            var i = r.container.parent().width();
            var s = e(window).height();
            if (r.fullScreenOffsetContainer != t) {
                try {
                    var o = r.fullScreenOffsetContainer.split(",");
                    e.each(o, function(t, n) {
                        s = s - e(n).outerHeight(true);
                        if (s < r.minFullScreenHeight) s =
                            r.minFullScreenHeight
                    })
                } catch (u) {}
                try {
                    if (r.fullScreenOffset.split("%").length > 1 &&
                        r.fullScreenOffset != t && r.fullScreenOffset
                        .length > 0) {
                        s = s - e(window).height() * parseInt(r.fullScreenOffset,
                            0) / 100
                    } else {
                        if (r.fullScreenOffset != t && r.fullScreenOffset
                            .length > 0) s = s - parseInt(r.fullScreenOffset,
                            0)
                    } if (s < r.minFullScreenHeight) s = r.minFullScreenHeight
                } catch (u) {}
            }
            r.container.parent().height(s);
            r.container.closest(".rev_slider_wrapper").height(s);
            r.container.css({
                height: "100%"
            });
            r.height = s;
            if (r.minHeight != t && r.height < r.minHeight) r.height =
                r.minHeight
        } else {
            if (r.minHeight != t && r.height < r.minHeight) r.height =
                r.minHeight;
            r.container.height(r.height)
        }
        r.slotw = Math.ceil(r.width / r.slots);
        if (r.fullScreen == "on") r.sloth = Math.ceil(e(window).height() /
            r.slots);
        else r.sloth = Math.ceil(r.height / r.slots); if (r.autoHeight ==
            "on") r.sloth = Math.ceil(n.height() / r.slots)
    };
    var b = function(n, r) {
        n.find(".tp-caption").each(function() {
            e(this).addClass(e(this).data("transition"));
            e(this).addClass("start")
        });
        n.find(">ul:first").css({
            overflow: "hidden",
            width: "100%",
            height: "100%",
            maxHeight: n.parent().css("maxHeight")
        });
        if (r.autoHeight == "on") {
            n.find(">ul:first").css({
                overflow: "hidden",
                width: "100%",
                height: "100%",
                maxHeight: "none"
            });
            n.css({
                maxHeight: "none"
            });
            n.parent().css({
                maxHeight: "none"
            })
        }
        n.find(">ul:first >li").each(function(n) {
            var r = e(this);
            r.css({
                width: "100%",
                height: "100%",
                overflow: "hidden"
            });
            if (r.data("link") != t) {
                var i = r.data("link");
                var s = "_self";
                var o = 60;
                if (r.data("slideindex") == "back") o = 0;
                var u = r.data("linktoslide");
                if (r.data("target") != t) s = r.data(
                    "target");
                if (i == "slide") {
                    r.append(
                        '<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' +
                        o +
                        ';" data-x="center" data-y="center" data-linktoslide="' +
                        u +
                        '" data-start="0"><a style="width:100%;height:100%;display:block"><span style="width:100%;height:100%;display:block"></span></a></div>'
                    )
                } else {
                    u = "no";
                    r.append(
                        '<div class="tp-caption sft slidelink" style="width:100%;height:100%;z-index:' +
                        o +
                        ';" data-x="center" data-y="center" data-linktoslide="' +
                        u +
                        '" data-start="0"><a style="width:100%;height:100%;display:block" target="' +
                        s + '" href="' + i +
                        '"><span style="width:100%;height:100%;display:block"></span></a></div>'
                    )
                }
            }
        });
        n.parent().css({
            overflow: "visible"
        });
        n.find(">ul:first >li >img").each(function(n) {
            var i = e(this);
            i.addClass("defaultimg");
            if (i.data("lazyload") != t && i.data(
                "lazydone") != 1) {} else {
                y(i, r)
            }
            i.wrap(
                '<div class="slotholder" style="width:100%;height:100%;"' +
                'data-duration="' + i.data("duration") +
                '"' + 'data-zoomstart="' + i.data(
                    "zoomstart") + '"' +
                'data-zoomend="' + i.data("zoomend") +
                '"' + 'data-rotationstart="' + i.data(
                    "rotationstart") + '"' +
                'data-rotationend="' + i.data(
                    "rotationend") + '"' +
                'data-ease="' + i.data("ease") + '"' +
                'data-duration="' + i.data("duration") +
                '"' + 'data-bgpositionend="' + i.data(
                    "bgpositionend") + '"' +
                'data-bgposition="' + i.data(
                    "bgposition") + '"' +
                'data-duration="' + i.data("duration") +
                '"' + 'data-kenburns="' + i.data(
                    "kenburns") + '"' + 'data-easeme="' +
                i.data("ease") + '"' + 'data-bgfit="' +
                i.data("bgfit") + '"' +
                'data-bgfitend="' + i.data("bgfitend") +
                '"' + 'data-owidth="' + i.data("owidth") +
                '"' + 'data-oheight="' + i.data(
                    "oheight") + '"' + "></div>");
            if (r.dottedOverlay != "none" && r.dottedOverlay !=
                t) i.closest(".slotholder").append(
                '<div class="tp-dottedoverlay ' + r.dottedOverlay +
                '"></div>');
            var s = i.attr("src"),
                o = i.data("lazyload"),
                u = i.data("bgfit"),
                a = i.data("bgrepeat"),
                l = i.data("bgposition");
            if (u == t) u = "cover";
            if (a == t) a = "no-repeat";
            if (l == t) l = "center center";
            var c = i.closest(".slotholder");
            i.replaceWith(
                '<div class="tp-bgimg defaultimg" data-lazyload="' +
                i.data("lazyload") + '" data-bgfit="' +
                u + '"data-bgposition="' + l +
                '" data-bgrepeat="' + a +
                '" data-lazydone="' + i.data("lazydone") +
                '" src="' + s + '" data-src="' + s +
                '" style="background-color:' + i.css(
                    "backgroundColor") +
                ";background-repeat:" + a +
                ";background-image:url(" + s +
                ");background-size:" + u +
                ";background-position:" + l +
                ';width:100%;height:100%;"></div>');
            if (f(8)) {
                c.find(".tp-bgimg").css({
                    backgroundImage: "none",
                    "background-image": "none"
                });
                c.find(".tp-bgimg").append(
                    '<img class="ieeightfallbackimage defaultimg" src="' +
                    s + '" style="width:100%">')
            }
            i.css({
                opacity: 0
            });
            i.data("li-id", n)
        })
    };
    var w = function(e, n, r, i) {
        var s = e,
            o = s.find(".defaultimg"),
            u = s.data("zoomstart"),
            a = s.data("rotationstart");
        if (o.data("currotate") != t) a = o.data("currotate");
        if (o.data("curscale") != t) u = o.data("curscale");
        y(o, n);
        var l = o.data("src"),
            c = o.css("background-color"),
            h = n.width,
            p = n.height,
            d = o.data("fxof");
        if (n.autoHeight == "on") p = n.container.height();
        if (d == t) d = 0;
        fullyoff = 0;
        var v = 0,
            m = o.data("bgfit"),
            g = o.data("bgrepeat"),
            b = o.data("bgposition");
        if (m == t) m = "cover";
        if (g == t) g = "no-repeat";
        if (b == t) b = "center center";
        if (f(8)) {
            s.data("kenburns", "off");
            var w = l;
            l = ""
        }
        if (n.panZoomDisableOnMobile == "on" && Q()) {
            s.data("kenburns", "off")
        }
        if (s.data("kenburns") == "on") {
            m = u;
            if (m.toString().length < 4) m = G(m, s, n)
        }
        if (i == "horizontal") {
            if (!r) var v = 0 - n.slotw;
            for (var E = 0; E < n.slots; E++) {
                s.append(
                    '<div class="slot" style="position:absolute;' +
                    "top:" + (0 + fullyoff) + "px;" + "left:" +
                    (d + E * n.slotw) + "px;" +
                    "overflow:hidden;width:" + (n.slotw + .6) +
                    "px;" + "height:" + p + 'px">' +
                    '<div class="slotslide" style="position:absolute;' +
                    "top:0px;left:" + v + "px;" + "width:" + (n
                        .slotw + .6) + "px;" + "height:" + p +
                    'px;overflow:hidden;">' +
                    '<div style="background-color:' + c + ";" +
                    "position:absolute;top:0px;" + "left:" + (0 -
                        E * n.slotw) + "px;" + "width:" + h +
                    "px;height:" + p + "px;" +
                    "background-image:url(" + l + ");" +
                    "background-repeat:" + g + ";" +
                    "background-size:" + m +
                    ";background-position:" + b + ';">' +
                    "</div></div></div>");
                if (u != t && a != t) punchgs.TweenLite.set(s.find(
                    ".slot").last(), {
                    rotationZ: a
                });
                if (f(8)) {
                    s.find(".slot ").last().find(".slotslide").append(
                        '<img class="ieeightfallbackimage" src="' +
                        w + '" style="width:100%;height:auto">'
                    );
                    S(s, n)
                }
            }
        } else {
            if (!r) var v = 0 - n.sloth;
            for (var E = 0; E < n.slots + 2; E++) {
                s.append(
                    '<div class="slot" style="position:absolute;' +
                    "top:" + (fullyoff + E * n.sloth) + "px;" +
                    "left:" + d + "px;" + "overflow:hidden;" +
                    "width:" + h + "px;" + "height:" + n.sloth +
                    'px">' +
                    '<div class="slotslide" style="position:absolute;' +
                    "top:" + v + "px;" + "left:0px;width:" + h +
                    "px;" + "height:" + n.sloth + "px;" +
                    'overflow:hidden;">' +
                    '<div style="background-color:' + c + ";" +
                    "position:absolute;" + "top:" + (0 - E * n.sloth) +
                    "px;" + "left:0px;" + "width:" + h +
                    "px;height:" + p + "px;" +
                    "background-image:url(" + l + ");" +
                    "background-repeat:" + g + ";" +
                    "background-size:" + m +
                    ";background-position:" + b + ';">' +
                    "</div></div></div>");
                if (u != t && a != t) punchgs.TweenLite.set(s.find(
                    ".slot").last(), {
                    rotationZ: a
                });
                if (f(8)) {
                    s.find(".slot ").last().find(".slotslide").append(
                        '<img class="ieeightfallbackimage" src="' +
                        w +
                        '" style="width:100%;height:auto;">');
                    S(s, n)
                }
            }
        }
    };
    var E = function(e, n, r) {
        var i = e;
        var s = i.find(".defaultimg");
        var o = i.data("zoomstart");
        var u = i.data("rotationstart");
        if (s.data("currotate") != t) u = s.data("currotate");
        if (s.data("curscale") != t) o = s.data("curscale") * 100;
        y(s, n);
        var a = s.data("src");
        var l = s.css("backgroundColor");
        var c = n.width;
        var h = n.height;
        if (n.autoHeight == "on") h = n.container.height();
        var p = s.data("fxof");
        if (p == t) p = 0;
        fullyoff = 0;
        var d = 0;
        if (f(8)) {
            var v = a;
            a = ""
        }
        var m = 0;
        if (n.sloth > n.slotw) m = n.sloth;
        else m = n.slotw; if (!r) {
            var d = 0 - m
        }
        n.slotw = m;
        n.sloth = m;
        var g = 0;
        var b = 0;
        var w = s.data("bgfit");
        var E = s.data("bgrepeat");
        var x = s.data("bgposition");
        if (w == t) w = "cover";
        if (E == t) E = "no-repeat";
        if (x == t) x = "center center";
        if (i.data("kenburns") == "on") {
            w = o;
            if (w.toString().length < 4) w = G(w, i, n)
        }
        for (var T = 0; T < n.slots; T++) {
            b = 0;
            for (var N = 0; N < n.slots; N++) {
                i.append('<div class="slot" ' +
                    'style="position:absolute;' + "top:" + (
                        fullyoff + b) + "px;" + "left:" + (p +
                        g) + "px;" + "width:" + m + "px;" +
                    "height:" + m + "px;" +
                    'overflow:hidden;">' +
                    '<div class="slotslide" data-x="' + g +
                    '" data-y="' + b + '" ' +
                    'style="position:absolute;' + "top:" + 0 +
                    "px;" + "left:" + 0 + "px;" + "width:" + m +
                    "px;" + "height:" + m + "px;" +
                    'overflow:hidden;">' +
                    '<div style="position:absolute;' + "top:" +
                    (0 - b) + "px;" + "left:" + (0 - g) + "px;" +
                    "width:" + c + "px;" + "height:" + h +
                    "px;" + "background-color:" + l + ";" +
                    "background-image:url(" + a + ");" +
                    "background-repeat:" + E + ";" +
                    "background-size:" + w +
                    ";background-position:" + x + ';">' +
                    "</div></div></div>");
                b = b + m;
                if (f(8)) {
                    i.find(".slot ").last().find(".slotslide").append(
                        '<img src="' + v + '">');
                    S(i, n)
                }
                if (o != t && u != t) punchgs.TweenLite.set(i.find(
                    ".slot").last(), {
                    rotationZ: u
                })
            }
            g = g + m
        }
    };
    var S = function(e, t) {
        if (f(8)) {
            var n = e.find(".ieeightfallbackimage");
            var r = n.width(),
                i = n.height();
            if (t.startwidth / t.startheight < e.data("owidth") / e
                .data("oheight")) n.css({
                width: "auto",
                height: "100%"
            });
            else n.css({
                width: "100%",
                height: "auto"
            });
            setTimeout(function() {
                var r = n.width(),
                    i = n.height();
                if (e.data("bgposition") == "center center")
                    n.css({
                        position: "absolute",
                        top: t.height / 2 - i / 2 +
                            "px",
                        left: t.width / 2 - r / 2 +
                            "px"
                    });
                if (e.data("bgposition") == "center top" ||
                    e.data("bgposition") == "top center") n
                    .css({
                        position: "absolute",
                        top: "0px",
                        left: t.width / 2 - r / 2 +
                            "px"
                    });
                if (e.data("bgposition") == "center bottom" ||
                    e.data("bgposition") == "bottom center"
                ) n.css({
                    position: "absolute",
                    bottom: "0px",
                    left: t.width / 2 - r / 2 +
                        "px"
                });
                if (e.data("bgposition") == "right top" ||
                    e.data("bgposition") == "top right") n.css({
                    position: "absolute",
                    top: "0px",
                    right: "0px"
                });
                if (e.data("bgposition") == "right bottom" ||
                    e.data("bgposition") == "bottom right")
                    n.css({
                        position: "absolute",
                        bottom: "0px",
                        right: "0px"
                    });
                if (e.data("bgposition") == "right center" ||
                    e.data("bgposition") == "center right")
                    n.css({
                        position: "absolute",
                        top: t.height / 2 - i / 2 +
                            "px",
                        right: "0px"
                    });
                if (e.data("bgposition") == "left bottom" ||
                    e.data("bgposition") == "bottom left") n
                    .css({
                        position: "absolute",
                        bottom: "0px",
                        left: "0px"
                    });
                if (e.data("bgposition") == "left center" ||
                    e.data("bgposition") == "center left") n
                    .css({
                        position: "absolute",
                        top: t.height / 2 - i / 2 +
                            "px",
                        left: "0px"
                    })
            }, 20)
        }
    };
    var x = function(t, n, r) {
        r.find(".slot").each(function() {
            e(this).remove()
        });
        n.transition = 0
    };
    var T = function(n, r) {
        n.find("img, .defaultimg").each(function(n) {
            var i = e(this);
            if (i.data("lazyload") != i.attr("src") && r <
                3 && i.data("lazyload") != t && i.data(
                    "lazyload") != "undefined") {
                if (i.data("lazyload") != t && i.data(
                    "lazyload") != "undefined") {
                    i.attr("src", i.data("lazyload"));
                    var s = new Image;
                    s.onload = function(e) {
                        i.data("lazydone", 1);
                        if (i.hasClass("defaultimg")) N(
                            i, s)
                    };
                    s.error = function() {
                        i.data("lazydone", 1)
                    };
                    s.src = i.attr("src");
                    if (s.complete) {
                        if (i.hasClass("defaultimg")) N(i,
                            s);
                        i.data("lazydone", 1)
                    }
                }
            } else {
                if ((i.data("lazyload") === t || i.data(
                    "lazyload") === "undefined") && i.data(
                    "lazydone") != 1) {
                    var s = new Image;
                    s.onload = function() {
                        if (i.hasClass("defaultimg")) N(
                            i, s);
                        i.data("lazydone", 1)
                    };
                    s.error = function() {
                        i.data("lazydone", 1)
                    };
                    if (i.attr("src") != t && i.attr("src") !=
                        "undefined") {
                        s.src = i.attr("src")
                    } else s.src = i.data("src"); if (s.complete) {
                        if (i.hasClass("defaultimg")) {
                            N(i, s)
                        }
                        i.data("lazydone", 1)
                    }
                }
            }
        })
    };
    var N = function(e, t) {
        var n = e.closest("li");
        var r = t.width;
        var i = t.height;
        n.data("owidth", r);
        n.data("oheight", i);
        n.find(".slotholder").data("owidth", r);
        n.find(".slotholder").data("oheight", i);
        n.data("loadeddone", 1)
    };
    var C = function(n, r, i) {
        T(n, 0);
        var s = setInterval(function() {
            i.bannertimeronpause = true;
            i.container.trigger("stoptimer");
            i.cd = 0;
            var o = 0;
            n.find("img, .defaultimg").each(function(t) {
                if (e(this).data("lazydone") != 1) {
                    o++
                }
            });
            if (o > 0) T(n, o);
            else {
                clearInterval(s);
                if (r != t) r()
            }
        }, 100)
    };
    var k = function(e, n) {
        try {
            var r = e.find(">ul:first-child >li:eq(" + n.act + ")")
        } catch (i) {
            var r = e.find(">ul:first-child >li:eq(1)")
        }
        n.lastslide = n.act;
        var s = e.find(">ul:first-child >li:eq(" + n.next + ")");
        var o = s.find(".defaultimg");
        n.bannertimeronpause = true;
        e.trigger("stoptimer");
        n.cd = 0;
        if (o.data("lazyload") != t && o.data("lazyload") !=
            "undefined" && o.data("lazydone") != 1) {
            if (!f(8)) o.css({
                backgroundImage: 'url("' + s.find(
                        ".defaultimg").data("lazyload") +
                    '")'
            });
            else {
                o.attr("src", s.find(".defaultimg").data("lazyload"))
            }
            o.data("src", s.find(".defaultimg").data("lazyload"));
            o.data("lazydone", 1);
            o.data("orgw", 0);
            s.data("loadeddone", 1);
            e.find(".tp-loader").css({
                display: "block"
            });
            C(e.find(".tp-static-layers"), function() {
                C(s, function() {
                    var t = s.find(".slotholder");
                    if (t.data("kenburns") == "on") {
                        var r = setInterval(
                            function() {
                                var i = t.data(
                                    "owidth"
                                );
                                if (i >= 0) {
                                    clearInterval
                                        (r);
                                    L(n, o, e)
                                }
                            }, 10)
                    } else L(n, o, e)
                }, n)
            }, n)
        } else {
            if (s.data("loadeddone") === t) {
                s.data("loadeddone", 1);
                C(s, function() {
                    L(n, o, e)
                }, n)
            } else L(n, o, e)
        }
    };
    var L = function(e, t, n) {
        e.bannertimeronpause = false;
        e.cd = 0;
        n.trigger("nulltimer");
        n.find(".tp-loader").css({
            display: "none"
        });
        y(t, e);
        m(n, e);
        y(t, e);
        A(n, e)
    };
    var A = function(e, n) {
        e.trigger("revolution.slide.onbeforeswap");
        n.transition = 1;
        n.videoplaying = false;
        try {
            var r = e.find(">ul:first-child >li:eq(" + n.act + ")")
        } catch (i) {
            var r = e.find(">ul:first-child >li:eq(1)")
        }
        n.lastslide = n.act;
        var s = e.find(">ul:first-child >li:eq(" + n.next + ")");
        setTimeout(function() {
            g(n)
        }, 200);
        var o = r.find(".slotholder");
        var u = s.find(".slotholder");
        if (u.data("kenburns") == "on" || o.data("kenburns") ==
            "on") {
            tt(e, n);
            e.find(".kenburnimg").remove()
        }
        if (s.data("delay") != t) {
            n.cd = 0;
            n.delay = s.data("delay")
        } else {
            n.delay = n.origcd
        } if (n.firststart == 1) punchgs.TweenLite.set(r, {
            autoAlpha: 0
        });
        punchgs.TweenLite.set(r, {
            zIndex: 18
        });
        punchgs.TweenLite.set(s, {
            autoAlpha: 0,
            zIndex: 20
        });
        var a = 0;
        if (r.index() != s.index() && n.firststart != 1) {
            a = X(r, n)
        }
        if (r.data("saveperformance") != "on") a = 0;
        setTimeout(function() {
            e.trigger("restarttimer");
            O(e, n, s, r, o, u)
        }, a)
    };
    var O = function(n, r, i, s, o, u) {
        function T() {
            e.each(d, function(e, t) {
                if (t[0] == h || t[8] == h) {
                    a = t[1];
                    p = t[2];
                    g = y
                }
                y = y + 1
            })
        }
        if (i.data("differentissplayed") == "prepared") {
            i.data("differentissplayed", "done");
            i.data("transition", i.data("savedtransition"));
            i.data("slotamount", i.data("savedslotamount"));
            i.data("masterspeed", i.data("savedmasterspeed"))
        }
        if (i.data("fstransition") != t && i.data(
            "differentissplayed") != "done") {
            i.data("savedtransition", i.data("transition"));
            i.data("savedslotamount", i.data("slotamount"));
            i.data("savedmasterspeed", i.data("masterspeed"));
            i.data("transition", i.data("fstransition"));
            i.data("slotamount", i.data("fsslotamount"));
            i.data("masterspeed", i.data("fsmasterspeed"));
            i.data("differentissplayed", "prepared")
        }
        n.find(".active-revslide").removeClass(".active-revslide");
        i.addClass("active-revslide");
        if (i.data("transition") == t) i.data("transition",
            "random");
        var a = 0,
            l = i.data("transition").split(","),
            c = i.data("nexttransid") == t ? -1 : i.data(
                "nexttransid");
        if (i.data("randomtransition") == "on") c = Math.round(Math
            .random() * l.length);
        else c = c + 1; if (c == l.length) c = 0;
        i.data("nexttransid", c);
        var h = l[c];
        if (r.ie) {
            if (h == "boxfade") h = "boxslide";
            if (h == "slotfade-vertical") h = "slotzoom-vertical";
            if (h == "slotfade-horizontal") h =
                "slotzoom-horizontal"
        }
        if (f(8)) {
            h = 11
        }
        var p = 0;
        if (r.parallax == "scroll" && r.parallaxFirstGo == t) {
            r.parallaxFirstGo = true;
            rt(n, r);
            setTimeout(function() {
                rt(n, r)
            }, 210);
            setTimeout(function() {
                rt(n, r)
            }, 420)
        }
        if (h == "slidehorizontal") {
            h = "slideleft";
            if (r.leftarrowpressed == 1) h = "slideright"
        }
        if (h == "slidevertical") {
            h = "slideup";
            if (r.leftarrowpressed == 1) h = "slidedown"
        }
        if (h == "parallaxhorizontal") {
            h = "parallaxtoleft";
            if (r.leftarrowpressed == 1) h = "parallaxtoright"
        }
        if (h == "parallaxvertical") {
            h = "parallaxtotop";
            if (r.leftarrowpressed == 1) h = "parallaxtobottom"
        }
        var d = [
            ["boxslide", 0, 1, 10, 0, "box", false, null, 0],
            ["boxfade", 1, 0, 10, 0, "box", false, null, 1],
            ["slotslide-horizontal", 2, 0, 0, 200, "horizontal",
                true, false, 2
            ],
            ["slotslide-vertical", 3, 0, 0, 200, "vertical",
                true, false, 3
            ],
            ["curtain-1", 4, 3, 0, 0, "horizontal", true, true,
                4
            ],
            ["curtain-2", 5, 3, 0, 0, "horizontal", true, true,
                5
            ],
            ["curtain-3", 6, 3, 25, 0, "horizontal", true, true,
                6
            ],
            ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal",
                true, true, 7
            ],
            ["slotzoom-vertical", 8, 0, 0, 0, "vertical", true,
                true, 8
            ],
            ["slotfade-horizontal", 9, 0, 0, 500, "horizontal",
                true, null, 9
            ],
            ["slotfade-vertical", 10, 0, 0, 500, "vertical",
                true, null, 10
            ],
            ["fade", 11, 0, 1, 300, "horizontal", true, null,
                11
            ],
            ["slideleft", 12, 0, 1, 0, "horizontal", true, true,
                12
            ],
            ["slideup", 13, 0, 1, 0, "horizontal", true, true,
                13
            ],
            ["slidedown", 14, 0, 1, 0, "horizontal", true, true,
                14
            ],
            ["slideright", 15, 0, 1, 0, "horizontal", true,
                true, 15
            ],
            ["papercut", 16, 0, 0, 600, "", null, null, 16],
            ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical",
                false, true, 17
            ],
            ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal",
                false, true, 18
            ],
            ["cubic", 19, 0, 20, 600, "horizontal", false, true,
                19
            ],
            ["cube", 19, 0, 20, 600, "horizontal", false, true,
                20
            ],
            ["flyin", 20, 0, 4, 600, "vertical", false, true,
                21
            ],
            ["turnoff", 21, 0, 1, 1600, "horizontal", false,
                true, 22
            ],
            ["incube", 22, 0, 20, 200, "horizontal", false,
                true, 23
            ],
            ["cubic-horizontal", 23, 0, 20, 500, "vertical",
                false, true, 24
            ],
            ["cube-horizontal", 23, 0, 20, 500, "vertical",
                false, true, 25
            ],
            ["incube-horizontal", 24, 0, 20, 500, "vertical",
                false, true, 26
            ],
            ["turnoff-vertical", 25, 0, 1, 200, "horizontal",
                false, true, 27
            ],
            ["fadefromright", 12, 1, 1, 0, "horizontal", true,
                true, 28
            ],
            ["fadefromleft", 15, 1, 1, 0, "horizontal", true,
                true, 29
            ],
            ["fadefromtop", 14, 1, 1, 0, "horizontal", true,
                true, 30
            ],
            ["fadefrombottom", 13, 1, 1, 0, "horizontal", true,
                true, 31
            ],
            ["fadetoleftfadefromright", 12, 2, 1, 0,
                "horizontal", true, true, 32
            ],
            ["fadetorightfadetoleft", 15, 2, 1, 0, "horizontal",
                true, true, 33
            ],
            ["fadetobottomfadefromtop", 14, 2, 1, 0,
                "horizontal", true, true, 34
            ],
            ["fadetotopfadefrombottom", 13, 2, 1, 0,
                "horizontal", true, true, 35
            ],
            ["parallaxtoright", 12, 3, 1, 0, "horizontal", true,
                true, 36
            ],
            ["parallaxtoleft", 15, 3, 1, 0, "horizontal", true,
                true, 37
            ],
            ["parallaxtotop", 14, 3, 1, 0, "horizontal", true,
                true, 38
            ],
            ["parallaxtobottom", 13, 3, 1, 0, "horizontal",
                true, true, 39
            ],
            ["scaledownfromright", 12, 4, 1, 0, "horizontal",
                true, true, 40
            ],
            ["scaledownfromleft", 15, 4, 1, 0, "horizontal",
                true, true, 41
            ],
            ["scaledownfromtop", 14, 4, 1, 0, "horizontal",
                true, true, 42
            ],
            ["scaledownfrombottom", 13, 4, 1, 0, "horizontal",
                true, true, 43
            ],
            ["zoomout", 13, 5, 1, 0, "horizontal", true, true,
                44
            ],
            ["zoomin", 13, 6, 1, 0, "horizontal", true, true,
                45
            ],
            ["notransition", 26, 0, 1, 0, "horizontal", true,
                null, 46
            ]
        ];
        var v = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
            40, 41, 42, 43, 44, 45
        ];
        var m = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
        var a = 0;
        var p = 1;
        var g = 0;
        var y = 0;
        var b = new Array;
        if (u.data("kenburns") == "on") {
            if (h == "boxslide" || h == 0 || h == "boxfade" || h ==
                1 || h == "papercut" || h == 16) h = 11;
            Y(n, r, true, true)
        }
        if (h == "random") {
            h = Math.round(Math.random() * d.length - 1);
            if (h > d.length - 1) h = d.length - 1
        }
        if (h == "random-static") {
            h = Math.round(Math.random() * v.length - 1);
            if (h > v.length - 1) h = v.length - 1;
            h = v[h]
        }
        if (h == "random-premium") {
            h = Math.round(Math.random() * m.length - 1);
            if (h > m.length - 1) h = m.length - 1;
            h = m[h]
        }
        var S = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35,
            36, 37, 38, 39, 40, 41, 42, 43, 44, 45
        ];
        if (r.isJoomla == true && window.MooTools != t && S.indexOf(
            h) != -1) {
            var x = Math.round(Math.random() * (m.length - 2)) + 1;
            if (x > m.length - 1) x = m.length - 1;
            if (x == 0) x = 1;
            h = m[x]
        }
        T();
        if (f(8) && a > 15 && a < 28) {
            h = Math.round(Math.random() * v.length - 1);
            if (h > v.length - 1) h = v.length - 1;
            h = v[h];
            y = 0;
            T()
        }
        var N = -1;
        if (r.leftarrowpressed == 1 || r.act > r.next) N = 1;
        r.leftarrowpressed = 0;
        if (a > 26) a = 26;
        if (a < 0) a = 0;
        var C = 300;
        if (i.data("masterspeed") != t && i.data("masterspeed") >
            99 && i.data("masterspeed") < r.delay) C = i.data(
            "masterspeed");
        if (i.data("masterspeed") != t && i.data("masterspeed") > r
            .delay) C = r.delay;
        b = d[g];
        n.parent().find(".bullet").each(function() {
            var t = e(this);
            t.removeClass("selected");
            if (r.navigationArrows == "withbullet" || r.navigationArrows ==
                "nexttobullets") {
                if (t.index() - 1 == r.next) t.addClass(
                    "selected")
            } else {
                if (t.index() == r.next) t.addClass(
                    "selected")
            }
        });
        var k = new punchgs.TimelineLite({
            onComplete: function() {
                M(n, r, u, o, i, s, k)
            }
        });
        k.add(punchgs.TweenLite.set(u.find(".defaultimg"), {
            opacity: 0
        }));
        k.pause();
        if (i.data("slotamount") == t || i.data("slotamount") < 1) {
            r.slots = Math.round(Math.random() * 12 + 4);
            if (h == "boxslide") r.slots = Math.round(Math.random() *
                6 + 3);
            else if (h == "flyin") r.slots = Math.round(Math.random() *
                4 + 1)
        } else {
            r.slots = i.data("slotamount")
        } if (i.data("rotate") == t) r.rotate = 0;
        else if (i.data("rotate") == 999) r.rotate = Math.round(
            Math.random() * 360);
        else r.rotate = i.data("rotate"); if (!e.support.transition ||
            r.ie || r.ie9) r.rotate = 0;
        if (r.firststart == 1) r.firststart = 0;
        C = C + b[4];
        if ((a == 4 || a == 5 || a == 6) && r.slots < 3) r.slots =
            3;
        if (b[3] != 0) r.slots = Math.min(r.slots, b[3]);
        if (a == 9) r.slots = r.width / 20;
        if (a == 10) r.slots = r.height / 20;
        if (b[5] == "box") {
            if (b[7] != null) E(o, r, b[7]);
            if (b[6] != null) E(u, r, b[6])
        } else if (b[5] == "vertical" || b[5] == "horizontal") {
            if (b[7] != null) w(o, r, b[7], b[5]);
            if (b[6] != null) w(u, r, b[6], b[5])
        }
        if (a == 0) {
            var L = Math.ceil(r.height / r.sloth);
            var A = 0;
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                A = A + 1;
                if (A == L) A = 0;
                k.add(punchgs.TweenLite.from(n, C / 600, {
                    opacity: 0,
                    top: 0 - r.sloth,
                    left: 0 - r.slotw,
                    rotation: r.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeOut
                }), (t * 15 + A * 30) / 1500)
            })
        }
        if (a == 1) {
            var O, _ = 0;
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                rand = Math.random() * C + 300;
                rand2 = Math.random() * 500 + 200;
                if (rand + rand2 > O) {
                    O = rand2 + rand2;
                    _ = t
                }
                k.add(punchgs.TweenLite.from(n, rand / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    rotation: r.rotate,
                    ease: punchgs.Power2.easeInOut
                }), rand2 / 1e3)
            })
        }
        if (a == 2) {
            var D = new punchgs.TimelineLite;
            o.find(".slotslide").each(function() {
                var t = e(this);
                D.add(punchgs.TweenLite.to(t, C / 1e3, {
                    left: r.slotw,
                    force3D: "auto",
                    rotation: 0 - r.rotate
                }), 0);
                k.add(D, 0)
            });
            u.find(".slotslide").each(function() {
                var t = e(this);
                D.add(punchgs.TweenLite.from(t, C / 1e3, {
                    left: 0 - r.slotw,
                    force3D: "auto",
                    rotation: r.rotate
                }), 0);
                k.add(D, 0)
            })
        }
        if (a == 3) {
            var D = new punchgs.TimelineLite;
            o.find(".slotslide").each(function() {
                var t = e(this);
                D.add(punchgs.TweenLite.to(t, C / 1e3, {
                    top: r.sloth,
                    rotation: r.rotate,
                    force3D: "auto",
                    transformPerspective: 600
                }), 0);
                k.add(D, 0)
            });
            u.find(".slotslide").each(function() {
                var t = e(this);
                D.add(punchgs.TweenLite.from(t, C / 1e3, {
                    top: 0 - r.sloth,
                    rotation: r.rotate,
                    ease: punchgs.Power2.easeOut,
                    force3D: "auto",
                    transformPerspective: 600
                }), 0);
                k.add(D, 0)
            })
        }
        if (a == 4 || a == 5) {
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            var P = C / 1e3,
                H = P,
                D = new punchgs.TimelineLite;
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                var i = t * P / r.slots;
                if (a == 5) i = (r.slots - t - 1) * P / r.slots /
                    1.5;
                D.add(punchgs.TweenLite.to(n, P * 3, {
                    transformPerspective: 600,
                    force3D: "auto",
                    top: 0 + r.height,
                    opacity: .5,
                    rotation: r.rotate,
                    ease: punchgs.Power2.easeInOut,
                    delay: i
                }), 0);
                k.add(D, 0)
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                var i = t * P / r.slots;
                if (a == 5) i = (r.slots - t - 1) * P / r.slots /
                    1.5;
                D.add(punchgs.TweenLite.from(n, P * 3, {
                    top: 0 - r.height,
                    opacity: .5,
                    rotation: r.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut,
                    delay: i
                }), 0);
                k.add(D, 0)
            })
        }
        if (a == 6) {
            if (r.slots < 2) r.slots = 2;
            if (r.slots % 2) r.slots = r.slots + 1;
            var D = new punchgs.TimelineLite;
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                if (t + 1 < r.slots / 2) var i = (t + 2) *
                    90;
                else var i = (2 + r.slots - t) * 90;
                D.add(punchgs.TweenLite.to(n, (C + i) / 1e3, {
                    top: 0 + r.height,
                    opacity: 1,
                    force3D: "auto",
                    rotation: r.rotate,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                k.add(D, 0)
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                if (t + 1 < r.slots / 2) var i = (t + 2) *
                    90;
                else var i = (2 + r.slots - t) * 90;
                D.add(punchgs.TweenLite.from(n, (C + i) /
                    1e3, {
                        top: 0 - r.height,
                        opacity: 1,
                        force3D: "auto",
                        rotation: r.rotate,
                        ease: punchgs.Power2.easeInOut
                    }), 0);
                k.add(D, 0)
            })
        }
        if (a == 7) {
            C = C * 2;
            if (C > r.delay) C = r.delay;
            var D = new punchgs.TimelineLite;
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            o.find(".slotslide").each(function() {
                var t = e(this).find("div");
                D.add(punchgs.TweenLite.to(t, C / 1e3, {
                    left: 0 - r.slotw / 2 +
                        "px",
                    top: 0 - r.height / 2 +
                        "px",
                    width: r.slotw * 2 + "px",
                    height: r.height * 2 + "px",
                    opacity: 0,
                    rotation: r.rotate,
                    force3D: "auto",
                    ease: punchgs.Power2.easeOut
                }), 0);
                k.add(D, 0)
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this).find("div");
                D.add(punchgs.TweenLite.fromTo(n, C / 1e3, {
                    left: 0,
                    top: 0,
                    opacity: 0,
                    transformPerspective: 600
                }, {
                    left: 0 - t * r.slotw +
                        "px",
                    ease: punchgs.Power2.easeOut,
                    force3D: "auto",
                    top: 0 + "px",
                    width: r.width,
                    height: r.height,
                    opacity: 1,
                    rotation: 0,
                    delay: .1
                }), 0);
                k.add(D, 0)
            })
        }
        if (a == 8) {
            C = C * 3;
            if (C > r.delay) C = r.delay;
            var D = new punchgs.TimelineLite;
            o.find(".slotslide").each(function() {
                var t = e(this).find("div");
                D.add(punchgs.TweenLite.to(t, C / 1e3, {
                    left: 0 - r.width / 2 +
                        "px",
                    top: 0 - r.sloth / 2 + "px",
                    width: r.width * 2 + "px",
                    height: r.sloth * 2 + "px",
                    force3D: "auto",
                    opacity: 0,
                    rotation: r.rotate
                }), 0);
                k.add(D, 0)
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this).find("div");
                D.add(punchgs.TweenLite.fromTo(n, C / 1e3, {
                    left: 0,
                    top: 0,
                    opacity: 0,
                    force3D: "auto"
                }, {
                    left: 0 + "px",
                    top: 0 - t * r.sloth + "px",
                    width: u.find(".defaultimg")
                        .data("neww") + "px",
                    height: u.find(
                        ".defaultimg").data(
                        "newh") + "px",
                    opacity: 1,
                    rotation: 0
                }), 0);
                k.add(D, 0)
            })
        }
        if (a == 9 || a == 10) {
            var B = 0;
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                B++;
                k.add(punchgs.TweenLite.fromTo(n, C / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    transformPerspective: 600
                }, {
                    autoAlpha: 1,
                    ease: punchgs.Power2.easeInOut,
                    delay: t * 5 / 1e3
                }), 0)
            })
        }
        if (a == 11 || a == 26) {
            var B = 0;
            if (a == 26) C = 0;
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                k.add(punchgs.TweenLite.from(n, C / 1e3, {
                    autoAlpha: 0,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut
                }), 0)
            })
        }
        if (a == 12 || a == 13 || a == 14 || a == 15) {
            C = C;
            if (C > r.delay) C = r.delay;
            setTimeout(function() {
                punchgs.TweenLite.set(o.find(".defaultimg"), {
                    autoAlpha: 0
                })
            }, 100);
            var j = r.width;
            var F = r.height;
            var q = u.find(".slotslide");
            if (r.fullWidth == "on" || r.fullScreen == "on") {
                j = q.width();
                F = q.height()
            }
            var R = 0;
            var U = 0;
            if (a == 12) R = j;
            else if (a == 15) R = 0 - j;
            else if (a == 13) U = F;
            else if (a == 14) U = 0 - F;
            var z = 1;
            var W = 1;
            var X = 1;
            var V = punchgs.Power2.easeInOut;
            var $ = punchgs.Power2.easeInOut;
            var J = C / 1e3;
            var K = J;
            if (p == 1) z = 0;
            if (p == 2) z = 0;
            if (p == 3) {
                V = punchgs.Power2.easeInOut;
                $ = punchgs.Power1.easeInOut;
                J = C / 1200
            }
            if (p == 4 || p == 5) W = .6;
            if (p == 6) W = 1.4;
            if (p == 5 || p == 6) {
                X = 1.4;
                z = 0;
                j = 0;
                F = 0;
                R = 0;
                U = 0
            }
            if (p == 6) X = .6;
            var Q = 0;
            k.add(punchgs.TweenLite.from(q, J, {
                left: R,
                top: U,
                scale: X,
                opacity: z,
                rotation: r.rotate,
                ease: $,
                force3D: "auto"
            }), 0);
            var G = o.find(".slotslide");
            if (p == 4 || p == 5) {
                j = 0;
                F = 0
            }
            if (p != 1) {
                if (a == 12) k.add(punchgs.TweenLite.to(G, K, {
                    left: 0 - j + "px",
                    force3D: "auto",
                    scale: W,
                    opacity: z,
                    rotation: r.rotate,
                    ease: V
                }), 0);
                else if (a == 15) k.add(punchgs.TweenLite.to(G, K, {
                    left: j + "px",
                    force3D: "auto",
                    scale: W,
                    opacity: z,
                    rotation: r.rotate,
                    ease: V
                }), 0);
                else if (a == 13) k.add(punchgs.TweenLite.to(G, K, {
                    top: 0 - F + "px",
                    force3D: "auto",
                    scale: W,
                    opacity: z,
                    rotation: r.rotate,
                    ease: V
                }), 0);
                else if (a == 14) k.add(punchgs.TweenLite.to(G, K, {
                    top: F + "px",
                    force3D: "auto",
                    scale: W,
                    opacity: z,
                    rotation: r.rotate,
                    ease: V
                }), 0)
            }
        }
        if (a == 16) {
            var D = new punchgs.TimelineLite;
            k.add(punchgs.TweenLite.set(s, {
                position: "absolute",
                "z-index": 20
            }), 0);
            k.add(punchgs.TweenLite.set(i, {
                position: "absolute",
                "z-index": 15
            }), 0);
            s.wrapInner(
                '<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'
            );
            s.find(".tp-half-one").clone(true).appendTo(s).addClass(
                "tp-half-two");
            s.find(".tp-half-two").removeClass("tp-half-one");
            var j = r.width;
            var F = r.height;
            if (r.autoHeight == "on") F = n.height();
            s.find(".tp-half-one .defaultimg").wrap(
                '<div class="tp-papercut" style="width:' + j +
                "px;height:" + F + 'px;"></div>');
            s.find(".tp-half-two .defaultimg").wrap(
                '<div class="tp-papercut" style="width:' + j +
                "px;height:" + F + 'px;"></div>');
            s.find(".tp-half-two .defaultimg").css({
                position: "absolute",
                top: "-50%"
            });
            s.find(".tp-half-two .tp-caption").wrapAll(
                '<div style="position:absolute;top:-50%;left:0px;"></div>'
            );
            k.add(punchgs.TweenLite.set(s.find(".tp-half-two"), {
                width: j,
                height: F,
                overflow: "hidden",
                zIndex: 15,
                position: "absolute",
                top: F / 2,
                left: "0px",
                transformPerspective: 600,
                transformOrigin: "center bottom"
            }), 0);
            k.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                width: j,
                height: F / 2,
                overflow: "visible",
                zIndex: 10,
                position: "absolute",
                top: "0px",
                left: "0px",
                transformPerspective: 600,
                transformOrigin: "center top"
            }), 0);
            var Z = s.find(".defaultimg");
            var et = Math.round(Math.random() * 20 - 10),
                tt = Math.round(Math.random() * 20 - 10),
                nt = Math.round(Math.random() * 20 - 10),
                it = Math.random() * .4 - .2,
                st = Math.random() * .4 - .2,
                ot = Math.random() * 1 + 1,
                ut = Math.random() * 1 + 1,
                at = Math.random() * .3 + .3;
            k.add(punchgs.TweenLite.set(s.find(".tp-half-one"), {
                overflow: "hidden"
            }), 0);
            k.add(punchgs.TweenLite.fromTo(s.find(".tp-half-one"),
                C / 800, {
                    width: j,
                    height: F / 2,
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center top"
                }, {
                    scale: ot,
                    rotation: et,
                    y: 0 - F - F / 4,
                    autoAlpha: 0,
                    ease: punchgs.Power2.easeInOut
                }), 0);
            k.add(punchgs.TweenLite.fromTo(s.find(".tp-half-two"),
                C / 800, {
                    width: j,
                    height: F,
                    overflow: "hidden",
                    position: "absolute",
                    top: F / 2,
                    left: "0px",
                    force3D: "auto",
                    transformOrigin: "center bottom"
                }, {
                    scale: ut,
                    rotation: tt,
                    y: F + F / 4,
                    ease: punchgs.Power2.easeInOut,
                    autoAlpha: 0,
                    onComplete: function() {
                        punchgs.TweenLite.set(s, {
                            position: "absolute",
                            "z-index": 15
                        });
                        punchgs.TweenLite.set(i, {
                            position: "absolute",
                            "z-index": 20
                        });
                        if (s.find(".tp-half-one").length >
                            0) {
                            s.find(
                                ".tp-half-one .defaultimg"
                            ).unwrap();
                            s.find(
                                ".tp-half-one .slotholder"
                            ).unwrap()
                        }
                        s.find(".tp-half-two").remove()
                    }
                }), 0);
            D.add(punchgs.TweenLite.set(u.find(".defaultimg"), {
                autoAlpha: 1
            }), 0);
            if (s.html() != null) k.add(punchgs.TweenLite.fromTo(i, (
                C - 200) / 1e3, {
                scale: at,
                x: r.width / 4 * it,
                y: F / 4 * st,
                rotation: nt,
                force3D: "auto",
                transformOrigin: "center center",
                ease: punchgs.Power2.easeOut
            }, {
                autoAlpha: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotation: 0
            }), 0);
            k.add(D, 0)
        }
        if (a == 17) {
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                k.add(punchgs.TweenLite.fromTo(n, C / 800, {
                    opacity: 0,
                    rotationY: 0,
                    scale: .9,
                    rotationX: -110,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    opacity: 1,
                    top: 0,
                    left: 0,
                    scale: 1,
                    rotation: 0,
                    rotationX: 0,
                    force3D: "auto",
                    rotationY: 0,
                    ease: punchgs.Power3.easeOut,
                    delay: t * .06
                }), 0)
            })
        }
        if (a == 18) {
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                k.add(punchgs.TweenLite.fromTo(n, C / 500, {
                    autoAlpha: 0,
                    rotationY: 310,
                    scale: .9,
                    rotationX: 10,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: "center center"
                }, {
                    autoAlpha: 1,
                    top: 0,
                    left: 0,
                    scale: 1,
                    rotation: 0,
                    rotationX: 0,
                    force3D: "auto",
                    rotationY: 0,
                    ease: punchgs.Power3.easeOut,
                    delay: t * .06
                }), 0)
            })
        }
        if (a == 19 || a == 22) {
            var D = new punchgs.TimelineLite;
            k.add(punchgs.TweenLite.set(s, {
                zIndex: 20
            }), 0);
            k.add(punchgs.TweenLite.set(i, {
                zIndex: 20
            }), 0);
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            var ft = i.css("z-index"),
                lt = s.css("z-index"),
                ct = 90,
                z = 1;
            if (N == 1) ct = -90;
            if (a == 19) {
                var ht = "center center -" + r.height / 2;
                z = 0
            } else {
                var ht = "center center " + r.height / 2
            }
            punchgs.TweenLite.set(n, {
                transformStyle: "flat",
                backfaceVisibility: "hidden",
                transformPerspective: 600
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                D.add(punchgs.TweenLite.fromTo(n, C / 1e3, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    left: 0,
                    rotationY: r.rotate,
                    z: 10,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ht,
                    rotationX: ct
                }, {
                    left: 0,
                    rotationY: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    rotationX: 0,
                    delay: t * 50 / 1e3,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                D.add(punchgs.TweenLite.to(n, .1, {
                    autoAlpha: 1,
                    delay: t * 50 / 1e3
                }), 0);
                k.add(D)
            });
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                var i = -90;
                if (N == 1) i = 90;
                D.add(punchgs.TweenLite.fromTo(n, C / 1e3, {
                    transformStyle: "flat",
                    backfaceVisibility: "hidden",
                    autoAlpha: 1,
                    rotationY: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ht,
                    rotationX: 0
                }, {
                    autoAlpha: 1,
                    rotationY: r.rotate,
                    top: 0,
                    z: 10,
                    scale: 1,
                    rotationX: i,
                    delay: t * 50 / 1e3,
                    force3D: "auto",
                    ease: punchgs.Power2.easeInOut
                }), 0);
                k.add(D)
            })
        }
        if (a == 20) {
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            var ft = i.css("z-index");
            var lt = s.css("z-index");
            if (N == 1) {
                var pt = -r.width;
                var ct = 70;
                var ht = "left center -" + r.height / 2
            } else {
                var pt = r.width;
                var ct = -70;
                var ht = "right center -" + r.height / 2
            }
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                k.add(punchgs.TweenLite.fromTo(n, C / 1500, {
                    left: pt,
                    rotationX: 40,
                    z: -600,
                    opacity: z,
                    top: 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ht,
                    rotationY: ct
                }, {
                    left: 0,
                    delay: t * 50 / 1e3,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                k.add(punchgs.TweenLite.fromTo(n, C / 1e3, {
                    rotationX: 40,
                    z: -600,
                    opacity: z,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ht,
                    rotationY: ct
                }, {
                    rotationX: 0,
                    opacity: 1,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: t * 50 / 1e3,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                k.add(punchgs.TweenLite.to(n, .1, {
                    opacity: 1,
                    force3D: "auto",
                    delay: t * 50 / 1e3 + C /
                        2e3
                }), 0)
            });
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                if (N != 1) {
                    var i = -r.width;
                    var s = 70;
                    var o = "left center -" + r.height / 2
                } else {
                    var i = r.width;
                    var s = -70;
                    var o = "right center -" + r.height / 2
                }
                k.add(punchgs.TweenLite.fromTo(n, C / 1e3, {
                    opacity: 1,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    left: 0,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: o,
                    rotationY: 0
                }, {
                    opacity: 1,
                    rotationX: 40,
                    top: 0,
                    z: -600,
                    left: i,
                    force3D: "auto",
                    scale: .8,
                    rotationY: s,
                    delay: t * 50 / 1e3,
                    ease: punchgs.Power2.easeInOut
                }), 0);
                k.add(punchgs.TweenLite.to(n, .1, {
                    force3D: "auto",
                    opacity: 0,
                    delay: t * 50 / 1e3 + (C /
                        1e3 - C / 1e4)
                }), 0)
            })
        }
        if (a == 21 || a == 25) {
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            var ft = i.css("z-index");
            var lt = s.css("z-index");
            if (N == 1) {
                var pt = -r.width;
                var ct = 90;
                if (a == 25) {
                    var ht = "center top 0";
                    rot2 = -ct;
                    ct = r.rotate
                } else {
                    var ht = "left center 0";
                    rot2 = r.rotate
                }
            } else {
                var pt = r.width;
                var ct = -90;
                if (a == 25) {
                    var ht = "center bottom 0";
                    rot2 = -ct;
                    ct = r.rotate
                } else {
                    var ht = "right center 0";
                    rot2 = r.rotate
                }
            }
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                k.add(punchgs.TweenLite.fromTo(n, C / 1e3, {
                    left: 0,
                    transformStyle: "flat",
                    rotationX: rot2,
                    z: 0,
                    autoAlpha: 0,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ht,
                    rotationY: ct
                }, {
                    left: 0,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    autoAlpha: 1,
                    scale: 1,
                    rotationY: 0,
                    force3D: "auto",
                    ease: punchgs.Power3.easeInOut
                }), 0)
            });
            if (N != 1) {
                var pt = -r.width;
                var ct = 90;
                if (a == 25) {
                    var ht = "center top 0";
                    rot2 = -ct;
                    ct = r.rotate
                } else {
                    var ht = "left center 0";
                    rot2 = r.rotate
                }
            } else {
                var pt = r.width;
                var ct = -90;
                if (a == 25) {
                    var ht = "center bottom 0";
                    rot2 = -ct;
                    ct = r.rotate
                } else {
                    var ht = "right center 0";
                    rot2 = r.rotate
                }
            }
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                k.add(punchgs.TweenLite.fromTo(n, C / 1e3, {
                    left: 0,
                    transformStyle: "flat",
                    rotationX: 0,
                    z: 0,
                    autoAlpha: 1,
                    top: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ht,
                    rotationY: 0
                }, {
                    left: 0,
                    rotationX: rot2,
                    top: 0,
                    z: 0,
                    autoAlpha: 1,
                    force3D: "auto",
                    scale: 1,
                    rotationY: ct,
                    ease: punchgs.Power1.easeInOut
                }), 0)
            })
        }
        if (a == 23 || a == 24) {
            setTimeout(function() {
                o.find(".defaultimg").css({
                    opacity: 0
                })
            }, 100);
            var ft = i.css("z-index");
            var lt = s.css("z-index");
            var ct = -90;
            if (N == 1) ct = 90;
            var z = 1;
            if (a == 23) {
                var ht = "center center -" + r.width / 2;
                z = 0
            } else {
                var ht = "center center " + r.width / 2
            }
            var dt = 0;
            punchgs.TweenLite.set(n, {
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                perspective: 2500
            });
            u.find(".slotslide").each(function(t) {
                var n = e(this);
                k.add(punchgs.TweenLite.fromTo(n, C / 1e3, {
                    left: dt,
                    rotationX: r.rotate,
                    force3D: "auto",
                    opacity: z,
                    top: 0,
                    scale: 1,
                    transformPerspective: 600,
                    transformOrigin: ht,
                    rotationY: ct
                }, {
                    left: 0,
                    rotationX: 0,
                    autoAlpha: 1,
                    top: 0,
                    z: 0,
                    scale: 1,
                    rotationY: 0,
                    delay: t * 50 / 500,
                    ease: punchgs.Power2.easeInOut
                }), 0)
            });
            ct = 90;
            if (N == 1) ct = -90;
            o.find(".slotslide").each(function(t) {
                var n = e(this);
                k.add(punchgs.TweenLite.fromTo(n, C / 1e3, {
                    left: 0,
                    autoAlpha: 1,
                    rotationX: 0,
                    top: 0,
                    z: 0,
                    scale: 1,
                    force3D: "auto",
                    transformPerspective: 600,
                    transformOrigin: ht,
                    rotationY: 0
                }, {
                    left: dt,
                    autoAlpha: 1,
                    rotationX: r.rotate,
                    top: 0,
                    scale: 1,
                    rotationY: ct,
                    delay: t * 50 / 500,
                    ease: punchgs.Power2.easeInOut
                }), 0)
            })
        }
        k.pause();
        I(i, r, null, k);
        punchgs.TweenLite.to(i, .001, {
            autoAlpha: 1
        });
        var vt = {};
        vt.slideIndex = r.next + 1;
        vt.slide = i;
        n.trigger("revolution.slide.onchange", vt);
        setTimeout(function() {
            n.trigger("revolution.slide.onafterswap")
        }, C);
        n.trigger("revolution.slide.onvideostop")
    };
    var M = function(e, t, n, r, i, s, o) {
        punchgs.TweenLite.to(n.find(".defaultimg"), .001, {
            autoAlpha: 1,
            onComplete: function() {
                x(e, t, i)
            }
        });
        if (i.index() != s.index()) {
            punchgs.TweenLite.to(s, .2, {
                autoAlpha: 0,
                onComplete: function() {
                    x(e, t, s)
                }
            })
        }
        t.act = t.next;
        if (t.navigationType == "thumb") st(e);
        if (n.data("kenburns") == "on") {
            Y(e, t)
        }
        e.find(".current-sr-slide-visible").removeClass(
            "current-sr-slide-visible");
        i.addClass("current-sr-slide-visible");
        if (t.parallax == "scroll" || t.parallax == "scroll+mouse" ||
            t.parallax == "mouse+scroll") {
            rt(e, t)
        }
        o.clear()
    };
    var _ = function(t) {
        var n = t.target.getVideoEmbedCode();
        var r = e("#" + n.split('id="')[1].split('"')[0]);
        var i = r.closest(".tp-simpleresponsive");
        var s = r.parent().data("player");
        if (t.data == YT.PlayerState.PLAYING) {
            var o = i.find(".tp-bannertimer");
            var u = o.data("opt");
            if (r.closest(".tp-caption").data("volume") == "mute") s
                .mute();
            u.videoplaying = true;
            i.trigger("stoptimer");
            i.trigger("revolution.slide.onvideoplay")
        } else {
            var o = i.find(".tp-bannertimer");
            var u = o.data("opt");
            if (t.data != -1 && t.data != 3) {
                u.videoplaying = false;
                i.trigger("starttimer");
                i.trigger("revolution.slide.onvideostop")
            }
            if (t.data == 0 && u.nextslideatend == true) u.container
                .revnext();
            else {
                u.videoplaying = false;
                i.trigger("starttimer");
                i.trigger("revolution.slide.onvideostop")
            }
        }
    };
    var D = function(e, t, n) {
        if (e.addEventListener) e.addEventListener(t, n, false);
        else e.attachEvent(t, n, false)
    };
    var P = function(t, n) {
        var r = $f(t),
            i = e("#" + t),
            s = i.closest(".tp-simpleresponsive"),
            o = i.closest(".tp-caption");
        setTimeout(function() {
            r.addEvent("ready", function(t) {
                if (n) r.api("play");
                r.addEvent("play", function(e) {
                    var t = s.find(
                        ".tp-bannertimer"
                    );
                    var n = t.data("opt");
                    n.videoplaying = true;
                    s.trigger("stoptimer");
                    if (o.data("volume") ==
                        "mute") r.api(
                        "setVolume",
                        "0")
                });
                r.addEvent("finish", function(e) {
                    var t = s.find(
                        ".tp-bannertimer"
                    );
                    var n = t.data("opt");
                    n.videoplaying = false;
                    s.trigger("starttimer");
                    s.trigger(
                        "revolution.slide.onvideoplay"
                    );
                    if (n.nextslideatend ==
                        true) n.container.revnext()
                });
                r.addEvent("pause", function(e) {
                    var t = s.find(
                        ".tp-bannertimer"
                    );
                    var n = t.data("opt");
                    n.videoplaying = false;
                    s.trigger("starttimer");
                    s.trigger(
                        "revolution.slide.onvideostop"
                    )
                });
                o.find(".tp-thumb-image").click(
                    function() {
                        punchgs.TweenLite.to(e(
                            this), .3, {
                            autoAlpha: 0,
                            force3D: "auto",
                            ease: punchgs
                                .Power3
                                .easeInOut
                        });
                        r.api("play")
                    })
            })
        }, 150)
    };
    var H = function(e, n) {
        var r = n.width();
        var i = n.height();
        var s = e.data("mediaAspect");
        if (s == t) s = 1;
        var o = r / i;
        e.css({
            position: "absolute"
        });
        var u = e.find("video");
        if (o < s) {
            punchgs.TweenLite.to(e, 1e-4, {
                width: i * s,
                force3D: "auto",
                top: 0,
                left: 0 - (i * s - r) / 2,
                height: i
            })
        } else {
            punchgs.TweenLite.to(e, 1e-4, {
                width: r,
                force3D: "auto",
                top: 0 - (r / s - i) / 2,
                left: 0,
                height: r / s
            })
        }
    };
    var B = function() {
        var e = new Object;
        e.x = 0;
        e.y = 0;
        e.rotationX = 0;
        e.rotationY = 0;
        e.rotationZ = 0;
        e.scale = 1;
        e.scaleX = 1;
        e.scaleY = 1;
        e.skewX = 0;
        e.skewY = 0;
        e.opacity = 0;
        e.transformOrigin = "center, center";
        e.transformPerspective = 400;
        e.rotation = 0;
        return e
    };
    var j = function(t, n) {
        var r = n.split(";");
        e.each(r, function(e, n) {
            n = n.split(":");
            var r = n[0],
                i = n[1];
            if (r == "rotationX") t.rotationX = parseInt(i,
                0);
            if (r == "rotationY") t.rotationY = parseInt(i,
                0);
            if (r == "rotationZ") t.rotationZ = parseInt(i,
                0);
            if (r == "rotationZ") t.rotation = parseInt(i,
                0);
            if (r == "scaleX") t.scaleX = parseFloat(i);
            if (r == "scaleY") t.scaleY = parseFloat(i);
            if (r == "opacity") t.opacity = parseFloat(i);
            if (r == "skewX") t.skewX = parseInt(i, 0);
            if (r == "skewY") t.skewY = parseInt(i, 0);
            if (r == "x") t.x = parseInt(i, 0);
            if (r == "y") t.y = parseInt(i, 0);
            if (r == "z") t.z = parseInt(i, 0);
            if (r == "transformOrigin") t.transformOrigin =
                i.toString();
            if (r == "transformPerspective") t.transformPerspective =
                parseInt(i, 0)
        });
        return t
    };
    var F = function(t) {
        var n = t.split("animation:");
        var r = new Object;
        r.animation = j(B(), n[1]);
        var i = n[0].split(";");
        e.each(i, function(e, t) {
            t = t.split(":");
            var n = t[0],
                i = t[1];
            if (n == "typ") r.typ = i;
            if (n == "speed") r.speed = parseInt(i, 0) /
                1e3;
            if (n == "start") r.start = parseInt(i, 0) /
                1e3;
            if (n == "elementdelay") r.elementdelay =
                parseFloat(i);
            if (n == "ease") r.ease = i
        });
        return r
    };
    var I = function(n, r, i, s) {
        if (n.data("ctl") == t) {
            n.data("ctl", new punchgs.TimelineLite)
        }
        var o = n.data("ctl"),
            u = 0,
            a = 0,
            l = n.find(".tp-caption"),
            c = r.container.find(".tp-static-layers").find(
                ".tp-caption");
        o.pause();
        e.each(c, function(e, t) {
            l.push(t)
        });
        l.each(function(n) {
            var s = i,
                o = -1,
                l = e(this);
            if (l.hasClass("tp-static-layer")) {
                var c = l.data("startslide"),
                    h = l.data("endslide");
                if (c == -1 || c == "-1") l.data(
                    "startslide", 0);
                if (h == -1 || h == "-1") l.data("endslide",
                    r.slideamount);
                if (c == 0 && h == r.slideamount - 1) l.data(
                    "endslide", r.slideamount + 1);
                c = l.data("startslide"), h = l.data(
                    "endslide");
                if (!l.hasClass("tp-is-shown")) {
                    if (c <= r.next && h >= r.next || c ==
                        r.next || h == r.next) {
                        l.addClass("tp-is-shown");
                        o = 1
                    } else {
                        o = 0
                    }
                } else {
                    if (h == r.next || c > r.next || h < r.next) {
                        o = 2
                    } else {
                        o = 0
                    }
                }
            }
            u = r.width / 2 - r.startwidth * r.bw / 2;
            var p = r.bw;
            var d = r.bh;
            if (r.fullScreen == "on") a = r.height / 2 - r.startheight *
                r.bh / 2;
            if (r.autoHeight == "on" || r.minHeight != t &&
                r.minHeight > 0) a = r.container.height() /
                2 - r.startheight * r.bh / 2;
            if (a < 0) a = 0;
            var v = 0;
            if (r.width < r.hideCaptionAtLimit && l.data(
                "captionhidden") == "on") {
                l.addClass("tp-hidden-caption");
                v = 1
            } else {
                if (r.width < r.hideAllCaptionAtLimit || r.width <
                    r.hideAllCaptionAtLilmit) {
                    l.addClass("tp-hidden-caption");
                    v = 1
                } else {
                    l.removeClass("tp-hidden-caption")
                }
            } if (v == 0) {
                if (l.data("linktoslide") != t && !l.hasClass(
                    "hasclicklistener")) {
                    l.addClass("hasclicklistener");
                    l.css({
                        cursor: "pointer"
                    });
                    if (l.data("linktoslide") != "no") {
                        l.click(function() {
                            var t = e(this);
                            var n = t.data(
                                "linktoslide");
                            if (n != "next" && n !=
                                "prev") {
                                r.container.data(
                                    "showus", n
                                );
                                r.container.parent()
                                    .find(
                                        ".tp-rightarrow"
                                    ).click()
                            } else if (n == "next")
                                r.container.parent()
                                .find(
                                    ".tp-rightarrow"
                                ).click();
                            else if (n == "prev") r
                                .container.parent()
                                .find(
                                    ".tp-leftarrow"
                                ).click()
                        })
                    }
                }
                if (u < 0) u = 0;
                if (l.hasClass("tp-videolayer") || l.find(
                    "iframe").length > 0 || l.find(
                    "video").length > 0) {
                    var m = "iframe" + Math.round(Math.random() *
                            1e5 + 1),
                        g = l.data("videowidth"),
                        y = l.data("videoheight"),
                        b = l.data("videoattributes"),
                        w = l.data("ytid"),
                        E = l.data("vimeoid"),
                        S = l.data("videpreload"),
                        x = l.data("videomp4"),
                        T = l.data("videowebm"),
                        N = l.data("videocontrols"),
                        C = "http",
                        k = l.data("videoloop") == "loop" ?
                        "loop" : l.data("videoloop") ==
                        "loopandnoslidestop" ? "loop" : "";
                    if (l.data("thumbimage") != t && l.data(
                        "videoposter") == t) l.data(
                        "videoposter", l.data(
                            "thumbimage"));
                    if (w != t && String(w).length > 1 && l
                        .find("iframe").length == 0) {
                        C = "https";
                        if (N == "none") {
                            b = b.replace("controls=1",
                                "controls=0");
                            if (b.toLowerCase().indexOf(
                                "controls") == -1) b = b +
                                "&controls=0"
                        }
                        l.append(
                            '<iframe style="visible:hidden" src="' +
                            C +
                            "://www.youtube.com/embed/" +
                            w + "?" + b + '" width="' +
                            g + '" height="' + y +
                            '" style="width:' + g +
                            "px;height:" + y +
                            'px"></iframe>')
                    }
                    if (E != t && String(E).length > 1 && l
                        .find("iframe").length == 0) {
                        C = "https";
                        l.append(
                            '<iframe style="visible:hidden" src="' +
                            C +
                            "://player.vimeo.com/video/" +
                            E + "?" + b + '" width="' +
                            g + '" height="' + y +
                            '" style="width:' + g +
                            "px;height:" + y +
                            'px"></iframe>')
                    }
                    if ((x != t || T != t) && l.find(
                        "video").length == 0) {
                        if (N != "controls") N = "";
                        l.append(
                            '<video style="visible:hidden" class="" ' +
                            k + " " + N + ' preload="' +
                            S + '" width="' + g +
                            '" height="' + y + '"' +
                            'poster="' + l.data(
                                "videoposter") + '">' +
                            '<source src="' + x +
                            '" type="video/mp4"" />' +
                            '<source src="' + T +
                            '" type="video/webm"" />' +
                            "</video>")
                    }
                    var L = false;
                    if (l.data("autoplayonlyfirsttime") ==
                        true || l.data(
                            "autoplayonlyfirsttime") ==
                        "true" || l.data("autoplay") ==
                        true) {
                        l.data("autoplay", true);
                        L = true
                    }
                    l.find("iframe").each(function() {
                        var n = e(this);
                        punchgs.TweenLite.to(n, .1, {
                            autoAlpha: 1,
                            zIndex: 0,
                            transformStyle: "preserve-3d",
                            z: 0,
                            rotationX: 0,
                            force3D: "auto"
                        });
                        if (Q()) {
                            var i = n.attr("src");
                            n.attr("src", "");
                            n.attr("src", i)
                        }
                        r.nextslideatend = l.data(
                            "nextslideatend");
                        if (l.data("videoposter") !=
                            t && l.data(
                                "videoposter").length >
                            2 && l.data("autoplay") !=
                            true && !s) {
                            if (l.find(
                                ".tp-thumb-image"
                            ).length == 0) l.append(
                                '<div class="tp-thumb-image" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;background-image:url(' +
                                l.data(
                                    "videoposter"
                                ) +
                                '); background-size:cover"></div>'
                            );
                            else punchgs.TweenLite.set(
                                l.find(
                                    ".tp-thumb-image"
                                ), {
                                    autoAlpha: 1
                                })
                        }
                        if (n.attr("src").toLowerCase()
                            .indexOf("youtube") >=
                            0) {
                            if (!n.hasClass(
                                "HasListener")) {
                                try {
                                    n.attr("id", m);
                                    var o;
                                    var u =
                                        setInterval(
                                            function() {
                                                if (
                                                    YT !=
                                                    t
                                                )
                                                    if (
                                                        typeof YT
                                                        .Player !=
                                                        t &&
                                                        typeof YT
                                                        .Player !=
                                                        "undefined"
                                                    ) {
                                                        o
                                                            =
                                                            new YT
                                                            .Player(
                                                                m, {
                                                                    events: {
                                                                        onStateChange: _,
                                                                        onReady: function(
                                                                            n
                                                                        ) {
                                                                            var
                                                                                r =
                                                                                n
                                                                                .target
                                                                                .getVideoEmbedCode(),
                                                                                i =
                                                                                e(
                                                                                    "#" +
                                                                                    r
                                                                                    .split(
                                                                                        'id="'
                                                                                    )[
                                                                                        1
                                                                                    ]
                                                                                    .split(
                                                                                        '"'
                                                                                    )[
                                                                                        0
                                                                                    ]
                                                                                ),
                                                                                s =
                                                                                i
                                                                                .closest(
                                                                                    ".tp-caption"
                                                                                ),
                                                                                u =
                                                                                s
                                                                                .data(
                                                                                    "videorate"
                                                                                ),
                                                                                a =
                                                                                s
                                                                                .data(
                                                                                    "videostart"
                                                                                );
                                                                            if (
                                                                                u !=
                                                                                t
                                                                            )
                                                                                n
                                                                                .target
                                                                                .setPlaybackRate(
                                                                                    parseFloat(
                                                                                        u
                                                                                    )
                                                                                );
                                                                            if (!
                                                                                Q() &&
                                                                                s
                                                                                .data(
                                                                                    "autoplay"
                                                                                ) ==
                                                                                true ||
                                                                                L
                                                                            ) {
                                                                                s
                                                                                    .data(
                                                                                        "timerplay",
                                                                                        setTimeout(
                                                                                            function() {
                                                                                                n
                                                                                                    .target
                                                                                                    .playVideo()
                                                                                            },
                                                                                            s
                                                                                            .data(
                                                                                                "start"
                                                                                            )
                                                                                        )
                                                                                    )
                                                                            }
                                                                            s
                                                                                .find(
                                                                                    ".tp-thumb-image"
                                                                                )
                                                                                .click(
                                                                                    function() {
                                                                                        punchgs
                                                                                            .TweenLite
                                                                                            .to(
                                                                                                e(
                                                                                                    this
                                                                                                ),
                                                                                                .3, {
                                                                                                    autoAlpha: 0,
                                                                                                    force3D: "auto",
                                                                                                    ease: punchgs
                                                                                                        .Power3
                                                                                                        .easeInOut
                                                                                                }
                                                                                            );
                                                                                        if (!
                                                                                            Q()
                                                                                        ) {
                                                                                            o
                                                                                                .playVideo()
                                                                                        }
                                                                                    }
                                                                                )
                                                                        }
                                                                    }
                                                                }
                                                            )
                                                    }
                                                n.addClass(
                                                    "HasListener"
                                                );
                                                l.data(
                                                    "player",
                                                    o
                                                );
                                                clearInterval
                                                    (
                                                        u
                                                    )
                                            }, 100)
                                } catch (a) {}
                            } else {
                                var o = l.data(
                                    "player");
                                if (l.data(
                                    "forcerewind"
                                ) == "on" && !Q()) o
                                    .seekTo(0);
                                if (!Q() && l.data(
                                        "autoplay") ==
                                    true || L) {
                                    l.data(
                                        "timerplay",
                                        setTimeout(
                                            function() {
                                                o
                                                    .playVideo()
                                            },
                                            l.data(
                                                "start"
                                            )))
                                }
                            }
                        } else if (n.attr("src").toLowerCase()
                            .indexOf("vimeo") >= 0) {
                            if (!n.hasClass(
                                "HasListener")) {
                                n.addClass(
                                    "HasListener"
                                );
                                n.attr("id", m);
                                var f = n.attr(
                                    "src");
                                var c = {},
                                    h = f,
                                    p =
                                    /([^&=]+)=([^&]*)/g,
                                    d;
                                while (d = p.exec(h)) {
                                    c[
                                            decodeURIComponent(
                                                d[1]
                                            )] =
                                        decodeURIComponent(
                                            d[2])
                                }
                                if (c["player_id"] !=
                                    t) f = f.replace(
                                    c[
                                        "player_id"
                                    ], m);
                                else f = f +
                                    "&player_id=" +
                                    m;
                                try {
                                    f = f.replace(
                                        "api=0",
                                        "api=1"
                                    )
                                } catch (a) {}
                                f = f + "&api=1";
                                n.attr("src", f);
                                var o = l.find(
                                    "iframe")[0];
                                var v = setInterval(
                                    function() {
                                        if ($f !=
                                            t) {
                                            if (
                                                typeof $f(
                                                    m
                                                )
                                                .api !=
                                                t &&
                                                typeof $f(
                                                    m
                                                )
                                                .api !=
                                                "undefined"
                                            ) {
                                                $f
                                                    (
                                                        o
                                                    )
                                                    .addEvent(
                                                        "ready",
                                                        function() {
                                                            P
                                                                (
                                                                    m,
                                                                    L
                                                                )
                                                        }
                                                    );
                                                clearInterval
                                                    (
                                                        v
                                                    )
                                            }
                                        }
                                    }, 100)
                            } else {
                                if (!Q() && (l.data(
                                        "autoplay"
                                    ) == true ||
                                    l.data(
                                        "forcerewind"
                                    ) == "on")) {
                                    var n = l.find(
                                        "iframe"
                                    );
                                    var g = n.attr(
                                        "id");
                                    var y = $f(g);
                                    if (l.data(
                                        "forcerewind"
                                    ) == "on") y.api(
                                        "seekTo",
                                        0);
                                    l.data(
                                        "timerplay",
                                        setTimeout(
                                            function() {
                                                if (
                                                    l
                                                    .data(
                                                        "autoplay"
                                                    ) ==
                                                    true
                                                )
                                                    y
                                                    .api(
                                                        "play"
                                                    )
                                            },
                                            l.data(
                                                "start"
                                            )))
                                }
                            }
                        }
                    });
                    if (Q() && l.data(
                            "disablevideoonmobile") == 1 ||
                        f(8)) l.find("video").remove();
                    if (l.find("video").length > 0) {
                        l.find("video").each(function(n) {
                            var i = this,
                                s = e(this);
                            if (!s.parent().hasClass(
                                "html5vid")) s.wrap(
                                '<div class="html5vid" style="position:relative;top:0px;left:0px;width:auto;height:auto"></div>'
                            );
                            var o = s.parent();
                            if (i.addEventListener)
                                i.addEventListener(
                                    "loadedmetadata",
                                    function() {
                                        o.data(
                                            "metaloaded",
                                            1)
                                    });
                            else i.attachEvent(
                                "loadedmetadata",
                                function() {
                                    o.data(
                                        "metaloaded",
                                        1)
                                });
                            clearInterval(o.data(
                                "interval"));
                            o.data("interval",
                                setInterval(
                                    function() {
                                        if (o.data(
                                                "metaloaded"
                                            ) ==
                                            1 ||
                                            i.duration !=
                                            NaN
                                        ) {
                                            clearInterval
                                                (
                                                    o
                                                    .data(
                                                        "interval"
                                                    )
                                                );
                                            if (!
                                                o
                                                .hasClass(
                                                    "HasListener"
                                                )
                                            ) {
                                                o
                                                    .addClass(
                                                        "HasListener"
                                                    );
                                                if (
                                                    l
                                                    .data(
                                                        "dottedoverlay"
                                                    ) !=
                                                    "none" &&
                                                    l
                                                    .data(
                                                        "dottedoverlay"
                                                    ) !=
                                                    t
                                                )
                                                    if (
                                                        l
                                                        .find(
                                                            ".tp-dottedoverlay"
                                                        )
                                                        .length !=
                                                        1
                                                    )
                                                        o
                                                        .append(
                                                            '<div class="tp-dottedoverlay ' +
                                                            l
                                                            .data(
                                                                "dottedoverlay"
                                                            ) +
                                                            '"></div>'
                                                        );
                                                if (
                                                    s
                                                    .attr(
                                                        "control"
                                                    ) ==
                                                    t
                                                ) {
                                                    if (
                                                        o
                                                        .find(
                                                            ".tp-video-play-button"
                                                        )
                                                        .length ==
                                                        0
                                                    )
                                                        o
                                                        .append(
                                                            '<div class="tp-video-play-button"><i class="revicon-right-dir"></i><div class="tp-revstop"></div></div>'
                                                        );
                                                    o
                                                        .find(
                                                            "video, .tp-poster, .tp-video-play-button"
                                                        )
                                                        .click(
                                                            function() {
                                                                if (
                                                                    o
                                                                    .hasClass(
                                                                        "videoisplaying"
                                                                    )
                                                                )
                                                                    i
                                                                    .pause();
                                                                else
                                                                    i
                                                                    .play()
                                                            }
                                                        )
                                                }
                                                if (
                                                    l
                                                    .data(
                                                        "forcecover"
                                                    ) ==
                                                    1 ||
                                                    l
                                                    .hasClass(
                                                        "fullscreenvideo"
                                                    )
                                                ) {
                                                    if (
                                                        l
                                                        .data(
                                                            "forcecover"
                                                        ) ==
                                                        1
                                                    ) {
                                                        H
                                                            (
                                                                o,
                                                                r
                                                                .container
                                                            );
                                                        o
                                                            .addClass(
                                                                "fullcoveredvideo"
                                                            );
                                                        l
                                                            .addClass(
                                                                "fullcoveredvideo"
                                                            )
                                                    }
                                                    o
                                                        .css({
                                                            width: "100%",
                                                            height: "100%"
                                                        })
                                                }
                                                if (
                                                    i
                                                    .addEventListener
                                                )
                                                    i
                                                    .addEventListener(
                                                        "play",
                                                        function() {
                                                            if (
                                                                l
                                                                .data(
                                                                    "volume"
                                                                ) ==
                                                                "mute"
                                                            )
                                                                i
                                                                .muted =
                                                                true;
                                                            o
                                                                .addClass(
                                                                    "videoisplaying"
                                                                );
                                                            if (
                                                                l
                                                                .data(
                                                                    "videoloop"
                                                                ) ==
                                                                "loopandnoslidestop"
                                                            ) {
                                                                r
                                                                    .videoplaying =
                                                                    false;
                                                                r
                                                                    .container
                                                                    .trigger(
                                                                        "starttimer"
                                                                    );
                                                                r
                                                                    .container
                                                                    .trigger(
                                                                        "revolution.slide.onvideostop"
                                                                    )
                                                            } else {
                                                                r
                                                                    .videoplaying =
                                                                    true;
                                                                r
                                                                    .container
                                                                    .trigger(
                                                                        "stoptimer"
                                                                    );
                                                                r
                                                                    .container
                                                                    .trigger(
                                                                        "revolution.slide.onvideoplay"
                                                                    )
                                                            }
                                                        }
                                                    );
                                                else
                                                    i
                                                    .attachEvent(
                                                        "play",
                                                        function() {
                                                            if (
                                                                l
                                                                .data(
                                                                    "volume"
                                                                ) ==
                                                                "mute"
                                                            )
                                                                i
                                                                .muted =
                                                                true;
                                                            o
                                                                .addClass(
                                                                    "videoisplaying"
                                                                );
                                                            if (
                                                                l
                                                                .data(
                                                                    "videoloop"
                                                                ) ==
                                                                "loopandnoslidestop"
                                                            ) {
                                                                r
                                                                    .videoplaying =
                                                                    false;
                                                                r
                                                                    .container
                                                                    .trigger(
                                                                        "starttimer"
                                                                    );
                                                                r
                                                                    .container
                                                                    .trigger(
                                                                        "revolution.slide.onvideostop"
                                                                    )
                                                            } else {
                                                                r
                                                                    .videoplaying =
                                                                    true;
                                                                r
                                                                    .container
                                                                    .trigger(
                                                                        "stoptimer"
                                                                    );
                                                                r
                                                                    .container
                                                                    .trigger(
                                                                        "revolution.slide.onvideoplay"
                                                                    )
                                                            }
                                                        }
                                                    ); if (
                                                    i
                                                    .addEventListener
                                                )
                                                    i
                                                    .addEventListener(
                                                        "pause",
                                                        function() {
                                                            o
                                                                .removeClass(
                                                                    "videoisplaying"
                                                                );
                                                            r
                                                                .videoplaying =
                                                                false;
                                                            r
                                                                .container
                                                                .trigger(
                                                                    "starttimer"
                                                                );
                                                            r
                                                                .container
                                                                .trigger(
                                                                    "revolution.slide.onvideostop"
                                                                )
                                                        }
                                                    );
                                                else
                                                    i
                                                    .attachEvent(
                                                        "pause",
                                                        function() {
                                                            o
                                                                .removeClass(
                                                                    "videoisplaying"
                                                                );
                                                            r
                                                                .videoplaying =
                                                                false;
                                                            r
                                                                .container
                                                                .trigger(
                                                                    "starttimer"
                                                                );
                                                            r
                                                                .container
                                                                .trigger(
                                                                    "revolution.slide.onvideostop"
                                                                )
                                                        }
                                                    ); if (
                                                    i
                                                    .addEventListener
                                                )
                                                    i
                                                    .addEventListener(
                                                        "ended",
                                                        function() {
                                                            o
                                                                .removeClass(
                                                                    "videoisplaying"
                                                                );
                                                            r
                                                                .videoplaying =
                                                                false;
                                                            r
                                                                .container
                                                                .trigger(
                                                                    "starttimer"
                                                                );
                                                            r
                                                                .container
                                                                .trigger(
                                                                    "revolution.slide.onvideostop"
                                                                );
                                                            if (
                                                                r
                                                                .nextslideatend ==
                                                                true
                                                            )
                                                                r
                                                                .container
                                                                .revnext()
                                                        }
                                                    );
                                                else
                                                    i
                                                    .attachEvent(
                                                        "ended",
                                                        function() {
                                                            o
                                                                .removeClass(
                                                                    "videoisplaying"
                                                                );
                                                            r
                                                                .videoplaying =
                                                                false;
                                                            r
                                                                .container
                                                                .trigger(
                                                                    "starttimer"
                                                                );
                                                            r
                                                                .container
                                                                .trigger(
                                                                    "revolution.slide.onvideostop"
                                                                );
                                                            if (
                                                                r
                                                                .nextslideatend ==
                                                                true
                                                            )
                                                                r
                                                                .container
                                                                .revnext()
                                                        }
                                                    )
                                            }
                                            var
                                                e =
                                                false;
                                            if (
                                                l
                                                .data(
                                                    "autoplayonlyfirsttime"
                                                ) ==
                                                true ||
                                                l
                                                .data(
                                                    "autoplayonlyfirsttime"
                                                ) ==
                                                "true"
                                            ) e =
                                                true;
                                            var
                                                n =
                                                16 /
                                                9;
                                            if (
                                                l
                                                .data(
                                                    "aspectratio"
                                                ) ==
                                                "4:3"
                                            ) n =
                                                4 /
                                                3;
                                            o.data(
                                                "mediaAspect",
                                                n
                                            );
                                            if (
                                                o
                                                .closest(
                                                    ".tp-caption"
                                                )
                                                .data(
                                                    "forcecover"
                                                ) ==
                                                1
                                            ) {
                                                H
                                                    (
                                                        o,
                                                        r
                                                        .container
                                                    );
                                                o
                                                    .addClass(
                                                        "fullcoveredvideo"
                                                    )
                                            }
                                            s.css({
                                                display: "block"
                                            });
                                            r.nextslideatend =
                                                l
                                                .data(
                                                    "nextslideatend"
                                                );
                                            if (
                                                l
                                                .data(
                                                    "autoplay"
                                                ) ==
                                                true ||
                                                e ==
                                                true
                                            ) {
                                                if (
                                                    l
                                                    .data(
                                                        "videoloop"
                                                    ) ==
                                                    "loopandnoslidestop"
                                                ) {
                                                    r
                                                        .videoplaying =
                                                        false;
                                                    r
                                                        .container
                                                        .trigger(
                                                            "starttimer"
                                                        );
                                                    r
                                                        .container
                                                        .trigger(
                                                            "revolution.slide.onvideostop"
                                                        )
                                                } else {
                                                    r
                                                        .videoplaying =
                                                        true;
                                                    r
                                                        .container
                                                        .trigger(
                                                            "stoptimer"
                                                        );
                                                    r
                                                        .container
                                                        .trigger(
                                                            "revolution.slide.onvideoplay"
                                                        )
                                                } if (
                                                    l
                                                    .data(
                                                        "forcerewind"
                                                    ) ==
                                                    "on" &&
                                                    !
                                                    o
                                                    .hasClass(
                                                        "videoisplaying"
                                                    )
                                                )
                                                    if (
                                                        i
                                                        .currentTime >
                                                        0
                                                    )
                                                        i
                                                        .currentTime =
                                                        0;
                                                if (
                                                    l
                                                    .data(
                                                        "volume"
                                                    ) ==
                                                    "mute"
                                                )
                                                    i
                                                    .muted =
                                                    true;
                                                o
                                                    .data(
                                                        "timerplay",
                                                        setTimeout(
                                                            function() {
                                                                if (
                                                                    l
                                                                    .data(
                                                                        "forcerewind"
                                                                    ) ==
                                                                    "on" &&
                                                                    !
                                                                    o
                                                                    .hasClass(
                                                                        "videoisplaying"
                                                                    )
                                                                )
                                                                    if (
                                                                        i
                                                                        .currentTime >
                                                                        0
                                                                    )
                                                                        i
                                                                        .currentTime =
                                                                        0;
                                                                if (
                                                                    l
                                                                    .data(
                                                                        "volume"
                                                                    ) ==
                                                                    "mute"
                                                                )
                                                                    i
                                                                    .muted =
                                                                    true;
                                                                i
                                                                    .play()
                                                            },
                                                            10 +
                                                            l
                                                            .data(
                                                                "start"
                                                            )
                                                        )
                                                    )
                                            }
                                            if (
                                                o
                                                .data(
                                                    "ww"
                                                ) ==
                                                t
                                            ) o
                                                .data(
                                                    "ww",
                                                    s
                                                    .attr(
                                                        "width"
                                                    )
                                                );
                                            if (
                                                o
                                                .data(
                                                    "hh"
                                                ) ==
                                                t
                                            ) o
                                                .data(
                                                    "hh",
                                                    s
                                                    .attr(
                                                        "height"
                                                    )
                                                );
                                            if (!
                                                l
                                                .hasClass(
                                                    "fullscreenvideo"
                                                ) &&
                                                l
                                                .data(
                                                    "forcecover"
                                                ) ==
                                                1
                                            ) {
                                                try {
                                                    o
                                                        .width(
                                                            o
                                                            .data(
                                                                "ww"
                                                            ) *
                                                            r
                                                            .bw
                                                        );
                                                    o
                                                        .height(
                                                            o
                                                            .data(
                                                                "hh"
                                                            ) *
                                                            r
                                                            .bh
                                                        )
                                                } catch (
                                                    u
                                                ) {}
                                            }
                                            clearInterval
                                                (
                                                    o
                                                    .data(
                                                        "interval"
                                                    )
                                                )
                                        }
                                    }), 100)
                        })
                    }
                    if (l.data("autoplay") == true) {
                        setTimeout(function() {
                            if (l.data("videoloop") !=
                                "loopandnoslidestop"
                            ) {
                                r.videoplaying =
                                    true;
                                r.container.trigger(
                                    "stoptimer"
                                )
                            }
                        }, 200);
                        if (l.data("videoloop") !=
                            "loopandnoslidestop") {
                            r.videoplaying = true;
                            r.container.trigger("stoptimer")
                        }
                        if (l.data("autoplayonlyfirsttime") ==
                            true || l.data(
                                "autoplayonlyfirsttime") ==
                            "true") {
                            l.data("autoplay", false);
                            l.data("autoplayonlyfirsttime",
                                false)
                        }
                    }
                }
                var A = 0;
                var O = 0;
                if (l.find("img").length > 0) {
                    var M = l.find("img");
                    if (M.width() == 0) M.css({
                        width: "auto"
                    });
                    if (M.height() == 0) M.css({
                        height: "auto"
                    });
                    if (M.data("ww") == t && M.width() > 0)
                        M.data("ww", M.width());
                    if (M.data("hh") == t && M.height() > 0)
                        M.data("hh", M.height());
                    var D = M.data("ww");
                    var I = M.data("hh");
                    if (D == t) D = 0;
                    if (I == t) I = 0;
                    M.width(D * r.bw);
                    M.height(I * r.bh);
                    A = M.width();
                    O = M.height()
                } else {
                    if (l.find("iframe").length > 0 || l.find(
                        "video").length > 0) {
                        var R = false;
                        var M = l.find("iframe");
                        if (M.length == 0) {
                            M = l.find("video");
                            R = true
                        }
                        M.css({
                            display: "block"
                        });
                        if (l.data("ww") == t) l.data("ww",
                            M.width());
                        if (l.data("hh") == t) l.data("hh",
                            M.height());
                        var D = l.data("ww");
                        var I = l.data("hh");
                        var X = l;
                        if (X.data("fsize") == t) X.data(
                            "fsize", parseInt(X.css(
                                "font-size"), 0) || 0);
                        if (X.data("pt") == t) X.data("pt",
                            parseInt(X.css("paddingTop"),
                                0) || 0);
                        if (X.data("pb") == t) X.data("pb",
                            parseInt(X.css(
                                "paddingBottom"), 0) ||
                            0);
                        if (X.data("pl") == t) X.data("pl",
                            parseInt(X.css(
                                "paddingLeft"), 0) || 0
                        );
                        if (X.data("pr") == t) X.data("pr",
                            parseInt(X.css(
                                "paddingRight"), 0) ||
                            0);
                        if (X.data("mt") == t) X.data("mt",
                            parseInt(X.css("marginTop"),
                                0) || 0);
                        if (X.data("mb") == t) X.data("mb",
                            parseInt(X.css(
                                "marginBottom"), 0) ||
                            0);
                        if (X.data("ml") == t) X.data("ml",
                            parseInt(X.css("marginLeft"),
                                0) || 0);
                        if (X.data("mr") == t) X.data("mr",
                            parseInt(X.css(
                                "marginRight"), 0) || 0
                        );
                        if (X.data("bt") == t) X.data("bt",
                            parseInt(X.css("borderTop"),
                                0) || 0);
                        if (X.data("bb") == t) X.data("bb",
                            parseInt(X.css(
                                "borderBottom"), 0) ||
                            0);
                        if (X.data("bl") == t) X.data("bl",
                            parseInt(X.css("borderLeft"),
                                0) || 0);
                        if (X.data("br") == t) X.data("br",
                            parseInt(X.css(
                                "borderRight"), 0) || 0
                        );
                        if (X.data("lh") == t) X.data("lh",
                            parseInt(X.css("lineHeight"),
                                0) || 0);
                        if (X.data("lh") == "auto") X.data(
                            "lh", X.data("fsize") + 4);
                        var J = r.width;
                        var K = r.height;
                        if (J > r.startwidth) J = r.startwidth;
                        if (K > r.startheight) K = r.startheight;
                        if (!l.hasClass("fullscreenvideo"))
                            l.css({
                                "font-size": X.data(
                                        "fsize") * r.bw +
                                    "px",
                                "padding-top": X.data(
                                        "pt") * r.bh +
                                    "px",
                                "padding-bottom": X.data(
                                        "pb") * r.bh +
                                    "px",
                                "padding-left": X.data(
                                        "pl") * r.bw +
                                    "px",
                                "padding-right": X.data(
                                        "pr") * r.bw +
                                    "px",
                                "margin-top": X.data(
                                        "mt") * r.bh +
                                    "px",
                                "margin-bottom": X.data(
                                        "mb") * r.bh +
                                    "px",
                                "margin-left": X.data(
                                        "ml") * r.bw +
                                    "px",
                                "margin-right": X.data(
                                        "mr") * r.bw +
                                    "px",
                                "border-top": X.data(
                                        "bt") * r.bh +
                                    "px",
                                "border-bottom": X.data(
                                        "bb") * r.bh +
                                    "px",
                                "border-left": X.data(
                                        "bl") * r.bw +
                                    "px",
                                "border-right": X.data(
                                        "br") * r.bw +
                                    "px",
                                "line-height": X.data(
                                        "lh") * r.bh +
                                    "px",
                                height: I * r.bh + "px"
                            });
                        else {
                            u = 0;
                            a = 0;
                            l.data("x", 0);
                            l.data("y", 0);
                            var G = r.height;
                            if (r.autoHeight == "on") G = r
                                .container.height();
                            l.css({
                                width: r.width,
                                height: G
                            })
                        } if (R == false) {
                            M.width(D * r.bw);
                            M.height(I * r.bh)
                        } else if (l.data("forcecover") !=
                            1 && !l.hasClass(
                                "fullscreenvideo")) {
                            M.width(D * r.bw);
                            M.height(I * r.bh)
                        }
                        A = M.width();
                        O = M.height()
                    } else {
                        l.find(
                            ".tp-resizeme, .tp-resizeme *"
                        ).each(function() {
                            U(e(this), r)
                        });
                        if (l.hasClass("tp-resizeme")) {
                            l.find("*").each(function() {
                                U(e(this), r)
                            })
                        }
                        U(l, r);
                        O = l.outerHeight(true);
                        A = l.outerWidth(true);
                        var Y = l.outerHeight();
                        var Z = l.css("backgroundColor");
                        l.find(".frontcorner").css({
                            borderWidth: Y + "px",
                            left: 0 - Y + "px",
                            borderRight: "0px solid transparent",
                            borderTopColor: Z
                        });
                        l.find(".frontcornertop").css({
                            borderWidth: Y + "px",
                            left: 0 - Y + "px",
                            borderRight: "0px solid transparent",
                            borderBottomColor: Z
                        });
                        l.find(".backcorner").css({
                            borderWidth: Y + "px",
                            right: 0 - Y + "px",
                            borderLeft: "0px solid transparent",
                            borderBottomColor: Z
                        });
                        l.find(".backcornertop").css({
                            borderWidth: Y + "px",
                            right: 0 - Y + "px",
                            borderLeft: "0px solid transparent",
                            borderTopColor: Z
                        })
                    }
                } if (r.fullScreenAlignForce == "on") {
                    u = 0;
                    a = 0
                }
                if (l.data("voffset") == t) l.data(
                    "voffset", 0);
                if (l.data("hoffset") == t) l.data(
                    "hoffset", 0);
                var et = l.data("voffset") * p;
                var tt = l.data("hoffset") * p;
                var nt = r.startwidth * p;
                var rt = r.startheight * p;
                if (r.fullScreenAlignForce == "on") {
                    nt = r.container.width();
                    rt = r.container.height()
                }
                if (l.data("x") == "center" || l.data(
                    "xcenter") == "center") {
                    l.data("xcenter", "center");
                    l.data("x", nt / 2 - l.outerWidth(true) /
                        2 + tt)
                }
                if (l.data("x") == "left" || l.data("xleft") ==
                    "left") {
                    l.data("xleft", "left");
                    l.data("x", 0 / p + tt)
                }
                if (l.data("x") == "right" || l.data(
                    "xright") == "right") {
                    l.data("xright", "right");
                    l.data("x", (nt - l.outerWidth(true) +
                        tt) / p)
                }
                if (l.data("y") == "center" || l.data(
                    "ycenter") == "center") {
                    l.data("ycenter", "center");
                    l.data("y", rt / 2 - l.outerHeight(true) /
                        2 + et)
                }
                if (l.data("y") == "top" || l.data("ytop") ==
                    "top") {
                    l.data("ytop", "top");
                    l.data("y", 0 / r.bh + et)
                }
                if (l.data("y") == "bottom" || l.data(
                    "ybottom") == "bottom") {
                    l.data("ybottom", "bottom");
                    l.data("y", (rt - l.outerHeight(true) +
                        et) / p)
                }
                if (l.data("start") == t) l.data("start",
                    1e3);
                var it = l.data("easing");
                if (it == t) it = "punchgs.Power1.easeOut";
                var st = l.data("start") / 1e3;
                var ot = l.data("speed") / 1e3;
                if (l.data("x") == "center" || l.data(
                    "xcenter") == "center") var ut = l.data(
                    "x") + u;
                else {
                    var ut = p * l.data("x") + u
                } if (l.data("y") == "center" || l.data(
                    "ycenter") == "center") var at = l.data(
                    "y") + a;
                else {
                    var at = r.bh * l.data("y") + a
                }
                punchgs.TweenLite.set(l, {
                    top: at,
                    left: ut,
                    overwrite: "auto"
                });
                if (o == 0) s = true;
                if (l.data("timeline") != t && !s) {
                    if (o != 2) l.data("timeline").gotoAndPlay(
                        0);
                    s = true
                }
                if (!s) {
                    if (l.data("timeline") != t) {}

                    function ft() {}

                    function lt() {}
                    var ct = new punchgs.TimelineLite({
                        smoothChildTiming: true,
                        onStart: lt
                    });
                    ct.pause();
                    if (r.fullScreenAlignForce == "on") {}
                    var ht = l;
                    if (l.data("mySplitText") != t) l.data(
                        "mySplitText").revert();
                    if (l.data("splitin") == "chars" || l.data(
                        "splitin") == "words" || l.data(
                        "splitin") == "lines" || l.data(
                        "splitout") == "chars" || l.data(
                        "splitout") == "words" || l.data(
                        "splitout") == "lines") {
                        if (l.find("a").length > 0) l.data(
                            "mySplitText", new punchgs.SplitText(
                                l.find("a"), {
                                    type: "lines,words,chars",
                                    charsClass: "tp-splitted",
                                    wordsClass: "tp-splitted",
                                    linesClass: "tp-splitted"
                                }));
                        else if (l.find(
                                ".tp-layer-inner-rotation")
                            .length > 0) l.data(
                            "mySplitText", new punchgs.SplitText(
                                l.find(
                                    ".tp-layer-inner-rotation"
                                ), {
                                    type: "lines,words,chars",
                                    charsClass: "tp-splitted",
                                    wordsClass: "tp-splitted",
                                    linesClass: "tp-splitted"
                                }));
                        else l.data("mySplitText", new punchgs
                            .SplitText(l, {
                                type: "lines,words,chars",
                                charsClass: "tp-splitted",
                                wordsClass: "tp-splitted",
                                linesClass: "tp-splitted"
                            }));
                        l.addClass("splitted")
                    }
                    if (l.data("splitin") == "chars") ht =
                        l.data("mySplitText").chars;
                    if (l.data("splitin") == "words") ht =
                        l.data("mySplitText").words;
                    if (l.data("splitin") == "lines") ht =
                        l.data("mySplitText").lines;
                    var pt = B();
                    var dt = B();
                    if (l.data("repeat") != t) repeatV = l.data(
                        "repeat");
                    if (l.data("yoyo") != t) yoyoV = l.data(
                        "yoyo");
                    if (l.data("repeatdelay") != t)
                        repeatdelayV = l.data("repeatdelay");
                    if (l.hasClass("customin")) pt = j(pt,
                        l.data("customin"));
                    else if (l.hasClass("randomrotate")) {
                        pt.scale = Math.random() * 3 + 1;
                        pt.rotation = Math.round(Math.random() *
                            200 - 100);
                        pt.x = Math.round(Math.random() *
                            200 - 100);
                        pt.y = Math.round(Math.random() *
                            200 - 100)
                    } else if (l.hasClass("lfr") || l.hasClass(
                        "skewfromright")) pt.x = 15 + r.width;
                    else if (l.hasClass("lfl") || l.hasClass(
                        "skewfromleft")) pt.x = -15 - A;
                    else if (l.hasClass("sfl") || l.hasClass(
                        "skewfromleftshort")) pt.x = -50;
                    else if (l.hasClass("sfr") || l.hasClass(
                        "skewfromrightshort")) pt.x = 50;
                    else if (l.hasClass("lft")) pt.y = -25 -
                        O;
                    else if (l.hasClass("lfb")) pt.y = 25 +
                        r.height;
                    else if (l.hasClass("sft")) pt.y = -50;
                    else if (l.hasClass("sfb")) pt.y = 50;
                    if (l.hasClass("skewfromright") || l.hasClass(
                        "skewfromrightshort")) pt.skewX = -
                        85;
                    else if (l.hasClass("skewfromleft") ||
                        l.hasClass("skewfromleftshort")) pt
                        .skewX = 85;
                    if (l.hasClass("fade") || l.hasClass(
                            "sft") || l.hasClass("sfl") ||
                        l.hasClass("sfb") || l.hasClass(
                            "skewfromleftshort") || l.hasClass(
                            "sfr") || l.hasClass(
                            "skewfromrightshort")) pt.opacity =
                        0;
                    if (q().toLowerCase() == "safari") {}
                    var vt = l.data("elementdelay") == t ?
                        0 : l.data("elementdelay");
                    dt.ease = pt.ease = l.data("easing") ==
                        t ? punchgs.Power1.easeInOut : l.data(
                            "easing");
                    pt.data = new Object;
                    pt.data.oldx = pt.x;
                    pt.data.oldy = pt.y;
                    dt.data = new Object;
                    dt.data.oldx = dt.x;
                    dt.data.oldy = dt.y;
                    pt.x = pt.x * p;
                    pt.y = pt.y * p;
                    var mt = new punchgs.TimelineLite;
                    if (o != 2) {
                        if (l.hasClass("customin")) {
                            if (ht != l) ct.add(punchgs.TweenLite
                                .set(l, {
                                    force3D: "auto",
                                    opacity: 1,
                                    scaleX: 1,
                                    scaleY: 1,
                                    rotationX: 0,
                                    rotationY: 0,
                                    rotationZ: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    visibility: "visible",
                                    opacity: 1,
                                    delay: 0,
                                    overwrite: "all"
                                }));
                            pt.visibility = "hidden";
                            dt.visibility = "visible";
                            dt.overwrite = "all";
                            dt.opacity = 1;
                            dt.onComplete = ft();
                            dt.delay = st;
                            dt.force3D = "auto";
                            ct.add(mt.staggerFromTo(ht, ot,
                                    pt, dt, vt),
                                "frame0")
                        } else {
                            pt.visibility = "visible";
                            pt.transformPerspective = 600;
                            if (ht != l) ct.add(punchgs.TweenLite
                                .set(l, {
                                    force3D: "auto",
                                    opacity: 1,
                                    scaleX: 1,
                                    scaleY: 1,
                                    rotationX: 0,
                                    rotationY: 0,
                                    rotationZ: 0,
                                    skewX: 0,
                                    skewY: 0,
                                    z: 0,
                                    x: 0,
                                    y: 0,
                                    visibility: "visible",
                                    opacity: 1,
                                    delay: 0,
                                    overwrite: "all"
                                }));
                            dt.visibility = "visible";
                            dt.delay = st;
                            dt.onComplete = ft();
                            dt.opacity = 1;
                            dt.force3D = "auto";
                            if (l.hasClass("randomrotate") &&
                                ht != l) {
                                for (var n = 0; n < ht.length; n++) {
                                    var gt = new Object;
                                    var yt = new Object;
                                    e.extend(gt, pt);
                                    e.extend(yt, dt);
                                    pt.scale = Math.random() *
                                        3 + 1;
                                    pt.rotation = Math.round(
                                        Math.random() *
                                        200 - 100);
                                    pt.x = Math.round(Math.random() *
                                        200 - 100);
                                    pt.y = Math.round(Math.random() *
                                        200 - 100);
                                    if (n != 0) yt.delay =
                                        st + n * vt;
                                    ct.append(punchgs.TweenLite
                                        .fromTo(ht[n],
                                            ot, gt, yt),
                                        "frame0")
                                }
                            } else ct.add(mt.staggerFromTo(
                                    ht, ot, pt, dt, vt),
                                "frame0")
                        }
                    }
                    l.data("timeline", ct);
                    var bt = new Array;
                    if (l.data("frames") != t) {
                        var wt = l.data("frames");
                        wt = wt.replace(/\s+/g, "");
                        wt = wt.replace("{", "");
                        var Et = wt.split("}");
                        e.each(Et, function(e, t) {
                            if (t.length > 0) {
                                var n = F(t);
                                V(l, r, n, "frame" +
                                    (e + 10), p
                                )
                            }
                        })
                    }
                    ct = l.data("timeline");
                    if (l.data("end") != t && (o == -1 || o ==
                        2)) {
                        $(l, r, l.data("end") / 1e3, pt,
                            "frame99", p)
                    } else {
                        if (o == -1 || o == 2) $(l, r,
                            999999, pt, "frame99", p);
                        else $(l, r, 200, pt, "frame99", p)
                    }
                    ct = l.data("timeline");
                    l.data("timeline", ct);
                    z(l, p);
                    ct.resume()
                }
            }
            if (s) {
                W(l);
                z(l, p);
                if (l.data("timeline") != t) {
                    var St = l.data("timeline").getTweensOf();
                    e.each(St, function(e, n) {
                        if (n.vars.data != t) {
                            var r = n.vars.data.oldx *
                                p;
                            var i = n.vars.data.oldy *
                                p;
                            if (n.progress() != 1 &&
                                n.progress() != 0) {
                                try {
                                    n.vars.x = r;
                                    n.vary.y = i
                                } catch (s) {}
                            } else {
                                if (n.progress() ==
                                    1) {
                                    punchgs.TweenLite
                                        .set(n.target, {
                                            x: r,
                                            y: i
                                        })
                                }
                            }
                        }
                    })
                }
            }
        });
        var h = e("body").find("#" + r.container.attr("id")).find(
            ".tp-bannertimer");
        h.data("opt", r);
        if (s != t) setTimeout(function() {
            s.resume()
        }, 30)
    };
    var q = function() {
        var e = navigator.appName,
            t = navigator.userAgent,
            n;
        var r = t.match(
            /(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i
        );
        if (r && (n = t.match(/version\/([\.\d]+)/i)) != null) r[2] =
            n[1];
        r = r ? [r[1], r[2]] : [e, navigator.appVersion, "-?"];
        return r[0]
    };
    var R = function() {
        var e = navigator.appName,
            t = navigator.userAgent,
            n;
        var r = t.match(
            /(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i
        );
        if (r && (n = t.match(/version\/([\.\d]+)/i)) != null) r[2] =
            n[1];
        r = r ? [r[1], r[2]] : [e, navigator.appVersion, "-?"];
        return r[1]
    };
    var U = function(e, n) {
        if (e.data("fsize") == t) e.data("fsize", parseInt(e.css(
            "font-size"), 0) || 0);
        if (e.data("pt") == t) e.data("pt", parseInt(e.css(
            "paddingTop"), 0) || 0);
        if (e.data("pb") == t) e.data("pb", parseInt(e.css(
            "paddingBottom"), 0) || 0);
        if (e.data("pl") == t) e.data("pl", parseInt(e.css(
            "paddingLeft"), 0) || 0);
        if (e.data("pr") == t) e.data("pr", parseInt(e.css(
            "paddingRight"), 0) || 0);
        if (e.data("mt") == t) e.data("mt", parseInt(e.css(
            "marginTop"), 0) || 0);
        if (e.data("mb") == t) e.data("mb", parseInt(e.css(
            "marginBottom"), 0) || 0);
        if (e.data("ml") == t) e.data("ml", parseInt(e.css(
            "marginLeft"), 0) || 0);
        if (e.data("mr") == t) e.data("mr", parseInt(e.css(
            "marginRight"), 0) || 0);
        if (e.data("bt") == t) e.data("bt", parseInt(e.css(
            "borderTopWidth"), 0) || 0);
        if (e.data("bb") == t) e.data("bb", parseInt(e.css(
            "borderBottomWidth"), 0) || 0);
        if (e.data("bl") == t) e.data("bl", parseInt(e.css(
            "borderLeftWidth"), 0) || 0);
        if (e.data("br") == t) e.data("br", parseInt(e.css(
            "borderRightWidth"), 0) || 0);
        if (e.data("ls") == t) e.data("ls", parseInt(e.css(
            "letterSpacing"), 0) || 0);
        if (e.data("lh") == t) e.data("lh", parseInt(e.css(
            "lineHeight"), 0) || "auto");
        if (e.data("minwidth") == t) e.data("minwidth", parseInt(e.css(
            "minWidth"), 0) || 0);
        if (e.data("minheight") == t) e.data("minheight", parseInt(
            e.css("minHeight"), 0) || 0);
        if (e.data("maxwidth") == t) e.data("maxwidth", parseInt(e.css(
            "maxWidth"), 0) || "none");
        if (e.data("maxheight") == t) e.data("maxheight", parseInt(
            e.css("maxHeight"), 0) || "none");
        if (e.data("wii") == t) e.data("wii", parseInt(e.css(
            "width"), 0) || 0);
        if (e.data("hii") == t) e.data("hii", parseInt(e.css(
            "height"), 0) || 0);
        if (e.data("wan") == t) e.data("wan", e.css(
            "-webkit-transition"));
        if (e.data("moan") == t) e.data("moan", e.css(
            "-moz-animation-transition"));
        if (e.data("man") == t) e.data("man", e.css(
            "-ms-animation-transition"));
        if (e.data("ani") == t) e.data("ani", e.css("transition"));
        if (e.data("lh") == "auto") e.data("lh", e.data("fsize") +
            4);
        if (!e.hasClass("tp-splitted")) {
            e.css("-webkit-transition", "none");
            e.css("-moz-transition", "none");
            e.css("-ms-transition", "none");
            e.css("transition", "none");
            punchgs.TweenLite.set(e, {
                fontSize: Math.round(e.data("fsize") * n.bw) +
                    "px",
                letterSpacing: Math.floor(e.data("ls") * n.bw) +
                    "px",
                paddingTop: Math.round(e.data("pt") * n.bh) +
                    "px",
                paddingBottom: Math.round(e.data("pb") * n.bh) +
                    "px",
                paddingLeft: Math.round(e.data("pl") * n.bw) +
                    "px",
                paddingRight: Math.round(e.data("pr") * n.bw) +
                    "px",
                marginTop: e.data("mt") * n.bh + "px",
                marginBottom: e.data("mb") * n.bh + "px",
                marginLeft: e.data("ml") * n.bw + "px",
                marginRight: e.data("mr") * n.bw + "px",
                borderTopWidth: Math.round(e.data("bt") * n
                    .bh) + "px",
                borderBottomWidth: Math.round(e.data("bb") *
                    n.bh) + "px",
                borderLeftWidth: Math.round(e.data("bl") *
                    n.bw) + "px",
                borderRightWidth: Math.round(e.data("br") *
                    n.bw) + "px",
                lineHeight: Math.round(e.data("lh") * n.bh) +
                    "px",
                minWidth: e.data("minwidth") * n.bw + "px",
                minHeight: e.data("minheight") * n.bh +
                    "px",
                overwrite: "auto"
            });
            setTimeout(function() {
                e.css("-webkit-transition", e.data("wan"));
                e.css("-moz-transition", e.data("moan"));
                e.css("-ms-transition", e.data("man"));
                e.css("transition", e.data("ani"))
            }, 30);
            if (e.data("maxheight") != "none") e.css({
                maxHeight: e.data("maxheight") * n.bh +
                    "px"
            });
            if (e.data("maxwidth") != "none") e.css({
                maxWidth: e.data("maxwidth") * n.bw + "px"
            })
        }
    };
    var z = function(n, r) {
        n.find(".rs-pendulum").each(function() {
            var n = e(this);
            if (n.data("timeline") == t) {
                n.data("timeline", new punchgs.TimelineLite);
                var i = n.data("startdeg") == t ? -20 : n.data(
                        "startdeg"),
                    s = n.data("enddeg") == t ? 20 : n.data(
                        "enddeg");
                speed = n.data("speed") == t ? 2 : n.data(
                        "speed"), origin = n.data("origin") ==
                    t ? "50% 50%" : n.data("origin"),
                    easing = n.data("easing") == t ?
                    punchgs.Power2.easeInOut : n.data(
                        "ease");
                i = i * r;
                s = s * r;
                n.data("timeline").append(new punchgs.TweenLite
                    .fromTo(n, speed, {
                        force3D: "auto",
                        rotation: i,
                        transformOrigin: origin
                    }, {
                        rotation: s,
                        ease: easing
                    }));
                n.data("timeline").append(new punchgs.TweenLite
                    .fromTo(n, speed, {
                        force3D: "auto",
                        rotation: s,
                        transformOrigin: origin
                    }, {
                        rotation: i,
                        ease: easing,
                        onComplete: function() {
                            n.data("timeline").restart()
                        }
                    }))
            }
        });
        n.find(".rs-rotate").each(function() {
            var n = e(this);
            if (n.data("timeline") == t) {
                n.data("timeline", new punchgs.TimelineLite);
                var i = n.data("startdeg") == t ? 0 : n.data(
                        "startdeg"),
                    s = n.data("enddeg") == t ? 360 : n.data(
                        "enddeg");
                speed = n.data("speed") == t ? 2 : n.data(
                        "speed"), origin = n.data("origin") ==
                    t ? "50% 50%" : n.data("origin"),
                    easing = n.data("easing") == t ?
                    punchgs.Power2.easeInOut : n.data(
                        "easing");
                i = i * r;
                s = s * r;
                n.data("timeline").append(new punchgs.TweenLite
                    .fromTo(n, speed, {
                        force3D: "auto",
                        rotation: i,
                        transformOrigin: origin
                    }, {
                        rotation: s,
                        ease: easing,
                        onComplete: function() {
                            n.data("timeline").restart()
                        }
                    }))
            }
        });
        n.find(".rs-slideloop").each(function() {
            var n = e(this);
            if (n.data("timeline") == t) {
                n.data("timeline", new punchgs.TimelineLite);
                var i = n.data("xs") == t ? 0 : n.data("xs"),
                    s = n.data("ys") == t ? 0 : n.data("ys");
                xe = n.data("xe") == t ? 0 : n.data("xe"),
                    ye = n.data("ye") == t ? 0 : n.data(
                        "ye"), speed = n.data("speed") == t ?
                    2 : n.data("speed"), easing = n.data(
                        "easing") == t ? punchgs.Power2.easeInOut :
                    n.data("easing");
                i = i * r;
                s = s * r;
                xe = xe * r;
                ye = ye * r;
                n.data("timeline").append(new punchgs.TweenLite
                    .fromTo(n, speed, {
                        force3D: "auto",
                        x: i,
                        y: s
                    }, {
                        x: xe,
                        y: ye,
                        ease: easing
                    }));
                n.data("timeline").append(new punchgs.TweenLite
                    .fromTo(n, speed, {
                        force3D: "auto",
                        x: xe,
                        y: ye
                    }, {
                        x: i,
                        y: s,
                        onComplete: function() {
                            n.data("timeline").restart()
                        }
                    }))
            }
        });
        n.find(".rs-pulse").each(function() {
            var n = e(this);
            if (n.data("timeline") == t) {
                n.data("timeline", new punchgs.TimelineLite);
                var r = n.data("zoomstart") == t ? 0 : n.data(
                        "zoomstart"),
                    i = n.data("zoomend") == t ? 0 : n.data(
                        "zoomend");
                speed = n.data("speed") == t ? 2 : n.data(
                        "speed"), easing = n.data("easing") ==
                    t ? punchgs.Power2.easeInOut : n.data(
                        "easing");
                n.data("timeline").append(new punchgs.TweenLite
                    .fromTo(n, speed, {
                        force3D: "auto",
                        scale: r
                    }, {
                        scale: i,
                        ease: easing
                    }));
                n.data("timeline").append(new punchgs.TweenLite
                    .fromTo(n, speed, {
                        force3D: "auto",
                        scale: i
                    }, {
                        scale: r,
                        onComplete: function() {
                            n.data("timeline").restart()
                        }
                    }))
            }
        });
        n.find(".rs-wave").each(function() {
            var n = e(this);
            if (n.data("timeline") == t) {
                n.data("timeline", new punchgs.TimelineLite);
                var i = n.data("angle") == t ? 10 : n.data(
                        "angle"),
                    s = n.data("radius") == t ? 10 : n.data(
                        "radius"),
                    o = n.data("speed") == t ? -20 : n.data(
                        "speed"),
                    u = n.data("origin") == t ? -20 : n.data(
                        "origin");
                i = i * r;
                s = s * r;
                var a = {
                    a: 0,
                    ang: i,
                    element: n,
                    unit: s
                };
                n.data("timeline").append(new punchgs.TweenLite
                    .fromTo(a, o, {
                        a: 360
                    }, {
                        a: 0,
                        force3D: "auto",
                        ease: punchgs.Linear.easeNone,
                        onUpdate: function() {
                            var e = a.a * (Math
                                .PI / 180);
                            punchgs.TweenLite.to(
                                a.element,
                                .1, {
                                    force3D: "auto",
                                    x: Math
                                        .cos(
                                            e
                                        ) *
                                        a.unit,
                                    y: a.unit *
                                        (1 -
                                            Math
                                            .sin(
                                                e
                                            )
                                        )
                                })
                        },
                        onComplete: function() {
                            n.data("timeline").restart()
                        }
                    }))
            }
        })
    };
    var W = function(n) {
        n.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(
            function() {
                var n = e(this);
                if (n.data("timeline") != t) {
                    n.data("timeline").pause();
                    n.data("timeline", null)
                }
            })
    };
    var X = function(n, r) {
        var i = 0;
        var s = n.find(".tp-caption"),
            o = r.container.find(".tp-static-layers").find(
                ".tp-caption");
        e.each(o, function(e, t) {
            s.push(t)
        });
        s.each(function(n) {
            var s = -1;
            var o = e(this);
            if (o.hasClass("tp-static-layer")) {
                if (o.data("startslide") == -1 || o.data(
                    "startslide") == "-1") o.data(
                    "startslide", 0);
                if (o.data("endslide") == -1 || o.data(
                    "endslide") == "-1") o.data("endslide",
                    r.slideamount);
                if (o.hasClass("tp-is-shown")) {
                    if (o.data("startslide") > r.next || o.data(
                        "endslide") < r.next) {
                        s = 2;
                        o.removeClass("tp-is-shown")
                    } else {
                        s = 0
                    }
                } else {
                    s = 2
                }
            }
            if (s != 0) {
                W(o);
                if (o.find("iframe").length > 0) {
                    punchgs.TweenLite.to(o.find("iframe"),
                        .2, {
                            autoAlpha: 0
                        });
                    if (Q()) o.find("iframe").remove();
                    try {
                        var u = o.find("iframe");
                        var a = u.attr("id");
                        var f = $f(a);
                        f.api("pause");
                        clearTimeout(o.data("timerplay"))
                    } catch (l) {}
                    try {
                        var c = o.data("player");
                        c.stopVideo();
                        clearTimeout(o.data("timerplay"))
                    } catch (l) {}
                }
                if (o.find("video").length > 0) {
                    try {
                        o.find("video").each(function(t) {
                            var n = e(this).parent();
                            var r = n.attr("id");
                            clearTimeout(n.data(
                                "timerplay"
                            ));
                            var i = this;
                            i.pause()
                        })
                    } catch (l) {}
                }
                try {
                    var h = o.data("timeline");
                    var p = h.getLabelTime("frame99");
                    var d = h.time();
                    if (p > d) {
                        var v = h.getTweensOf(o);
                        e.each(v, function(e, t) {
                            if (e != 0) t.pause()
                        });
                        if (o.css("opacity") != 0) {
                            var m = o.data("endspeed") == t ?
                                o.data("speed") : o.data(
                                    "endspeed");
                            if (m > i) i = m;
                            h.play("frame99")
                        } else h.progress(1, false)
                    }
                } catch (l) {}
            }
        });
        return i
    };
    var V = function(e, n, r, i, s) {
        var o = e.data("timeline");
        var u = new punchgs.TimelineLite;
        var a = e;
        if (r.typ == "chars") a = e.data("mySplitText").chars;
        else if (r.typ == "words") a = e.data("mySplitText").words;
        else if (r.typ == "lines") a = e.data("mySplitText").lines;
        r.animation.ease = r.ease;
        if (r.animation.rotationZ != t) r.animation.rotation = r.animation
            .rotationZ;
        r.animation.data = new Object;
        r.animation.data.oldx = r.animation.x;
        r.animation.data.oldy = r.animation.y;
        r.animation.x = r.animation.x * s;
        r.animation.y = r.animation.y * s;
        o.add(u.staggerTo(a, r.speed, r.animation, r.elementdelay),
            r.start);
        o.addLabel(i, r.start);
        e.data("timeline", o)
    };
    var $ = function(e, n, r, i, s, o) {
        var u = e.data("timeline");
        var a = new punchgs.TimelineLite;
        var f = B();
        var l = e.data("endspeed") == t ? e.data("speed") : e.data(
            "endspeed");
        f.ease = e.data("endeasing") == t ? punchgs.Power1.easeInOut :
            e.data("endeasing");
        l = l / 1e3;
        if (e.hasClass("ltr") || e.hasClass("ltl") || e.hasClass(
                "str") || e.hasClass("stl") || e.hasClass("ltt") ||
            e.hasClass("ltb") || e.hasClass("stt") || e.hasClass(
                "stb") || e.hasClass("skewtoright") || e.hasClass(
                "skewtorightshort") || e.hasClass("skewtoleft") ||
            e.hasClass("skewtoleftshort") || e.hasClass("fadeout") ||
            e.hasClass("randomrotateout")) {
            if (e.hasClass("skewtoright") || e.hasClass(
                "skewtorightshort")) f.skewX = 35;
            else if (e.hasClass("skewtoleft") || e.hasClass(
                "skewtoleftshort")) f.skewX = -35;
            if (e.hasClass("ltr") || e.hasClass("skewtoright")) f.x =
                n.width + 60;
            else if (e.hasClass("ltl") || e.hasClass("skewtoleft"))
                f.x = 0 - (n.width + 60);
            else if (e.hasClass("ltt")) f.y = 0 - (n.height + 60);
            else if (e.hasClass("ltb")) f.y = n.height + 60;
            else if (e.hasClass("str") || e.hasClass(
                "skewtorightshort")) {
                f.x = 50;
                f.opacity = 0
            } else if (e.hasClass("stl") || e.hasClass(
                "skewtoleftshort")) {
                f.x = -50;
                f.opacity = 0
            } else if (e.hasClass("stt")) {
                f.y = -50;
                f.opacity = 0
            } else if (e.hasClass("stb")) {
                f.y = 50;
                f.opacity = 0
            } else if (e.hasClass("randomrotateout")) {
                f.x = Math.random() * n.width;
                f.y = Math.random() * n.height;
                f.scale = Math.random() * 2 + .3;
                f.rotation = Math.random() * 360 - 180;
                f.opacity = 0
            } else if (e.hasClass("fadeout")) {
                f.opacity = 0
            }
            if (e.hasClass("skewtorightshort")) f.x = 270;
            else if (e.hasClass("skewtoleftshort")) f.x = -270;
            f.data = new Object;
            f.data.oldx = f.x;
            f.data.oldy = f.y;
            f.x = f.x * o;
            f.y = f.y * o;
            f.overwrite = "auto";
            var c = e;
            var c = e;
            if (e.data("splitout") == "chars") c = e.data(
                "mySplitText").chars;
            else if (e.data("splitout") == "words") c = e.data(
                "mySplitText").words;
            else if (e.data("splitout") == "lines") c = e.data(
                "mySplitText").lines;
            var h = e.data("endelementdelay") == t ? 0 : e.data(
                "endelementdelay");
            u.add(a.staggerTo(c, l, f, h), r)
        } else if (e.hasClass("customout")) {
            f = j(f, e.data("customout"));
            var c = e;
            if (e.data("splitout") == "chars") c = e.data(
                "mySplitText").chars;
            else if (e.data("splitout") == "words") c = e.data(
                "mySplitText").words;
            else if (e.data("splitout") == "lines") c = e.data(
                "mySplitText").lines;
            var h = e.data("endelementdelay") == t ? 0 : e.data(
                "endelementdelay");
            f.onStart = function() {
                punchgs.TweenLite.set(e, {
                    transformPerspective: f.transformPerspective,
                    transformOrigin: f.transformOrigin,
                    overwrite: "auto"
                })
            };
            f.data = new Object;
            f.data.oldx = f.x;
            f.data.oldy = f.y;
            f.x = f.x * o;
            f.y = f.y * o;
            u.add(a.staggerTo(c, l, f, h), r)
        } else {
            i.delay = 0;
            u.add(punchgs.TweenLite.to(e, l, i), r)
        }
        u.addLabel(s, r);
        e.data("timeline", u)
    };
    var J = function(t, n) {
        t.children().each(function() {
            try {
                e(this).die("click")
            } catch (t) {}
            try {
                e(this).die("mouseenter")
            } catch (t) {}
            try {
                e(this).die("mouseleave")
            } catch (t) {}
            try {
                e(this).unbind("hover")
            } catch (t) {}
        });
        try {
            t.die("click", "mouseenter", "mouseleave")
        } catch (r) {}
        clearInterval(n.cdint);
        t = null
    };
    var K = function(n, r) {
        r.cd = 0;
        r.loop = 0;
        if (r.stopAfterLoops != t && r.stopAfterLoops > -1) r.looptogo =
            r.stopAfterLoops;
        else r.looptogo = 9999999; if (r.stopAtSlide != t && r.stopAtSlide >
            -1) r.lastslidetoshow = r.stopAtSlide;
        else r.lastslidetoshow = 999;
        r.stopLoop = "off";
        if (r.looptogo == 0) r.stopLoop = "on";
        if (r.slideamount > 1 && !(r.stopAfterLoops == 0 && r.stopAtSlide ==
            1)) {
            var i = n.find(".tp-bannertimer");
            n.on("stoptimer", function() {
                var t = e(this).find(".tp-bannertimer");
                t.data("tween").pause();
                if (r.hideTimerBar == "on") t.css({
                    visibility: "hidden"
                })
            });
            n.on("starttimer", function() {
                if (r.conthover != 1 && r.videoplaying !=
                    true && r.width > r.hideSliderAtLimit &&
                    r.bannertimeronpause != true && r.overnav !=
                    true)
                    if (r.stopLoop == "on" && r.next == r.lastslidetoshow -
                        1 || r.noloopanymore == 1) {
                        r.noloopanymore = 1
                    } else {
                        i.css({
                            visibility: "visible"
                        });
                        i.data("tween").resume()
                    }
                if (r.hideTimerBar == "on") i.css({
                    visibility: "hidden"
                })
            });
            n.on("restarttimer", function() {
                var t = e(this).find(".tp-bannertimer");
                if (r.stopLoop == "on" && r.next == r.lastslidetoshow -
                    1 || r.noloopanymore == 1) {
                    r.noloopanymore = 1
                } else {
                    t.css({
                        visibility: "visible"
                    });
                    t.data("tween").kill();
                    t.data("tween", punchgs.TweenLite.fromTo(
                        t, r.delay / 1e3, {
                            width: "0%"
                        }, {
                            force3D: "auto",
                            width: "100%",
                            ease: punchgs.Linear.easeNone,
                            onComplete: s,
                            delay: 1
                        }))
                } if (r.hideTimerBar == "on") t.css({
                    visibility: "hidden"
                })
            });
            n.on("nulltimer", function() {
                i.data("tween").pause(0);
                if (r.hideTimerBar == "on") i.css({
                    visibility: "hidden"
                })
            });
            var s = function() {
                if (e("body").find(n).length == 0) {
                    J(n, r);
                    clearInterval(r.cdint)
                }
                n.trigger("revolution.slide.slideatend");
                if (n.data("conthover-changed") == 1) {
                    r.conthover = n.data("conthover");
                    n.data("conthover-changed", 0)
                }
                r.act = r.next;
                r.next = r.next + 1;
                if (r.next > n.find(">ul >li").length - 1) {
                    r.next = 0;
                    r.looptogo = r.looptogo - 1;
                    if (r.looptogo <= 0) {
                        r.stopLoop = "on"
                    }
                }
                if (r.stopLoop == "on" && r.next == r.lastslidetoshow -
                    1) {
                    n.find(".tp-bannertimer").css({
                        visibility: "hidden"
                    });
                    n.trigger("revolution.slide.onstop");
                    r.noloopanymore = 1
                } else {
                    i.data("tween").restart()
                }
                k(n, r)
            };
            i.data("tween", punchgs.TweenLite.fromTo(i, r.delay /
                1e3, {
                    width: "0%"
                }, {
                    force3D: "auto",
                    width: "100%",
                    ease: punchgs.Linear.easeNone,
                    onComplete: s,
                    delay: 1
                }));
            i.data("opt", r);
            n.hover(function() {
                if (r.onHoverStop == "on" && !Q()) {
                    n.trigger("stoptimer");
                    n.trigger("revolution.slide.onpause");
                    var i = n.find(">ul >li:eq(" + r.next +
                        ") .slotholder");
                    i.find(".defaultimg").each(function() {
                        var n = e(this);
                        if (n.data("kenburn") != t) {
                            n.data("kenburn").pause()
                        }
                    })
                }
            }, function() {
                if (n.data("conthover") != 1) {
                    n.trigger("revolution.slide.onresume");
                    n.trigger("starttimer");
                    var i = n.find(">ul >li:eq(" + r.next +
                        ") .slotholder");
                    i.find(".defaultimg").each(function() {
                        var n = e(this);
                        if (n.data("kenburn") != t) {
                            n.data("kenburn").play()
                        }
                    })
                }
            })
        }
    };
    var Q = function() {
        var e = ["android", "webos", "iphone", "ipad", "blackberry",
            "Android", "webos", , "iPod", "iPhone", "iPad",
            "Blackberry", "BlackBerry"
        ];
        var t = false;
        for (i in e) {
            if (navigator.userAgent.split(e[i]).length > 1) {
                t = true
            }
        }
        return t
    };
    var G = function(e, t, n) {
        var r = t.data("owidth");
        var i = t.data("oheight");
        if (r / i > n.width / n.height) {
            var s = n.container.width() / r;
            var o = i * s;
            var u = o / n.container.height() * e;
            e = e * (100 / u);
            u = 100;
            e = e;
            return e + "% " + u + "%" + " 1"
        } else {
            var s = n.container.width() / r;
            var o = i * s;
            var u = o / n.container.height() * e;
            return e + "% " + u + "%"
        }
    };
    var Y = function(n, r, i, s) {
        try {
            var o = n.find(">ul:first-child >li:eq(" + r.act + ")")
        } catch (u) {
            var o = n.find(">ul:first-child >li:eq(1)")
        }
        r.lastslide = r.act;
        var a = n.find(">ul:first-child >li:eq(" + r.next + ")"),
            l = a.find(".slotholder"),
            c = l.data("bgposition"),
            h = l.data("bgpositionend"),
            p = l.data("zoomstart") / 100,
            d = l.data("zoomend") / 100,
            v = l.data("rotationstart"),
            m = l.data("rotationend"),
            g = l.data("bgfit"),
            y = l.data("bgfitend"),
            b = l.data("easeme"),
            w = l.data("duration") / 1e3,
            E = 100;
        if (g == t) g = 100;
        if (y == t) y = 100;
        var S = g,
            x = y;
        g = G(g, l, r);
        y = G(y, l, r);
        E = G(100, l, r);
        if (p == t) p = 1;
        if (d == t) d = 1;
        if (v == t) v = 0;
        if (m == t) m = 0;
        if (p < 1) p = 1;
        if (d < 1) d = 1;
        var T = new Object;
        T.w = parseInt(E.split(" ")[0], 0), T.h = parseInt(E.split(
            " ")[1], 0);
        var N = false;
        if (E.split(" ")[2] == "1") {
            N = true
        }
        l.find(".defaultimg").each(function() {
            var t = e(this);
            if (l.find(".kenburnimg").length == 0) l.append(
                '<div class="kenburnimg" style="position:absolute;z-index:1;width:100%;height:100%;top:0px;left:0px;"><img src="' +
                t.attr("src") +
                '" style="-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;position:absolute;width:' +
                T.w + "%;height:" + T.h + '%;"></div>');
            else {
                l.find(".kenburnimg img").css({
                    width: T.w + "%",
                    height: T.h + "%"
                })
            }
            var n = l.find(".kenburnimg img");
            var i = Z(r, c, g, n, N),
                o = Z(r, h, y, n, N);
            if (N) {
                i.w = S / 100;
                o.w = x / 100
            }
            if (s) {
                punchgs.TweenLite.set(n, {
                    autoAlpha: 0,
                    transformPerspective: 1200,
                    transformOrigin: "0% 0%",
                    top: 0,
                    left: 0,
                    scale: i.w,
                    x: i.x,
                    y: i.y
                });
                var u = i.w,
                    a = u * n.width() - r.width,
                    p = u * n.height() - r.height,
                    d = Math.abs(i.x / a * 100),
                    v = Math.abs(i.y / p * 100);
                if (p == 0) v = 0;
                if (a == 0) d = 0;
                t.data("bgposition", d + "% " + v + "%");
                if (!f(8)) t.data("currotate", et(n));
                if (!f(8)) t.data("curscale", T.w * u +
                    "%  " + (T.h * u + "%"));
                l.find(".kenburnimg").remove()
            } else t.data("kenburn", punchgs.TweenLite.fromTo(
                n, w, {
                    autoAlpha: 1,
                    force3D: punchgs.force3d,
                    transformOrigin: "0% 0%",
                    top: 0,
                    left: 0,
                    scale: i.w,
                    x: i.x,
                    y: i.y
                }, {
                    autoAlpha: 1,
                    rotationZ: m,
                    ease: b,
                    x: o.x,
                    y: o.y,
                    scale: o.w,
                    onUpdate: function() {
                        var e = n[0]._gsTransform
                            .scaleX;
                        var i = e * n.width() -
                            r.width,
                            s = e * n.height() -
                            r.height,
                            o = Math.abs(n[0]._gsTransform
                                .x / i * 100),
                            u = Math.abs(n[0]._gsTransform
                                .y / s * 100);
                        if (s == 0) u = 0;
                        if (i == 0) o = 0;
                        t.data("bgposition", o +
                            "% " + u + "%");
                        if (!f(8)) t.data(
                            "currotate", et(
                                n));
                        if (!f(8)) t.data(
                            "curscale", T.w *
                            e + "%  " + (T.h *
                                e + "%"))
                    }
                }))
        })
    };
    var Z = function(e, t, n, r, i) {
        var s = new Object;
        if (!i) s.w = parseInt(n.split(" ")[0], 0) / 100;
        else s.w = parseInt(n.split(" ")[1], 0) / 100;
        switch (t) {
            case "left top":
            case "top left":
                s.x = 0;
                s.y = 0;
                break;
            case "center top":
            case "top center":
                s.x = ((0 - r.width()) * s.w + parseInt(e.width, 0)) /
                    2;
                s.y = 0;
                break;
            case "top right":
            case "right top":
                s.x = (0 - r.width()) * s.w + parseInt(e.width, 0);
                s.y = 0;
                break;
            case "center left":
            case "left center":
                s.x = 0;
                s.y = ((0 - r.height()) * s.w + parseInt(e.height,
                    0)) / 2;
                break;
            case "center center":
                s.x = ((0 - r.width()) * s.w + parseInt(e.width, 0)) /
                    2;
                s.y = ((0 - r.height()) * s.w + parseInt(e.height,
                    0)) / 2;
                break;
            case "center right":
            case "right center":
                s.x = (0 - r.width()) * s.w + parseInt(e.width, 0);
                s.y = ((0 - r.height()) * s.w + parseInt(e.height,
                    0)) / 2;
                break;
            case "bottom left":
            case "left bottom":
                s.x = 0;
                s.y = (0 - r.height()) * s.w + parseInt(e.height, 0);
                break;
            case "bottom center":
            case "center bottom":
                s.x = ((0 - r.width()) * s.w + parseInt(e.width, 0)) /
                    2;
                s.y = (0 - r.height()) * s.w + parseInt(e.height, 0);
                break;
            case "bottom right":
            case "right bottom":
                s.x = (0 - r.width()) * s.w + parseInt(e.width, 0);
                s.y = (0 - r.height()) * s.w + parseInt(e.height, 0);
                break
        }
        return s
    };
    var et = function(e) {
        var t = e.css("-webkit-transform") || e.css(
            "-moz-transform") || e.css("-ms-transform") || e.css(
            "-o-transform") || e.css("transform");
        if (t !== "none") {
            var n = t.split("(")[1].split(")")[0].split(",");
            var r = n[0];
            var i = n[1];
            var s = Math.round(Math.atan2(i, r) * (180 / Math.PI))
        } else {
            var s = 0
        }
        return s < 0 ? s += 360 : s
    };
    var tt = function(n, r) {
        try {
            var i = n.find(">ul:first-child >li:eq(" + r.act + ")")
        } catch (s) {
            var i = n.find(">ul:first-child >li:eq(1)")
        }
        r.lastslide = r.act;
        var o = n.find(">ul:first-child >li:eq(" + r.next + ")");
        var u = i.find(".slotholder");
        var a = o.find(".slotholder");
        n.find(".defaultimg").each(function() {
            var n = e(this);
            punchgs.TweenLite.killTweensOf(n, false);
            punchgs.TweenLite.set(n, {
                scale: 1,
                rotationZ: 0
            });
            punchgs.TweenLite.killTweensOf(n.data(
                "kenburn img"), false);
            if (n.data("kenburn") != t) {
                n.data("kenburn").pause()
            }
            if (n.data("currotate") != t && n.data(
                    "bgposition") != t && n.data("curscale") !=
                t) punchgs.TweenLite.set(n, {
                rotation: n.data("currotate"),
                backgroundPosition: n.data(
                    "bgposition"),
                backgroundSize: n.data("curscale")
            });
            if (n != t && n.data("kenburn img") != t && n.data(
                "kenburn img").length > 0) punchgs.TweenLite
                .set(n.data("kenburn img"), {
                    autoAlpha: 0
                })
        })
    };
    var nt = function(t, n) {
        if (Q() && n.parallaxDisableOnMobile == "on") return false;
        t.find(">ul:first-child >li").each(function() {
            var t = e(this);
            for (var r = 1; r <= 10; r++) t.find(
                ".rs-parallaxlevel-" + r).each(function() {
                var t = e(this);
                t.wrap(
                    '<div style="position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:' +
                    t.css("zIndex") +
                    '" class="tp-parallax-container" data-parallaxlevel="' +
                    n.parallaxLevels[r - 1] +
                    '"></div>')
            })
        });
        if (n.parallax == "mouse" || n.parallax == "scroll+mouse" ||
            n.parallax == "mouse+scroll") {
            t.mouseenter(function(e) {
                var n = t.find(".current-sr-slide-visible");
                var r = t.offset().top,
                    i = t.offset().left,
                    s = e.pageX - i,
                    o = e.pageY - r;
                n.data("enterx", s);
                n.data("entery", o)
            });
            t.on("mousemove.hoverdir, mouseleave.hoverdir",
                function(r) {
                    var i = t.find(".current-sr-slide-visible");
                    switch (r.type) {
                        case "mousemove":
                            var s = t.offset().top,
                                o = t.offset().left,
                                u = i.data("enterx"),
                                a = i.data("entery"),
                                f = u - (r.pageX - o),
                                l = a - (r.pageY - s);
                            i.find(".tp-parallax-container").each(
                                function() {
                                    var t = e(this),
                                        r = parseInt(t.data(
                                            "parallaxlevel"
                                        ), 0) / 100,
                                        i = f * r,
                                        s = l * r;
                                    if (n.parallax ==
                                        "scroll+mouse" || n
                                        .parallax ==
                                        "mouse+scroll")
                                        punchgs.TweenLite.to(
                                            t, .4, {
                                                force3D: "auto",
                                                x: i,
                                                ease: punchgs
                                                    .Power3
                                                    .easeOut,
                                                overwrite: "all"
                                            });
                                    else punchgs.TweenLite.to(
                                        t, .4, {
                                            force3D: "auto",
                                            x: i,
                                            y: s,
                                            ease: punchgs
                                                .Power3
                                                .easeOut,
                                            overwrite: "all"
                                        })
                                });
                            break;
                        case "mouseleave":
                            i.find(".tp-parallax-container").each(
                                function() {
                                    var t = e(this);
                                    if (n.parallax ==
                                        "scroll+mouse" || n
                                        .parallax ==
                                        "mouse+scroll")
                                        punchgs.TweenLite.to(
                                            t, 1.5, {
                                                force3D: "auto",
                                                x: 0,
                                                ease: punchgs
                                                    .Power3
                                                    .easeOut
                                            });
                                    else punchgs.TweenLite.to(
                                        t, 1.5, {
                                            force3D: "auto",
                                            x: 0,
                                            y: 0,
                                            ease: punchgs
                                                .Power3
                                                .easeOut
                                        })
                                });
                            break
                    }
                });
            if (Q()) window.ondeviceorientation = function(n) {
                var r = Math.round(n.beta || 0),
                    i = Math.round(n.gamma || 0);
                var s = t.find(".current-sr-slide-visible");
                if (e(window).width() > e(window).height()) {
                    var o = i;
                    i = r;
                    r = o
                }
                var u = 360 / t.width() * i,
                    a = 180 / t.height() * r;
                s.find(".tp-parallax-container").each(function() {
                    var t = e(this),
                        n = parseInt(t.data(
                            "parallaxlevel"), 0) / 100,
                        r = u * n,
                        i = a * n;
                    punchgs.TweenLite.to(t, .2, {
                        force3D: "auto",
                        x: r,
                        y: i,
                        ease: punchgs.Power3.easeOut
                    })
                })
            }
        }
        if (n.parallax == "scroll" || n.parallax == "scroll+mouse" ||
            n.parallax == "mouse+scroll") {
            e(window).on("scroll", function(e) {
                rt(t, n)
            })
        }
    };
    var rt = function(t, n) {
        if (Q() && n.parallaxDisableOnMobile == "on") return false;
        var r = t.offset().top,
            i = e(window).scrollTop(),
            s = r + t.height() / 2,
            o = r + t.height() / 2 - i,
            u = e(window).height() / 2,
            a = u - o;
        if (s < u) a = a - (u - s);
        var f = t.find(".current-sr-slide-visible");
        t.find(".tp-parallax-container").each(function(t) {
            var n = e(this),
                r = parseInt(n.data("parallaxlevel"), 0) /
                100,
                i = a * r;
            n.data("parallaxoffset", i);
            punchgs.TweenLite.to(n, .2, {
                force3D: "auto",
                y: i,
                ease: punchgs.Power3.easeOut
            })
        });
        if (n.parallaxBgFreeze != "on") {
            var l = n.parallaxLevels[0] / 100,
                c = a * l;
            punchgs.TweenLite.to(t, .2, {
                force3D: "auto",
                y: c,
                ease: punchgs.Power3.easeOut
            })
        }
    };
    var it = function(n, r) {
        var i = n.parent();
        if (r.navigationType == "thumb" || r.navsecond == "both") {
            i.append('<div class="tp-bullets tp-thumbs ' + r.navigationStyle +
                '"><div class="tp-mask"><div class="tp-thumbcontainer"></div></div></div>'
            )
        }
        var s = i.find(
            ".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"
        );
        var o = s.parent();
        o.width(r.thumbWidth * r.thumbAmount);
        o.height(r.thumbHeight);
        o.parent().width(r.thumbWidth * r.thumbAmount);
        o.parent().height(r.thumbHeight);
        n.find(">ul:first >li").each(function(e) {
            var i = n.find(">ul:first >li:eq(" + e + ")");
            var o = i.find(".defaultimg").css(
                "backgroundColor");
            if (i.data("thumb") != t) var u = i.data(
                "thumb");
            else var u = i.find("img:first").attr("src");
            s.append(
                '<div class="bullet thumb" style="background-color:' +
                o + ";position:relative;width:" + r.thumbWidth +
                "px;height:" + r.thumbHeight +
                "px;background-image:url(" + u +
                ') !important;background-size:cover;background-position:center center;"></div>'
            );
            var a = s.find(".bullet:first")
        });
        var u = 10;
        s.find(".bullet").each(function(t) {
            var i = e(this);
            if (t == r.slideamount - 1) i.addClass("last");
            if (t == 0) i.addClass("first");
            i.width(r.thumbWidth);
            i.height(r.thumbHeight);
            if (u < i.outerWidth(true)) u = i.outerWidth(
                true);
            i.click(function() {
                if (r.transition == 0 && i.index() !=
                    r.act) {
                    r.next = i.index();
                    l(r, n)
                }
            })
        });
        var a = u * n.find(">ul:first >li").length;
        var f = s.parent().width();
        r.thumbWidth = u;
        if (f < a) {
            e(document).mousemove(function(t) {
                e("body").data("mousex", t.pageX)
            });
            s.parent().mouseenter(function() {
                var t = e(this);
                t.addClass("over");
                var r = t.offset();
                var i = e("body").data("mousex") - r.left;
                var s = t.width();
                var o = t.find(".bullet:first").outerWidth(
                    true);
                var u = o * n.find(">ul:first >li").length;
                var a = u - s + 15;
                var f = a / s;
                i = i - 30;
                var l = 0 - i * f;
                if (l > 0) l = 0;
                if (l < 0 - u + s) l = 0 - u + s;
                ot(t, l, 200)
            });
            s.parent().mousemove(function() {
                var t = e(this);
                var r = t.offset();
                var i = e("body").data("mousex") - r.left;
                var s = t.width();
                var o = t.find(".bullet:first").outerWidth(
                    true);
                var u = o * n.find(">ul:first >li").length -
                    1;
                var a = u - s + 15;
                var f = a / s;
                i = i - 3;
                if (i < 6) i = 0;
                if (i + 3 > s - 6) i = s;
                var l = 0 - i * f;
                if (l > 0) l = 0;
                if (l < 0 - u + s) l = 0 - u + s;
                ot(t, l, 0)
            });
            s.parent().mouseleave(function() {
                var t = e(this);
                t.removeClass("over");
                st(n)
            })
        }
    };
    var st = function(e) {
        var t = e.parent().find(
            ".tp-bullets.tp-thumbs .tp-mask .tp-thumbcontainer"
        );
        var n = t.parent();
        var r = n.offset();
        var i = n.find(".bullet:first").outerWidth(true);
        var s = n.find(".bullet.selected").index() * i;
        var o = n.width();
        var i = n.find(".bullet:first").outerWidth(true);
        var u = i * e.find(">ul:first >li").length;
        var a = u - o;
        var f = a / o;
        var l = 0 - s;
        if (l > 0) l = 0;
        if (l < 0 - u + o) l = 0 - u + o;
        if (!n.hasClass("over")) {
            ot(n, l, 200)
        }
    };
    var ot = function(e, t, n) {
        punchgs.TweenLite.to(e.find(".tp-thumbcontainer"), .2, {
            force3D: "auto",
            left: t,
            ease: punchgs.Power3.easeOut,
            overwrite: "auto"
        })
    }
})(jQuery)