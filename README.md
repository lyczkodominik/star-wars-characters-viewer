# star-wars-characters-viewer
## 1. Napisz aplikację Vue, która będzie wyświetlać postacie z Gwiezdnych Wojen.

### O aplikacji
Komponent Header:
- linkowanie do '/' (Home),
- linkowanie do '/characters' (Characters),
- linkowanie do 'favourites' (Favourites)

Strona Characters:
- pobieranie danych o liście postaci z API,
- prezentacja danych w postaci listy z paginacją,
- linkowanie do 'character/<id>' (Character),
- możliwość togglowania postaci na liste ulubionych,

Strona Character:
- pobieranie danych szczegółowych o postaci z API,
- prezentacja danych w postaci tabeli,
```
{
    name: ...,
    height: ...,
    mass: ...,
    hair_color: ...,
    skin_color: ...,
    eye_color: ...,
    birth_year: ...,
    gender: ...,
    homeworld: ...,
}
```
- element tabeli 'homeworld' jest buttonem z ustawionym @clickiem na pobieranie danych z API i prezentacje ich w modalu,
- modal,

Strona Favourites:
- możliwość usuwanie postaci z listy,
- linkowanie do 'character/<id>' (Character),


### Wymagania
- Musisz użyć SWAPI (Star Wars API) - https://swapi.dev/ (https://swapi.dev/api/people)
- Do zbudowania aplikacji możesz użyć samego Vue, choć mile widziany Nuxt
- Powinieneś użyć Vuexa oraz LocalStorage do implementacji funkcjonalności listy ulubionych
- Strona Characters powinna mieć paginację, należy ją oprzeć na polach „next” i „previous” otrzymanych z API https://swapi.dev/api/people
- Jeśli chodzi o style użyj Sass-a
- Doceniamy estetykę rozwiązania.
- Używanie bibliotek CSS nie jest zabronione, ale doceniamy budowanie własnych rozwiązań
- Po zakończeniu prześlij link do Githuba

## 2. Napisz funkcję, która zsumuje dowolną liczbę przyjętych argumentów.
Zakładamy, że każdy argument na pewno jest liczbą.

## 3. Napisz funkcję, która zwróci obiekt zawierający informację o wybranych opcjach w określonej formie
Tablica configurableOptions zawiera wszystkie dostępne opcje produktu, a configurableSelections zawiera wybrane opcje.

Powiązania pól pomiędzy tablicami configurableOptions i configurableSelections: <br>
configurableOptions.attribute_id => configurableSelections.option_id <br>
configurableOptions.value_index => configurableSelections.option_value

### Forma:
```
{
    color: "Czerwony",
    size: "46"
}
```

Nazwa właściwości obiektu ma być brana z pola attribute_code, a wartość z pola option_title z configurableOptions.
