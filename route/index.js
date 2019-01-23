const router = require('koa-router')()

router.get('/', async ctx =>{
    ctx.render('index', {
        title: 'welcome to koa2'
    })
})

module.exports = router