class App(object):

    def sum_register_value(self, path):
        register = 1
        cycle = 1

        signal_store = {}

        with open(path, 'r') as file:
            program = file.read().strip().split("\n")

            for command in program:

                cycles = action = None

                if command == 'noop':
                   cycles, action = self.noop()

                if command.startswith('addx'):
                    argument = command.split(' ')[1]

                    cycles, action = self.addx(argument)

                for c in range(cycles):
                    self.store_strength(cycle, register, signal_store)
                    cycle += 1

                register = action(register)

        return sum([signal_store[s] for s in signal_store if s <= 220])

    def noop(self):
        return 1, lambda r: r + 0

    def addx(self, param):
        return 2, lambda r: r + int(param)

    def store_strength(self, cycle, register, signal_store):
        if cycle == 20 or (cycle - 20) % 40 == 0:
            signal_store[cycle] = register * cycle
        
if __name__ == '__main__':
    result = App().sum_register_value("final-input.txt")
    print(result)
