import { $ as e, A as t, C as n, G as r, H as i, J as a, N as o, Q as s, U as c, W as l, Y as u, Z as d, ct as f, dt as p, f as m, ft as h, ht as g, i as _, k as v, m as y, n as b, nt as x, pt as S, q as C, t as w, ut as T, v as E, y as D } from "./vlibras-initial-TiYwpGfM.js";
import { t as O } from "./zus-context-D0fmRUCc.js";
import { t as ee } from "./trie-BK0pRT-V.js";
import { i as k, n as A, r as j, t as M } from "./components-C2LrfnNF.js";
// src/widget/screens/dictionary/actions/index.ts
var N = () => {
	let e = new AbortController();
	return {
		controller: e,
		timeoutId: setTimeout(() => e.abort(), E.REQUEST_TIMEOUT)
	};
}, te = async () => {
	let { controller: e, timeoutId: t } = N();
	try {
		let t = await fetch(`${E.DICTIONARY_CATEGORIES_URL}/tags`, {
			method: "GET",
			signal: e.signal
		});
		if (!t.ok) throw Error(`Erro na API: ${t.status}`);
		return {
			data: await t.json(),
			success: !0
		};
	} catch (e) {
		return console.error("Falha na busca pelas categorias: ", e), e.name === "AbortError" ? {
			success: !1,
			error: _.SIGNS_TIMEOUT_ERROR,
			code: "SIGNS_TIMEOUT_ERROR"
		} : {
			success: !1,
			error: _.SIGNS_ERROR,
			code: "SIGNS_ERROR"
		};
	} finally {
		clearTimeout(t);
	}
}, ne = async (e) => {
	let { controller: t, timeoutId: n } = N();
	try {
		let n = await fetch(`${E.DICTIONARY_CATEGORIES_URL}/tagsigns?tag=${e}`, {
			method: "GET",
			signal: t.signal
		});
		if (!n.ok) throw Error(`Erro na API: ${n.status}`);
		return {
			data: await n.json(),
			success: !0
		};
	} catch (e) {
		return console.error("Falha na busca pelos sinais da categoria: ", e), e.name === "AbortError" ? {
			success: !1,
			error: _.SIGNS_TIMEOUT_ERROR,
			code: "SIGNS_TIMEOUT_ERROR"
		} : {
			success: !1,
			error: _.SIGNS_ERROR,
			code: "SIGNS_ERROR"
		};
	} finally {
		clearTimeout(n);
	}
}, P = {
	3: "categories/measures",
	2: "categories/numbers",
	4: "categories/verbs",
	5: "categories/alphabet",
	6: "categories/foods",
	17: "categories/machines",
	11: "categories/feelings",
	19: "categories/health",
	12: "categories/body",
	13: "categories/animals",
	18: "categories/locations",
	24: "categories/jobs",
	8: "categories/countries",
	27: "categories/sports",
	26: "categories/family",
	25: "categories/nature",
	21: "categories/art",
	15: "categories/economy",
	22: "categories/education",
	16: "categories/people",
	7: "categories/religion",
	23: "categories/fashion",
	10: "categories/politics",
	20: "categories/communication",
	9: "categories/technology",
	14: "categories/adjective"
}, F = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")], I = {
	"1S_": "EU",
	"2S_": "VOCÊ",
	"3S_": "ELE(A)",
	"1P_": "NÓS",
	"2P_": "VOCÊS",
	"3P_": "ELES(AS)"
}, re = {
	_1S: "MIM",
	_2S: "VOCÊ",
	_3S: "ELE(A)",
	_1P: "NÓS",
	_2P: "VOCÊS",
	_3P: "ELES(AS)"
}, L = /* @__PURE__ */ "EU PARA MIM.EU PARA VOCÊ.EU PARA ELE(A).EU PARA NÓS.EU PARA VOCÊS.EU PARA ELES(AS).VOCÊ PARA MIM.VOCÊ PARA VOCÊ.VOCÊ PARA ELE(A).VOCÊ PARA NÓS.VOCÊ PARA VOCÊS.VOCÊ PARA ELES(AS).ELE(A) PARA MIM.ELE(A) PARA VOCÊ.ELE(A) PARA ELE(A).ELE(A) PARA NÓS.ELE(A) PARA VOCÊS.ELE(A) PARA ELES(AS).NÓS PARA MIM.NÓS PARA VOCÊ.NÓS PARA ELE(A).NÓS PARA NÓS.NÓS PARA VOCÊS.NÓS PARA ELES(AS).VOCÊS PARA MIM.VOCÊS PARA VOCÊ.VOCÊS PARA ELE(A).VOCÊS PARA NÓS.VOCÊS PARA VOCÊS.VOCÊS PARA ELES(AS).ELES(AS) PARA MIM.ELES(AS) PARA VOCÊ.ELES(AS) PARA ELE(A).ELES(AS) PARA NÓS.ELES(AS) PARA VOCÊS.ELES(AS) PARA ELES(AS)".split("."), R = /* @__PURE__ */ RegExp("^(1S_|2S_|3S_|1P_|2P_|3P_)?([A-ZÇÕÂÊÍÓÚ]+(?:_(?![123][SP])[A-ZÇÕÂÊÍÓÚ]+)*)(_1S|_2S|_3S|_1P|_2P|_3P)?$");
// src/widget/screens/dictionary/lib/alphabet.ts
function ie(e) {
	let t = {};
	for (let n of e) {
		let e = n.trim().charAt(0).toUpperCase();
		/[0-9]/.test(e) && (e = "#"), t[e] || (t[e] = []), t[e].push(n);
	}
	for (let e in t) t[e].sort((e, t) => e.localeCompare(t));
	return F.map((e) => ({
		letter: e,
		items: t[e] || []
	})).filter((e) => e.items.length > 0);
}
// src/widget/screens/dictionary/lib/group-signs.ts
function ae(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) {
		let e = n.includes("&") ? n.split("&", 1)[0] : n;
		t.has(e) || t.set(e, {
			base: e,
			variants: [],
			hasBase: !1
		});
		let r = t.get(e);
		r && (n.includes("&") ? r.variants.push(n) : r.hasBase = !0);
	}
	return Array.from(t.values());
}
function oe(e) {
	let t = {};
	for (let n of e) {
		let e = n.includes("&") ? n.split("&", 1)[0] : n.match(R)?.[2] ?? n;
		if (t[e] ??= {
			conjugation: [],
			desambiguation: []
		}, n.includes("&")) t[e].desambiguation.push(n);
		else {
			let e = n.match(R);
			if (e) {
				let r = e[1] ?? "", i = e[2], a = e[3] ?? "", o = I[r] ?? "", s = re[a] ?? "";
				o && s ? t[i].conjugation.push({
					original: n,
					transformed: `${o} PARA ${s}`,
					prefix: o,
					suffix: s
				}) : t[i].conjugation.unshift({
					original: n,
					transformed: n,
					prefix: o,
					suffix: s
				});
			}
		}
	}
	for (let e in t) t[e].conjugation.sort((e, t) => L.indexOf(e.transformed) - L.indexOf(t.transformed));
	return Object.fromEntries(Object.entries(t).sort(([e], [t]) => e.localeCompare(t)));
}
// src/widget/screens/dictionary/stores/use-dictionary.store.ts
var z = x()(c((e) => ({
	isMaxRetries: !1,
	retriesCount: 0
}), {
	name: "@vlibras/dictionary",
	version: 1,
	storage: i(() => sessionStorage),
	partialize: (e) => u(e, "isMaxRetries"),
	onRehydrateStorage: () => (e) => {
		e && (e.retriesCount = 0, e.isMaxRetries = !1);
	}
}));
z.getState, z.setState, z.subscribe;
// src/widget/screens/dictionary/stores/use-dictionary-history.store.ts
var B = x()(c(() => ({ signs: [""] }), {
	name: "@vlibras/dictionary-history",
	version: 1,
	storage: i(() => localStorage),
	partialize: (e) => e
})), V = {
	get: B.getState,
	set: B.setState,
	subscribe: B.subscribe
}, H = 50, se = () => {
	let t = T(null), n = T(null), r = T(null), i = z(), [a, o] = h("categories"), { data: s, isLoading: c, refetch: l } = b(), { signs: u } = B(), [m, g] = h(null), [_, v] = h(null), { data: y = [], isLoading: x } = d({
		queryKey: ["categories"],
		queryFn: te,
		select: ({ data: e }) => e.filter((e) => e.name !== "INDEFINIDO")
	}), { data: C = [], isLoading: w } = d({
		queryKey: ["categorySigns", m?.name],
		queryFn: () => ne(m?.name ?? ""),
		enabled: !!m,
		select: ({ data: e }) => e.signs.filter((e) => e !== "1S_FARTAR1S" && e !== "2S_ESCOLHER__1S")
	}), E = async () => {
		await l();
		let e = i.retriesCount + 1;
		z.setState({ retriesCount: e }), e >= 5 && z.setState({ isMaxRetries: !0 });
	}, D = p(() => s ? new ee(s).searchSigns("") : [], [s]), [{ filteredSigns: O, visibleCount: k, search: A }, j] = h({
		filteredSigns: [],
		search: "",
		visibleCount: H
	}), M = p(() => {
		if (!m) return [];
		let e = A.toLowerCase().trim(), t = new Set(C);
		return C.filter((n) => t.has(n) && (e === "" || n.toLowerCase().includes(e)));
	}, [
		m,
		D,
		A,
		C
	]), N = S((e) => {
		let t = e.toUpperCase().trim(), n = (a === "all" ? D : u).filter((e) => e.toUpperCase().includes(t));
		j((t) => ({
			...t,
			search: e,
			filteredSigns: n,
			visibleCount: H
		})), r.current && r.current.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [
		a,
		u,
		D
	]), P = m?.name === "VERBOS", F = p(() => P ? oe(M) : {}, [M, P]), I = p(() => Object.entries(F), [F]), [re, L] = h(H);
	f(() => {
		G(H), L(20);
	}, [m]);
	let R = I.slice(0, re), ae = S((e) => {
		let t = e.currentTarget;
		t.scrollTop + t.clientHeight >= t.scrollHeight - 50 && L((e) => Math.min(e + 20, I.length));
	}, [I.length]), V = e(N, 500), se = () => {
		n.current && (N(""), n.current.value = "", n.current.focus());
	}, ce = () => {
		B.setState({ signs: [] }), a === "recents" && (o("all"), j((e) => ({
			...e,
			filteredSigns: []
		})));
	};
	f(() => {
		g(null), N(A);
	}, [a]), f(() => {
		D.length > 0 && j((e) => ({
			...e,
			filteredSigns: D
		}));
	}, [D]), f(() => {
		let e = new IntersectionObserver((e) => {
			e[0].isIntersecting && O.length > k && j((e) => ({
				...e,
				visibleCount: e.visibleCount + H
			}));
		}, { threshold: .1 });
		return t.current && e.observe(t.current), () => e.disconnect();
	}, [O.length, k]);
	let U = O.slice(0, k), le = {
		all: D.length,
		recents: u.length
	}, [W, G] = h(H), ue = p(() => M.slice(0, W), [M, W]), K = S((e) => {
		let t = e.currentTarget;
		t.scrollTop + t.clientHeight >= t.scrollHeight - 50 && G((e) => e >= M.length ? e : e + H);
	}, [M.length]);
	f(() => {
		G(H);
	}, [m]);
	let q = p(() => ie(D), [D]), J = p(() => {
		if (!_) return [];
		let e = A.toLowerCase().trim(), t = q.find((e) => e.letter === _)?.items ?? [];
		return e === "" ? t : t.filter((t) => t.toLowerCase().includes(e));
	}, [
		_,
		q,
		A
	]), [Y, X] = h(H), de = p(() => J.slice(0, Y), [J, Y]), Z = S((e) => {
		let t = e.currentTarget;
		t.scrollTop + t.clientHeight >= t.scrollHeight - 50 && X((e) => e >= J.length ? e : e + H);
	}, [J.length]);
	return f(() => {
		X(H);
	}, [_]), {
		search: A,
		isLoading: c,
		filteredSigns: O,
		visibleSigns: U,
		visibleCount: k,
		loaderRef: t,
		listRef: r,
		searchRef: n,
		handleSearchChange: V,
		handleClearSearch: se,
		handleHistoryClear: ce,
		data: s,
		retry: E,
		filter: a,
		setFilter: o,
		count: le,
		selectedCategory: m,
		setSelectedCategory: g,
		filteredCategoryWords: M,
		onCategoryScroll: K,
		visibleCategoryWords: ue,
		selectedLetter: _,
		setSelectedLetter: v,
		groupedSigns: q,
		filteredLetterWords: J,
		onLetterScroll: Z,
		visibleLetterWords: de,
		isVerbCategory: P,
		visibleVerbGroups: R,
		verbGroupEntries: I,
		onVerbScroll: ae,
		categories: y,
		isLoadingCategories: x,
		isLoadingCategorySigns: w,
		...i
	};
}, { Provider: ce, useCtx: U } = O(), le = ({ children: e }) => {
	let t = se();
	return /* @__PURE__ */ l(ce, {
		data: t,
		children: e
	});
}, W = () => (e) => {
	y(e);
	let t = [e, ...V.get().signs.filter((t) => t !== e)];
	V.set({ signs: t }), n.set({ screen: "main" }), m({
		action: () => n.set({ screen: "dictionary" }),
		content: /* @__PURE__ */ l(g, { children: [/* @__PURE__ */ l(v, { name: "dictionary" }), "Reabrir Dicionário"] })
	}), D.trackEvent("dictionary_gloss", { sign: e });
}, G = [
	"masculino",
	"feminino",
	"neutro"
];
function ue(e) {
	let t, n = Array.from(e.querySelectorAll("h2, h3")).find((e) => e.textContent?.toLowerCase().includes("etimologia"));
	return n && (t = (n.parentElement?.nextElementSibling)?.firstChild?.textContent?.trim()), t;
}
async function K(e) {
	let t = e.toLowerCase().replace(/_/g, " "), n = `https://pt.wiktionary.org/w/api.php?action=parse&redirects=1&
				 format=json&origin=*&page=${encodeURIComponent(t)}&prop=text&formatversion=2`;
	try {
		let e = await fetch(n);
		return e.ok && (await e.json())?.parse?.text || null;
	} catch (e) {
		return console.error(e), null;
	}
}
async function q(e) {
	let t = e.toLowerCase().replace(/_/g, " "), n = `https://pt.wiktionary.org/w/rest.php/v1/search/title?
					   q=${encodeURIComponent(t)}&limit=1`;
	try {
		let e = await fetch(n);
		return e.ok && (await e.json()).pages?.[0]?.key || null;
	} catch (e) {
		return console.error(e), null;
	}
}
async function J(e) {
	let t = await K(e), n = t ? de(t, e) : null;
	if (!n?.definitions?.length) {
		let r = await q(e);
		r && r !== e && (t = await K(r), n = t ? de(t, e) : null);
	}
	return n;
}
var Y = (e) => {
	if (!e) return "";
	let t = e;
	if (t = t.replace(/<style[\s\S]*?<\/style>/gi, ""), t = t.replace(/<script[\s\S]*?<\/script>/gi, ""), t = t.replace(/<noscript[\s\S]*?<\/noscript>/gi, ""), t = t.replace(/<[^>]+>/g, ""), typeof document < "u") {
		let e = document.createElement("div");
		e.innerHTML = t, t = e.textContent || e.innerText || t;
	}
	return t = t.replace(/\[[^\]]*\]/g, ""), t = t.replace(/\s+/g, " ").trim(), t;
}, X = (e) => {
	let t = e.cloneNode(!0);
	return t.querySelectorAll("ul, ol").forEach((e) => e.remove()), t.querySelectorAll("style, script, link, meta, noscript").forEach((e) => e.remove()), t.querySelectorAll("span.mw-cite-backlink, sup.reference, sup.cite_ref").forEach((e) => e.remove()), Y(t.textContent || "");
}, de = (e, t) => {
	let n = new DOMParser().parseFromString(e, "text/html"), r = n.querySelector("tbody")?.innerHTML.match(RegExp(`title='(?<gender>${G.join("|")})'`))?.groups?.gender, i = Array.from(n.querySelectorAll("ol > li")).map((e) => {
		let t = X(e), n = e.querySelectorAll(":scope > ul > li, :scope > ol > li");
		if (n.length) {
			let e = Array.from(n).map((e) => X(e)).filter(Boolean);
			e.length && (t = `${t} §${e.join("§")}`);
		}
		return t;
	}).filter((e) => e && e !== t).filter((e, t, n) => n.indexOf(e) === t).filter(Boolean), a = n.querySelector("h2")?.textContent?.trim(), o = Array.from(n.querySelectorAll("b")).find((e) => e.innerHTML.includes("<u>") || e.innerHTML.includes("."))?.textContent?.trim(), s = ue(n), c = {}, l = n.querySelector("table.traduções");
	return l && l.querySelectorAll("tr").forEach((e) => {
		let t = e.querySelector("td"), n = e.querySelectorAll("td ~ td a");
		if (t && n.length > 0) {
			let e = t.textContent?.trim().toLowerCase(), r = Array.from(n).map((e) => e.textContent?.trim()).filter(Boolean);
			e && (c[e] = r);
		}
	}), {
		wordClass: a,
		pronunciation: o,
		definitions: i,
		etymology: s,
		gender: r,
		imgUrl: n.querySelector("img")?.getAttribute("src") || void 0,
		translations: Object.keys(c).length > 0 ? c : void 0
	};
}, Z = () => {
	let [e, t] = h(null), { data: n, isFetching: r } = d({
		queryKey: ["wordMeaning", e],
		queryFn: () => J(e ?? ""),
		enabled: !!e
	}), i = (e) => {
		t((t) => t === e ? null : e);
	};
	return {
		expandedWord: e,
		wordMeanings: e && n !== void 0 ? { [e]: n } : {},
		loadingMeaning: r ? e : null,
		toggleWordMeaning: i
	};
}, Q = ({ meaning: e, isLoading: t, onPlayDefinition: n }) => {
	let i = s();
	return t ? /* @__PURE__ */ l("div", {
		className: "flex animate-pulse items-center gap-1.5 px-6 py-2 text-muted-foreground text-xs",
		children: [/* @__PURE__ */ l(o, { className: "size-3" }), "Buscando significado..."]
	}) : e?.definitions?.length ? /* @__PURE__ */ l("div", {
		className: "w-full border-primary/20 border-l-2 bg-muted pr-3 pb-5 pl-4 text-black dark:text-white",
		children: [/* @__PURE__ */ l("p", {
			className: "mb-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide",
			children: "Significado"
		}), /* @__PURE__ */ l("ol", {
			className: "flex flex-col gap-5",
			children: e.definitions.slice(0, 3).map((e, t) => {
				let a = Y(e.split("§")[0]);
				return /* @__PURE__ */ l("li", {
					className: "break-word flex min-w-0 flex-1 items-center justify-between pl-4",
					children: [/* @__PURE__ */ l("span", {
						className: r("min-w-0 max-w-50 flex-1 mobile:text-xs text-sm", i ? "max-w-40" : "max-w-50"),
						children: `${t + 1}. ${a}`
					}), /* @__PURE__ */ l("button", {
						type: "button",
						onClick: () => n(a),
						className: "shrink-0 cursor-pointer text-primary hover:opacity-70",
						"aria-label": "Traduzir definição",
						children: /* @__PURE__ */ l(v, {
							name: "libras",
							className: r(i ? "size-5" : "size-6")
						})
					})]
				}, t);
			})
		})]
	}) : /* @__PURE__ */ l("div", {
		className: "px-6 py-2 text-muted-foreground text-xs",
		children: "Significado não encontrado."
	});
}, $ = 50, fe = () => {
	let e = U(C("filteredSigns", "search", "filter", "listRef", "visibleSigns", "setSelectedLetter", "groupedSigns")), i = W(), { mutateAsync: a } = w(), { expandedWord: o, wordMeanings: s, loadingMeaning: c, toggleWordMeaning: u } = Z(), d = async (e) => {
		try {
			let t = await a(e);
			y(t || e), m({
				action: () => n.set({ screen: "dictionary" }),
				content: /* @__PURE__ */ l(g, { children: [/* @__PURE__ */ l(v, { name: "dictionary" }), "Reabrir Dicionário"] })
			});
		} catch (e) {
			console.error("Erro ao reproduzir definição: ", e);
		}
	}, [p, _] = h($), b = T(null);
	if (f(() => {
		if (!e.search) return;
		let t = b.current;
		if (!t) return;
		let n = new IntersectionObserver(([t]) => {
			t.isIntersecting && _((t) => Math.min(t + $, e.filteredSigns.length));
		}, { threshold: .1 });
		return n.observe(t), () => n.disconnect();
	}, [e.search, e.filteredSigns.length]), f(() => {
		_($);
	}, [e.search]), e.filter === "recents") return /* @__PURE__ */ l("div", {
		ref: e.listRef,
		className: "h-full overflow-auto",
		children: /* @__PURE__ */ l("ul", {
			className: "flex flex-col text-sm",
			children: e.visibleSigns.map((e) => {
				let t = (e || "").replace(/_/g, " ");
				return /* @__PURE__ */ l("li", { children: [/* @__PURE__ */ l("button", {
					type: "button",
					onClick: () => i(e),
					className: "block w-full bg-background px-4 py-1.5 text-left mobile:text-xs text-sm hover:cursor-pointer hover:bg-muted",
					children: t
				}), /* @__PURE__ */ l("div", { className: "mx-4 border-border/30 border-t" })] }, e);
			})
		})
	});
	let x = (e) => {
		let n = o === e, a = c === e, f = (e || "").replace(/_/g, " ");
		return /* @__PURE__ */ l("li", {
			className: "hover:bg-muted",
			children: [
				/* @__PURE__ */ l("div", {
					className: r("flex min-w-0 items-center", n ? "bg-muted" : ""),
					children: [/* @__PURE__ */ l("button", {
						type: "button",
						onClick: () => i(e),
						className: "w-full cursor-pointer whitespace-normal break-all px-6 py-1.25 text-left mobile:text-xs text-sm focus:bg-primary focus:text-primary-foreground",
						children: f
					}), /* @__PURE__ */ l(t, {
						size: "icon-sm",
						variant: "ghost",
						className: "text-muted-foreground",
						onClick: () => u(e),
						"aria-label": n ? "Fechar significado" : "Ver significado",
						children: /* @__PURE__ */ l(v, {
							name: n ? "chevron-up" : "chevron-down",
							className: "size-4"
						})
					})]
				}),
				n && /* @__PURE__ */ l(Q, {
					wordName: e,
					meaning: s[e],
					isLoading: a,
					onPlayDefinition: d
				}),
				/* @__PURE__ */ l("div", { className: "mx-4 border-border/30 border-t" })
			]
		}, e);
	}, E = S((t) => {
		let n = t.currentTarget;
		n.scrollTop + n.clientHeight >= n.scrollHeight - 100 && _((t) => Math.min(t + $, e.filteredSigns.length));
	}, [e.filteredSigns.length]);
	return e.search ? /* @__PURE__ */ l("div", {
		ref: e.listRef,
		className: "h-full overflow-auto",
		onScroll: E,
		children: /* @__PURE__ */ l("ul", {
			className: "flex flex-col text-sm",
			children: [e.filteredSigns.slice(0, p).map((e) => x(e)), p < e.filteredSigns.length && /* @__PURE__ */ l("li", {
				ref: b,
				className: "py-2 text-center text-muted-foreground text-xs",
				children: "Carregando..."
			})]
		})
	}) : /* @__PURE__ */ l("div", {
		ref: e.listRef,
		className: "h-full overflow-auto",
		children: /* @__PURE__ */ l("ul", {
			className: "flex flex-col text-sm",
			children: e.groupedSigns.map(({ letter: t, items: n }) => /* @__PURE__ */ l("li", { children: [/* @__PURE__ */ l("button", {
				type: "button",
				onClick: () => e.setSelectedLetter(t),
				className: "flex w-full items-center justify-between px-4 py-2 text-left font-semibold mobile:text-xs text-sm hover:cursor-pointer hover:bg-muted",
				children: [/* @__PURE__ */ l("span", { children: t === "#" ? "0–9" : t }), /* @__PURE__ */ l("span", {
					className: "font-normal text-muted-foreground text-xs",
					children: n.length
				})]
			}), /* @__PURE__ */ l("div", { className: "mx-4 border-border/30 border-t" })] }, t))
		})
	});
}, pe = () => /* @__PURE__ */ l("div", {
	className: "grid h-full place-content-center",
	children: /* @__PURE__ */ l(o, {})
}), me = () => {
	let { search: e, setSelectedCategory: t, categories: n, listRef: i, setFilter: a, isLoadingCategories: o } = U(C("categories", "isLoadingCategories", "search", "setSelectedCategory", "listRef", "setFilter"));
	if (o) return /* @__PURE__ */ l(pe, {});
	let s = p(() => n.filter((t) => t.name.toLowerCase().includes(e.toLocaleLowerCase())).sort((e, t) => e.name.localeCompare(t.name)), [n, e]);
	return n.length ? s.length ? /* @__PURE__ */ l("div", {
		ref: i,
		className: "h-full overflow-auto",
		children: /* @__PURE__ */ l("ul", {
			className: "flex flex-col",
			children: [s.map((e) => {
				let n = P[e.id] || "categories/undefined";
				return /* @__PURE__ */ l("li", { children: [/* @__PURE__ */ l("button", {
					type: "button",
					onClick: () => t(e),
					className: r("flex w-full items-center justify-between px-4 mobile:py-2 py-0 mobile:text-xs text-sm hover:cursor-pointer hover:bg-muted"),
					children: /* @__PURE__ */ l("div", {
						className: "flex items-center gap-2 py-2",
						children: [/* @__PURE__ */ l(v, {
							name: n,
							className: "mobile:size-5 size-6 shrink-0 dark:text-foreground"
						}), /* @__PURE__ */ l("span", { children: e.name.replace(/_/g, " ") })]
					})
				}), /* @__PURE__ */ l("div", { className: "mx-4 border-border/30 border-t" })] }, e.id);
			}), /* @__PURE__ */ l("li", { children: [/* @__PURE__ */ l("button", {
				type: "button",
				onClick: () => a("all"),
				className: r("flex w-full items-center justify-between px-4 mobile:py-2 py-0 mobile:text-xs text-sm hover:cursor-pointer hover:bg-muted"),
				children: /* @__PURE__ */ l("div", {
					className: "flex items-center gap-2 py-2",
					children: [/* @__PURE__ */ l(v, {
						name: "categories/all",
						className: "mobile:size-5 size-6 shrink-0 dark:text-foreground"
					}), /* @__PURE__ */ l("span", { children: "TODOS" })]
				})
			}), /* @__PURE__ */ l("div", { className: "mx-4 border-border/30 border-t" })] }, "all-signs")]
		})
	}) : /* @__PURE__ */ l("div", {
		className: "flex h-10 items-center justify-center",
		children: "Nenhuma categoria encontrada"
	}) : /* @__PURE__ */ l("div", {
		className: "flex h-full w-full items-start justify-center p-6",
		children: "Sem conexão com a internet. Não é possível estabelecer conexão com o banco de sinais."
	});
}, he = () => {
	let { selectedCategory: e, setSelectedCategory: t } = U(C("selectedCategory", "setSelectedCategory"));
	if (!e) return null;
	let n = P[e.id] || "categories/undefined";
	return e && /* @__PURE__ */ l("div", {
		className: "flex w-full animate-move-up items-center gap-1 bg-primary/20 mobile:px-3 px-4 mobile:py-2 py-3",
		children: /* @__PURE__ */ l("button", {
			type: "button",
			"aria-label": "Voltar para a lista de categorias",
			onClick: () => t(null),
			className: "group flex h-full w-full items-center justify-start gap-2 text-xs hover:cursor-pointer",
			children: [
				/* @__PURE__ */ l(v, {
					name: "chevron-left",
					className: "size-4 text-muted-foreground group-hover:text-foreground"
				}),
				/* @__PURE__ */ l(v, {
					name: n,
					className: "mobile:size-5 size-6 shrink-0"
				}),
				/* @__PURE__ */ l("span", {
					className: "font-semibold mobile:text-xs text-sm",
					children: e.name.replace(/_/g, " ")
				})
			]
		})
	});
}, ge = () => {
	let e = W(), t = U(C("visibleVerbGroups", "onVerbScroll", "listRef")), { mutateAsync: i } = w(), { expandedWord: a, wordMeanings: o, loadingMeaning: s, toggleWordMeaning: c } = Z(), u = async (e) => {
		try {
			let t = await i(e);
			y(t || e), m({
				action: () => n.set({ screen: "dictionary" }),
				content: /* @__PURE__ */ l(g, { children: [/* @__PURE__ */ l(v, { name: "dictionary" }), "Reabrir Dicionário"] })
			});
		} catch (e) {
			console.error("Erro ao reproduzir definição: ", e);
		}
	};
	return /* @__PURE__ */ l("div", {
		ref: t.listRef,
		onScroll: t.onVerbScroll,
		className: "h-full overflow-auto",
		children: /* @__PURE__ */ l("ul", {
			className: "flex w-full flex-col text-sm",
			children: t.visibleVerbGroups.map(([t, n]) => {
				let i = a === t, d = s === t, f = n.conjugation.slice(+(t === n.conjugation[0]?.original));
				return /* @__PURE__ */ l("li", { children: [
					/* @__PURE__ */ l("div", {
						className: r("flex min-w-0 items-center hover:bg-muted", i && "bg-muted"),
						children: [/* @__PURE__ */ l("button", {
							type: "button",
							onClick: () => e(t),
							className: "flex-1 cursor-pointer whitespace-normal break-all px-4 py-1.25 text-left mobile:text-xs text-sm focus:bg-primary focus:text-primary-foreground",
							children: t
						}), /* @__PURE__ */ l("button", {
							type: "button",
							onClick: () => c(t),
							className: "px-2 py-1.25 hover:cursor-pointer hover:text-foreground",
							"aria-label": i ? "Fechar" : "Expandir",
							children: /* @__PURE__ */ l(v, {
								name: i ? "chevron-up" : "chevron-down",
								className: "size-4"
							})
						})]
					}),
					i && /* @__PURE__ */ l("div", {
						className: "bg-muted pb-1",
						children: [
							/* @__PURE__ */ l(Q, {
								wordName: t,
								meaning: o[t],
								isLoading: d,
								onPlayDefinition: u
							}),
							f.length > 0 && /* @__PURE__ */ l("div", {
								className: "mt-1",
								children: [/* @__PURE__ */ l("p", {
									className: "px-4 py-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide",
									children: "Concordância verbal"
								}), /* @__PURE__ */ l("ul", {
									className: "ml-4 border-border/40 border-l",
									children: f.map((t) => /* @__PURE__ */ l("li", { children: /* @__PURE__ */ l("button", {
										type: "button",
										onClick: () => e(t.original),
										className: "flex w-full items-center gap-2 px-4 py-1.25 mobile:text-xs text-sm hover:cursor-pointer focus:bg-primary focus:text-primary-foreground",
										children: [
											/* @__PURE__ */ l("span", {
												className: "w-20 shrink-0 text-right text-muted-foreground",
												children: t.prefix
											}),
											/* @__PURE__ */ l(v, {
												name: "arrow-right",
												className: "size-4"
											}),
											/* @__PURE__ */ l("span", { children: t.suffix })
										]
									}) }, t.original))
								})]
							}),
							n.desambiguation.length > 0 && /* @__PURE__ */ l("div", {
								className: "mt-1",
								children: [/* @__PURE__ */ l("p", {
									className: "px-4 py-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide",
									children: "Contexto"
								}), /* @__PURE__ */ l("ul", {
									className: "ml-4 border-border/40 border-l",
									children: n.desambiguation.map((t) => {
										let [n, r] = t.split("&", 2);
										return /* @__PURE__ */ l("li", { children: /* @__PURE__ */ l("button", {
											type: "button",
											onClick: () => e(t),
											className: "flex w-full items-center gap-2 px-4 py-1.25 mobile:text-xs text-sm hover:bg-muted focus:bg-primary focus:text-primary-foreground",
											children: [
												n,
												" (",
												r,
												")"
											]
										}) }, t);
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ l("div", { className: "mx-4 border-border/30 border-t" })
				] }, t);
			})
		})
	});
}, _e = () => {
	let e = W(), i = U(C("visibleCategoryWords", "isVerbCategory", "listRef", "onCategoryScroll")), { mutateAsync: a } = w(), { expandedWord: o, wordMeanings: s, loadingMeaning: c, toggleWordMeaning: u } = Z(), d = async (e) => {
		try {
			let t = await a(e);
			y(t || e), m({
				action: () => n.set({ screen: "dictionary" }),
				content: /* @__PURE__ */ l(g, { children: [/* @__PURE__ */ l(v, { name: "dictionary" }), "Reabrir Dicionário"] })
			});
		} catch (e) {
			console.error("Erro ao reproduzir definição: ", e);
		}
	};
	if (i.isVerbCategory) return /* @__PURE__ */ l(ge, {});
	let f = p(() => ae(i.visibleCategoryWords), [i.visibleCategoryWords]);
	return /* @__PURE__ */ l("div", {
		ref: i.listRef,
		onScroll: i.onCategoryScroll,
		className: "h-full overflow-auto",
		children: /* @__PURE__ */ l("ul", {
			className: "flex h-full w-full flex-col text-sm",
			children: f.map((n) => {
				let i = o === n.base, a = c === n.base, f = (n.base || "").replace(/_/g, " ");
				return /* @__PURE__ */ l("li", {
					className: "hover:bg-muted",
					children: [
						/* @__PURE__ */ l("div", {
							className: r("flex min-w-0 items-center", i ? "bg-muted" : ""),
							children: [/* @__PURE__ */ l("button", {
								type: "button",
								onClick: () => e(n.base),
								className: "w-full cursor-pointer whitespace-normal break-all px-4 py-1.25 text-left mobile:text-xs text-sm focus:bg-primary focus:text-primary-foreground",
								children: f
							}), /* @__PURE__ */ l(t, {
								size: "icon-sm",
								variant: "ghost",
								className: "text-muted-foreground",
								onClick: () => u(n.base),
								"aria-label": i ? "Fechar significado" : "Ver significado",
								children: /* @__PURE__ */ l(v, {
									name: i ? "chevron-up" : "chevron-down",
									className: "size-4"
								})
							})]
						}),
						i && /* @__PURE__ */ l(g, { children: [/* @__PURE__ */ l(Q, {
							wordName: n.base,
							meaning: s[n.base],
							isLoading: a,
							onPlayDefinition: d
						}), n.variants.length > 0 && /* @__PURE__ */ l("div", {
							className: "mt-1",
							children: [/* @__PURE__ */ l("p", {
								className: "px-4 py-1 font-semibold text-muted-foreground text-xs uppercase tracking-wide",
								children: "Contexto"
							}), /* @__PURE__ */ l("ul", {
								className: "ml-4 border-border/40 border-l",
								children: n.variants.map((t) => {
									let [, r] = t.split("&", 2), i = (n.base || "").replace(/_/g, " "), a = (r || "").replace(/_/g, " ");
									return /* @__PURE__ */ l("li", { children: /* @__PURE__ */ l("button", {
										type: "button",
										onClick: () => {
											e(t);
										},
										className: "flex w-full px-4 py-1 text-left mobile:text-xs text-sm hover:bg-muted focus:bg-primary focus:text-primary-foreground",
										children: [
											i,
											" (",
											a,
											")"
										]
									}) }, t);
								})
							})]
						})] }),
						/* @__PURE__ */ l("div", { className: "mx-4 border-border/30 border-t" })
					]
				}, n.base);
			})
		})
	});
}, ve = () => {
	let e = U((e) => e.isLoadingCategorySigns);
	return /* @__PURE__ */ l(g, { children: [/* @__PURE__ */ l(he, {}), l(e ? pe : _e, {})] });
}, ye = "images/emojis/sad-face.webp", be = ({ onRetry: e, isMaxRetries: n }) => {
	let r = s();
	return /* @__PURE__ */ l("div", {
		className: "flex h-full flex-col items-center justify-center gap-2 px-4",
		children: [
			/* @__PURE__ */ l("img", {
				src: a(ye),
				alt: "Emoji de rosto triste",
				className: "size-7 sm:size-8"
			}),
			/* @__PURE__ */ l("p", {
				className: "mb-3 px-4 text-center font-semibold mobile:text-sm text-base",
				children: "Não foi possível carregar o dicionário de sinais."
			}),
			!n && /* @__PURE__ */ l(t, {
				onClick: e,
				size: r ? "xs" : "sm",
				className: "rounded-full",
				variant: "outline-gov",
				children: "Tentar novamente"
			}),
			n && /* @__PURE__ */ l("span", {
				className: "mobile:text-xs text-muted-foreground text-sm",
				children: "Tente novamente mais tarde."
			})
		]
	});
}, xe = [
	{
		label: "Categorias",
		value: "categories"
	},
	{
		label: "A-Z",
		value: "all"
	},
	{
		label: "Recentes",
		value: "recents"
	}
], Se = () => {
	let { signs: e } = B(), { setFilter: n, filter: i, handleHistoryClear: a } = U(C("setFilter", "filter", "handleHistoryClear")), o = s(), c = !e.length;
	return /* @__PURE__ */ l("div", {
		className: "flex items-center gap-2 px-4 [&_button]:rounded-full",
		children: [xe.map((e) => {
			let a = i === e.value;
			return c && e.value === "recents" ? null : /* @__PURE__ */ l(t, {
				inert: a,
				variant: a ? "default" : "outline",
				onClick: () => n(e.value),
				className: r("animate-move-down", o ? "p-1" : "p-2"),
				size: o ? "xs" : "sm",
				children: e.label
			}, e.value);
		}), i === "recents" && /* @__PURE__ */ l(t, {
			onClick: a,
			className: "text-muted-foreground not-focus:outline-0 outline-destructive hover:text-destructive focus:[&_svg]:text-destructive",
			size: o ? "icon-xs" : "icon-sm",
			variant: "ghost",
			"aria-label": "Limpar histórico",
			children: /* @__PURE__ */ l(v, { name: "trash" })
		})]
	});
}, Ce = () => {
	let { selectedLetter: e, setSelectedLetter: t } = U(C("selectedLetter", "setSelectedLetter"));
	return e ? /* @__PURE__ */ l("div", {
		className: "flex w-full animate-move-up items-center gap-1 bg-primary/20 mobile:px-3 px-4 mobile:py-2 py-3",
		children: /* @__PURE__ */ l("button", {
			type: "button",
			"aria-label": "Voltar para a lista de letras",
			onClick: () => t(null),
			className: "group flex h-full w-full items-center justify-start gap-2 text-xs hover:cursor-pointer",
			children: [/* @__PURE__ */ l(v, {
				name: "chevron-left",
				className: "size-4 text-muted-foreground group-hover:text-foreground"
			}), /* @__PURE__ */ l("span", {
				className: "font-semibold mobile:text-xs text-sm",
				children: e === "#" ? "0–9" : e
			})]
		})
	}) : null;
}, we = () => {
	let e = U(C("visibleLetterWords", "onLetterScroll", "listRef")), i = W(), { mutateAsync: a } = w(), { expandedWord: o, wordMeanings: s, loadingMeaning: c, toggleWordMeaning: u } = Z(), d = async (e) => {
		try {
			let t = await a(e);
			y(t || e), m({
				action: () => n.set({ screen: "dictionary" }),
				content: /* @__PURE__ */ l(g, { children: [/* @__PURE__ */ l(v, { name: "dictionary" }), "Reabrir Dicionário"] })
			});
		} catch (e) {
			console.error("Erro ao reproduzir definição: ", e);
		}
	};
	return /* @__PURE__ */ l("div", {
		ref: e.listRef,
		onScroll: e.onLetterScroll,
		className: "h-full overflow-auto",
		children: /* @__PURE__ */ l("ul", {
			className: "flex h-full w-full flex-col text-sm",
			children: e.visibleLetterWords.map((e) => {
				let n = o === e, a = c === e, f = (e || "").replace(/_/g, " ");
				return /* @__PURE__ */ l("li", {
					className: "hover:bg-muted",
					children: [
						/* @__PURE__ */ l("div", {
							className: r("flex min-w-0 items-center", n ? "bg-muted" : ""),
							children: [/* @__PURE__ */ l("button", {
								type: "button",
								onClick: () => i(e),
								className: "w-full cursor-pointer whitespace-normal break-all px-6 py-1.25 text-left mobile:text-xs text-sm focus:bg-primary focus:text-primary-foreground",
								children: f
							}), /* @__PURE__ */ l(t, {
								size: "icon-sm",
								variant: "ghost",
								className: "text-muted-foreground",
								onClick: () => u(e),
								"aria-label": n ? "Fechar significado" : "Ver significado",
								children: /* @__PURE__ */ l(v, {
									name: n ? "chevron-up" : "chevron-down",
									className: "size-4"
								})
							})]
						}),
						n && /* @__PURE__ */ l(Q, {
							wordName: e,
							meaning: s[e],
							isLoading: a,
							onPlayDefinition: d
						}),
						/* @__PURE__ */ l("div", { className: "mx-4 border-border/30 border-t" })
					]
				}, e);
			})
		})
	});
}, Te = () => /* @__PURE__ */ l(g, { children: [/* @__PURE__ */ l(Ce, {}), /* @__PURE__ */ l(we, {})] }), Ee = () => {
	let { search: e, searchRef: n, handleSearchChange: r, handleClearSearch: i } = U(C("search", "searchRef", "handleSearchChange", "handleClearSearch"));
	return /* @__PURE__ */ l("div", {
		className: "relative flex items-center p-4 pb-0",
		children: [/* @__PURE__ */ l("input", {
			ref: n,
			type: "text",
			placeholder: "Pesquisar (ex: AJUDAR)...",
			onInput: (e) => r(e.currentTarget.value),
			className: "h-9 w-full rounded-md border p-2 pr-8 outline-primary placeholder:text-muted-foreground placeholder:text-sm focus:outline-2 focus:outline-solid"
		}), e && /* @__PURE__ */ l(t, {
			onClick: i,
			"aria-label": "Limpar busca",
			variant: "ghost",
			size: "icon-xs",
			className: "absolute right-5 rounded-sm bg-transparent! text-muted-foreground outline-destructive hover:text-destructive focus:text-destructive",
			children: /* @__PURE__ */ l(v, { name: "x" })
		})]
	});
}, De = () => {
	let e = U(C("isLoading", "data", "filter", "search", "selectedLetter", "selectedCategory", "retry", "isMaxRetries", "filteredLetterWords", "filteredCategoryWords", "filteredSigns"));
	if (e.isLoading) return /* @__PURE__ */ l(pe, {});
	if (!e.data && e.filter === "all") return /* @__PURE__ */ l(be, {
		onRetry: e.retry,
		isMaxRetries: e.isMaxRetries
	});
	let t = e.filter === "all" && !!e.selectedLetter, n = p(() => t ? !e.filteredLetterWords.length && !!e.search : e.filter === "categories" ? e.selectedCategory ? !e.filteredCategoryWords.length && !!e.search : !1 : !e.filteredSigns.length && !!e.search, [e]);
	return /* @__PURE__ */ l("div", {
		className: "flex h-full flex-col gap-2 overflow-hidden text-primary dark:text-white",
		children: [
			/* @__PURE__ */ l(Ee, {}),
			/* @__PURE__ */ l(Se, {}),
			e.filter === "categories" && !e.selectedCategory && /* @__PURE__ */ l(me, {}),
			e.filter === "categories" && e.selectedCategory && /* @__PURE__ */ l(ve, {}),
			t && /* @__PURE__ */ l(Te, {}),
			e.filter !== "categories" && !t && !n && /* @__PURE__ */ l(fe, {}),
			n && /* @__PURE__ */ l("p", {
				className: "break-all px-4 font-semibold mobile:text-xs text-muted-foreground text-sm",
				children: ["Sem resultados para ", /* @__PURE__ */ l("q", {
					className: "text-foreground",
					children: e.search
				})]
			})
		]
	});
}, Oe = () => /* @__PURE__ */ l(le, { children: /* @__PURE__ */ l(M, { children: [/* @__PURE__ */ l(j, {
	close: !0,
	children: /* @__PURE__ */ l(k, { children: "Dicionário" })
}), /* @__PURE__ */ l(A, {
	className: "overflow-hidden p-0",
	children: /* @__PURE__ */ l(De, {})
})] }) });
export { Oe as DictionaryScreen };
