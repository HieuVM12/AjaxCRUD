using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AjaxCRUDProject.Models
{
    public class Employee
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage ="Bạn chưa nhập tên")]
        [DisplayName("Tên")]
        [Column(TypeName ="nvarchar(20)")]
        public string Name { get; set; }
        
        [Required(ErrorMessage = "Bạn chưa nhập địa chỉ")]
        [DisplayName("Địa chỉ")]
        [Column(TypeName = "nvarchar(100)")]
        public string Address { get; set; }

        [Required(ErrorMessage = "Bạn chưa nhập Email")]
        [DisplayName("Email")]
        [Column(TypeName = "nvarchar(100)")]
        [EmailAddress(ErrorMessage = "Email không hợp lệ")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Bạn chưa nhập số điện thoại")]
        [DisplayName("Số điện thoại")]
        [Column(TypeName = "nvarchar(11)")]
        [RegularExpression("([0][0-9]+)", ErrorMessage = "Nhập đúng số điện thoại")]
        [StringLength(10, MinimumLength  = 10, ErrorMessage = "Số điện thoại phải có 10 số")]
        public string Phone { get; set; }
        public DateTime CreatedDateTime { get; set; } = DateTime.Now;
    }
}
