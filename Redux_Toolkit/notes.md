# REDUX TOOLİK

Redux bir kütüphanedir. Uygulamaları daha okunabilir , az kod içeren ve daha performanslı hale getirmeyi amaçlar. 

Uygulamanın yönetilebilirliğini arttırır 

## Özellikleri 
- CreateSlice Fonksiyonu : Redux Toolkit Query , createSlice fonk. kullanarak bir slice oluşturur . Bu slice , state ve reducersleri içerir. API çağrılarını ve veri yönetimine olanak tanır. 

- createAsyncThunk ile API Çağrıları : Asenkron işlemleri tanımlamamızı sağlar. 

## Slice Yapısı 
- name : Slice'nin adı 
- initialState : Başlangıç durumu 
- reducers : Yapılacak işlemler 

## useSelector 

Redux deposundaki (store) veriyi bir fonksiyon yardımı ile okur ve componentin bu veriyi kullanmasını sağlar.

useSelector , slicenin içindeki initialState'ye erişmek için kullanılır.

## useDispatch 

