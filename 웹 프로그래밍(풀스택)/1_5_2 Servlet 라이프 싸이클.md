``` java 
package examples;


import java.io.IOException;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LifeCycleServlet
 */
@WebServlet("/LifeCycleServlet")
public class LifeCycleServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LifeCycleServlet() {
        System.out.println("LifeCycleServlet 생성!!");
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init 호출!!");
	}

	/**
	 * @see Servlet#destroy()
	 */
	public void destroy() {
		System.out.println("destroy 호출!!");
	}

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("service 호출!!");
	}

}
```

LifeCycleServlet 생성!!  
init 호출!!  
service 호출!!  



해당 URL로 클라이언트가 서버에게 요청 한다. 그럼 서버는 URL을 받아 LifeCycle이라는 URL 매핑 = LifeCycleServlet 이라는 정보를 알아냈을 것이다.  
이 해당 클래스가 메모리에 존재하는지 확인한다. 메모리에 존재 하지 않다면 이 객체를 생성해 메모리에 올려준다.  

최초로 LifeCycleServlet 을 호출 하면 서버는 이게 메모리에 없다라고 판단을 하고 LifeCycleServlet을 생성하게 된다.   
이때 **LifeCycleServlet 생성!!**이 출력된다.  
이후 init() 메서드와 service()라는 메서드가 호출 된다.   
하지만 destroy() 메서드는 아직 호출되지 않고 있는 것을 알 수 있다.  

여기서 브라우저를 새로 고침 하면 초기 실행과 달리 **LifeCycleServlet 생성!! init 호출!!**은 출력되지 않고 **service 호출!!** 만 출력되는 것을 볼 수 있다.  


서블릿은 서버에 서블릿 객체를 여러 개 만들지 않는다. 요청이 들어올때 마다 매번 생성하는 것을 반복하는게 아니라  
실제 요청된 객체가 메모리에 있는지 여부를 체크하고 있다면 service() 메서드만 호출한다.  

여기서 servlet을 수정하고 저장하게 되면 기존에 만들어 둔 메모리에 올라가 있는 서블릿 객체는 더이상 사용될 수 없다.   
따라서 새로 고침을 할 경우 destroy() 메서드가 호출 되어 **destroy 호출!!**이 출력되고   
메모리가 더이상 존재하지 않아 **LifeCycleServlet 생성!! init 호출!! service 호출!!** 가 출력되게 된다.  



*	WAS는 서블릿 요청을 받으면 해당 서블릿이 메모리에 있는지 확인
*	if (메모리에 없음) {  
	-해당 서블릿 클래스를 메모리에 올림    
	-init() 메소드를 실행    
	}  
	-service()메소드를 실행  

*	was가 종료되거나, 웹 어플리케이션이 새롭게 갱신될 경우 destroy() 메소드가 실행