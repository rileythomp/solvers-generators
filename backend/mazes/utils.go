// General utility functions from the internet

package main

import (
	"time"
)

// Stack code from https://www.educative.io/edpresso/how-to-implement-a-stack-in-golang

type Stack []interface{}

// IsEmpty: check if stack is empty
func (s *Stack) IsEmpty() bool {
	return len(*s) == 0
}

// Push a new value onto the stack
func (s *Stack) Push(e interface{}) {
	*s = append(*s, e) // Simply append the new value to the end of the stack
}

// Remove and return top element of stack. Return false if stack is empty.
func (s *Stack) Pop() (interface{}, bool) {
	if s.IsEmpty() {
		return 0, false
	} else {
		index := len(*s) - 1 // Get the index of the top most element.
		elem := (*s)[index] // Index into the slice and obtain the element.
		*s = (*s)[:index] // Remove it from the stack by slicing it off.
		return elem, true
	}
}

func (s *Stack) Peek() (interface{}, bool) {
	if s.IsEmpty() {
		return 0, false
	} else {
		index := len(*s)-1
		elem := (*s)[index]
		return elem, true
	}
}

func toUpperChar(i int) string {
	return string('A' - 1 + i)
}

func toLowerChar(i int) string {
	return string('a' - 1 + i)
}

func MaxTime(t1, t2 time.Duration) time.Duration {
	if t1 > t2 {
		return t1
	}
	return t2
}

func MinTime(t1, t2 time.Duration) time.Duration {
	if t1 < t2 {
		return t1
	}
	return t2
}

// This code is from the internet
func reverse(s string) string {
    n := len(s)
    runes := make([]rune, n)
    for _, rune := range s {
        n--
        runes[n] = rune
    }
    return string(runes[n:])
}

// These 3 functions are from https://siongui.github.io/

// Get all prime factors of a given number n
func primeFactors(n int) (pfs []int) {
	// Get the number of 2s that divide n
	for n%2 == 0 {
		pfs = append(pfs, 2)
		n = n / 2
	}

	// n must be odd at this point. so we can skip one element
	// (note i = i + 2)
	for i := 3; i*i <= n; i += 2 {
		// while i divides n, append i and divide n
		for n%i == 0 {
			pfs = append(pfs, i)
			n = n / i
		}
	}

	// This condition is to handle the case when n is a prime number
	// greater than 2
	if n > 2 {
		pfs = append(pfs, n)
	}

	return
}

// greatest common divisor (GCD) via Euclidean algorithm
func GCD(a, b int) int {
	for b != 0 {
		t := b
		b = a % b
		a = t
	}
	return a
}

// find Least Common Multiple (LCM) via GCD
func LCM(a, b int, integers ...int) int {
	result := a * b / GCD(a, b)

	for i := 0; i < len(integers); i++ {
		result = LCM(result, integers[i])
	}

	return result
}