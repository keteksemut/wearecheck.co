import {a0 as n, a1 as e, a2 as g} from "./Dsfj8rDd.js";
import {u as i} from "./BP_obRgz.js";
import {u as r} from "./VeJ1dDW1.js";
import "./D4gSWyDD.js";
const c = n(async(a,t)=>{
    let o, u;
    const s = i().value;
    if (a.path === "/logout" && !s.isLoggedIn)
        return e(t.path === "/logout" ? "/login" : t);
    if (a.path === "/logout")
        return [o,u] = g(()=>r("/auth/logout", {})),
        await o,
        u(),
        e("/login");
    if (a.path === "/login" && i().value.isLoggedIn)
        return e(t.path === "/login" ? "/" : t)
}
);
export {c as default};