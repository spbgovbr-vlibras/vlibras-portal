import { $ as e, A as t, D as n, N as r, W as i, ct as a, d as o, f as s, ft as c, ht as l, k as u, m as d, t as f, ut as p, y as m } from "./vlibras-initial-TiYwpGfM.js";
import { i as h, n as g, r as _, t as v } from "./dialog-BC0EuQVc.js";
// src/widget/utils/index.ts
var y = (e) => e.trim() ? /[\p{L}\p{N}]/u.test(e) : !1, b = ({ open: b, onOpenChange: x }) => {
	let S = p(null), C = n((e) => e.isTranslating), [w, T] = c(""), { mutateAsync: E, isPending: D } = f(), O = e(T, 300), k = y(w);
	a(() => void (b && m.trackEvent("open_translator")), [b]);
	let A = async () => {
		let e = S.current?.value || "";
		if (e) try {
			let t = await E(e);
			d(t || e), x(!1), s({
				action: () => x(!0),
				content: /* @__PURE__ */ i(l, { children: [/* @__PURE__ */ i(u, { name: "translator" }), "Reabrir Tradutor"] })
			});
		} catch (e) {
			console.error("Falha ao traduzir/reproduzir o texto do tradutor: ", e);
		}
	};
	return /* @__PURE__ */ i(v, {
		open: b,
		onOpenChange: x,
		children: /* @__PURE__ */ i(g, { children: [/* @__PURE__ */ i(_, {
			closeProps: { "aria-label": "Fechar tradutor" },
			children: /* @__PURE__ */ i(h, {
				icon: "translator",
				children: "Tradutor"
			})
		}), /* @__PURE__ */ i("div", {
			className: "space-y-2 overflow-y-auto p-4 pt-2",
			children: [/* @__PURE__ */ i("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ i("div", {
					className: "flex h-8 items-center justify-between",
					children: [/* @__PURE__ */ i("label", {
						htmlFor: "translator-text",
						className: "font-semibold text-sm",
						children: ["Insira seu texto", /* @__PURE__ */ i(o, {
							gloss: "INSERIR TEXTO",
							onFinish: () => x(!0)
						})]
					}), w.length > 0 && /* @__PURE__ */ i(t, {
						"aria-label": "Limpar texto",
						onClick: () => {
							S.current && (S.current.value = "", S.current?.focus(), T(""));
						},
						size: "icon-xs",
						variant: "ghost",
						className: "animate-move-up text-destructive",
						children: /* @__PURE__ */ i(u, { name: "trash" })
					})]
				}), /* @__PURE__ */ i("textarea", {
					defaultValue: w,
					ref: S,
					onKeyPress: (e) => {
						e.key === "Enter" && (e.preventDefault(), w.length >= 3 && A());
					},
					onChange: (e) => O(e.currentTarget.value),
					name: "text",
					id: "translator-text",
					className: "h-32 w-full resize-none rounded-lg border bg-muted p-2 text-sm"
				})]
			}), /* @__PURE__ */ i(t, {
				onClick: A,
				disabled: w.length < 3 || C || D || !k,
				className: "h-10 w-full rounded-full text-sm",
				children: [D && /* @__PURE__ */ i(r, { className: "size-4 text-primary-foreground" }), D ? "Traduzindo..." : "Traduzir"]
			})]
		})] })
	});
};
export { b as TranslatorDialog };
