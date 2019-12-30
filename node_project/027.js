// Python練習題問題如下：
// 問題：要求利用遞歸函數調用的方式，將獲取到所輸入的5個字符，以相反順序分別輸出來。
function output(text) {
    const new_text = text.split('');
    if (new_text.length === 0) {
        return;
    }
    if (new_text.length > 5) {
        new_text.length = 5
    }
    console.log(new_text.pop());
    output(new_text.join(''))
}

output('Level')
console.log('--------');
output('SkyeTina')
