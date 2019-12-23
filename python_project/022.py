# Python乒乓球比賽順序練習題，是關於兩個乒乓球隊進行比賽，具體python問題是這樣的。

# 簡述：已知有兩支乒乓球隊要進行比賽，每隊各出三人；
# 甲隊為a,b,c三人，乙隊為x,y,z三人；
# 已抽籤決定比賽名單。

# 問題：有人向隊員打聽比賽的名單。a說他不和x比，c說他不和x,z比，請編程序找出三隊賽手的名單。

teamA = ['a', 'b', 'c']
teamB = ['x', 'y', 'z']


def calculate():
    global teamA, teamB

    new_list = []
    for memberA in teamA:
        if len(teamB) == 1:
            print('%s <==> %s' % (memberA, teamB[0]))
            teamB = []
            break
        if memberA == 'a':
            new_list = list(filter(lambda x: x != 'x', teamB))
        if memberA == 'c':
            new_list = list(filter(lambda x: x not in ['x', 'z'], teamB))
        if len(new_list) == 1:
            print('%s <==> %s' % (memberA, new_list[0]))
            teamB = list(filter(lambda x: x != new_list[0], teamB))


while True:
    if len(teamB) == 0:
        break
    calculate()
