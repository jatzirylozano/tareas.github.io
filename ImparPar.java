import java.util.Scanner;
/**
 *
 * @author User
 */
public class ImparPar {
    
    
       public static boolean esPar(int numero) {
        return numero % 2 == 0;
    }
       
    public static void main(String[] args) {
         int Numero;
        System.out.println("Escribe un número para saber si es par o impar:");
        Scanner numero = new Scanner(System.in);
        Numero = numero.nextInt();
        
        if (esPar(Numero)) { 
            System.out.println("Si es par");
        }else{
            System.out.println("No es par");
        }
    }
}
