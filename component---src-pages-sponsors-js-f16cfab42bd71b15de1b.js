(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    GxIa: function(e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, "pageQuery", function() {
          return f;
        });
      var r = t("q1tI"),
        n = t.n(r),
        o = t("9eSz"),
        s = t.n(o),
        l = t("Bl7J"),
        i = t("vOnD");
      var c = i.a.div.withConfig({
          displayName: "Card__CardWrap",
          componentId: "bdeyg0-0"
        })([
          "box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);transition:0.3s;height:100%!important;"
        ]),
        m = i.a.h1.withConfig({
          displayName: "Card__CardHeader",
          componentId: "bdeyg0-1"
        })(["font-weight:bold;text-align:center;line-height:20px!important;"]),
        p = i.a.i.withConfig({
          displayName: "Card__CardIcon",
          componentId: "bdeyg0-2"
        })(["color:", ";"], function(e) {
          return e.iconColor || "black";
        }),
        d = i.a.div.withConfig({
          displayName: "Card__CardContent",
          componentId: "bdeyg0-3"
        })(["padding:40px 1em 1em 1em;"]),
        u = (function(e) {
          var a, t;
          function r() {
            return e.apply(this, arguments) || this;
          }
          return (
            (t = e),
            ((a = r).prototype = Object.create(t.prototype)),
            (a.prototype.constructor = a),
            (a.__proto__ = t),
            (r.prototype.render = function() {
              return n.a.createElement(
                c,
                null,
                n.a.createElement(
                  "section",
                  { className: "main style2 special" },
                  n.a.createElement(m, null, this.props.title),
                  n.a.createElement(
                    m,
                    null,
                    n.a.createElement(p, {
                      iconColor: this.props.iconColor,
                      className: this.props.icon
                    })
                  )
                ),
                n.a.createElement(
                  d,
                  null,
                  n.a.createElement("div", {
                    dangerouslySetInnerHTML: { __html: this.props.content }
                  })
                )
              );
            }),
            r
          );
        })(n.a.Component);
      var h = (function(e) {
          var a, t;
          function r() {
            return e.apply(this, arguments) || this;
          }
          return (
            (t = e),
            ((a = r).prototype = Object.create(t.prototype)),
            (a.prototype.constructor = a),
            (a.__proto__ = t),
            (r.prototype.render = function() {
              var e = this.props.data.sponsorsOffers.nodes.map(function(e) {
                  return n.a.createElement(
                    "div",
                    { className: "col-6" },
                    n.a.createElement(u, {
                      icon: e.frontmatter.icon,
                      iconColor: e.frontmatter.iconColor,
                      title: e.frontmatter.title,
                      content: e.html
                    })
                  );
                }),
                a = this.props.data.sponsorsPremiumLogos.edges.map(function(e) {
                  return n.a.createElement(
                    "div",
                    { className: "col-3" },
                    n.a.createElement(s.a, {
                      fluid: e.node.childImageSharp.fluid
                    })
                  );
                }),
                t = this.props.data.sponsorsStandardLogos.edges.map(function(
                  e
                ) {
                  return n.a.createElement(
                    "div",
                    { className: "col-3" },
                    n.a.createElement(s.a, {
                      fluid: e.node.childImageSharp.fluid
                    })
                  );
                });
              return n.a.createElement(
                l.a,
                { displayHeader: "false" },
                n.a.createElement(
                  "section",
                  { id: "sponsor-offers", className: "main style1" },
                  n.a.createElement(
                    "div",
                    { className: "grid-wrapper" },
                    n.a.createElement(
                      "div",
                      { className: "col-12" },
                      n.a.createElement(
                        "section",
                        { className: "main style1" },
                        n.a.createElement(
                          "header",
                          { className: "major" },
                          n.a.createElement(
                            "h2",
                            null,
                            this.props.data.sponsorsPage.childMarkdownRemark
                              .frontmatter.title
                          )
                        ),
                        n.a.createElement("div", {
                          dangerouslySetInnerHTML: {
                            __html: this.props.data.sponsorsPage
                              .childMarkdownRemark.html
                          }
                        })
                      )
                    ),
                    e
                  )
                ),
                n.a.createElement(
                  "section",
                  { id: "sponsors-professional", className: "main style1" },
                  n.a.createElement(
                    "div",
                    { className: "grid-wrapper" },
                    n.a.createElement(
                      "div",
                      { className: "col-12" },
                      n.a.createElement(
                        "header",
                        { className: "major" },
                        n.a.createElement("h2", null, "Partenaires Premium")
                      )
                    ),
                    a
                  )
                ),
                n.a.createElement(
                  "section",
                  { id: "sponsors-standard", className: "main style1" },
                  n.a.createElement(
                    "div",
                    { className: "grid-wrapper" },
                    n.a.createElement(
                      "div",
                      { className: "col-12" },
                      n.a.createElement(
                        "header",
                        { className: "major" },
                        n.a.createElement("h2", null, "Partenaires standard")
                      )
                    ),
                    t
                  )
                )
              );
            }),
            r
          );
        })(n.a.Component),
        f = ((a.default = h), "3337319243");
    }
  }
]);
//# sourceMappingURL=component---src-pages-sponsors-js-f16cfab42bd71b15de1b.js.map