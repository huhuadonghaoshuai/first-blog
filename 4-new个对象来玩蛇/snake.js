/**
 * Created by Administrator on 2017/8/21.
 */
(function (window) {
  function Snake(option) {
    this.map = option.map;
    this.speed = option.speed || 1;
    this.direction = "left";
    this.size = option.size || 25;
    this.body = [{x: 10, y: 4}, {x: 11, y: 4}, {x: 12, y: 4}, {x: 13, y: 4}]
  }

  Snake.prototype = {
    constructor: Snake,
    //渲染
    render: function () {
      this.move();
      for (var i = 0; i < this.body.length; i++) {
        var s = document.createElement("div");
        //蛇头设置颜色,层级
        s.style.background = "yellow";
        if (i == 0) {
          s.style.background = "red";
          s.style.zIndex=1;
        }
        s.style.position = 'absolute';
        s.style.width = this.size + "px";
        s.style.height = this.size + 'px';
        s.style.left = this.body[i].x * this.size + "px";
        s.style.top = this.body[i].y * this.size + "px";
        s.style.borderRadius = "50%";
        this.map.map.appendChild(s);
      }
    },
    move: function () {
      for (var i = this.body.length - 1; i > 0; i--) {
        var obj = this.body;
        //前面赋给后面一个
        obj[i].x = obj[i - 1].x;
        obj[i].y = obj[i - 1].y;
      }
      //找到蛇头,再让蛇头移动
      var head = obj[0];
      switch (this.direction) {
        case "left":
          head.x -= 1;
          break;
        case "right":
          head.x += 1;
          break;
        case "up":
          head.y -= 1;
          break;
        case "down":
          head.y += 1;
          break;
      }
    },
    eat: function () {
      //获取蛇最后一节
      var last = this.body[this.body.length - 1];
      var s = {
        x: last.x,
        y: last.y
      }
      this.body.push(s)
    }
  }

  window.Snake = Snake;
})(window);