import { A as e, G as t, Q as n, W as r, k as i, u as a, w as o } from "./vlibras-initial-TiYwpGfM.js";
// src/widget/screens/components.tsx
var s = ({ children: e, className: n, ...i }) => /* @__PURE__ */ r("div", {
	autofocus: !0,
	className: t("widget-radius absolute inset-0 z-999999 flex animate-move-right flex-col bg-background", n),
	...i,
	children: e
}), c = ({ children: e, className: n, ...i }) => {
	let { onPointerDown: o } = a();
	return /* @__PURE__ */ r("div", {
		className: "relative",
		children: [/* @__PURE__ */ r("div", {
			className: t("flex h-min items-center gap-3 border-b p-2 *:z-10", n),
			...i,
			children: [i.close && /* @__PURE__ */ r(l, {}), e]
		}), /* @__PURE__ */ r("div", {
			className: t("absolute inset-0 z-0 touch-none", "not-expanded:hover:cursor-move sm:hover:cursor-move"),
			onPointerDown: o
		})]
	});
}, l = ({ className: t, ...a }) => {
	let s = o((e) => e.closeAll), c = n();
	return /* @__PURE__ */ r(e, {
		"aria-label": "Fechar",
		onClick: s,
		variant: "outline",
		size: c ? "icon-sm" : "icon",
		className: t,
		...a,
		children: /* @__PURE__ */ r(i, { name: "arrow-left" })
	});
}, u = ({ children: e, className: n, ...i }) => /* @__PURE__ */ r("h3", {
	className: t("pointer-events-none font-semibold mobile:text-sm text-base", n),
	...i,
	children: e
}), d = ({ children: e, className: n, ...i }) => /* @__PURE__ */ r("div", {
	className: t("flex h-full flex-col gap-4 overflow-y-auto p-4", n),
	...i,
	children: e
});
export { u as i, d as n, c as r, s as t };
