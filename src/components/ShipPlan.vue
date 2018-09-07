<template>
    <div>
      <div id="leftDIV"></div>
      <div id="rightDIV" class="layoutRight"></div>
    </div>
</template>

<script>
  export default{
    name:'shipPlan',
    mounted:function() {
      // 动态设置canvas高度，适应任何屏幕
      window.onload = function () {
        let canvas = document.createElement("canvas")
        canvas.style.border = "solid 1px black"
        canvas.style.cssFloat = "right"
        canvas.id = "canvas"
        let box = document.getElementById("rightDIV")
        box.appendChild(canvas)
        //设置宽高一定要在canvas节点添加之后
        document.getElementById("canvas").width = 2000
        document.getElementById("canvas").height = $(window).height()-100

        //--------------------右上方----------------------
        let ctx = canvas.getContext("2d")
        // 船头
        let bowImg = new Image()
        bowImg.onload = function() {
          ctx.drawImage(bowImg, 0, 0)
        }
        bowImg.src = "../../static/picture/bow.png"
        let x=61
        for(let i=0;i<9;i++){
          //船舱
          ctx.strokeStyle = "red";
          ctx.strokeRect(x, 15, 190, 132);
          //编号
          ctx.fillText((i+1).toString(),x+80,30)
          //船底
          ctx.fillStyle = "#D0D0D0"
          ctx.fillRect(x,148,190,6)
          ctx.fillStyle = "#000000"
          ctx.fillRect(x,154,190,23)
          x+=190
        }
        // 船尾
        let sternImg = new Image()
        sternImg.onload = function() {
          ctx.drawImage(sternImg, 1771, 13)
        }
        sternImg.src = "../../static/picture/stern.png"
        // 分割线
        ctx.moveTo (0,200)          //设置起点状态
        ctx.lineTo (2000,200)       //设置末端状态
        ctx.lineWidth = 2           //设置线宽状态
        ctx.strokeStyle = "#000000" //设置线的颜色状态
        ctx.stroke()               //进行绘制
      }
    }
  }
</script>

<style>
  .layoutRight {
    float: right;
    height: 100%;
    width: 50%;
    margin-right:2px;
    margin-top:0px;
    overflow:auto;
    display: flex;
    align-items: center; /*定义body的元素垂直居中*/
  }
</style>
