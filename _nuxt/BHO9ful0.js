import {d as M, r as X, o as Z, a as q, c as p, e as C, i as t, C as m, F as D, A as S, h as w, I as A, k as F, S as U, g as u, U as $, q as x, s as G, t as L} from "./Dsfj8rDd.js";
import {u as N} from "./DVefFu0y.js";
import {q as B} from "./-ltxHi4D.js";
const O = y=>(x("data-v-8dab87f4"),
y = y(),
G(),
y)
  , R = {
    key: 0,
    class: "c-project w-inline-block disabled"
}
  , V = {
    class: "project-thumbnail disabled"
}
  , z = {
    class: "thumbnail-img_block"
}
  , J = ["src"]
  , K = O(()=>t("div", {
    class: "prompt"
}, "Coming Soon", -1))
  , Q = ["src"]
  , Y = {
    class: "project-details"
}
  , ee = {
    class: "project-name"
}
  , te = {
    class: "project-description"
}
  , se = {
    class: "project-tag_wrapper"
}
  , oe = {
    class: "project-thumbnail"
}
  , ae = {
    class: "thumbnail-img_block"
}
  , re = ["src"]
  , le = ["src"]
  , ie = {
    class: "project-details"
}
  , ce = {
    class: "project-name"
}
  , ne = {
    class: "project-description"
}
  , de = {
    class: "project-tag_wrapper"
}
  , pe = M({
    __name: "Project",
    props: {
        project: {
            default: void 0
        },
        disabled: {
            type: Boolean,
            default: !1
        }
    },
    setup(y) {
        let E, k;
        const T = []
          , P = N()
          , c = X(null)
          , I = e=>{
            var r, s;
            const o = e.currentTarget
              , l = (r = o.firstElementChild) == null ? void 0 : r.lastElementChild
              , i = (s = o.firstElementChild) == null ? void 0 : s.firstElementChild;
            l.hasAttribute("src") && (i.style.opacity = "0",
            E = l.play())
        }
          , W = e=>{
            var r, s;
            const o = e.currentTarget
              , l = (r = o.firstElementChild) == null ? void 0 : r.lastElementChild
              , i = (s = o.firstElementChild) == null ? void 0 : s.firstElementChild;
            i.style.opacity = "1",
            E !== void 0 && E.then(n=>{
                l.pause(),
                l.currentTime = 0
            }
            ).catch(()=>{}
            )
        }
          , H = ()=>{
            var e, o, l, i, r;
            if (P.checkDevice(),
            U.refresh(!0),
            u.registerPlugin(CustomEase, GSDevTools),
            c.value) {
                const s = (e = c.value.firstElementChild) == null ? void 0 : e.firstElementChild
                  , n = (l = (o = c.value.lastElementChild) == null ? void 0 : o.firstElementChild) == null ? void 0 : l.firstElementChild
                  , h = (r = (i = c.value.lastElementChild) == null ? void 0 : i.firstElementChild) == null ? void 0 : r.lastElementChild
                  , j = c.value.querySelectorAll(".project-tag");
                k = u.context(()=>{
                    const d = u.timeline({
                        scrollTrigger: {
                            trigger: s,
                            start: "top 85%"
                        }
                    });
                    d.to(s, {
                        "clip-path": "polygon(18% 0%, 100% 26%, 100% 74%, 100% 100%, 0% 100%, 0% 85%, 0% 0%)"
                    }),
                    d.to(s, {
                        "clip-path": "polygon(55% 0%, 100% 0%, 100% 76%, 100% 100%, 0% 100%, 0% 83%, 0% 0%)"
                    }, "<+0.4"),
                    d.to(s == null ? void 0 : s.firstElementChild, {
                        scale: 1,
                        duration: 1.5,
                        ease: CustomEase.create("scale", ".17, .17, 0, 1")
                    }, 0),
                    d.to(s == null ? void 0 : s.firstElementChild, {
                        opacity: 1,
                        duration: 1,
                        ease: CustomEase.create("opacity", ".17, .17, 0, 1")
                    }, 0);
                    const a = new SplitText(h,{
                        type: "lines",
                        linesClass: "paragraph-line"
                    });
                    u.timeline({
                        scrollTrigger: {
                            trigger: h,
                            start: "top 90%"
                        }
                    }).from(a.lines, {
                        duration: .94,
                        opacity: 0,
                        filter: "blur(9px)",
                        y: "50px",
                        ease: CustomEase.create("blur", ".17, .17, 0, 1"),
                        stagger: .1
                    });
                    const g = new SplitText(n,{
                        type: "lines",
                        linesClass: "header-line"
                    })
                      , v = new SplitText(n,{
                        type: "lines",
                        linesClass: "header-line-parent"
                    })
                      , f = u.timeline({
                        scrollTrigger: {
                            trigger: n,
                            start: "top 90%"
                        }
                    });
                    f.fromTo(v.lines, {
                        translateZ: "90px",
                        rotateX: "-80deg",
                        scale: 1.2
                    }, {
                        translateZ: "0px",
                        rotateX: "0deg",
                        scale: 1,
                        stagger: .1
                    }),
                    f.fromTo(g.lines, {
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
                    T.push(a, v, g),
                    j.forEach(_=>{
                        u.timeline({
                            scrollTrigger: {
                                trigger: _,
                                start: "top 85%"
                            }
                        }).from(_, {
                            opacity: 0,
                            yPercent: 100,
                            duration: .9,
                            ease: CustomEase.create("tags", ".17, .17, 0, 1")
                        })
                    }
                    )
                }
                )
            }
        }
        ;
        return Z(()=>{
            setTimeout(()=>{
                H()
            }
            , 100)
        }
        ),
        q(()=>{
            k.revert(),
            T.forEach(e=>{
                e.revert()
            }
            )
        }
        ),
        (e,o)=>{
            var i, r, s, n, h, j, d;
            const l = $;
            return e.disabled ? (p(),
            C("div", R, [t("div", {
                ref_key: "block",
                ref: c
            }, [t("div", V, [t("div", z, [t("img", {
                alt: "",
                class: "c-img cc-cover",
                src: (i = e.project) == null ? void 0 : i.fieldData["cover-image"].url
            }, null, 8, J), K]), t("video", {
                class: "project-thumbnail_video",
                loop: "",
                muted: "",
                src: (r = e.project) == null ? void 0 : r.fieldData["cover-hover-video-link"]
            }, null, 8, Q)]), t("div", Y, [t("div", null, [t("div", ee, m((s = e.project) == null ? void 0 : s.fieldData.name), 1), t("div", te, m((n = e.project) == null ? void 0 : n.fieldData.summary), 1)]), t("div", se, [(p(!0),
            C(D, null, S(("splitWordsByCommas"in e ? e.splitWordsByCommas : w(B))((h = e.project) == null ? void 0 : h.fieldData.tags), a=>(p(),
            C("div", {
                key: a,
                class: "project-tag"
            }, [t("div", null, m(a), 1)]))), 128))])])], 512)])) : (p(),
            A(l, {
                key: 1,
                class: "c-project w-inline-block",
                to: `/work/${(j = e.project) == null ? void 0 : j.fieldData.slug}?id=${(d = e.project) == null ? void 0 : d.id}`,
                onMouseout: o[0] || (o[0] = a=>W(a)),
                onMouseover: o[1] || (o[1] = a=>I(a))
            }, {
                default: F(()=>{
                    var a, b, g, v, f;
                    return [t("div", {
                        ref_key: "block",
                        ref: c
                    }, [t("div", oe, [t("div", ae, [t("img", {
                        alt: "",
                        class: "c-img cc-cover",
                        src: (a = e.project) == null ? void 0 : a.fieldData["cover-image"].url
                    }, null, 8, re)]), t("video", {
                        class: "project-thumbnail_video",
                        loop: "",
                        muted: "",
                        src: (b = e.project) == null ? void 0 : b.fieldData["cover-hover-video-link"]
                    }, null, 8, le)]), t("div", ie, [t("div", null, [t("div", ce, m((g = e.project) == null ? void 0 : g.fieldData.name), 1), t("div", ne, m((v = e.project) == null ? void 0 : v.fieldData.summary), 1)]), t("div", de, [(p(!0),
                    C(D, null, S(("splitWordsByCommas"in e ? e.splitWordsByCommas : w(B))((f = e.project) == null ? void 0 : f.fieldData.tags), _=>(p(),
                    C("div", {
                        key: _,
                        class: "project-tag"
                    }, [t("div", null, m(_), 1)]))), 128))])])], 512)]
                }
                ),
                _: 1
            }, 8, ["to"]))
        }
    }
})
  , ve = L(pe, [["__scopeId", "data-v-8dab87f4"]]);
export {ve as _};