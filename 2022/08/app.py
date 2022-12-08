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

def count_visible_trees(data):
    arrangement = data.strip().split("\n")

    return sum([
        is_visible(arrangement, {"x": x, "y": y}) 
        for y in range(len(arrangement)) 
        for x in range(len(arrangement[y]))
    ])

def main():
    with open("./final-input.txt") as f:
        print(count_visible_trees(f.read()))

if __name__ == '__main__':
    main()
