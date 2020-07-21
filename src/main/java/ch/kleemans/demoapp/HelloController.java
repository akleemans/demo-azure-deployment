package ch.kleemans.demoapp;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

  @CrossOrigin
  @GetMapping("/api/hello")
  public String sayHello(@RequestParam String name) {
    return "Hello " + name + "!";
  }
}
