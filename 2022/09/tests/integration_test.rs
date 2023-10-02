use ropebridge::app;

#[test]
fn test_count_tail_positions() {
    let count = app::count_tail_positions_from_file("./test-input.txt");

    assert_eq!(count, 13);
}

#[test]
fn test_count_9th_tail_positions_input_2() {
    let count = app::count_nth_tail_positions_from_file("./test-input-2.txt", 9);

    assert_eq!(count, 36);
}

#[test]
fn test_count_9th_tail_positions_input_1() {
    let count = app::count_nth_tail_positions_from_file("./test-input.txt", 9);

    assert_eq!(count, 1);
}
