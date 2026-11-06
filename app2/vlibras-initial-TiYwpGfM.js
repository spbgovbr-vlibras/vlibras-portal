// \0rolldown/runtime.js
var e = Object.defineProperty, t = (t, n) => {
	let r = {};
	for (var i in t) e(r, i, {
		get: t[i],
		enumerable: !0
	});
	return n || e(r, Symbol.toStringTag, { value: "Module" }), r;
}, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g = 32, _ = "http://www.w3.org/2000/svg", v = "http://www.w3.org/1999/xhtml", y = "http://www.w3.org/1998/Math/MathML", b = null, x = void 0, S = {}, ee = [], C = /m(i|n|o|s$|te|sp)/, w = typeof Element < "u" && "moveBefore" in Element.prototype, te = Array.isArray, ne = ee.slice, T = Object.assign;
function re(e) {
	e && e.parentNode && e.remove();
}
function E(e, t, n) {
	var r, i, a, o = {}, s = arguments.length;
	for (a in t) a == "key" ? r = t[a] : a == "ref" && typeof e != "function" ? i = t[a] : o[a] = t[a];
	return s > 2 && (o.children = s > 3 ? ne.call(arguments, 2) : n), O(e, o, r, i, b);
}
function D(e, t, n) {
	var r, i, a, o = T({}, e.props), s = arguments.length;
	for (a in t) a == "key" ? r = t[a] : a == "ref" && typeof e.type != "function" ? i = t[a] : o[a] = t[a];
	return s > 2 && (o.children = s > 3 ? ne.call(arguments, 2) : n), O(e.type, o, r === x ? e.key : r, i === x ? e.ref : i, b);
}
function O(e, t, i, a, o) {
	var s = {
		type: e,
		props: t,
		key: i,
		ref: a,
		__k: b,
		__: b,
		__b: 0,
		__e: b,
		__c: b,
		constructor: x,
		__v: o || ++r,
		__i: -1,
		__u: 0
	};
	return !o && n.vnode && n.vnode(s), s;
}
function ie() {
	return { current: b };
}
function k(e) {
	return e.children;
}
function ae(e, t) {
	this.props = e, this.context = t, this.__g = 0;
}
function oe(e, t) {
	if (t == b) return e.__ ? oe(e.__, e.__i + 1) : b;
	for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) && n.__e) return n.__e;
	return typeof e.type != "function" || e.props.__P ? b : oe(e);
}
function se(e) {
	var t, r = e.__v, i = r.__e, a = [], o = [], s = e.__P;
	s && ((t = T({ constructor: x }, r)).__v = r.__v + 1, n.vnode && n.vnode(t), ge(s, t, r, e.__n, s.namespaceURI, r.__u & g ? [i] : b, a, i || oe(r), r.__u & g, o), t.__v = r.__v, t.__.__k[t.__i] = t, ve(a, t, o), r.__ = r.__e = b, t.__e != i && ce(t));
}
function ce(e) {
	if ((e = e.__) && e.__c && !e.props.__P) return e.__e = b, e.__k.some(function(t) {
		return t && (e.__e = t.__e);
	}), ce(e);
}
function A(e) {
	(8 & e.__g || !(e.__g |= 8) || !a.push(e) || s++) && o == n.debounceRendering || ((o = n.debounceRendering) || queueMicrotask)(j);
}
function j() {
	try {
		for (var e, t = 1; a.length;) a.length > t && a.sort(c), e = a.shift(), t = a.length, 8 & e.__g && se(e);
	} finally {
		a.length = s = 0;
	}
}
function le(e, t, n, r, i, a, o, s, c, l, u) {
	var d, f, p, m, h, g, _ = r.__k || ee, v = t.length;
	for (c = ue(n, t, _, c, v), d = 0; d < v; d++) (p = n.__k[d]) != b && (f = ~p.__i && _[p.__i] || S, p.__i = d, g = ge(e, p, f, i, a, o, s, c, l, u), m = p.__e, p.ref && f.ref != p.ref && (f.ref && xe(f.ref, b, p), u.push(p.ref, p.__c || m, p)), h ||= m, 4 & p.__u ? (c = M(p, c, e, !f.__v), f.__e && (f.__e = b)) : typeof p.type == "function" && g !== x ? c = g : m && (c = m.nextSibling), p.__u &= -7);
	return n.__e = h, c;
}
function ue(e, t, n, r, i) {
	var a, o, s, c, l, u, d, f, p, m, h = n.length, g = h, _ = 0, v = !1, y = e.__k = Array(i);
	for (a = 0; a < i; a++) (o = t[a]) != b && typeof o != "boolean" && typeof o != "function" ? (typeof o != "object" || o.constructor == String ? o = y[a] = O(b, o) : te(o) ? o = y[a] = O(k, { children: o }) : o.constructor === x && o.__b ? o = y[a] = O(o.type, o.props, o.key, o.ref, o.__v) : y[a] = o, c = a + _, o.__ = e, o.__b = e.__b + 1, l = o.__i = fe(o, n, c, g), s = b, ~l && (g--, (s = n[l]) && (s.__u |= 2)), s && s.__v ? (o.__u |= 2, l == c - 1 ? _-- : l == c + 1 ? _++ : l != c && (l > c ? _-- : _++, v = !0)) : (~l || (i > h ? _-- : i < h && _++), typeof o.type != "function" && (o.__u |= 4))) : y[a] = b;
	if (v) {
		for (u = [], d = [], a = 0; a < i; a++) if ((o = y[a]) && 2 & o.__u) {
			for (f = 0, p = u.length; f < p;) u[m = f + p >> 1] < o.__i ? f = m + 1 : p = m;
			u[f] = o.__i, d[a] = f + 1;
		}
		for (_ = u.length; a--;) d[a] && (d[a] == _ ? _-- : y[a].__u |= 4);
	}
	if (g) for (a = 0; a < h; a++) !(s = n[a]) || 2 & s.__u || (s.__e == r && (r = oe(s)), Se(s, s));
	return r;
}
function M(e, t, n, r) {
	var i, a;
	if (typeof e.type == "function") {
		if (e.props.__P) return t;
		if (i = e.__k) for (a = 0; a < i.length; a++) i[a] && (i[a].__ = e, t = M(i[a], t, n, !1));
		return t;
	}
	for (e.__e != t && (t && e.type && !t.parentNode && (t = oe(e)), w && !r ? n.moveBefore(e.__e, t) : n.insertBefore(e.__e, t || b), t = e.__e); (t &&= t.nextSibling) && t.nodeType == 8;);
	return t;
}
function de(e, t) {
	return t ||= [], e != b && typeof e != "boolean" && (te(e) ? e.some(function(e) {
		de(e, t);
	}) : t.push(e)), t;
}
function fe(e, t, n, r) {
	var i, a, o, s = e.key, c = e.type, l = t[n], u = l && !(2 & l.__u);
	if (l === b && s == b || u && s == l.key && c == l.type) return n;
	if (r > +!!u) {
		for (i = n - 1, a = n + 1; i >= 0 || a < t.length;) if ((l = t[o = i >= 0 ? i-- : a++]) && !(2 & l.__u) && s == l.key && c == l.type) return o;
	}
	return -1;
}
function pe(e, t, n) {
	n == b && (n = ""), t[0] == "-" ? e.setProperty(t, n) : e[t] = n;
}
function me(e, t, n, r, i) {
	var a;
	n: if (t == "style") {
		if (typeof n == "string") e.style.cssText = n;
		else {
			if (typeof r == "string" && (e.style.cssText = r = ""), r) for (t in r) n && t in n || pe(e.style, t, "");
			if (n) for (t in n) r && n[t] == r[t] || pe(e.style, t, n[t]);
		}
	} else if (t[0] == "o" && t[1] == "n") a = t != (t = t.replace(d, "$1")), t = t.slice(2).toLowerCase(), (e.__e ||= {})[t + a] = n, n ? r ? n[u] = r[u] : (n[u] = f, e.addEventListener(t, a ? m : p, a)) : e.removeEventListener(t, a ? m : p, a);
	else {
		if (i == _) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
		else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e) try {
			e[t] = n == b ? "" : n;
			break n;
		} catch {}
		typeof n == "function" || (n == b || !1 === n && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n));
	}
}
function he(e) {
	return function(t) {
		if (this.__e) {
			var r = this.__e[t.type + e];
			if (t[l] == b) t[l] = f++;
			else if (t[l] < r[u]) return;
			return r(n.event ? n.event(t) : t);
		}
	};
}
function ge(e, t, r, i, a, o, s, c, l, u) {
	var d, f, p, m, h, _, v, y, S, C, w, ne, E, D, O, ie, se, ce, A, j = t.type;
	if (t.constructor !== x) return b;
	if (128 & r.__u && (l = r.__u & g) && (d = r.__c.__z)) {
		if (t.__u |= g, o = [], d.nodeType == 8) for (f = 1, p = d.nextSibling; p; p = p.nextSibling) {
			if (p.nodeType == 8) {
				if (p.data.startsWith("$s")) f++;
				else if (p.data.startsWith("/$s") && !--f) break;
			}
			o.push(p);
		}
		else o.push(d);
		c = o[0], r.__c.__z = b;
	}
	(d = n.__b) && d(t);
	n: if (typeof j == "function") {
		m = s.length;
		try {
			if (S = t.props, C = (d = j.prototype) && d.render, w = (d = j.contextType) && i[d.__c], ne = d ? w ? w.props.value : d.__ : i, r.__c ? 2 & (h = t.__c = r.__c).__g && (h.__g |= 1) : (C ? t.__c = h = new j(S, ne) : (t.__c = h = new ae(S, ne), h.constructor = j, h.render = Ce), w && w.sub(h), h.state || (h.state = {}), h.__n = i, h.__g |= 8, h.__h = [], h.__k = []), C && (h.__s || (h.__s = h.state), j.getDerivedStateFromProps && (h.__s == h.state && (h.__s = T({}, h.__s)), T(h.__s, j.getDerivedStateFromProps(S, h.__s)))), _ = h.props, v = h.state, h.__v = t, r.__c) {
				if (C && !j.getDerivedStateFromProps && S !== _ && h.componentWillReceiveProps && h.componentWillReceiveProps(S, ne), t.__v == r.__v && !(8 & h.__g) || !(4 & h.__g) && h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(S, h.__s, ne)) {
					t.__v != r.__v && (h.props = S, h.state = h.__s, h.__g &= -9), t.__e = r.__e, t.__k = r.__k, t.__k.some(function(e) {
						e && (e.__ = t);
					}), ee.push.apply(h.__h, h.__k), h.__k = [], h.__h.length && s.push(h), c = oe(r);
					break n;
				}
				h.componentWillUpdate && h.componentWillUpdate(S, h.__s, ne), C && h.componentDidUpdate && h.__h.push(function() {
					h.componentDidUpdate(_, v, y);
				});
			} else C && !j.getDerivedStateFromProps && h.componentWillMount && h.componentWillMount(), C && h.componentDidMount && h.__h.push(h.componentDidMount);
			if (h.context = ne, h.props = S, h.__P = e, h.__g &= -5, E = n.__r, D = 0, C) h.state = h.__s, h.__g &= -9, E && E(t), d = h.render(h.props, h.state, h.context), ee.push.apply(h.__h, h.__k), h.__k = [];
			else do
				h.__g &= -9, E && E(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
			while (8 & h.__g && ++D < 25);
			h.state = h.__s, h.getChildContext && (i = T({}, i, h.getChildContext())), C && r.__c && h.getSnapshotBeforeUpdate && (y = h.getSnapshotBeforeUpdate(_, v)), O = d && d.type === k && d.key == b ? ye(d.props.children) : d, S.__P && (d = c, a = (e = S.__P).namespaceURI, r.props && r.props.__P != e && (r.__k.some(function(e) {
				e && Se(e, e);
			}), r.__k = b), c = r.__k ? oe(r, 0) : b), c = le(e, te(O) ? O : [O], t, r, i, a, o, s, c, l, u), S.__P && (t.__e = b, c = d), t.__u &= -161, h.__h.length && s.push(h), h.__g &= -4;
		} catch (e) {
			if (s.length = m, t.__v = b, l || o) {
				if (e.then) {
					if (ie = 0, t.__u |= l ? 160 : 128, o) {
						for (ce = 0; ce < o.length; ce++) if (A = o[ce]) {
							if (A.nodeType == 8) {
								if (o[ce] = b, A.data.startsWith("$s")) ie++ || (se = A);
								else if (A.data.startsWith("/$s") && !--ie) {
									c = A;
									break;
								}
							} else ie && (o[ce] = b);
						}
					}
					if (!se) {
						for (; c && c.nodeType == 8 && c.nextSibling;) c = c.nextSibling;
						o && (o[o.indexOf(c)] = b), se = c;
					}
					t.__c.__z = se, t.__e = c;
				} else o && o.some(re);
			} else t.__e = r.__e;
			t.__k ||= r.__k || [], e.then || _e(t), n.__e(e, t, r);
		}
	} else c = t.__e = be(r.__e, t, r, i, a, o, s, l, u, e);
	return (d = n.diffed) && d(t), 128 & t.__u ? x : c;
}
function _e(e) {
	e && (e.__c && (e.__c.__g |= 4), e.__k && e.__k.some(_e));
}
function ve(e, t, r) {
	for (var i = 0; i < r.length;) xe(r[i++], r[i++], r[i++]);
	n.__c && n.__c(t, e), e.some(function(t) {
		try {
			e = t.__h, t.__h = [], e.some(function(e) {
				e.call(t);
			});
		} catch (e) {
			n.__e(e, t.__v);
		}
	});
}
function ye(e) {
	return typeof e != "object" || e == b || e.__b ? e : te(e) ? e.map(ye) : e.constructor === x ? T({ constructor: x }, e) : b;
}
function be(e, t, r, i, a, o, s, c, l, u) {
	var d, f, p, m, h, g, ee, w, T, E = r.props || S, D = t.props, O = t.type;
	if (O == "svg" ? a = _ : O == "math" ? a = y : a ||= v, o) {
		for (d = 0; d < o.length; d++) if ((h = o[d]) && (O ? h.localName == O : h.nodeType == 3)) {
			e = h, o[d] = b;
			break;
		}
	}
	if (!e) {
		if (w = u.ownerDocument, !O) return w.createTextNode(D);
		e = w.createElementNS(a, O, D.is && D), c &&= (n.__m && n.__m(t, o), !1), o = b;
	}
	if (O) {
		if (u = O == "template" ? e.content : e, o = O == "textarea" && D.defaultValue != b ? b : o && ne.call(u.childNodes), !c && o) for (E = {}, d = 0; d < e.attributes.length; d++) E[(h = e.attributes[d]).name] = h.value;
		for (d in E) h = E[d], d == "dangerouslySetInnerHTML" ? p = h : d == "children" || d in D || d == "value" && "defaultValue" in D || d == "checked" && "defaultChecked" in D || me(e, d, b, h, a);
		for (d in T = 1 & r.__u, D) h = D[d], d == "children" ? m = h : d == "dangerouslySetInnerHTML" ? f = h : d == "value" ? g = h : d == "checked" ? ee = h : c && typeof h != "function" || !(E[d] !== h || T && h != b) || me(e, d, h, E[d], a);
		f ? (c || p && (f.__html == p.__html || f.__html == e.innerHTML) || (e.innerHTML = f.__html), t.__k = []) : (p && (e.textContent = ""), (O == "foreignObject" || a == y && C.test(O)) && (a = v), le(u, te(m) ? m : [m], t, r, i, a, o, s, o ? o[0] : r.__k && oe(r, 0), c, l), o && o.some(re)), c && O != "textarea" || (d = "value", O == "progress" && g == b ? e.removeAttribute(d) : g == x || g === e[d] && (O != "progress" || g) || me(e, d, g, E[d], a), d = "checked", ee != x && ee != e[d] && me(e, d, ee, E[d], a));
	} else E === D || c && e.data == D || (e.data = D);
	return e;
}
function xe(e, t, r) {
	try {
		typeof e == "function" ? (typeof e.__u == "function" && e.__u(), (typeof e.__u != "function" || t) && (e.__u = e(t))) : e.current = t;
	} catch (e) {
		n.__e(e, r);
	}
}
function Se(e, t, r) {
	var i, a;
	if (n.unmount && n.unmount(e), !(i = e.ref) || i.current && i.current != e.__e || xe(i, b, t), i = e.__c) {
		if (i.componentWillUnmount) try {
			i.componentWillUnmount();
		} catch (e) {
			n.__e(e, t);
		}
		i.__P = i.__n = b;
	}
	if (i = e.__k) for (a = 0; a < i.length; a++) i[a] && Se(i[a], t, typeof e.type != "function" || r && !e.props.__P);
	(i = e.__e) && (r || re(i), i.__e && (i.__e = b)), e.__e = e.__c = e.__ = b;
}
function Ce(e, t, n) {
	return this.constructor(e, n);
}
function we(e, t) {
	var r, i, a, o;
	n.__ && n.__(e, t), t.nodeType == 9 && (t = t.documentElement), i = (r = e && e.__u & g) ? b : t.__k, t.__k = E(k, b, [e]), a = [], o = [], ge(t, t.__k, i || S, S, t.namespaceURI, i ? b : t.firstChild ? ne.call(t.childNodes) : b, a, i ? i.__e : t.firstChild, r, o), ve(a, t.__k, o), t.__k.props.children = b;
}
function Te(e, t) {
	e.__u |= g, we(e, t);
}
function Ee(e) {
	function t(e) {
		var n, r;
		return this.getChildContext || (n = /* @__PURE__ */ new Set(), (r = {})[t.__c] = this, this.getChildContext = function() {
			return r;
		}, this.shouldComponentUpdate = function(e) {
			this.props.value != e.value && n.forEach(function(e) {
				e.__g |= 4, A(e);
			});
		}, this.sub = function(e) {
			n.add(e);
			var t = e.componentWillUnmount;
			e.componentWillUnmount = function() {
				n.delete(e), t && t.call(e);
			};
		}), e.children;
	}
	return t.__c = "__cC" + h++, t.__ = e, t.Provider = (t.Consumer = function(e, t) {
		return e.children(t);
	}).contextType = t, t;
}
function De(e) {
	return e.children;
}
function Oe(e, t) {
	return E(De, { __P: t }, e);
}
n = { __e: function(e, t, n, r) {
	for (var i, a; t = t.__;) if ((i = t.__c) && !(1 & i.__g)) {
		i.__g |= 4;
		try {
			if ((a = i.constructor) && a.getDerivedStateFromError && i.setState(a.getDerivedStateFromError(e)), i.componentDidCatch && i.componentDidCatch(e, r || {}), 8 & i.__g) return void (i.__g |= 2);
		} catch (t) {
			e = t;
		}
	}
	throw s = 0, e;
} }, r = 0, i = function(e) {
	return e != b && e.constructor === x;
}, ae.prototype.setState = function(e, t) {
	var n = this.__s;
	n && n != this.state || (n = this.__s = T({}, this.state)), typeof e == "function" && (e = e(T({}, n), this.props)), e && (T(n, e), this.__v && (t && this.__k.push(t), A(this)));
}, ae.prototype.forceUpdate = function(e) {
	this.__v && (this.__g |= 4, e && this.__h.push(e), A(this));
}, ae.prototype.render = k, a = [], s = 0, c = function(e, t) {
	return e.__v.__b - t.__v.__b;
}, l = Symbol(), u = Symbol(), d = /(PointerCapture)$|Capture$/i, f = 0, p = he(!1), m = he(!0), h = 0;
// node_modules/.pnpm/preact@11.0.0-rc.1/node_modules/preact/hooks/dist/hooks.mjs
var ke, N, Ae, je, Me = Object.is, Ne = 0, Pe = [], Fe = [], P = n, Ie = P.__b, Le = P.__r, Re = P.diffed, ze = P.__c, Be = P.unmount, Ve = P.__;
function He(e, t) {
	P.__h && P.__h(N, e, Ne || t), Ne = 0;
	var n = N.__H || (N.__H = {
		__: [],
		__h: []
	});
	return e >= n.__.length && n.__.push({}), n.__[e];
}
function F(e) {
	return Ne = 1, Ue(at, e);
}
function Ue(e, t, n) {
	var r = He(ke++, 2);
	if (r.t = e, !r.__c && (r.__ = [n ? n(t) : at(void 0, t), function(e) {
		var t = r.__N ? r.__N[0] : r.__[0], n = r.t(t, e);
		Me(t, n) || (r.__N = [n, r.__[1]], r.__c.setState({}));
	}], r.__c = N, !N.__f)) {
		N.__f = !0;
		var i = N.shouldComponentUpdate;
		N.shouldComponentUpdate = function(e, t, n) {
			var r = this.__H;
			if (!r) return !0;
			var a = !1, o = this.props != e;
			if (r.__.some(function(e) {
				e.__N && (a = !0, Me(e.__[0], e.__N[0]) || (o = !0));
			}), i) {
				var s = i.call(this, e, t, n);
				return a ? s || o : s;
			}
			return !a || o;
		};
	}
	return r.__;
}
function I(e, t) {
	var n = He(ke++, 3);
	!P.__s && it(n.__H, t) && (n.u = !0, n.__ = e, n.i = t, N.__H.__h.push(n));
}
function We(e, t) {
	var n = He(ke++, 4);
	!P.__s && it(n.__H, t) && (n.__ = e, n.i = t, N.__h.push(n));
}
function Ge(e) {
	return Ne = 5, qe(function() {
		return { current: e };
	}, []);
}
function Ke(e, t, n) {
	Ne = 6, We(function() {
		if (typeof e == "function") {
			var n = e(t());
			return function() {
				e(null), n && typeof n == "function" && n();
			};
		}
		if (e) return e.current = t(), function() {
			return e.current = null;
		};
	}, n == null ? n : n.concat(e));
}
function qe(e, t) {
	var n = He(ke++, 7);
	return it(n.__H, t) && (n.__ = e(), n.__H = t), n.__;
}
function Je(e, t) {
	return Ne = 8, qe(function() {
		return e;
	}, t);
}
function Ye(e) {
	var t = N.context[e.__c], n = He(ke++, 9);
	return n.c = e, t ? (n.__ ?? (n.__ = !0, t.sub(N)), t.props.value) : e.__;
}
function Xe(e, t) {
	P.useDebugValue && P.useDebugValue(t ? t(e) : e);
}
function Ze() {
	var e = He(ke++, 11);
	if (!e.__) {
		for (var t = N.__v; !t.__m && t.__;) t = t.__;
		var n = t.__m || (t.__m = [0, 0]);
		e.__ = "P" + n[0] + "-" + n[1]++;
	}
	return e.__;
}
function Qe() {
	var e;
	do {
		for (; e = Fe.shift();) try {
			nt(e);
		} catch (t) {
			P.__e(t, { __: (e = e.u) && e.__v });
		}
		for (; e = Pe.shift();) {
			var t = e.__H;
			if (e.__P && t) try {
				t.__h.some(nt), t.__h.some(rt), t.__h = [];
			} catch (n) {
				t.__h = [], P.__e(n, e.__v);
			}
		}
	} while (Fe.length);
}
P.__b = function(e) {
	N = null, Ie && Ie(e);
}, P.__ = function(e, t) {
	e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ve && Ve(e, t);
}, P.__r = function(e) {
	Le && Le(e), ke = 0;
	var t = (N = e.__c).__H;
	t && (Ae == N ? N.__h = [] : (t.__h.some(nt), t.__h.some(rt), ke = 0), t.__h = [], t.__.some(function(e) {
		e.__N && (e.__ = e.__N), e.i = e.__N = void 0;
	})), Ae = N;
}, P.diffed = function(e) {
	Re && Re(e);
	var t = e.__c;
	t && t.__H && (t.__H.__h.length && tt(Pe.push(t)), t.__H.__.some(function(e) {
		e.i && (e.__H = e.i);
	})), Ae = N = null;
}, P.__c = function(e, t) {
	t.some(function(e) {
		try {
			e.__h.some(nt), e.__h = e.__h.filter(function(e) {
				return !e.__ || rt(e);
			});
		} catch (n) {
			t.some(function(e) {
				e.__h &&= [];
			}), t = [], P.__e(n, e.__v);
		}
	}), ze && ze(e, t);
}, P.unmount = function(e) {
	Be && Be(e);
	var t = e.__c;
	if (t && t.__H) {
		for (var n, r = e.__; r && (!r.__c || !r.__c.__P);) r = r.__;
		t.__H.__.some(function(e) {
			try {
				e.u ? (e.u = r && r.__c, tt(Fe.push(e))) : nt(e);
			} catch (e) {
				n = e;
			}
		}), t.__H = void 0, n && P.__e(n, t.__v);
	}
};
var $e = typeof requestAnimationFrame == "function";
function et(e) {
	var t, n = function() {
		clearTimeout(r), $e && cancelAnimationFrame(t), setTimeout(e);
	}, r = setTimeout(n, 35);
	$e && (t = requestAnimationFrame(n));
}
function tt(e) {
	e != 1 && je == P.requestAnimationFrame || ((je = P.requestAnimationFrame) || et)(Qe);
}
function nt(e) {
	var t = N, n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), N = t;
}
function rt(e) {
	var t = N;
	e.__c = e.__(), N = t;
}
function it(e, t) {
	return !e || e.length != t.length || t.some(function(t, n) {
		return !Me(t, e[n]);
	});
}
function at(e, t) {
	return typeof t == "function" ? t(e) : t;
}
// node_modules/.pnpm/zustand@5.0.11_react@19.1.0/node_modules/zustand/esm/vanilla.mjs
var ot = (e) => {
	let t, n = /* @__PURE__ */ new Set(), r = (e, r) => {
		let i = typeof e == "function" ? e(t) : e;
		if (!Object.is(i, t)) {
			let e = t;
			t = r ?? (typeof i != "object" || !i) ? i : Object.assign({}, t, i), n.forEach((n) => n(t, e));
		}
	}, i = () => t, a = {
		setState: r,
		getState: i,
		getInitialState: () => o,
		subscribe: (e) => (n.add(e), () => n.delete(e))
	}, o = t = e(r, i, a);
	return a;
}, st = ((e) => e ? ot(e) : ot), ct = function(e, t, n) {
	return e == null ? null : de(de(e).map(t.bind(n)));
}, lt = {
	map: ct,
	forEach: ct,
	count: function(e) {
		return e ? de(e).length : 0;
	},
	only: function(e) {
		var t = de(e);
		if (t.length != 1) throw "Children.only";
		return t[0];
	},
	toArray: de
}, ut = Object.assign;
function dt(e, t) {
	for (var n in e) if (n != "__source" && e[n] !== t[n]) return !0;
	for (var r in t) if (r != "__source" && !(r in e)) return !0;
	return !1;
}
var ft = /^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;
function pt(e, t) {
	this.props = e, this.context = t;
}
(pt.prototype = new ae()).isPureReactComponent = !0, pt.prototype.shouldComponentUpdate = function(e, t) {
	return dt(this.props, e) || dt(this.state, t);
};
var mt = Symbol.for("react.forward_ref");
function ht(e) {
	function t(t) {
		var n = ut({}, t);
		return delete n.ref, e(n, t.ref || null);
	}
	return t.$$typeof = mt, t.render = e, t.prototype.isReactComponent = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
}
function gt(e) {
	e();
}
function _t(e) {
	return e;
}
function vt() {
	return [!1, gt];
}
var yt = We;
function bt(e) {
	var t = Ge(e);
	return t.current = e, function() {
		return t.current.apply(void 0, arguments);
	};
}
function xt(e, t) {
	function n(e) {
		var n = this.props.ref;
		return n != e.ref && n && (typeof n == "function" ? n(null) : n.current = null), t ? !t(this.props, e) || n != e.ref : dt(this.props, e);
	}
	function r(t) {
		return this.shouldComponentUpdate = n, E(e, t);
	}
	return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.type = e, r;
}
function St(e, t) {
	var n = Oe(e, t);
	return n.containerInfo = t, n;
}
var Ct, wt, Tt, Et = Symbol.for("react.element"), Dt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ot = /[A-Z0-9]/g, kt = typeof document < "u", At = /* @__PURE__ */ Rt(function(e, t, r) {
	var i = n.__s || wt ? (r || t)() : t(), a = F({ t: {
		__: i,
		u: t
	} }), o = a[0].t, s = a[1];
	return We(function() {
		o.__ = i, o.u = t, jt(o) && s({ t: o });
	}, [
		e,
		i,
		t
	]), I(function() {
		return jt(o) && s({ t: o }), e(function() {
			jt(o) && s({ t: o });
		});
	}, [e]), i;
});
function jt(e) {
	try {
		return !Object.is(e.__, e.u());
	} catch {
		return !0;
	}
}
var Mt = function(e) {
	return /fil|che|rad/.test(e);
};
function Nt(e, t, n) {
	return t.__k ?? (t.textContent = ""), we(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
function Pt(e, t, n) {
	return Te(e, t), typeof n == "function" && n(), e ? e.__c : null;
}
ae.prototype.isReactComponent = !0, [
	"componentWillMount",
	"componentWillReceiveProps",
	"componentWillUpdate"
].forEach(function(e) {
	Object.defineProperty(ae.prototype, e, {
		configurable: !0,
		get: function() {
			return this["UNSAFE_" + e];
		},
		set: function(t) {
			Object.defineProperty(this, e, {
				configurable: !0,
				writable: !0,
				value: t
			});
		}
	});
});
var Ft = n.event;
n.event = function(e) {
	return Ft && (e = Ft(e)), e.persist = function() {}, e.isPropagationStopped = function() {
		return this.cancelBubble;
	}, e.isDefaultPrevented = function() {
		return this.defaultPrevented;
	}, e.nativeEvent = e;
};
var It = {
	configurable: !0,
	get: function() {
		return this.class;
	}
}, Lt = n.vnode;
function Rt(e) {
	if (!Tt) {
		Tt = !0;
		var t = n.__r;
		n.__r = function(e) {
			t && t(e), 32 & e.__u && (wt = e), Ct = e.__c;
		};
		var r = n.diffed;
		n.diffed = function(e) {
			r && r(e), Ct = null, wt == e && (wt = null);
		};
	}
	return e;
}
n.vnode = function(e) {
	if (typeof e.type == "string") (function(e) {
		var t = e.props, n = e.type, r = {}, i = n.indexOf("-") == -1;
		for (var a in t) {
			var o = t[a];
			if (!(a == "value" && "defaultValue" in t && o == null || kt && a == "children" && n == "noscript" || a == "class" || a == "className")) {
				if (a == "style" && typeof o == "object") {
					var s = void 0;
					for (var c in o) typeof o[c] != "number" || ft.test(c) || (s ||= o = ut({}, o), o[c] += "px");
				} else if (a == "defaultValue" && "value" in t && t.value == null) a = "value";
				else if (a == "download" && !0 === o) o = "";
				else if (a == "translate" && o === "no") o = !1;
				else if (a[0] == "o" && a[1] == "n") {
					var l = a.toLowerCase();
					l == "ondoubleclick" ? a = "ondblclick" : l != "onchange" || n != "input" && n != "textarea" || Mt(t.type) ? l == "onfocus" ? a = "onfocusin" : l == "onblur" && (a = "onfocusout") : l = a = "oninput", l == "oninput" && r[a = l] && (a = "oninputCapture");
				} else i && Dt.test(a) ? a = a.replace(Ot, "-$&").toLowerCase() : o === null && (o = void 0);
				r[a] = o;
			}
		}
		n == "select" && (r.multiple && Array.isArray(r.value) && (r.value = de(t.children).forEach(function(e) {
			e.props.selected = r.value.indexOf(e.props.value) != -1;
		})), r.defaultValue != null && (r.value = de(t.children).forEach(function(e) {
			e.props.selected = r.multiple ? r.defaultValue.indexOf(e.props.value) != -1 : r.defaultValue == e.props.value;
		}))), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", It)) : t.className && (r.class = r.className = t.className), e.props = r;
	})(e);
	else if (typeof e.type == "function" && ("ref" in e.props && "prototype" in e.type && e.type.prototype.render && (e.ref = e.props.ref, delete e.props.ref), e.type.defaultProps)) {
		var t = ut({}, e.props);
		for (var n in e.type.defaultProps) t[n] === void 0 && (t[n] = e.type.defaultProps[n]);
		e.props = t;
	}
	e.$$typeof = Et, Lt && Lt(e);
};
var zt = /* @__PURE__ */ Rt(function(e) {
	if (e.then) {
		if (e.status == "fulfilled") return e.value;
		throw e.status == "rejected" ? e.reason : (e.status || (e.status = "pending", e.then(function(t) {
			e.status = "fulfilled", e.value = t;
		}, function(t) {
			e.status = "rejected", e.reason = t;
		})), e);
	}
	var t = e.__c, n = Ct.__n[t];
	return n ? (Ct[t] || (Ct[t] = !0, n.sub(Ct)), n.props.value) : e.__;
}), Bt = { ReactCurrentDispatcher: { current: {
	readContext: zt,
	useCallback: Je,
	useContext: Ye,
	useDebugValue: Xe,
	useDeferredValue: _t,
	useEffect: I,
	useId: Ze,
	useImperativeHandle: Ke,
	useInsertionEffect: yt,
	useLayoutEffect: We,
	useMemo: qe,
	useReducer: Ue,
	useRef: Ge,
	useState: F,
	useSyncExternalStore: At,
	useTransition: vt
} } };
function Vt(e, t, n) {
	return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(e) {
		typeof e.__c == "function" && e.__c();
	}), e.__c.__H = null), (e = ut({ constructor: void 0 }, e)).__c != null && (e.__c.__P == n && (e.__c.__P = t), e.__c.__g |= 4, e.__c = null), e.__k = e.__k && e.__k.map(function(e) {
		return Vt(e, t, n);
	})), e;
}
function Ht(e, t, n) {
	return e && n && (typeof e.type == "string" && (e.__u |= 1), e.__v = null, e.__k = e.__k && e.__k.map(function(e) {
		return Ht(e, t, n);
	}), e.__c && e.__c.__P == t && (e.__e && n.appendChild(e.__e), e.__c.__g |= 4, e.__c.__P = n)), e;
}
function Ut() {
	function e() {
		this.__u = 0, this.o = null, this.__b = null;
	}
	return function() {
		var e = n.__e;
		n.__e = function(t, n, r, i) {
			if (t.then) {
				for (var a, o = n; o = o.__;) if ((a = o.__c) && a.__c) return n.__e ?? (n.__e = r.__e, n.__k = r.__k || []), a.__c(t, n);
			}
			e(t, n, r, i);
		};
		var t = n.unmount;
		n.unmount = function(e) {
			var n = e.__c;
			n && (n.__z = !0), n && n.__R && n.__R(), t && t(e);
		};
	}(), (e.prototype = new ae()).__c = function(e, t) {
		var n = this, r = t.__c;
		this.o ??= [], this.o.push(r);
		var i = !1, a = function() {
			i || n.__z || (i = !0, r.__R = null, s());
		};
		r.__R = a;
		var o = r.__P;
		r.__P = null;
		var s = function() {
			if (!--n.__u) {
				if (n.state.__a) {
					var e = n.state.__a;
					n.__v.__k[0] = Ht(e, e.__c.__P, e.__c.__O);
				}
				var t;
				for (n.setState({ __a: n.__b = null }); t = n.o.pop();) t.__P = o, t.forceUpdate();
			}
		};
		this.__u++ || 32 & t.__u || this.setState({ __a: this.__b = this.__v.__k[0] }), e.then(a, a);
	}, e.prototype.componentWillUnmount = function() {
		this.o = [];
	}, e.prototype.render = function(e, t) {
		if (this.__b) {
			if (this.__v.__k) {
				var n = document.createElement("div"), r = this.__v.__k[0].__c;
				this.__v.__k[0] = Vt(this.__b, n, r.__O = r.__P);
			}
			this.__b = null;
		}
		return [E(k, null, t.__a ? null : e.children), t.__a && E(k, null, e.fallback)];
	}, e;
}
var Wt = /* @__PURE__ */ Ut();
function Gt(e) {
	var t, n, r, i = null;
	function a(a) {
		if (t || (t = e()).then(function(e) {
			e && (i = e.default || e), r = !0;
		}, function(e) {
			n = e, r = !0;
		}), n) throw n;
		if (!r) throw t;
		return i ? E(i, a) : null;
	}
	return a.displayName = "Lazy", a;
}
var Kt = "19.0.0";
function qt(e) {
	return E.bind(null, e);
}
function Jt(e) {
	return !!e && e.$$typeof === Et;
}
function Yt(e) {
	return Jt(e) && e.type == k;
}
function Xt(e) {
	return !!e && typeof e.displayName == "string" && e.displayName.indexOf("Memo(") == 0;
}
function Zt(e) {
	return Jt(e) ? D.apply(null, arguments) : e;
}
function Qt(e) {
	return !!e.__k && (we(null, e), !0);
}
function $t(e) {
	return e && (e.__v && e.__v.__e || e.nodeType == 1 && e) || null;
}
var en = function(e, t) {
	var r, i = n.debounceRendering;
	n.debounceRendering = function(e) {
		r = e;
	};
	try {
		var a = e(t);
		return r && r(), a;
	} finally {
		n.debounceRendering = i;
	}
};
function tn(e, t) {
	return e(t);
}
var nn = {
	useState: F,
	useId: Ze,
	useReducer: Ue,
	useEffect: I,
	useLayoutEffect: We,
	useInsertionEffect: yt,
	useTransition: vt,
	useDeferredValue: _t,
	useSyncExternalStore: At,
	useEffectEvent: bt,
	startTransition: gt,
	useRef: Ge,
	useImperativeHandle: Ke,
	useMemo: qe,
	useCallback: Je,
	useContext: Ye,
	use: zt,
	useDebugValue: Xe,
	version: Kt,
	Children: lt,
	render: Nt,
	hydrate: Pt,
	unmountComponentAtNode: Qt,
	createPortal: St,
	createElement: E,
	createContext: Ee,
	createFactory: qt,
	cloneElement: Zt,
	createRef: ie,
	Fragment: k,
	isValidElement: Jt,
	isElement: Jt,
	isFragment: Yt,
	isMemo: Xt,
	findDOMNode: $t,
	Component: ae,
	PureComponent: pt,
	memo: xt,
	forwardRef: ht,
	flushSync: en,
	unstable_batchedUpdates: tn,
	StrictMode: k,
	Suspense: Wt,
	lazy: Gt,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Bt
}, rn = (e) => e;
function an(e, t = rn) {
	let n = nn.useSyncExternalStore(e.subscribe, nn.useCallback(() => t(e.getState()), [e, t]), nn.useCallback(() => t(e.getInitialState()), [e, t]));
	return nn.useDebugValue(n), n;
}
var on = (e) => {
	let t = st(e), n = (e) => an(t, e);
	return Object.assign(n, t), n;
}, L = ((e) => e ? on(e) : on), sn = L()(() => ({
	path: "",
	version: ""
})), cn = () => (I(() => {
	let e = sn.getState();
	e.path && e.version || sn.setState({
		path: window?.VLibrasWidget?.path ?? "./",
		version: "7.12.3"
	});
}, []), sn());
// src/common/hooks/use-debounced-callback.ts
function ln(e, t) {
	let n = Ge(null);
	return I(() => () => {
		n.current && clearTimeout(n.current);
	}, []), (r) => {
		n.current && clearTimeout(n.current), n.current = setTimeout(() => e(r), t);
	};
}
// src/common/hooks/use-media-query.ts
var un = (e) => {
	let [t, n] = F(!1);
	return I(() => {
		function t(e) {
			n(e.matches);
		}
		let r = matchMedia(e);
		return r.addEventListener("change", t), n(r.matches), () => r.removeEventListener("change", t);
	}, [e]), t;
}, dn = L()(() => ({ isExpanded: !1 })), fn = () => {
	let e = dn((e) => e.isExpanded);
	return un("(max-width: 640px)") && !e;
}, pn = {
	get: dn.getState,
	set: dn.setState
}, mn = ({ mutationFn: e, onMutate: t, onSettled: n }) => {
	let [r, i] = F(!1), [a, o] = F(null);
	return {
		mutateAsync: async (r) => {
			i(!0), o(null), t?.(r);
			let a, s = null;
			try {
				return a = await e(r), a;
			} catch (e) {
				throw s = e instanceof Error ? e : Error(String(e)), o(s), s;
			} finally {
				i(!1), n?.(a, s, r);
			}
		},
		isPending: r,
		error: a
	};
}, hn = /* @__PURE__ */ new Map(), gn = (e) => {
	let t = hn.get(e);
	return t || (t = {
		timestamp: 0,
		listeners: /* @__PURE__ */ new Set()
	}, hn.set(e, t)), t;
}, _n = (e, t) => {
	let n = gn(e);
	return n.promise ||= t().then((e) => (n.data = e, n.error = void 0, n.timestamp = Date.now(), e)).catch((e) => {
		throw n.error = e instanceof Error ? e : Error(String(e)), n.error;
	}).finally(() => {
		n.promise = void 0;
		for (let e of n.listeners) e();
	}), n.promise;
}, vn = 3e5, yn = ({ queryKey: e, queryFn: t, enabled: n = !0, select: r, staleTime: i = vn }) => {
	let a = JSON.stringify(e), [, o] = F(0), s = Ge({});
	I(() => {
		if (!n) return;
		let e = gn(a);
		Date.now() - e.timestamp > i && _n(a, t).catch(() => {});
		let r = () => o((e) => e + 1);
		return e.listeners.add(r), () => e.listeners.delete(r);
	}, [
		a,
		n,
		i
	]);
	let c = gn(a), l = n && !!c.promise, u, d;
	if (c.data === void 0) u = void 0;
	else if (!r) u = c.data;
	else if (s.current.source === c.data) u = s.current.result;
	else try {
		u = r(c.data), s.current = {
			source: c.data,
			result: u
		};
	} catch (e) {
		d = e instanceof Error ? e : Error(String(e)), console.error("Erro ao processar resposta da API (formato inesperado):", d);
	}
	return {
		data: n ? u : void 0,
		error: n ? d ?? c.error ?? null : null,
		isLoading: n && c.data === void 0 && l,
		isFetching: l,
		refetch: async () => {
			await _n(a, t).catch(() => {});
		}
	};
}, bn = (e) => Symbol.iterator in e, xn = (e) => "entries" in e, Sn = (e, t) => {
	let n = e instanceof Map ? e : new Map(e.entries()), r = t instanceof Map ? t : new Map(t.entries());
	if (n.size !== r.size) return !1;
	for (let [e, t] of n) if (!r.has(e) || !Object.is(t, r.get(e))) return !1;
	return !0;
}, Cn = (e, t) => {
	let n = e[Symbol.iterator](), r = t[Symbol.iterator](), i = n.next(), a = r.next();
	for (; !i.done && !a.done;) {
		if (!Object.is(i.value, a.value)) return !1;
		i = n.next(), a = r.next();
	}
	return !!i.done && !!a.done;
};
function wn(e, t) {
	return Object.is(e, t) ? !0 : typeof e != "object" || !e || typeof t != "object" || !t || Object.getPrototypeOf(e) !== Object.getPrototypeOf(t) ? !1 : bn(e) && bn(t) ? xn(e) && xn(t) ? Sn(e, t) : Cn(e, t) : Sn({ entries: () => Object.entries(e) }, { entries: () => Object.entries(t) });
}
// node_modules/.pnpm/zustand@5.0.11_react@19.1.0/node_modules/zustand/esm/react/shallow.mjs
function Tn(e) {
	let t = nn.useRef(void 0);
	return (n) => {
		let r = e(n);
		return wn(t.current, r) ? t.current : t.current = r;
	};
}
// src/common/utils/index.ts
function En(e, ...t) {
	let n = { ...e };
	for (let e of t) delete n[e];
	return n;
}
function Dn(e, ...t) {
	let n = {};
	for (let r of t) n[r] = e[r];
	return n;
}
var On = (e) => new Promise((t) => setTimeout(t, e)), kn = (e) => {
	let [, t = "", n = e] = e.match(/^([a-z][a-z\d+.-]*:\/\/)(.*)$/i) ?? [];
	return t + n.replace(/\/+/g, "/");
}, An = (e) => {
	let { path: t } = sn.getState();
	return kn(`${t}/assets/${e}`);
}, jn = () => Math.random().toString(36).slice(2, 8), Mn = (...e) => Tn(qe(() => (t) => Dn(t, ...e), [JSON.stringify(e)])), Nn = "@vlibras-theme", Pn = (e) => ["light", "dark"].includes(e), Fn = () => {
	try {
		let e = localStorage.getItem(Nn) || "";
		return Pn(e) ? e : "light";
	} catch {
		return "light";
	}
}, In = (e) => {
	try {
		localStorage.setItem(Nn, e);
	} catch {}
}, Ln = L((e) => ({
	theme: Fn(),
	toggleTheme: () => e((e) => {
		let t = e.theme === "dark" ? "light" : "dark";
		return In(t), {
			theme: t,
			isDark: t === "dark"
		};
	}),
	setTheme: (t) => {
		In(t), e({ theme: t });
	}
})), Rn = () => {
	let [e, t] = F(!1);
	return I(() => {
		let e = () => {
			t(window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches);
		};
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []), e;
}, zn = "vlibras-app-root", Bn = {}, Vn = {}, Hn = (e) => !e.isConnected, Un = () => {
	let e = Bn[zn];
	(!e || Hn(e)) && (e = document.getElementById(zn) ?? void 0, (!e || Hn(e)) && (e = document.createElement("div"), e.id = zn, e.style.zIndex = "2147483647"), document.body.appendChild(e), Bn[zn] = e);
	let t = e.shadowRoot || e.attachShadow({ mode: "open" });
	return {
		root: e,
		shadowRoot: t,
		isRootActive: () => e?.getAttribute("data-active") === "true"
	};
}, Wn = (e, t, n) => {
	let r = Vn[t];
	if (r && !Hn(r)) return r;
	let i = r ?? document.createElement("style");
	i.id = t, i.innerHTML = e, Vn[t] = i, document.head.appendChild(i), n?.();
}, Gn = (e) => {
	let t = Vn[e];
	t && (t.remove(), delete Vn[e]);
}, Kn = "VLibrasWidget_Font", qn = [
	{
		file: "rawline-500.woff2",
		weight: "500",
		style: "normal"
	},
	{
		file: "rawline-500i.woff2",
		weight: "500",
		style: "italic"
	},
	{
		file: "rawline-600.woff2",
		weight: "600",
		style: "normal"
	},
	{
		file: "rawline-600i.woff2",
		weight: "600",
		style: "italic"
	},
	{
		file: "rawline-700.woff2",
		weight: "700",
		style: "normal"
	},
	{
		file: "rawline-700i.woff2",
		weight: "700",
		style: "italic"
	}
], Jn = !1, Yn = async (e, t) => {
	if (Jn) return;
	if (Jn = !0, typeof FontFace > "u") {
		Zn(e, t);
		return;
	}
	let n = qn.map(({ file: t, weight: n, style: r }) => new FontFace(Kn, `url(${e}/assets/fonts/rawline/${t}) format('woff2')`, {
		weight: n,
		style: r
	}));
	try {
		await Xn(n);
	} catch (n) {
		console.error("Error loading default font, falling back to @font-face:", n), Zn(e, t);
	}
}, Xn = async (e) => {
	await Promise.all(e.map((e) => e.load())), e.forEach((e) => document.fonts.add(e));
}, Zn = (e, t) => {
	let n = document.createElement("style");
	n.textContent = qn.map(({ file: t, weight: n, style: r }) => `
			@font-face {
				font-family: "${Kn}";
				src: url("${e}/assets/fonts/rawline/${t}") format("woff2");
				font-weight: ${n};
				font-style: ${r};
			}
		`).join("\n"), t.appendChild(n);
}, Qn = "inert", $n = "data-inert-prev-tabindex", er = "a[href], area[href], button, input, select, textarea, iframe, object, embed, [contenteditable], [tabindex]", tr = /* @__PURE__ */ new WeakMap(), nr = (e) => [...e.matches(er) ? [e] : [], ...e.querySelectorAll(er)], rr = (e) => {
	e.hasAttribute($n) || (e.setAttribute($n, e.getAttribute("tabindex") ?? ""), e.setAttribute("tabindex", "-1"));
}, ir = (e) => {
	let t = e.getAttribute($n);
	t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex"), e.removeAttribute($n);
}, ar = (e) => {
	e.setAttribute("aria-hidden", "true");
	for (let t of nr(e)) rr(t);
	let t = new MutationObserver((e) => {
		for (let { addedNodes: t } of e) for (let e of t) if (e instanceof HTMLElement) for (let t of nr(e)) rr(t);
	});
	t.observe(e, {
		childList: !0,
		subtree: !0
	}), tr.set(e, t);
}, or = (e) => {
	e.removeAttribute("aria-hidden"), tr.get(e)?.disconnect(), tr.delete(e), e.hasAttribute($n) && ir(e);
	for (let t of e.querySelectorAll(`[${$n}]`)) ir(t);
}, sr = !1, cr = (e) => {
	if (sr || typeof HTMLElement > "u" || Qn in HTMLElement.prototype) return;
	sr = !0;
	let t = document.createElement("style");
	t.textContent = `[${Qn}] { pointer-events: none !important; user-select: none !important; }`, e.appendChild(t), e.addEventListener("focusin", (e) => {
		let t = e.target;
		t instanceof HTMLElement && t.closest(`[${Qn}]`) && t.blur();
	}, !0), Object.defineProperty(HTMLElement.prototype, Qn, {
		configurable: !0,
		get() {
			return this.hasAttribute(Qn);
		},
		set(e) {
			e ? (this.setAttribute(Qn, ""), ar(this)) : (this.removeAttribute(Qn), or(this));
		}
	});
}, lr = [
	"startsWith",
	"endsWith",
	"includes"
], ur = () => {
	try {
		return !String.prototype.startsWith.call("[", "[") || !String.prototype.endsWith.call("]", "]") || !String.prototype.includes.call("[]", "[");
	} catch {
		return !0;
	}
}, dr = () => {
	try {
		let e = document.createElement("iframe");
		e.style.display = "none", e.setAttribute("aria-hidden", "true"), document.documentElement.appendChild(e);
		let t = e.contentWindow?.String.prototype ?? null;
		return e.remove(), t;
	} catch {
		return null;
	}
}, fr = !1, pr = () => {
	if (fr) return;
	fr = !0;
	let e = ur(), t = e ? dr() : null;
	if (!e || t) for (let e of lr) try {
		let n = t ? t[e] : String.prototype[e];
		if (typeof n != "function") continue;
		Object.defineProperty(String.prototype, e, {
			value: n,
			writable: !1,
			configurable: !1,
			enumerable: !1
		});
	} catch {}
};
// node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
function mr(e) {
	var t, n, r = "";
	if (typeof e == "string" || typeof e == "number") r += e;
	else if (typeof e == "object") {
		if (Array.isArray(e)) {
			var i = e.length;
			for (t = 0; t < i; t++) e[t] && (n = mr(e[t])) && (r && (r += " "), r += n);
		} else for (n in e) e[n] && (r && (r += " "), r += n);
	}
	return r;
}
function hr() {
	for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = mr(e)) && (r && (r += " "), r += t);
	return r;
}
// node_modules/.pnpm/tailwind-merge@3.4.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var gr = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, _r = (e, t) => ({
	classGroupId: e,
	validator: t
}), vr = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), yr = "-", br = [], xr = "arbitrary..", Sr = (e) => {
	let t = Tr(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return wr(e);
			let n = e.split(yr);
			return Cr(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? gr(i, t) : t : i || br;
			}
			return n[e] || br;
		}
	};
}, Cr = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = Cr(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(yr) : e.slice(t).join(yr), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, wr = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? xr + r : void 0;
})(), Tr = (e) => {
	let { theme: t, classGroups: n } = e;
	return Er(n, t);
}, Er = (e, t) => {
	let n = vr();
	for (let r in e) {
		let i = e[r];
		Dr(i, n, r, t);
	}
	return n;
}, Dr = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		Or(i, t, n, r);
	}
}, Or = (e, t, n, r) => {
	typeof e == "string" ? kr(e, t, n) : typeof e == "function" ? Ar(e, t, n, r) : jr(e, t, n, r);
}, kr = (e, t, n) => {
	let r = e === "" ? t : Mr(t, e);
	r.classGroupId = n;
}, Ar = (e, t, n, r) => {
	Nr(e) ? Dr(e(r), t, n, r) : (t.validators === null && (t.validators = []), t.validators.push(_r(n, e)));
}, jr = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		Dr(o, Mr(t, a), n, r);
	}
}, Mr = (e, t) => {
	let n = e, r = t.split(yr), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = vr(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, Nr = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, Pr = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, Fr = "!", Ir = ":", Lr = [], Rr = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), zr = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === Ir) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(Fr) ? (c = s.slice(0, -1), l = !0) : s.startsWith(Fr) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Rr(t, l, c, u);
	};
	if (t) {
		let e = t + Ir, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Rr(Lr, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, Br = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, Vr = (e) => ({
	cache: Pr(e.cacheSize),
	parseClassName: zr(e),
	sortModifiers: Br(e),
	...Sr(e)
}), Hr = /\s+/, Ur = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a } = t, o = [], s = e.trim().split(Hr), c = "";
	for (let e = s.length - 1; e >= 0; --e) {
		let t = s[e], { isExternal: l, modifiers: u, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: p } = n(t);
		if (l) {
			c = t + (c.length > 0 ? " " + c : c);
			continue;
		}
		let m = !!p, h = r(m ? f.substring(0, p) : f);
		if (!h) {
			if (!m || (h = r(f), !h)) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			m = !1;
		}
		let g = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), _ = d ? g + Fr : g, v = _ + h;
		if (o.indexOf(v) > -1) continue;
		o.push(v);
		let y = i(h, m);
		for (let e = 0; e < y.length; ++e) {
			let t = y[e];
			o.push(_ + t);
		}
		c = t + (c.length > 0 ? " " + c : c);
	}
	return c;
}, Wr = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Gr(n)) && (i && (i += " "), i += r);
	return i;
}, Gr = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Gr(e[r])) && (n && (n += " "), n += t);
	return n;
}, Kr = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Vr(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = Ur(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Wr(...e));
}, qr = [], R = (e) => {
	let t = (t) => t[e] || qr;
	return t.isThemeGetter = !0, t;
}, Jr = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Yr = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Xr = /^\d+\/\d+$/, Zr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Qr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, $r = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ei = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ti = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ni = (e) => Xr.test(e), z = (e) => !!e && !Number.isNaN(Number(e)), ri = (e) => !!e && Number.isInteger(Number(e)), ii = (e) => e.endsWith("%") && z(e.slice(0, -1)), ai = (e) => Zr.test(e), oi = () => !0, si = (e) => Qr.test(e) && !$r.test(e), ci = () => !1, li = (e) => ei.test(e), ui = (e) => ti.test(e), di = (e) => !B(e) && !V(e), fi = (e) => wi(e, Oi, ci), B = (e) => Jr.test(e), pi = (e) => wi(e, ki, si), mi = (e) => wi(e, Ai, z), hi = (e) => wi(e, Ei, ci), gi = (e) => wi(e, Di, ui), _i = (e) => wi(e, Mi, li), V = (e) => Yr.test(e), vi = (e) => Ti(e, ki), yi = (e) => Ti(e, ji), bi = (e) => Ti(e, Ei), xi = (e) => Ti(e, Oi), Si = (e) => Ti(e, Di), Ci = (e) => Ti(e, Mi, !0), wi = (e, t, n) => {
	let r = Jr.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Ti = (e, t, n = !1) => {
	let r = Yr.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, Ei = (e) => e === "position" || e === "percentage", Di = (e) => e === "image" || e === "url", Oi = (e) => e === "length" || e === "size" || e === "bg-size", ki = (e) => e === "length", Ai = (e) => e === "number", ji = (e) => e === "family-name", Mi = (e) => e === "shadow", Ni = /*#__PURE__*/ Kr(() => {
	let e = R("color"), t = R("font"), n = R("text"), r = R("font-weight"), i = R("tracking"), a = R("leading"), o = R("breakpoint"), s = R("container"), c = R("spacing"), l = R("radius"), u = R("shadow"), d = R("inset-shadow"), f = R("text-shadow"), p = R("drop-shadow"), m = R("blur"), h = R("perspective"), g = R("aspect"), _ = R("ease"), v = R("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		V,
		B
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], ee = () => [
		"auto",
		"contain",
		"none"
	], C = () => [
		V,
		B,
		c
	], w = () => [
		ni,
		"full",
		"auto",
		...C()
	], te = () => [
		ri,
		"none",
		"subgrid",
		V,
		B
	], ne = () => [
		"auto",
		{ span: [
			"full",
			ri,
			V,
			B
		] },
		ri,
		V,
		B
	], T = () => [
		ri,
		"auto",
		V,
		B
	], re = () => [
		"auto",
		"min",
		"max",
		"fr",
		V,
		B
	], E = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], D = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], O = () => ["auto", ...C()], ie = () => [
		ni,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...C()
	], k = () => [
		e,
		V,
		B
	], ae = () => [
		...b(),
		bi,
		hi,
		{ position: [V, B] }
	], oe = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], se = () => [
		"auto",
		"cover",
		"contain",
		xi,
		fi,
		{ size: [V, B] }
	], ce = () => [
		ii,
		vi,
		pi
	], A = () => [
		"",
		"none",
		"full",
		l,
		V,
		B
	], j = () => [
		"",
		z,
		vi,
		pi
	], le = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], ue = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], M = () => [
		z,
		ii,
		bi,
		hi
	], de = () => [
		"",
		"none",
		m,
		V,
		B
	], fe = () => [
		"none",
		z,
		V,
		B
	], pe = () => [
		"none",
		z,
		V,
		B
	], me = () => [
		z,
		V,
		B
	], he = () => [
		ni,
		"full",
		...C()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [ai],
			breakpoint: [ai],
			color: [oi],
			container: [ai],
			"drop-shadow": [ai],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [di],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [ai],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [ai],
			shadow: [ai],
			spacing: ["px", z],
			text: [ai],
			"text-shadow": [ai],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				ni,
				B,
				V,
				g
			] }],
			container: ["container"],
			columns: [{ columns: [
				z,
				B,
				V,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: ee() }],
			"overscroll-x": [{ "overscroll-x": ee() }],
			"overscroll-y": [{ "overscroll-y": ee() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: w() }],
			"inset-x": [{ "inset-x": w() }],
			"inset-y": [{ "inset-y": w() }],
			start: [{ start: w() }],
			end: [{ end: w() }],
			top: [{ top: w() }],
			right: [{ right: w() }],
			bottom: [{ bottom: w() }],
			left: [{ left: w() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				ri,
				"auto",
				V,
				B
			] }],
			basis: [{ basis: [
				ni,
				"full",
				"auto",
				s,
				...C()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				z,
				ni,
				"auto",
				"initial",
				"none",
				B
			] }],
			grow: [{ grow: [
				"",
				z,
				V,
				B
			] }],
			shrink: [{ shrink: [
				"",
				z,
				V,
				B
			] }],
			order: [{ order: [
				ri,
				"first",
				"last",
				"none",
				V,
				B
			] }],
			"grid-cols": [{ "grid-cols": te() }],
			"col-start-end": [{ col: ne() }],
			"col-start": [{ "col-start": T() }],
			"col-end": [{ "col-end": T() }],
			"grid-rows": [{ "grid-rows": te() }],
			"row-start-end": [{ row: ne() }],
			"row-start": [{ "row-start": T() }],
			"row-end": [{ "row-end": T() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": re() }],
			"auto-rows": [{ "auto-rows": re() }],
			gap: [{ gap: C() }],
			"gap-x": [{ "gap-x": C() }],
			"gap-y": [{ "gap-y": C() }],
			"justify-content": [{ justify: [...E(), "normal"] }],
			"justify-items": [{ "justify-items": [...D(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...D()] }],
			"align-content": [{ content: ["normal", ...E()] }],
			"align-items": [{ items: [...D(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...D(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": E() }],
			"place-items": [{ "place-items": [...D(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...D()] }],
			p: [{ p: C() }],
			px: [{ px: C() }],
			py: [{ py: C() }],
			ps: [{ ps: C() }],
			pe: [{ pe: C() }],
			pt: [{ pt: C() }],
			pr: [{ pr: C() }],
			pb: [{ pb: C() }],
			pl: [{ pl: C() }],
			m: [{ m: O() }],
			mx: [{ mx: O() }],
			my: [{ my: O() }],
			ms: [{ ms: O() }],
			me: [{ me: O() }],
			mt: [{ mt: O() }],
			mr: [{ mr: O() }],
			mb: [{ mb: O() }],
			ml: [{ ml: O() }],
			"space-x": [{ "space-x": C() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": C() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: ie() }],
			w: [{ w: [
				s,
				"screen",
				...ie()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...ie()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...ie()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...ie()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...ie()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...ie()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				vi,
				pi
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				V,
				mi
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				ii,
				B
			] }],
			"font-family": [{ font: [
				yi,
				B,
				t
			] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				V,
				B
			] }],
			"line-clamp": [{ "line-clamp": [
				z,
				"none",
				V,
				mi
			] }],
			leading: [{ leading: [a, ...C()] }],
			"list-image": [{ "list-image": [
				"none",
				V,
				B
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				V,
				B
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: k() }],
			"text-color": [{ text: k() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...le(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				z,
				"from-font",
				"auto",
				V,
				pi
			] }],
			"text-decoration-color": [{ decoration: k() }],
			"underline-offset": [{ "underline-offset": [
				z,
				"auto",
				V,
				B
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: C() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				V,
				B
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				V,
				B
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: ae() }],
			"bg-repeat": [{ bg: oe() }],
			"bg-size": [{ bg: se() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						ri,
						V,
						B
					],
					radial: [
						"",
						V,
						B
					],
					conic: [
						ri,
						V,
						B
					]
				},
				Si,
				gi
			] }],
			"bg-color": [{ bg: k() }],
			"gradient-from-pos": [{ from: ce() }],
			"gradient-via-pos": [{ via: ce() }],
			"gradient-to-pos": [{ to: ce() }],
			"gradient-from": [{ from: k() }],
			"gradient-via": [{ via: k() }],
			"gradient-to": [{ to: k() }],
			rounded: [{ rounded: A() }],
			"rounded-s": [{ "rounded-s": A() }],
			"rounded-e": [{ "rounded-e": A() }],
			"rounded-t": [{ "rounded-t": A() }],
			"rounded-r": [{ "rounded-r": A() }],
			"rounded-b": [{ "rounded-b": A() }],
			"rounded-l": [{ "rounded-l": A() }],
			"rounded-ss": [{ "rounded-ss": A() }],
			"rounded-se": [{ "rounded-se": A() }],
			"rounded-ee": [{ "rounded-ee": A() }],
			"rounded-es": [{ "rounded-es": A() }],
			"rounded-tl": [{ "rounded-tl": A() }],
			"rounded-tr": [{ "rounded-tr": A() }],
			"rounded-br": [{ "rounded-br": A() }],
			"rounded-bl": [{ "rounded-bl": A() }],
			"border-w": [{ border: j() }],
			"border-w-x": [{ "border-x": j() }],
			"border-w-y": [{ "border-y": j() }],
			"border-w-s": [{ "border-s": j() }],
			"border-w-e": [{ "border-e": j() }],
			"border-w-t": [{ "border-t": j() }],
			"border-w-r": [{ "border-r": j() }],
			"border-w-b": [{ "border-b": j() }],
			"border-w-l": [{ "border-l": j() }],
			"divide-x": [{ "divide-x": j() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": j() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...le(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...le(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: k() }],
			"border-color-x": [{ "border-x": k() }],
			"border-color-y": [{ "border-y": k() }],
			"border-color-s": [{ "border-s": k() }],
			"border-color-e": [{ "border-e": k() }],
			"border-color-t": [{ "border-t": k() }],
			"border-color-r": [{ "border-r": k() }],
			"border-color-b": [{ "border-b": k() }],
			"border-color-l": [{ "border-l": k() }],
			"divide-color": [{ divide: k() }],
			"outline-style": [{ outline: [
				...le(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				z,
				V,
				B
			] }],
			"outline-w": [{ outline: [
				"",
				z,
				vi,
				pi
			] }],
			"outline-color": [{ outline: k() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				Ci,
				_i
			] }],
			"shadow-color": [{ shadow: k() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				Ci,
				_i
			] }],
			"inset-shadow-color": [{ "inset-shadow": k() }],
			"ring-w": [{ ring: j() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: k() }],
			"ring-offset-w": [{ "ring-offset": [z, pi] }],
			"ring-offset-color": [{ "ring-offset": k() }],
			"inset-ring-w": [{ "inset-ring": j() }],
			"inset-ring-color": [{ "inset-ring": k() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				Ci,
				_i
			] }],
			"text-shadow-color": [{ "text-shadow": k() }],
			opacity: [{ opacity: [
				z,
				V,
				B
			] }],
			"mix-blend": [{ "mix-blend": [
				...ue(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": ue() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [z] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": M() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": M() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": k() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": k() }],
			"mask-image-t-from-pos": [{ "mask-t-from": M() }],
			"mask-image-t-to-pos": [{ "mask-t-to": M() }],
			"mask-image-t-from-color": [{ "mask-t-from": k() }],
			"mask-image-t-to-color": [{ "mask-t-to": k() }],
			"mask-image-r-from-pos": [{ "mask-r-from": M() }],
			"mask-image-r-to-pos": [{ "mask-r-to": M() }],
			"mask-image-r-from-color": [{ "mask-r-from": k() }],
			"mask-image-r-to-color": [{ "mask-r-to": k() }],
			"mask-image-b-from-pos": [{ "mask-b-from": M() }],
			"mask-image-b-to-pos": [{ "mask-b-to": M() }],
			"mask-image-b-from-color": [{ "mask-b-from": k() }],
			"mask-image-b-to-color": [{ "mask-b-to": k() }],
			"mask-image-l-from-pos": [{ "mask-l-from": M() }],
			"mask-image-l-to-pos": [{ "mask-l-to": M() }],
			"mask-image-l-from-color": [{ "mask-l-from": k() }],
			"mask-image-l-to-color": [{ "mask-l-to": k() }],
			"mask-image-x-from-pos": [{ "mask-x-from": M() }],
			"mask-image-x-to-pos": [{ "mask-x-to": M() }],
			"mask-image-x-from-color": [{ "mask-x-from": k() }],
			"mask-image-x-to-color": [{ "mask-x-to": k() }],
			"mask-image-y-from-pos": [{ "mask-y-from": M() }],
			"mask-image-y-to-pos": [{ "mask-y-to": M() }],
			"mask-image-y-from-color": [{ "mask-y-from": k() }],
			"mask-image-y-to-color": [{ "mask-y-to": k() }],
			"mask-image-radial": [{ "mask-radial": [V, B] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": M() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": M() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": k() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": k() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [z] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": M() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": M() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": k() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": k() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: ae() }],
			"mask-repeat": [{ mask: oe() }],
			"mask-size": [{ mask: se() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				V,
				B
			] }],
			filter: [{ filter: [
				"",
				"none",
				V,
				B
			] }],
			blur: [{ blur: de() }],
			brightness: [{ brightness: [
				z,
				V,
				B
			] }],
			contrast: [{ contrast: [
				z,
				V,
				B
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				Ci,
				_i
			] }],
			"drop-shadow-color": [{ "drop-shadow": k() }],
			grayscale: [{ grayscale: [
				"",
				z,
				V,
				B
			] }],
			"hue-rotate": [{ "hue-rotate": [
				z,
				V,
				B
			] }],
			invert: [{ invert: [
				"",
				z,
				V,
				B
			] }],
			saturate: [{ saturate: [
				z,
				V,
				B
			] }],
			sepia: [{ sepia: [
				"",
				z,
				V,
				B
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				V,
				B
			] }],
			"backdrop-blur": [{ "backdrop-blur": de() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				z,
				V,
				B
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				z,
				V,
				B
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				z,
				V,
				B
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				z,
				V,
				B
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				z,
				V,
				B
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				z,
				V,
				B
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				z,
				V,
				B
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				z,
				V,
				B
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": C() }],
			"border-spacing-x": [{ "border-spacing-x": C() }],
			"border-spacing-y": [{ "border-spacing-y": C() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				V,
				B
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				z,
				"initial",
				V,
				B
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				V,
				B
			] }],
			delay: [{ delay: [
				z,
				V,
				B
			] }],
			animate: [{ animate: [
				"none",
				v,
				V,
				B
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				V,
				B
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: fe() }],
			"rotate-x": [{ "rotate-x": fe() }],
			"rotate-y": [{ "rotate-y": fe() }],
			"rotate-z": [{ "rotate-z": fe() }],
			scale: [{ scale: pe() }],
			"scale-x": [{ "scale-x": pe() }],
			"scale-y": [{ "scale-y": pe() }],
			"scale-z": [{ "scale-z": pe() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: me() }],
			"skew-x": [{ "skew-x": me() }],
			"skew-y": [{ "skew-y": me() }],
			transform: [{ transform: [
				V,
				B,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: he() }],
			"translate-x": [{ "translate-x": he() }],
			"translate-y": [{ "translate-y": he() }],
			"translate-z": [{ "translate-z": he() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: k() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: k() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				V,
				B
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": C() }],
			"scroll-mx": [{ "scroll-mx": C() }],
			"scroll-my": [{ "scroll-my": C() }],
			"scroll-ms": [{ "scroll-ms": C() }],
			"scroll-me": [{ "scroll-me": C() }],
			"scroll-mt": [{ "scroll-mt": C() }],
			"scroll-mr": [{ "scroll-mr": C() }],
			"scroll-mb": [{ "scroll-mb": C() }],
			"scroll-ml": [{ "scroll-ml": C() }],
			"scroll-p": [{ "scroll-p": C() }],
			"scroll-px": [{ "scroll-px": C() }],
			"scroll-py": [{ "scroll-py": C() }],
			"scroll-ps": [{ "scroll-ps": C() }],
			"scroll-pe": [{ "scroll-pe": C() }],
			"scroll-pt": [{ "scroll-pt": C() }],
			"scroll-pr": [{ "scroll-pr": C() }],
			"scroll-pb": [{ "scroll-pb": C() }],
			"scroll-pl": [{ "scroll-pl": C() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				V,
				B
			] }],
			fill: [{ fill: ["none", ...k()] }],
			"stroke-w": [{ stroke: [
				z,
				vi,
				pi,
				mi
			] }],
			stroke: [{ stroke: ["none", ...k()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
});
// src/common/lib/utils.ts
function H(...e) {
	return Ni(hr(e));
}
// node_modules/.pnpm/preact@11.0.0-rc.1/node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var Pi = 0;
Array.isArray;
function U(e, t, r, i, a, o) {
	t ||= {};
	var s, c, l = t;
	if ("ref" in l && typeof e != "function") for (c in l = {}, t) c == "ref" ? s = t[c] : l[c] = t[c];
	var u = {
		type: e,
		props: l,
		key: r,
		ref: s,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --Pi,
		__i: -1,
		__u: 0,
		__source: a,
		__self: o
	};
	return n.vnode && n.vnode(u), u;
}
// node_modules/.pnpm/zustand@5.0.11_react@19.1.0/node_modules/zustand/esm/middleware.mjs
function Fi(e, t) {
	let n;
	try {
		n = e();
	} catch {
		return;
	}
	return {
		getItem: (e) => {
			let r = (e) => e === null ? null : JSON.parse(e, t?.reviver), i = n.getItem(e) ?? null;
			return i instanceof Promise ? i.then(r) : r(i);
		},
		setItem: (e, r) => n.setItem(e, JSON.stringify(r, t?.replacer)),
		removeItem: (e) => n.removeItem(e)
	};
}
var Ii = (e) => (t) => {
	try {
		let n = e(t);
		return n instanceof Promise ? n : {
			then(e) {
				return Ii(e)(n);
			},
			catch(e) {
				return this;
			}
		};
	} catch (e) {
		return {
			then(e) {
				return this;
			},
			catch(t) {
				return Ii(t)(e);
			}
		};
	}
}, Li = (e, t) => (n, r, i) => {
	let a = {
		storage: Fi(() => window.localStorage),
		partialize: (e) => e,
		version: 0,
		merge: (e, t) => ({
			...t,
			...e
		}),
		...t
	}, o = !1, s = 0, c = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set(), u = a.storage;
	if (!u) return e((...e) => {
		console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`), n(...e);
	}, r, i);
	let d = () => {
		let e = a.partialize({ ...r() });
		return u.setItem(a.name, {
			state: e,
			version: a.version
		});
	}, f = i.setState;
	i.setState = (e, t) => (f(e, t), d());
	let p = e((...e) => (n(...e), d()), r, i);
	i.getInitialState = () => p;
	let m, h = () => {
		if (!u) return;
		let e = ++s;
		o = !1, c.forEach((e) => e(r() ?? p));
		let t = a.onRehydrateStorage?.call(a, r() ?? p) || void 0;
		return Ii(u.getItem.bind(u))(a.name).then((e) => {
			if (e) {
				if (typeof e.version == "number" && e.version !== a.version) {
					if (a.migrate) {
						let t = a.migrate(e.state, e.version);
						return t instanceof Promise ? t.then((e) => [!0, e]) : [!0, t];
					}
					console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
				} else return [!1, e.state];
			}
			return [!1, void 0];
		}).then((t) => {
			if (e !== s) return;
			let [i, o] = t;
			if (m = a.merge(o, r() ?? p), n(m, !0), i) return d();
		}).then(() => {
			e === s && (t?.(m, void 0), m = r(), o = !0, l.forEach((e) => e(m)));
		}).catch((n) => {
			e === s && t?.(void 0, n);
		});
	};
	return i.persist = {
		setOptions: (e) => {
			a = {
				...a,
				...e
			}, e.storage && (u = e.storage);
		},
		clearStorage: () => {
			u?.removeItem(a.name);
		},
		getOptions: () => a,
		rehydrate: () => h(),
		hasHydrated: () => o,
		onHydrate: (e) => (c.add(e), () => {
			c.delete(e);
		}),
		onFinishHydration: (e) => (l.add(e), () => {
			l.delete(e);
		})
	}, a.skipHydration || h(), m || p;
}, W = {
	PLAYER: "PlayerManager",
	EMOTION: "EmotionBridge",
	CUSTOMIZATION: "CustomizationBridge"
}, G = {
	PLAY_WELCOME: "playWellcome",
	PLAY: "playNow",
	STOP: "stopAll",
	REPEAT: "repeat",
	SET_SPEED: "setSlider",
	SET_AVATAR: "Change",
	SET_PAUSE_STATE: "setPauseState",
	SET_BASE_URL: "setBaseUrl",
	SET_PERSONALIZATION: "setURL",
	SET_SUBTITLES_STATE: "setSubtitlesState",
	SET_SUBTITLE_COLOR: "SetSubtitleColor",
	SET_SUBTITLE_OUTLINE_COLOR: "SetSubtitleOutlineColor",
	SET_SUBTITLE_SHADOW_COLOR: "SetSubtitleShadowColor",
	APPLY_DEFAULT_EMOTION: "ApplyDefaultEmotion",
	APPLY_HAPPY_EMOTION: "ApplyHappyEmotion",
	APPLY_SAD_EMOTION: "ApplySadEmotion",
	APPLY_ANGRY_EMOTION: "ApplyAngryEmotion",
	APPLY_DISGUST_EMOTION: "ApplyDisgustEmotion",
	APPLY_FEAR_EMOTION: "ApplyFearEmotion",
	APPLY_SURPRISE_EMOTION: "ApplySurpriseEmotion",
	APPLY_UPSET_EMOTION: "ApplyUpsetEmotion"
}, Ri = {
	ON_LOAD_PLAYER: "on_load_player",
	ON_PLAYING_STATE_CHANGE: "on_playing_state_change",
	COUNTER_GLOSS: "counter_gloss",
	UPDATE_PROGRESS: "update_progress",
	GET_AVATAR: "get_avatar",
	FINISH_WELCOME: "finish_welcome"
}, zi = [
	"default",
	"happy",
	"sad",
	"angry",
	"disgust",
	"fear",
	"surprise",
	"upset"
], Bi = {
	default: {
		name: "Padrão",
		action: G.APPLY_DEFAULT_EMOTION,
		icon: "emotions/default",
		intensity: 2
	},
	happy: {
		name: "Feliz",
		action: G.APPLY_HAPPY_EMOTION,
		icon: "emotions/happy",
		intensity: 2
	},
	sad: {
		name: "Triste",
		action: G.APPLY_SAD_EMOTION,
		icon: "emotions/sad",
		intensity: 2
	},
	angry: {
		name: "Raiva",
		action: G.APPLY_ANGRY_EMOTION,
		icon: "emotions/angry",
		intensity: 2
	},
	disgust: {
		name: "Nojo",
		action: G.APPLY_DISGUST_EMOTION,
		icon: "emotions/disgust",
		intensity: 2
	},
	fear: {
		name: "Medo",
		action: G.APPLY_FEAR_EMOTION,
		icon: "emotions/fear",
		intensity: 2
	},
	surprise: {
		name: "Surpresa",
		action: G.APPLY_SURPRISE_EMOTION,
		icon: "emotions/surprise",
		intensity: 2
	},
	upset: {
		name: "Chateado",
		action: G.APPLY_UPSET_EMOTION,
		icon: "emotions/upset",
		intensity: 2
	}
}, Vi = "images/camara-deputados.webp", Hi = "images/lavid.webp", Ui = "images/ministerioDireitosHumanos.webp", Wi = "images/ministerioGestao.webp", Gi = "images/rnp.webp", K = {
	MT: "images/flags/MT.webp",
	AC: "images/flags/AC.webp",
	AL: "images/flags/AL.webp",
	AM: "images/flags/AM.webp",
	AP: "images/flags/AP.webp",
	BA: "images/flags/BA.webp",
	BR: "images/flags/BR.webp",
	CE: "images/flags/CE.webp",
	DF: "images/flags/DF.webp",
	ES: "images/flags/ES.webp",
	GO: "images/flags/GO.webp",
	MA: "images/flags/MA.webp",
	MG: "images/flags/MG.webp",
	MS: "images/flags/MS.webp",
	PA: "images/flags/PA.webp",
	PB: "images/flags/PB.webp",
	PE: "images/flags/PE.webp",
	PI: "images/flags/PI.webp",
	PR: "images/flags/PR.webp",
	RJ: "images/flags/RJ.webp",
	RN: "images/flags/RN.webp",
	RO: "images/flags/RO.webp",
	RR: "images/flags/RR.webp",
	RS: "images/flags/RS.webp",
	SC: "images/flags/SC.webp",
	SE: "images/flags/SE.webp",
	SP: "images/flags/SP.webp",
	TO: "images/flags/TO.webp"
}, Ki = [
	{
		name: "BR - Padrão Nacional",
		flag: K.BR,
		abbreviation: "BR"
	},
	{
		name: "Acre",
		flag: K.AC,
		abbreviation: "AC"
	},
	{
		name: "Alagoas",
		flag: K.AL,
		abbreviation: "AL"
	},
	{
		name: "Amapá",
		flag: K.AP,
		abbreviation: "AP"
	},
	{
		name: "Amazonas",
		flag: K.AM,
		abbreviation: "AM"
	},
	{
		name: "Bahia",
		flag: K.BA,
		abbreviation: "BA"
	},
	{
		name: "Ceará",
		flag: K.CE,
		abbreviation: "CE"
	},
	{
		name: "Distrito Federal",
		flag: K.DF,
		abbreviation: "DF"
	},
	{
		name: "Espirito Santo",
		flag: K.ES,
		abbreviation: "ES"
	},
	{
		name: "Goiás",
		flag: K.GO,
		abbreviation: "GO"
	},
	{
		name: "Maranhão",
		flag: K.MA,
		abbreviation: "MA"
	},
	{
		name: "Mato Grosso",
		flag: K.MT,
		abbreviation: "MT"
	},
	{
		name: "Mato Grosso do Sul",
		flag: K.MS,
		abbreviation: "MS"
	},
	{
		name: "Minas Gerais",
		flag: K.MG,
		abbreviation: "MG"
	},
	{
		name: "Pará",
		flag: K.PA,
		abbreviation: "PA"
	},
	{
		name: "Paraíba",
		flag: K.PB,
		abbreviation: "PB"
	},
	{
		name: "Paraná",
		flag: K.PR,
		abbreviation: "PR"
	},
	{
		name: "Pernambuco",
		flag: K.PE,
		abbreviation: "PE"
	},
	{
		name: "Piaui",
		flag: K.PI,
		abbreviation: "PI"
	},
	{
		name: "Rio de Janeiro",
		flag: K.RJ,
		abbreviation: "RJ"
	},
	{
		name: "Rio Grande do Norte",
		flag: K.RN,
		abbreviation: "RN"
	},
	{
		name: "Rio Grande do Sul",
		flag: K.RS,
		abbreviation: "RS"
	},
	{
		name: "Rondônia",
		flag: K.RO,
		abbreviation: "RO"
	},
	{
		name: "Roraima",
		flag: K.RR,
		abbreviation: "RR"
	},
	{
		name: "Santa Catarina",
		flag: K.SC,
		abbreviation: "SC"
	},
	{
		name: "São Paulo",
		flag: K.SP,
		abbreviation: "SP"
	},
	{
		name: "Sergipe",
		flag: K.SE,
		abbreviation: "SE"
	},
	{
		name: "Tocantins",
		flag: K.TO,
		abbreviation: "TO"
	}
], qi = {
	countGloss: {
		count: 0,
		max: 0
	},
	config: {
		baseUrl: "",
		personalizationUrl: ""
	},
	avatar: "icaro",
	status: "idle",
	speed: 1,
	progress: 0,
	gloss: void 0,
	instance: void 0,
	isBroken: !1,
	showSubtitles: !0,
	isPlayingWelcome: !0,
	isWelcomeFinished: !1,
	isLoaded: !1,
	isMounted: !0,
	region: Ki[0],
	emotion: Bi.default
}, q = L()(Li((e) => ({
	...qi,
	send: () => {},
	retryLoad: () => {},
	reset: () => e((e) => ({
		...qi,
		avatar: e.avatar
	}))
}), {
	name: "@vlibras/player",
	version: 1,
	storage: Fi(() => localStorage),
	partialize: (e) => Dn(e, "speed", "showSubtitles", "avatar", "config")
})), J = {
	get: q.getState,
	set: q.setState,
	subscribe: q.subscribe
}, Ji = ({ className: e, size: t = 24, ...n }) => /* @__PURE__ */ U("span", {
	className: H("flex shrink-0 items-center justify-center text-primary", e),
	...n,
	children: [/* @__PURE__ */ U("svg", {
		"aria-hidden": "true",
		xmlns: "http://www.w3.org/2000/svg",
		width: t,
		height: t,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: "animate-spin",
		children: /* @__PURE__ */ U("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
	}), /* @__PURE__ */ U("span", {
		className: "sr-only",
		children: "Loading..."
	})]
}), Yi = () => /* @__PURE__ */ U("div", {
	className: "absolute bottom-15 left-1/2 grid -translate-x-1/2 animate-move-up place-content-center rounded-full border bg-background p-0.5 pr-2",
	children: /* @__PURE__ */ U("span", {
		className: "flex items-center gap-1 font-semibold text-primary text-xs dark:text-secondary-foreground",
		children: [/* @__PURE__ */ U(Ji, { className: "size-4 text-current" }), "Traduzindo..."]
	})
}), Xi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Zi = hr, Qi = (e, t) => (n) => {
	if (t?.variants == null) return Zi(e, n?.class, n?.className);
	let { variants: r, defaultVariants: i } = t, a = Object.keys(r).map((e) => {
		let t = n?.[e], a = i?.[e];
		if (t === null) return null;
		let o = Xi(t) || Xi(a);
		return r[e][o];
	}), o = n && Object.entries(n).reduce((e, t) => {
		let [n, r] = t;
		return r === void 0 || (e[n] = r), e;
	}, {});
	return Zi(e, a, t?.compoundVariants?.reduce((e, t) => {
		let { class: n, className: r, ...a } = t;
		return Object.entries(a).every((e) => {
			let [t, n] = e;
			return Array.isArray(n) ? n.includes({
				...i,
				...o
			}[t]) : {
				...i,
				...o
			}[t] === n;
		}) ? [
			...e,
			n,
			r
		] : e;
	}, []), n?.class, n?.className);
}, $i = Qi("flex cursor-pointer items-center justify-center [&>svg]:shrink-0 [&>i:not([class*='size-'])]:size-5.25 gap-x-2 rounded-lg text-foreground", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground outline-primary-foreground hover:brightness-115",
			outline: "border border-foreground/20 hover:bg-foreground/5",
			ghost: "bg-transparent hover:bg-muted",
			muted: "bg-muted text-foreground hover:bg-accent",
			secondary: "bg-secondary text-secondary-foreground hover:brightness-110",
			destructive: "bg-destructive text-destructive-foreground outline-destructive-foreground hover:brightness-125",
			"outline-gov": "border border-primary hover:bg-primary/15 text-primary active:bg-primary/20",
			"muted-gov": "bg-primary/15 text-primary hover:bg-primary/20",
			"ghost-gov": "bg-primary/10 text-primary hover:bg-primary/15 active:bg-primary/20"
		},
		size: {
			default: "h-9 px-3.5 py-2",
			xl: "h-12 px-4.5 py-2",
			lg: "h-10 px-4 py-1.25",
			sm: "h-8 gap-1.5 px-3 py-1.25 text-sm [&>i:not([class*='size-'])]:size-5",
			xs: "h-7 gap-1 px-2.5 py-1 text-xs [&>i:not([class*='size-'])]:size-4",
			icon: "size-9 shrink-0 [&>i:not([class*='size-'])]:size-5.25",
			"icon-xl": "size-12 shrink-0 [&>i:not([class*='size-'])]:size-6.5",
			"icon-lg": "size-10 shrink-0 [&>i:not([class*='size-'])]:size-6",
			"icon-sm": "size-8 shrink-0 text-sm [&>i:not([class*='size-'])]:size-4.5",
			"icon-xs": "size-7 shrink-0 [&>i:not([class*='size-'])]:size-4"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), Y = ({ children: e, disabled: t, className: n, variant: r, size: i, ref: a, ...o }) => /* @__PURE__ */ U("button", {
	inert: t,
	tabIndex: t ? -1 : 0,
	disabled: t,
	ref: a,
	className: H($i({
		variant: r,
		size: i
	}), t && "opacity-50", n),
	type: o.type || "button",
	...o,
	children: e
}), ea = 256, ta = {
	draggable: !1,
	decoding: "sync"
}, X = ({ className: e, name: t, colored: n = !1, style: r, ...i }) => {
	let a = An(`icons/${t}.webp`);
	return /* @__PURE__ */ U("i", {
		"aria-hidden": "true",
		className: H("inline-block shrink-0", !n && "overflow-hidden", e),
		...i,
		children: /* @__PURE__ */ U("img", {
			alt: "",
			...ta,
			src: a,
			className: "block size-full object-contain object-center",
			style: n ? r : {
				...r,
				filter: `drop-shadow(0 ${ea}px 0 currentColor)`,
				transform: "translateY(-256px) translateZ(0)"
			}
		})
	});
}, na = (e, t) => e instanceof Function ? e(t) : e, ra = {
	position: "right",
	text: void 0,
	isOpen: !1,
	isExpanded: !1,
	isLoaded: !1,
	isTranslating: !1,
	isPausedByUser: void 0,
	opacity: 1
}, Z = L()(Li((e) => ({
	...ra,
	setLoaded: (t) => e({ isLoaded: t }),
	setExpanded: (t) => e((e) => ({ isExpanded: na(t, e.isExpanded) })),
	setOpen: (t) => e((e) => ({ isOpen: na(t, e.isOpen) })),
	reset: () => e(ra)
}), {
	name: "@vlibras-widget",
	partialize: (e) => Dn(e, "isOpen", "opacity"),
	version: 1
}));
Z.subscribe((e) => {
	let { instance: t } = J.get();
	t && (e.isOpen ? t.Module.resumeMainLoop() : t.Module.pauseMainLoop());
});
var Q = {
	get: Z.getState,
	set: Z.setState,
	subscribe: Z.subscribe
}, ia = () => {
	let [e, t] = F(!1), { progress: n, isBroken: r } = q(Mn("progress", "isBroken"));
	return I(() => {
		if (n !== 100) return;
		let e = setTimeout(() => t(!0), 1e3);
		return () => clearTimeout(e);
	}, [n]), /* @__PURE__ */ U("div", {
		className: H("absolute inset-0 z-9999999 flex flex-col items-center justify-between border bg-background p-4", "widget-radius"),
		children: [
			/* @__PURE__ */ U(Y, {
				onClick: () => Q.get().setOpen(!1),
				"aria-label": "Fechar",
				size: "icon-sm",
				variant: "ghost",
				className: "absolute top-2 right-2",
				children: /* @__PURE__ */ U(X, { name: "x" })
			}),
			/* @__PURE__ */ U("div", {
				className: "grid place-content-center rounded-full border px-2 py-1",
				children: /* @__PURE__ */ U(X, {
					name: "govbr",
					colored: !0,
					className: "h-4 w-12"
				})
			}),
			/* @__PURE__ */ U("div", {
				className: "-mt-4 flex flex-col items-center",
				children: [
					/* @__PURE__ */ U("div", {
						className: "mb-2 overflow-hidden rounded-full border-6 border-primary/30",
						children: /* @__PURE__ */ U("div", {
							className: "relative flex mobile:size-18 size-20 justify-center overflow-hidden rounded-full bg-primary",
							children: /* @__PURE__ */ U(X, {
								name: "icaro",
								className: "absolute bottom-0 mobile:size-14 size-15 text-primary-foreground"
							})
						})
					}),
					/* @__PURE__ */ U("p", {
						className: "mobile:mb-1 font-bold mobile:text-sm text-base",
						children: "VLibras Widget"
					}),
					/* @__PURE__ */ U("span", {
						className: "text-muted-foreground text-xs",
						children: ["v", "7.12.3"]
					})
				]
			}),
			e && /* @__PURE__ */ U("span", {
				className: "absolute bottom-8 animate-move-up font-semibold text-muted-foreground text-xs",
				children: "Iniciando..."
			}),
			n === 0 && !r && /* @__PURE__ */ U(Ji, {
				className: "absolute bottom-8",
				size: 16
			}),
			r && /* @__PURE__ */ U("div", {
				className: "absolute inset-x-6 top-auto bottom-4 flex animate-move-up flex-col items-center gap-2",
				children: [/* @__PURE__ */ U("p", {
					className: "font-semibold text-muted-foreground text-xs",
					children: "Não foi possível carregar o player."
				}), /* @__PURE__ */ U(Y, {
					size: "xs",
					variant: "default",
					className: "rounded-full",
					onClick: () => J.get().retryLoad(),
					children: "Tentar novamente"
				})]
			}),
			/* @__PURE__ */ U("div", {
				className: H("bottom-4 h-2 w-44 rounded-full bg-foreground/10", r && "invisible bg-destructive"),
				children: /* @__PURE__ */ U("span", {
					className: "block h-full rounded-full bg-primary transition-[width]",
					style: { width: `${n}%` }
				})
			})
		]
	});
}, aa = ({ className: e, ...t }) => /* @__PURE__ */ U("div", {
	...t,
	className: `animate-pulse rounded-lg bg-accent ${e}`
}), oa = L()(() => ({})), sa = {
	get: oa.getState,
	set: oa.setState,
	subscribe: oa.subscribe
}, ca = ({ className: e }) => {
	let t = oa((e) => e.appRoot);
	return t ? St(/* @__PURE__ */ U("div", {
		style: { boxShadow: "0 -5px 10px -5px rgba(0, 0, 0, 0.15)" },
		className: H("widget-radius absolute inset-0 top-auto z-100 flex min-h-40 flex-col bg-background", e),
		children: [/* @__PURE__ */ U("div", {
			className: "flex items-center gap-2 border-b p-4",
			children: [/* @__PURE__ */ U(aa, { className: "size-4 shrink-0" }), /* @__PURE__ */ U(aa, { className: "h-4 w-24" })]
		}), /* @__PURE__ */ U("div", {
			className: "grid flex-1 place-content-center",
			children: /* @__PURE__ */ U(Ji, {})
		})]
	}), t) : null;
}, la = L()((e) => ({
	screen: "main",
	open: (t) => e({ screen: t }),
	closeAll: () => e({ screen: "main" })
})), ua = {
	get: la.getState,
	set: la.setState,
	subscribe: la.subscribe
}, da = Gt(() => import("./dictionary-BBKzeqls.js").then((e) => ({ default: e.DictionaryScreen }))), fa = Gt(() => import("./about-DNQghWXG.js").then((e) => ({ default: e.AboutScreen }))), pa = () => {
	let e = la((e) => e.screen);
	return /* @__PURE__ */ U(k, { children: [e === "dictionary" && /* @__PURE__ */ U(Wt, {
		fallback: /* @__PURE__ */ U(ca, { className: "top-0" }),
		children: /* @__PURE__ */ U(da, {})
	}), e === "about" && /* @__PURE__ */ U(Wt, {
		fallback: /* @__PURE__ */ U(ca, { className: "top-0" }),
		children: /* @__PURE__ */ U(fa, {})
	})] });
}, ma = [], ha = [], ga = () => ha.forEach((e) => e([...ma])), _a = (e, t) => {
	let n = jn(), r = t?.duration || 3e3;
	ma.push({
		id: n,
		message: e,
		duration: r,
		...t
	}), ga(), setTimeout(() => {
		let e = ma.findIndex((e) => e.id === n);
		e > -1 && (ma[e].isExiting = !0, ga()), setTimeout(() => {
			ma = ma.filter((e) => e.id !== n), ga();
		}, 500);
	}, r);
}, va = (e) => (ha.push(e), () => {
	ha = ha.filter((t) => t !== e);
}), ya = Qi("absolute mobile:text-center w-auto! inset-x-0 overflow-hidden mx-auto flex items-center justify-center transition-all duration-500", {
	variants: {
		position: {
			top: "top-0 animate-move-down",
			bottom: "bottom-0 animate-move-up"
		},
		align: {
			start: "justify-start",
			end: "justify-end",
			center: "justify-center"
		}
	},
	defaultVariants: {
		position: "bottom",
		align: "center"
	}
}), ba = ({ message: e, isExiting: t, position: n = "bottom", align: r = "center", variant: i = "default", className: a }) => /* @__PURE__ */ U("div", {
	"data-theme": i === "light" || i === "dark" ? i : void 0,
	className: H(ya({
		position: n,
		align: r
	}), t && (n === "top" ? "-top-100!" : "-bottom-100!"), a),
	children: /* @__PURE__ */ U("div", {
		"data-slot": "toast-content",
		className: H("pointer-events-auto w-full border bg-background px-2.5 py-3.5 mobile:text-xs text-sm transition-all duration-500 ease-in-out", i === "success" && "border-none bg-success text-success-foreground", i === "destructive" && "border-none bg-destructive text-destructive-foreground", i === "primary" && "border-none bg-primary text-primary-foreground"),
		children: /* @__PURE__ */ U("div", {
			className: "break-anywhere text-center",
			children: e
		})
	})
}), xa = () => {
	let [e, t] = F([]), n = oa((e) => e.appRoot);
	return I(() => va(t), []), n ? St(/* @__PURE__ */ U("div", {
		className: "pointer-events-none absolute inset-0 z-2147483647",
		children: e.map((e) => /* @__PURE__ */ U(ba, { ...e }, e.id))
	}), n) : null;
}, Sa = () => {
	let e = Z((e) => e.isTranslating);
	return /* @__PURE__ */ U(k, { children: [
		!q((e) => e.isLoaded) && /* @__PURE__ */ U(ia, {}),
		/* @__PURE__ */ U(pa, {}),
		/* @__PURE__ */ U(xa, {}),
		e && /* @__PURE__ */ U(Yi, {})
	] });
}, Ca = L((e) => ({
	open: !1,
	onOpenChange: (t) => e((e) => ({ open: na(t, e.open) })),
	reset: () => e({
		open: !1,
		element: void 0
	})
})), wa = {
	get: Ca.getState,
	set: Ca.setState
}, Ta = Gt(() => import("./guide-DUfK4Whq.js").then((e) => ({ default: e.Guide }))), Ea = () => /* @__PURE__ */ U(k, { children: Ca((e) => e.open) && /* @__PURE__ */ U(Wt, {
	fallback: null,
	children: /* @__PURE__ */ U(Ta, {})
}) }), Da = Qi("fixed z-2147483647", {
	variants: {
		isDragging: {
			true: "",
			false: "transition-all"
		},
		isOpen: {
			true: "",
			false: "opacity-0"
		},
		hasMoved: {
			true: "top-0 left-0",
			false: ""
		},
		isExpanded: {
			true: "",
			false: ""
		},
		position: {
			left: "",
			right: ""
		}
	},
	compoundVariants: [
		{
			hasMoved: !1,
			position: "left",
			class: "top-1/2 left-2 -translate-y-1/2 animate-move-left"
		},
		{
			hasMoved: !1,
			position: "right",
			class: "top-1/2 right-2 -translate-y-1/2 animate-move-right"
		},
		{
			isOpen: !1,
			position: "left",
			class: "top-1/2 left-2 -translate-y-1/2 animate-move-left -left-200"
		},
		{
			isOpen: !1,
			position: "right",
			class: "top-1/2 right-2 -translate-y-1/2 animate-move-right -right-200"
		},
		{
			isExpanded: !0,
			isOpen: !0,
			class: ["w-dvw max-w-dvw sm:h-auto sm:w-xl sm:[--player-height:800px] max-sm:inset-x-0!", "mobile:translate-none! mobile:transform-none! [--player-height:calc(100dvh-52px)] mobile:inset-0 mobile:rounded-none! mobile:border-none!"]
		}
	],
	defaultVariants: {
		isDragging: !1,
		isOpen: !0,
		hasMoved: !1,
		isExpanded: !1
	}
}), Oa = [
	"icaro",
	"guga",
	"hosana"
], ka = (e) => {
	let [t, n, r, i, a] = e.map((e) => e === "True");
	return {
		isPlaying: t,
		isPaused: n,
		isPlayingIntervalAnimation: r,
		isLoading: i,
		isRepeatable: a
	};
}, Aa = () => Oa[Math.floor(Math.random() * Oa.length)], ja = (e, t, n) => Math.min(t * 2 ** e, n), Ma = 5e3, Na = async (e) => {
	let t = new AbortController(), n = setTimeout(() => t.abort(), Ma);
	try {
		return (await fetch(e, {
			method: "HEAD",
			mode: "cors",
			cache: "no-store",
			credentials: "omit",
			signal: t.signal
		})).status >= 500 ? "unavailable" : "ok";
	} catch {
		return "unknown";
	} finally {
		clearTimeout(n);
	}
}, Pa = 5, Fa = 1e3, Ia = 8e3, La = 3e4, Ra = (e, t) => {
	let [n, r] = F(0), [i, a] = F(), o = q((e) => e.isLoaded);
	return I(() => {
		J.set({ retryLoad: () => {
			J.set({ isBroken: !1 }), a(void 0), r(0);
		} });
	}, []), I(() => {
		if (!e) return;
		if (n >= Pa) return void J.set({ isBroken: !0 });
		let i = !1, o = kn(`${e}/unity/index.html?v=${t}${n ? `&retry=${n}` : ""}`);
		return Na(o).then(async (e) => {
			i || (e === "unavailable" ? (await On(Fa), i || r((e) => e + 1)) : a(o));
		}), () => {
			i = !0;
		};
	}, [
		e,
		t,
		n
	]), I(() => {
		if (!i || o || n >= Pa) return;
		let e = ja(n, Ia, La), t = setTimeout(() => r((e) => e + 1), e);
		return () => clearTimeout(t);
	}, [
		i,
		o,
		n
	]), i;
}, za = L(() => ({ isInitialized: !1 })), Ba = {
	get: za.getState,
	set: za.setState,
	subscribe: za.subscribe
}, Va = ({ path: e, iframeRef: t }) => (I(() => {
	if (!e) return;
	let n = (e) => {
		if (e.source === t.current?.contentWindow && e.data?.type === "unity_event") {
			if (e.data.event === Ri.FINISH_WELCOME) {
				let t = e.data.data === "True";
				if (J.get().isWelcomeFinished) return;
				J.set({
					isPlayingWelcome: !t,
					isWelcomeFinished: t,
					...t ? { countGloss: {
						count: 0,
						max: 0
					} } : {}
				}), t && Ba.get().onWelcomeFinish?.();
			}
			if (e.data.event === Ri.ON_LOAD_PLAYER && (J.set({ isLoaded: !0 }), Ba.get().onLoaded?.()), e.data.event === Ri.UPDATE_PROGRESS) {
				let t = Number(e.data.data);
				Number.isNaN(t) || J.set({ progress: Number((t * 100).toFixed(0)) });
			}
			if (e.data.event === Ri.ON_PLAYING_STATE_CHANGE) {
				let { isPlaying: t, isPaused: n, isLoading: r } = ka(e.data.data);
				n ? J.set({ status: "paused" }) : t && !n ? J.set({ status: "playing" }) : !t && !r && J.set({ status: "idle" });
			}
			if (e.data.event === Ri.COUNTER_GLOSS) {
				let [t, n] = e.data.data;
				J.set({ countGloss: {
					count: t,
					max: n
				} });
			}
		}
	};
	return window.addEventListener("message", n), () => window.removeEventListener("message", n);
}, [e, t]), null), Ha = (e) => {
	let { path: t, version: n } = cn(), r = q((e) => e.isLoaded), i = Ge(null), a = Ra(t, n), o = (e, t, n) => {
		if (!i.current) return;
		let { contentWindow: r } = i.current, { instance: a } = J.get();
		if (r && (r.postMessage({
			type: "unity",
			object: e,
			method: t,
			params: n
		}, "*"), !a)) try {
			let e = r.postMessage({ type: "get_unity_instance" }, "*");
			e && J.set({ instance: e });
		} catch (e) {
			console.error("Error setting instance:", e);
		}
	};
	if (I(() => {
		i.current && J.set({ send: o });
	}, []), I(() => {
		e.options && !Ba.get().isInitialized && Ba.set({
			...e.options,
			isInitialized: !0
		});
	}, [e.options]), t) return /* @__PURE__ */ U(k, { children: [/* @__PURE__ */ U("iframe", {
		tabindex: -1,
		ref: i,
		title: "vlibras-player",
		sandbox: "allow-scripts allow-same-origin allow-pointer-lock",
		src: a,
		style: {
			border: "none",
			overflow: "hidden",
			opacity: +!!r
		},
		...e
	}), /* @__PURE__ */ U(Va, {
		path: t,
		iframeRef: i
	})] });
}, Ua = L()(Li((e) => ({
	status: "pending",
	accept: () => e({ status: "accepted" }),
	decline: () => e({ status: "declined" })
}), {
	name: "@vlibras-consent",
	version: 1
})), Wa = {
	get: Ua.getState,
	set: Ua.setState
}, Ga = () => {
	if (typeof window > "u") return !1;
	let e = location.hostname;
	return e === "localhost" || e === "127.0.0.1" || e === "[::1]" || e.endsWith(".local") || e.endsWith(".localhost") || e.startsWith("192.168.") || e.startsWith("10.");
}, Ka = .07, qa = !Ga(), Ja = !1, Ya = qa && !0, Xa = (async () => {
	if (!qa || typeof window > "u") return null;
	try {
		let e = (await import(
			/* @vite-ignore */
			"https://cdn.jsdelivr.net/npm/posthog-js@1.404.0/+esm"
)).default;
		return e.init("phc_rkupE6DkPSJl7SntaagI0wq0FCKtg3lVP0UkC95NGYe", {
			api_host: "https://us.i.posthog.com",
			autocapture: !1,
			capture_pageview: !1,
			capture_performance: !1,
			persistence: "memory",
			debug: Ja
		}), e;
	} catch (e) {
		return console.error("Erro ao carregar PostHog:", e), null;
	}
})(), Za = {
	_getContext: () => ({
		host: location.hostname,
		origin: `${location.origin}${location.pathname}`
	}),
	trackLoad: async () => {
		let e = await Xa;
		qa && e && Math.random() < Ka && e.capture("widget_initialized", {
			...Za._getContext(),
			sampling_rate: Ka
		});
	},
	trackEvent: async (e, t) => {
		if (Wa.get().status !== "accepted") return;
		let n = await Xa;
		qa && n && n.capture(e, {
			...Za._getContext(),
			...t
		});
	}
}, Qa = 1e4, $a = {
	development: {
		TRANSLATE_URL: "https://traducao2.vlibras.gov.br/translate",
		DICTIONARY_URL: "https://dicionario2-dth.vlibras.gov.br/2018.3.1/WEBGL/",
		DICTIONARY_STATIC_URL: "https://dicionario2-dth.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL/",
		DICTIONARY_CATEGORIES_URL: "https://repositorio-dth.vlibras.gov.br/api",
		SIGNS_URL: "https://dicionario2-dth.vlibras.gov.br/signs?version=2018.3.1",
		REVIEW_URL: "https://traducao2-dth.vlibras.gov.br/review",
		BUNDLES_URL: "https://dicionario2-dth.vlibras.gov.br/bundles"
	},
	homolog: {
		TRANSLATE_URL: "https://traducao2-dth.vlibras.gov.br/translate",
		DICTIONARY_URL: "https://dicionario2-dth.vlibras.gov.br/2018.3.1/WEBGL/",
		DICTIONARY_STATIC_URL: "https://dicionario2-dth.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL/",
		DICTIONARY_CATEGORIES_URL: "https://repositorio-dth.vlibras.gov.br/api",
		SIGNS_URL: "https://dicionario2-dth.vlibras.gov.br/signs?version=2018.3.1",
		REVIEW_URL: "https://traducao2-dth.vlibras.gov.br/review",
		BUNDLES_URL: "https://dicionario2-dth.vlibras.gov.br/bundles"
	},
	production: {
		TRANSLATE_URL: "https://traducao2.vlibras.gov.br/translate",
		DICTIONARY_URL: "https://dicionario2.vlibras.gov.br/2018.3.1/WEBGL/",
		DICTIONARY_STATIC_URL: "https://dicionario2.vlibras.gov.br/static/BUNDLES/2018.3.1/WEBGL/",
		DICTIONARY_CATEGORIES_URL: "https://repositorio.vlibras.gov.br/api",
		SIGNS_URL: "https://dicionario2.vlibras.gov.br/static/TREES/2018.3.1.json",
		REVIEW_URL: "https://traducao2.vlibras.gov.br/review",
		BUNDLES_URL: "https://dicionario2.vlibras.gov.br/bundles"
	}
}, eo = "production", to = {
	BASE_URL: "/",
	DEV: !1,
	MODE: "production",
	PROD: !0,
	SSR: !1,
	VITE_PUBLIC_POSTHOG_DEBUG: "true",
	VITE_PUBLIC_POSTHOG_HOST: "https://us.i.posthog.com",
	VITE_PUBLIC_POSTHOG_PROJECT_TOKEN: "phc_rkupE6DkPSJl7SntaagI0wq0FCKtg3lVP0UkC95NGYe",
	...$a[eo] || $a.development,
	REQUEST_TIMEOUT: Qa,
	MODE: eo
}, no = /* @__PURE__ */ t({
	pause: () => uo,
	play: () => ao,
	playStatic: () => so,
	playWelcome: () => oo,
	repeat: () => co,
	send: () => $,
	setConfig: () => io,
	setEmotion: () => go,
	setRegion: () => ho,
	setSpeed: () => fo,
	setSubtitleColor: () => _o,
	stop: () => lo,
	toggleAvatar: () => po,
	toggleSubtitles: () => mo
}), ro = () => {
	J.set({
		isPlayingWelcome: !1,
		isWelcomeFinished: !0
	});
}, $ = (e, t, n) => {
	J.get().send(e, t, n);
}, io = (e) => {
	if (!e.baseUrl && !e.personalizationUrl) return;
	e.baseUrl && $(W.PLAYER, G.SET_BASE_URL, e.baseUrl), e.personalizationUrl && $(W.CUSTOMIZATION, G.SET_PERSONALIZATION, e.personalizationUrl);
	let { config: t } = J.get();
	J.set({ config: {
		...t,
		...e
	} });
}, ao = (e) => {
	if (!e) return $(W.PLAYER, G.SET_PAUSE_STATE, 0);
	$(W.PLAYER, G.PLAY, e), J.set({ gloss: e }), Ba.get().onPlay?.(e), J.get().isWelcomeFinished || ro();
}, oo = () => {
	let { showSubtitles: e } = J.get();
	$(W.PLAYER, G.PLAY_WELCOME), $(W.PLAYER, G.SET_SUBTITLES_STATE, Number(e)), J.set({ isPlayingWelcome: !0 });
}, so = (e, t) => {
	let { region: n } = J.get(), r = t || `${to.DICTIONARY_STATIC_URL}${n.abbreviation}/`, i = to.DICTIONARY_URL;
	io({ baseUrl: r }), e ? ($(W.PLAYER, G.PLAY, e), Ba.get().onPlayStatic?.(e)) : $(W.PLAYER, G.SET_PAUSE_STATE, 0), io({ baseUrl: i }), J.get().isWelcomeFinished || ro();
}, co = () => {
	let { gloss: e } = J.get();
	e && ao(e), Ba.get().onRepeat?.();
}, lo = () => {
	$(W.PLAYER, G.STOP), Ba.get().onStop?.();
}, uo = () => {
	$(W.PLAYER, G.SET_PAUSE_STATE, 1), Ba.get().onPause?.();
}, fo = (e) => {
	typeof e == "number" && ($(W.PLAYER, G.SET_SPEED, e), J.set({ speed: e }));
}, po = (e) => {
	let t = J.get().avatar;
	if (e && !Oa.includes(e)) {
		console.error(`Avatar "${e}" inválido!`);
		return;
	}
	let n = Oa[(Oa.indexOf(e || t) + +!e) % Oa.length];
	$(W.PLAYER, G.SET_AVATAR, n), J.set({ avatar: n });
}, mo = (e) => {
	let { showSubtitles: t } = J.get(), n = e ?? !t;
	$(W.PLAYER, G.SET_SUBTITLES_STATE, Number(n)), J.set({ showSubtitles: n });
}, ho = (e) => {
	io({ baseUrl: `${to.DICTIONARY_URL}${e.abbreviation}/` }), J.set({ region: e });
}, go = (e, t) => {
	if (!zi.includes(e)) return console.error(`Emoção "${e}" inválida!`);
	let n = Bi[e];
	J.set({ emotion: n }), $(W.EMOTION, n.action, t || n.intensity);
}, _o = ({ color: e, outline: t, shadow: n }) => {
	$(W.CUSTOMIZATION, G.SET_SUBTITLE_COLOR, e), $(W.CUSTOMIZATION, G.SET_SUBTITLE_OUTLINE_COLOR, t || e), $(W.CUSTOMIZATION, G.SET_SUBTITLE_SHADOW_COLOR, n || e);
}, vo = {
	content: void 0,
	action: void 0,
	auto: !1
}, yo = L()(() => ({ ...vo })), bo = () => yo.setState(vo), xo = (e) => {
	setTimeout(() => yo.setState(e), 300);
}, So = {
	get: yo.getState,
	set: yo.setState
}, Co = ({ className: e, gloss: t, onFinish: n, onClick: r, ...i }) => /* @__PURE__ */ U("button", {
	onClick: (e) => {
		bo(), so(t), r?.(e), n && xo({
			action: n,
			auto: !0
		});
	},
	type: "button",
	"aria-label": "Traduzir texto",
	className: H("pointer-events-auto relative -bottom-1 inline cursor-pointer rounded-sm p-0.5 hover:text-primary", e),
	...i,
	children: /* @__PURE__ */ U(X, {
		name: "hands",
		className: "size-4"
	})
}), wo = () => {
	let e = Ua((e) => e.status), t = Ca((e) => e.open), n = q((e) => e.status === "playing" && !!e.gloss);
	return !Ya || e !== "pending" || t || n ? null : /* @__PURE__ */ U("div", {
		className: "absolute inset-2 top-auto z-100 flex animate-move-up flex-col gap-2.5 rounded-lg border bg-background p-2.5 text-sm shadow-2xl dark:bg-muted",
		children: [/* @__PURE__ */ U("p", { children: [
			"Podemos coletar dados anônimos de uso para melhorar o ",
			/* @__PURE__ */ U("strong", { children: "VLibras" }),
			"?",
			/* @__PURE__ */ U(Co, { gloss: "COLETAR DADO&INFORMAÇÃO ANÔNIMO USAR MELHORAR VLIBRAS [INTERROGAÇÃO]" })
		] }), /* @__PURE__ */ U("div", {
			className: "flex justify-end gap-2",
			children: [/* @__PURE__ */ U(Y, {
				className: "hover:bg-destructive/5 hover:text-destructive",
				onClick: () => Wa.get().decline(),
				variant: "ghost",
				size: "sm",
				children: "Não aceitar"
			}), /* @__PURE__ */ U(Y, {
				onClick: () => Wa.get().accept(),
				variant: "default",
				size: "sm",
				children: "Aceitar"
			})]
		})]
	});
}, To = Ee(null), Eo = () => {
	let e = Ye(To);
	if (!e) throw Error("useDraggable deve ser usado dentro de <Draggable />");
	return e;
};
function Do({ children: e }) {
	let t = Ge(null), n = Ge({
		x: 0,
		y: 0
	}), r = Z((e) => e.isExpanded), [i, a] = F({
		x: 0,
		y: 0
	}), [o, s] = F(!1), [c, l] = F(!1), u = () => {
		a({
			x: 0,
			y: 0
		}), s(!1);
	};
	I(() => {
		if (!t.current || !o || !r) return;
		let e = setTimeout(() => {
			if (!t.current) return;
			let e = t.current.getBoundingClientRect(), n = window.innerWidth - e.width, r = window.innerHeight - e.height;
			a((e) => {
				let t = Math.max(0, Math.min(e.x, n)), i = Math.max(0, Math.min(e.y, r));
				return t === e.x && i === e.y ? e : {
					x: t,
					y: i
				};
			});
		}, 200);
		return () => clearTimeout(e);
	}, [r]), I(() => {
		let e = null, n = () => {
			t.current && o && e === null && (e = requestAnimationFrame(() => {
				if (e = null, !t.current) return;
				let n = t.current.getBoundingClientRect(), r = window.innerWidth - n.width, i = window.innerHeight - n.height;
				a((e) => {
					let t = Math.max(0, Math.min(e.x, r)), n = Math.max(0, Math.min(e.y, i));
					return t !== e.x || n !== e.y ? {
						x: t,
						y: n
					} : e;
				});
			}));
		};
		return window.addEventListener("resize", n), () => {
			window.removeEventListener("resize", n), e !== null && cancelAnimationFrame(e);
		};
	}, [o]), I(() => {
		let e = null, r = {
			x: 0,
			y: 0
		}, i = (i) => {
			c && t.current && (i.cancelable && i.preventDefault(), r.x = i.clientX, r.y = i.clientY, e === null && (e = requestAnimationFrame(() => {
				if (e = null, !t.current) return;
				let i = r.x - n.current.x, c = r.y - n.current.y, l = t.current.getBoundingClientRect(), u = Math.max(0, Math.min(i, window.innerWidth - l.width)), d = Math.max(0, Math.min(c, window.innerHeight - l.height));
				a({
					x: u,
					y: d
				}), o || s(!0);
			})));
		}, u = () => {
			l(!1), document.body.style.userSelect = "", document.body.style.touchAction = "";
		};
		return window.addEventListener("pointermove", i), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u), () => {
			window.removeEventListener("pointermove", i), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u), e !== null && cancelAnimationFrame(e);
		};
	}, [o, c]), I(() => {
		if (t.current) {
			let e = t.current.getBoundingClientRect();
			a({
				x: e.left,
				y: e.top
			});
		}
	}, []);
	let d = {
		ref: t,
		hasMoved: o,
		pos: i,
		isDragging: c,
		reset: u,
		onPointerDown: (e) => {
			if (!t.current) return;
			e.cancelable && e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId), l(!0);
			let r = t.current.getBoundingClientRect();
			n.current = {
				x: e.clientX - r.left,
				y: e.clientY - r.top
			}, o || (a({
				x: r.left,
				y: r.top
			}), s(!0)), document.body.style.userSelect = "none", document.body.style.touchAction = "none";
		}
	};
	return /* @__PURE__ */ U(To.Provider, {
		value: d,
		children: e(d)
	});
}
// src/widget/stores/use-overlay.store.ts
var Oo = L()(() => ({
	openId: null,
	showOverlay: !0
})), ko = {
	get: Oo.getState,
	set: Oo.setState,
	subscribe: Oo.subscribe,
	close: () => {
		Oo.getState().onClose?.(), Oo.setState({
			openId: null,
			showOverlay: !0,
			onClose: void 0
		});
	}
}, Ao = ({ className: e, ...t }) => {
	let n = Oo((e) => e.openId !== null), r = Oo((e) => e.showOverlay), i = Ca((e) => e.open);
	return !n || i ? null : /* @__PURE__ */ U("div", {
		onClick: ko.close,
		...t,
		className: H("absolute inset-0", r && "bg-black/5", e)
	});
}, jo = Ee(null), Mo = () => {
	let e = Ye(jo);
	if (!e) throw Error("Dropdown.Trigger e Dropdown.Content devem ser usados dentro de <Dropdown>");
	return e;
}, No = ({ className: e, children: t, showOverlay: n = !0, open: r, ...i }) => {
	let a = Ze(), o = Oo((e) => e.openId === a), s = r ?? o, c = Ge(null), l = (e) => {
		(typeof e == "function" ? e(ko.get().openId === a) : e) ? ko.set({
			openId: a,
			showOverlay: n,
			onClose: () => c.current?.focus()
		}) : ko.close();
	};
	return /* @__PURE__ */ U("div", {
		onBlurCapture: (e) => {
			if (!s) return;
			let t = e.relatedTarget;
			t && e.currentTarget.contains(t) || ko.set({
				openId: null,
				onClose: void 0
			});
		},
		onKeyDown: (e) => {
			s && e.key === "Escape" && (e.stopPropagation(), ko.close());
		},
		className: H("dropdown focus-within:**:data-[slot=tooltip-content]:hidden", s ? "dropdown-open" : "dropdown-close", e),
		...i,
		children: /* @__PURE__ */ U(jo.Provider, {
			value: {
				open: s,
				setOpen: l,
				triggerRef: c
			},
			children: t
		})
	});
}, Po = ({ children: e, openOnFocus: t = !1 }) => {
	let { setOpen: n, triggerRef: r } = Mo(), a = Ge(!1);
	return i(e) ? D(e, {
		ref: r,
		onMouseDown: (t) => {
			e.props.onMouseDown?.(t);
			let n = r.current?.getRootNode();
			a.current = !!n && n.activeElement === r.current;
		},
		onClick: (r) => {
			e.props.onClick?.(r), (!t || a.current) && n((e) => !e);
		},
		onFocus: (r) => {
			e.props.onFocus?.(r), t && n(!0);
		}
	}) : e;
}, Fo = ({ className: e, ...t }) => (Mo(), /* @__PURE__ */ U("div", {
	tabIndex: -1,
	className: H("dropdown-content widget-radius", e),
	...t
})), Io = Qi("border bg-popover", { variants: { variant: {
	default: "bg-background backdrop-blur-sm **:text-foreground",
	primary: "border-primary bg-primary *:text-primary-foreground",
	destructive: "border-destructive bg-destructive *:text-destructive-foreground",
	info: "border-blue-500 bg-blue-500 *:text-blue-50",
	warning: "border-orange-500 bg-orange-500 *:text-orange-50",
	success: "border-green-700 bg-green-700 *:text-green-50",
	reverse: "border-foreground/10 bg-foreground *:text-background"
} } }), Lo = ({ children: e, disabled: t, content: n, arrow: r, offset: i = -4, align: a = "center", placement: o = "top", variant: s = "default", className: c, open: l, onOpenChange: u, ...d }) => {
	let [f, p] = F(!1), m = Rn(), h = t || m ? !1 : l ?? f;
	if (!n) return e;
	let g = () => {
		switch (o) {
			case "top": return { marginTop: i * -1 };
			case "bottom": return { marginBottom: i * -1 };
			case "left": return { marginRight: i };
			case "right": return { marginLeft: i };
			default: return { top: `calc((-100% + 8px) - ${i}px)` };
		}
	}, _ = (e) => {
		l === void 0 && p(e), u?.(e);
	};
	return /* @__PURE__ */ U("div", {
		role: "tooltip",
		className: "relative inline-block has-[>[role=button][aria-disabled=true]]:pointer-events-none has-[>button:disabled]:pointer-events-none",
		onMouseEnter: () => _(!0),
		onMouseLeave: () => _(!1),
		onFocus: () => _(!0),
		onBlur: () => _(!1),
		children: [e, h && !t && /* @__PURE__ */ U("div", {
			"data-slot": "tooltip-content",
			id: "vlibras-tooltip",
			style: g(),
			className: H(Io({ variant: s }), "absolute z-99999 rounded-lg px-3 py-1.5 expanded:text-sm text-popover-foreground text-xs shadow-lg transition-opacity duration-200", o === "bottom" && "-bottom-4 left-1/2 -translate-x-1/2 translate-y-full animate-move-down", o === "top" && "-top-4 left-1/2 -translate-x-1/2 -translate-y-full animate-move-up", o === "right" && "top-1/2 translate-x-1/2 -translate-y-1/2", o === "left" && "top-1/2 -translate-y-1/2", a === "start" && "right-auto! left-0! translate-x-0", a === "end" && "right-0! left-auto! translate-x-0", c),
			...d,
			children: /* @__PURE__ */ U("div", {
				className: "relative font-semibold",
				children: [n, r && /* @__PURE__ */ U("div", {
					"data-slot": "arrow-container",
					className: H("absolute left-1/2 -ml-2 flex max-h-2 items-center justify-center overflow-hidden", r.position.includes("top") && "-top-3.5", r.position.includes("bottom") && "-bottom-3.5", r.position.includes("left") && "left-2", r.position.includes("right") && "-right-1 left-auto", r.position === "right" && "top-1/2 -right-6 left-auto -translate-y-1/2 -rotate-90", r.position === "left" && "top-1/2 right-auto -left-4 -translate-y-1/2 rotate-90", r.containerClassName),
					children: /* @__PURE__ */ U("span", {
						"data-slot": "arrow",
						className: H("-z-50 h-4 w-4 rotate-45", Io({ variant: s }), r.position.includes("top") ? "mt-3.5" : "mb-3.5", r.className)
					})
				})]
			})
		})]
	});
}, Ro = () => {
	let e = fn(), t = q((e) => e.emotion), n = (e) => {
		let t = Bi[e];
		go(e), Za.trackEvent("change_emotion", { emotion: t.name });
	}, r = t === Bi.default;
	return /* @__PURE__ */ U(No, {
		className: "dropdown-center dropdown-top",
		children: [/* @__PURE__ */ U(Lo, {
			offset: 8,
			content: "Emoções",
			placement: "top",
			arrow: { position: "bottom" },
			children: /* @__PURE__ */ U(Po, {
				openOnFocus: !0,
				children: /* @__PURE__ */ U(Y, {
					"aria-label": "Alterar emoção",
					className: "group relative",
					variant: "ghost-gov",
					size: e ? "icon-sm" : "icon",
					children: [/* @__PURE__ */ U(X, { name: t.icon }), !r && /* @__PURE__ */ U("span", { className: "absolute top-0.5 right-0.5 size-2 rounded-full bg-destructive" })]
				})
			})
		}), /* @__PURE__ */ U(Fo, {
			className: "mb-4 w-[calc(var(--widget-width)-1em)] border bg-background p-1 shadow-lg",
			children: /* @__PURE__ */ U("div", {
				className: "relative flex items-center justify-center",
				children: [/* @__PURE__ */ U("span", { className: "absolute -inset-y-1 w-px bg-border" }), /* @__PURE__ */ U("ul", {
					className: H("relative grid w-full grid-cols-2 gap-x-2 gap-y-1 mobile:gap-y-0! font-semibold text-primary text-sm"),
					children: zi.map((e) => {
						let r = Bi[e], i = r === t;
						return /* @__PURE__ */ U("li", { children: /* @__PURE__ */ U("button", {
							"aria-label": `Aplicar emoção "${r.name}"`,
							type: "button",
							inert: i,
							onClick: () => n(e),
							className: H("w-full cursor-pointer whitespace-nowrap rounded-md px-2 py-1.5 text-center text-sm hover:bg-primary/10", i && "bg-primary! text-primary-foreground! outline-1 outline-primary outline-solid"),
							children: /* @__PURE__ */ U("div", {
								className: "flex items-center justify-start gap-1.5",
								children: [/* @__PURE__ */ U(X, {
									name: r.icon,
									className: "mobile:size-4.5 size-5"
								}), /* @__PURE__ */ U("span", {
									className: "mobile:text-xs text-sm",
									children: r.name
								})]
							})
						}) }, e);
					})
				})]
			})
		})]
	});
}, zo = {
	idle: {
		label: "Repetir",
		icon: "repeat"
	},
	paused: {
		label: "Reproduzir",
		icon: "play"
	},
	playing: {
		label: "Pausar",
		icon: "pause"
	},
	stopped: {
		label: "Em espera",
		icon: "waiting"
	}
}, Bo = () => {
	let e = fn(), { gloss: t, status: n, isPlayingWelcome: r } = q(Mn("gloss", "status", "isPlayingWelcome")), i = () => {
		let { status: e } = J.get();
		e === "idle" ? co() : e === "paused" ? ao() : e === "playing" && (uo(), Q.set({ isPausedByUser: !0 }));
	}, a = zo[n];
	return /* @__PURE__ */ U(Lo, {
		offset: 8,
		content: a.label,
		disabled: !t,
		placement: "top",
		align: "start",
		arrow: { position: "bottom-left" },
		children: /* @__PURE__ */ U(Y, {
			"aria-label": a.label,
			"data-slot": "main-action",
			disabled: !t && !r,
			onClick: i,
			variant: "ghost-gov",
			size: e ? "icon-sm" : "icon",
			children: /* @__PURE__ */ U(X, { name: a.icon })
		})
	});
}, Vo = () => {
	let { count: e, max: t } = q((e) => e.countGloss), n = qe(() => {
		let n = e + 1;
		return n / Math.max(t, n) * 100;
	}, [t, e]);
	return e === 0 || t === 0 ? null : /* @__PURE__ */ U("div", {
		className: "absolute -top-1.75 left-0 h-1.5 w-full",
		children: /* @__PURE__ */ U("div", {
			role: "progressbar",
			"aria-valuenow": n,
			className: H("h-full bg-primary transition-[width]", n < 100 && "rounded-r-full"),
			style: { width: `${n}%` }
		})
	});
}, Ho = Gt(() => import("./settings-IV98q1au.js").then((e) => ({ default: e.SettingsDialog }))), Uo = () => {
	let e = fn(), [t, n] = F();
	return /* @__PURE__ */ U(k, { children: [/* @__PURE__ */ U(Lo, {
		className: "whitespace-nowrap",
		offset: 8,
		align: "end",
		content: "Configurações",
		placement: "top",
		arrow: { position: "bottom-right" },
		children: /* @__PURE__ */ U(Y, {
			onClick: () => n(!0),
			variant: "ghost-gov",
			size: e ? "icon-sm" : "icon",
			children: /* @__PURE__ */ U(X, { name: "settings" })
		})
	}), t !== void 0 && /* @__PURE__ */ U(Wt, {
		fallback: /* @__PURE__ */ U(ca, { className: "h-1/2" }),
		children: /* @__PURE__ */ U(Ho, {
			open: t,
			onOpenChange: n
		})
	})] });
}, Wo = [
	2.5,
	2,
	1.5,
	1,
	.5
], Go = () => {
	let e = fn(), t = q((e) => e.speed), n = (e, t) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), r(t));
	}, r = (e) => {
		fo(e), Za.trackEvent("change_speed", { speed: e });
	};
	return /* @__PURE__ */ U(No, {
		className: "dropdown-center dropdown-top",
		children: [/* @__PURE__ */ U(Lo, {
			offset: 8,
			content: "Velocidade",
			placement: "top",
			arrow: { position: "bottom" },
			children: /* @__PURE__ */ U(Po, {
				openOnFocus: !0,
				children: /* @__PURE__ */ U(Y, {
					"aria-label": "Alterar velocidade",
					className: "min-w-9 mobile:min-w-8 max-w-16 mobile:max-w-14 px-2",
					variant: "ghost-gov",
					size: e ? "sm" : "default",
					children: /* @__PURE__ */ U("div", {
						inert: !0,
						className: "-mt-0.5 inline-flex truncate font-bold mobile:text-xs text-sm",
						children: [/* @__PURE__ */ U("span", {
							className: "truncate",
							children: t
						}), /* @__PURE__ */ U("span", { children: "x" })]
					})
				})
			})
		}), /* @__PURE__ */ U(Fo, {
			className: "mb-4 border bg-background drop-shadow-lg",
			children: /* @__PURE__ */ U("ul", {
				className: H("space-y-1 p-1 font-semibold text-primary text-sm", "focus-within:pointer-events-auto focus-within:visible"),
				children: Wo.map((e) => {
					let i = e === t;
					return /* @__PURE__ */ U("li", { children: /* @__PURE__ */ U("button", {
						type: "button",
						inert: i,
						onClick: () => r(e),
						onKeyDown: (t) => n(t, e),
						className: H("w-full cursor-pointer whitespace-nowrap rounded-md px-2 py-1 text-center mobile:text-xs text-sm hover:bg-primary/10", i && "bg-primary! text-primary-foreground! outline-1 outline-primary outline-solid"),
						children: [e, "x"]
					}) }, e);
				})
			})
		})]
	});
}, Ko = () => {
	let e = fn(), { showSubtitles: t } = q(Mn("showSubtitles", "isPlayingWelcome"));
	return /* @__PURE__ */ U(Lo, {
		className: "whitespace-nowrap",
		offset: 8,
		align: "end",
		content: t ? "Desativar legendas" : "Ativar legendas",
		placement: "top",
		arrow: { position: "bottom-right" },
		children: /* @__PURE__ */ U(Y, {
			onClick: () => {
				mo(), Za.trackEvent("subtitles_toggled", { status: t ? "disabled" : "enabled" });
			},
			variant: "ghost-gov",
			size: e ? "icon-sm" : "icon",
			children: /* @__PURE__ */ U(X, { name: t ? "subtitle" : "subtitle-off" })
		})
	});
}, qo = () => {
	let e = Z((e) => e.isOpen), t = Ca((e) => e.open), { onPointerDown: n } = Eo();
	return /* @__PURE__ */ U("div", {
		className: H(!e && "-bottom-20!", "relative z-50 animate-move-up border-t bg-background px-2 py-1.5 transition-[bottom] ease-in-out", "[&_button]:z-1 [&_button]:not-hover:bg-transparent [&_button]:dark:text-secondary-foreground **:[[role=button]]:not-hover:bg-transparent **:[[role=button]]:dark:text-secondary-foreground", "-mt-13 **:data-[highlight=true]:animate-highlight-primary"),
		children: [
			/* @__PURE__ */ U("div", {
				onPointerDown: n,
				className: H("absolute inset-0 z-0 touch-none", "not-expanded:hover:cursor-move sm:hover:cursor-move")
			}),
			/* @__PURE__ */ U(Vo, {}),
			/* @__PURE__ */ U("div", {
				inert: t,
				className: H("grid w-full grid-cols-5 items-center gap-1", "[&>div]:col-span-2 [&>div]:grid [&>div]:grid-cols-subgrid [&>div]:justify-items-center [&>div]:rounded"),
				children: [
					/* @__PURE__ */ U("div", {
						id: "main-action-speed-options",
						children: [/* @__PURE__ */ U(Bo, {}), /* @__PURE__ */ U(Go, {})]
					}),
					/* @__PURE__ */ U("div", {
						id: "emotions-subtitles-options",
						children: [/* @__PURE__ */ U(Ro, {}), /* @__PURE__ */ U(Ko, {})]
					}),
					/* @__PURE__ */ U("div", {
						id: "settings-option",
						className: "col-span-1!",
						children: /* @__PURE__ */ U(Uo, {})
					})
				]
			}),
			/* @__PURE__ */ U(Ao, { className: "z-50" })
		]
	});
}, Jo = ({ className: e, ...t }) => /* @__PURE__ */ U("div", {
	className: H("h-4", e),
	...t
}), Yo = "@media screen and (width<=640px){body[data-vlibras-expanded=true]{overflow:hidden!important}}", Xo = () => {
	let e = fn(), { isOpen: t, isExpanded: n } = Z(Mn("isOpen", "isExpanded"));
	I(() => {
		let { root: e } = sa.get();
		e && !t && (delete e.dataset.expanded, delete document.body.dataset.vlibrasExpanded);
	}, [t]);
	let r = () => {
		Wn(Yo, "@expanded-mode.style");
		let { root: e } = sa.get(), { isExpanded: t } = Q.get();
		if (!e) return;
		let n = !t;
		Q.set({ isExpanded: n }), n && Za.trackEvent("expanded");
	}, i = n ? "Diminuir" : "Expandir";
	return /* @__PURE__ */ U(Lo, {
		className: "whitespace-nowrap",
		offset: 2,
		content: i,
		placement: "bottom",
		align: "end",
		arrow: { position: "top-right" },
		children: /* @__PURE__ */ U(Y, {
			onClick: r,
			className: "z-1",
			"aria-label": i,
			size: e ? "icon-sm" : "icon",
			variant: "default",
			children: /* @__PURE__ */ U(X, { name: n ? "collapse" : "expand" })
		})
	});
}, Zo = ({ label: e, onClick: t, icon: n }) => {
	let r = fn();
	return /* @__PURE__ */ U("li", {
		className: H("flex w-auto animate-move-left items-center gap-1", "[&_button]:rounded-full [&_button]:border-border [&_button]:bg-background [&_button]:shadow-md [&_button]:hover:bg-muted"),
		children: [/* @__PURE__ */ U(Y, {
			onClick: t,
			"aria-label": e,
			size: r ? "icon-sm" : "icon",
			variant: "outline-gov",
			children: n && /* @__PURE__ */ U(X, {
				name: n,
				className: "mobile:size-5 size-5.5"
			})
		}), /* @__PURE__ */ U(Y, {
			tabindex: -1,
			onClick: t,
			variant: "outline",
			className: "w-fit whitespace-nowrap font-semibold",
			size: "xs",
			children: e
		})]
	});
}, Qo = Gt(() => import("./translator-C8i5JnPS.js").then((e) => ({ default: e.TranslatorDialog }))), $o = () => {
	let e = fn(), t = la((e) => e.open), n = Ca((e) => e.onOpenChange), [r, i] = F();
	return /* @__PURE__ */ U(k, { children: [/* @__PURE__ */ U(No, {
		showOverlay: !1,
		className: "dropdown-bottom",
		children: [/* @__PURE__ */ U(Po, { children: /* @__PURE__ */ U(Y, {
			id: "header-menu-button",
			tabindex: 0,
			"aria-label": "Menu de opções",
			size: e ? "icon-sm" : "icon",
			variant: "default",
			children: /* @__PURE__ */ U(X, { name: "menu" })
		}) }), /* @__PURE__ */ U(Fo, {
			className: "mt-4 space-y-1 [&_button]:dark:text-secondary-foreground",
			children: [
				/* @__PURE__ */ U(Zo, {
					onClick: () => i(!0),
					label: "Tradutor",
					icon: "translator"
				}),
				/* @__PURE__ */ U(Zo, {
					onClick: () => t("dictionary"),
					label: "Dicionário",
					icon: "dictionary"
				}),
				/* @__PURE__ */ U(Zo, {
					onClick: () => n(!0),
					label: "Guia Rápido",
					icon: "help"
				}),
				/* @__PURE__ */ U(Zo, {
					onClick: () => t("about"),
					label: "Sobre o VLibras",
					icon: "info"
				})
			]
		})]
	}), r !== void 0 && /* @__PURE__ */ U(Wt, {
		fallback: /* @__PURE__ */ U(ca, { className: "h-[80%]" }),
		children: /* @__PURE__ */ U(Qo, {
			open: r,
			onOpenChange: i
		})
	})] });
}, es = () => {
	let { onPointerDown: e } = Eo(), t = fn(), n = Z((e) => e.setOpen), r = Ca((e) => e.open);
	return /* @__PURE__ */ U("div", {
		className: "relative bottom-auto z-50 bg-primary px-2 py-1.5",
		children: [
			/* @__PURE__ */ U("div", {
				onPointerDown: e,
				className: H("absolute inset-0 z-0 touch-none", "not-expanded:hover:cursor-move sm:hover:cursor-move")
			}),
			/* @__PURE__ */ U("div", {
				inert: r,
				className: "flex w-full items-center justify-between gap-1 **:data-[highlight=true]:animate-highlight-primary-foreground",
				children: [
					/* @__PURE__ */ U($o, {}),
					/* @__PURE__ */ U("div", {
						className: "mr-2 ml-1",
						children: /* @__PURE__ */ U("span", { className: "absolute inset-y-0 w-px bg-primary-foreground/30" })
					}),
					/* @__PURE__ */ U("div", {
						className: "mr-2 flex items-center gap-1.5 font-semibold text-primary-foreground text-sm",
						children: [/* @__PURE__ */ U("div", {
							className: "flex size-5.5 items-end justify-center rounded-full bg-primary-foreground text-primary",
							children: /* @__PURE__ */ U(X, {
								name: "icaro",
								className: "size-4.5"
							})
						}), "VLibras"]
					}),
					/* @__PURE__ */ U(k, { children: [/* @__PURE__ */ U(Jo, { className: "w-full" }), /* @__PURE__ */ U("div", {
						id: "header-actions",
						className: "flex items-center gap-1 [&_button]:not-hover:bg-transparent",
						children: [/* @__PURE__ */ U(Xo, {}), /* @__PURE__ */ U(Y, {
							onClick: () => {
								n(!1), uo();
							},
							"aria-label": "Fechar",
							size: t ? "icon-sm" : "icon",
							variant: "default",
							className: "z-1",
							children: /* @__PURE__ */ U(X, { name: "x" })
						})]
					})] })
				]
			}),
			/* @__PURE__ */ U(Ao, { className: "z-50" })
		]
	});
}, ts = {
	reopen: !1,
	draftValue: void 0
}, ns = L()(() => ({ ...ts })), rs = {
	get: ns.getState,
	set: ns.setState
}, is = Gt(() => import("./feedback-CH9eb3sQ.js").then((e) => ({ default: e.FeedbackDialog }))), as = () => {
	let [e, t] = F(), n = fn(), r = Z((e) => e.isExpanded), i = Ca((e) => e.open), a = ns((e) => e.reopen);
	return I(() => void (a && t(!0)), [a]), i ? null : /* @__PURE__ */ U(k, { children: [/* @__PURE__ */ U(Y, {
		onClick: () => t(!0),
		className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
		variant: "outline",
		size: r ? "default" : n ? "xs" : "sm",
		children: [/* @__PURE__ */ U(X, { name: "like" }), "Avaliar"]
	}), e !== void 0 && /* @__PURE__ */ U(Wt, {
		fallback: null,
		children: /* @__PURE__ */ U(is, {
			open: e,
			onOpenChange: t
		})
	})] });
}, os = [
	{
		name: "icaro",
		path: "/icaro.webp",
		icon: "icaro"
	},
	{
		name: "hosana",
		path: "/hosana.webp",
		icon: "hosana"
	},
	{
		name: "guga",
		path: "/guga.webp",
		icon: "guga"
	}
], ss = (e) => {
	let { path: t } = sn.getState();
	return `${t}/assets/images/avatars/${e}`;
}, cs = () => {
	let e = q((e) => e.avatar), t = Ca((e) => e.open), n = Ca((e) => e.element?.selector === "#toggle-avatar-button"), r = Z((e) => e.isExpanded), i = os.find(({ name: t }) => t === e) || os[0], a = (e) => {
		document.activeElement?.blur(), setTimeout(() => po(e), 150), Za.trackEvent("avatar_selected", { avatar: e });
	};
	return /* @__PURE__ */ U(No, {
		showOverlay: !1,
		open: t ? n : void 0,
		className: "dropdown-top dropdown-end z-1 h-9 animate-move-up [&_button]:shadow-md",
		children: [/* @__PURE__ */ U(Lo, {
			className: "whitespace-nowrap",
			content: "Alterar avatar",
			placement: "top",
			align: "end",
			arrow: { position: "bottom-right" },
			disabled: t,
			children: /* @__PURE__ */ U(Po, {
				openOnFocus: !0,
				children: /* @__PURE__ */ U(Y, {
					"aria-label": "Alterar avatar",
					id: "toggle-avatar-button",
					variant: "outline",
					size: "icon",
					className: H("rounded-full bg-background text-primary hover:bg-muted! data-[highlight=true]:animate-highlight-primary", t && "pointer-events-none"),
					children: /* @__PURE__ */ U(X, {
						name: i.icon,
						className: "size-5.5"
					})
				})
			})
		}), /* @__PURE__ */ U(Fo, { children: /* @__PURE__ */ U("ul", {
			className: "mb-2 space-y-2",
			children: os.filter(({ name: t }) => t !== e).map((e) => /* @__PURE__ */ U("li", {
				className: "flex animate-move-up items-center justify-end gap-1",
				children: [!(n && r) && /* @__PURE__ */ U(Y, {
					tabindex: -1,
					onClick: () => a(e.name),
					variant: "outline",
					className: "w-fit whitespace-nowrap rounded-full bg-background font-semibold capitalize hover:bg-muted!",
					size: "xs",
					children: e.name
				}), /* @__PURE__ */ U(Y, {
					onClick: () => a(e.name),
					variant: "outline",
					className: "rounded-full bg-background hover:bg-muted!",
					size: "icon",
					children: /* @__PURE__ */ U("img", {
						src: ss(e.path),
						alt: e.name
					})
				})]
			}, e.name))
		}) })]
	});
}, ls = () => {
	let e = fn(), t = Ca((e) => e.open), { status: n, isGlossTranslated: r, ...i } = q(Mn("status", "isGlossTranslated", "isPlayingWelcome", "isWelcomeFinished")), { isExpanded: a, isTranslating: o, text: s } = Z(Mn("isExpanded", "text", "isTranslating")), { action: c, content: l } = yo(Mn("action", "content")), u = n === "playing", d = n === "paused", f = n === "idle";
	I(() => {
		if (!f) return;
		let { auto: e, action: t } = So.get();
		e && t && (t(), bo());
	}, [f]);
	let p = () => {
		So.get().action?.(), bo();
	}, m = () => {
		Q.set({ text: void 0 }), lo();
	}, h = c && l && n === "idle", g = !!(n === "idle" && r && s), _ = i.isPlayingWelcome ? !0 : (u || d) && !t, v = i.isWelcomeFinished && (n === "idle" || t);
	return o ? null : /* @__PURE__ */ U("div", {
		className: "absolute expanded:inset-x-4! inset-x-3 mobile:inset-x-2 bottom-15 expanded:bottom-16! mobile:bottom-13 flex animate-move-up items-end justify-end gap-1.5 [&_button]:dark:text-secondary-foreground",
		children: [/* @__PURE__ */ U("div", {
			className: "mr-auto flex flex-wrap-reverse items-center gap-1.5",
			children: [h && /* @__PURE__ */ U(Y, {
				onClick: p,
				variant: "outline",
				className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
				size: a ? "default" : e ? "xs" : "sm",
				children: l
			}), g && /* @__PURE__ */ U(as, {})]
		}), /* @__PURE__ */ U("div", {
			className: "ml-auto flex items-center gap-2",
			children: [_ && /* @__PURE__ */ U(Y, {
				onClick: m,
				className: "animate-move-up rounded-full bg-background! font-semibold text-primary hover:bg-muted!",
				variant: "outline",
				size: a ? "default" : e ? "xs" : "sm",
				children: [/* @__PURE__ */ U(X, { name: "skip" }), "Pular"]
			}), v && /* @__PURE__ */ U(cs, {})]
		})]
	});
}, us = {
	onLoaded: () => {
		let e = window.VLibrasWidget?.avatar;
		e === "random" && (e = Aa());
		let t = window.VLibrasWidget?.personalization, n = window.VLibrasWidget?.position?.toLowerCase() === "l" ? "left" : "right", { avatar: r, speed: i } = J.get();
		Q.set({ position: n }), io({
			baseUrl: to.DICTIONARY_URL,
			personalizationUrl: t
		}), fo(i);
		{
			let t = setTimeout(() => {
				po(e || r), oo(), clearTimeout(t);
			}, 500);
		}
	},
	onPlay: () => {
		let { screen: e, open: t } = ua.get();
		e !== "main" && t("main"), Q.set({ isPausedByUser: !1 });
	},
	onPlayStatic: () => {
		let { screen: e, open: t } = ua.get();
		e !== "main" && t("main"), Q.set({ isPausedByUser: !1 });
	},
	onWelcomeFinish: () => {
		let { showSubtitles: e } = J.get();
		mo(e);
	}
}, ds = ({ className: e, ...t }) => {
	let n = la((e) => e.screen), { isLoaded: r, isMounted: i } = q(Mn("isLoaded", "isMounted"));
	return /* @__PURE__ */ U("div", {
		...t,
		id: "vlibras-app-content",
		inert: n !== "main",
		ref: (e) => void (e && sa.set({ appContent: e })),
		className: H("flex flex-col", (!r || n !== "main") && "opacity-0", e),
		children: [
			/* @__PURE__ */ U(es, {}),
			/* @__PURE__ */ U(wo, {}),
			i && /* @__PURE__ */ U(Ha, {
				className: H("mb-2 h-(--player-height) w-full", "max-h-[calc(100dvh-52px)]"),
				options: us
			}),
			/* @__PURE__ */ U(ls, {}),
			/* @__PURE__ */ U(qo, {})
		]
	});
}, fs = () => /* @__PURE__ */ U("div", {
	style: { opacity: `${Z((e) => Number(e.opacity || 0) * 100)}%` },
	className: "sm:widget-radius absolute inset-0 -z-50 bg-[#f8f8f8] dark:bg-[#222222]"
}), ps = () => {
	let e = q((e) => e.isLoaded);
	return qe(() => e ? Q.get().position : window.VLibrasWidget?.position?.toLowerCase() === "l" ? "left" : "right", [e]);
}, ms = () => {
	let e = la((e) => e.screen), t = ps(), { isOpen: n, isExpanded: r } = Z(Mn("isOpen", "isExpanded"));
	return /* @__PURE__ */ U(Do, { children: ({ ref: i, hasMoved: a, pos: o, isDragging: s, reset: c }) => (I(() => void (!n && c()), [n]), /* @__PURE__ */ U("div", {
		id: "vlibras-app",
		inert: !n,
		style: { transform: a && n ? `translate3d(${o.x}px, ${o.y}px, 0)` : void 0 },
		className: H(Da({
			isDragging: s,
			isOpen: n,
			position: t,
			isExpanded: r,
			hasMoved: a
		}), !1),
		children: [/* @__PURE__ */ U("div", {
			ref: (e) => {
				e && sa.set({ appRoot: e }), typeof i == "function" ? i(e) : i && "current" in i && (i.current = e);
			},
			className: H("widget-radius relative z-2147483647 h-fit expanded:w-full w-(--widget-width) overflow-hidden shadow-lg expanded:max-sm:rounded-none!", e !== "main" && "outline-2 outline-border outline-solid", !1),
			children: [
				/* @__PURE__ */ U(ds, {}),
				/* @__PURE__ */ U(Sa, {}),
				/* @__PURE__ */ U(fs, {}),
				/* @__PURE__ */ U(Ao, {})
			]
		}), /* @__PURE__ */ U(Ea, {})]
	})) });
}, hs = "/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\";--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1}}}@layer theme{:root,:host{--font-sans:-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-orange-50:oklch(98% .016 73.684);--color-orange-500:oklch(70.5% .213 47.604);--color-orange-600:oklch(64.6% .222 41.116);--color-green-50:oklch(98.2% .018 155.826);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-blue-50:oklch(97% .014 254.604);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-xl:36rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--leading-normal:1.5;--radius-xs:.125rem;--radius-sm:.25rem;--radius-md:.375rem;--radius-lg:.5rem;--radius-xl:.75rem;--drop-shadow-lg:0 4px 4px #00000026;--ease-in-out:cubic-bezier(.4, 0, .2, 1);--animate-spin:spin 1s linear infinite;--animate-pulse:pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--color-primary:var(--primary);--color-muted:var(--muted)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring:where(:not(iframe)){outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}*{box-sizing:border-box;--tw-border-style:solid;border-style:solid;border-color:var(--border);outline-offset:calc(1px * -1);outline-color:var(--ring)}@supports (color:color-mix(in lab, red, red)){*{outline-color:color-mix(in oklab, var(--ring) 50%, transparent)}}:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary);--tw-outline-style:solid;outline-style:solid}:host{border-color:var(--border);fill:var(--foreground);color:var(--foreground)}}@layer components;@layer utilities{@layer daisyui.l1.l2.l3{.dropdown{position-area:var(--anchor-v,bottom) var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(:has(~[class*=dropdown-content])):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(:has(~[class*=dropdown-content])):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown.dropdown-close .dropdown-content,.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content,.dropdown.dropdown-hover:not(:hover) [tabindex]:first-child:focus:not(:focus-visible)~.dropdown-content{transform-origin:top;opacity:0;display:none;scale:.95}.dropdown[popover],.dropdown .dropdown-content{z-index:999}@media (prefers-reduced-motion:no-preference){.dropdown[popover],.dropdown .dropdown-content{transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:.95}}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within) .dropdown-content,.dropdown:not(.dropdown-close).dropdown-hover:hover .dropdown-content{opacity:1;scale:1}.dropdown:is(details) summary::-webkit-details-marker{display:none}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-close{transform-origin:top;opacity:0;display:none;scale:.95}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:.95}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}:is(.dropdown[popover].dropdown-close,.dropdown[popover]:not(.dropdown-open,:popover-open)){transform-origin:top;opacity:0;display:none;scale:.95}.toggle{border:var(--border) solid currentColor;color:var(--input-color);cursor:pointer;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p), var(--radius-selector-max)) + min(var(--border), var(--radius-selector-max)));padding:var(--toggle-p);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab, red, red)){.toggle{box-shadow:0 1px color-mix(in oklab, currentColor calc(var(--depth) * 10%), #0000) inset}}.toggle{--input-color:var(--color-base-content);transition:color .3s,grid-template-columns .2s}@supports (color:color-mix(in lab, red, red)){.toggle{--input-color:color-mix(in oklab, var(--color-base-content) 50%, #0000)}}.toggle{--toggle-p:calc(var(--size) * .125);--size:calc(var(--size-selector,.25rem) * 6);width:calc((var(--size) * 2) - (var(--border) + var(--toggle-p)) * 2);height:var(--size)}.toggle>*{z-index:1;cursor:pointer;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:0deg}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:0deg}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:\"\";content:var(--tw-content);width:100%;height:100%;box-shadow:0 -1px oklch(0% 0 0 / calc(var(--depth) * .1)) inset, 0 8px 0 -4px oklch(100% 0 0 / calc(var(--depth) * .1)) inset, 0 1px currentColor;background-color:currentColor;grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab, red, red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0 / calc(var(--depth) * .1)) inset, 0 8px 0 -4px oklch(100% 0 0 / calc(var(--depth) * .1)) inset, 0 1px color-mix(in oklab, currentColor calc(var(--depth) * 10%), #0000)}}.toggle:before{background-size:auto, calc(var(--noise) * 100%);background-image:none, var(--fx-noise)}@media (forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:calc(1px * -1);outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible{outline-offset:2px;outline:2px solid}.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true]{background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border) solid currentColor;background-color:#0000}}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:0}.inset-0\\!{inset:0!important}.inset-2{inset:calc(var(--spacing) * 2)}.inset-x-0{inset-inline:0}.inset-x-3{inset-inline:calc(var(--spacing) * 3)}.inset-x-4{inset-inline:calc(var(--spacing) * 4)}.inset-x-6{inset-inline:calc(var(--spacing) * 6)}.-inset-y-1{inset-block:calc(var(--spacing) * -1)}.inset-y-0{inset-block:0}@layer daisyui.l1.l2{.dropdown-center{--anchor-h:center}.dropdown-center :where(.dropdown-content){inset-inline-end:50%;translate:50%}[dir=rtl] :is(.dropdown-center :where(.dropdown-content)){translate:-50%}.dropdown-center.dropdown-left{--anchor-h:left;--anchor-v:center}.dropdown-center.dropdown-left .dropdown-content{top:auto;bottom:50%;translate:0 50%}.dropdown-center.dropdown-right{--anchor-h:right;--anchor-v:center}.dropdown-center.dropdown-right .dropdown-content{top:auto;bottom:50%;translate:0 50%}.dropdown-end{--anchor-h:span-left}.dropdown-end :where(.dropdown-content){inset-inline-end:0;translate:0}[dir=rtl] :is(.dropdown-end :where(.dropdown-content)){translate:0}.dropdown-end.dropdown-left{--anchor-h:left;--anchor-v:span-top}.dropdown-end.dropdown-left .dropdown-content{top:auto;bottom:0}.dropdown-end.dropdown-right{--anchor-h:right;--anchor-v:span-top}.dropdown-end.dropdown-right .dropdown-content{top:auto;bottom:0}.dropdown-bottom{--anchor-v:bottom}.dropdown-bottom .dropdown-content{transform-origin:top;top:100%;bottom:auto}.dropdown-top{--anchor-v:top}.dropdown-top .dropdown-content{transform-origin:bottom;top:auto;bottom:100%}.toggle-sm[type=checkbox]{--size:calc(var(--size-selector,.25rem) * 5)}.toggle-sm:has([type=checkbox]){--size:calc(var(--size-selector,.25rem) * 5)}}.-top-1\\.5{top:calc(var(--spacing) * -1.5)}.-top-1\\.75{top:calc(var(--spacing) * -1.75)}.-top-2{top:calc(var(--spacing) * -2)}.-top-3\\.5{top:calc(var(--spacing) * -3.5)}.-top-4{top:calc(var(--spacing) * -4)}.-top-100\\!{top:calc(var(--spacing) * -100)!important}.top-0{top:0}.top-0\\!{top:0!important}.top-0\\.5{top:calc(var(--spacing) * .5)}.top-1{top:var(--spacing)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-4{top:calc(var(--spacing) * 4)}.top-auto{top:auto}.top-auto\\!{top:auto!important}.-right-1{right:calc(var(--spacing) * -1)}.-right-3{right:calc(var(--spacing) * -3)}.-right-6{right:calc(var(--spacing) * -6)}.-right-200{right:calc(var(--spacing) * -200)}.right-0\\!{right:0!important}.right-0\\.5{right:calc(var(--spacing) * .5)}.right-1{right:var(--spacing)}.right-2{right:calc(var(--spacing) * 2)}.right-5{right:calc(var(--spacing) * 5)}.right-auto{right:auto}.right-auto\\!{right:auto!important}.-bottom-1{bottom:calc(var(--spacing) * -1)}.-bottom-1\\.5{bottom:calc(var(--spacing) * -1.5)}.-bottom-2{bottom:calc(var(--spacing) * -2)}.-bottom-3\\.5{bottom:calc(var(--spacing) * -3.5)}.-bottom-4{bottom:calc(var(--spacing) * -4)}.-bottom-20\\!{bottom:calc(var(--spacing) * -20)!important}.-bottom-100\\!{bottom:calc(var(--spacing) * -100)!important}.-bottom-px{bottom:-1px}.bottom-0{bottom:0}.bottom-0\\!{bottom:0!important}.bottom-0\\.5{bottom:calc(var(--spacing) * .5)}.bottom-4{bottom:calc(var(--spacing) * 4)}.bottom-6\\.5\\!{bottom:calc(var(--spacing) * 6.5)!important}.bottom-8{bottom:calc(var(--spacing) * 8)}.bottom-15{bottom:calc(var(--spacing) * 15)}.bottom-16{bottom:calc(var(--spacing) * 16)}.bottom-auto{bottom:auto}.bottom-auto\\!{bottom:auto!important}.-left-1{left:calc(var(--spacing) * -1)}.-left-3{left:calc(var(--spacing) * -3)}.-left-4{left:calc(var(--spacing) * -4)}.-left-200{left:calc(var(--spacing) * -200)}.left-0{left:0}.left-0\\!{left:0!important}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-5{left:calc(var(--spacing) * 5)}.left-auto{left:auto}.left-auto\\!{left:auto!important}.-z-1{z-index:calc(1 * -1)}.-z-2{z-index:calc(2 * -1)}.-z-10{z-index:calc(10 * -1)}.-z-50{z-index:calc(50 * -1)}.z-0{z-index:0}.z-1{z-index:1}.z-50{z-index:50}.z-100{z-index:100}.z-999{z-index:999}.z-99999{z-index:99999}.z-999999{z-index:999999}.z-9999999{z-index:9999999}.z-2147483647{z-index:2147483647}.order-first{order:-9999}.col-span-1\\!{grid-column:span 1/span 1!important}.container{width:100%}@media (width>=20rem){.container{max-width:20rem}}@media (width>=30rem){.container{max-width:30rem}}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.mx-4{margin-inline:calc(var(--spacing) * 4)}.mx-auto{margin-inline:auto}.my-4{margin-block:calc(var(--spacing) * 4)}.-mt-0\\.5{margin-top:calc(var(--spacing) * -.5)}.-mt-2{margin-top:calc(var(--spacing) * -2)}.-mt-4{margin-top:calc(var(--spacing) * -4)}.-mt-13{margin-top:calc(var(--spacing) * -13)}.mt-0\\.75{margin-top:calc(var(--spacing) * .75)}.mt-1{margin-top:var(--spacing)}.mt-3\\.5{margin-top:calc(var(--spacing) * 3.5)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-auto{margin-top:auto}.mt-auto\\!{margin-top:auto!important}.-mr-1{margin-right:calc(var(--spacing) * -1)}.mr-2{margin-right:calc(var(--spacing) * 2)}.mr-12\\!{margin-right:calc(var(--spacing) * 12)!important}.mr-auto{margin-right:auto}.-mb-1{margin-bottom:calc(var(--spacing) * -1)}.mb-1{margin-bottom:var(--spacing)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-3\\.5{margin-bottom:calc(var(--spacing) * 3.5)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.-ml-2{margin-left:calc(var(--spacing) * -2)}.ml-1{margin-left:var(--spacing)}.ml-4{margin-left:calc(var(--spacing) * 4)}.ml-auto{margin-left:auto}.line-clamp-3{-webkit-line-clamp:3;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.range-slider{height:calc(var(--spacing) * 2);cursor:pointer;appearance:none;border-radius:var(--radius-lg);width:100%}.range-slider::-moz-range-thumb{height:calc(var(--spacing) * 4)}.range-slider::-moz-range-thumb{width:calc(var(--spacing) * 4)}.range-slider::-moz-range-thumb{border-radius:2147483647px}.range-slider::-moz-range-thumb{--tw-border-style:none;border-style:none}.range-slider::-moz-range-thumb{background-color:var(--primary)}.range-slider::-moz-range-thumb{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.range-slider::-webkit-slider-thumb{height:calc(var(--spacing) * 4)}.range-slider::-webkit-slider-thumb{width:calc(var(--spacing) * 4)}.range-slider::-webkit-slider-thumb{appearance:none}.range-slider::-webkit-slider-thumb{border-radius:2147483647px}.range-slider::-webkit-slider-thumb{background-color:var(--primary)}.range-slider::-webkit-slider-thumb{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.size-2{width:calc(var(--spacing) * 2);height:calc(var(--spacing) * 2)}.size-3{width:calc(var(--spacing) * 3);height:calc(var(--spacing) * 3)}.size-4{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.size-4\\.5{width:calc(var(--spacing) * 4.5);height:calc(var(--spacing) * 4.5)}.size-5{width:calc(var(--spacing) * 5);height:calc(var(--spacing) * 5)}.size-5\\.5{width:calc(var(--spacing) * 5.5);height:calc(var(--spacing) * 5.5)}.size-6{width:calc(var(--spacing) * 6);height:calc(var(--spacing) * 6)}.size-7{width:calc(var(--spacing) * 7);height:calc(var(--spacing) * 7)}.size-8{width:calc(var(--spacing) * 8);height:calc(var(--spacing) * 8)}.size-9{width:calc(var(--spacing) * 9);height:calc(var(--spacing) * 9)}.size-10{width:calc(var(--spacing) * 10);height:calc(var(--spacing) * 10)}.size-12{width:calc(var(--spacing) * 12);height:calc(var(--spacing) * 12)}.size-15{width:calc(var(--spacing) * 15);height:calc(var(--spacing) * 15)}.size-20{width:calc(var(--spacing) * 20);height:calc(var(--spacing) * 20)}.size-32{width:calc(var(--spacing) * 32);height:calc(var(--spacing) * 32)}.size-full{width:100%;height:100%}.h-\\(--player-height\\){height:var(--player-height)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-1\\/2{height:50%}.h-2{height:calc(var(--spacing) * 2)}.h-4{height:calc(var(--spacing) * 4)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-12{height:calc(var(--spacing) * 12)}.h-32{height:calc(var(--spacing) * 32)}.h-40{height:calc(var(--spacing) * 40)}.h-\\[80\\%\\]{height:80%}.h-auto{height:auto}.h-fit{height:fit-content}.h-full{height:100%}.h-min{height:min-content}.h-screen{height:100vh}.max-h-2{max-height:calc(var(--spacing) * 2)}.max-h-30{max-height:calc(var(--spacing) * 30)}.max-h-\\[70\\%\\]{max-height:70%}.max-h-\\[calc\\(100dvh-52px\\)\\]{max-height:calc(100dvh - 52px)}.max-h-full{max-height:100%}.min-h-32{min-height:calc(var(--spacing) * 32)}.min-h-40{min-height:calc(var(--spacing) * 40)}.min-h-px{min-height:1px}.w-\\(--widget-width\\){width:var(--widget-width)}.w-4{width:calc(var(--spacing) * 4)}.w-12{width:calc(var(--spacing) * 12)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-40{width:calc(var(--spacing) * 40)}.w-44{width:calc(var(--spacing) * 44)}.w-\\[calc\\(var\\(--widget-width\\)-1em\\)\\]{width:calc(var(--widget-width) - 1em)}.w-auto{width:auto}.w-auto\\!{width:auto!important}.w-dvw{width:100dvw}.w-fit{width:fit-content}.w-full{width:100%}.w-px{width:1px}.w-screen{width:100vw}.max-w-15{max-width:calc(var(--spacing) * 15)}.max-w-16{max-width:calc(var(--spacing) * 16)}.max-w-40{max-width:calc(var(--spacing) * 40)}.max-w-45{max-width:calc(var(--spacing) * 45)}.max-w-50{max-width:calc(var(--spacing) * 50)}.max-w-dvw{max-width:100dvw}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:0}.min-w-9{min-width:calc(var(--spacing) * 9)}.min-w-px{min-width:1px}.min-w-xs{min-width:var(--container-xs)}.flex-1{flex:1}.shrink-0{flex-shrink:0}.-translate-x-1\\/2{--tw-translate-x:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-6{--tw-translate-x:calc(var(--spacing) * -6);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-full{--tw-translate-x:-100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-0{--tw-translate-x:0px;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-1\\/2{--tw-translate-x:calc(1 / 2 * 100%);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-full{--tw-translate-y:100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-none\\!{translate:none!important}.-rotate-90{rotate:-90deg}.rotate-45{rotate:45deg}.rotate-90{rotate:90deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-move-down{animation:.2s ease-in-out move-down}.animate-move-left{animation:.2s ease-in-out move-left}.animate-move-right{animation:.2s ease-in-out move-right}.animate-move-up{animation:.2s ease-in-out move-up}.animate-pulse{animation:var(--animate-pulse)}.animate-scale{animation:.2s ease-in-out scale}.animate-spin{animation:var(--animate-spin)}.cursor-pointer{cursor:pointer}.touch-none{touch-action:none}.resize{resize:both}.resize-none{resize:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-wrap-reverse{flex-wrap:wrap-reverse}.place-content-center{place-content:center}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-1{gap:var(--spacing)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(var(--spacing) * var(--tw-space-y-reverse));margin-block-end:calc(var(--spacing) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}.gap-x-2{column-gap:calc(var(--spacing) * 2)}.gap-y-1{row-gap:var(--spacing)}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-full{border-radius:2147483647px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-none\\!{border-radius:0!important}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.rounded-xs{border-radius:var(--radius-xs)}.widget-radius{border-radius:var(--radius-xl)}.rounded-r-full{border-top-right-radius:2147483647px;border-bottom-right-radius:2147483647px}.border{border-style:var(--tw-border-style);border-width:1px}.border-6{border-style:var(--tw-border-style);border-width:6px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-l-2{border-left-style:var(--tw-border-style);border-left-width:2px}.border-none{--tw-border-style:none;border-style:none}.border-blue-500{border-color:var(--color-blue-500)}.border-border,.border-border\\/30{border-color:var(--border)}@supports (color:color-mix(in lab, red, red)){.border-border\\/30{border-color:color-mix(in oklab, var(--border) 30%, transparent)}}.border-border\\/40{border-color:var(--border)}@supports (color:color-mix(in lab, red, red)){.border-border\\/40{border-color:color-mix(in oklab, var(--border) 40%, transparent)}}.border-destructive{border-color:var(--destructive)}.border-foreground\\/10{border-color:var(--foreground)}@supports (color:color-mix(in lab, red, red)){.border-foreground\\/10{border-color:color-mix(in oklab, var(--foreground) 10%, transparent)}}.border-foreground\\/20{border-color:var(--foreground)}@supports (color:color-mix(in lab, red, red)){.border-foreground\\/20{border-color:color-mix(in oklab, var(--foreground) 20%, transparent)}}.border-green-700{border-color:var(--color-green-700)}.border-orange-500{border-color:var(--color-orange-500)}.border-primary,.border-primary\\/20{border-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.border-primary\\/20{border-color:color-mix(in oklab, var(--primary) 20%, transparent)}}.border-primary\\/30{border-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.border-primary\\/30{border-color:color-mix(in oklab, var(--primary) 30%, transparent)}}.bg-\\[\\#f8f8f8\\]{background-color:#f8f8f8}.bg-accent{background-color:var(--accent)}.bg-background{background-color:var(--background)}.bg-background\\!{background-color:var(--background)!important}.bg-black\\/5{background-color:#0000000d}@supports (color:color-mix(in lab, red, red)){.bg-black\\/5{background-color:color-mix(in oklab, var(--color-black) 5%, transparent)}}.bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab, red, red)){.bg-black\\/20{background-color:color-mix(in oklab, var(--color-black) 20%, transparent)}}.bg-blue-500{background-color:var(--color-blue-500)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-border{background-color:var(--border)}.bg-destructive{background-color:var(--destructive)}.bg-foreground,.bg-foreground\\/10{background-color:var(--foreground)}@supports (color:color-mix(in lab, red, red)){.bg-foreground\\/10{background-color:color-mix(in oklab, var(--foreground) 10%, transparent)}}.bg-green-600{background-color:var(--color-green-600)}.bg-green-700{background-color:var(--color-green-700)}.bg-muted{background-color:var(--muted)}.bg-orange-500{background-color:var(--color-orange-500)}.bg-orange-600{background-color:var(--color-orange-600)}.bg-popover{background-color:var(--popover)}.bg-primary{background-color:var(--primary)}.bg-primary\\!{background-color:var(--primary)!important}.bg-primary-foreground,.bg-primary-foreground\\/30{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab, red, red)){.bg-primary-foreground\\/30{background-color:color-mix(in oklab, var(--primary-foreground) 30%, transparent)}}.bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.bg-primary\\/10{background-color:color-mix(in oklab, var(--primary) 10%, transparent)}}.bg-primary\\/15{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.bg-primary\\/15{background-color:color-mix(in oklab, var(--primary) 15%, transparent)}}.bg-primary\\/20{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.bg-primary\\/20{background-color:color-mix(in oklab, var(--primary) 20%, transparent)}}.bg-secondary{background-color:var(--secondary)}.bg-success{background-color:var(--success)}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.object-contain{object-fit:contain}.object-center{object-position:center}.p-0{padding:0}.p-0\\.5{padding:calc(var(--spacing) * .5)}.p-0\\.75\\!{padding:calc(var(--spacing) * .75)!important}.p-1{padding:var(--spacing)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-2\\.5{padding:calc(var(--spacing) * 2.5)}.p-3{padding:calc(var(--spacing) * 3)}.p-4{padding:calc(var(--spacing) * 4)}.p-6{padding:calc(var(--spacing) * 6)}.px-1{padding-inline:var(--spacing)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-4\\.5{padding-inline:calc(var(--spacing) * 4.5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.px-7{padding-inline:calc(var(--spacing) * 7)}.py-0{padding-block:0}.py-1{padding-block:var(--spacing)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-1\\.25{padding-block:calc(var(--spacing) * 1.25)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-10{padding-block:calc(var(--spacing) * 10)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-4{padding-right:calc(var(--spacing) * 4)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pb-0{padding-bottom:0}.pb-1{padding-bottom:var(--spacing)}.pb-5{padding-bottom:calc(var(--spacing) * 5)}.pl-4{padding-left:calc(var(--spacing) * 4)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[0\\.7em\\]{font-size:.7em}.leading-none{--tw-leading:1;line-height:1}.leading-normal{--tw-leading:var(--leading-normal);line-height:var(--leading-normal)}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.break-anywhere{overflow-wrap:anywhere}.break-all{word-break:break-all}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.text-background{color:var(--background)}.text-black{color:var(--color-black)}.text-blue-50{color:var(--color-blue-50)}.text-current{color:currentColor}.text-destructive{color:var(--destructive)}.text-destructive-foreground{color:var(--destructive-foreground)}.text-foreground{color:var(--foreground)}.text-green-50{color:var(--color-green-50)}.text-muted-foreground{color:var(--muted-foreground)}.text-orange-50{color:var(--color-orange-50)}.text-popover-foreground{color:var(--popover-foreground)}.text-primary{color:var(--primary)}.text-primary-foreground{color:var(--primary-foreground)}.text-primary-foreground\\!{color:var(--primary-foreground)!important}.text-secondary{color:var(--secondary)}.text-secondary-foreground{color:var(--secondary-foreground)}.text-success-foreground{color:var(--success-foreground)}.capitalize{text-transform:capitalize}.uppercase{text-transform:uppercase}.italic{font-style:italic}.underline{text-decoration-line:underline}.opacity-0{opacity:0}.opacity-15{opacity:.15}.opacity-50{opacity:.5}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-border{outline-color:var(--border)}.outline-destructive{outline-color:var(--destructive)}.outline-destructive-foreground{outline-color:var(--destructive-foreground)}.outline-primary{outline-color:var(--primary)}.outline-primary-foreground{outline-color:var(--primary-foreground)}.brightness-85{--tw-brightness:brightness(85%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a)) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a) drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.drop-shadow-lg{--tw-drop-shadow-size:drop-shadow(0 4px 4px var(--tw-drop-shadow-color,#00000026));--tw-drop-shadow:drop-shadow(var(--drop-shadow-lg));filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[bottom\\]{transition-property:bottom;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[colors\\]{transition-property:colors;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[margin\\]{transition-property:margin;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[width\\]{transition-property:width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none\\!{transition-property:none!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.outline-solid{--tw-outline-style:solid;outline-style:solid}.\\[--player-height\\:calc\\(100dvh-52px\\)\\]{--player-height:calc(100dvh - 52px)}.\\[wasm\\:\\\"\\+n\\[3\\]\\+\\\"\\]{wasm:\"+n[3]+\"}:is(.\\*\\:z-10>*){z-index:10}:is(.\\*\\:text-background>*){color:var(--background)}:is(.\\*\\:text-blue-50>*){color:var(--color-blue-50)}:is(.\\*\\:text-destructive-foreground>*){color:var(--destructive-foreground)}:is(.\\*\\:text-green-50>*){color:var(--color-green-50)}:is(.\\*\\:text-orange-50>*){color:var(--color-orange-50)}:is(.\\*\\:text-primary-foreground>*){color:var(--primary-foreground)}:is(.\\*\\*\\:text-foreground *){color:var(--foreground)}.not-focus\\:outline-0:not(:focus){outline-style:var(--tw-outline-style);outline-width:0}@media (hover:hover){.group-hover\\:text-foreground:is(:where(.group):hover *){color:var(--foreground)}.group-hover\\:brightness-85:is(:where(.group):hover *){--tw-brightness:brightness(85%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}}.group-data-\\[state\\=close\\]\\:-mb-100:is(:where(.group)[data-state=close] *){margin-bottom:calc(var(--spacing) * -100)}.placeholder\\:text-sm::placeholder{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.placeholder\\:normal-case::placeholder{text-transform:none}.before\\:size-4:before{content:var(--tw-content);width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.before\\:rounded-full:before{content:var(--tw-content);border-radius:2147483647px}.not-checked\\:before\\:bg-background:not(:checked):before{content:var(--tw-content);background-color:var(--background)}.checked\\:bg-primary:checked{background-color:var(--primary)}.checked\\:text-primary-foreground:checked{color:var(--primary-foreground)}.focus-within\\:pointer-events-auto:focus-within{pointer-events:auto}.focus-within\\:visible:focus-within{visibility:visible}@media (hover:hover){.hover\\:cursor-pointer:hover{cursor:pointer}.hover\\:bg-accent:hover{background-color:var(--accent)}.hover\\:bg-destructive\\/5:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-destructive\\/5:hover{background-color:color-mix(in oklab, var(--destructive) 5%, transparent)}}.hover\\:bg-foreground\\/5:hover{background-color:var(--foreground)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-foreground\\/5:hover{background-color:color-mix(in oklab, var(--foreground) 5%, transparent)}}.hover\\:bg-muted:hover{background-color:var(--muted)}.hover\\:bg-muted\\!:hover{background-color:var(--muted)!important}.hover\\:bg-primary-foreground\\/5:hover{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-primary-foreground\\/5:hover{background-color:color-mix(in oklab, var(--primary-foreground) 5%, transparent)}}.hover\\:bg-primary\\/5:hover{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-primary\\/5:hover{background-color:color-mix(in oklab, var(--primary) 5%, transparent)}}.hover\\:bg-primary\\/10:hover{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-primary\\/10:hover{background-color:color-mix(in oklab, var(--primary) 10%, transparent)}}.hover\\:bg-primary\\/15:hover{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-primary\\/15:hover{background-color:color-mix(in oklab, var(--primary) 15%, transparent)}}.hover\\:bg-primary\\/20:hover{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.hover\\:bg-primary\\/20:hover{background-color:color-mix(in oklab, var(--primary) 20%, transparent)}}.hover\\:text-destructive:hover{color:var(--destructive)}.hover\\:text-foreground:hover{color:var(--foreground)}.hover\\:text-primary:hover{color:var(--primary)}.hover\\:opacity-70:hover{opacity:.7}.hover\\:opacity-80:hover{opacity:.8}.hover\\:brightness-110:hover{--tw-brightness:brightness(110%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.hover\\:brightness-115:hover{--tw-brightness:brightness(115%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.hover\\:brightness-125:hover{--tw-brightness:brightness(125%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.not-expanded\\:hover\\:cursor-move:not(:is(:host([data-expanded=true]) *)):hover{cursor:move}}.focus\\:bg-primary:focus{background-color:var(--primary)}.focus\\:text-destructive:focus{color:var(--destructive)}.focus\\:text-primary-foreground:focus{color:var(--primary-foreground)}.focus\\:outline-2:focus{outline-style:var(--tw-outline-style);outline-width:2px}.focus\\:outline-solid:focus{--tw-outline-style:solid;outline-style:solid}.active\\:bg-primary\\/20:active{background-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.active\\:bg-primary\\/20:active{background-color:color-mix(in oklab, var(--primary) 20%, transparent)}}:is(.has-\\[\\>\\[role\\=button\\]\\[aria-disabled\\=true\\]\\]\\:pointer-events-none:has(>[role=button][aria-disabled=true]),.has-\\[\\>button\\:disabled\\]\\:pointer-events-none:has(>button:disabled)){pointer-events:none}.data-\\[active\\=true\\]\\:bg-primary-foreground\\![data-active=true]{background-color:var(--primary-foreground)!important}.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{outline-color:color-mix(in oklab, var(--primary) 50%, transparent)}}.data-\\[highlight\\=true\\]\\:animate-highlight-primary[data-highlight=true]{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary)}@supports (color:color-mix(in lab, red, red)){:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{outline-color:color-mix(in oklab, var(--primary) 50%, transparent)}}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary *)[data-highlight=true]{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary}:is(.\\*\\*\\:data-\\[highlight\\=true\\]\\:animate-highlight-primary-foreground *)[data-highlight=true]{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x) var(--tw-scale-y);outline-style:var(--tw-outline-style);outline-width:2px;outline-color:var(--primary-foreground);transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration));--tw-outline-style:solid;outline-style:solid;animation:.5s ease-out infinite alternate-reverse highlight-shadow-primary-foreground}:is(.focus-within\\:\\*\\*\\:data-\\[slot\\=tooltip-content\\]\\:hidden:focus-within *)[data-slot=tooltip-content]{display:none}@media not all and (width>=64rem){.max-lg\\:hidden{display:none}}@media not all and (width>=40rem){.max-sm\\:inset-x-0\\!{inset-inline:0!important}}@media (width>=40rem){.sm\\:size-8{width:calc(var(--spacing) * 8);height:calc(var(--spacing) * 8)}.sm\\:h-auto{height:auto}.sm\\:w-xl{width:var(--container-xl)}.sm\\:widget-radius{border-radius:var(--radius-xl)}.sm\\:\\[--player-height\\:800px\\]{--player-height:800px}@media (hover:hover){.sm\\:hover\\:cursor-move:hover{cursor:move}}}.dark\\:bg-\\[\\#222222\\]:is(:host(.dark) *){background-color:#222}.dark\\:bg-muted:is(:host(.dark) *){background-color:var(--muted)}.dark\\:text-foreground:is(:host(.dark) *){color:var(--foreground)}.dark\\:text-secondary-foreground:is(:host(.dark) *){color:var(--secondary-foreground)}.dark\\:text-white:is(:host(.dark) *){color:var(--color-white)}.dark\\:opacity-10:is(:host(.dark) *){opacity:.1}.expanded\\:inset-x-4\\!:is(:host([data-expanded=true]) *){inset-inline:calc(var(--spacing) * 4)!important}.expanded\\:bottom-16\\!:is(:host([data-expanded=true]) *){bottom:calc(var(--spacing) * 16)!important}.expanded\\:w-full:is(:host([data-expanded=true]) *){width:100%}.expanded\\:text-base\\!:is(:host([data-expanded=true]) *){font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.expanded\\:text-sm:is(:host([data-expanded=true]) *){font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}@media not all and (width>=40rem){.expanded\\:max-sm\\:rounded-none\\!:is(:host([data-expanded=true]) *){border-radius:0!important}}@media (width<=640px){.mobile\\:inset-0:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){inset:0}.mobile\\:inset-x-2:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){inset-inline:calc(var(--spacing) * 2)}.mobile\\:bottom-13:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){bottom:calc(var(--spacing) * 13)}.mobile\\:-m-2:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){margin:calc(var(--spacing) * -2)}.mobile\\:mt-2:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){margin-top:calc(var(--spacing) * 2)}.mobile\\:mb-1:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){margin-bottom:var(--spacing)}.mobile\\:size-4:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.mobile\\:size-4\\.5:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing) * 4.5);height:calc(var(--spacing) * 4.5)}.mobile\\:size-5:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing) * 5);height:calc(var(--spacing) * 5)}.mobile\\:size-14:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing) * 14);height:calc(var(--spacing) * 14)}.mobile\\:size-18:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){width:calc(var(--spacing) * 18);height:calc(var(--spacing) * 18)}.mobile\\:h-6:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){height:calc(var(--spacing) * 6)}.mobile\\:h-32:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){height:calc(var(--spacing) * 32)}.mobile\\:max-w-14:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){max-width:calc(var(--spacing) * 14)}.mobile\\:min-w-8:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){min-width:calc(var(--spacing) * 8)}.mobile\\:translate-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){translate:none!important}.mobile\\:transform-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){transform:none!important}.mobile\\:gap-y-0\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){row-gap:0!important}.mobile\\:rounded-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){border-radius:0!important}.mobile\\:border-none\\!:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){--tw-border-style:none!important;border-style:none!important}.mobile\\:px-3:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){padding-inline:calc(var(--spacing) * 3)}.mobile\\:py-2:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){padding-block:calc(var(--spacing) * 2)}.mobile\\:text-center:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){text-align:center}.mobile\\:text-sm:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.mobile\\:text-xs:is(:host(:not([data-expanded=true]):not([data-extension=true])) *){font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}}.\\[\\&_button\\]\\:z-1 button{z-index:1}.\\[\\&_button\\]\\:w-full button{width:100%}.\\[\\&_button\\]\\:rounded-full button{border-radius:2147483647px}.\\[\\&_button\\]\\:border-border button{border-color:var(--border)}.\\[\\&_button\\]\\:bg-background button{background-color:var(--background)}.\\[\\&_button\\]\\:bg-primary-foreground button{background-color:var(--primary-foreground)}.\\[\\&_button\\]\\:text-primary button{color:var(--primary)}.\\[\\&_button\\]\\:shadow-md button{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.\\[\\&_button\\]\\:not-hover\\:bg-transparent button:not(:hover){background-color:#0000}@media not all and (hover:hover){.\\[\\&_button\\]\\:not-hover\\:bg-transparent button{background-color:#0000}}@media (hover:hover){.\\[\\&_button\\]\\:hover\\:bg-muted button:hover{background-color:var(--muted)}}.\\[\\&_button\\]\\:dark\\:text-secondary-foreground button:is(:host(.dark) *){color:var(--secondary-foreground)}.\\[\\&_span\\]\\:rounded-full span{border-radius:2147483647px}.\\[\\&_span\\]\\:bg-primary-foreground\\/30 span{background-color:var(--primary-foreground)}@supports (color:color-mix(in lab, red, red)){.\\[\\&_span\\]\\:bg-primary-foreground\\/30 span{background-color:color-mix(in oklab, var(--primary-foreground) 30%, transparent)}}.focus\\:\\[\\&_svg\\]\\:text-destructive:focus svg{color:var(--destructive)}:is(.\\*\\*\\:\\[\\[role\\=button\\]\\]\\:not-hover\\:bg-transparent *)[role=button]:not(:hover){background-color:#0000}@media not all and (hover:hover){:is(.\\*\\*\\:\\[\\[role\\=button\\]\\]\\:not-hover\\:bg-transparent *)[role=button]{background-color:#0000}}:is(.\\*\\*\\:\\[\\[role\\=button\\]\\]\\:dark\\:text-secondary-foreground *)[role=button]:is(:host(.dark) *){color:var(--secondary-foreground)}.\\[\\&\\>button\\]\\:h-10>button{height:calc(var(--spacing) * 10)}.\\[\\&\\>button\\]\\:w-full>button{width:100%}.\\[\\&\\>button\\]\\:flex-col>button{flex-direction:column}.\\[\\&\\>button\\]\\:rounded-full>button{border-radius:2147483647px}.\\[\\&\\>button\\]\\:text-muted-foreground>button{color:var(--muted-foreground)}@media (width<=640px){.mobile\\:\\[\\&\\>button\\]\\:text-sm:is(:host(:not([data-expanded=true]):not([data-extension=true])) *)>button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}.\\[\\&\\>div\\]\\:col-span-2>div{grid-column:span 2/span 2}.\\[\\&\\>div\\]\\:grid>div{display:grid}.\\[\\&\\>div\\]\\:grid-cols-subgrid>div{grid-template-columns:subgrid}.\\[\\&\\>div\\]\\:justify-items-center>div{justify-items:center}.\\[\\&\\>div\\]\\:rounded>div{border-radius:.25rem}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4>i:not([class*=size-]){width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4\\.5>i:not([class*=size-]){width:calc(var(--spacing) * 4.5);height:calc(var(--spacing) * 4.5)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5>i:not([class*=size-]){width:calc(var(--spacing) * 5);height:calc(var(--spacing) * 5)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5\\.25>i:not([class*=size-]){width:calc(var(--spacing) * 5.25);height:calc(var(--spacing) * 5.25)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6>i:not([class*=size-]){width:calc(var(--spacing) * 6);height:calc(var(--spacing) * 6)}.\\[\\&\\>i\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6\\.5>i:not([class*=size-]){width:calc(var(--spacing) * 6.5);height:calc(var(--spacing) * 6.5)}.\\[\\&\\>svg\\]\\:shrink-0>svg{flex-shrink:0}}:host,[data-theme=light]{--background:oklch(100% 0 0);--foreground:oklch(30% 0 0);--primary:oklch(46.02% .169 260.07);--primary-foreground:oklch(100% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--secondary:oklch(33.15% .1141 259.88);--secondary-foreground:oklch(84.71% .0543 259.88);--muted:oklch(95% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(90% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(63.7% .237 25.331);--destructive-foreground:oklch(98.5% 0 0);--success:oklch(54.834% .15401 147.965);--success-foreground:oklch(100% .00011 271.152);--border:oklch(91% 0 0);--input:oklch(91% 0 0);--ring:oklch(70.8% 0 0);--radius:10px;--spacing:4px;--font-sans:\"VLibrasWidget_Font\", sans-serif;--font-size:16px}:host(.dark),[data-theme=dark]{--background:oklch(17.76% 0 0);--foreground:oklch(95% 0 0);--primary:oklch(55.5% .169 260.07);--primary-foreground:oklch(100% 0 0);--popover:oklch(20% 0 0);--popover-foreground:oklch(98.5% 0 0);--secondary:oklch(33.15% .1141 259.88);--secondary-foreground:oklch(84.71% .0543 259.88);--muted:oklch(20.76% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(23.76% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(63.7% .237 25.331);--destructive-foreground:oklch(98.5% 0 0);--border:oklch(26.9% 0 0);--input:oklch(26.9% 0 0);--ring:oklch(43.9% 0 0)}:host{--widget-width:260px;--player-height:328px}@media (width>=640px){:host{--widget-width:300px;--player-height:380px}}@keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes move-left{0%{opacity:0;transform:translate(-20%)}to{opacity:1;transform:translate(0)}}@keyframes move-right{0%{opacity:0;transform:translate(20%)}to{opacity:1;transform:translate(0)}}@keyframes move-up{0%{opacity:0;transform:translateY(20%)}to{opacity:1;transform:translateY(0)}}@keyframes move-down{0%{opacity:0;transform:translateY(-20%)}to{opacity:1;transform:translateY(0)}}@keyframes highlight-shadow-primary{0%{box-shadow:0 0 #0000}to{box-shadow:0 0 10px 5px var(--primary)}}@keyframes highlight-shadow-primary-foreground{0%{box-shadow:0 0 #0000}to{box-shadow:0 0 15px var(--primary-foreground)}}:host{color:var(--foreground);font-size:var(--font-size)!important;font-family:var(--font-sans)!important;scrollbar-color:var(--foreground) transparent!important}@supports (color:color-mix(in lab, red, red)){:host{scrollbar-color:color-mix(in oklch, var(--foreground) 50%, transparent) transparent!important}}:host [data-highlight=true]{z-index:99999!important;border-radius:2147483647px!important}@keyframes dropdown{0%{opacity:0}}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@property --tw-content{syntax:\"*\";inherits:false;initial-value:\"\"}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@keyframes spin{to{transform:rotate(360deg)}}@keyframes pulse{50%{opacity:.5}}", gs = (e, t) => (t || document).querySelector(e), _s = (e, t) => Array.from((t || document).querySelectorAll(e)), vs = 16, ys = (e) => e.replace(/(-?(?:\d+\.?\d*|\.\d+))rem\b/g, (e, t) => `${Number.parseFloat(t) * vs}px`);
function bs(e, t) {
	if (e.querySelector("style[data-widget-styles]")) {
		t && requestAnimationFrame(() => t());
		return;
	}
	let n = ys(hs.replace(/:root/g, ":host")), r = [], i = n.replace(/@property\s+[^{]+\{[^}]*\}/g, (e) => (r.push(e), ""));
	if (r.length > 0 && !document.head.querySelector("style[data-widget-properties]")) {
		let e = document.createElement("style");
		e.setAttribute("data-widget-properties", "true"), e.textContent = r.join("\n"), document.head.appendChild(e);
	}
	let a = document.createElement("style");
	a.setAttribute("data-widget-styles", "true"), a.textContent = i, t && requestAnimationFrame(() => t()), e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a);
}
// src/widget/stores/use-tooltip.store.ts
var xs = {
	event: null,
	isActive: !1,
	onClick: void 0,
	type: "button",
	element: null,
	listener: null,
	render: void 0
}, Ss = L()(() => ({ ...xs })), Cs = {
	get: Ss.getState,
	set: Ss.setState,
	subscribe: Ss.subscribe
}, ws = ({ event: e, tooltip: t }) => {
	let n = t?.getBoundingClientRect() || {
		width: 0,
		height: 0
	}, r = e.pageX, i = e.pageY - 36, a = "bottom";
	return r < 34 && (r = 34, a = "left"), r + n.width > window.innerWidth && (r = window.innerWidth - n.width + 12, a = "right"), e.clientY < 46 ? (i = e.pageY + n.height * 2, a = a === "right" ? "top-right" : "top-left") : a = a === "right" ? "bottom-right" : "bottom-left", {
		x: r,
		y: i,
		arrow: a
	};
}, Ts = () => {
	let e = Ge(null), { type: t, event: n, onClick: r, isActive: i, render: a } = Ss(), [o, s] = F({
		x: 0,
		y: 0,
		arrow: "bottom"
	});
	return I(() => {
		let t = (t) => {
			e.current && !e.current.contains(t.target) && Cs.set({ isActive: !1 });
		};
		return i ? document.addEventListener("click", t) : document.removeEventListener("click", t), () => {
			document.removeEventListener("click", t);
		};
	}, [i]), I(() => {
		if (n && e.current) {
			s(ws({
				event: n,
				tooltip: e.current
			}));
			let t = e.current;
			t && (t.classList.remove("animate-scale"), t.offsetWidth, t.classList.add("animate-scale"));
		}
	}, [n]), /* @__PURE__ */ U(Y, {
		ref: e,
		onClick: r,
		style: {
			left: o.x,
			top: o.y
		},
		className: H("group absolute z-2147483647 h-9 -translate-x-6 -translate-y-full animate-scale rounded-xl px-3 text-primary-foreground shadow-lg", !i && "hidden"),
		children: [
			a || /* @__PURE__ */ U(k, { children: [/* @__PURE__ */ U(X, {
				name: t === "button" ? "touch" : "link",
				className: "size-5"
			}), /* @__PURE__ */ U("span", {
				className: "relative bottom-0.5 whitespace-nowrap font-medium text-sm",
				children: t === "button" ? "Interagir" : "Acessar link"
			})] }),
			/* @__PURE__ */ U("span", { className: "absolute inset-0 -z-1 rounded-xl bg-primary group-hover:brightness-85" }),
			/* @__PURE__ */ U("span", { className: H("absolute -z-2 size-4 -translate-x-1/2 rotate-45 rounded-sm bg-primary brightness-85", [
				"bottom",
				"bottom-left",
				"bottom-right"
			].includes(o.arrow) ? "-bottom-1.5" : "-top-1.5", [
				"bottom-left",
				"top-left",
				"bottom",
				"top"
			].includes(o.arrow) ? "left-5" : "right-2") })
		]
	});
}, Es = ({ children: e, root: t }) => {
	let { theme: n } = Ln();
	return I(() => {
		let e = t || document.documentElement;
		(e instanceof ShadowRoot ? e.host : e).classList.toggle("dark", n === "dark");
	}, [n, t]), e;
}, Ds = () => {
	let e = Ge(null), t = Z((e) => e.isOpen);
	return I(() => {
		let t = gs("#vlibras-access-wrapper")?.shadowRoot, n = t ? gs("#vlibras-access", t) : null;
		n && (e.current = n);
	}, []), I(() => {
		e.current && (e.current.style.display = t ? "none" : "flex");
	}, [t]), null;
}, Os = () => {
	let e = Z((e) => e.isExpanded);
	I(() => pn.set({ isExpanded: e }), [e]);
}, ks = 3e5, As = () => {
	let e = Z((e) => e.isOpen);
	I(() => {
		if (e) {
			J.set({ isMounted: !0 });
			return;
		}
		let t = setTimeout(() => {
			J.get().reset(), J.set({ isMounted: !1 });
		}, ks);
		return () => clearTimeout(t);
	}, [e]);
}, js = () => {
	let e = q((e) => e.status), { isTranslating: t, isExpanded: n, isOpen: r } = Z(Mn("isTranslating", "isExpanded", "isOpen"));
	I(() => {
		let { root: t } = sa.get();
		t && (t.dataset.status = e);
	}, [e]), I(() => {
		let { root: e } = sa.get();
		e && r && (n ? (e.dataset.expanded = "true", document.body.dataset.vlibrasExpanded = "true") : (delete e.dataset.expanded, delete document.body.dataset.vlibrasExpanded));
	}, [n, r]), I(() => {
		let e = document.documentElement;
		t ? e.dataset.vlibrasStatus = "translating" : delete e.dataset.vlibrasStatus;
	}, [t]);
}, Ms = {
	light: {
		color: "black",
		outline: "black",
		shadow: "black"
	},
	dark: {
		color: "white",
		outline: "white",
		shadow: "black"
	}
}, Ns = () => {
	let e = Ln((e) => e.theme), t = q((e) => e.isLoaded);
	return I(() => {
		if (!t) return;
		let n = Ms[e];
		_o(n);
	}, [e, t]), I(() => {
		if (!t) return;
		let { showSubtitles: e } = J.get();
		mo(e);
	}, [t]), null;
}, Ps = () => {
	let e = q((e) => e.isLoaded);
	I(() => {
		if (!e) return;
		let t = () => {
			let { isPausedByUser: e } = Q.get(), { status: t } = J.get(), n = document.visibilityState === "visible";
			(n || t === "playing") && (n && !e ? setTimeout(ao, 1e3) : uo());
		};
		return window.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
	}, [e]);
}, Fs = {
	TRANSLATION_ERROR: "Não foi possível traduzir o texto.",
	TRANSLATION_EMPTY_ERROR: "Nenhum dado recebido do servidor.",
	TRANSLATION_TIMEOUT_ERROR: "A tradução demorou muito e foi cancelada.",
	TRANSLATION_SUPERSEDED_ERROR: "Tradução cancelada por uma solicitação mais recente.",
	SEND_REVIEW_ERROR: "Não foi possível enviar seu feedback.",
	SEND_REVIEW_TIMEOUT_ERROR: "O envio do feedback demorou muito e foi cancelado.",
	SIGNS_ERROR: "Erro ao buscar os sinais.",
	SIGNS_EMPTY_ERROR: "Nenhum dado recebido do servidor.",
	SIGNS_TIMEOUT_ERROR: "A busca dos sinais demorou muito e foi cancelada.",
	UNKNOWN_ERROR: "Erro desconhecido."
};
Object.keys(Fs);
// src/core/actions/index.ts
var Is = () => {
	let e = new AbortController();
	return {
		controller: e,
		timeoutId: setTimeout(() => e.abort(), to.REQUEST_TIMEOUT)
	};
}, Ls = 0, Rs = null, zs = async (e) => {
	Rs?.();
	let t = ++Ls, { controller: n, timeoutId: r } = Is();
	Rs = () => n.abort();
	try {
		let r = await fetch(to.TRANSLATE_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ text: e }),
			signal: n.signal
		});
		if (!r.ok) throw Error(`Erro na API: ${r.status}`);
		let i = await r.text();
		try {
			let e = JSON.parse(i);
			e.traducao && (i = e.traducao);
		} catch {}
		return t === Ls ? {
			data: i,
			success: !0
		} : {
			success: !1,
			error: Fs.TRANSLATION_SUPERSEDED_ERROR,
			code: "TRANSLATION_SUPERSEDED_ERROR"
		};
	} catch (e) {
		let n = e;
		return n.name === "AbortError" && t !== Ls ? {
			success: !1,
			error: Fs.TRANSLATION_SUPERSEDED_ERROR,
			code: "TRANSLATION_SUPERSEDED_ERROR"
		} : (to.DEV && console.error("Falha na tradução: ", e), n.name === "AbortError" ? {
			success: !1,
			error: Fs.TRANSLATION_TIMEOUT_ERROR,
			code: "TRANSLATION_TIMEOUT_ERROR"
		} : {
			success: !1,
			error: Fs.TRANSLATION_ERROR,
			code: "TRANSLATION_ERROR"
		});
	} finally {
		clearTimeout(r);
	}
}, Bs = async () => {
	let { controller: e, timeoutId: t } = Is();
	try {
		let t = await fetch(to.SIGNS_URL, {
			method: "GET",
			signal: e.signal
		});
		if (!t.ok) throw Error(`Erro na API: ${t.status}`);
		return {
			data: await t.json(),
			success: !0
		};
	} catch (e) {
		return to.DEV && console.error("Falha na tradução: ", e), e.name === "AbortError" ? {
			success: !1,
			error: Fs.SIGNS_TIMEOUT_ERROR,
			code: "SIGNS_TIMEOUT_ERROR"
		} : {
			success: !1,
			error: Fs.SIGNS_ERROR,
			code: "SIGNS_ERROR"
		};
	} finally {
		clearTimeout(t);
	}
}, Vs = async (e) => {
	let { controller: t, timeoutId: n } = Is();
	try {
		let n = await fetch(to.REVIEW_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(e),
			signal: t.signal
		});
		if (!n.ok) throw Error(`Erro na API: ${n.status}`);
		return { success: !0 };
	} catch (e) {
		return to.DEV && console.error("Falha no envio do feedback: ", e), e.name === "AbortError" ? {
			success: !1,
			error: Fs.SEND_REVIEW_TIMEOUT_ERROR,
			code: "SEND_REVIEW_TIMEOUT_ERROR"
		} : {
			success: !1,
			error: Fs.SEND_REVIEW_ERROR,
			code: "SEND_REVIEW_ERROR"
		};
	} finally {
		clearTimeout(n);
	}
}, Hs = () => yn({
	queryKey: ["dictionary_signs"],
	queryFn: async () => {
		let e = await Bs();
		if (e.error) throw Error(e.error);
		if (!e.data) throw Error(Fs.SIGNS_EMPTY_ERROR);
		return e.data;
	}
}), Us = () => mn({ mutationFn: async (e) => {
	let t = await Vs(e);
	if (t.error) throw Error(t.error);
	return !0;
} }), Ws = (e) => mn({
	...e,
	mutationFn: async (e) => {
		let t = await zs(e);
		if (t.code !== "TRANSLATION_SUPERSEDED_ERROR") return t.error && console.error(t.error), t.data || console.error(Fs.TRANSLATION_EMPTY_ERROR), t.data;
	}
}), Gs = (e = !0) => Ws({
	onMutate: (t) => {
		Q.set({
			text: t,
			isTranslating: e
		});
	},
	onSettled: (e) => {
		J.set({
			gloss: e,
			isGlossTranslated: !!e
		}), Q.set({ isTranslating: !1 });
	}
}), Ks = "html body :not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABuhJREFUeAHNWUtsVFUY/s+dtjNNSiCaFDCRzIJhJUqJDSUpdYjdQBeikJK4KuCGRKVLsCA0WFhK1ciKtiTGRGIFF+iGhgJdTAKRonHTknhDDK+NJZK003LP8XznzpnO45w793am0i+Z3Jm5j/M/vv91Ltt2Zq6XETtCEkLQGka0hkxg5KqjYP6RhEuCXMHEDOPinud4M7f7mibpfwZrG5i/LoVJU40gjTHJoRyJcSiWOdE4TssI1nYm+5e0ZJKWFWxcEL/C6cWNWnuJbRvI/mOlzfLAZYJdEQveYKa/0aUqISmUFfTSwMaJ00jmRMNFWiJesgJ5uMTZqaUoslIU0HA9Wng/Spw4tLKQjFH9XWnU4fRJESouV5oCGj1zDfN3207OJitdWHMKrYoz2vUmo1QzPkTrZWlsivvnnmeJHs0IevSM6Na0oLsP8N2+vDwjiyTrDYqNmtWBlg2MDrU76hgFN6cEXbrDlTIB6M/0xU+ZTlStwPrVjPq6ogteCijy1Ri3e4SzHpMnqlKgu9VRVtcUqRbP54guTHDlERNkhmopzVDOYnMWDRD8yLu1Ex5oShAd6XToYLs5t8gMdbk0Ozmqq4wICG9bZPqJoL3nX6iA1fjtQbQ8EfD85Gx84WThHw5jbIYiALQpffj000UBYcXHz3xOA1NSoU++9yoFaRmgRPfb5UowIXrbTs+m9W+HC+5SSCBgDxksc2x0kbdIo4BWCsoAUCwqsBbWLIMTy3vBYSSeUUh82mnm/K7NTAUfaKMF1dlEW34psYJnfdZlopJIay84DsVC9R1Ikx2pYmv8m6uB+6WrkUEu3fa9AKvdf+Jfoz1htGQIbJXrmlI0Y7H3cHQa5uvdEM+h/a3lltj3rUe//MGVpbDID3d4Pni1BxDU1cIU0JyJHhyd8X4ZxHretQDW25EqtwICeuAqV1bGIjqPa7rAI4W0WirghVIKYggDjZRqTFAgjWxVFkGGnufoqCeV9K+D0Jo2g2PFga2BtHr0J48+ltnpi6teUcq1Yffmci8Ih71Vhy8cAzixPbabOzbZ+Ys2omfYF6YU8NyWDURdcnHEy6XbIu+VQtx/6tHZD5zAOEmtNZ5LKwWwe4B8ZMO61RT4YNBnaIIXCT5yMKbcDmsri49yq6URJzACKru+v9TrG5vL75NG36IUSLxITMr+m2yolEGQhQotu0N6TBewsED8DE0IlZKhOJJA4bqvGWSQRF2jVFaBjAHbgko5HEG6o4BmN6e4ionRw3X09Yex/CfIk/o5eYWy9nMaTCugIMQ4VYFNzYsKoPruO+/RuTE/zaKYbQ3RbkNBUBL3p5rD1Y26/DfBbxAzN2gqFVbwwkZDkN3K9UOH2pnqjR5XqPkdKaesWOZlmDPfk5cYW4AY4UwXBY19GqZcDYDHCPLBseB4wHW7N9ut/tAsg1tkclkPzpmumn5CFYHc311SrZH/v5HcR3GrZP1KE53xfiHcuuI/zDTyC5N9AQgIL33UHlML6QYOlp96yvMpFsUIMWFCkPWBm9Pl9zFyJouk9XeSy7ORbVENUAfFCr3QQcn3Hw/H1KdFFrHBa/69/tzsX6/TI446WCu1G6Z5AgXY0CV5/aV/IYCCBhI0eihGXW84tCqxaElUZ3gEwsP6F3KeAK0A0EZbPihJ2BIAW+D3yhRQXjA0dxcmgr0A/m9cuyiI5r0WHl7Eb3wX5BsjtRap01cgqB8yDvky7WN325w3BS/zAjwQZSyEImf3xvJNGBTSE92jnDVBn0rFDdY3riucERyMCmT6GkdMsRC2cwRAK53T0QvB+t2tvsA6p6Norcpx30QhNICW9OvqPSL73qghFiBEJSqZgIIG6+shHVkNQQuhtVdM/dbQLUvxk1vx+muMLPj7+oD7eufn2INpK/z/z4dCJdQoO3HJV5mqsq80+b/vy4BHsOs23fQsGOq7jNFYbuZ4/ID+UUcBiGfr++fi83tKd+60F2x7Q6VQPC/gendr8H14/pDN0/N8Z+HPwCf54ybfaWoxsAgmrrAxEQaK89cChBd0qvS9WigebD+d3SMcumw6B+v2dsaMM3MUINAHrnoBLQcbyfQ1HCj7l0KibWC2Rzps2HYePO5utXeTNkBwWDwwRSPnH0/sNJ2KtBqUEOR8GfRadl1uuO/Y5KihBr/1UA+KwMJoDtEj/fq7CEFBs+WXpIBS4qx87SOc68v/cpx8zh+P9wddEvkdWeZYo5vINrTAMrR8cBlz0pWEB6qKPOUNjw3Lfb401QDqnZicScIIrlFd6shBKcLljjET6SVRSwapYHSlcT5+0d9gCI+aKFCI7WcW3hGcp6VAWyQ/kzKjJ0uC3sUkhWFEpubJRLb+56hCF+I/Ig4jzjnhUQQAAAAASUVORK5CYII=),pointer!important;text-decoration:underline!important}html body :not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover[src],html body :not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--hover img{cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAA0CAYAAADMk7uRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAB2BJREFUeAHNWktMVFcY/s8dYDCRygq0C4OJw6paMaXSBCxNbRNF01YNJF2BdGNf0nSjIlFi0VVTaRtdoTRpmmiKJWnowpQUgUQSjWBdFUwcWdTHphhMGAbuOT3fuZxhHuc+ZhjUL5ncO3PPved/fv9/zh2240ysjRE7QhJCUCkjKiUTGEXVUTDnSCJKgqKCiRnGxR3bsmdutq+doOcMVtMV/0sKU095gjTGBIdyJIag2FjHmiFaRbCaM/P3pSUraFXBhgTxfk6L1/PtJbaja/4/17BZHUSZYP1iwe4e61wTpRVChtC8oBcGNkScesc6in6iHPGCFUggSpydykWRl0UBjahNCx9lkycWvVyoCFHhuDTqpfqTIlBevmwKaDTHiuLjNSfnKvwG5j2ESsKMdm9lFCnDh2iDLI1rw861Z/NED2cEPXxKNDIlaHwa5+7TyyuySLI2r9zIWx2o2siotdZSx2wwPCnoyi2ulPFA51h7+JTpwooV2LCOUXtD9oKnA4p8P8jdPcJZs8kTK1KgsdpSVtchslI8ixH1jHLlERMkQ1WlM5S13JxlBwh+5N38CQ+sLSY6ssuiQ7VmbpEM9Vs6O1mqq8wSEN5tkqnHgg5cWFQJq3F7Ojue8Hh+xVx44WTyDxZjbIayAMIm/eFTT5YFhBUfPXViGpiUCn3xi+2XpBmAEo1vZCrBhGirOT1Xr79bXPAoBQQSttVgmWN9y3ELGgW0UlAGgGLZAnNhzgxYoYQXLEbiKQXEl7vMMb97C1PJh7DRgmo20ZbPJVfwrOMNplAS9doLlkWhQH0HaHJnJNUas0s1sEm6Ggxy5abjBVjt3mNnjPaE0ZIBsF3Oa6JoxkIf4GgVxQujAZ5DTdWZljh43qY/7nJlKUxy+RZPJK/2AJJ6pTAlNGeiGUdrqFMmsV7vugDWq4tkWgEJ3TXAlZUxieZxHS7wSHJY5Qp4IT0EsQhDGCnVmCDPMHKrskgy9DxH+2yppDMOQuuw6R5MTWwN0OrRqzZ9LtnpmwE7hXLdsGdLpheExV4vwAnHApzYh24376x0j1+0Ec2XHGHSAc9t20jUICdHvly5KRJeSca9Jzad3W955kmk3HitXimA3QPwkRvWryPPByN8Lo7yFMF7D4WU22FtZfE+7mpp5AmMgMqu70/3+uayzPuk0bcpBYoXiydk/01u8GMQsFCyZeukx3QBCwrkz8VRoSgZioMEkud91SCDDNRSpbJKZCywXeDH4UjSuqQwG57kKif6DhfQDx+HEh8vT+rnJBSad7+mwbQCCkIM0QpQWbasAKrvwQs2nRt0aBbFbHuAdhsKIiRxf6QsWN0oSJwJfp2YuUFTVOjjhc2GJBtZ6odaa5nqjR751PydESujWCZkiJnvSUiMLUAs4UyDvJZ9GiauBhDHSPLuQe98wLg9W9yt/q9ZhmiKyWU9OGcaNfWYfAHub0yr1uD/H2Xso7j5Wd9vRWe8X4hoQeoP5jByCpP7BBAQXvqkNqQm0g0cLD/5hCcoFsUIOWGCl/WB4anM+xhZEynSOjvJmWzkNqkGQgfFCr3QIRnvvx4OqU+VLGLdfzr3OutmZ7ymRxx1svq1G6b1BAqwoUuyO9N/QgJ5LUjQ6KEYNbxmUUnxsiVRneERCA/r9yx5AmEFIGy05b1Iwo0A2AK/k6GA8oKhuesZ9fYC4n9z+bIgOu618PAivuNckGOMSDmo01HAqx8yLvIl7WN328ybgmd4AR7IZlkIRc4eCCWaMCikV3QPl6yJ8PErbrC+cV5h9eJgVGCsfU2vKReCdo4AwkpzOnohWL+x2hFYczqKVslS7JtCCA2gC/1G9R6R+96oIRcghF8omYCCBuvrRTpYDUkLobVXTP3WxRGX4ie34vWpJ3e9dSb+nZC7AOm/Y0I0XWoxI5M3qFeCAn3VhleY2wZXVG4zbtJfPBXAJlIsHB837dzBevkWPBDifFPyqynfjqnm7FyF4Na46T1aw1a5O/deKGPFtRKgIPYM2zRgqj2CTo2dCKeEtu/7gbFjkqo4tZiutdblV3gAuQCjZIL1pgsPFFAA3OgI99d0zUklrEvpk6Xj/W/jkj2I2qQQTdWOIDKX1NirnxWq75/+vGCkxhvHi9QxuRgqgPNPhI1GDPyGxqFW3uLWsQK3H3AlPDD8j3vNeLtSFjcZfiVL1IlzfMyA5YvfcXtWIA9oQAmZE/LVqHXfdH3gbydusQmAVRl43BRiTW86ntn/YEGN6dhb4DFnUQt5IOt3ZMgJt2vj05wqy2UBq3QE9PJCvpC3l3wIH7QIszEuBXc8cXs6+6KXLbIKIS8gZIDIemcDGPE9shRGwDN5PP37YmJ8x778TJ13BU7sdaj1XHiRLmOX7pFzfTaWuq7o2Ed5QU4krv8gcu3rwrzXAQCvYvefX1Dnsm3wnCCnHMB/gnDsvmaryfKJ2ZisxCNOByrXDf1+43MLIctuQXshy33pwN3VSVT1kjsuvvIbl5MHQKXM4lVyEl8LZQtVKGXlZXFeFeT/RP8DlfZa3rLKpU0AAAAASUVORK5CYII=),pointer!important;text-decoration:none!important}html body :not(.vlibras-ignore,.sr-only,.sr-only *,#vlibras-app-root *,#vlibras-app-wrapper *) .vlibras--active{text-decoration:underline!important}", qs = Array.from([document.body, ...document.body.children]), Js = gs("#vlibras-app-root"), Ys = (e) => e.dataset.vlibrasGloss ? e.dataset.vlibrasGloss : Qs(e, ["IMG"]) ? e.alt : ec(e) ? e.value : Qs(e, ["SELECT"]) ? e.selectedOptions[0]?.innerText || "" : e.innerText.trim() || "", Xs = (e) => {
	let t = e;
	for (; t && !qs.includes(t);) {
		if ($s(t) || t.onclick && !ic(t)) return t;
		t = t.parentNode;
	}
	return null;
}, Zs = (e) => Js?.contains(e) || e.matches(".vlibras-links") ? !1 : ac(e) || Xs(e) || ec(e) || nc(e) || rc(e), Qs = (e, t) => t.includes(e.tagName), $s = (e) => Qs(e, ["A", "BUTTON"]), ec = (e) => Qs(e, "INPUT") && e.type === "submit", tc = (e) => Qs(e, "BUTTON") || e.role === "button", nc = (e) => Qs(e, "IMG") && e.alt && e.alt.trim(), rc = (e) => Qs(e, "SELECT"), ic = (e) => Qs(e, ["SVG", "PATH"]), ac = (e) => {
	let t = (e) => e.nodeType === Node.TEXT_NODE && e?.textContent?.trim();
	return Array.from(e.childNodes).some((e) => t(e));
}, oc = (e) => {
	if (!e.parentElement) return;
	let t = gs("input", e.parentElement);
	t && ["radio", "checkbox"].includes(t.type) && (t.checked = !t.checked);
}, sc = (e, t) => {
	let n = null, r = 0;
	if (document.caretPositionFromPoint) {
		let i = document.caretPositionFromPoint(e, t);
		if (!i || !i.offsetNode) return null;
		n = i.offsetNode, r = i.offset;
	} else if (document.caretRangeFromPoint) {
		let i = document.caretRangeFromPoint(e, t);
		if (!i || !i.startContainer) return null;
		n = i.startContainer, r = i.startOffset;
	}
	if (!n || n.nodeType !== Node.TEXT_NODE) return null;
	let i = n.textContent ?? "";
	if (!i.trim()) return null;
	let a = i.slice(0, r), o = i.slice(r), s = a.match(/[\wÀ-ú’-]+$/), c = o.match(/^[\wÀ-ú’-]+/), l = `${s?.[0] ?? ""}${c?.[0] ?? ""}`;
	if (!l) return null;
	let u = r - (s?.[0]?.length ?? 0);
	return {
		word: l,
		node: n,
		offset: u
	};
}, cc = (e) => {
	_s(`span.${e}`)?.forEach((e) => {
		let t = e.parentNode;
		if (!t) return;
		let n = document.createTextNode(e.textContent || "");
		t.replaceChild(n, e), t.normalize();
	});
}, lc = (e) => {
	_s(`.${e}`)?.forEach((t) => t.classList.remove(e));
}, uc = "__vlibrasSyntheticClick", dc = ({ callback: e, isWordByWord: t, hoverClss: n, activeClass: r }) => {
	let i = (e) => {
		if (!n) return;
		let r = e.target;
		Zs(r) && t && Qs(r, "IMG") || r.classList.add(n);
	}, a = (e) => {
		if (!t || !n) return;
		let r = e.target;
		if (!Zs(r)) return;
		cc(n);
		let { word: i, node: a, offset: o } = sc(e.clientX, e.clientY) || {};
		if (i && a && typeof o == "number") {
			let e = document.createRange();
			e.setStart(a, o), e.setEnd(a, o + i.length);
			let t = document.createElement("span");
			t.className = n, t.textContent = i, e.deleteContents(), e.insertNode(t);
		}
	}, o = (i) => {
		if (i[uc]) return;
		let a = i.target, o = window.getSelection()?.toString().trim();
		if (Cs.set({ isActive: !1 }), r && lc(r), r && !o && a.classList.add(r), !Zs(a)) return;
		if (o && !t) return e?.({
			text: o,
			element: a
		});
		if (i.preventDefault(), i.stopPropagation(), t && n) {
			let t = gs(`.${n}`), r = t?.textContent?.trim();
			r && t && e?.({
				text: r,
				element: t
			});
		} else {
			let t = !!a.dataset.vlibrasGloss?.trim(), n = Ys(a)?.trim();
			n && e?.({
				text: n,
				element: a,
				isGloss: t
			});
		}
		let s = a.tagName === "A" && a.href ? a : Xs(a);
		s && c(s, i), Qs(a, "LABEL") ? oc(a) : (tc(a) || ec(a)) && c(a, i);
	}, s = (e) => {
		n && e.target.classList.remove(n);
	}, c = (e, t) => {
		let n = e.tagName === "A" && !!e.href;
		Cs.set({
			isActive: !0,
			event: t,
			type: n ? "link" : "button",
			onClick: () => {
				let t = new MouseEvent("click", {
					bubbles: !0,
					cancelable: !0
				});
				Object.defineProperty(t, uc, { value: !0 }), e.dispatchEvent(t), Cs.set({ isActive: !1 });
			}
		});
	};
	return t ? document.body.addEventListener("mousemove", a) : (document.body.addEventListener("mouseover", i), document.body.addEventListener("mouseout", s)), document.body.addEventListener("click", o, !0), () => {
		document.body.removeEventListener("mousemove", a), document.body.removeEventListener("mouseover", i), document.body.removeEventListener("mouseout", s), document.body.removeEventListener("click", o, !0);
	};
}, fc = () => {
	let e = q((e) => e.isLoaded), t = Z((e) => e.isOpen), { mutateAsync: n } = Gs();
	I(() => {
		e && (t ? Wn(Ks, "@text-capture.style") : Gn("@text-capture.style"));
	}, [t, e]), I(() => {
		if (!e) return;
		let r = dc({
			hoverClss: "vlibras--hover",
			activeClass: "vlibras--active",
			callback: async ({ text: e, isGloss: t }) => {
				if (lo(), t) return ao(e);
				let r = await n(e);
				bo(), ao(r || e);
			}
		});
		return t || r?.(), () => r?.();
	}, [e, t]);
}, pc = Dn({
	name: "vlibras-web-browsers",
	description: "Acessibilidade digital através da tradução para Língua Brasileira de Sinais (Libras).",
	author: {
		name: "Suíte VLibras",
		email: "vlibras@lavid.ufpb.br",
		url: "http://vlibras.gov.br/"
	},
	homepage: "http://vlibras.gov.br/",
	repository: {
		type: "git",
		url: "https://github.com/spbgovbr-vlibras/vlibras-web-browsers.git"
	},
	bugs: {
		url: "https://github.com/spbgovbr-vlibras/vlibras-web-browsers/issues",
		email: "vlibras@lavid.ufpb.br"
	},
	keywords: [
		"libras",
		"vlibras",
		"acessibilidade",
		"govbr",
		"tradução",
		"accessibility",
		"a11y"
	],
	license: "LGPL-3.0-or-later",
	private: !0,
	version: "7.12.3",
	type: "module",
	engines: {
		node: ">=22.22.1",
		pnpm: ">=9.0.0"
	},
	packageManager: "pnpm@9.15.0",
	"lint-staged": { "*.{js,jsx,ts,tsx}": ["biome check --write"] },
	scripts: {
		dev: "vite",
		"dev:homolog": "vite --mode homolog",
		"dev:prod": "vite --mode production",
		"dev:extension": "vite --mode extension",
		build: "tsc -b && vite build",
		"build:dev": "tsc -b && vite build --mode development",
		"build:homolog": "tsc -b && vite build --mode homolog",
		"build:extension": "tsc -b && vite build --mode extension && node scripts/build-extension.js both",
		"build:firefox": "tsc -b && vite build --mode extension && node scripts/build-extension.js firefox",
		"build:chrome": "tsc -b && vite build --mode extension && node scripts/build-extension.js chrome",
		preview: "vite preview",
		lint: "biome lint",
		format: "biome check . --write",
		check: "biome check .",
		release: "release-it"
	},
	dependencies: {
		"@tailwindcss/vite": "^4.3.3",
		"class-variance-authority": "^0.7.1",
		clsx: "^2.1.1",
		daisyui: "^5.5.19",
		preact: "11.0.0-rc.1",
		"tailwind-merge": "^3.4.0",
		tailwindcss: "^4.3.3",
		zustand: "^5.0.11"
	},
	devDependencies: {
		"@biomejs/biome": "^2.3.14",
		"@commitlint/cli": "^21.2.4",
		"@commitlint/config-conventional": "^21.2.0",
		"@preact/preset-vite": "^2.10.6",
		"@release-it/conventional-changelog": "^12.0.2",
		"@types/node": "^26.4.0",
		"@types/node-polyglot": "^2.5.0",
		husky: "^9.1.7",
		"lint-staged": "^17.3.0",
		"posthog-js": "^1.438.23",
		"release-it": "^21.1.1",
		"rollup-plugin-visualizer": "^7.0.1",
		typescript: "~7.0.2",
		vite: "^8.2.4",
		"vite-plugin-compression2": "^2.5.3",
		"vite-plugin-static-copy": "^4.1.1"
	},
	pnpm: {
		overrides: {
			rollup: "4.62.4",
			postcss: "8.5.26",
			browserslist: "4.28.8",
			"fast-uri": "3.1.9",
			"posthog-js>dompurify": "3.4.17",
			undici: "7.30.1",
			"basic-ftp": "6.2.1",
			"source-map-js": "1.2.2"
		},
		peerDependencyRules: { allowAny: ["conventional-commits-parser"] }
	}
}, "name", "version", "description", "author", "homepage", "keywords", "repository", "license"), mc = () => {
	let e = q((e) => e.isLoaded), { mutateAsync: t } = Gs(!1), n = async (e) => {
		ao(await t(e) || e);
	}, r = async (e) => await t(e);
	I(() => {
		if (!e) return;
		window.plugin = window.plugin || {};
		let t = () => {
			let e = {
				project: pc,
				...En(J.get(), "send", "instance"),
				...En(Q.get(), "reset", "setLoaded"),
				...En(no, "setConfig")
			};
			window.vlibras = {
				...e,
				translate: r,
				translateAndPlay: n
			}, window.plugin.translate = n, window.plugin.player = {
				...e,
				changeAvatar: po
			};
		};
		t();
		let i = J.subscribe(t), a = Q.subscribe(t);
		return () => {
			i(), a();
		};
	}, [e]);
}, hc = () => (fc(), Ds(), mc(), Ps(), Os(), Ns(), js(), As(), null), gc = ({ children: e, root: t }) => {
	let [n, r] = F(!1);
	return I(() => void (t && bs(t, () => r(!0))), [t]), n ? /* @__PURE__ */ U(Es, {
		root: t,
		children: [
			/* @__PURE__ */ U(Ts, {}),
			/* @__PURE__ */ U(hc, {}),
			e
		]
	}) : null;
};
// src/main.tsx
pr();
var { root: _c, shadowRoot: vc, isRootActive: yc } = Un();
cr(vc);
function bc() {
	let { setOpen: e, isLoaded: t, setLoaded: n } = Z(Mn("setOpen", "isLoaded", "setLoaded")), { path: r } = cn();
	return I(() => sa.set({
		root: _c,
		shadowRoot: vc
	}), [_c, vc]), I(() => void (_c?.dataset.auto !== "true" && Za.trackLoad()), [_c]), I(() => {
		if (!r || (Yn(r, vc), n(!0), !t)) return;
		e(yc());
		let i = new MutationObserver(() => e(yc()));
		return i.observe(_c, {
			attributes: !0,
			attributeFilter: ["data-active"]
		}), () => i.disconnect();
	}, [
		r,
		e,
		t,
		n
	]), t ? /* @__PURE__ */ U(gc, {
		root: vc,
		children: /* @__PURE__ */ U(ms, {})
	}) : null;
}
we(/* @__PURE__ */ U(bc, {}), vc);
export { ln as $, Y as A, Wi as B, ua as C, Z as D, oa as E, q as F, H as G, Fi as H, Ki as I, An as J, Ln as K, Vi as L, Qi as M, Ji as N, Q as O, J as P, fn as Q, Hi as R, _a as S, sa as T, Li as U, Gi as V, U as W, jn as X, Dn as Y, yn as Z, lo as _, gs as a, Gt as at, wa as b, ns as c, I as ct, Co as d, qe as dt, sn as et, xo as f, F as ft, co as g, Ee as gt, so as h, k as ht, Fs as i, St as it, $i as j, X as k, Lo as l, We as lt, ao as m, Ye as mt, Hs as n, L as nt, _s as o, Wt as ot, uo as p, Je as pt, Mn as q, Us as r, an as rt, rs as s, st, Gs as t, cn as tt, Eo as u, Ge as ut, to as v, la as w, Ca as x, Za as y, Ui as z };
