package org.example.Controller;


import org.example.Repo.UserRepo;
import org.example.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
// import java.util.logging.Logger;

@RestController
@RequestMapping("/aditya/Users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepo ur;

    // Creating Data  (gets data from frontend and then stores it in database)..
    @PostMapping
    public User createData(@RequestBody User user)
    {
        System.out.println("I did CreateUser...");
        return ur.save(user);
    }

    // Reading Data (gives Data to Frontend...)
    @GetMapping
    public List<User> GetData()
    {
        System.out.println("I did : Giving Data to Frontend...");
        return ur.findAll();
    }


//    Updating
    @PutMapping("/{name}")
    public User AppleDate(@PathVariable String name, @RequestBody User appleDate_User)
    {
        User user = ur.findByName(name);
        if(user != null)
        {
            user.setName(appleDate_User.getName());
            user.setAge(appleDate_User.getAge());
            user.setCourse(appleDate_User.getCourse());
            user.setSubject(appleDate_User.getSubject());
            System.out.println("I did Update...");

            return ur.save(user);
        }
        return null;
    }


//   Deleting Data..
    @DeleteMapping("/{name}")
    public void DeleteTheNigga(@PathVariable String name)
    {
       ur.deleteByName(name);
        System.out.println("I did Delete...");
    }



}
