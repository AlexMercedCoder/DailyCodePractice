# https://www.codewars.com/kata/54fe05c4762e2e3047000add/train/ruby

class Ship
def initialize(draft,crew)
    @draft=draft
    @crew=crew
  end
  def is_worth_it
    weight = @draft - (@crew * 1.5)
    if weight > 20
      return true
    else
      return false
    end
  end
end