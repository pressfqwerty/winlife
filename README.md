# WINLIFE

> NODE JS модуль, который позволит взаимодействовать с чат-ботом [WinLife](https://vk.com/winlife_bot)

## 📦 Установка

-   **используя `npm`**
    ```shell
    npm install winlife
    ```

# 🛠️ Использование

```js
const { WINLIFE } = require("winlife");

const winlife = new WINLIFE({
    apiKey: "yourApiKey",
});
```

| Параметр  | Тип    | Описание                                    | Обязательный |
| --------- | ------ | ------------------------------------------- | ------------ |
| apiKey    | string | Ваш API ключ                                | +            |

### 💰 Получение баланса

---

```js
winlife.getBalance().then((response) => {
    console.log(response) // "100.00"
});
```

Без параметров

### ✨ Транзакция

---

```js
winlife.sendTransfer({
    toId: 123456789,
    amount: 10
}).then((response) => {
    console.log(response) // Transfer successful
});
```

| Параметр       | Тип    | Описание                                                                        | Обязательный |
| -------------- | ------ | ------------------------------------------------------------------------------- | ------------ |
| toId           | number | Айди пользователя                                                               | +            |
| amount         | number | Сумма транзакции                                                                | +            |



### 👉 Получить список транзакций

---

```js
winlife.getTransactions({
    type: "to"
}).then((response) => {
    console.log(response)
    /*
    [{
        "id": "c3f4e28a-8f57-4d6f-8dbe-fb6cba35e8fa",
        "from_id": 3,
        "to_id": 1,
        "amount": 50.25,
        "timestamp": 1673412123
    },
    {
        "id": "a8f5f4ea-6d38-471e-91c2-d324ba78e4f4",
        "from_id": 4,
        "to_id": 1,
        "amount": 100.00,
        "timestamp": 1673411112
    }]
    */
})
```

| Параметр | Тип    | Описание                          | Обязательный |
| -------- | ------ | --------------------------------- | ------------ |
| type     | string | Тип транзакции (to - входящие; from - исходящие)    | -            |


## Changelog:

**1.0.0** - Релиз библиотеки. Добавлен `Readme`
