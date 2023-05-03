@Controller
public class UserLoginController {
    
	@GetMapping("/userlogin/{userId}")
	public String  memberLoginForm() {
		System.out.println("로그인 요청");
        System.out.println("로그인 요청");


        System.out.println(userId);
        System.out.println(userId);
       
		return "redirect:/main";
	};
}
