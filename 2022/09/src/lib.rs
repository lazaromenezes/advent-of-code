type Point = (i16, i16);

fn distance(original: Point, other: Point) -> f64 {
    let (sx, sy) = original;
    let (ox, oy) = other;
    
    let dx = sx - ox;
    let dy = sy - oy;

    return ((dx.pow(2) + dy.pow(2)) as f64).sqrt();
}

fn are_adjacent(head: Point, tail: Point) -> bool {
    return distance(head, tail) <= 2f64.sqrt();
}

fn calculate_knot_move(head: Point, tail: Point, front_move: Point) -> Point{
    if are_adjacent(head, tail) {
        return (0, 0);
    }

    let (hx, hy) = head;
    let (tx, ty) = tail;
    
    let dx = hx - tx;
    let dy = hy - ty;

    if dx == 0 || dy == 0 {
        return front_move;
    }else {
        let x_move = dx / dx.abs();
        let y_move = dy / dy.abs();

        return (x_move, y_move);
    }
}

fn move_tail(head: Point, tail: Point, m: Point) -> Point {
    if are_adjacent(head, tail) {
        return tail;
    }

    let (hx, hy) = head;
    let (tx, ty) = tail;
    let (mx, my) = m;
    
    let dx = hx - tx;
    let dy = hy - ty;

    if dx == 0 || dy == 0 {
        return (tx + mx, ty + my);
    }else {
        let x_move = dx / dx.abs();
        let y_move = dy / dy.abs();

        return (tx + x_move, ty + y_move);
    }
}

fn parse_move(move_input: &str) -> Vec::<Point>{
    let split: Vec::<&str> = move_input.trim().split(" ").collect();
    let (dir, amount) = (split[0], split[1].parse::<usize>().unwrap()); 

    if dir == "R" {
        return vec![(1, 0); amount];
    } else if dir == "U" {
        return vec![(0, 1); amount];
    } else if dir == "L" {
        return vec![(-1, 0); amount];
    } else {
        return vec![(0, -1); amount];
    }
}

pub mod app {
    use super::*;
    use std::fs;
    use std::collections::HashSet;

    pub fn count_tail_positions_from_file(path: &str) -> usize {
        let mut head = (0, 0);
        let mut tail = (0, 0);

        let mut tail_positions: Vec::<Point> = vec![tail];

        fs::read_to_string(path)
            .unwrap()
            .trim()
            .split('\n')
            .map(|m| parse_move(m))
            .flatten()
            .for_each(|m| {
                head = move_head(head, m);
                tail = move_tail(head, tail, m);
                tail_positions.push(tail);
            });

        return tail_positions.iter().collect::<HashSet<&Point>>().len();
    }

    pub fn count_nth_tail_positions_from_file(path: &str, ntails: usize) -> usize {
        let starting_position = (0,0);
        let mut head = starting_position;
        let mut tails: Vec::<Point> = vec![starting_position;ntails];
 
        let mut nth_tail_positions: Vec::<Point> = vec![starting_position];

        fs::read_to_string(path)
            .unwrap()
            .trim()
            .split('\n')
            .map(|m| parse_move(m))
            .flatten()
            .for_each(|m| {
                head = move_head(head, m);
                let mut knot_move = m;
                for t in 0..ntails {
                    if t == 0 {
                        knot_move = calculate_knot_move(head, tails[t], m);
                    } else {
                        knot_move = calculate_knot_move(tails[t - 1], tails[t], knot_move);
                    };

                    tails[t] = move_knot(tails[t], knot_move);

                    if t == (ntails - 1) {
                        nth_tail_positions.push(tails[t]);
                    };
                }
            });

        let result = nth_tail_positions
            .iter()
            .collect::<HashSet<&Point>>();

        println!("{:?}", result);

        return result.len();
    }

    fn move_head(head: Point, m: Point) -> Point {
        let (mx, my) = m;
        let (hx, hy) = head;

        return (hx + mx, hy + my);
    }

    fn move_knot(knot: Point, m: Point) -> Point {
        let (mx, my) = m;
        let (kx, ky) = knot;

        return (kx + mx, ky + my);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    macro_rules! are_adjacent_tests {
        ($($name:ident: $value:expr,)*) => {
            $(
                #[test]
                fn $name() {
                    let (head, tail) = $value;
                    assert!(are_adjacent(head, tail));
                }
            )*
        }
    }

    are_adjacent_tests! {
        tail_in_same_position: ((0, 0), (0, 0)),
        tail_on_top: ((0, 0), (0, 1)),
        tail_on_top_right: ((0, 0), (1, 1)),
        tail_on_right: ((0, 0), (1, 0)),
        tail_on_bottom_right: ((0, 0), (1, -1)),
        tail_on_bottom: ((0, 0), (0, -1)),
        tail_on_bottom_left: ((0, 0), (-1, -1)),
        tail_on_left: ((0, 0), (-1, 0)),
        tail_on_top_left: ((0, 0), (-1, 1)),
    }

    #[test]
    fn is_not_adjacent_if_more_than_one_step_away() {
        let head = (0, 0);
        let tail = (2, 0);

        assert!(!are_adjacent(head, tail));
    }

    #[test]
    fn is_not_adjacent_if_more_than_one_step_away_non_zero() {
        let head = (4, 2);
        let tail = (3, 0);

        assert!(!are_adjacent(head, tail));
    }

    macro_rules! parse_move_tests {
        ($($name:ident: $value:expr,)*) => {
            $(
                #[test]
                fn $name() {
                    let (move_string, expected) = $value;
                    assert_eq!(expected, parse_move(move_string));
                }
            )*
        }
    }

    parse_move_tests! {
        parse_right_move: ("R 2", vec![(1, 0), (1, 0)]),
        parse_up_move: ("U 2", vec![(0, 1), (0, 1)]),
        parse_left_move: ("L 2", vec![(-1, 0), (-1, 0)]),
        parse_down_move: ("D 2", vec![(0, -1), (0, -1)]),
    }
}
