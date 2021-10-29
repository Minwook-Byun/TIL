Python 3.9.2 (tags/v3.9.2:1a79785, Feb 19 2021, 13:44:55) [MSC v.1928 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> def swap(aa,bb):
    print('2:id(aa)', id(aa),'id(bb)', id(bb))
    return bb, aa

a=3
b=5
print('a=',a, 'b=', b)
print('3:id(a)', id(a), 'id(b):', id(b))
print('a=',a,'b=',b)

SyntaxError: invalid syntax
>>> 
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
a= 3 b= 5
3:id(a) 1800909252976 id(b): 1800909253040
a= 3 b= 5
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
{'AI!': 1}
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
Traceback (most recent call last):
  File "C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py", line 24, in <module>
    print(max_counts(text))
  File "C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py", line 18, in max_counts
    for i in text.split(''):
ValueError: empty separator
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
{'AI!': 1}
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
{'AI!': 1, '나는': 2, '인공지능': 1, '로봇': 1, '입니다.': 2, "'AI": 1, "로봇'": 1}
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
None
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
AI 나는 인공지능 로봇 입니다 나는 AI 로봇 입니다
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
{'AI': 2, '나는': 2, '인공지능': 1, '로봇': 2, '입니다': 2}
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
1 : 1 번
1등:  [1]
>>> 
= RESTART: C:\coding\TIL\Programing for language analysis\변민욱마인_1027.py
1 : 4 번
2 : 3 번
3 : 4 번
1등:  [1, 3]
>>> 