class InvoiceService
{
    public void PrintInvoice(string name, decimal price)
    {
        Console.WriteLine($"Item: {name}, | Price: {price:C}");
    }

    public void PrintInvoice(string name, decimal price, int discount)
    {

        decimal FinalPrice = price - price * discount / 100.0m;

        Console.WriteLine($"Item: {name}, | Price: {price:C} | Discount = {discount}% | Discount Price: {FinalPrice}");
    }
}

class Program
{
    static void Main()
    {
        InvoiceService Service = new InvoiceService();

        string Item1 = "Book";
        decimal Item1Price = 15.50m;
        Service.PrintInvoice(Item1, Item1Price);

        string Item2 = "Keyboard";
        decimal Item2Price = 49.99m;
        int Item2Discount = 20;
        Service.PrintInvoice(Item2, Item2Price, Item2Discount);
    }
}