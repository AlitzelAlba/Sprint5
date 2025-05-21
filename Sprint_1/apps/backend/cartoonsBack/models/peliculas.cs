namespace cartoonsBack.Models
{
  public class cartoons
  {
    public int Id { get; set; }
    public string Title { get; set; } = null!;
    public string CartoonDescription { get; set; } = null!;
    public string Genre { get; set; } = null!;
    public DateTime ContentYear { get; set; }
    public string Rating { get; set; } = null!;
    public string Duration { get; set; } = null!;
    public string CoverImage { get; set; } = null!;
    public string VideoUrl { get; set; } = null!;

  }
}