import { A as e, N as t, O as n, P as r, Q as i, S as a, W as o, at as s, c, ct as l, et as u, ft as d, h as f, ht as p, k as m, ot as h, r as g } from "./vlibras-initial-TiYwpGfM.js";
import { i as _, n as v, r as y, t as b } from "./dialog-BC0EuQVc.js";
// src/widget/utils/feedback/index.ts
var x = () => {
	f("OBRIGADO", `${u.getState().path}/assets/bundles/`), a("Agradecemos sua contribuição!", {
		variant: "primary",
		className: "font-semibold"
	}), n.set({ text: void 0 });
}, S = ({ isPending: n, isMobile: r, onConfirm: i, onCancel: a }) => /* @__PURE__ */ o("div", {
	className: "mobile:mt-2 mt-4 flex w-full animate-move-up flex-col items-center gap-2 [&>button]:w-full [&>button]:rounded-full",
	children: [/* @__PURE__ */ o(e, {
		disabled: n,
		onClick: i,
		size: r ? "default" : "lg",
		className: "w-full",
		children: [n ? /* @__PURE__ */ o(t, { className: "text-primary-foreground" }) : /* @__PURE__ */ o(m, { name: "like" }), n ? "Enviando" : "Confirmar"]
	}), /* @__PURE__ */ o(e, {
		disabled: n,
		onClick: a,
		variant: "outline-gov",
		size: r ? "default" : "lg",
		children: "Voltar"
	})]
}), C = ({ isPending: t, onLike: n, onDislike: r }) => /* @__PURE__ */ o("div", {
	className: "flex animate-move-down items-center justify-center gap-4 mobile:text-sm text-base [&>button]:flex-col [&>button]:text-muted-foreground",
	children: [/* @__PURE__ */ o(e, {
		disabled: t,
		variant: "ghost",
		size: "icon-xl",
		className: "px-7 py-10 font-semibold hover:bg-primary/5 hover:text-primary",
		onClick: n,
		children: [/* @__PURE__ */ o(m, { name: "thumbs-up" }), "Sim"]
	}), /* @__PURE__ */ o(e, {
		disabled: t,
		variant: "ghost",
		size: "icon-xl",
		className: "px-7 py-10 font-semibold hover:bg-destructive/5 hover:text-destructive",
		onClick: r,
		children: [/* @__PURE__ */ o(m, { name: "thumbs-down" }), "Não"]
	})]
}), w = s(() => import("./feedback-suggestion-Ben7qq_q.js").then((e) => ({ default: e.FeedbackSuggestion }))), T = ({ open: e, onOpenChange: t }) => {
	let a = i(), [s, u] = d(), [f, m] = d(!1), T = c((e) => e.reopen), { mutateAsync: E, isPending: D } = g();
	l(() => void (e && m(!1)), [e]);
	let O = () => {
		t(!1), u(!0);
	};
	return l(() => void (T && O()), [T]), /* @__PURE__ */ o(p, { children: [/* @__PURE__ */ o(b, {
		open: e || D,
		onOpenChange: t,
		children: /* @__PURE__ */ o(v, { children: [/* @__PURE__ */ o(y, {
			closeProps: { "aria-label": "Fechar feedback" },
			children: /* @__PURE__ */ o(_, {
				icon: "comment",
				children: "Feedback"
			})
		}), /* @__PURE__ */ o("div", {
			className: "flex flex-col items-center justify-center gap-2 p-6",
			children: [/* @__PURE__ */ o("p", {
				className: "font-semibold mobile:text-sm text-base",
				children: f ? "Confirmar avaliação positiva?" : "Gostou da tradução?"
			}), f ? /* @__PURE__ */ o(S, {
				isPending: D,
				isMobile: a,
				onConfirm: () => {
					let { gloss: e } = r.get(), { text: i } = n.get();
					if (e && i) try {
						E({
							text: i,
							translation: e,
							review: e,
							rating: "good"
						});
					} finally {
						t(!1), m(!1), x();
					}
				},
				onCancel: () => m(!1)
			}) : /* @__PURE__ */ o(C, {
				isPending: D,
				onLike: () => m(!0),
				onDislike: O
			})]
		})] })
	}), s !== void 0 && /* @__PURE__ */ o(h, {
		fallback: null,
		children: /* @__PURE__ */ o(w, {
			open: s,
			onOpenChange: u
		})
	})] });
};
export { T as FeedbackDialog, x as t };
