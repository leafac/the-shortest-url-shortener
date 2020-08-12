e = require("express")
m = []
e()
  .use(e.urlencoded())
  .get("/", (q, s) => s.send(`<form method="POST"><input name="u"><button>Shorten`))
  .post("/", ({body:{u}}, s) => {
    s.end(`http://localhost:5000/${m.length}`)
    m.push(u)
  })
  .get("/:i", ({params:{i}}, s) => m[i] ? s.redirect(m[i]) : s.send(404))
  .listen(5000)
