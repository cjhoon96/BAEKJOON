public class Casting {

	public static void main(String[] args) {
		double a = 1.1;
//		int b = 1.1;					// 오류가 난다. 1.1을 int로 하는 경우 데이터 손실이 일어나기 때문에 자동으로 int로 casting 해주지 않는다.
		int b = (int) 1.1;				// 따라서 int라고 명시적으로 표기해 준다.
		System.out.println("a = " + a);
		System.out.println("b = " + b);
		
		// int to String
		String f = Integer.toString(b);
		System.out.println("f = " + f);
		
		//.getClass() 변수의 데이터 타입을 불러온다.
		System.out.println(f.getClass()); //int double에는 오류 왜?	Cannot invoke getClass() on the primitive type int
	}

}
