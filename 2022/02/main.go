package main

import (
	"os"
	"fmt"
	"bufio"
	"strings"
)

func main() {
	file, _ := os.Open("./final-input.txt")

	fileScanner := bufio.NewScanner(file)

	fileScanner.Split(bufio.ScanLines)

	var plays = []Play{}

	tournament := Tournament{plays}

	for fileScanner.Scan() {
		var shapes_played = strings.Split(fileScanner.Text(), " ")
		var play = Play{Opponent: shapes_played[0], Tip: shapes_played[1]}
		play.Adjust()
		tournament.Plays = append(tournament.Plays, play)
	}
	
	fmt.Println(tournament.CalculatePlayerPoints())

	file.Close()
}

type Play struct{
	Opponent string
	Yours string
	Tip string
}

type Tournament struct {
	Plays []Play
}

type shapeValue map[string]int

var shape_values = shapeValue{
	"A" : 1,
	"B" : 2,
	"C" : 3,
}


func (play Play) CalculatePlayPoints() int {
	var play_result = shape_values[play.Yours] - shape_values[play.Opponent]

	if play_result == 0 {
		return 3
	}else if play_result == 1 || play_result == -2 {
		return 6
	}

	return 0
}

func (play Play) CalculateShapePoints() int {
	return shape_values[play.Yours] 
}

func (play Play) CalculateTotalOutcome() int {
	return play.CalculatePlayPoints() + play.CalculateShapePoints() 
}

func (play *Play) Adjust() {
	if play.Tip == "X" {
		switch play.Opponent {
		case "A": 
			play.Yours = "C"
		case "B":
			play.Yours = "A"
		case "C":
			play.Yours = "B"
		}
	}else if play.Tip == "Z" {
		switch play.Opponent {
		case "A": 
			play.Yours = "B"
		case "B":
			play.Yours = "C"
		case "C":
			play.Yours = "A"
		}
	}else {
		play.Yours = play.Opponent
	}
}

func (tournament Tournament) CalculatePlayerPoints() int {
	var total_points = 0
	
	for _, play := range tournament.Plays {
		total_points += play.CalculateTotalOutcome()
	}
	return total_points
}
