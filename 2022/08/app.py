import itertools
import functools

def is_visible(arrangement, position):
    if is_edge(arrangement, position):
        return True

    row = arrangement[position["y"]]
    col = [a[position["x"]] for a in arrangement]
    item = row[position["x"]]

    left = [x < item for x in row[0:position["x"]]]
    right = [x < item for x in row[position["x"] + 1:]]
    top = [x < item for x in col[0:position["y"]]]
    bottom = [x < item for x in col[position["y"] + 1:]]

    return all(left) or all(right) or all(top) or all(bottom)

def is_edge(arrangement, position):
    if position["x"] == 0 or position["y"] == 0:
        return True
    if position["y"] == len(arrangement) - 1:
        return True

    return position["x"] == len(arrangement[position["y"]]) - 1 

def calculate_points(arrangement, position):
    
    if is_edge(arrangement, position):
        return 0

    row = arrangement[position["y"]]
    col = [a[position["x"]] for a in arrangement]
    item = row[position["x"]]

    top = col[0:position["y"]]
    right = row[position["x"] + 1:]
    bottom = col[position["y"] + 1:]
    left = row[0:position["x"]]

    top = top[::-1]
    left = left[::-1]

    visible = lambda x: x

    top_points = counter(item, top)
    right_points = counter(item, right) 
    bottom_points = counter(item, bottom)
    left_points = counter(item, left)

    return [top_points, right_points, bottom_points, left_points]

def to_int_list(string):
    return [int(s) for s in string]

def counter(item, direction):
    seen = 0

    for i in direction:
        seen += 1

        if i >= item:
            return seen

    return seen

def count_visible_trees(data):
    arrangement = data.strip().split("\n")

    return sum([
        is_visible(arrangement, {"x": x, "y": y}) 
        for y in range(len(arrangement)) 
        for x in range(len(arrangement[y]))
    ])

def find_max_points(data):
    arrangement = data.strip().split("\n")

    points = [p for p in [
        calculate_points(arrangement, {"x": x, "y": y})
        for y in range(len(arrangement)) 
        for x in range(len(arrangement[y]))
    ] if p != 0]

    multiply = lambda x, y: x * y

    return max([functools.reduce(multiply, p) for p in points])

def main():
    with open("./final-input.txt") as f:
        data = f.read()
        print(count_visible_trees(data))
        print(find_max_points(data))

if __name__ == '__main__':
    main()
