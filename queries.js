// https://iss.moex.com/iss/securities.xml - выдает список всех торгуемых на бирже бумаг (если запрос делать в таком виде, то выдаются не все, нужна фильтрация)
// https://iss.moex.com/iss/securities.xml?group_by=type&group_by_filter=corporate_bond - тоже самое, но здесь добавляются параметры, и не совсем понятны значения этих параметров, теперь понятнее, они в свойствах ЦБ, но как понять сколько их всего не понятно
// https://iss.moex.com/iss/securities.xml?q=FIXSBER - как понимаю, ищет по всем параметрам
// Поддерживается 4 формата - html, json, csv, xml
// https://iss.moex.com/iss/securities.xml?securities.columns=secid,%20name убрать лишнее из запроса

// https://www.postman.com/azzrael/workspace/azzrael-code-yt/request/18434521-2378a9c7-f719-4814-afc1-69e72c3ed398 коллекция всех запросов с видео
// https://iss.moex.com/iss/securities.xml?securities.columns=secid,%20name&iss.meta=off - убрать мета данные
// limit start - пагинация
// https://iss.moex.com/iss/securitytypes.xml - какие типы бывают (надо поискать аналогичные)

// https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities/SBER?iss.json=extended&from=2000-01-01&start=2620 - цены за все даты, можно строить графики

<row id="5443" 
secid="SBER" 
shortname="Сбербанк" 
regnumber="10301481B" 
name="Сбербанк России ПАО ао" 
isin="RU0009029540" is_traded="1" emitent_id="1199" 
emitent_title="Публичное акционерное общество "Сбербанк России"" 
emitent_inn="7707083893" emitent_okpo="00032537" gosreg="10301481B" 
type="common_share" group="stock_shares" 
primary_boardid="TQBR" 
marketprice_boardid="TQBR"/>


// "IntegrationUrls": {
//     "Moex": {
//       "StockBoard": "https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities.json?iss.meta=off&iss.only=securities,marketdata",
//       "FondBoard": "https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQTF/securities.json?iss.meta=off&iss.only=securities,marketdata",
//       "BondBoard": "https://iss.moex.com/iss/engines/stock/markets/bonds/boards/TQOB/securities.json?iss.meta=off&iss.only=securities,marketdata",
//       "Dividends": "http://iss.moex.com/iss/securities/{ticket}/dividends.json?iss.meta=off",
//       "Coupons": "https://iss.moex.com/iss/statistics/engines/stock/markets/bonds/bondization/{ticket}.json?from=%7BdateString%7D&iss.only=coupons,amortizations&iss.meta=off",
//       "Candles": "http://iss.moex.com/iss/engines/stock/markets/shares/securities/{ticket}/candles.json?from={date}&interval={interval}&iss.meta=off"



// что надо от API ?
// Получать данные по всем облигациям (корп, гос) и акциям
// цены/торги\
// далее на основе этого делать анализ