//https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

function longestRepetition(s) {
  const split = s.split("");
  const result = ["", 0]
  const counter = ["", 0]
  split.forEach((item, index) => {
    if (index === 0) {
      counter[0] = item
      counter[1] = 1
      result[0] = item
      result[1] = 1
    } else {
      if (item === split[index - 1]) {
        counter[1] += 1
        if (counter[1] > result[1]){
            result[0] = counter[0]
            result[1] = counter[1]
        }
      } else {
        if (counter[1] > result[1]){
            result[0] = counter[0]
            result[1] = counter[1]
        }
        counter[0] = item
        counter[1] = 1
      }
    }
  });

  return result
}

console.log(longestRepetition("aaaabb"));
console.log(longestRepetition("bbbaaabaaaa"));
console.log(longestRepetition("cbdeuuu900"));
console.log(longestRepetition("kc4x37p0umpy1mi1rub98pkva1arw2kg9unmk2a1ke077lw8uwm80x6nwjlzd8vnfurr0k4hp95sugncnondeaxun81topmhf7z3dpys5i5wxkrrkbcqpbcch0x8b145pr0kstskw4pzspx3i3pu4x8wsz9r1ckvv2ornqfb51nw7il0obszx6a8koi5a6c69ayocljntpdw0inyyzo1w5chttmppjkf9adkwlnicv3qesac4254kfdizpqbz6sof6gq1ce9anvrj3325s7n9jg6xat0sfxurryuulxygwld5t8gibirf3xfyr55nrtgyz8rr3tstl3z4aoao6zz2l4qhal7q5kyaqwguqkknxseiyg93gga8i036t713j9818ieqk5q5qd5w32fh6td4ihe1ight6brm0joedwulamtrdk7pnb71s93t36pkcp8u63zg0tpahcw85djd2znfpcz0ah2pze8zj8m8dim31j1jrae1v1o"))
