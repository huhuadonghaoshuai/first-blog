/**
 * Created by Administrator on 2017/8/21.
 */
(function (window) {
  function Food(option) {
    this.map = option.map;  //地图对象
    this.size = option.size || 25; //食物的大小
    this.color = option.color || "yellow";
    this.x = 0;  //食物的位置
    this.y = 0;
    this.setPos();
  }

  Food.prototype.render = function () {
    var food = document.createElement("div");
    food.style.position = "absolute";
    food.style.width = this.size + "px";
    food.style.height = this.size + "px";
    food.style.background = this.color;
    food.style.left = this.size * this.x + "px";
    food.style.top = this.y * this.size + "px";
    this.map.map.appendChild(food);  //地图对象中的div标签
  }
  Food.prototype.setPos = function () {
    this.x = parseInt(Math.random() * this.map.col);
    this.y = parseInt(Math.random() * this.map.row);
  }

  window.Food = Food;

})(window);