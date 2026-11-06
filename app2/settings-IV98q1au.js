import { A as e, D as t, F as n, G as r, I as i, J as a, K as o, O as s, P as c, Q as l, W as u, ct as d, d as f, dt as p, ht as m, j as h, k as g, l as _, ut as v, y } from "./vlibras-initial-TiYwpGfM.js";
import { t as b } from "./zus-context-D0fmRUCc.js";
import { a as x, i as S, n as C, r as w, t as T } from "./dialog-BC0EuQVc.js";
// src/widget/dialogs/settings/context.ts
var { Provider: E, useCtx: D } = b(), O = () => {
	let e = v(null), n = t((e) => e.opacity), r = D((e) => e.onOpen), i = Number(n) * 100;
	d(() => () => {
		e.current && clearTimeout(e.current);
	}, []);
	let a = (t) => {
		s.set({ opacity: t / 100 }), e.current && clearTimeout(e.current), e.current = setTimeout(() => y.trackEvent("opacity_change", { opacity: t }), 2e3);
	};
	return /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ u("div", {
		className: "flex w-full items-center justify-between mobile:text-sm text-base",
		children: [/* @__PURE__ */ u("p", {
			className: "mobile:text-sm text-base",
			children: ["Opacidade", /* @__PURE__ */ u(f, {
				gloss: "OPACIDADE",
				onFinish: r
			})]
		}), /* @__PURE__ */ u("span", {
			className: "font-semibold",
			children: [Math.round(Number(n) * 100), "%"]
		})]
	}), /* @__PURE__ */ u("input", {
		type: "range",
		min: 0,
		max: 100,
		step: 5,
		value: i,
		onChange: (e) => a(Number(e.currentTarget.value)),
		onPointerDown: (e) => e.stopPropagation(),
		className: "range-slider",
		style: { background: `linear-gradient(to right, var(--color-primary, #3b82f6) ${i}%, var(--color-muted, #e2e8f0) ${i}%)` }
	})] });
}, k = ({ isSelected: e, region: t, onSelect: n }) => /* @__PURE__ */ u("button", {
	inert: e,
	type: "button",
	onClick: n,
	className: r("flex w-full cursor-pointer items-center justify-between whitespace-nowrap rounded-lg p-1.5 pr-3 transition-[colors] hover:bg-muted", e && "order-first"),
	children: [/* @__PURE__ */ u("div", {
		className: "flex items-center justify-start gap-2 font-semibold mobile:text-xs text-secondary text-sm dark:text-white",
		children: [/* @__PURE__ */ u("img", {
			src: a(t.flag),
			alt: t.name,
			className: "h-7 mobile:h-6 w-auto rounded-sm border"
		}), /* @__PURE__ */ u("span", { children: t.name })]
	}), /* @__PURE__ */ u("input", {
		inert: !0,
		type: "radio",
		name: `region-${t.abbreviation}`,
		className: "radio mobile:size-4 size-5 border border-primary bg-transparent! p-0.75! text-primary",
		checked: e
	})]
}, t.abbreviation), A = () => {
	let e = n((e) => e.region), t = D((e) => e.onOpen), o = (e) => {
		c.set({ region: e }), y.trackEvent("change_region", { region: `${e.name} (${e.abbreviation})` });
	};
	return /* @__PURE__ */ u("div", {
		className: "flex w-full items-center justify-between",
		children: [/* @__PURE__ */ u("p", {
			className: "mobile:text-sm text-base",
			children: ["Regionalismo", /* @__PURE__ */ u(f, {
				gloss: "REGIÃO",
				onFinish: t
			})]
		}), /* @__PURE__ */ u(T, {
			nested: !0,
			children: [/* @__PURE__ */ u(x, {
				className: r(h({ variant: "ghost" }), "h-auto border p-1"),
				children: [/* @__PURE__ */ u("span", {
					className: "ml-1 font-semibold mobile:text-xs text-sm",
					children: e.abbreviation
				}), /* @__PURE__ */ u("img", {
					className: "h-6 mobile:h-6 rounded-sm border",
					src: a(e.flag),
					alt: e.name
				})]
			}), /* @__PURE__ */ u(C, {
				className: "max-h-[70%]",
				children: ({ onOpenChange: t }) => /* @__PURE__ */ u(m, { children: [/* @__PURE__ */ u(w, {
					closeProps: { "aria-label": "Fechar regionalismo" },
					children: /* @__PURE__ */ u(S, { children: "Regionalismo" })
				}), /* @__PURE__ */ u("div", {
					className: "flex flex-col overflow-y-auto p-1",
					children: i.map((n) => /* @__PURE__ */ u(k, {
						onSelect: () => {
							o(n), t(!1);
						},
						isSelected: n === e,
						region: n
					}))
				})] })
			})]
		})]
	});
}, j = () => {
	let e = o((e) => e.theme), t = D((e) => e.onOpen);
	return /* @__PURE__ */ u("div", {
		className: "flex w-full items-start justify-between",
		children: [/* @__PURE__ */ u("p", {
			className: "mobile:text-sm text-base",
			children: ["Tema escuro", /* @__PURE__ */ u(f, {
				gloss: "TEMA ESCURO",
				onFinish: t
			})]
		}), /* @__PURE__ */ u("input", {
			type: "checkbox",
			onChange: () => {
				let { theme: e, toggleTheme: t } = o.getState(), n = e === "dark" ? "Claro" : "Escuro";
				t(), y.trackEvent("theme", { theme: n });
			},
			checked: e === "dark",
			className: "toggle toggle-sm rounded-full bg-accent text-primary before:size-4 before:rounded-full not-checked:before:bg-background checked:bg-primary checked:text-primary-foreground"
		})]
	});
}, M = ({ open: r, onOpenChange: a }) => {
	let d = l(), f = n((e) => e.region), h = t((e) => e.opacity), { theme: v, setTheme: y } = o(), b = () => {
		let e = i[0];
		y("light"), c.set({ region: e }), s.set({ opacity: 1 });
	}, x = p(() => f.abbreviation === "BR" && h === 1 && v === "light", [
		f,
		h,
		v
	]);
	return /* @__PURE__ */ u(E, {
		data: {
			onOpen: () => a(!0),
			onClose: () => a(!1)
		},
		children: /* @__PURE__ */ u(T, {
			open: r,
			onOpenChange: a,
			children: /* @__PURE__ */ u(C, { children: [/* @__PURE__ */ u(w, {
				className: "relative",
				closeProps: { "aria-label": "Fechar configurações" },
				children: [/* @__PURE__ */ u(S, {
					icon: "settings",
					children: "Configurações"
				}), !x && /* @__PURE__ */ u(m, { children: [/* @__PURE__ */ u(_, {
					className: "-mr-1",
					align: "end",
					placement: "bottom",
					content: "Redefinir",
					arrow: { position: "top-right" },
					children: /* @__PURE__ */ u(e, {
						onClick: b,
						variant: "ghost",
						size: d ? "icon-xs" : "icon-sm",
						className: "animate-move-up mobile:text-xs text-sm",
						children: /* @__PURE__ */ u(g, { name: "rotate-left" })
					})
				}), /* @__PURE__ */ u("div", { children: /* @__PURE__ */ u("span", { className: "absolute inset-y-0 w-px bg-border" }) })] })]
			}), /* @__PURE__ */ u("div", {
				className: "space-y-4 p-4",
				children: [
					/* @__PURE__ */ u(j, {}),
					/* @__PURE__ */ u(A, {}),
					/* @__PURE__ */ u(O, {})
				]
			})] })
		})
	});
};
export { M as SettingsDialog };
