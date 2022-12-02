package main

import (
 "testing"
 )

func Test_Can_Calculate_Tie(t *testing.T){
	const expected_outcome = 3

	var plays = []Play{
		Play{Opponent: "C", Yours: "C"}, 
		Play{Opponent: "A", Yours: "A"}, 
		Play{Opponent: "B", Yours: "B"},
	}

	assert_playset(t, plays, expected_outcome)
}

func Test_Can_Calculate_Opponent_Victory(t *testing.T){
	const expected_outcome = 0

	var plays = []Play{
		Play{Opponent: "A", Yours: "C"}, 
		Play{Opponent: "B", Yours: "A"}, 
		Play{Opponent: "C", Yours: "B"},
	}

	assert_playset(t, plays, expected_outcome)
}

func Test_Can_Calculate_Your_Victory(t *testing.T){
	const expected_outcome = 6

	var plays = []Play{
		Play{Opponent: "A", Yours: "B"}, 
		Play{Opponent: "B", Yours: "C"}, 
		Play{Opponent: "C", Yours: "A"},
	}

	assert_playset(t, plays, expected_outcome)
}

func Test_Can_Calculate_Rock_Shape_Points(t *testing.T) {
	const expected_points = 1

	play := Play{Opponent: "A", Yours: "A"}

	assert_outcome(t, expected_points, play.CalculateShapePoints())
}

func Test_Can_Calculate_Paper_Shape_Points(t *testing.T) {
	const expected_points = 2

	play := Play{Opponent: "A", Yours: "B"}

	assert_outcome(t, expected_points, play.CalculateShapePoints())
}

func Test_Can_Calculate_Paper_Scissors_Points(t *testing.T) {
	const expected_points = 3

	play := Play{Opponent: "A", Yours: "C"}

	assert_outcome(t, expected_points, play.CalculateShapePoints())
}

func Test_Can_Calculate_Total_Outcome(t *testing.T) {
	const expected_points = 6

	play := Play{Opponent: "C", Yours: "C"}

	assert_outcome(t, expected_points, play.CalculateTotalOutcome())
}

/** ----- **/

func Test_Can_Calculate_Tournament_Points(t *testing.T) {
	const expected_points = 15

	tournament := Tournament { 
		[]Play{
			Play{Opponent: "A", Yours: "B"}, 
			Play{Opponent: "B", Yours: "A"}, 
			Play{Opponent: "C", Yours: "C"},
		},
	}

	assert_outcome(t, expected_points, tournament.CalculatePlayerPoints())
}

/** ----- **/

func Test_Can_Adjust_A_Rock_Play_For_Loose(t *testing.T) {
	play := Play{Opponent: "A", Tip: "X"} 

	play.Adjust()

	assert_adjustment(t, "C", play.Yours)
}

func Test_Can_Adjust_A_Rock_Play_For_Win(t *testing.T) {
	play := Play{Opponent: "A", Tip: "Z"} 

	play.Adjust()

	assert_adjustment(t, "B", play.Yours)
}

func Test_Can_Adjust_A_Rock_Play_For_Draw(t *testing.T) {
	play := Play{Opponent: "A", Tip: "Y"} 

	play.Adjust()

	assert_adjustment(t, "A", play.Yours)
}

func Test_Can_Adjust_A_Paper_Play_For_Loose(t *testing.T) {
	play := Play{Opponent: "B", Tip: "X"} 

	play.Adjust()

	assert_adjustment(t, "A", play.Yours)
}

func Test_Can_Adjust_A_Paper_Play_For_Win(t *testing.T) {
	play := Play{Opponent: "B", Tip: "Z"} 

	play.Adjust()

	assert_adjustment(t, "C", play.Yours)
}

func Test_Can_Adjust_A_Paper_Play_For_Draw(t *testing.T) {
	play := Play{Opponent: "B", Tip: "Y"} 

	play.Adjust()

	assert_adjustment(t, "B", play.Yours)
}

func Test_Can_Adjust_A_Scissors_Play_For_Loose(t *testing.T) {
	play := Play{Opponent: "C", Tip: "X"} 

	play.Adjust()

	assert_adjustment(t, "B", play.Yours)
}

func Test_Can_Adjust_A_Scissors_Play_For_Win(t *testing.T) {
	play := Play{Opponent: "C", Tip: "Z"} 

	play.Adjust()

	assert_adjustment(t, "A", play.Yours)
}

func Test_Can_Adjust_A_Scissors_Play_For_Draw(t *testing.T) {
	play := Play{Opponent: "C", Tip: "Y"} 

	play.Adjust()

	assert_adjustment(t, "C", play.Yours)
}
/** ----- **/

func assert_outcome(t *testing.T, expected_outcome int, actual_outcome int) {
	if expected_outcome != actual_outcome {
		t.Errorf("Expected %d but got %d", expected_outcome, actual_outcome)
	}
}

func assert_adjustment(t *testing.T, expected_shape string, actual_shape string) {
	if expected_shape != actual_shape {
		t.Errorf("Expected %s but got %s", expected_shape, actual_shape)
	}
}

func assert_playset(t *testing.T, plays []Play, expected_outcome int) {
	for _, play := range plays {
		outcome := play.CalculatePlayPoints()

		assert_outcome(t, expected_outcome, outcome)
	}
}
