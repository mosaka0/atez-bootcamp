# begin transaction :
işlemi başlatır update gibi bir işlem yaptığında değişimi 
tabalolara hemen yansıtmaz. altta sorgu atılır. Hata bulunduysa commit ve
rollback yapılır.
# commit:
# rollback:
begin transaction ile başlayan işlemde eğer hata varsa yapılan 
işlemi tabloya yansıtmadan geri alır.

# distinct:

# SQL index:
index: tableların arasına pointerlar koyarak search hızını arttırır. 

# view:
tabloların birleşimini gösteren istenilen şekilde oluşturulanilen tablolardan çekillen data
- create view NAME as select distinct

# alter table:
tabloyu düzenleme işlemi, rename column, add(column), delete(column)
