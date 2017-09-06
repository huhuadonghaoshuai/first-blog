/**
 * Created by Administrator on 2017/8/21.
 */
(function (window) {
  function Food(option) {
    this.map = option.map;  //��ͼ����
    this.size = option.size || 25; //ʳ��Ĵ�С
    this.color = option.color || "yellow";
    this.x = 0;  //ʳ���λ��
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
    this.map.map.appendChild(food);  //��ͼ�����е�div��ǩ
  }
  Food.prototype.setPos = function () {
    this.x = parseInt(Math.random() * this.map.col);
    this.y = parseInt(Math.random() * this.map.row);
  }

  window.Food = Food;

})(window);