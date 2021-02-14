```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <span>我是个span1</span>
    <span>我是个span2</span>
    <section>我是个section</section>
    <script>
        const all = Array.from(document.all);
        const res  = all.filter(item=>/^[s]/.test(item.localName))
        console.log(res);
    </script>
</body>
</html>
```