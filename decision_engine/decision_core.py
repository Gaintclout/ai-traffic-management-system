from decision_engine.signal_logic.signal_state_machine import SignalStateMachine

machine = SignalStateMachine()

def make_decision(density, emergency):
    return machine.next_state(density, emergency)