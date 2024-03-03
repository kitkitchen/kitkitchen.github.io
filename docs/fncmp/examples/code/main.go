package main

import (
	"context"
	"log"
	"net/http"

	"github.com/kitkitchen/fncmp"
)

func HandleIndex(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/index.html")
}

func HandleMainFn(ctx context.Context) fncmp.FnComponent {
	fncmp.JS(ctx, "test", "hello client")
	return fncmp.NewFn(fncmp.HTML("<h1>Hello, World!</h1>"))
}

func main() {
	mux := http.NewServeMux()
	mux.Handle("/", http.FileServer(http.Dir("static")))
	mux.Handle("/main", fncmp.MiddleWareFn(HandleIndex, HandleMainFn))
	log.Fatal(http.ListenAndServe(":8080", mux))
}
