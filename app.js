const Koa = require('koa')
const app = new Koa()
const view  = require('koa-view')
const index = require('./route')

//log
app.use(async (ctx, next) =>{
    let start = new Date()
    await next()
    let ms = new Date - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(view(__dirname + '/view'))
app.use(index.routes(), index.allowedMethods())
app.use(require('koa-static')(__dirname + '/public'))

app.listen(3001, ()=>{
    console.log('server running on http://localhost:3001')
})