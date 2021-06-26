# aL = int(input())
# s= input()
# a = list(map(int, s.split()))

aL = 6
a = [1,2,1,2]

maxL = 0

pl = []
import itertools

for i in range(,len(a)):
    tl = list(itertools.combinations(a,i))
    if len(tl) >= 2:
       pl = tl

print(pl)


# def isValid(ma:list):
#   p('4')
#   mid = int(len(ma)/2)
#   fH = ma[:mid]
#   sH = ma[mid:]

#   fhas = 2 if 2 in fH else 1
#   if fhas not in sH:
#       return True
#   else :
#       return False




# def checkS(mx,ma):
#   mal = len(ma)
#   cmax = 0
#   p("1")
#   if mal == mx and mal%2==0:
#       p("2")
#       if isValid(ma):
#           p("3")
#           return(len(ma))
#   for n,x in range(mal-1,1,-1):


#   # for x in range(mal,1,-1):


# def p(s):
#   print(s)

# print(checkS(aL,a))