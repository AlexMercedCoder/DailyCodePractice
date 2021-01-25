# https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/python

class Ship:
    def __init__(self, draft, crew):
        self.draft = draft
        self.crew = crew
    def is_worth_it(cheese):
        weight = cheese.draft - (cheese.crew * 1.5)
        if (weight >= 20):
            return True
        else:
            return False