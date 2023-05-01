const quotes = [
  { quote:"완벽함이 아니라 탁월함을 위해서 애써라.!",
    author:"H. 잭슨 브라운 주니어 / H. Jackson Brown Jr."
  },
  { quote:"어디를 가든지 마음을 다해 가라.",
    author:"공자 / Confucius"
  },
  { quote:"당신이 행한 봉사에 대해서는 말을 아끼라. 허나 당신이 받았던 호의들에 대해서는 이야기하라.",
    author:"세네카 / Seneca"
  },
  { quote:"모든 인간은 개인으로서 존중받아야 하며, 그 누구도 우상으로 숭배해서는 안된다.",
    author:"알버트 아인슈타인 / Albert Einstein"
  },
  { quote:"현재가 과거와 다르길 바란다면 과거를 공부하라.",
    author:"바뤼흐 스피노자 / Baruch Spinoza"
  },
  { quote:"교육이 신사를 만들기 시작하고, 대화는 신사를 완성시킨다.",
    author:"토마스 풀러 / Thomas Fuller"
  },
];

const quote = document.querySelector("#quote div");
const author = document.querySelector("#quote span");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
