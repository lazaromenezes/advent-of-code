package main

import (
 "testing"
 )

func Test_Can_Calculate_Tie(t *testing.T){
	const expected_outcome = 3

	var plays = []Play{
		Play{"C", "Z"}, 
		Play{"A", "X"}, 
		Play{"B", "Y"},
	}

	assert_playset(t, plays, expected_outcome)
}

func Test_Can_Calculate_Opponent_Victory(t *testing.T){
	const expected_outcome = 0

	var plays = []Play{
		Play{"A", "Z"}, 
		Play{"B", "X"}, 
		Play{"C", "Y"},
	}

	assert_playset(t, plays, expected_outcome)
}

func Test_Can_Calculate_Your_Victory(t *testing.T){
	const expected_outcome = 6

	var plays = []Play{
		Play{"A", "Y"}, 
		Play{"B", "Z"}, 
		Play{"C", "X"},
	}

	assert_playset(t, plays, expected_outcome)
}

func Test_Can_Calculate_Rock_Shape_Points(t *testing.T) {
	const expected_points = 1

	play := Play{"A", "X"}

	assert_outcome(t, expected_points, play.CalculateShapePoints())
}

func Test_Can_Calculate_Paper_Shape_Points(t *testing.T) {
	const expected_points = 2

	play := Play{"A", "Y"}

	assert_outcome(t, expected_points, play.CalculateShapePoints())
}

func Test_Can_Calculate_Paper_Scissors_Points(t *testing.T) {
	const expected_points = 3

	play := Play{"A", "Z"}

	assert_outcome(t, expected_points, play.CalculateShapePoints())
}

func Test_Can_Calculate_Total_Outcome(t *testing.T) {
	const expected_points = 6

	play := Play{"C", "Z"}

	assert_outcome(t, expected_points, play.CalculateTotalOutcome())
}

/** ----- **/

func Test_Can_Calculate_Tournament_Points(t *testing.T) {
	const expected_points = 15

	tournament := Tournament { 
		[]Play{
			Play{"A", "Y"}, 
			Play{"B", "X"}, 
			Play{"C", "Z"},
		},
	}

	assert_outcome(t, expected_points, tournament.CalculatePlayerPoints())
}

/** ----- **/

func assert_outcome(t *testing.T, expected_outcome int, actual_outcome int) {
	if expected_outcome != actual_outcome {
		t.Errorf("Expected %d but got %d", expected_outcome, actual_outcome)
	}
}

func assert_playset(t *testing.T, plays []Play, expected_outcome int) {
	for _, play := range plays {
		outcome := play.CalculatePlayPoints()

		assert_outcome(t, expected_outcome, outcome)
	}
}
