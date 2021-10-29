# 버전에 따른 Servlet 작성 방법

1. Servlet 3.0 spec 이상에서 사용하는 방법
    * web.xml 파일을 사용하지 않는다.
    * 자바 어노테이션(annotation)을 사용한다.
    * 앞에서 실습했던 first web에서 사용한다.
2. Servlet 3.0 spec미만에서 사용하는 방법
    * servlet을 등록할 때 web.xml 파일에 등록한다.


# Servlet 3.1 실습
``` java
package exam;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TenServlet
 */
@WebServlet("/Ten")
public class TenServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TenServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		out.println("<h1>1-10 출력!!<h1>");
        for(int i = 1; i <= 10; i++) {
            out.println("<br>" + i);
        }
	}

}
```
HttpServletrequest 객체 안에는 요청 내용이 추상화 되어 들어있으며 HttpServletResponse 객체에는 응답에 대한 내용이 추상화 되어 들어있다.
따라서 우리는 response 객체 안에 응답할 내용을 저장해 주어야 한다.
setContentType은 우리가 응답하는 내용의 type이 무엇인지 지정해 주는 메소드이다. 
해당 실습에서는 괄호 안에 
```java 
"text/html;charset=utf-8"
```
를 넣어 주어 이 text는 html이며 charater를 utf-8 이라는 방식으로 보낸다는 것을 알려준다.
또한 response 객체 안의 getWriter()라는 메소드를 통해 PrintWriter라는 객체를 return 받을 수 있다. 
이제 이 out이라고 지정한 통로를 통해 출력을 해준다.

# Servlet 2.5 실습
``` java
package exam;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TenServlet
 */
public class TenServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TenServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		out.println("<h1>1-10 출력!!<h1>");
        for(int i = 1; i <= 10; i++) {
            out.println("<br>" + i);
        }
	}

}
```
2.5 버전으로 만들어진 Servlet에는 
```java 
@WebServlet("/Ten") 
```
이 없는것을 확인할 수 있다.
URL이 /Ten 이라는 요청이 들어오면 web.xml에서 URL mapping에서 찾아네고 여기서 찾지 못하면 404라는 페이지를 띄운다.
만약 존재 한다면 servlet-name이라는 엘리먼트를 확인하고 실제 servlet이라는 태그 안에서 같은 이름이 있는지 확인한다.
그래서 이 서블릿을 찾아 실제로 실행시킬 서블릿이 누구인지 확인하는것이다.
하지만 3.0 이상의 버전에서는 이런 일들을 어노테이션이 대신해 준다.
그 이전 버전에서는 반드시 서블릿이 하나 만들어지면 web.xml에 해당 서블릿을 반드시 등록해야 찾아서 실행 시킬 수 있는 것이다.