import re

class Parser():

    def split(self, text):
        split = text.rstrip().split("\n\n")

        return split[0], split[1]

    def parse_move(self, text):
        move = text.strip().split(" ")

        return {
            "amount": int(move[1]),
            "source": move[3],
            "to": move[5]
        }

    def parse_moves(self, moves):
        return [self.parse_move(m) for m in moves.strip().split("\n")]

    def parse_crate(self, crates):
        indexes_match = re.compile("\d{1}")

        indexes = indexes_match.findall(crates)

        crates_list = crates.rstrip().split("\n")[:-1]

        crate_match = re.compile("\w{1}|| {4}")
        crates_disposition = [
            [d for d in crate_match.findall(c) if d != ''] for c in crates_list
        ]
        
        result = {}

        for i, c in enumerate(zip(*crates_disposition)):
            value = [x for x in list(c) if x.strip() != '']
            value.reverse()
            result[indexes[i]] = value
            
        return result

class Crane():

    def move(self, stacks, move):
        for i in range(move["amount"]):
            stacks[move["to"]].append(stacks[move["source"]].pop())

def find_result_for(path):
    
    parser = Parser()
    crane = Crane()

    with open(path, 'r') as text:
        split = parser.split(text.read())
        
        crates = parser.parse_crate(split[0])
        moves = parser.parse_moves(split[1])

        for move in moves:
            crane.move(crates, move)

        result = ''.join([crates[c].pop() for c in crates])

        return result

if __name__ == '__main__':

    print(find_result_for('./final-input.txt'))
