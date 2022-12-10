use ropebridge::app;

fn main() {
    let positions = app::count_tail_positions_from_file("./final-input.txt");

    println!("Positions {0}", positions);
}
