let score = 0;


const lessons = {


observe: {

title:"👀 观察物体岛",

content:`

<div class="lesson-card">

<h3>今天学习：</h3>

<p>
从不同方向观察同一个物体，
看到的形状可能不同。
</p>


<p>
例如：
从前面看杯子，
看到杯口和杯身；
从上面看，
可能只看到圆形。
</p>


<button onclick="startQuiz('observe')">
开始挑战
</button>

</div>

`

},




calculate: {

title:"🚌 混合运算岛",

content:`

<div class="lesson-card">

<h3>运算小秘诀</h3>

<p>
① 只有加减或只有乘除：
从左往右算。
</p>

<p>
② 有乘除和加减：
先算乘除。
</p>


<p>
③ 有括号：
先算括号里面。
</p>


<button onclick="startQuiz('calculate')">
开始挑战
</button>


</div>

`

},




length: {

title:"📏 长度探险岛",

content:`

<div class="lesson-card">

<h3>长度单位</h3>

<p>
毫米(mm)、厘米(cm)、分米(dm)、米(m)、千米(km)
</p>


<p>
生活中：
银行卡厚度≈毫米<br>
课桌高度≈厘米/米<br>
城市距离≈千米
</p>


<button onclick="startQuiz('length')">
开始挑战
</button>


</div>

`

},




multiply:{

title:"🚀 乘法能源岛",

content:`

<div class="lesson-card">

<h3>多位数乘一位数</h3>


<p>

例如：

23 × 4

可以拆成：

20×4 + 3×4

</p>


<p>

80+12=92

</p>


<button onclick="startQuiz('multiply')">
开始挑战
</button>


</div>

`

},




angle:{

title:"📐 线角机械城",

content:`

<div class="lesson-card">

<h3>认识角</h3>


<p>
锐角 ＜ 直角 ＜ 钝角
</p>


<p>
角的大小，
看两条边张开的程度。
</p>


<button onclick="startQuiz('angle')">
开始挑战
</button>


</div>

`

},




fraction:{

title:"🍕 分数美食街",

content:`

<div class="lesson-card">

<h3>认识分数</h3>


<p>

一张披萨平均分成4份。

吃掉1份：

就是：

1/4

</p>


<p>

分母表示平均分成几份。

分子表示取了几份。

</p>


<button onclick="startQuiz('fraction')">
开始挑战
</button>


</div>

`

}


};







function startGame(){


score = 0;


document.getElementById("score")
.innerText = score;


alert(
"欢迎来到数学岛！选择一座岛开始冒险吧！"
);


}







function openLesson(type){


let panel =
document.getElementById("lessonPanel");


let lesson =
lessons[type];



panel.innerHTML =

`

<h2>
${lesson.title}
</h2>

${lesson.content}

`;



panel.scrollIntoView({

behavior:"smooth"

});


}









const questions = {


observe:[

{

q:"从杯子上方观察，最容易看到什么？",

a:[
"圆形杯口",
"杯子的侧面",
"杯子的底部"
],

correct:0

},


{

q:"长方体有几个面？",

a:[
"4个",
"6个",
"8个"
],

correct:1

}

],





calculate:[

{

q:"24-13+18等于多少？",

a:[
"29",
"31",
"11"
],

correct:0

},

{

q:"5×6+3应该先算什么？",

a:[
"5×6",
"6+3",
"5+3"
],

correct:0

}

],





length:[

{

q:"银行卡厚度应该使用什么单位？",

a:[
"毫米",
"千米",
"米"
],

correct:0

},


{

q:"城市之间距离通常使用什么单位？",

a:[
"厘米",
"毫米",
"千米"
],

correct:2

}

],





multiply:[

{

q:"23×4是多少？",

a:[
"92",
"84",
"102"
],

correct:0

}

],






angle:[

{

q:"90°的角叫什么？",

a:[
"锐角",
"直角",
"钝角"
],

correct:1

}

],






fraction:[

{

q:"一个披萨平均分成4份，吃1份是多少？",

a:[
"1/4",
"4/1",
"1/2"
],

correct:0

}

]


};






let currentQuestions=[];

let currentIndex=0;







function startQuiz(type){


currentQuestions =
questions[type];


currentIndex=0;


showQuestion();


}








function showQuestion(){


let panel =
document.getElementById("lessonPanel");


if(currentIndex >= currentQuestions.length){


panel.innerHTML=

`

<h2>
🎉 挑战完成！
</h2>


<p>
获得10颗星！
</p>


<button onclick="addScore()">
领取奖励
</button>


`;

return;


}




let q =
currentQuestions[currentIndex];



panel.innerHTML=

`

<h2>
数学挑战
</h2>


<h3>
${q.q}
</h3>


${q.a.map(
(item,index)=>

`

<button class="lesson-card"

onclick="answer(${index})">

${item}

</button>

`

).join("")}


`;



}









function answer(index){


let q =
currentQuestions[currentIndex];



if(index===q.correct){


alert("回答正确 ⭐");


score +=5;


document.getElementById("score")
.innerText = score;


}

else{


alert(
"再想一想哦 🤔"
);

}



currentIndex++;


showQuestion();


}







function addScore(){


score +=10;


document.getElementById("score")
.innerText = score;


alert(
"聪聪奖励你10颗星！"
);


}
