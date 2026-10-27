import { A as e, E as t, F as n, G as r, O as i, P as a, Q as o, T as s, W as c, X as l, ct as u, ft as d, gt as f, it as p, k as m, m as h, mt as g, o as _, p as v } from "./vlibras-initial-TiYwpGfM.js";
// src/widget/components/ui/dialog.tsx
var y = f(null), b = ({ children: e }) => {
	let t = l(), i = g(y), a = n((e) => e.status === "playing"), [o, f] = d(!0);
	return u(() => void (a && !o && i?.onOpenChange(!1)), [a]), u(() => {
		let { appRoot: e, appContent: n } = s.get();
		if (!i || !n || !e) return;
		if (i.open) {
			f(!1), !i.nested && i.overlay && (n.inert = !0);
			let r = _(`[data-slot='dialog-wrapper']:not([id='dialog-${t}'])`, e);
			return r?.forEach((e) => e.inert = !0), () => {
				!i.nested && i.overlay && (n.inert = !1), r?.forEach((e) => e.inert = !1);
			};
		}
		let r = setTimeout(() => f(!0), 150);
		return () => clearTimeout(r);
	}, [
		i?.open,
		i?.overlay,
		i?.nested
	]), !i || o ? null : i.overlay ? /* @__PURE__ */ c("div", {
		id: `dialog-${t}`,
		"data-slot": "dialog-wrapper",
		"data-state": i.open ? "open" : "close",
		className: r("group absolute inset-0 z-99999 flex items-end bg-black/20", i.nested && "bg-transparent!"),
		onClick: () => i.onOpenChange(!1),
		children: e
	}) : /* @__PURE__ */ c("div", {
		className: "absolute inset-0 top-auto",
		children: e
	});
}, x = ({ nested: e = !1, overlay: t = !0, open: n, onOpenChange: r, children: o }) => {
	let [s, l] = d(!1), f = n ?? s, p = r ?? l;
	return u(() => {
		if (e) return;
		let { isPausedByUser: t } = i.get(), { gloss: n, isWelcomeFinished: r, status: o } = a.get();
		if (f && o === "playing") return v();
		if (!f && !t && (n || !r)) {
			let e = setTimeout(h, 300);
			return () => clearTimeout(e);
		}
	}, [f, e]), /* @__PURE__ */ c(y.Provider, {
		value: {
			open: f,
			onOpenChange: p,
			nested: e,
			overlay: t
		},
		children: o
	});
}, S = ({ children: e, ...t }) => {
	let n = g(y);
	if (!n) throw Error("DialogTrigger deve estar dentro de <Dialog />");
	return /* @__PURE__ */ c("button", {
		type: "button",
		onClick: () => n.onOpenChange(!0),
		...t,
		children: e
	});
}, C = ({ className: t, children: n, closeProps: i, showCloseButton: a = !0, ...s }) => {
	let l = g(y), u = o();
	return /* @__PURE__ */ c("div", {
		"data-slot": "dialog-header",
		className: r("flex items-start gap-2 border-b p-2.5 mobile:py-2 pl-4", t),
		...s,
		children: [n, a && /* @__PURE__ */ c(e, {
			"aria-label": "Fechar diálogo",
			"data-slot": "dialog-close",
			onClick: () => l?.onOpenChange(!1),
			size: u ? "icon-xs" : "icon-sm",
			variant: "ghost",
			...i,
			children: /* @__PURE__ */ c(m, { name: "x" })
		})]
	});
}, w = ({ children: e, icon: t, className: n, ...i }) => /* @__PURE__ */ c("h3", {
	"data-slot": "dialog-title",
	className: r("relative mt-0.75 mr-auto flex items-center gap-1.5 overflow-hidden font-semibold mobile:text-sm text-base leading-normal", n),
	...i,
	children: [t && /* @__PURE__ */ c(m, {
		name: t,
		className: "relative -bottom-px mobile:size-4.5 size-5 shrink-0"
	}), /* @__PURE__ */ c("div", {
		className: "truncate break-all",
		children: e
	})]
}), T = ({ children: e, className: n, ...i }) => {
	let a = g(y), o = t((e) => e.appRoot);
	return !a || !o ? null : p(/* @__PURE__ */ c(b, { children: /* @__PURE__ */ c("div", {
		"data-slot": "dialog-content",
		role: "dialog",
		"aria-modal": "true",
		className: r("dialog-content widget-radius relative flex max-h-full w-full animate-move-up flex-col border bg-background", "transition-[margin] duration-500 ease-in-out group-data-[state=close]:-mb-100", n),
		style: { boxShadow: "0 -5px 10px -5px rgba(0, 0, 0, 0.15)" },
		onClick: (e) => e.stopPropagation(),
		...i,
		children: typeof e == "function" ? e(a) : e
	}) }), o);
};
export { S as a, w as i, T as n, C as r, x as t };
