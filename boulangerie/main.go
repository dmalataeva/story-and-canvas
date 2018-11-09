package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Printf("\n")
	fmt.Printf("--------------------------------------------------\n")
	fmt.Printf("----  github.com/dmalataeva/story-and-canvas  ----\n")
	fmt.Printf("--------------------------------------------------\n")
	fmt.Printf("\n")
	fmt.Printf("\n")
	fmt.Printf("Listening on: 8080\n")
	Start()
}

func Start() {
	canvas := http.FileServer(http.Dir("src"))
	http.Handle("/", canvas)
	http.ListenAndServe(":8080", nil)
}