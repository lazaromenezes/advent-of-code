use assignments::app;

#[test]
fn test_full_contained() {
    let count = app::count_full_contained_from_file("./test-input.txt");

    assert_eq!(count, 2);
}

#[test]
fn test_partial_overlap() {
    let count = app::count_overlaps_from_file("./test-input.txt");

    assert_eq!(count, 4);
}
