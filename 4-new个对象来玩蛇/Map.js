/**
 * Created by Administrator on 2017/8/21.
 */
//ɳ�䱣��
(function (window) {
  function Map(option) {
        this.color = option.color || "red",
        this.row = option.row || 20,      //����
        this.col = option.col || 30,      //����
        this.size = option.size || 25,     //���еĿ�߶���ͬ
        this.map=null
  }

  //��Ⱦ��ҳ����
  Map.prototype.render = function () {
        var div = document.createElement("div");
        //��¼��map,������߼�ʵ��
        this.map=div;
    //��λ����Ϊ��Զ�λ,�����food,�߶���ͨ�����Զ�λ��������
        div.style.position="relative";
        div.style.backgroundColor=this.color;
        div.style.width=this.size*this.col+"px";
        div.style.height=this.size*this.row+"px";
        window.document.body.appendChild(div)
  };

         window.Map = Map

})(window);