use assignments::app;

fn main() {
    let contained = app::count_full_contained_from_file("./final-input.txt");
    let overlaps = app::count_overlaps_from_file("./final-input.txt");

    println!("Contained {0} | Overlaps: {1}", contained, overlaps);
}
