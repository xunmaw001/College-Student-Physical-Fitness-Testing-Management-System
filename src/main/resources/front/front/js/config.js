
var projectName = '大学生体质测试管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '体质测试',
	url: './pages/tizhiceshi/list.html'
}, 

{
	name: '公告资讯',
	url: './pages/news/list.html'
},
{
	name: '留言板',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springboot415ef/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-present","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["查看","修改","删除","新增"],"menu":"体质测试","menuJump":"列表","tableName":"tizhiceshi"}],"menu":"体质测试管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","修改","删除"],"menu":"测试报告","menuJump":"列表","tableName":"ceshibaogao"}],"menu":"测试报告管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看","修改","删除","报表"],"menu":"测试成绩","menuJump":"列表","tableName":"ceshichengji"}],"menu":"测试成绩管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","修改","删除"],"menu":"请假信息","menuJump":"列表","tableName":"qingjiaxinxi"}],"menu":"请假信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改","删除"],"menu":"申请信息","menuJump":"列表","tableName":"shenqingxinxi"}],"menu":"申请信息管理"},{"child":[{"appFrontIcon":"cuIcon-message","buttons":["查看","修改","回复","删除"],"menu":"留言板","tableName":"messages"}],"menu":"留言板"},{"child":[{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"公告资讯","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","报告"],"menu":"体质测试列表","menuJump":"列表","tableName":"tizhiceshi"}],"menu":"体质测试模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","删除"],"menu":"测试报告","menuJump":"列表","tableName":"ceshibaogao"}],"menu":"测试报告管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["查看"],"menu":"测试成绩","menuJump":"列表","tableName":"ceshichengji"}],"menu":"测试成绩管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"请假信息","menuJump":"列表","tableName":"qingjiaxinxi"}],"menu":"请假信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["新增","查看","修改","删除"],"menu":"申请信息","menuJump":"列表","tableName":"shenqingxinxi"}],"menu":"申请信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","报告"],"menu":"体质测试列表","menuJump":"列表","tableName":"tizhiceshi"}],"menu":"体质测试模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-wenzi","buttons":["新增","查看","修改","删除"],"menu":"体质测试","menuJump":"列表","tableName":"tizhiceshi"}],"menu":"体质测试管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["查看","成绩"],"menu":"测试报告","menuJump":"列表","tableName":"ceshibaogao"}],"menu":"测试报告管理"},{"child":[{"appFrontIcon":"cuIcon-pic","buttons":["新增","查看","修改","删除"],"menu":"测试成绩","menuJump":"列表","tableName":"ceshichengji"}],"menu":"测试成绩管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["查看","审核"],"menu":"请假信息","menuJump":"列表","tableName":"qingjiaxinxi"}],"menu":"请假信息管理"},{"child":[{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","审核"],"menu":"申请信息","menuJump":"列表","tableName":"shenqingxinxi"}],"menu":"申请信息管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["查看","报告"],"menu":"体质测试列表","menuJump":"列表","tableName":"tizhiceshi"}],"menu":"体质测试模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
