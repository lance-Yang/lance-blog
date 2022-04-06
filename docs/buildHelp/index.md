
<!-- - 官方文档：https://vitepress.vuejs.org/ -->
## 1.背景
- 主要还是想搞一个属于自己的个人博客，可以随时记录一下自己的学习情况和笔记，或者是工作中遇到的一些问题，自己是怎样去解决的，下次再遇到这种情况再翻自己的笔记就行了，好记性不如烂笔头嘛，至于这里为什么用vitePress来搭建属于自己的一个博客，主要还是好用吧，配置简单上手也很快，而且写文档直接用md文件写就行了，之前也是参考了WordPress、Typecho等快速建博客的，这些配置起来也是挺繁琐还要转php环境的，所以直接就pass掉了，后来看到了VitePress 才发现这个真的好用，下面这里我会基于VitePress来详细讲讲我是怎么去搭建的！

## 2.搭建

### 参考文档
- 官方文档：https://vitepress.vuejs.org
- github：https://github.com/vuejs/vitepress

### 2.1 创建项目

1.初始化目录和index.md
```js
mkdir vite-blog
yarn init
yarn add --dev vitepress
mkdir && echo '# Hello VitePress' > docs/index.md
```
2.启动项目
```js
yarn dev
```
![Image text](/sampleImg/home.png);

### 2.2 项目配置
- 在docs文件下新建`.vitepress` 文件夹，在里面新建一个`config.js`文件,在里面配置我们的博客名称、侧边栏、导航栏和搜索框，这里我直接将我代码粘贴出来，大家可以参考，也可以自己参照官方文档配置
```js
import { getDemoSidebar, getBuildHelpSideBar } from './sidebar';
module.exports = {
	base: '/lance-blog/',
	title: '青衫不改博客',
	description: 'Just playing around.',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: '/favicon.ico'
			}
		]
	],
	themeConfig: {
		smoothScroll: true,
		// 展示搜索框
		algolia: {
			apiKey: '',
			indexName: '',
			searchParameters: {
				faeFilters: [ 'tags:guide,api' ]
			}
		},
		nav: [
			{
				text: '首页',
				link: '/'
			},
			{
				text: '搭建参考',
				link: '/buildHelp/'
			},
			{
				text: '掘金',
				link: 'https://juejin.cn/user/545830917911111'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/lance-Yang'
			}
		],
		// 侧边栏内容比较多的话可以单独抽出来
		sidebar: {
			// '/': getDemoSidebar(),
			'/buildHelp': getBuildHelpSideBar()
		}
	}
};
```
```js
export function getDemoSidebar() {
	return [
		{
			text: 'HTML 和 CSS',
			children: [
				{
					text: '新特性',
					link: '/html'
				}
			]
		},
		{
			text: 'Java Script',
			children: [
				{
					text: '安装'
				}
			]
		},
		{
			text: 'ReactJs',
			link: '/reactjs'
		},
		{
			text: '基础组件',
			children: [
				{
					text: 'Button 按钮',
					link: '/components/button/'
				},
				{
					text: 'Icon 图标',
					link: '/components/icon/'
				}
			]
		}
	];
}
export function getBuildHelpSideBar() {
	return [
		{
			text: '博客搭建',
			link: '/buildHelp/'
		}
	];
}
```
### 2.3 主题配置
- 在`.vitepress`目录下新建`theme`文件夹，在里面新建一个`custom.css`和`index.js`文件
- `custom.css`
```css
:root {
	/* 主色调 */
	--c-brand: #498fb6;
	--c-brand-light: #498fb6;
	/* 底部栏色调 */
	/* --color-border: #4dd0e1; */
	/* 引用字体色 */
	/* --color-block: #4dd0e1; */
	/* 加粗色调 */
	/* --color-strong: #26c6da; */
	/* 代码样式 */
	/* --color-code: #26c6da; */
	/* 引用边框色 */
	/* --color-border-left: #26c6da; */
	/* 代码背景色 */
	/* --color-code-bg: rgba(77, 208, 225, .08); */
	/* 引用背景色 */
	/* --color-block-bg: rgba(77, 208, 225, .15); */
}
.container[data-v-7f5fbed2] {
	max-width: 96rem;
}
#main-title {
	/* color: #646cff; */
	color: #498fb6;
}
.home-features .title {
	color: #498fb6;
}
```
- `index.js`
```js
import DefaultTheme from 'vitepress/theme';
/*
	这里我们也可以安装vitepress-theme-demoblock 插件，安装好直接在index.js文件中导入就行，然后再导入我们自己的自定义样式
*/
// import 'vitepress-theme-demoblock/theme/styles/index.css'
import './custom.css';

export default DefaultTheme;
```
### 2.4 修改自定义样式
- 我们直接在浏览器控制台找到你要修改的那个dom节点，找到它的class样式名称，然后在`custom.css`里面去修改就行了
- 剩下的就是自己要写什么文档就直接在docs文件夹下面新建文件夹存放你的md文件就行了，然后在md文件写自己的文档

![Image text](/sampleImg/dir.png)

### 2.5 部署到github Page 静态服务器
- 在github上新建一个仓库(这里不多简述)，然后点击这里上传你打包后的文件(通常是你项目打包的文件dist文件夹),

![Image text](/sampleImg/upload1.png)
将你的打包后的文件(不包括dist目录，是dist里面的文件)拖拽到上面框这里，然后点击commit changes上传

![Image text](/sampleImg/upload2.png)

上传完成返回你的仓库，这里就是上传成功了
![Image text](/sampleImg/upload3.png)

- 接下来就是配置我们的访问路径地址