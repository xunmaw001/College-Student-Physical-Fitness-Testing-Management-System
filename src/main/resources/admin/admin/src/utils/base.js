const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot415ef/",
            name: "springboot415ef",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot415ef/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学生体质测试管理系统"
        } 
    }
}
export default base
