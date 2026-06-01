# React Router Notları

## useParams

URL'deki dinamik verileri almak için kullanılır.

### Route

```jsx
<Route path="/user/:id" element={<UserDetail />} />
```

### URL

```txt
/user/5
```

### Kullanım

```jsx
import { useParams } from "react-router-dom";

const { id } = useParams();

console.log(id); // 5
```

---

## useNavigate

Kod ile sayfalar arasında geçiş yapmak için kullanılır.

### Kullanım

```jsx
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

navigate("/home");
```

---

## Birlikte Kullanımı

### Yönlendirme

```jsx
navigate(`/user/${id}`);
```

### Parametreyi Alma

```jsx
const { id } = useParams();
```

---

## Özet

| Hook | Görevi |
|--------|--------|
| useParams() | URL'den veri alır |
| useNavigate() | Sayfa yönlendirmesi yapar |

**Kısaca:**
- `useParams` → URL'den bilgi AL.
- `useNavigate` → Başka sayfaya GİT.