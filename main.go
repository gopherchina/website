package main

import (
	"github.com/gopherchina/website/controllers"
	"github.com/gopherchina/website/models"

	"github.com/astaxie/beego"
	"github.com/beego/i18n"
)

func main() {

	beego.Router("/", &controllers.MainController{})
	beego.Router("/:name", &controllers.MainController{})
	beego.Router("/:name/:id", &controllers.DocsController{})
	controllers.InitLocales()
	models.InitModels()
	beego.AddFuncMap("i18n", i18n.Tr)
	beego.Run()
}
