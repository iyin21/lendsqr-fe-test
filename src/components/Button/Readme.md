# Button

Variants

Button supports the following variants:primary, 'outline_red', 'outline_blue', 'outline_deep_blue'

#### usage

```js
import Button from 'Button';

<div>
    <Button type="button" variant="primary">
        Primary variant
    </Button>
    <Button type="button" variant="outline_red">
        Outline variant
    </Button>
    <Button type="button" variant="outline_blue">
        Outline variant
    </Button>
    <Button type="button" variant="outline_deep_blue">
        Outline variant
    </Button>
</div>;
```

#### API

| Name     | Type                                                      | Description                |
| -------- | --------------------------------------------------------- | -------------------------- | --- |
| children | string                                                    | Button label               |     |
| variant  | primary \|outline_red\| outline_blue \| outline_deep_blue | Controls button appearance |
