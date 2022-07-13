# 项目搭建规范

## 一、代码规范

### 1.1 集成 editorconfig 配置

`EditorConfig` 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。

`.editorconfig` 如下：

```yaml
# http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
indent_style = space # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
end_of_line = lf # 控制换行类型(lf | cr | crlf)
trim_trailing_whitespace = true # 去除行首的任意空白字符
insert_final_newline = true # 始终在文件末尾插入一个新行

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off
trim_trailing_whitespace = false
```

VSCode 需要安装插件：[EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)。

### 1.2. 使用 prettier 工具

Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

1. 安装 prettier。

```shell
yarn add prettier -D
```

2. 配置 .prettierrc 文件：

- useTabs：使用 tab 缩进还是空格缩进，选择 false；
- tabWidth：tab 是空格的情况下，是几个空格，选择 2 个；
- printWidth：当行字符的长度，推荐 80，也有人喜欢 100 或者 120；
- singleQuote：使用单引号还是双引号，选择 true，使用单引号；
- trailingComma：在多行输入的尾逗号是否添加，设置为 `none`；
- semi：语句末尾是否要加分号，默认值 true，选择 false 表示不加；

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

3. 创建 .prettierignore 忽略文件。

```
/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

4. VSCode 需要安装插件： [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)。

5. 在 package.json 中配置一个命令，全全局进行格式修正：

   ```json
   {
     "prettier": "prettier --write ."
   }
   ```

### 1.3. 使用 ESLint 检测

1. 在前面创建项目的时候，我们就选择了 ESLint，所以 Vue 会默认帮助我们配置需要的 ESLint 环境。

2. VSCode 需要安装插件： [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)。

3. 解决 eslint 和 prettier 冲突的问题：

安装插件：（vue 在创建项目时，如果选择 prettier，那么这两个插件会自动安装）。

```shell
yarn add eslint-plugin-prettier eslint-config-prettier -D
```

`.eslintrc.js` 文件添加 prettier 插件配置：

```js
{
  // ...
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
}

```

### 1.4. git Husky 和 eslint

`vue-cli` 脚手架执行过程中，如已选择提交代码时，执行 eslint 校验，可忽略以下内容。

虽然我们已经要求项目使用 eslint 了，但是不能保证组员提交代码之前都将eslint中的问题解决掉了：

* 也就是我们希望保证代码仓库中的代码都是符合eslint规范的；

* 那么我们需要在组员执行 `git commit ` 命令的时候对其进行校验，如果不符合eslint规范，那么自动通过规范进行修复；

那么如何做到这一点呢？可以通过Husky工具：

* husky是一个git hook工具，可以帮助我们触发git提交的各个阶段：pre-commit、commit-msg、pre-push。

> Todo

### 1.5. git commit规范

#### 1.5.1. 代码提交风格

通常我们的git commit会按照统一的风格来提交，这样可以快速定位每次提交的内容，方便之后对版本进行控制。

但是如果每次手动来编写这些是比较麻烦的事情，我们可以使用一个工具：Commitizen

* Commitizen 是一个帮助我们编写规范 commit message 的工具；

1.安装 Commitizen

```shell
yarn add commitizen -D
```

2.安装 cz-conventional-changelog，并且初始化 cz-conventional-changelog：

```shell
yarn commitizen init cz-conventional-changelog --yarn --dev --exact
```

这个命令会帮助我们安装 cz-conventional-changelog，并在 package.json 文件中生成如下配置：

```json
{
  // ...
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```

这个时候我们提交代码需要使用 `yarn cz`：

* 第一步是选择type，本次更新的类型

| Type     | 作用                                                         |
| -------- | ------------------------------------------------------------ |
| feat     | 新增特性 (feature)                                           |
| fix      | 修复 Bug(bug fix)                                            |
| docs     | 修改文档 (documentation)                                     |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc) |
| refactor | 代码重构(refactor)                                           |
| perf     | 改善性能(A code change that improves performance)            |
| test     | 测试(when adding missing tests)                              |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等） |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                     |
| revert   | 代码回退                                                     |

* 第二步选择本次修改的范围（作用域）

* 第三步选择提交的信息

* 第四步提交详细的描述信息

* 第五步是否是一次重大的更改

* 第六步是否影响某个open issue

我们也可以在 scripts 中构建一个命令来执行  cz：

```json
{
  "commit": "cz"
}
```

