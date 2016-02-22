package main

import (
	"github.com/gopherchina/website/controllers"

	"github.com/astaxie/beego"
	"github.com/beego/i18n"
)

func main() {

	beego.Router("/", &controllers.DocsController{})
	beego.InsertFilter("/images/:all", beego.BeforeRouter, controllers.DocsStatic)
	controllers.InitLocales()
	beego.AddFuncMap("i18n", i18n.Tr)
	beego.Run()
}
