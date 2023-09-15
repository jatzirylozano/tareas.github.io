import java.util.Scanner;
/**
 *
 * @author User
 */
public class PositivoNegativoCero {
    public static void main(String[] args) {
        int num1;
        
        Scanner Numero = new Scanner(System.in);
        System.out.println("Escribe un numero:");
        num1 = Numero.nextInt();
        
        if (num1 == 0){
            System.out.println("El numero es cero");
        }else if (num1 < 0){
            System.out.println("El numero es negativo");
      }else{
            System.out.println("El número es positivo");
        }
    
    }

}
