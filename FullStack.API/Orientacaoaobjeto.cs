namespace FullStack.API
{
    public class Orientacaoaobjeto
    {
        public Orientacaoaobjeto(int num1, int num2, int num3) 
        {
            this.num1 = num1;
            this.num2 = num2;
            this.num3 = num3;
               
        }
        public int num1 { get; }
        public int num2 { get; }
        public int num3 { get; }

        public int produto => num1 * num2 * num3;
    }
}