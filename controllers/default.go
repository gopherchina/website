package controllers

import "github.com/gopherchina/website/models"

type MainController struct {
	baseController
}

func (this *MainController) Get() {
	name := this.Ctx.Input.Param(":name")
	if name == "" {
		this.TplNames = "index.tpl"
	} else {
		df := models.GetDoc(name, this.Lang)
		this.Data["Section"] = name
		this.Data["Title"] = df.Title
		this.Data["title"] = df.Title + " - "
		this.Data["Data"] = string(df.Data)
		this.TplNames = "detail.tpl"
	}
}
