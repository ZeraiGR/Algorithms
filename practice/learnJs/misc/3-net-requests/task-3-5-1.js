/*

Почему нам нужен Origin?

Как вы, вероятно, знаете, существует HTTP-заголовок Referer, который обычно содержит адрес страницы, инициировавшей сетевой запрос.

Например, при запросе (fetch) http://google.com с http://javascript.info/some/url заголовки выглядят так:

Accept: ...
Accept-Charset: utf-8
Accept-Encoding: gzip,deflate,sdch
Connection: keep-alive
Host: google.com
Origin: http://javascript.info
Referer: http://javascript.info/some/url

Как вы можете видеть, присутствуют и Referer, и Origin.

Вопросы:
1. Почему нужен Origin, если Referer содержит даже больше информации?
2. Возможно ли отсутствие Referer или Origin, или это неправильно?

Ответ:

Нам нужен Origin, потому что иногда Referer отсутствует. Например, когда мы запрашиваем через fetch HTTP-страницу с HTTPS (менее безопасный доступ с более безопасного), то Referer нет.

Content Security Policy (политика безопасности содержимого) может запретить отправление Referer.

У fetch есть опции, которые предотвращают отправку Referer и даже позволяют изменять его (в пределах того же сайта).

Согласно спецификации, Referer является необязательным HTTP-заголовком.

Именно потому что Referer ненадёжен, был изобретён Origin. Браузер гарантирует наличие правильного Origin при запросах на другой источник.

*/