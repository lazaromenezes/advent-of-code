use ropebridge::app;

#[test]
fn test_count_tail_positions() {
    let count = app::count_tail_positions_from_file("./test-input.txt");

    assert_eq!(count, 13);
}

