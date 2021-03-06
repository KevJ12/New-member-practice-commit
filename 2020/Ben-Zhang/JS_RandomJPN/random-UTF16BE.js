var katakana = [
    "あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "さ", "し", "す", "せ", "そ",
    "た", "ち", "つ", "て", "と",
    "な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ま", "み", "む", "め", "も",
    "や", "ゆ", "よ",
    "ら", "り", "る", "れ", "ろ",
    "わ", "を", "ん"
];

var hiragana = [
    "ア", "イ", "ウ", "エ", "オ",
    "カ", "キ", "ク", "ケ", "コ",
    "サ", "シ", "ス", "セ", "ソ",
    "タ", "チ", "ツ", "テ", "ト",
    "ナ", "ニ", "ヌ", "ネ", "ノ",
    "ハ", "ヒ", "フ", "ヘ", "ホ",
    "マ", "ミ", "ム", "メ", "モ",
    "ヤ", "ユ", "ヨ",
    "ラ", "リ", "ル", "レ", "ロ",
    "ワ", "ヲ", "ン"
];

var pronunciation = [
    "a", "i", "u", "e", "o",
    "ka", "ki", "ku", "ke", "ko",
    "sa", "shi", "su", "se", "so",
    "ta", "chi", "tsu", "te", "to",
    "na", "ni", "nu", "ne", "no",
    "ha", "hi", "hu", "he", "ho",
    "ma", "mi", "mu", "me", "mo",
    "ya", "yu", "yo",
    "ra", "ri", "ru", "re", "ro",
    "wa", "wo", "n"
];

//定义函数取min和max之间的随机整数值，包含min但不包含max
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
};

// console.log(randomNum(0, 46))


//定义对象以便于调用randomNum函数取出katakana和hiragana数组间的随机项
var print = {
    kata: function(x) {
        return katakana[x]
    },
    hira: function(x) {
        return hiragana[x]
    },
    pronun: function(x) {
        return pronunciation[x]
    }
}

var a = [randomNum(0, 46)];
let b = [randomNum(0, 2)];

if (b == 0) {
    document.getElementById('display').innerHTML = print.kata(a[0]);
} else {
    document.getElementById('display').innerHTML = print.hira(a[0]);
}