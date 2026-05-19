## React Router DOM

# Kurulum
npm install react-router-dom

URL adresimiz değiştikçe içerde çalıştırmak istediğimiz componenti render etmemizi sağlıyor.

React Router Dom çalışması için <App> companentini <BrowserRouter> componenti ile sarmanız lazım . 

# Temel Componentler
- `<BrowserRouter>` → Uygulamayı sarar, URL takibini sağlar
- `<Routes>` → Route'ları gruplar
- `<Route path="/about" element={<About />} />` → Hangi path'te hangi component render edilsin
- `<Link to="/about">` → Sayfayı yenilemeden yönlendirme (a tag'inin yerini alır)
