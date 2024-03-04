package main

import (
	"context"
	"log"
	"net/http"

	"github.com/kitkitchen/fncmp"
)

func init() {
	c := fncmp.Config{
		LogLevel: fncmp.Error,
	}
	c.Set()
}

func HandleIndex(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/index.html")
}

func handleClick(context.Context) fncmp.FnComponent {
	return fncmp.NewFn(Greeting("Sean"))
}

var button = fncmp.NewFn(Button("Click me!"))

func HandleMainFn(ctx context.Context) fncmp.FnComponent {
	return button.
		WithContext(ctx).
		WithEvents(handleClick, fncmp.OnClick)
}

func main() {
	mux := http.NewServeMux()
	mux.Handle("/", http.FileServer(http.Dir("static")))
	mux.Handle("/main", fncmp.MiddleWareFn(HandleIndex, HandleMainFn))
	log.Fatal(http.ListenAndServe(":8080", mux))
}
