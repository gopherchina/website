package controllers

import (
	"fmt"
	"io"
	"os"

	"github.com/gopherchina/website/models"

	"github.com/astaxie/beego/context"
	"github.com/beego/i18n"
)

type DocsController struct {
	baseController
}

// Get implemented Get method for DocsController.
func (this *DocsController) Get() {
	name := this.Ctx.Input.Param(":name")
	id := this.Ctx.Input.Param(":id")
	if name == "" {
		this.Data["indexActive"] = true
		this.TplNames = "index.tpl"
	} else {
		filename := name
		if id != "" {
			filename = name + "/" + id
		}
		df := models.GetDoc(filename, this.Lang)
		if df == nil {
			this.Abort("404")
		}
		this.Data[fmt.Sprintf("%sActive", name)] = true
		this.Data["Section"] = name

		this.Data["Title"] = df.Title
		this.Data["title"] = df.Title + " - "
		this.Data["Data"] = string(df.Data)
		this.TplNames = "detail.tpl"
	}
}

func DocsStatic(ctx *context.Context) {
	if uri := ctx.Input.Params[":all"]; len(uri) > 0 {
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
