# lib-meida-seesion

A JavaScript Library To Show Cover

## Get started

### Npm

``` bash
$npm install lib-media-session --save
```

### CDN

``` html
<script src="./dist/lib-media-session.min.js"></script>
```

``` js
mediaSession.setCover({
    title: 'music', // 指定名称
    artwork: '....jpg' // 指定封面
})

```

## API

### init(options)

 `options` 可以传入的字段;

 + setTitle 是否设置页面标题 (document.title)
 + play/pause/seekbackward/seekforward 事件

### setCover(args)

args 必须为一个 Object

<table width="100%">
    <tr>
        <th>key</th>
        <th>描述</th>
        <th>类似</th>
    </tr>
    <tr>
        <td>title</td>
        <td>歌曲名称</td>
        <td>String</td>
    </tr>
    <tr>
        <td>artist</td>
        <td>作者</td>
        <td>String</td>
    </tr>
    <tr>
        <td>albums</td>
        <td>专辑</td>
        <td>String</td>
    </tr>
    <tr>
        <td>artwork</td>
        <td>封面</td>
        <td>String/Array/Object</td>
    </tr>
</table>

其中封面可以是一个字符串:

``` bash
http://img1.vued.vanthink.cn/vued0217b02c7c42b10f5e533b75bdef80de.jpeg
```

或者一个对象:

``` bash
{
    src: 'http://img1.vued.vanthink.cn/vued0217b02c7c42b10f5e533b75bdef80de.jpeg',
    type: 'image/jpeg',
    size: '168x168'
}
```

或者如上面代码所示的完整的 size 列表。

``` bash
[
    { src: 'https://dummyimage.com/96x96',   sizes: '96x96',   type: 'image/png' },
    { src: 'https://dummyimage.com/128x128', sizes: '128x128', type: 'image/png' },
    { src: 'https://dummyimage.com/192x192', sizes: '192x192', type: 'image/png' },
    { src: 'https://dummyimage.com/256x256', sizes: '256x256', type: 'image/png' },
    { src: 'https://dummyimage.com/384x384', sizes: '384x384', type: 'image/png' },
    { src: 'https://dummyimage.com/512x512', sizes: '512x512', type: 'image/png' },
]

```


## MIT License





