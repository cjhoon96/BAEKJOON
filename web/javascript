<ol start = '3'>
<h2> <li> JavaScript </li></h2>
<p><b>자바스크립트</b>(JavaScript)는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다.
</p>
<p>
자바스크립트는 본래 넷스케이프 커뮤니케이션즈 코퍼레이션의 브렌던 아이크(Brendan Eich)가 처음에는 모카(Mocha)라는 이름으로, 나중에는 라이브스크립트(LiveScript)라는 이름으로 개발하였으며, 최종적으로 자바스크립트가 되었다.
</p>
<p>
자바스크립트가 썬 마이크로시스템즈의 자바와 구문이 유사한 점도 있지만, 이는 사실 두 언어 모두 C 언어의 기본 구문에 바탕을 뒀기 때문이고, 자바와 자바스크립트는 직접적인 관련성이 없다. 이름과 구문 외에는 자바보다 셀프나 스킴과 유사성이 많다.
</p>
<p>
자바스크립트는 ECMAScript의 표준 사양을 가장 잘 구현한 언어로 인정받고 있으며 ECMAScript 5 (ES5) 까지는 대부분의 브라우저에서 기본적으로 지원되었으나 ECMAScript 6 이후부터는 브라우저 호환성을 위해트랜스파일러로 컴파일된다.
</p>
</ol>

<ol type="I">
<h3><li>script 태그</li></h3>
html의 태그로 사이의 코드를 JavaScript코드로 읽도록 만들어준다.<br><br>
<div class="ex">
    ex)
    <strong><pre><xmp>
<script>
document.write(1+1)
</script>
    </xmp></pre></strong>
<strong>=></strong>
<script>
    document.write(1+1)
</script>
</div>
<br><br>

<h3><li>웹브라우저</li></h3>


<h3><li>Comparison operator & Boolean</li></h3>
<ol type="i">
    <h4><li>===, ==, !=, !==</li></h4>
    ==와 !=는 변수의 타입과 상관 없이 값이 같은지를 확인하는 연산자이며 ===와 !==는 변수의 타입까지 비교를 하는 연산자이다.<br>
    <div class="ex">
    <strong>ex)</strong>
    <strong><pre><xmp>
<script>
document.write(1==='1')
document.write('<br/>')
document.write(1=='1')
document.write('<br/>')
document.write('Hellow'==='hellow')
</script>
    </xmp></pre></strong>
    <strong>==></strong><br>
    <strong><script>
        document.write(1==='1'
        )
        document.write('<br/>')
        document.write(1=='1')
        document.write('<br/>')
        document.write('Hellow'==='hellow')
    </script></strong>
    </div>

    <h4><li><, >, <=, >=</li></h4>
    파이썬과 동일한 효과를 갖는 비교 연산자이다.<br>

</ol>


<h3><li>Conditional Statements</li></h3>
<div class='ex'><strong>
    <pre>
if(조건){

실행

} else{

실행

}
    </pre>
    조건문이 사실인 경우 아래의 실행문을 실행하며 그렇지 않은 경우 else문의 실행문을 실행한다.
</strong></div>

<h3><li>Array</li></h3>
원소들의 배열 첫번째 인덱스는 0이다.<br><br>

<div class='ex'>
    <strong>ex)</strong>
    <strong><pre><xmp>
var arr = ['b', 'c', 'd'];                              (['c', 'd'] 어래이를 arr 변수에 할당)
var brr = ['f', 'g']

document.write('arr = [' + arr + '] <br>');

arr.push('e');                                          ( arr의 맨 마지막에 원소 추가 ) 
document.write('arr = [' + arr + '] <br>');

arr.unshift('a');                                       ( arr의 맨 앞에 원소 추가 )
document.write('arr = [' + arr + '] <br>');

arr.splice(1, 0, 'x', 'y', 'z');                        ( arr.splice(index, count, element) arr의 index의 위치에 element를 추가 )
document.write('arr = [' + arr + '] <br>');               ( 추가의 경우 count는 0을 넣으며 element는 여러개가 가능하다. )

arr.splice(1, 3);                                       ( arr.splice(index, count) arr의 index의 위치부터 count개를 삭재 )
document.write('arr = [' + arr + '] <br>');

var a = arr.pop();                                      ( arr의 마지막 요소를 제거 후 그 값을 반환 )
document.write('arr = [' + arr + '] a = ' + a + '<br>');

var b = arr.shift();                                    ( arr의 첫번째 요소를 제거 후 그 값을 반환 )
document.write('arr = [' + arr + '] b = ' + b + '<br>');

document.write('length = ' + arr.length + '<br>')         ( arr의 길이를 반환 )

arr = arr.concat(brr);                                  ( arr의 뒤에 brr을 합쳐준다. )
document.write('arr = [' + arr + '] <br>');

var arr_1 = arr.join('/');                              ( 파이썬의 join과 비슷한 기능을 한다. )
document.write(arr_1);

arr.reverse();                                          ( 어레이를 뒤집어 준다. )
document.write('arr = [' + arr + '] <br>');

arr.sort();                                             ( 어레이를 오름차순으로 정렬 )
document.write('arr = [' + arr + '] <br>');

arr = arr.slice(0, 3)                                   ( arr.slice(s, e) arr를 s부터 e-1 인덱스의 원소까지 잘라서 반환 )
document.write('arr = [' + arr + '] <br>');             ( e 값이 없을 경우 s 부터 마지막 원소 까지 잘라서 반환)

    </xmp></pre></strong>
<strong>==> <br>
    <script>
var arr = ['b', 'c', 'd'];
var brr = ['f', 'g']

document.write('arr = [' + arr + '] <br>');

arr.push('e');
document.write('arr = [' + arr + '] <br>');

arr.unshift('a');                         
document.write('arr = [' + arr + '] <br>');

arr.splice(1, 0, 'x', 'y', 'z');           
document.write('arr = [' + arr + '] <br>');     

arr.splice(1, 3);                                  
document.write('arr = [' + arr + '] <br>');

var a = arr.pop();                              
document.write('arr = [' + arr + '] a = ' + a + '<br>');

var b = arr.shift();                                
document.write('arr = [' + arr + '] b = ' + b + '<br>');

document.write('length = ' + arr.length + '<br>')     

arr = arr.concat(brr);                              
document.write('arr = [' + arr + '] <br>');

var arr_1 = arr.join('/');                            
document.write('  ' + arr_1 +  '<br>');

arr.reverse();                                        
document.write('arr = [' + arr + '] <br>');

arr.sort();                                          
document.write('arr = [' + arr + '] <br>');

arr = arr.slice(0, 3)                             
document.write('arr = [' + arr + '] <br>');      
    </script></strong>
</div>
<br><br>


<h3><li>Loop Statements</li></h3>
<ol type='i'>
    <h4><li>while 문</li></h4>
    <div class='ex'><strong>
        <pre>
while(조건문){

실행문

}
        </pre>
    
        조건문이 사실인 동안 아래 실행문을 실행한다. 조건에서 벗어난 경우 탈출한다.
    </strong></div><br><br>


    <h4><li>for 문</li></h4>


</ol>


<h3><li>Function</li></h3>
<div class='ex'><strong><pre>
function f(-Parameter-){

-실행문- ;

return -결과- ;
}

f(Arguments);
</pre></strong></div>


<h3><li>Object</li></h3>
파이썬의 dictionary 와 비슷한 개념<br><br>
<div class='ex'><strong>
    <pre>
var object = {

"a":"A",

"b":"B"

};
    </pre>

    <pre>
for(var key in object){

document.write(key + ':' + object[key])

};
    </pre>
    ==><br>
    <script>
    var object = {
        "a":"A",
        "b":"B"
    };
    for(var key in object){                
        document.write(key + ':' + object[key] + '<br>')
    };
    </script>
    
    for문을 통해 object의 key값을 하나씩 불러올 수 있다.
</strong></div><br>


<h3><li>Method</li></h3>
object 안에 함수의 이름을 key로 value를 함수의 정의로 집어 넣은 것으로 object와 관련된 함수인 경우 매우 유용하다.<br>
<div class='ex'><strong>
    <pre><xmp>
var object = {"a":"A", "b":"B"};

object.shoAll = function(){

for(var key in this){                
document.write(key + ':' + this
[key] + '<br>')
};

}

object.shoAll()
    </xmp></pre>
    ==><br>
    <script>
    var object = {"a":"A", "b":"B"};

    object.showAll = function(){

        for(var key in object){                
        document.write(key + ':' + object[key] + '<br>')
        };

    }

    object.showAll()
    </script>
    
</strong></div><br>



<h3><li>Refactoring</li></h3>
</ol>