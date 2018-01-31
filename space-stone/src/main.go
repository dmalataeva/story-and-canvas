package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Printf("//")
	fmt.Printf("--------------------------------------------------")
	fmt.Printf("This simple HTTP Server was built specifically for")
	fmt.Printf("----  github.com/dmalataeva/story-and-canvas  ----")
	fmt.Printf("--------------------------------------------------")
	fmt.Printf("//")
	fmt.Printf("//")
	fmt.Printf("Listening on: 8080")
	Start()
}

func Start() {
	canvas := http.FileServer(http.Dir("static"))
	http.HandleFunc("/", canvas)
	http.ListenAndServe(":8080", nil)
}