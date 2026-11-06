import { B as e, C as t, G as n, J as r, L as i, R as a, V as o, W as s, d as c, ht as l, k as u, tt as d, z as f } from "./vlibras-initial-TiYwpGfM.js";
import { i as p, n as m, r as h, t as g } from "./components-C2LrfnNF.js";
// src/widget/screens/about/about-field.tsx
var _ = ({ label: e, description: t, children: n }) => /* @__PURE__ */ s("div", {
	className: "flex flex-col gap-2 text-sm",
	children: [/* @__PURE__ */ s("div", { children: [/* @__PURE__ */ s("p", {
		className: "font-bold",
		children: e
	}), t && /* @__PURE__ */ s("p", {
		className: "text-muted-foreground text-xs",
		children: t
	})] }), /* @__PURE__ */ s("div", {
		className: "mobile:text-xs",
		children: n
	})]
}), v = [
	{
		href: "https://www.gov.br/governodigital/pt-br/acessibilidade-e-usuario/vlibras",
		name: "Site VLibras",
		iconName: "worldwide"
	},
	{
		href: "https://www.facebook.com/vlibras",
		name: "Facebook",
		iconName: "facebook"
	},
	{
		href: "https://www.instagram.com/vlibrasoficial",
		name: "Instagram",
		iconName: "instagram"
	},
	{
		href: "https://x.com/VLibrasoficial",
		name: "Twitter",
		iconName: "twitter"
	},
	{
		href: "https://www.youtube.com/@vlibras-lavid3180",
		name: "YouTube",
		iconName: "youtube"
	}
], y = () => {
	let { version: y } = d(), b = () => {
		t.get().open("about");
	};
	return /* @__PURE__ */ s(g, { children: [/* @__PURE__ */ s(h, {
		close: !0,
		children: /* @__PURE__ */ s(p, { children: "Sobre" })
	}), /* @__PURE__ */ s(m, {
		className: "flex flex-col text-sm",
		children: [
			/* @__PURE__ */ s(_, {
				label: "Sobre o VLibras",
				children: /* @__PURE__ */ s("p", { children: [
					"A ",
					/* @__PURE__ */ s("strong", { children: "Suíte VLibras" }),
					" é um conjunto de ferramentas gratuitas de código aberto que traduz conteúdo digital (texto, áudio e vídeo) em Português para Libras.",
					/* @__PURE__ */ s(c, {
						gloss: "SUÍTE VLIBRAS CONJUNTO&GRUPO FERRAMENTA GRATUITO CÓDIGO&COMPUTAÇÃO ABRIR&AFASTAR TRADUZIR CONTEÚDO&ASSUNTO DIGITAL&COMPUTADOR TEXTO ÁUDIO VÍDEO PORTUGUÊS LIBRAS [PONTO]",
						onFinish: b
					})
				] })
			}),
			/* @__PURE__ */ s(_, {
				label: /* @__PURE__ */ s(l, { children: ["Realizadores", /* @__PURE__ */ s(c, {
					gloss: "REALIZAR",
					onFinish: b
				})] }),
				children: /* @__PURE__ */ s("div", {
					className: "flex w-full flex-col justify-between gap-2 rounded-lg bg-white p-2",
					children: [/* @__PURE__ */ s("div", {
						className: "flex w-full items-center justify-between gap-2",
						children: [/* @__PURE__ */ s("div", {
							className: "flex min-w-0 flex-1 justify-start",
							children: /* @__PURE__ */ s("img", {
								src: r(f),
								alt: "logo do Ministério dos Direitos Humanos e da Cidadania"
							})
						}), /* @__PURE__ */ s("div", {
							className: "flex min-w-0 flex-1 justify-start",
							children: /* @__PURE__ */ s("img", {
								src: r(e),
								alt: "logo do Ministério da Gestão e da Inovação em Serviços Públicos"
							})
						})]
					}), /* @__PURE__ */ s("div", {
						className: "flex items-center justify-between gap-2",
						children: [
							/* @__PURE__ */ s("div", {
								className: "flex min-w-0 flex-1 items-center justify-start",
								children: /* @__PURE__ */ s("img", {
									src: r(a),
									alt: "logo do lavid",
									className: "max-w-15"
								})
							}),
							/* @__PURE__ */ s("div", {
								className: "flex min-w-0 flex-1 items-center justify-start",
								children: /* @__PURE__ */ s("img", {
									src: r(o),
									alt: "logo da RNP"
								})
							}),
							/* @__PURE__ */ s("div", {
								className: "flex min-w-0 flex-1 items-center justify-start",
								children: /* @__PURE__ */ s("img", {
									src: r(i),
									alt: "logo da Câmara dos Deputados"
								})
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ s("div", {
				className: "relative mobile:-m-2 mt-auto! flex min-h-32 flex-col overflow-hidden rounded-lg border p-4 font-semibold text-primary-foreground dark:bg-muted",
				children: [
					/* @__PURE__ */ s("p", {
						className: "mb-4 text-center mobile:text-sm text-base leading-none",
						children: ["Nos acompanhe nas redes sociais", /* @__PURE__ */ s(c, {
							gloss: "ACOMPANHAR REDE&GRUPO SOCIAL",
							onFinish: b,
							className: "text-primary-foreground! hover:opacity-80"
						})]
					}),
					/* @__PURE__ */ s("div", {
						className: n("z-999 mt-auto flex w-full items-center justify-between gap-2", "[&_button]:w-full [&_button]:rounded-full [&_button]:bg-primary-foreground [&_button]:text-primary"),
						children: v.map((e) => /* @__PURE__ */ s("a", {
							href: e.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "grid place-content-center rounded-full bg-white p-2",
							children: /* @__PURE__ */ s(u, {
								name: e.iconName,
								className: "size-4 text-primary",
								"aria-label": e.name
							})
						}, e.name))
					}),
					/* @__PURE__ */ s(u, {
						name: "icaro",
						className: "absolute top-4 left-0 z-1 size-32 opacity-15 dark:text-white dark:opacity-10"
					}),
					/* @__PURE__ */ s("div", { className: "absolute inset-0 -z-10 bg-primary" })
				]
			}),
			/* @__PURE__ */ s("span", {
				className: "mx-auto -mt-2 -mb-1 font-semibold text-[0.7em] text-muted-foreground",
				children: ["VLibras Widget v", y]
			})
		]
	})] });
};
export { y as AboutScreen };
