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
