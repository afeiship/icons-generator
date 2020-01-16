# icons-generator
> Icons generator.

### chrome-extension
| name     | alias | default          | default                |
| -------- | ----- | ---------------- | ---------------------- |
| filename | -f    | -                | The target filename.   |
| output   | -o    | ./dist           | The target output dir. |
| prefix   | -p    | icon-            | The icon prefix.       |
| sizes    | -s    | 16,32,64,128,256 | The icon sizes.        |

### favicon
| name     | alias | default | default                |
| -------- | ----- | ------- | ---------------------- |
| filename | -f    | -       | The target filename.   |
| output   | -o    | ./dist  | The target output dir. |
| sizes    | -s    | 16,32   | The icon sizes.        |


```shell
# debug
git clone git@github.com:afeiship/icons-generator.git
npm link

# production
npm install -g `your-package`

icons-generator chrome-extension -f=__tests__/afei.jpg
icons-generator favicon -f=__tests__/afei.jpg
```

## resources
- https://github.com/eridem/cli-tutorial
- https://github.com/lovell/sharp
- https://github.com/lovell/sharp/issues/1118
- https://github.com/kevva/to-ico#readme
