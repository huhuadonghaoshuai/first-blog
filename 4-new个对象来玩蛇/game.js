/**
 * Created by Administrator on 2017/8/23.
 */
(function (window) {
  function Game() {
    this.map = new Map({color: "#daa520"});
    this.food = new Food({map: this.map});
    this.snake = new Snake({map: this.map});
    this.timer = null;
  }

  Game.prototype = {
    constructor: Game,
    gameStart: function () {
      //‰÷»æµÿÕº
      this.map.render();
      this.userControl();
      var that = this;
      this.timer = setInterval(function () {
        that.map.map.innerHTML = "";
        that.render(); //‰÷»æ ≥ŒÔ∫Õ…ﬂ
        that.impact();
        that.gameOver()

      }, 100)
    },
    //…ﬂ∫Õ ≥ŒÔ‰÷»æ
    render: function () {
      this.snake.render();
      this.food.render();
    },
    //≈ˆ◊≤ºÏ≤‚
    impact: function () {
      var head = this.snake.body[0];
      if (head.x == this.food.x && head.y == this.food.y) {
        this.snake.eat();
        this.food.setPos()
      }
    },
    gameOver: function () {
        var head = this.snake.body[0];
        if (head.x < 0 || head.y < 0 || head.x > this.map.col - 1 || head.y > this.map.row - 1) {
          clearInterval(this.timer);
          alert("gameover");
        }
      },

    userControl: function () {
      var that = this;
      window.onkeydown = function (e) {
        var code= e.keyCode;
        switch (code) {
          case 37:
            that.snake.direction = "left";
            break;
          case 38:
            that.snake.direction = "up";
            break;
          case 39:
            that.snake.direction = "right";
            break;
          case 40:
            that.snake.direction = "down";
            break;
        }
      };
    }

  }

  window.Game = Game;
})(window)