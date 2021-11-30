# star-wars-characters-viewer
## 1. Napisz aplikację Vue, która będzie wyświetlać postacie z Gwiezdnych Wojen.

### O aplikacji

Aplikacja powinna mieć menu z następującymi pozycjami: „Home”, „Characters”, „Favourites”

Link Home kieruje na Homepage <br>
Link Characters kieruje na stronę z listą postaci <br>
Link Favourites kieruje na stronę z ulubionymi postaciami <br><br>
Każda postać na stronie z listą postaci powinna mieć możliwość wyświetlenia oddzielnej, szczegółowej strony (/character/:id). <br>
Na widoku szczegółowym powinny znajdować się szczegóły postaci:<br> 
"name”, „height", "mass", "hair_color", "skin_color", "eye_color”, „birth_year”, „gender”, „homeworld”.<br>
„homeworld” powinien być buttonem, po którego kliknięciu powinieneś pobrać z API informacje i wyświetlić je w modalu.<br><br>
Strona z listą postaci powinna mieć paginację.<br><br>
Na stronie z listą postaci powinna być możliwość dodawania/usuwania postaci do listy ulubionych.<br>
Na stronie Favourites znajduje się lista ulubionych postaci. Każdą z postaci powinno dać się usunąć z listy ulubionych


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
