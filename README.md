# jQuery UI Autocomplete Categorized

Enables users to quickly find and select from a categoized pre-populated list of values as they type, leveraging searching and filtering.

## Usage
```js
$('#input-product').autocompleteCategorized({
    source: '//example.com/product',
    item: {
        label: 'product_name',
        value: 'product_id',
        category: 'product_category'
    }
})
```
