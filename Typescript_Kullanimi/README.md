# TypeScript Notları

## TypeScript Nedir?

TypeScript bir programlama dili değil, JavaScript'in üzerine eklenmiş bir **tip sistemi (type system)** ve geliştirme aracıdır.

JavaScript'te bir değişkene istediğimiz tipte değer atayabiliriz. Bu durum bazı hataların ancak çalışma anında ortaya çıkmasına neden olabilir.

```js
let firstName = "Ayşegül";
```

TypeScript'te ise değişkenin tipini belirtebiliriz:

```ts
let firstName: string = "Ayşegül";
```

Böylece yanlış bir tip atandığında hata daha kod yazarken görülür.

---

## `any`

Bir değerin tipini bilmiyorsak `any` kullanabiliriz.

```ts
let data: any;

data = "Merhaba";
data = 25;
data = true;
```

> `any` = "Tipini bilmiyorum, kontrol de etmiyorum."

⚠️ Mümkün olduğunca az kullanılmalıdır.

---

## `union`

Bir değişkenin birden fazla tipe sahip olabileceğini belirtir.

```ts
let yas: string | number = 25;

yas = "25";
yas = 30;
```

Burada `yas` değişkeni hem `string` hem de `number` olabilir.

---

## `literal types`

Bir değişkenin yalnızca belirli değerleri almasını sağlar.

```ts
let statusResult: "pending" | "approved" | "rejected";
```

Geçerli değerler:

```ts
statusResult = "pending";
statusResult = "approved";
statusResult = "rejected";
```

Geçersiz:

```ts
statusResult = "waiting"; // Hata
```

---

## Array Tipleri

Bir dizinin hangi tipte elemanlar içerdiğini belirtmemiz gerekir.

### Kullanım 1

```ts
let names: string[] = ["Enes", "Can", "Ece"];
```

### Kullanım 2

```ts
let names: Array<string> = ["Enes", "Can", "Ece"];
```

### Birden Fazla Tip İçeren Dizi

```ts
let mixedArray: (string | number | boolean)[] = [
  "Enes",
  "Ali",
  1,
  2,
  true,
];
```

---

## `type` ve `interface`

Kendi tiplerimizi oluşturmamızı sağlar.

### Type

```ts
type User = {
  name: string;
  age: number;
};
```

### Kullanımı

```ts
const object1: User = {
  name: "Enes",
  age: 25,
};
```

### Interface

```ts
interface User {
  name: string;
  age: number;
}
```

> Temel mantıkları aynıdır. En belirgin farklardan biri `type` tanımında `=` kullanılmasıdır.

---

## Optional Type (`?`)

Bir alanın zorunlu olmamasını sağlar.

```ts
type User = {
  name: string;
  age?: number;
};
```

Kullanımı:

```ts
const object1: User = {
  name: "Enes",
};
```

Burada `age` yazmak zorunda değiliz.

---

## Fonksiyonlar

TypeScript'te fonksiyon parametrelerine tip vermek önemlidir.

```ts
function topla(a: number, b: number) {
  console.log(a + b);
}

topla(5, 6);
```

### Return Type

Fonksiyonun döndürdüğü değeri de belirtebiliriz.

```ts
function topla(a: number, b: number): number {
  return a + b;
}
```

---

# Kısa Özet

- `string`, `number`, `boolean` → Temel tipler
- `any` → Tip kontrolünü kapatır
- `|` → Union type
- `"değer"` → Literal type
- `string[]` → Dizi tipi
- `type` / `interface` → Kendi tipimizi oluşturur
- `?` → Optional alan
- Fonksiyon parametrelerine ve dönüş değerlerine tip verilir