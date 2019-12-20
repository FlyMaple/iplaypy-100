// Python練習題問題如下：
// 要求：隨便寫一段代碼，測試time.sleep（）方法效果學習。

dict = {
    'name': 'skye',
    'age': 18,
    'skillA': 'AAA',
    'skillB': 'BBB',
    'skillC': 'CCC',
}

Object.entries(dict).forEach(([key, val], idx) => {
    ((key, val) => {
        setTimeout(() => {
            console.log(key, val)
        }, idx * 1000)
    })(key, val)
})