// https://iss.moex.com/iss/securities.xml - выдает список всех торгуемых на бирже бумаг (если запрос делать в таком виде, то выдаются не все, нужна фильтрация)
// https://iss.moex.com/iss/securities.xml?group_by=type&group_by_filter=corporate_bond - тоже самое, но здесь добавляются параметры, и не совсем понятны значения этих параметров, теперь понятнее, они в свойствах ЦБ, но как понять сколько их всего не понятно
// https://iss.moex.com/iss/securities.xml?q=FIXSBER - как понимаю, ищет по всем параметрам
// Поддерживается 4 формата - html, json, csv, xml
// https://iss.moex.com/iss/securities.xml?securities.columns=secid,%20name убрать лишнее из запроса

// https://www.postman.com/azzrael/workspace/azzrael-code-yt/request/18434521-2378a9c7-f719-4814-afc1-69e72c3ed398 коллекция всех запросов с видео
// https://iss.moex.com/iss/securities.xml?securities.columns=secid,%20name&iss.meta=off - убрать мета данные
// limit start - пагинация
// https://iss.moex.com/iss/securitytypes.xml - какие типы бывают (надо поискать аналогичные)