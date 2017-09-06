/**
 * Created by Administrator on 2017/8/21.
 */
//沙箱保护
(function (window) {
  function Map(option) {
        this.color = option.color || "red",
        this.row = option.row || 20,      //行数
        this.col = option.col || 30,      //列数
        this.size = option.size || 25,     //行列的宽高都相同
        this.map=null
  }

  //渲染在页面上
  Map.prototype.render = function () {
        var div = document.createElement("div");
        //记录下map,后面加蛇加实物
        this.map=div;
    //定位设置为相对定位,后面的food,蛇都是通过绝对定位定在上面
        div.style.position="relative";
        div.style.backgroundColor=this.color;
        div.style.width=this.size*this.col+"px";
        div.style.height=this.size*this.row+"px";
        window.document.body.appendChild(div)
  };

         window.Map = Map

})(window);