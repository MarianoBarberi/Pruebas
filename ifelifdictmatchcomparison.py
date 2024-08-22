import timeit

value2 = 0

def if_elif_example(value):
    if value == 1:
        value2 = "One"
        return value2
    elif value == 2:
        value2 = "Two"
        return value2
    elif value == 3:
        value2 = "Three"
        return value2
    else:
        value2 = "Other"
        return value2

def dict_example(value):
    def mistr():
        if value2 == 1:
            return "One"
        elif value2 == 2:
            raise ValueError("Two")
    def ibm():
        return "Two"
    def ggl():
        return "Three"
    def open():
        return "Other"
    def infosys():
        return "Other"
    def default():
        return "Other"
    switch = {
        'mistral': mistr,
        'ibm': ibm,
        'google': ggl,
        'openAI': open,
        'Infosys': infosys
    }
    return switch.get(value, default)()

print(dict_example('ibm'))



def match_example(value):
    match value:
        case 1:
            return "One"
        case 2:
            return "Two"
        case 3:
            return "Three"
        case _:
            return "Other"

# Timing the functions
print("if/elif:", timeit.timeit(lambda: if_elif_example(3), number=1000000))
print("dict:", timeit.timeit(lambda: dict_example(1), number=1000000))
print("match:", timeit.timeit(lambda: match_example(3), number=1000000))
