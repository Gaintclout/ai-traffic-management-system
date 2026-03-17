class SignalStateMachine:

    def __init__(self):
        self.state = "RED"

    def next_state(self, density, emergency=False):

        if emergency:
            return "GREEN"

        if self.state == "RED":
            self.state = "GREEN"

        elif self.state == "GREEN":
            self.state = "YELLOW"

        elif self.state == "YELLOW":
            self.state = "RED"

        return self.state