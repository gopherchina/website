package controllers

import (
	"fmt"

	"github.com/gopherchina/website/models"
)

type MainController struct {
	baseController
}

func (this *MainController) Get() {
	name := this.Ctx.Input.Param(":name")
	if name == "" {
		this.Data["Title"] = "GopherChina"
		this.Data["indexActive"] = true
		this.TplNames = "index.tpl"
	} else if name == "speaker" {
		this.Data["Title"] = "分享嘉宾 - GopherChina"
		this.Data["userActive"] = true
		this.TplNames = "speaker.tpl"
	} else if name == "venue" {
		this.Data["Title"] = "会场信息 - GopherChina"
		this.TplNames = "venue.tpl"
	} else if name == "register" {
		this.Data["regActive"] = true
		this.Data["Title"] = "注册报名 - GopherChina"
		this.TplNames = "register.tpl"
	} else {
		df := models.GetDoc(name, this.Lang)
		this.Data[fmt.Sprintf("%sActive", name)] = true
		this.Data["Section"] = name
		this.Data["Title"] = df.Title + " - GopherChina"
		this.Data["title"] = df.Title
		this.Data["Data"] = string(df.Data)
		this.TplNames = "detail.tpl"
	}
}
