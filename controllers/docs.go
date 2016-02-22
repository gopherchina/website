package controllers

import (
	"io"
	"os"

	"github.com/astaxie/beego/context"
	"github.com/beego/i18n"
)

type DocsController struct {
	baseController
}

// Get implemented Get method for DocsController.
func (this *DocsController) Get() {
	this.Data["Title"] = "GopherChina"
	this.TplName = "index.tpl"
}

func DocsStatic(ctx *context.Context) {
	if uri := ctx.Input.Param(":all"); len(uri) > 0 {
		lang := ctx.GetCookie("lang")
		if !i18n.IsExist(lang) {
			lang = "en-US"
		}

		f, err := os.Open("docs/" + lang + "/" + "images/" + uri)
		if err != nil {
			ctx.WriteString(err.Error())
			return
		}
		defer f.Close()

		_, err = io.Copy(ctx.ResponseWriter, f)
		if err != nil {
			ctx.WriteString(err.Error())
			return
		}
	}
}
