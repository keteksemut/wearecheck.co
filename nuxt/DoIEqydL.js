import {d as x, z as b, c as y, e as T, i as s, I as C, k as l, l as S, j as E, f as p, C as P, h as q, m as X, $ as D, p as Z, U as A, g as e, S as c, v as H} from "./Dsfj8rDd.js";
import {u as N} from "./DVefFu0y.js";
const B = {
    class: "c-footer"
}
  , R = {
    class: "c-container"
}
  , W = {
    class: "padding-global"
}
  , V = {
    class: "footer-inner"
}
  , z = {
    class: "footer-header_wrapper"
}
  , L = s("div", {
    class: "footer-title_wrapper"
}, [s("h3", {
    class: "heading-h2",
    "data-header": ""
}, " Let's make it happen together. ")], -1)
  , F = {
    class: "footer-cta_wrapper"
}
  , I = s("div", {
    class: "footer-text_wrapper"
}, [s("p", {
    "data-paragraph": ""
}, " We champion transformation through design, regardless of your project idea or goal. ")], -1)
  , M = X('<div class="footer-socials"><a class="social-link w-inline-block" href="https://www.instagram.com/wearecheck_/" target="_blank"><div>Instagram</div><div class="link-icon"></div></a><a class="social-link w-inline-block" href="https://twitter.com/wearecheck_" target="_blank"><div>Twitter (X)</div><div class="link-icon"></div></a><a class="social-link w-inline-block" href="https://www.linkedin.com/company/wearecheck/" target="_blank"><div>LinkedIn</div><div class="link-icon"></div></a><a class="social-link w-inline-block" href="https://medium.com/@wearecheck" target="_blank"><div>Medium</div><div class="link-icon"></div></a><a class="social-link w-inline-block" href="https://open.spotify.com/user/31qsdlftcrlk745coxgyopd3ksly?si=879379c9297a466c" target="_blank"><div>Spotify</div><div class="link-icon"></div></a></div>', 1)
  , j = s("img", {
    alt: "",
    class: "c-img",
    src: D
}, null, -1)
  , G = {
    class: "footer-footnote"
}
  , Y = {
    class: "footer-copyright w-embed w-script"
}
  , $ = {
    class: "footer-link_wrapper"
}
  , K = s("div", null, "Privacy Policy", -1)
  , O = s("div", null, "Terms and conditions", -1)
  , J = x({
    __name: "FooterNav",
    props: {
        showCta: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["on-show-contact"],
    setup(k, {emit: m}) {
        const v = m
          , _ = b(()=>new Date().getFullYear())
          , f = ()=>{
            v("on-show-contact")
        }
        ;
        return (t,r)=>{
            const a = Z
              , o = A;
            return y(),
            T("footer", B, [s("div", R, [s("div", W, [s("div", V, [s("div", z, [L, s("div", F, [I, t.showCta ? (y(),
            C(a, {
                key: 0,
                "data-tag": "",
                onClick: f
            }, {
                default: l(()=>[S(" Start a conversation ")]),
                _: 1
            })) : E("", !0)])]), M, p(o, {
                "aria-current": "page",
                class: "footer-logo w-inline-block w--current",
                to: "/"
            }, {
                default: l(()=>[j]),
                _: 1
            }), s("div", G, [s("div", Y, " © " + P(q(_)) + " Check Design Company. All Rights Reserved. ", 1), s("div", $, [p(o, {
                class: "footer-link w-inline-block",
                to: "https://docs.google.com/document/d/1Ds0z5CPtEYt67HwW8WDW6Ng7Hh5RTAgxv9f1SC66q2k/edit#heading=h.2uqqbhvde45s"
            }, {
                default: l(()=>[K]),
                _: 1
            }), p(o, {
                class: "footer-link w-inline-block",
                to: "https://docs.google.com/document/d/1wWSwShc3NqZccEXKs5w8Rfi_XuQ1aFblOiGwS67d1Cw/edit"
            }, {
                default: l(()=>[O]),
                _: 1
            })])])])])])])
        }
    }
});
e.registerPlugin(c);
const g = N()
  , h = []
  , u = []
  , ee = ()=>H({
    setReveal: t=>{
        e.registerPlugin(SplitText),
        e.registerPlugin(CustomEase),
        e.registerPlugin(GSDevTools);
        const r = document.querySelectorAll("[data-reveal-header]")
          , a = document.querySelectorAll("[data-reveal-paragraph]")
          , o = document.querySelectorAll("[data-reveal-tag]");
        r.length && (e.set(r, {
            visibility: "visible",
            opacity: 1
        }),
        r.forEach(i=>{
            const n = new SplitText(i,{
                type: "lines",
                linesClass: "header-line"
            })
              , d = new SplitText(i,{
                type: "lines",
                linesClass: "header-line-parent"
            })
              , w = e.timeline({
                delay: t || 0
            });
            w.fromTo(d.lines, {
                translateZ: "90px",
                rotateX: "-80deg",
                scale: 1.2
            }, {
                translateZ: "0px",
                rotateX: "0deg",
                scale: 1,
                stagger: .1
            }),
            w.fromTo(n.lines, {
                yPercent: 100,
                translateZ: "90px",
                rotateX: "-60deg",
                scale: .8
            }, {
                duration: .83,
                yPercent: 2,
                translateZ: "0px",
                rotateX: "0deg",
                scale: 1,
                stagger: .1,
                ease: CustomEase.create("blur", ".17, .17, 0, 1")
            }, "<"),
            window.addEventListener("resize", ()=>{
                d.revert(),
                n.revert()
            }
            )
        }
        )),
        a.length && (e.set(a, {
            visibility: "visible",
            opacity: 1
        }),
        a.forEach(i=>{
            const n = new SplitText(i,{
                type: "lines",
                linesClass: "paragraph-line"
            });
            e.timeline({
                delay: t || 0
            }).from(n.lines, {
                duration: .94,
                opacity: 0,
                filter: "blur(9px)",
                y: "50px",
                ease: CustomEase.create("blur", ".17, .17, 0, 1"),
                stagger: .1
            }),
            window.addEventListener("resize", ()=>{
                n.revert()
            }
            )
        }
        )),
        o.length && (e.set(o, {
            visibility: "visible",
            opacity: 1
        }),
        o.forEach(i=>{
            e.timeline({
                delay: t || 0
            }).from(i, {
                opacity: 0,
                yPercent: 100,
                duration: .9,
                ease: CustomEase.create("tags", ".17, .17, 0, 1")
            })
        }
        ))
    }
    ,
    setParagraph: ()=>{
        c.refresh(),
        g.checkDevice(),
        e.registerPlugin(SplitText),
        e.registerPlugin(CustomEase),
        document.fonts.ready.then(()=>{
            const t = document.querySelectorAll("[data-paragraph]");
            e.set(t, {
                visibility: "visible",
                opacity: 1
            });
            const r = e.context(()=>{
                t.forEach(a=>{
                    const o = new SplitText(a,{
                        type: "lines",
                        linesClass: "paragraph-line"
                    });
                    e.timeline({
                        scrollTrigger: {
                            trigger: a,
                            start: "top 90%"
                        }
                    }).from(o.lines, {
                        duration: .94,
                        opacity: 0,
                        filter: "blur(9px)",
                        y: "50px",
                        ease: CustomEase.create("blur", ".17, .17, 0, 1"),
                        stagger: .1
                    }),
                    h.push(o)
                }
                )
            }
            );
            u.push(r)
        }
        )
    }
    ,
    setHeader: ()=>{
        c.refresh(),
        g.checkDevice(),
        e.registerPlugin(SplitText),
        e.registerPlugin(CustomEase),
        document.fonts.ready.then(()=>{
            const t = document.querySelectorAll("[data-header]");
            e.set(t, {
                visibility: "visible",
                opacity: 1
            });
            const r = e.context(()=>{
                t.forEach(a=>{
                    const o = new SplitText(a,{
                        type: "lines",
                        linesClass: "header-line"
                    })
                      , i = new SplitText(a,{
                        type: "lines",
                        linesClass: "header-line-parent"
                    })
                      , n = e.timeline({
                        scrollTrigger: {
                            trigger: a,
                            start: "top 90%"
                        }
                    });
                    n.fromTo(i.lines, {
                        translateZ: "90px",
                        rotateX: "-80deg",
                        scale: 1.2
                    }, {
                        translateZ: "0px",
                        rotateX: "0deg",
                        scale: 1,
                        stagger: .1
                    }),
                    n.fromTo(o.lines, {
                        yPercent: 100,
                        translateZ: "90px",
                        rotateX: "-60deg",
                        scale: .8
                    }, {
                        duration: .83,
                        yPercent: 3,
                        translateZ: "0px",
                        rotateX: "0deg",
                        scale: 1,
                        stagger: .1,
                        ease: CustomEase.create("blur", ".17, .17, 0, 1")
                    }, "<"),
                    h.push(i, o)
                }
                )
            }
            );
            u.push(r)
        }
        )
    }
    ,
    setTag: ()=>{
        c.refresh(),
        g.checkDevice(),
        document.querySelectorAll("[data-tag]").forEach(r=>{
            e.timeline({
                scrollTrigger: {
                    trigger: r,
                    start: "top 92%"
                }
            }).from(r, {
                opacity: 0,
                yPercent: 100,
                duration: .9,
                ease: CustomEase.create("tags", ".17, .17, 0, 1")
            })
        }
        )
    }
    ,
    revertText: ()=>{
        u.forEach(t=>{
            t.revert()
        }
        ),
        h.forEach(t=>{
            t.revert()
        }
        )
    }
});
export {J as _, ee as u};