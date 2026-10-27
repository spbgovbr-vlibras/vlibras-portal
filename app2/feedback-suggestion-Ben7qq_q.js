import { $ as e, A as t, D as n, O as r, P as i, Q as a, W as o, ct as s, dt as c, f as l, ft as u, h as d, n as f, pt as p, r as m, s as h, ut as g } from "./vlibras-initial-TiYwpGfM.js";
import { t as _ } from "./trie-BK0pRT-V.js";
import { i as v, n as y, r as b, t as x } from "./dialog-BC0EuQVc.js";
import { t as S } from "./feedback-CH9eb3sQ.js";
// src/widget/dialogs/feedback/lib/suggestions.ts
function C(e, t) {
	let n = e.slice(0, t).lastIndexOf(" "), r = e.indexOf(" ", t);
	return e.slice(n + 1, r === -1 ? e.length : r);
}
function w(e, t, n) {
	let r = e.slice(0, t), i = e.slice(t);
	return `${r.replace(/\S+$/, `${n} `)}${i.trimStart()}`;
}
function T(e, t) {
	let n = window.getComputedStyle(e), r = document.createElement("div");
	r.style.position = "absolute", r.style.visibility = "hidden", r.style.whiteSpace = "pre-wrap", r.style.wordWrap = "break-word", r.style.width = `${e.clientWidth}px`, r.style.font = n.font, r.style.padding = n.padding, r.style.lineHeight = n.lineHeight, r.style.letterSpacing = n.letterSpacing, r.textContent = e.value.slice(0, t);
	let i = document.createElement("span");
	i.textContent = "|", r.appendChild(i), document.body.appendChild(r);
	let a = e.parentElement?.clientWidth ?? e.clientWidth, o = i.offsetLeft + 15;
	o + 160 > a && (o = i.offsetLeft - 160), o = Math.max(0, o);
	let s = {
		top: i.offsetTop + Number.parseInt(n.lineHeight || "20", 10),
		left: o
	};
	return document.body.removeChild(r), s;
}
// src/widget/dialogs/feedback/suggestion-popup.tsx
var E = ({ suggestions: e, coords: t, onSelect: n }) => e.length === 0 ? null : /* @__PURE__ */ o("div", {
	className: "absolute z-50 flex max-h-30 max-w-45 flex-col gap-1 overflow-x-auto overflow-y-auto rounded-md border bg-background p-1 shadow-md",
	style: {
		top: `${t.top}px`,
		left: `${t.left}px`
	},
	children: e.map((e) => /* @__PURE__ */ o("button", {
		type: "button",
		onClick: () => n(e),
		className: "rounded px-2 py-1 text-left text-sm hover:cursor-pointer hover:bg-muted",
		children: e
	}, e))
}), D = ({ open: D, onOpenChange: O }) => {
	let k = g(null), A = a(), j = n((e) => e.text), { data: M } = f(), { mutateAsync: N, isPending: P } = m(), [F, I] = u([]), [L, R] = u({
		top: 0,
		left: 0
	}), [z, B] = u("");
	s(() => {
		let { draftValue: e } = h.get();
		B(e ?? i.get().gloss ?? ""), h.set({
			reopen: !1,
			draftValue: void 0
		});
	}, []);
	let V = c(() => M ? new _(M) : null, [M]), H = !z.trim(), U = e(() => {
		if (!k.current) return;
		let e = k.current, t = e.selectionStart ?? 0, n = e.value;
		B(n);
		let r = C(n, t);
		r.length < 2 ? I([]) : (I(V ? V.searchSigns(r) : []), R(T(e, t)));
	}, 300), W = () => {
		let { text: e } = r.get(), { gloss: t } = i.get();
		if (e && t && z) try {
			N({
				text: e,
				translation: t,
				review: z.toUpperCase(),
				rating: "bad"
			});
		} finally {
			O(!1), S();
		}
	}, G = (e) => {
		if (!k.current) return;
		let t = k.current.selectionStart ?? 0;
		B(w(z, t, e)), I([]), k.current.focus();
	}, K = p(() => {
		z && (d(z), l({
			action: () => h.set({
				reopen: !0,
				draftValue: z
			}),
			auto: !0
		}));
	}, [z]);
	return /* @__PURE__ */ o(x, {
		open: D,
		onOpenChange: O,
		children: /* @__PURE__ */ o(y, { children: [/* @__PURE__ */ o(b, {
			closeProps: { "aria-label": "Fechar sugestão de glosa" },
			children: /* @__PURE__ */ o(v, {
				icon: "comment",
				children: "Feedback"
			})
		}), /* @__PURE__ */ o("div", {
			className: "flex h-full flex-col gap-2 overflow-y-auto px-4 py-4",
			children: [
				!!j && /* @__PURE__ */ o("div", { children: /* @__PURE__ */ o("p", {
					title: j,
					className: "break-anywhere line-clamp-3 text-muted-foreground text-xs",
					children: [
						/* @__PURE__ */ o("strong", { children: "Texto traduzido:" }),
						" ",
						j
					]
				}) }),
				/* @__PURE__ */ o("div", {
					className: "flex items-center justify-between",
					children: /* @__PURE__ */ o("label", {
						for: "translator-input",
						className: "font-semibold text-sm",
						children: "Informe a glosa correta"
					})
				}),
				/* @__PURE__ */ o("div", {
					className: "relative",
					children: [/* @__PURE__ */ o("textarea", {
						ref: k,
						id: "translator-input",
						value: z,
						placeholder: "Digite aqui...",
						className: "h-40 mobile:h-32 w-full resize-none rounded-lg border bg-muted p-3 text-sm uppercase placeholder:normal-case",
						rows: A ? 4 : 6,
						onChange: U
					}), /* @__PURE__ */ o(E, {
						onSelect: G,
						suggestions: F,
						coords: L
					})]
				}),
				/* @__PURE__ */ o("div", {
					className: "space-y-2 [&>button]:h-10 [&>button]:w-full [&>button]:rounded-full mobile:[&>button]:text-sm",
					children: [/* @__PURE__ */ o(t, {
						variant: "default",
						onClick: W,
						disabled: P || H,
						children: P ? "Enviando..." : "Enviar sugestão"
					}), /* @__PURE__ */ o(t, {
						disabled: P || H,
						variant: "outline",
						onClick: K,
						children: "Reproduzir"
					})]
				})
			]
		})] })
	});
};
export { D as FeedbackSuggestion };
