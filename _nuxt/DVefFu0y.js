import {r as s, v as r} from "./Dsfj8rDd.js";
const n = ()=>{
    const e = s(!1)
      , i = ()=>{
        window.innerWidth <= 767 ? e.value = !0 : e.value = !1
    }
    ;
    return window.addEventListener("resize", ()=>{
        i()
    }
    ),
    r({
        isMobile: e,
        checkDevice: i
    })
}
;
export {n as u};